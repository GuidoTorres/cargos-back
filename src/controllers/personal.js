const { models } = require("./../../config/database");

const getSigPersonal = async (req, res, next) => {
  try {
    const get = await models.sig_personal.findAll({attributes:["empleado", "docum_ident", "nombre_completo"]});
    return res.status(200).json({ data: get });
  } catch (error) {
    res.status(500).json();
    console.log(error);
  }
};

module.exports = {
  getSigPersonal,
};
