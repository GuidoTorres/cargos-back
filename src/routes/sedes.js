const router = require("express").Router();
const sede = require("../controllers/sedes");

router.get("/", sede.getData)

module.exports = router