const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_SIG_MAESTRO_ACTIVIDAD_POI', {
    ID_ACTIVIDAD: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    ID_TIPO_ACTIVIDAD: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    NUMERO_POI: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    CODIGO_ACTIVIDAD: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ID_UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    ID_ORGANO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_PRODUCTO: {
      type: DataTypes.STRING(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMP_SIG_MAESTRO_ACTIVIDAD_POI',
    schema: 'dbo',
    timestamps: false
  });
};
