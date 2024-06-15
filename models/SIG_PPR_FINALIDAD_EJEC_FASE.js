const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_FINALIDAD_EJEC_FASE', {
    ESTRATEGIA_NACIONAL: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    FUNCION: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    PROGRAMA: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    SUB_PROGRAMA: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    FINALIDAD: {
      type: DataTypes.STRING(5),
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
    NRO_FASE: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_METAS: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    MONTO: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    ESTADO_EJEC: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    programa_institucional: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Meta_SIAF: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    UMedida_SIAF: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    CANT_01: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    CANT_02: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    CANT_03: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    CANT_04: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    CANT_05: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    CANT_06: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    CANT_07: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    CANT_08: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    CANT_09: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    CANT_10: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    CANT_11: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    CANT_12: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    MNTO_01: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    MNTO_02: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    MNTO_03: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    MNTO_04: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    MNTO_05: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    MNTO_06: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    MNTO_07: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    MNTO_08: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    MNTO_09: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    MNTO_10: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    MNTO_11: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    MNTO_12: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_FINALIDAD_EJEC_FASE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SIG_PPR_FINALIDA__206E7217",
        unique: true,
        fields: [
          { name: "ESTRATEGIA_NACIONAL" },
          { name: "FUNCION" },
          { name: "PROGRAMA" },
          { name: "SUB_PROGRAMA" },
          { name: "ACT_PROY" },
          { name: "COMPONENTE" },
          { name: "FINALIDAD" },
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
          { name: "NRO_FASE" },
        ]
      },
    ]
  });
};
