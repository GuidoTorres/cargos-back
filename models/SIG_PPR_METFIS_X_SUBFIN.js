const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_METFIS_X_SUBFIN', {
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
    NRO_FASE: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_ESTABLEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SUB_FINALIDAD: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    CADENA_FUNCIONAL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(20,3),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    MONTO: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    CANT_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_04: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_05: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_06: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_07: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_08: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_09: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_10: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_11: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_12: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_04: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_05: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_06: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_07: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_08: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_09: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_10: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_11: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_12: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MONTO_REF: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    bd_copia: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    fase_copia: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    SEC_FUNC_INT: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    ID_SUB_FINALIDAD: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_AMBIENTE: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    CANTIDAD_EJEC: {
      type: DataTypes.DECIMAL(20,3),
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CUSER_MOD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EQUIPO_MOD: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_METFIS_X_SUBFIN',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_PPR_METFIS_X_SUBFIN_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_FUNC" },
          { name: "NRO_FASE" },
        ]
      },
      {
        name: "IND_SIG_PPR_METFIS_X_SUBFIN_02",
        fields: [
          { name: "SUB_FINALIDAD" },
        ]
      },
      {
        name: "ind_spmxs_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_FASE" },
          { name: "SEC_FUNC" },
          { name: "SEC_ESTABLEC" },
          { name: "SUB_FINALIDAD" },
        ]
      },
      {
        name: "PK_METFIS_X_SUBFIN",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_FASE" },
          { name: "SEC_FUNC" },
          { name: "SEC_ESTABLEC" },
          { name: "SUB_FINALIDAD" },
          { name: "ID_SUB_FINALIDAD" },
        ]
      },
    ]
  });
};
