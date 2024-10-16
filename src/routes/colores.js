const router = require("express").Router();
const marcas = require("../controllers/colores");

router.get("/", marcas.getColores)

module.exports = router 