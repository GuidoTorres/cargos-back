const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_centro_costo_tarea', {
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_tarea',
        key: 'tipo_tarea'
      }
    },
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_tarea',
        key: 'tipo_tarea'
      }
    },
    centro_costo: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    tipo_tarea: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_tarea',
        key: 'tipo_tarea'
      }
    },
    nivel_tarea: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_tarea',
        key: 'tipo_tarea'
      }
    },
    codigo_tarea: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    nombre_tarea: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    grupo_tarea: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    tarea_general: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true,
      references: {
        model: 'sig_tarea',
        key: 'tipo_tarea'
      }
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
    CANTIDAD: {
      type: DataTypes.DECIMAL(20,3),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    flag_tp: {
      type: DataTypes.STRING(1),
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
    fase_copia: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    bd_copia: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    F_CREACION: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TIPO_ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_centro_costo_tarea',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_SIG_CENTRO_COSTO_TAREA",
        unique: true,
        fields: [
          { name: "sec_ejec" },
          { name: "ano_eje" },
          { name: "centro_costo" },
          { name: "tipo_tarea" },
          { name: "nivel_tarea" },
          { name: "codigo_tarea" },
        ]
      },
      {
        name: "ind_scct_01",
        fields: [
          { name: "UNIDAD_MEDIDA" },
        ]
      },
      {
        name: "ind_sig_cc_tarea_01",
        fields: [
          { name: "sec_ejec" },
        ]
      },
      {
        name: "IND_SIG_CC_TAREA_03",
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "tipo_tarea" },
          { name: "nivel_tarea" },
          { name: "tarea_general" },
        ]
      },
      {
        name: "IND_SIG_CENTRO_COSTO_TAREA_04",
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "centro_costo" },
        ]
      },
      {
        name: "pk_sig_centro_costo_tarea",
        unique: true,
        fields: [
          { name: "sec_ejec" },
          { name: "ano_eje" },
          { name: "centro_costo" },
          { name: "tipo_tarea" },
          { name: "nivel_tarea" },
          { name: "codigo_tarea" },
        ]
      },
    ]
  });
};
