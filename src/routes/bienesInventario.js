const router = require("express").Router();
const bienes = require("../controllers/bienesInventario");

router.get("/", bienes.getConsultaBienesSiga)
router.get("/prueba", bienes.getBienesPrueba)
router.get("/dependencias", bienes.getDependencias)
router.get("/ubicaciones", bienes.getUbicacion)
router.get("/sbn", bienes.getConsultaBienesSigaSbn)
router.get("/marcas", bienes.getMarcas)
router.get("/filtrados", bienes.getBienesFiltrados)


module.exports = router