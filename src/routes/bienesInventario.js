const router = require("express").Router();
const bienes = require("../controllers/bienesInventario");

router.get("/", bienes.getConsultaBienesSiga)
router.get("/prueba", bienes.getBienesPrueba)


module.exports = router