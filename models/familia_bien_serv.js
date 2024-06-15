const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('familia_bien_serv', {
    tipo_bien: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'clase_bien_serv',
        key: 'tipo_bien'
      }
    },
    grupo_bien: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'clase_bien_serv',
        key: 'tipo_bien'
      }
    },
    clase_bien: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'clase_bien_serv',
        key: 'tipo_bien'
      }
    },
    familia_bien: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    nombre_fam: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    alcance_fam: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    tipo_patrim: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'sig_subtipos_patrimonio',
        key: 'tipo_patrim'
      }
    },
    clase_patrim: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'sig_subtipos_patrimonio',
        key: 'tipo_patrim'
      }
    },
    subtipo: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'sig_subtipos_patrimonio',
        key: 'tipo_patrim'
      }
    },
    flag_activo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    tipo_activo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    flag_sbn: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    flag_gfijo: {
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
    ESTADO_MEF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_DURADERO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'familia_bien_serv',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ind_familia_bien_serv_01",
        fields: [
          { name: "tipo_bien" },
          { name: "grupo_bien" },
          { name: "clase_bien" },
        ]
      },
      {
        name: "ind_familia_bien_serv_02",
        fields: [
          { name: "tipo_patrim" },
          { name: "clase_patrim" },
          { name: "subtipo" },
        ]
      },
      {
        name: "IND_PK_FAMILIA_BIEN_SERV",
        unique: true,
        fields: [
          { name: "tipo_bien" },
          { name: "grupo_bien" },
          { name: "clase_bien" },
          { name: "familia_bien" },
        ]
      },
      {
        name: "pk_familia_bien_serv",
        unique: true,
        fields: [
          { name: "tipo_bien" },
          { name: "grupo_bien" },
          { name: "clase_bien" },
          { name: "familia_bien" },
        ]
      },
    ]
  });
};
