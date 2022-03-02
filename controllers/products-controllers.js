const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const Product = require("../models/product");
const User = require("../models/user");
const Store = require("../models/store");
const mongoose = require("mongoose");

const getProductById = async (req, res, next) => {
  const productId = req.params.pid;
  let product;
  try {
    product = await Product.findById(productId);
  } catch (err) {
    const error = new HttpError("Not saved.", 500);
    return next(error);
  }

  if (!product) {
    const error = new HttpError(
      "Could not find a product for the provided id.",
      404
    );
    return next(error);
  }

  res.json({ product: product.toObject({ getters: true }) });
};

const getProductsByStoreId = async (req, res, next) => {
  const storeId = req.params.sid;

  let storeWithProducts;
  try {
    storeWithProducts = await Store.findById(storeId).populate("products");
  } catch (err) {
    const error = new HttpError("Not saved.", 500);
    return next(error);
  }

  if (!storeWithProducts) {
    return next(
      new HttpError("Could not find products for the provided store id.", 404)
    );
  }

  res.json({
    storeTitle: storeWithProducts.title,
    storeDescription: storeWithProducts.description,
    storeOwner: storeWithProducts.owner,
    products: storeWithProducts.products.map((p) =>
      p.toObject({ getters: true })
    ),
  });
};

const createProduct = async (req, res, next) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return next(
  //     new HttpError("Invalid inputs passed, please check your data.", 422)
  //   );
  // }

  const { title, description, price, storeId } = req.body;

  const createdProduct = new Product({
    title,
    description,
    image: `https://picsum.photos/${
      Math.floor(Math.random() * (500 - 800)) + 500
    }`,
    price,
    store: storeId,
    owner: req.userData.userId,
  });
  let store;
  try {
    store = await Store.findById(storeId);
  } catch (err) {
    const error = new HttpError(
      "Creating store failed, please try again.",
      500
    );
    return next(error);
  }

  if (!store) {
    const error = new HttpError("Could not find store for provided id.", 404);
    return next(error);
  }

  if (store.owner.toString() !== req.userData.userId) {
    console.log(store.owner.toString(), "----", req.userData.userId);
    const error = new HttpError("You are not able to do this", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdProduct.save({ session: sess });
    store.products.push(createdProduct);
    await store.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    const error = new HttpError("Not yyyyysaved.", 500);
    return next(error);
  }
  res.status(201).json({ product: createdProduct.toObject({ getters: true }) });
};

const updateProduct = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data.", 422);
  }

  const { title, description, price } = req.body;
  const productId = req.params.pid;

  let product;
  try {
    product = await Product.findById(productId);
  } catch (err) {
    const error = new HttpError("Some error occured", 500);
    return next(error);
  }
  if (!product) {
    const error = new HttpError("No product.", 500);
    return next(error);
  }

  if (product.owner.toString() !== req.userData.userId) {
    const error = new HttpError("You are not allowed to do this.", 401);
    return next(error);
  }

  product.title = title;
  product.description = description;
  product.price = price;

  try {
    await product.save();
  } catch (err) {
    const error = new HttpError("Not saved.", 500);
    return next(error);
  }

  res.status(200).json({ product: product.toObject({ getters: true }) });
};

const deleteProduct = async (req, res, next) => {
  const productId = req.params.pid;

  let product;
  try {
    product = await Product.findById(productId).populate("store");
  } catch (err) {
    const error = new HttpError("Some error occured.", 500);
    return next(error);
  }

  if (!product) {
    const error = new HttpError("No product.", 500);
    return next(error);
  }

  if (product.owner.toString() !== req.userData.userId) {
    const error = new HttpError("You are not allowed to do this.", 401);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await product.remove({ session: sess });
    product.store.products.pull(product);
    await product.store.save({ session: sess });
    sess.commitTransaction();
  } catch (err) {
    const error = new HttpError("Not saved.", 500);
    return next(error);
  }

  res.status(200).json({ message: "Product deleted." });
};

exports.getProductById = getProductById;
exports.getProductsByStoreId = getProductsByStoreId;
exports.createProduct = createProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
