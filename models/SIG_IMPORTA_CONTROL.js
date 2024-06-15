const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_IMPORTA_CONTROL', {
    L_ID_IMPORTA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    S_TIPO: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    S_FILTRO: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DT_CONTROL_FECHA: {
      type: DataTypes.DATE,
      allowNull: false
    },
    L_REGISTRO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_IMPORTA_CONTROL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_IMPORTA_CONTROL",
        unique: true,
        fields: [
          { name: "L_ID_IMPORTA" },
        ]
      },
    ]
  });
};
