const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('XXX_MIGRA_2016_MAESTRO', {
    ID_LLAVE: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    ANO_EJE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROGRAMA_PPTO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROGRAMA_PPTO_NOMBRE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COD_PRODUCTO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DES_PRODUCTO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COD_ACTIVIDAD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DES_ACTIVIDAD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COD_FUNCION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DES_FUNCION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COD_DIVISION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DES_DIVISION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COD_GRUPO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DES_GRUPO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COD_FINALIDAD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DES_FINALIDAD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COD_MEDIDA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DES_MEDIDA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IND_AMBITO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DES_AMBITO: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'XXX_MIGRA_2016_MAESTRO',
    schema: 'dbo',
    timestamps: false
  });
};
