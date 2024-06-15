const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PROCESO_IMP_ARC', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TIPO_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    MODAL_COMPRA: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_PROCESO_IMP_ARC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PROCESO_IMP_ARC",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CLASIFICADOR" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PROCESO" },
          { name: "MODAL_COMPRA" },
        ]
      },
    ]
  });
};
