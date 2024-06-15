const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MOVIMIENTO_BIENES', {
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
    MES_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TIPO_MOVIMIENTO',
        key: 'TIPO_TRANSAC'
      }
    },
    NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_TRANSAC: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'SIG_TIPO_MOVIMIENTO',
        key: 'TIPO_TRANSAC'
      }
    },
    NRO_INGRESO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    NRO_SEC_SALIDA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FECHA_MOVIMTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OBSERVAC: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    SEDE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    pliego: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'sig_personal',
        key: 'sec_ejec'
      }
    },
    TIPO_DOCUMENTO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NRO_DOCUMENTO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FECHA_DOCUMENTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_REPARACION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESTADO_REPARACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_SALIDA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DESTINO_SALIDA: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    EMPLEADO_RESP: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    RESP_TRASLADO: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    NRO_PECOSA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    TIPO_INST: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NOMBRE_ENTIDAD: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    SEC_EJEC2: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    NRO_RESOLUC: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FECHA_RESOL: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_ACTA: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FECHA_ACTA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_CONVENIO: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FECHA_CONVENIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_RECEPCION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GLOSA: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    FLAG_CIERRE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_CIERRE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG_APTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_SALIDA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_SALIDA_FINAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_CAJA_CHICA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    DIRECCION: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    TELEFONOS: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FLAG_TASACION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FECHA_TASACION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG_COMPONENTES: {
      type: DataTypes.STRING(1),
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
    MOTIVO: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_MOVIMIENTO_BIENES',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_MOVI_BD_01",
        fields: [
          { name: "SEC_EJEC" },
        ]
      },
      {
        name: "IND_SIG_MOVI_BD_02",
        fields: [
          { name: "TIPO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
        ]
      },
      {
        name: "IND_SIG_MOVI_BD_04",
        fields: [
          { name: "pliego" },
          { name: "SEDE" },
        ]
      },
      {
        name: "IND_SIG_MOVI_BD_05",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
        ]
      },
      {
        name: "IND_SIG_MOVI_BD_06",
        fields: [
          { name: "SEC_EJEC" },
          { name: "EMPLEADO" },
        ]
      },
      {
        name: "IND_SIG_MOVI_BD_10",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "MES_PROCESO" },
          { name: "TIPO_MOVIMTO" },
          { name: "NRO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
          { name: "TIPO_PPTO" },
        ]
      },
      {
        name: "PK_SIG_MOVI_BIENES",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "MES_PROCESO" },
          { name: "TIPO_MOVIMTO" },
          { name: "NRO_MOVIMTO" },
        ]
      },
    ]
  });
};
