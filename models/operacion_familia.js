const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('operacion_familia', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CLASIFICADOR_GASTO',
        key: 'CLASIFICADOR'
      }
    },
    tipo_bien: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    grupo_bien: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    clase_bien: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    familia_bien: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    operacion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    clasificador: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'SIG_CLASIFICADOR_GASTO',
        key: 'CLASIFICADOR'
      }
    },
    tipo_act_proy: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    tipo_uso: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cuser: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ufecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    uuser: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cfecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IND_USER_MODIF: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'operacion_familia',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ind_operacion_familia_01",
        fields: [
          { name: "tipo_bien" },
          { name: "grupo_bien" },
          { name: "clase_bien" },
          { name: "familia_bien" },
        ]
      },
      {
        name: "ind_operacion_familia_02",
        fields: [
          { name: "ano_eje" },
          { name: "operacion" },
        ]
      },
      {
        name: "IND_OPERACION_FAMILIA_03",
        fields: [
          { name: "ano_eje" },
          { name: "clasificador" },
        ]
      },
      {
        name: "IND_PK_OPERACION_FAMILIA",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "tipo_bien" },
          { name: "grupo_bien" },
          { name: "clase_bien" },
          { name: "familia_bien" },
          { name: "operacion" },
        ]
      },
      {
        name: "pk_operacion_familia",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "tipo_bien" },
          { name: "grupo_bien" },
          { name: "clase_bien" },
          { name: "familia_bien" },
          { name: "operacion" },
        ]
      },
    ]
  });
};
