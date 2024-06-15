const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_tipo_ActProy', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    funcion: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    programa: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    sub_programa: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    act_proy: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    tipo_act_proy: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_tipo_ActProy',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "idx_sig_tipo_actproy_01",
        fields: [
          { name: "ano_eje" },
          { name: "funcion" },
          { name: "programa" },
          { name: "sub_programa" },
          { name: "act_proy" },
        ]
      },
      {
        name: "ind_sta_01",
        fields: [
          { name: "ano_eje" },
          { name: "codigo" },
          { name: "tipo_act_proy" },
        ]
      },
      {
        name: "PK_SIG_TIPO_ACTPROY",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "funcion" },
          { name: "programa" },
          { name: "sub_programa" },
          { name: "act_proy" },
          { name: "tipo_act_proy" },
          { name: "codigo" },
        ]
      },
    ]
  });
};
