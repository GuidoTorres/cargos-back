const { Sequelize } = require("sequelize");
const DocumentoModel = require("./documento");
const UsuarioModel = require("./usuarios");

function initModels(sequelize) {
  const Documento = DocumentoModel(sequelize, Sequelize);
  const Usuario = UsuarioModel(sequelize, Sequelize);

  Usuario.hasMany(Documento, { foreignKey: "usuario_id" });
  Documento.belongsTo(Usuario, { foreignKey: "usuario_id" });

  return {
    Documento,
    Usuario
  };
}

module.exports = initModels;
