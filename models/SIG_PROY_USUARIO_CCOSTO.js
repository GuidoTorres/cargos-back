const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PROY_USUARIO_CCOSTO', {
    cuser_id: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    RESPONSABLE: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PROY_USUARIO_CCOSTO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_PRY_USUARIO_CC_01",
        fields: [
          { name: "cuser_id" },
          { name: "SEC_EJEC" },
        ]
      },
      {
        name: "PK_SIG_PROY_USUARIO_CCOSTO",
        unique: true,
        fields: [
          { name: "cuser_id" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "RESPONSABLE" },
        ]
      },
    ]
  });
};
