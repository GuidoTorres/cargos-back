const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ASIGNACIONES', {
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
    NRO_ASIGNAC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    EMPLEADO_FINAL: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'sig_personal',
        key: 'sec_ejec'
      }
    },
    EMPLEADO_AUTO: {
      type: DataTypes.STRING(15),
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
    EMPLEADO_FINAL_ENTR: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EMPLEADO_ENTREGA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CENTRO_ENTREGA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHA_ASIG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO_ACTIVO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MOTIVO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    DOC_REFERENCIA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NRO_INTERNO: {
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
    sede_entrega: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    pliego_entrega: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIPO_UBICAC: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    COD_UBICAC: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    MES_ASIG: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_UBICAC_ENTR: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    COD_UBICAC_ENTR: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ID_CORRELATIVO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OBSERVACIONES: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_ASIGNACIONES',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_ASIGNACIONES_01",
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_03",
        fields: [
          { name: "SEDE" },
          { name: "pliego" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_04",
        fields: [
          { name: "SEC_EJEC" },
          { name: "EMPLEADO" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_10",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_11",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_12",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_ENTREGA" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_13",
        fields: [
          { name: "SEC_EJEC" },
          { name: "EMPLEADO_ENTREGA" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_14",
        fields: [
          { name: "TIPO_UBICAC_ENTR" },
          { name: "COD_UBICAC_ENTR" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_15",
        fields: [
          { name: "TIPO_UBICAC" },
          { name: "COD_UBICAC" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_16",
        fields: [
          { name: "sede_entrega" },
          { name: "pliego_entrega" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_17",
        fields: [
          { name: "SEC_EJEC" },
          { name: "EMPLEADO_FINAL_ENTR" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_18",
        fields: [
          { name: "SEC_EJEC" },
          { name: "EMPLEADO_FINAL" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_19",
        fields: [
          { name: "MES_ASIG" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_20",
        fields: [
          { name: "NRO_INTERNO" },
        ]
      },
      {
        name: "PK_SIG_ASIGNACIONES",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
          { name: "NRO_ASIGNAC" },
        ]
      },
    ]
  });
};
