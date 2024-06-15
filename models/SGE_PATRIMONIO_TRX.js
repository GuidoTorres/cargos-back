const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SGE_PATRIMONIO_TRX', {
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
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ESTADO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    VIDA_UTIL: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    MES_PROCESO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_ENTIDAD: {
      type: DataTypes.DECIMAL(2,0),
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
    CATEGORIA_GASTO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    GRUPO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    MODALIDAD: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ELEMENTO_GASTO: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    DEPRECIACION: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    SECTOR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PLIEGO: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SGE_PATRIMONIO_TRX',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PATRIMONIO_TRX",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_MOVIMTO" },
          { name: "SECUENCIA" },
          { name: "MES_PROCESO" },
        ]
      },
    ]
  });
};
