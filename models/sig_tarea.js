const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_tarea', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ejecutora',
        key: 'sec_ejec'
      }
    },
    tipo_tarea: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    nivel_tarea: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    tarea_general: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    grupo_tarea: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fecha_reg: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cuser_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    tipo_ppto: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    tipo_uso: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    sec_ejec2: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    TIPO_TAREA_PAD: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NIVEL_TAREA_PAD: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TAREA_GENERAL_PAD: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    ORDEN_TAREA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_META: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CODIGO_ALTERNO: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_tarea',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ind_sig_tarea_01",
        fields: [
          { name: "sec_ejec" },
        ]
      },
      {
        name: "PK_SIG_TAREA",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "tipo_tarea" },
          { name: "nivel_tarea" },
          { name: "tarea_general" },
        ]
      },
    ]
  });
};
