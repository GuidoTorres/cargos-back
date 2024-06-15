const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_tmp_pedidos_rutas', {
    ano_ejec: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    sec_pedido: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    sec_item_comi: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    ruta_pedido: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    via_pedido: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPO_VIAJE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_VIA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_tmp_pedidos_rutas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_sig_tmp_pedidos_rutas",
        unique: true,
        fields: [
          { name: "ano_ejec" },
          { name: "sec_ejec" },
          { name: "sec_pedido" },
          { name: "sec_item_comi" },
        ]
      },
    ]
  });
};
