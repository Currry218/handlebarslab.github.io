const express = require("express");
const controller = require("../controllers/task4Controller");
const router = express.Router();
// router.get("/", require("../controllers/task4Controller").show);
router.get("/", controller.show);
router.get("/:name", controller.showDetails);

module.exports = router;