const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INVENTARIO_FISICO_CIERRE', {
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
    SEC_CIERRE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    VALOR_PATRIM: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false,
      defaultValue: 0
    },
    VALOR_INVFIS: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false,
      defaultValue: 0
    },
    VALOR_DIFERENC: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false,
      defaultValue: 0
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CUSER_MOD: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    EQUIPO_MOD: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_INVENTARIO_FISICO_CIERRE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_INV_FIS_CIERRE",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_INVENTARIO" },
          { name: "SEC_CIERRE" },
        ]
      },
    ]
  });
};
