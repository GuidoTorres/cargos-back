const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_meta_prop', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ejecutora',
        key: 'sec_ejec'
      }
    },
    sec_func: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    sec_func_r: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    funcion: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    programa: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    sub_programa: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    act_proy: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    componente: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    meta: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    finalidad: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    monto: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    unidad_medida: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    pais: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    departamento: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    provincia: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    distrito: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    porc_meta: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    flag_act_proy: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_meta_prop',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_META_PROP",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "sec_func" },
        ]
      },
      {
        name: "ind_sig_meta_prop_01",
        fields: [
          { name: "sec_ejec" },
        ]
      },
      {
        name: "pk_meta_prop",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "sec_func" },
        ]
      },
    ]
  });
};
