const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_propuesta_fase', {
    centro_costo: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    fuente_financ: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    sec_func_prop: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true
    },
    FUNCION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PROGRAMA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    fuente_impto: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    FASE_CUADRO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'tmp_propuesta_fase',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_FASE_2",
        fields: [
          { name: "centro_costo" },
          { name: "ORIGEN" },
          { name: "fuente_financ" },
          { name: "CLASIFICADOR" },
          { name: "sec_func_prop" },
          { name: "FUNCION" },
          { name: "PROGRAMA" },
          { name: "fuente_impto" },
          { name: "FASE_CUADRO" },
        ]
      },
      {
        name: "pk_techo_fase_2",
        unique: true,
        fields: [
          { name: "centro_costo" },
          { name: "ORIGEN" },
          { name: "fuente_financ" },
          { name: "CLASIFICADOR" },
          { name: "sec_func_prop" },
          { name: "fuente_impto" },
          { name: "FASE_CUADRO" },
        ]
      },
    ]
  });
};
