const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ASIGNACIONES_BD', {
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
        model: 'SIG_BIENES_DURADEROS',
        key: 'TIPO_MODALIDAD'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_BIENES_DURADEROS',
        key: 'TIPO_MODALIDAD'
      }
    },
    NRO_ASIGNAC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
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
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'sig_personal',
        key: 'sec_ejec'
      }
    },
    EMPLEADO_FINAL: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SEDE_ENTREGA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    PLIEGO_ENTREGA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CENTRO_ENTREGA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EMPLEADO_ENTREGA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EMPLEADO_FINAL_ENTR: {
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
    MES_ASIG: {
      type: DataTypes.STRING(2),
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
    TIPO_UBICAC: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    COD_UBICAC: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIPO_UBICAC_ENTR: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    COD_UBICAC_ENTR: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_ASIGNACIONES_BD',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_ASIGNACIONES_BD_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_BD_03",
        fields: [
          { name: "SEDE" },
          { name: "pliego" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_BD_04",
        fields: [
          { name: "SEC_EJEC" },
          { name: "EMPLEADO" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_BD_11",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_BD_12",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_ENTREGA" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_BD_13",
        fields: [
          { name: "SEC_EJEC" },
          { name: "EMPLEADO_ENTREGA" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_BD_16",
        fields: [
          { name: "SEDE_ENTREGA" },
          { name: "PLIEGO_ENTREGA" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_BD_17",
        fields: [
          { name: "SEC_EJEC" },
          { name: "EMPLEADO_FINAL_ENTR" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_BD_18",
        fields: [
          { name: "SEC_EJEC" },
          { name: "EMPLEADO_FINAL" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_BD_19",
        fields: [
          { name: "MES_ASIG" },
        ]
      },
      {
        name: "IND_ASIGNACIONES_BD_20",
        fields: [
          { name: "NRO_INTERNO" },
        ]
      },
      {
        name: "PK_SIG_ASIGNACIONES_BD",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "NRO_ASIGNAC" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
