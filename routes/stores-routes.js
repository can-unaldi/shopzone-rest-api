const express = require("express");
const { check } = require("express-validator");

const storesControllers = require("../controllers/stores-controllers");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.get("/", storesControllers.getStores);

router.get("/:sid", storesControllers.getStoreById);

router.get("/user/:uid", storesControllers.getStoresByUserId);

router.use(checkAuth);

router.post(
  "/",storesControllers.createStore);

router.patch(
  "/:sid",
  // [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  storesControllers.updateStore
);

router.delete("/:sid", storesControllers.deleteStore);

module.exports = router;
