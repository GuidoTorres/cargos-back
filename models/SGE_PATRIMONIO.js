const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SGE_PATRIMONIO', {
    ANO_EJE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
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
    ESTADO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    VALOR_INICIAL: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    VIDA_UTIL: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    MES_PROCESO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TIPO_ENTIDAD: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DEPARTAMENTO: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    PROVINCIA: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    CATEGORIA_GASTO: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    GRUPO: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    MODALIDAD: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    ELEMENTO_GASTO: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    DEPRECIACION: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    SECTOR: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    PLIEGO: {
      type: DataTypes.STRING(3),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SGE_PATRIMONIO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SGE_PATRIMONIO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "MES_PROCESO" },
          { name: "TIPO_MOVIMTO" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
