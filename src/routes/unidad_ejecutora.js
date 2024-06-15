const router = require("express").Router();
const ejecutora = require("../controllers/unidad_ejecutora");

router.get("/", ejecutora.getData)

module.exports = router