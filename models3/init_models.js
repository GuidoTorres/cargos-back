const { Sequelize } = require("sequelize");
const DocumentoModel = require("./documento");

function initModels(sequelize) {
  const Documento = DocumentoModel(sequelize, Sequelize);

  return {
    Documento,
  };
}

module.exports = initModels;
