const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_SIG_CENTRO_COSTO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    NOMBRE_DEPEND: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ABREVIADO_DEPEND: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SEDE: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    PLIEGO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIPO_DEPEND: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FECHA_ALTA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_BAJA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NRO_PERSONAL: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    CENTRO_PADRE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FLAG_GF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_CN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_FLAG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ORDEN: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    CENTRO_SBN: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FLAG_SISMED: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_PRESUPUESTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    flag_ppr: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMP_SIG_CENTRO_COSTO',
    schema: 'dbo',
    timestamps: false
  });
};
