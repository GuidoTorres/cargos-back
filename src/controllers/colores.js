const { models } = require("./../../config/database");

const getColores = async (req, res, next) => {
  try {
    const get = await models.SIG_COLORES.findAll();
    return res.status(200).json({ data: get });
  } catch (error) {
    res.status(500).json();
    console.log(error);
  }
};

module.exports = {
  getColores,
};