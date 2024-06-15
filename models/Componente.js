const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Componente', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Componente_Nombre',
        key: 'componente'
      }
    },
    funcion: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Act_Proy',
        key: 'sub_programa'
      }
    },
    programa: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Act_Proy',
        key: 'sub_programa'
      }
    },
    sub_programa: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Act_Proy',
        key: 'sub_programa'
      }
    },
    act_proy: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Act_Proy',
        key: 'sub_programa'
      }
    },
    componente: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Componente_Nombre',
        key: 'componente'
      }
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_ENVIO: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Componente',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_COMPONENTE_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "componente" },
        ]
      },
      {
        name: "PK_COMPONENTE",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "funcion" },
          { name: "programa" },
          { name: "sub_programa" },
          { name: "act_proy" },
          { name: "componente" },
        ]
      },
    ]
  });
};
