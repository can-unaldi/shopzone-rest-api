const express = require("express");
const { check } = require("express-validator");

const productsControllers = require("../controllers/products-controllers");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.get("/:pid", productsControllers.getProductById);

router.get("/store/:sid", productsControllers.getProductsByStoreId);

router.use(checkAuth);

router.post(
  "/",productsControllers.createProduct);

router.patch(
  "/:pid",
  // [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  productsControllers.updateProduct
);

router.delete("/:pid", productsControllers.deleteProduct);

module.exports = router;
