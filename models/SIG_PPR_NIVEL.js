const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_NIVEL', {
    SECUENCIA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    FUNCION: {
      type: DataTypes.STRING(4),
      allowNull: false,
      references: {
        model: 'SIG_PPR_NIVEL_DESC',
        key: 'NIVEL'
      }
    },
    NIVEL: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      references: {
        model: 'SIG_PPR_NIVEL_DESC',
        key: 'NIVEL'
      }
    },
    COD_NIVEL: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    DESC_NIVEL: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    REF_NIVEL: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    REF_CODIGO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    JERARQUIA: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_NIVEL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_PPR_NIVEL",
        fields: [
          { name: "FUNCION" },
          { name: "NIVEL" },
          { name: "JERARQUIA" },
        ]
      },
      {
        name: "PK_SIG_PPR_NIVEL",
        unique: true,
        fields: [
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
