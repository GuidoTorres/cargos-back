const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_ARQUEO_CAJA_OBS', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_ARQUEO_CAJA',
        key: 'SEC_EJEC'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_ARQUEO_CAJA',
        key: 'SEC_EJEC'
      }
    },
    SEC_ARQUEO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_ARQUEO_CAJA',
        key: 'SEC_EJEC'
      }
    },
    TIPO_OBSERV: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    SEC_OBSERV: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    DES_OBSERV: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    OBS_OTROS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SEL_OBSERV: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_ARQUEO_CAJA_OBS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TES_ARQUEO_CAJA_OBS",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_ARQUEO" },
          { name: "TIPO_OBSERV" },
          { name: "SEC_OBSERV" },
        ]
      },
    ]
  });
};
