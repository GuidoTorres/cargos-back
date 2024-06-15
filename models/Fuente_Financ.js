const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Fuente_Financ', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Origen',
        key: 'origen'
      }
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Origen',
        key: 'origen'
      }
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FUENTE_FINANC_AGREGADA: {
      type: DataTypes.STRING(1),
      allowNull: true,
      references: {
        model: 'FUENTE_FINANC_AGREGADA',
        key: 'FUENTE_FINANC_AGREGADA'
      }
    }
  }, {
    sequelize,
    tableName: 'Fuente_Financ',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_FUENTE_FINANC_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "FUENTE_FINANC_AGREGADA" },
        ]
      },
      {
        name: "PK_FUENTE_FINANC",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
        ]
      },
    ]
  });
};
