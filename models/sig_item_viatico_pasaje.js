const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_item_viatico_pasaje', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sig_item_viatico_pasaje',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIVP",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "TIPO" },
          { name: "CLASIFICADOR" },
        ]
      },
    ]
  });
};
