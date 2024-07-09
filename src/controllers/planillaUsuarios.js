const { models } = require("./../../config/database2");


const getData = async (req, res, next) => {
  try {
    const get = await models.TMPERS.findAll({
      attributes: ["NU_DOCU","AP_MATE", "AP_PATE", "DE_NOMB", "DE_FUNC"],
      where:{ES_ACTI: true, }
    });
    return res.status(200).json({ data: get });
  } catch (error) {
    res.status(500).json();
    console.log(error);
  }
};


const getOne = async (req, res, next) => {
  try {
    const get = await models.TMPERS.findOne({
      attributes: ["NU_DOCU","AP_MATE", "AP_PATE", "DE_NOMB", "DE_FUNC"],
      where:{ES_ACTI: true, DE_FUNC: "ENCARGADO DE CONTROL Y SANEAMIENTO PATRIMONIAL"}
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
