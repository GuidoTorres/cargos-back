const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_tipo_patrimonio', {
    tipo_patrim: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    clase_patrim: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    flag_activo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    plan_cta: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    tasa_deprec: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    cta_deprec: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    cta_orden: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    modal_patr: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    tipo_tasa: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tipo_modelo: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    fecha_reg: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CTA_DEPREC_NEW: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_tipo_patrimonio',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_SIG_TIPO_PATRIMONIO",
        unique: true,
        fields: [
          { name: "tipo_patrim" },
          { name: "clase_patrim" },
        ]
      },
      {
        name: "pk_sig_tipo_patrimonio",
        unique: true,
        fields: [
          { name: "tipo_patrim" },
          { name: "clase_patrim" },
        ]
      },
    ]
  });
};
