const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_CENTRO_COSTO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    ID_SI_CENTRO_COSTO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE_DEPEND: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ABREVIADO_DEPEND: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SEDE: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    PLIEGO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIPO_DEPEND: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CENTRO_PADRE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHA_CARGA_INICIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_CARGA_FIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_ENVIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USUARIO_ENVIO: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SI_CENTRO_COSTO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SI_CENTRO_COSTO__4496C3F4",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "ID_SI_CENTRO_COSTO" },
        ]
      },
    ]
  });
};
