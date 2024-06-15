const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_detalle_movim_temp', {
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    almacen: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    sec_almacen: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    tipo_movimto: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tipo_transac: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    tipo_ppto: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    nro_movimto: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    secuencia: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    sec_detalle: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    tipo_bien: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    grupo_bien: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    clase_bien: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    familia_bien: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    item_bien: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    nombre_item: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    cant_recibido: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    precio_unit: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    valor_total: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true
    },
    grupo_bien_padre: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    clase_bien_padre: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    familia_bien_padre: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    item_bien_padre: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    cuser_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_detalle_movim_temp',
    schema: 'dbo',
    timestamps: false
  });
};
