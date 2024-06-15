const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CERTIFICACION', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_CERTIFICA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    CASO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ANULADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    COD_CERTIFICA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_REG: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_ACT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID_ACT: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NRO_CERTIFICA_SIAF: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ESTADO_CERTIFICA_SIAF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CONCLUIDO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    cuser_id_log: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    fecha_reg_log: {
      type: DataTypes.DATE,
      allowNull: true
    },
    equipo_reg_log: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empleado_log: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    empleado_pptal: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    flag_firma_digi: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_CERTIFICACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CERTIFICACION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CERTIFICACION",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_CERTIFICA" },
        ]
      },
    ]
  });
};
