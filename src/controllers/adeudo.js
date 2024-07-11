const { QueryTypes } = require("sequelize");
const sequelize = require("../../config/database3");
const { models } = require("./../../config/database3");

const getData = async (req, res, next) => {
  try {
    const get = await models.sig_sedes.findAll({
      attributes: ["sede", "nombre_sede"],
    });
    return res.status(200).json({ data: get });
  } catch (error) {
    res.status(500).json();
    console.log(error);
  }
};


module.exports = {
  getData,
  getEtiquetas,
  prueba,
};
