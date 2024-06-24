const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TCLIQU_HIST', {
    FE_HIST: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    ID_PERS: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    ID_MOTI_FIN_PERI: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    FE_INIC_REIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FE_FIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NU_ANO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NU_MES: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NU_DIA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FE_INI_CTS: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FE_FIN_CTS: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NU_MES_CTS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NU_DIA_CTS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FE_INI_VANG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FE_FIN_VANG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NU_ANO_VANG: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NU_MES_VANG: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NU_DIA_VANG: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FE_INI_VATR: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FE_FIN_VATR: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NU_ANO_VATR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NU_MES_VATR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NU_DIA_VATR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FE_INI_BOVA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FE_FIN_BOVA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NU_ANO_BOVA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NU_MES_BOVA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NU_DIA_BOVA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FE_INI_GRTR: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FE_FIN_GRTR: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NU_MES_GRTR: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TCLIQU_HIST',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_HIST_LIQU",
        unique: true,
        fields: [
          { name: "FE_HIST" },
          { name: "ID_PERS" },
        ]
      },
    ]
  });
};
