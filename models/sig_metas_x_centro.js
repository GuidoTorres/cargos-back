const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_metas_x_centro', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Fuente_Financ_Ejec',
        key: 'SEC_EJEC'
      }
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Fuente_Financ_Ejec',
        key: 'SEC_EJEC'
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
    secuencia: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    sec_func: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    origen: {
      type: DataTypes.STRING(1),
      allowNull: true,
      references: {
        model: 'Fuente_Financ_Ejec',
        key: 'SEC_EJEC'
      }
    },
    fuente_financ: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'Fuente_Financ_Ejec',
        key: 'SEC_EJEC'
      }
    },
    tipo_recurso: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    porc_gfijos: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    porc_techo: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    cuser_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    fecha_reg: {
      type: DataTypes.DATE,
      allowNull: true
    },
    flag_bloqueo_ppr: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    F_CREACION: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_metas_x_centro',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_SIG_METAS_X_CENTRO",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "centro_costo" },
          { name: "secuencia" },
        ]
      },
      {
        name: "IND_SIG_METAS_X_CENTRO_02",
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "origen" },
          { name: "fuente_financ" },
        ]
      },
      {
        name: "pk_sig_metas_x_centro",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "centro_costo" },
          { name: "secuencia" },
        ]
      },
    ]
  });
};
