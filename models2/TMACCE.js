const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMACCE', {
    CO_ACCE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CO_SIST: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TMSIST',
        key: 'CO_SIST'
      }
    },
    NB_ACCE: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    DE_ACCE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CO_TIPO: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AU_USER_CREA: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    AU_FECH_CREA: {
      type: DataTypes.DATE,
      allowNull: false
    },
    AU_USER_MODI: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    AU_FECH_MODI: {
      type: DataTypes.DATE,
      allowNull: false
    },
    AC_PADR: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMACCE',
    schema: 'ADMI',
    timestamps: false,
    indexes: [
      {
        name: "PK__TMACCE__9AF28232A14026D3",
        unique: true,
        fields: [
          { name: "CO_ACCE" },
        ]
      },
    ]
  });
};
