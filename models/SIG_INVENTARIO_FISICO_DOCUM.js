const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INVENTARIO_FISICO_DOCUM', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INVENTARIO_FISICO',
        key: 'sec_ejec'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INVENTARIO_FISICO',
        key: 'sec_ejec'
      }
    },
    NRO_INVENTARIO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INVENTARIO_FISICO',
        key: 'sec_ejec'
      }
    },
    SEC_DOCUM: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    COD_DOCUM: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    NOM_DOCUM: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    FLAG_VERIFICADO: {
      type: DataTypes.STRING(2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_INVENTARIO_FISICO_DOCUM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_INVFIS_DOC",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_INVENTARIO" },
          { name: "SEC_DOCUM" },
        ]
      },
    ]
  });
};
