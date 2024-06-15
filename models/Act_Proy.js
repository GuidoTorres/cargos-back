const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Act_Proy', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Sub_Programa',
        key: 'sub_programa'
      }
    },
    funcion: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Sub_Programa',
        key: 'sub_programa'
      }
    },
    programa: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Sub_Programa',
        key: 'sub_programa'
      }
    },
    sub_programa: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Sub_Programa',
        key: 'sub_programa'
      }
    },
    act_proy: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Act_Proy_Nombre',
        key: 'ANO_EJE'
      }
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Act_Proy',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_ACT_PROY_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "act_proy" },
        ]
      },
      {
        name: "PK_ACT_PROY",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "funcion" },
          { name: "programa" },
          { name: "sub_programa" },
          { name: "act_proy" },
        ]
      },
    ]
  });
};
