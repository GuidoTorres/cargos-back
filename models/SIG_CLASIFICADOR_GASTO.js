const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CLASIFICADOR_GASTO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE_CLASIF: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    FLAG_ABAST: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_ALTA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    COD_NIVEL1: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    COD_NIVEL2: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FLAG_VIATICO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_ACT_PROY: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    categoria_gasto: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_CLASIFICADOR: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    flag_caja: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FLAG_MARCO_PRECIO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FLAG_SEACE: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'SIG_CLASIFICADOR_GASTO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CLASIFICADOR_GASTO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "CLASIFICADOR" },
        ]
      },
    ]
  });
};
