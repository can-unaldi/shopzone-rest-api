const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const Product = require("../models/product");
const Store = require("../models/store");
const User = require("../models/user");
const mongoose = require("mongoose");

const getStores = async (req, res, next) => {
  let stores;
  try {
    stores = await Store.find();
  } catch (err) {
    const error = new HttpError("Some error happened.", 500);
    return next(error);
  }
  res.json({ stores: stores.map((s) => s.toObject({ getters: true })) });
};

const getStoreById = async (req, res, next) => {
  const storeId = req.params.sid;
  let store;
  try {
    store = await Store.findById(storeId);
  } catch (err) {
    const error = new HttpError("Not finded.", 500);
    return next(error);
  }

  if (!store) {
    const error = new HttpError(
      "Could not find a store for the provided id.",
      404
    );
    return next(error);
  }

  res.json({ store: store.toObject({ getters: true }) });
};

const getStoresByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  let userWithStores;
  try {
    userWithStores = await User.findById(userId).populate("stores");
  } catch (err) {
    const error = new HttpError("Not finded.", 500);
    return next(error);
  }

  if (!userWithStores) {
    return next(
      new HttpError("Could not find stores for the provided user id.", 404)
    );
  }

  res.json({
    stores: userWithStores.stores.map((s) => s.toObject({ getters: true })),
  });
};

const createStore = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { title, description } = req.body;

  const createdStore = new Store({
    title,
    description,
    image: `https://picsum.photos/${
      Math.floor(Math.random() * (500 - 800)) + 500
    }`,
    owner: req.userData.userId,
    products: [],
  });
  console.log(req.userData.userId);
  let user;
  try {
    user = await User.findById(req.userData.userId);
  } catch (err) {
    const error = new HttpError(
      "Creating store failed, please try again.",
      500
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError("Could not find user for provided id.", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdStore.save({ session: sess });
    user.stores.push(createdStore);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    const error = new HttpError("Not yyyyysaved.", 500);
    return next(error);
  }
  res.status(201).json({ store: createdStore.toObject({ getters: true }) });
};

const updateStore = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data.", 422);
  }

  const { title, description } = req.body;
  const storeId = req.params.sid;

  let store;
  try {
    store = await Store.findById(storeId);
  } catch (err) {
    const error = new HttpError("Some error occured.", 500);
    return next(error);
  }

  if (store.owner.toString() !== req.userData.userId) {
    const error = new HttpError("You are not allowed to do this.", 401);
    return next(error);
  }

  store.title = title;
  store.description = description;

  try {
    await store.save();
  } catch (err) {
    const error = new HttpError("Some error occured.", 500);
    return next(error);
  }

  res.status(200).json({ store: store.toObject({ getters: true }) });
};

const deleteStore = async (req, res, next) => {
  const storeId = req.params.sid;

  let store;
  try {
    store = await Store.findById(storeId).populate("owner");
  } catch (err) {
    const error = new HttpError("Some error occured.", 500);
    return next(error);
  }

  if (!store) {
    const error = new HttpError("No store.", 500);
    return next(error);
  }

  if (store.owner.id !== req.userData.userId) {
    const error = new HttpError("You are not allowed to do this.", 401);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await store.remove({ session: sess });
    store.owner.stores.pull(store);
    await store.owner.save({ session: sess });
    sess.commitTransaction();
  } catch (err) {
    const error = new HttpError("Some error occured.", 500);
    return next(error);
  }

  res.status(200).json({ message: "Store deleted." });
};

exports.getStores = getStores;
exports.getStoreById = getStoreById;
exports.getStoresByUserId = getStoresByUserId;
exports.createStore = createStore;
exports.updateStore = updateStore;
exports.deleteStore = deleteStore;
