const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_planillas_tmp', {
    Row: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    FuenCodigo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FuenDescripcion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MetaCodigo: {
      type: DataTypes.CHAR(6),
      allowNull: true
    },
    MetaDescripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PlCaDescripcion: {
      type: DataTypes.STRING(75),
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
      allowNull: true
    },
    C02: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C03: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C04: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C05: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C06: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C07: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C08: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C09: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C10: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C11: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C12: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C13: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C14: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C15: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C16: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C17: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C18: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C19: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C20: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C21: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C22: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C23: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C24: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C25: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C26: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C27: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C28: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C29: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C30: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C31: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C32: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C33: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C34: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C35: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C36: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C37: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C38: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C39: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C40: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C41: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C42: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C43: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C44: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
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
    },
    C49: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C50: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    C51: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_planillas_tmp',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_tb_planillas_tmp",
        unique: true,
        fields: [
          { name: "Row" },
        ]
      },
    ]
  });
};
