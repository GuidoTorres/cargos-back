const router = require("express").Router();
const centro_costo = require("../controllers/centro_costo");

router.get("/", centro_costo.getData)
router.get("/all", centro_costo.getAll)

module.exports = router