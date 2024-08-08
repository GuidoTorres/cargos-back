const router = require("express").Router();
const usuario = require("../controllers/usuario_final");

router.get("/", usuario.getData)
router.post("/", usuario.postUsuario)
router.put("/:id", usuario.updateUsuario)
router.delete("/", usuario.deleteUsuario)
module.exports = router