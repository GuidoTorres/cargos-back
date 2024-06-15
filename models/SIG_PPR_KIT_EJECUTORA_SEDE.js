const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_KIT_EJECUTORA_SEDE', {
    NROKIT: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_KIT: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true
    },
    FASE_KIT: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    ID_ESTCOSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    SEC_FUNC_PROP: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_ESTABLEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    ESTRATEGIA_NACIONAL: {
      type: DataTypes.STRING(4),
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
    FINALIDAD: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SECTOR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PRECIO_REF: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(20,3),
      allowNull: true
    },
    NRO_INTERVENCIONES: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CANT_COMPRA: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    PREC_COMPRA: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    NRO_KITS: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    VERSION: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    FLAG_PRECIO_MODIFICADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FECHA_MOD_PRECIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    programa_institucional: {
      type: DataTypes.STRING(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_KIT_EJECUTORA_SEDE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SIG_PPR_KIT_EJEC__17A421EC",
        unique: true,
        fields: [
          { name: "NROKIT" },
          { name: "SEC_KIT" },
          { name: "FASE_KIT" },
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
          { name: "SECUENCIA" },
          { name: "ID_ESTCOSTO" },
          { name: "SEC_FUNC_PROP" },
          { name: "SEC_ESTABLEC" },
        ]
      },
    ]
  });
};
