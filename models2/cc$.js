const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cc$', {
    DNI: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    RA: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    RNA: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    H60: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    H100: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ID_PERS: {
      type: DataTypes.STRING(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cc$',
    schema: 'dbo',
    timestamps: false
  });
};
