const sequelize = require("../../config/database");
const {models} = require('./../../config/database')

  
  const getData = async (req, res, next) => {
    try {
      const get = await models.SEG_ROL.findAll({attributes: {exclude: ['id']}});
      return res.status(200).json({ data: get });
    } catch (error) {
      res.status(500).json();
      console.log(error);
    }
  };

  module.exports ={
    getData
  }