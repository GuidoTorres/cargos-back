const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_PARAMETROS_PREPAO', {
    SECUENCIA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_PAO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    CODIGO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    ITEM: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FUENTE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SEC_FUNC_PROP: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TIPO_TAREA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NIVEL_TAREA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CODIGO_TAREA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SECUENCIA_CN: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ITEM_CN: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    VALOR_CMN: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'TMP_PARAMETROS_PREPAO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TMP_PARAMETROS_PREPAO",
        unique: true,
        fields: [
          { name: "SECUENCIA" },
          { name: "NRO_PAO" },
          { name: "CODIGO" },
        ]
      },
    ]
  });
};
