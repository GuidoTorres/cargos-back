const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DETALLE_ACTIVOS', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIMIENTO_ACTIVO',
        key: 'TIPO_MOVIMTO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO',
        key: 'TIPO_MODALIDAD'
      }
    },
    MES_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIMIENTO_ACTIVO',
        key: 'TIPO_MOVIMTO'
      }
    },
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIMIENTO_ACTIVO',
        key: 'TIPO_MOVIMTO'
      }
    },
    NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIMIENTO_ACTIVO',
        key: 'TIPO_MOVIMTO'
      }
    },
    NRO_SECUENCIA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO',
        key: 'TIPO_MODALIDAD'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO',
        key: 'TIPO_MODALIDAD'
      }
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    MONTO_ORDEN: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ESTADO_SALIDA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    OBSERV_SALIDA: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    FECHA_RETORNO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO_RETORNO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    OBSERV_RETORNO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ANO_SALIDA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MES_SALIDA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NRO_SALIDA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EMPLEADO_FINAL: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TIPO_UBICAC: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    COD_UBICAC: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_DETALLE_ACTIVOS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_DETALLE_ACT_02",
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
        ]
      },
      {
        name: "IND_SIG_DETALLE_ACT_05",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
        ]
      },
      {
        name: "IND_SIG_DETALLE_ACT_06",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "MES_PROCESO" },
          { name: "TIPO_MOVIMTO" },
          { name: "NRO_MOVIMTO" },
        ]
      },
      {
        name: "PK_SIG_DETALLE_ACT",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "MES_PROCESO" },
          { name: "TIPO_MOVIMTO" },
          { name: "NRO_MOVIMTO" },
          { name: "NRO_SECUENCIA" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
