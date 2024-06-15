const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_PROGRAMACION_DETA_TRX', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    ID_SI_PROGRAMACION: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    ID_SI_PROGRAMACION_DETA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    D_CENTRO_COSTO: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ITEM_CATALOGO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    D_ITEM_CATALOGO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UNIDAD_MEDIDA_ITEM_BS: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    D_UNIDAD_MEDIDA_ITEM_BS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PRECIO_REF: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANT_COMPRA: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    PREC_COMPRA: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ORIGEN_FUENTE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FECHA_CARGA_INICIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_CARGA_FIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_ENVIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USUARIO_ENVIO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ITEM_SEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SI_PROGRAMACION_DETA_TRX',
    schema: 'dbo',
    timestamps: false
  });
};
