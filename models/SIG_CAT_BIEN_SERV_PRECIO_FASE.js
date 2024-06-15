const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CAT_BIEN_SERV_PRECIO_FASE', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CATALOGO_BIEN_SERV_PRECIO',
        key: 'TIPO_BIEN'
      }
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CATALOGO_BIEN_SERV_PRECIO',
        key: 'TIPO_BIEN'
      }
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CATALOGO_BIEN_SERV_PRECIO',
        key: 'TIPO_BIEN'
      }
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CATALOGO_BIEN_SERV_PRECIO',
        key: 'TIPO_BIEN'
      }
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CATALOGO_BIEN_SERV_PRECIO',
        key: 'TIPO_BIEN'
      }
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CATALOGO_BIEN_SERV_PRECIO',
        key: 'TIPO_BIEN'
      }
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CATALOGO_BIEN_SERV_PRECIO',
        key: 'TIPO_BIEN'
      }
    },
    FASE: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    PRECIO_REF: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    INDICADOR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_REF: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_MODIF: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FLAG_PROC_CN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    precio_ref_origen: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    flag_proc: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    flag_cambio: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    flag_pase: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CAT_BIEN_SERV_PRECIO_FASE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_sig_cat_bs_precio_fase",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
          { name: "FASE" },
        ]
      },
    ]
  });
};
