const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_SIG_ASIGNACIONES', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    TIPO_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false
    },
    NRO_ASIGNAC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    },
    EMPLEADO_FINAL: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EMPLEADO_AUTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SEDE: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    pliego: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
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
      type: DataTypes.STRING(8),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sede_entrega: {
      type: DataTypes.DECIMAL(3,0),
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
    }
  }, {
    sequelize,
    tableName: 'tmp_SIG_ASIGNACIONES',
    schema: 'dbo',
    timestamps: false
  });
};
