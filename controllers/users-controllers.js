const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const HttpError = require("../models/http-error");
const User = require("../models/user");
const Product = require("../models/product");
const mongoose = require("mongoose");

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (err) {
    const error = new HttpError("Not saved.", 500);
    return next(error);
  }
  res.json({ users: users.map((u) => u.toObject({ getters: true })) });
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError(
      "Invalid inputs passed, please check your data.",
      422
    );
    return next(error);
  }
  const { name, email, password, type } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Some error occured.", 500);
    return next(error);
  }
  if (existingUser) {
    const error = new HttpError("User existeing already", 422);
    return next(error);
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError(
      "Could not create user, please try again.",
      500
    );
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    password: hashedPassword,
    type,
    stores: [],
    favorites: [],
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Signup failed, please try again.", 500);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      {
        userId: createdUser.id,
        email: createdUser.email,
        userType: createdUser.type,
      },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new HttpError("Signup failed, please try again.", 500);
    return next(error);
  }

  res.status(201).json({
    userId: createdUser.id,
    email: email,
    favorites: createdUser.favorites,
    token: token,
  });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Not saved.", 500);
    return next(error);
  }
  if (!existingUser) {
    const error = new HttpError("Invalid cridentials", 403);
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError(
      "Could not create user, please try again.",
      500
    );
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError("Invalid cridentials", 403);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      {
        userId: existingUser.id,
        email: existingUser.email,
        userType: existingUser.type,
      },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );
  } catch (err) {
    console.error(err);
    const error = new HttpError("Login failed, please try again.", 500);
    return next(error);
  }
  console.log(existingUser)
  res.json({
    userId: existingUser.id,
    email: existingUser.email,
    userType: existingUser.type,
    favorites: existingUser.favorites,
    token: token,
  });
};

const getFavorites = async (req, res, next) => {
  const userId = req.params.uid;
  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    const error = new HttpError("Not saved.", 500);
    return next(error);
  }
  if (!user) {
    const error = new HttpError("Could not find user for provided id.", 404);
    return next(error);
  }
  console.log(user);
  let favorites=[];
  for(let i=0;i<user.favorites.length;i++){
    let product;
    try {
      product = await Product.findById(user.favorites[i]);
    } catch (err) {
      const error = new HttpError("Not saved.", 500);
      return next(error);
    }
    if(product){
      favorites.push(product);
    }
  }
  res.json({ favorites: favorites });
};

const addFavorite = async (req, res, next) => {
  const productId = req.params.pid;

  let user;
  try {
    user = await User.findById(req.userData.userId);
  } catch (err) {
    console.error(err);
    const error = new HttpError("Fing user failed, please try again.", 500);
    return next(error);
  }
  if (!user) {
    const error = new HttpError("Could not find user for provided id.", 404);
    return next(error);
  }
  console.log(user);
  let product;
  try {
    product = await Product.findById(productId);
  } catch (err) {
    const error = new HttpError("Find product failed, please try again.", 500);
    return next(error);
  }

  if (!product) {
    const error = new HttpError("Could not find store for provided id.", 404);
    return next(error);
  }

  if (user.favorites.includes(product._id)) {
    const error = new HttpError("Product already exist on favorites.", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    user.favorites.push(product);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    const error = new HttpError("Not yyyyysaved.", 500);
    return next(error);
  }
  res.status(201).json({
    userId: user.id,
    email: user.email,
    favorites: user.favorites,
  });
};

const removeFavorite = async (req, res, next) => {
  const productId = req.params.pid;

  let user;
  try {
    user = await User.findById(req.userData.userId);
  } catch (err) {
    const error = new HttpError("Fing user failed, please try again.", 500);
    return next(error);
  }
  if (!user) {
    const error = new HttpError("Could not find user for provided id.", 404);
    return next(error);
  }
  let product;
  try {
    product = await Product.findById(productId);
  } catch (err) {
    const error = new HttpError("Find product failed, please try again.", 500);
    return next(error);
  }

  if (!product) {
    const error = new HttpError("Could not find store for provided id.", 404);
    return next(error);
  }
  if (!user.favorites.includes(product._id)) {
    const error = new HttpError("Product doesnt exist on favorites.", 404);
    return next(error);
  }
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    user.favorites.pull(product);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    const error = new HttpError("Not yyyyysaved.", 500);
    return next(error);
  }
  res.status(201).json({
    userId: user.id,
    email: user.email,
    favorites: user.favorites,
  });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
exports.getFavorites = getFavorites;
exports.addFavorite = addFavorite;
exports.removeFavorite = removeFavorite;
