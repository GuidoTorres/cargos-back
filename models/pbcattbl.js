const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pbcattbl', {
    pbt_tnam: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    pbt_tid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pbt_ownr: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    pbd_fhgt: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pbd_fwgt: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pbd_fitl: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    pbd_funl: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    pbd_fchr: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pbd_fptc: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pbd_ffce: {
      type: DataTypes.CHAR(32),
      allowNull: true
    },
    pbh_fhgt: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pbh_fwgt: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pbh_fitl: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    pbh_funl: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    pbh_fchr: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pbh_fptc: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pbh_ffce: {
      type: DataTypes.CHAR(32),
      allowNull: true
    },
    pbl_fhgt: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pbl_fwgt: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pbl_fitl: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    pbl_funl: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    pbl_fchr: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pbl_fptc: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pbl_ffce: {
      type: DataTypes.CHAR(32),
      allowNull: true
    },
    pbt_cmnt: {
      type: DataTypes.STRING(254),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pbcattbl',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pbcattbl_idx",
        unique: true,
        fields: [
          { name: "pbt_tnam" },
          { name: "pbt_ownr" },
        ]
      },
    ]
  });
};
