const express = require("express");
const controller = require("../controllers/task3Controller");
const router = express.Router();
router.get("/", require("../controllers/task3Controller").show);
router.get("/", controller.show);
module.exports = router;