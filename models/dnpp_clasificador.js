const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dnpp_clasificador', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: false
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
    }
  }, {
    sequelize,
    tableName: 'dnpp_clasificador',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ind_dnpp_clasificador_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "CLASIFICADOR" },
        ]
      },
      {
        name: "ind_dnpp_clasificador_02",
        fields: [
          { name: "FECHA_ALTA" },
        ]
      },
    ]
  });
};
