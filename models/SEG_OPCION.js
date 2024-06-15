const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEG_OPCION', {
    ID_OPCION: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    PAGINA: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    MODULO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    TIPO: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    NIVEL: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false
    },
    ORDEN: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false
    },
    ID_SUPERIOR: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    DESTINO: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ALIAS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IMAGEN: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SEG_OPCION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SEG_OPCION",
        unique: true,
        fields: [
          { name: "ID_OPCION" },
          { name: "MODULO" },
        ]
      },
    ]
  });
};
