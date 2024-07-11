const router = require("express").Router();
const etiquetas = require("../controllers/etiquetas");

router.get("/", etiquetas.getEtiquetas)

module.exports = router