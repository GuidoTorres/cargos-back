const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_COMITE_INTEGRANTE', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_COMITE: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    SEC_COMITE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_INTEGRANTE: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_INTEGRANTE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    APELLIDO_PATERNO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APELLIDO_MATERNO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NOMBRES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NOMBRE_COMPLETO: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    TIPO_DOCUMENTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DOCUM_IDENT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CATEGORIA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CARGO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CONDICION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FIRMA_ACTA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PROFESION: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NRO_COLEGIATURA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    NRO_RUC: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CORREO: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_COMITE_INTEGRANTE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_COMITE_INTEGRANTE",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_COMITE" },
          { name: "SEC_COMITE" },
          { name: "SEC_INTEGRANTE" },
        ]
      },
    ]
  });
};
