const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_PROGRAMACION_ID_KIT_TRX', {
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
    ID_ITEM_ID: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    ITEM_SEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    ID_KIT: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    TIPO_CALCULO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    CANTIDAD_UNITARIA: {
      type: DataTypes.DECIMAL(19,10),
      allowNull: true
    },
    CANT_TOTAL: {
      type: DataTypes.DECIMAL(14,2),
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
    }
  }, {
    sequelize,
    tableName: 'SI_PROGRAMACION_ID_KIT_TRX',
    schema: 'dbo',
    timestamps: false
  });
};
