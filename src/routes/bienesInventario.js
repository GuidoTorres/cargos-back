const router = require("express").Router();
const bienes = require("../controllers/bienesInventario");

router.get("/", bienes.getConsultaBienesSiga)
router.get("/prueba", bienes.getBienesPrueba)
router.get("/dependencias", bienes.getDependencias)
router.get("/ubicaciones", bienes.getUbicacion)


module.exports = router