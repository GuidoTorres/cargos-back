const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Componente_Nombre', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    componente: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    tipo_componente: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_ENVIO: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Componente_Nombre',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_COMPONENTE_NOMBRE",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "componente" },
        ]
      },
    ]
  });
};
