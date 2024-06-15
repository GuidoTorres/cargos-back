const sequelize = require("../../config/database");
const { models } = require("./../../config/database");

const getData = async (req, res, next) => {
  try {
    const { centro, ubicac, anio } = req.query;
    const get = await models.SIG_CENTRO_COSTO.findAll({
        where:{CENTRO_COSTO: centro, ano_eje: anio},
    });


    return res.status(200).json({ data: {costo:get} });
  } catch (error) {
    res.status(500).json();
    console.log(error);
  }
};

module.exports = {
  getData,
};
