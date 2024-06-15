const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_SECUENCIA_MOV_ALMACEN', {
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIM_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIM_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIM_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    SEC_ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIM_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIM_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_TRANSAC: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIM_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIM_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIM_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'SIG_SECUENCIA_MOV_ALMACEN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_SEC_MOV_ALMACEN_01",
        fields: [
          { name: "ALMACEN" },
          { name: "SEC_ALMACEN" },
          { name: "TIPO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
          { name: "NRO_MOVIMTO" },
          { name: "sec_ejec" },
          { name: "ANO_EJE" },
          { name: "TIPO_PPTO" },
        ]
      },
      {
        name: "PK_SIG_SECUENCIA_MOV_ALMA",
        unique: true,
        fields: [
          { name: "sec_ejec" },
          { name: "ANO_EJE" },
          { name: "ALMACEN" },
          { name: "SEC_ALMACEN" },
          { name: "TIPO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
          { name: "TIPO_PPTO" },
          { name: "NRO_MOVIMTO" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
