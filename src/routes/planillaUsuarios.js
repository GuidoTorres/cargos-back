const router = require("express").Router();
const planilla = require("../controllers/planillaUsuarios");

router.get("/", planilla.getData)

module.exports = router 