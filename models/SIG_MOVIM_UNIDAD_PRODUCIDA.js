const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MOVIM_UNIDAD_PRODUCIDA', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    MES_EJE: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO_COMP',
        key: 'TIPO_MODALIDAD'
      }
    },
    TIPO_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO_COMP',
        key: 'TIPO_MODALIDAD'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO_COMP',
        key: 'TIPO_MODALIDAD'
      }
    },
    SEC_PRODUCIDA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_COMPONENTE: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'SIG_PATRIMONIO_COMP',
        key: 'TIPO_MODALIDAD'
      }
    },
    VIDA_UTIL: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: 0
    },
    FACTOR: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: 0
    },
    CANT_PRODUCIDA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'SIG_MOVIM_UNIDAD_PRODUCIDA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_UNIDAD_PRODUCIDA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "MES_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
          { name: "SEC_PRODUCIDA" },
        ]
      },
    ]
  });
};
