const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CATALOGO_SECTOR', {
    SECUENCIA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SECTOR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FLAG_ENTIDAD: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NIVEL_CATALOGO: {
      type: DataTypes.STRING(1),
      allowNull: true
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
    }
  }, {
    sequelize,
    tableName: 'SIG_CATALOGO_SECTOR',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_LLAVE",
        fields: [
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
        ]
      },
      {
        name: "PK_SIG_CATALOGO_SECTOR",
        unique: true,
        fields: [
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
