const router = require("express").Router();
const personal = require("../controllers/personal");

router.get("/", personal.getSigPersonal)

module.exports = router 