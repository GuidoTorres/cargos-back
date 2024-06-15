const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pbcatedt', {
    pbe_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    pbe_edit: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    pbe_type: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    pbe_cntr: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pbe_seqn: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    pbe_flag: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pbe_work: {
      type: DataTypes.CHAR(32),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pbcatedt',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pbcatedt_idx",
        unique: true,
        fields: [
          { name: "pbe_name" },
          { name: "pbe_seqn" },
        ]
      },
    ]
  });
};
