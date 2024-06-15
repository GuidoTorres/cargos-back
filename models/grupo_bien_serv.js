const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupo_bien_serv', {
    tipo_bien: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    grupo_bien: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    nombre_grupo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    alcance_grupo: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    flag_activo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    flag_sbn: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    estado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    fecha_alta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_act: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_baja: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cuser_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ENVIADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_VISUALIZA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FLAG_EXCEPCION: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'grupo_bien_serv',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_GRUPO_BIEN_SERV",
        unique: true,
        fields: [
          { name: "tipo_bien" },
          { name: "grupo_bien" },
        ]
      },
      {
        name: "pk_grupo_bien_serv",
        unique: true,
        fields: [
          { name: "tipo_bien" },
          { name: "grupo_bien" },
        ]
      },
    ]
  });
};
