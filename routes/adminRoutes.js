const express = require("express");
const router = express.Router();
const {
  getAllShops,
} = require("../controllers/adminController");

router.route("/getAllShops").post(getAllShops);

module.exports = router;
