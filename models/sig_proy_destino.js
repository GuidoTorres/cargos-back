const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_proy_destino', {
    SEC_DESTINO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    E_PAIS: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    E_CIUDAD: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    TIPO_VIAJE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    L_PAIS: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    L_DEPARTAMENTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    L_PROVINCIA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    L_DISTRITO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_proy_destino',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__sig_proy_destino__141DA9CB",
        unique: true,
        fields: [
          { name: "SEC_DESTINO" },
        ]
      },
    ]
  });
};
