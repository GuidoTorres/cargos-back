const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DETALLE_ITEM_CONFOR_SERV', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_CONFOR_SERV',
        key: 'TIPO_TRANSAC'
      }
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_CONFOR_SERV',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_CONFOR_SERV',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_TRANSAC: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_CONFOR_SERV',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_CONFOR_SERV',
        key: 'TIPO_TRANSAC'
      }
    },
    NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_CONFOR_SERV',
        key: 'TIPO_TRANSAC'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_CONFOR_SERV',
        key: 'TIPO_TRANSAC'
      }
    },
    SEC_ITEM: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ACTIVO_FIJO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CANT_ADQUIRIDO: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false,
      defaultValue: 0
    },
    MEDIDA_ADQUIS: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    CANT_RECIBIDO: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false,
      defaultValue: 0
    },
    CANT_ARTICULO: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false,
      defaultValue: 0
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    PRECIO_UNIT: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: false,
      defaultValue: 0
    },
    VALOR_TOTAL: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: false,
      defaultValue: 0
    },
    PRESENTACION: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TIPO_MARCA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SEC_MODELO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    ESPECIFICACIONES: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    NRO_DEVENGADO: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    SEC_DEVENGADO: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    CANT_SALDO: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'SIG_DETALLE_ITEM_CONFOR_SERV',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_DETALLE_ITEM_CFS_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
          { name: "TIPO_PPTO" },
          { name: "NRO_MOVIMTO" },
          { name: "SECUENCIA" },
        ]
      },
      {
        name: "PK_SIG_DETALLE_ITEM_CFS",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
          { name: "TIPO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
          { name: "TIPO_PPTO" },
          { name: "NRO_MOVIMTO" },
          { name: "SECUENCIA" },
          { name: "SEC_ITEM" },
        ]
      },
    ]
  });
};
