const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_FINALIDAD_EJEC', {
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
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    ESTADO_EJEC: {
      type: DataTypes.CHAR(1),
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
    nro_metas: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    CantidadReq: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    MontoReq: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    Nro_Fase: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    CantidadProg: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    MontoProg: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CantidadAprob: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    MontoAprob: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_FINALIDAD_EJEC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_SIG_PPR_FINALIDAD_EJEC",
        unique: true,
        fields: [
          { name: "FUNCION" },
          { name: "PROGRAMA" },
          { name: "SUB_PROGRAMA" },
          { name: "ACT_PROY" },
          { name: "COMPONENTE" },
          { name: "FINALIDAD" },
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
          { name: "ESTRATEGIA_NACIONAL" },
        ]
      },
    ]
  });
};
