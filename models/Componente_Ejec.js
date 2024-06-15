const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Componente_Ejec', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Componente',
        key: 'sub_programa'
      }
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ejecutora',
        key: 'sec_ejec'
      }
    },
    funcion: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Componente',
        key: 'sub_programa'
      }
    },
    programa: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Componente',
        key: 'sub_programa'
      }
    },
    sub_programa: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Componente',
        key: 'sub_programa'
      }
    },
    act_proy: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Componente',
        key: 'sub_programa'
      }
    },
    componente: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Componente',
        key: 'sub_programa'
      }
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    estado_envio: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Componente_Ejec',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_COMPONENTE_EJEC_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "funcion" },
          { name: "programa" },
          { name: "sub_programa" },
          { name: "act_proy" },
          { name: "componente" },
        ]
      },
      {
        name: "PK_COMPONENTE_EJEC",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "sec_ejec" },
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
