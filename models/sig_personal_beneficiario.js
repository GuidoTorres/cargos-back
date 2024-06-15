const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_personal_beneficiario', {
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    empleado: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    beneficiario: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    apellido_paterno: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    apellido_materno: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    nombres: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    docum_ident: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    telefonos: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    estado: {
      type: DataTypes.CHAR(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sig_personal_beneficiario',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_personal_beneficiario",
        unique: true,
        fields: [
          { name: "sec_ejec" },
          { name: "empleado" },
          { name: "beneficiario" },
        ]
      },
    ]
  });
};
