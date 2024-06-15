const sequelize = require("../../config/database");
const { models } = require("./../../config/database");

const getData = async (req, res, next) => {
  try {
    const { sec } = req.query;
    const get = await models.SIG_AS.findAll({
    //   where: { sec_ejec: sec },
    //   attributes: ["sec_ejec", "nombre", "ejecutora"],
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
