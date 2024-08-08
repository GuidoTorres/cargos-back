const router = require("express").Router();
const bienes = require("../controllers/bienesInventario");

router.get("/", bienes.getBienes)
router.get("/prueba", bienes.getBienesPrueba)


module.exports = router