const router = require("express").Router();
const usuario = require("../controllers/usuario");

router.get("/", usuario.getUsuario)
router.post("/", usuario.postUsuario)
router.put("/:id", usuario.updateUsuario)
router.delete("/", usuario.deleteUsuario)

module.exports = router