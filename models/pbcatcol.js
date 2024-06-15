const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pbcatcol', {
    pbc_tnam: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    pbc_tid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pbc_ownr: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    pbc_cnam: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    pbc_cid: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pbc_labl: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    pbc_lpos: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pbc_hdr: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    pbc_hpos: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pbc_jtfy: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pbc_mask: {
      type: DataTypes.STRING(31),
      allowNull: true
    },
    pbc_case: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pbc_hght: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pbc_wdth: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pbc_ptrn: {
      type: DataTypes.STRING(31),
      allowNull: true
    },
    pbc_bmap: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    pbc_init: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    pbc_cmnt: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    pbc_edit: {
      type: DataTypes.STRING(31),
      allowNull: true
    },
    pbc_tag: {
      type: DataTypes.STRING(254),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pbcatcol',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pbcatcol_idx",
        unique: true,
        fields: [
          { name: "pbc_tnam" },
          { name: "pbc_ownr" },
          { name: "pbc_cnam" },
        ]
      },
    ]
  });
};
