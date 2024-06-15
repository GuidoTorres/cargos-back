const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INT_TMP_META', {
    ANO_EJE_MOV: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC_MOV: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_AUD_MOV: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
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
    ETAPA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA_META: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    ESTRATEGIA_NACIONAL: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    FUNCION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PROGRAMA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    SUB_PROGRAMA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    META: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    NOMBRE: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    DEPARTAMENTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PROVINCIA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DISTRITO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    FINALIDAD: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    META_PRIORIZADA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MONTO: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    MONTO_DISTRIBUIDO: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(19,3),
      allowNull: true
    },
    CANTIDAD_SEMESTRAL: {
      type: DataTypes.DECIMAL(19,3),
      allowNull: true
    },
    PROGRAMA_PPTO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    TIPO_CREACION_REGISTRO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_INT_TMP_META',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SIG_INT_TMP_META__33E20495",
        unique: true,
        fields: [
          { name: "ANO_EJE_MOV" },
          { name: "SEC_EJEC_MOV" },
          { name: "SEC_AUD_MOV" },
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ETAPA" },
          { name: "SECUENCIA_META" },
        ]
      },
    ]
  });
};
