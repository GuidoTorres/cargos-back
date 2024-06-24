const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_HistorialPlanillas2', {
    HistFecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    PlCaCodigo: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    PersCodigo: {
      type: DataTypes.CHAR(6),
      allowNull: false
    },
    C01: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C02: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C03: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C04: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C05: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C06: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C07: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C08: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C09: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C10: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C11: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C12: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C13: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C14: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C15: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C16: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C17: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C18: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C19: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C20: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C21: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C22: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C23: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C24: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C25: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C26: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C27: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C28: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C29: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C30: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C31: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C32: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C33: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C34: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C35: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C36: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C37: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C38: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C39: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C40: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C41: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C42: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C43: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    C44: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    CGrati: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C45: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C46: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C47: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C48: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TB_HistorialPlanillas2',
    schema: 'dbo',
    timestamps: false
  });
};
