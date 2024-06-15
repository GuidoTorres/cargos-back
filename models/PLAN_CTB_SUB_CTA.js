const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PLAN_CTB_SUB_CTA', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CLASE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NATURALEZA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SOBREGIRO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CLASIF_CTA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    MONETARIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SECCION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FECHA_ING: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USUARIO_ING: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USUARIO_MOD: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PLAN_CTB_SUB_CTA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PLAN_CTB_SUB_CTA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "MAYOR" },
          { name: "SUB_CTA" },
        ]
      },
    ]
  });
};
