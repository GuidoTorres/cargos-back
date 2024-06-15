const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_parametros_pao', {
    SECUENCIA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    NRO_PAO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    CODIGO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
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
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TIPO_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NIVEL_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CODIGO_TAREA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo_uso: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    secuencia_cn: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    item_sec_cn: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmp_parametros_pao',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_TMP_PARAMETROS_PAO",
        fields: [
          { name: "SECUENCIA" },
          { name: "NRO_PAO" },
          { name: "CODIGO" },
        ]
      },
    ]
  });
};
