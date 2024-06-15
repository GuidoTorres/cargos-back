const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TA_PLAN_PRODUCCION', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    C_SEC_EJEC: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    NRO_FASE: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    PROG_ESTRATEGICO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FUNCION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PROGRAMA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    SUB_PROGRAMA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    c_FINALIDAD: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    c_SUB_FINALIDAD: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    SEDE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    D_SEDE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    C_EESS: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    C_ESTABLEC: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    C_CATEGORIA_EESS: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    D_CATEGORIA_EESS: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    META_FISICA: {
      type: DataTypes.DECIMAL(20,3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TA_PLAN_PRODUCCION',
    schema: 'dbo',
    timestamps: false
  });
};
