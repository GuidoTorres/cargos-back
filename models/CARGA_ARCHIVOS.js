const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CARGA_ARCHIVOS', {
    id_sec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    nro_fase: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
    },
    t_archivo: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    version: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false
    },
    vez: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    S_ARCHI_NOM: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    L_RETORNO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CUSER_MOD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EQUIPO_MOD: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CARGA_ARCHIVOS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_CARGA_ARCHIVOS",
        fields: [
          { name: "ANO_EJE" },
          { name: "nro_fase" },
          { name: "t_archivo" },
          { name: "version" },
        ]
      },
      {
        name: "PK_CARGA_ARCH",
        unique: true,
        fields: [
          { name: "id_sec" },
          { name: "ANO_EJE" },
        ]
      },
    ]
  });
};
