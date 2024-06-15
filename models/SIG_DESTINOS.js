const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DESTINOS', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_DESTINO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE_DESTINO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ABREVIADO_DESTINO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TIPO_DEPEND: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FECHA_ALTA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_BAJA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CENTRO_PADRE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FLAG_GF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_CN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_FLAG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ORDEN: {
      type: DataTypes.STRING(80),
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
    tableName: 'SIG_DESTINOS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_DESTINOS",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "CODIGO_DESTINO" },
        ]
      },
    ]
  });
};
