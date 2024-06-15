const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ITEM_MARCA_MODELO', {
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    TIPO_MARCA: {
      type: DataTypes.STRING(1),
      allowNull: false,
      references: {
        model: 'MARCA',
        key: 'TIPO_MARCA'
      }
    },
    MARCA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      references: {
        model: 'MARCA',
        key: 'TIPO_MARCA'
      }
    },
    SEC_MODELO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ALTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ANCHO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PROFUNDIDAD: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CAPACIDAD: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    CODIGO_PIS: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CADENA_FRIO: {
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
    tableName: 'SIG_ITEM_MARCA_MODELO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_ITEM_MARCA_MODELO_01",
        fields: [
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
        ]
      },
      {
        name: "IND_SIG_ITEM_MARCA_MODELO_02",
        fields: [
          { name: "TIPO_MARCA" },
          { name: "MARCA" },
        ]
      },
      {
        name: "PK_SIG_ITEM_MARCA_MODELO",
        unique: true,
        fields: [
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
          { name: "TIPO_MARCA" },
          { name: "MARCA" },
          { name: "SEC_MODELO" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
