const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pbcatfmt', {
    pbf_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    pbf_frmt: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    pbf_type: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    pbf_cntr: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pbcatfmt',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pbcatfmt_idx",
        unique: true,
        fields: [
          { name: "pbf_name" },
        ]
      },
    ]
  });
};
