const router = require("express").Router();
const cargo = require("../controllers/cargo_personal");

router.get("/", cargo.getData)

module.exports = router