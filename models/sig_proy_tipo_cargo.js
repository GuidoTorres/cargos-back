const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_proy_tipo_cargo', {
    TIPO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DESC_CORTA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_proy_tipo_cargo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__sig_proy_tipo_ca__0E64D075",
        unique: true,
        fields: [
          { name: "TIPO" },
        ]
      },
    ]
  });
};
