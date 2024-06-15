const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CAT_BIEN_SERV_PRECIO_PROC', {
    NRO_REPORTE: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    FASE_CUADRO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
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
    PRECIO_REF_INI: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    PRECIO_REF_FIN: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SEC_FUN: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    VALOR_TECHO: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true
    },
    VALOR_ACTUAL_CN: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true
    },
    VALOR_REQ_CN: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true
    },
    VALOR_SALDO: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NIVEL: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CAT_BIEN_SERV_PRECIO_PROC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CAT_BSERV_PRECIO_PROC",
        unique: true,
        fields: [
          { name: "NRO_REPORTE" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
