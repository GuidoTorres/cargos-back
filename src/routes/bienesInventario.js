const router = require("express").Router();
const bienes = require("../controllers/bienesInventario");

router.get("/", bienes.getBienes)

module.exports = router