const { models } = require("./../../config/database2");

const capitalizeFirstLetter = (string) => {
  
  return string
    ?.split(" ")
    ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    ?.join(" ");
};

const getData = async (req, res, next) => {
  try {
    const get = await models.TMPERS.findAll({
      attributes: ["NU_DOCU", "AP_MATE", "AP_PATE", "DE_NOMB", "DE_FUNC"],
      where: { ES_ACTI: true },
      order: [["AP_PATE", "ASC"]],
    });
    
    const formattedData = get
      .map((item) => {
        return {
          NU_DOCU: item?.NU_DOCU,
          AP_MATE: capitalizeFirstLetter(item?.AP_MATE),
          AP_PATE: capitalizeFirstLetter(item?.AP_PATE),
          DE_NOMB: capitalizeFirstLetter(item?.DE_NOMB),
          DE_FUNC: capitalizeFirstLetter(item?.DE_FUNC),
        };
      })
      .filter((item) => item.NU_DOCU !== "" && item.NU_DOCU !== null);

    return res.status(200).json({ data: formattedData });
  } catch (error) {
    res.status(500).json();
    console.log(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const get = await models.TMPERS.findOne({
      attributes: ["NU_DOCU", "AP_MATE", "AP_PATE", "DE_NOMB", "DE_FUNC"],
      where: {
        ES_ACTI: true,
        DE_FUNC: "ENCARGADO DE CONTROL Y SANEAMIENTO PATRIMONIAL",
      },
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
