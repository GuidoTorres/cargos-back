const { models } = require("./../../config/database");

const getMarcas = async (req, res, next) => {
  try {
    const get = await models.MARCA.findAll({attributes:["marca", "nombre"]});
    return res.status(200).json({ data: get });
  } catch (error) {
    res.status(500).json();
    console.log(error);
  }
};

module.exports = {
  getMarcas,
};