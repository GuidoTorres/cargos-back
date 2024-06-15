const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PS_CUADRO_ADQ', {
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
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    SEC_CUADRO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_META: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    ITEM_PROCESO: {
      type: DataTypes.STRING(35),
      allowNull: false,
      primaryKey: true
    },
    ANO_GRUPO_CUADRO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_GRUPO_CUADRO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_GENERACION: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    PROCESO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    },
    SEC_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    CONVOCATORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    },
    SEC_CONVOCATORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    },
    NRO_LOTE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    },
    NRO_PROPUESTA: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
    },
    NRO_ITEM: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    }
  }, {
    sequelize,
    tableName: 'SIG_PS_CUADRO_ADQ',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_PS_CUADRO_ADQ",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_GENERACION" },
          { name: "PROCESO" },
          { name: "SEC_PROCESO" },
          { name: "CONVOCATORIA" },
          { name: "SEC_CONVOCATORIA" },
          { name: "NRO_LOTE" },
          { name: "PROVEEDOR" },
          { name: "NRO_PROPUESTA" },
          { name: "NRO_ITEM" },
        ]
      },
      {
        name: "PK_SIG_PS_CUADRO_ADQ",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "SEC_CUADRO" },
          { name: "SECUENCIA" },
          { name: "SEC_META" },
          { name: "ITEM_PROCESO" },
          { name: "ANO_GRUPO_CUADRO" },
          { name: "NRO_GRUPO_CUADRO" },
        ]
      },
    ]
  });
};
