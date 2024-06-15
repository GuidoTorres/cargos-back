const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CLASE_ATRIBUTO', {
    CLASE_BIEN_DET: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true,
      references: {
        model: 'clase_bien_serv',
        key: 'tipo_bien'
      }
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'clase_bien_serv',
        key: 'tipo_bien'
      }
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'clase_bien_serv',
        key: 'tipo_bien'
      }
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ABREVIATURA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CLASE_ATRIBUTO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_CLASE_ATRIBUTO_01",
        fields: [
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
        ]
      },
      {
        name: "PK_SIG_CLASE_ATRIBUTO",
        unique: true,
        fields: [
          { name: "CLASE_BIEN_DET" },
        ]
      },
    ]
  });
};
