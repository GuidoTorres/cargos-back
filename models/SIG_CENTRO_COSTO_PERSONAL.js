const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CENTRO_COSTO_PERSONAL', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_personal',
        key: 'sec_ejec'
      }
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_personal',
        key: 'sec_ejec'
      }
    }
  }, {
    sequelize,
    tableName: 'SIG_CENTRO_COSTO_PERSONAL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_CCENTRO_PERS_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
        ]
      },
      {
        name: "IND_CCENTRO_PERS_02",
        fields: [
          { name: "SEC_EJEC" },
          { name: "EMPLEADO" },
        ]
      },
      {
        name: "PK_SIG_CENTRO_COSTO_PERSONAL",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "EMPLEADO" },
        ]
      },
    ]
  });
};
