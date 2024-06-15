const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pbcatvld', {
    pbv_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    pbv_vald: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    pbv_type: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    pbv_cntr: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pbv_msg: {
      type: DataTypes.STRING(254),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pbcatvld',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pbcatvld_idx",
        unique: true,
        fields: [
          { name: "pbv_name" },
        ]
      },
    ]
  });
};
