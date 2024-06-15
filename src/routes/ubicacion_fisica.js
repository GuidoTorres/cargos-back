const router = require("express").Router();
const ubicacion = require("../controllers/ubicacion_fisica");

router.get("/", ubicacion.getData)

module.exports = router