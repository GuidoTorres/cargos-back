const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TOPES_PROCESOS', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_ORGANISMO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    CODIGO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    MONTO_MINIMO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_MAXIMO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    AMBITO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FLAG: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TOPES_PROCESOS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TOPES_PROCESOS",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "TIPO_ORGANISMO" },
          { name: "CODIGO" },
          { name: "TIPO_BIEN" },
        ]
      },
    ]
  });
};
