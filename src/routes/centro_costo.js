const router = require("express").Router();
const centro_costo = require("../controllers/centro_costo");

router.get("/", centro_costo.getData)

module.exports = router