const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INT_HOJA_TRABAJO', {
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
    C_SUBFASE: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    SEC_HT: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FUENTE_FINANC_AGREGADA: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    DESC_FUENTE_FINANC: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    DESC_FUNC: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    DESC_CLASIFICADOR: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    DESC_CENTRO_COSTO: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    FECHA_ENVIO: {
      type: DataTypes.DATE,
      allowNull: false
    },
    MONTO_CN: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_INT_HOJA_TRABAJO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_HT",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "C_SUBFASE" },
          { name: "SEC_HT" },
        ]
      },
    ]
  });
};
