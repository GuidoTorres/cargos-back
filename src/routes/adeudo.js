const router = require("express").Router();
const adeudos = require("../controllers/adeudo");

router.get("/", adeudos.getData)
router.post("/", adeudos.postDocumento)

module.exports = router