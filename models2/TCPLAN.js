const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TCPLAN', {
    ID_PLAN: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TCPLAN_CABE',
        key: 'ID_PLAN'
      }
    },
    ID_PERS: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TMPERS',
        key: 'ID_PERS'
      }
    },
    C01: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C02: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C03: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C04: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C05: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C06: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C07: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C08: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C09: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C10: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C11: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C12: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C13: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C14: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C15: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C16: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C17: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C18: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C19: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C20: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C21: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C22: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C23: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C24: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C25: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C26: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C27: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C28: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C29: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C30: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C31: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C32: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C33: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C34: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C35: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C36: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C37: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C38: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C39: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C40: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C41: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C42: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C43: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C44: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    CGrati: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C45: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C46: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C47: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C48: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C49: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C50: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C51: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0
    },
    C52: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C53: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C54: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C55: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TCPLAN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Planilla",
        unique: true,
        fields: [
          { name: "ID_PLAN" },
          { name: "ID_PERS" },
        ]
      },
    ]
  });
};
