const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clase_bien_serv', {
    tipo_bien: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'grupo_bien_serv',
        key: 'tipo_bien'
      }
    },
    grupo_bien: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'grupo_bien_serv',
        key: 'tipo_bien'
      }
    },
    clase_bien: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    nombre_clase: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    alcance_clase: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    tipo_patrim: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'sig_tipo_patrimonio',
        key: 'tipo_patrim'
      }
    },
    clase_patrim: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'sig_tipo_patrimonio',
        key: 'tipo_patrim'
      }
    },
    subtipo: {
      type: DataTypes.DECIMAL(2,0),
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
    }
  }, {
    sequelize,
    tableName: 'clase_bien_serv',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ind_clase_bien_serv_01",
        fields: [
          { name: "grupo_bien" },
          { name: "tipo_bien" },
        ]
      },
      {
        name: "ind_clase_bien_serv_02",
        fields: [
          { name: "tipo_patrim" },
          { name: "clase_patrim" },
        ]
      },
      {
        name: "IND_PK_CLASE_BIEN_SERV",
        unique: true,
        fields: [
          { name: "tipo_bien" },
          { name: "grupo_bien" },
          { name: "clase_bien" },
        ]
      },
      {
        name: "pk_clase_bien_serv",
        unique: true,
        fields: [
          { name: "tipo_bien" },
          { name: "grupo_bien" },
          { name: "clase_bien" },
        ]
      },
    ]
  });
};
