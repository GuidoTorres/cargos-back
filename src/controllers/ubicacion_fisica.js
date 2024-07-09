const { QueryTypes } = require("sequelize");
const sequelize = require("../../config/database");
const { models } = require("./../../config/database");

const getData = async (req, res, next) => {
  try {
    const { tipo, cod_ubicac } = req.query;

    const get = await models.SIG_UBICAC_FISICA.findAll({
      // where: { cod_ubicac: cod_ubicac, tipo_ubicac: tipo },
      attributes:["cod_ubicac", "ubicac_fisica"]
    });
    return res.status(200).json({ data: get });
  } catch (error) {
    res.status(500).json();
    console.log(error);
  }
};

module.exports = {
  getData,
};
