const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_cuadro_anual', {
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_meta_prop',
        key: 'sec_func'
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
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_meta_prop',
        key: 'sec_func'
      }
    },
    tipo_tarea: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_centro_costo_tarea',
        key: 'tipo_tarea'
      }
    },
    nivel_tarea: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_centro_costo_tarea',
        key: 'tipo_tarea'
      }
    },
    codigo_tarea: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_centro_costo_tarea',
        key: 'tipo_tarea'
      }
    },
    secuencia: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    sec_func: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      references: {
        model: 'sig_meta_prop',
        key: 'sec_func'
      }
    },
    origen: {
      type: DataTypes.STRING(1),
      allowNull: false,
      references: {
        model: 'Fuente_Financ_Ejec',
        key: 'SEC_EJEC'
      }
    },
    fuente_financ: {
      type: DataTypes.STRING(2),
      allowNull: false,
      references: {
        model: 'Fuente_Financ_Ejec',
        key: 'SEC_EJEC'
      }
    },
    tipo_recurso: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    monto_asignado: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    monto_progra: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    monto_aprob: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    monto_modif: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    valor_imp_asignado: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    valor_imp_progra: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    valor_imp_aprob: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    valor_imp_modif: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    tipo_impuesto: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    fuente_impto: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    tasa_impto: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    fecha_reg: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cuser_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    flag_gasto: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_cuadro_anual',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_SIG_CUADRO_ANUAL",
        unique: true,
        fields: [
          { name: "sec_ejec" },
          { name: "centro_costo" },
          { name: "ano_eje" },
          { name: "tipo_tarea" },
          { name: "nivel_tarea" },
          { name: "codigo_tarea" },
          { name: "secuencia" },
        ]
      },
      {
        name: "ind_sig_cuadro_anual_01",
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "centro_costo" },
          { name: "tipo_tarea" },
          { name: "nivel_tarea" },
          { name: "codigo_tarea" },
        ]
      },
      {
        name: "IND_SIG_CUADRO_ANUAL_02",
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "origen" },
          { name: "fuente_financ" },
        ]
      },
      {
        name: "ind_sig_cuadro_anual_04",
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "sec_func" },
        ]
      },
      {
        name: "pk_sig_cuadro_anual",
        unique: true,
        fields: [
          { name: "sec_ejec" },
          { name: "centro_costo" },
          { name: "ano_eje" },
          { name: "tipo_tarea" },
          { name: "nivel_tarea" },
          { name: "codigo_tarea" },
          { name: "secuencia" },
        ]
      },
    ]
  });
};
