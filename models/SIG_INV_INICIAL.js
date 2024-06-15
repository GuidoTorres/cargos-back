const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INV_INICIAL', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    mayor: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    sub_cta: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    valor: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    fecha_reg: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cuser_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    equipo_reg: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SEC_COD: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    PLIE_COD: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    IND_SUB_CTA: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_INV_INICIAL',
    schema: 'dbo',
    timestamps: false
  });
};
