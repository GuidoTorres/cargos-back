const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_KARDEX_INVENTARIO_CAB', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    nro_inventario: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    mes_proceso: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    almacen: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    sec_almacen: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    secuencia: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    fec_inventario: {
      type: DataTypes.DATE,
      allowNull: false
    },
    jefe_almacen: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    dir_regional: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    responsable: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    inventariador: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    observaciones: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    est_inventario: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    tipo_uso: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fec_reg_inventario: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_INVENTARIO: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_KARDEX_INVENTARIO_CAB',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_kardex_inventario_cab",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "nro_inventario" },
          { name: "mes_proceso" },
          { name: "almacen" },
          { name: "sec_almacen" },
          { name: "secuencia" },
        ]
      },
    ]
  });
};
