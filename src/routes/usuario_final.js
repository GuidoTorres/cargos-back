const router = require("express").Router();
const usuario = require("../controllers/usuario_final");

router.get("/", usuario.getData)

module.exports = router