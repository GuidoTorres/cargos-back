const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meta', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_tarea',
        key: 'tipo_tarea'
      }
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_tarea',
        key: 'tipo_tarea'
      }
    },
    sec_func: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    funcion: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    programa: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    sub_programa: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    act_proy: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    componente: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    meta: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    finalidad: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    monto: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(20,3),
      allowNull: true
    },
    unidad_med: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    fecha_ing: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usuario_ing: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    fecha_mod: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usuario_mod: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    estado_envio: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    archivo: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    pais: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    departamento: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    provincia: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    distrito: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    unidad_medida: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    ESTRATEGIA_NACIONAL: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FLAG_ESTRATEGIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_ESTRATEGIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      references: {
        model: 'sig_tarea',
        key: 'tipo_tarea'
      }
    },
    NIVEL_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      references: {
        model: 'sig_tarea',
        key: 'tipo_tarea'
      }
    },
    TAREA_GENERAL: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true,
      references: {
        model: 'sig_tarea',
        key: 'tipo_tarea'
      }
    },
    PROGRAMA_INSTITUCIONAL: {
      type: DataTypes.STRING(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'meta',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ind_meta_01",
        fields: [
          { name: "sec_ejec" },
        ]
      },
      {
        name: "IND_META_02",
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "funcion" },
          { name: "programa" },
          { name: "sub_programa" },
          { name: "act_proy" },
          { name: "componente" },
        ]
      },
      {
        name: "IND_META_03",
        fields: [
          { name: "ano_eje" },
          { name: "finalidad" },
        ]
      },
      {
        name: "IND_META_04",
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "TIPO_TAREA" },
          { name: "NIVEL_TAREA" },
          { name: "TAREA_GENERAL" },
        ]
      },
      {
        name: "IND_PK_META",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "sec_func" },
        ]
      },
      {
        name: "pk_meta",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "sec_func" },
        ]
      },
    ]
  });
};
