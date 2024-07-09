const router = require("express").Router();
const adeudos = require("../controllers/adeudo");

router.get("/etiqueta", adeudos.getEtiquetas)

module.exports = router