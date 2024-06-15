const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_SECUENCIA_MOV_CONFOR_SERV', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIM_CONFOR_SERVICIO',
        key: 'TIPO_TRANSAC'
      }
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIM_CONFOR_SERVICIO',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIM_CONFOR_SERVICIO',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_TRANSAC: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIM_CONFOR_SERVICIO',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIM_CONFOR_SERVICIO',
        key: 'TIPO_TRANSAC'
      }
    },
    NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIM_CONFOR_SERVICIO',
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
    tableName: 'SIG_SECUENCIA_MOV_CONFOR_SERV',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_SEC_MOV_CF_01",
        fields: [
          { name: "TIPO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
          { name: "NRO_MOVIMTO" },
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
          { name: "TIPO_PPTO" },
        ]
      },
      {
        name: "PK_SIG_SECUENCIA_MOV_CF",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
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
