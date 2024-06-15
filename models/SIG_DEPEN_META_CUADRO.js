const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DEPEN_META_CUADRO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_METAS_CUADRO',
        key: 'TIPO_BIEN'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_METAS_CUADRO',
        key: 'TIPO_BIEN'
      }
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_METAS_CUADRO',
        key: 'TIPO_BIEN'
      }
    },
    SEC_CUADRO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_METAS_CUADRO',
        key: 'TIPO_BIEN'
      }
    },
    SECUENCIA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_METAS_CUADRO',
        key: 'TIPO_BIEN'
      }
    },
    SEC_META: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_METAS_CUADRO',
        key: 'TIPO_BIEN'
      }
    },
    SEC_DEPEND: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    TIPO_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      references: {
        model: 'sig_centro_costo_tarea',
        key: 'tipo_tarea'
      }
    },
    NIVEL_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      references: {
        model: 'sig_centro_costo_tarea',
        key: 'tipo_tarea'
      }
    },
    CODIGO_TAREA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      references: {
        model: 'sig_centro_costo_tarea',
        key: 'tipo_tarea'
      }
    },
    CANT_DEPEND: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_DEPEND: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PORC_GASTO: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
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
    cant_uso: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    INDICADOR_PAAC: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    MNTO_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MNTO_IMPTO_SOL: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    }
  }, {
    sequelize,
    tableName: 'SIG_DEPEN_META_CUADRO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_DEPEN_META_CUADRO_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "TIPO_TAREA" },
          { name: "NIVEL_TAREA" },
          { name: "CODIGO_TAREA" },
        ]
      },
      {
        name: "PK_DETALLE_DEPEN_META_CUA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "SEC_CUADRO" },
          { name: "SECUENCIA" },
          { name: "SEC_META" },
          { name: "SEC_DEPEND" },
        ]
      },
    ]
  });
};
