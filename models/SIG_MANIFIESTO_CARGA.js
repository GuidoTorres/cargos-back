const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MANIFIESTO_CARGA', {
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
    sec_manifiesto: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    tipo_bien: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    tipo_pedido: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    nro_pedido: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    fecha_manifiesto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tipo_transporte: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    nro_placa: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    doc_refer: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fecha_doc_refer: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cod_transportista: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    NRO_PIA: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_MANIFIESTO_CARGA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_sig_manifiesto_carga",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "sec_manifiesto" },
        ]
      },
    ]
  });
};
