const express = require("express");
const controller = require("../controllers/task1Controller");
const router = express.Router();
router.get("/", require("../controllers/task1Controller").show);
router.get("/", controller.show);
module.exports = router;