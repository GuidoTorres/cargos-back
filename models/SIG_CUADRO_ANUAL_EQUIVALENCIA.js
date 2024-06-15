const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CUADRO_ANUAL_EQUIVALENCIA', {
    ANO_EJE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    TIPO_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    NIVEL_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_TAREA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    ORIGEN: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CUADRO_ANUAL_EQUIVALENCIA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CUADRO_ANUAL_EQUIVALENCIA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "TIPO_TAREA" },
          { name: "NIVEL_TAREA" },
          { name: "CODIGO_TAREA" },
          { name: "SEC_FUNC" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
        ]
      },
    ]
  });
};
