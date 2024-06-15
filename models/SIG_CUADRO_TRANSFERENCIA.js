const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CUADRO_TRANSFERENCIA', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO',
        key: 'SEC_EJEC'
      }
    },
    ANNO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO',
        key: 'SEC_EJEC'
      }
    },
    NRO_TRANSFERENCIA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      references: {
        model: 'SIG_CUADRO_MODIFICADO',
        key: 'SEC_EJEC'
      }
    },
    SEC_CUADRO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      references: {
        model: 'SIG_CUADRO_MODIFICADO',
        key: 'SEC_EJEC'
      }
    },
    FECHA: {
      type: DataTypes.DATE,
      allowNull: false
    },
    FECHA_APROB: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GLOSA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ORIG_ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      references: {
        model: 'Fuente_Financ',
        key: 'ORIGEN'
      }
    },
    ORIG_FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false,
      references: {
        model: 'Fuente_Financ',
        key: 'ORIGEN'
      }
    },
    ORIG_SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    ORIG_TIPO_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      references: {
        model: 'sig_centro_costo_tarea',
        key: 'tipo_tarea'
      }
    },
    ORIG_NIVEL_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      references: {
        model: 'sig_centro_costo_tarea',
        key: 'tipo_tarea'
      }
    },
    ORIG_CODIGO_TAREA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      references: {
        model: 'sig_centro_costo_tarea',
        key: 'tipo_tarea'
      }
    },
    ORIG_CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'SIG_CLASIFICADOR_GASTO',
        key: 'CLASIFICADOR'
      }
    },
    ORIG_TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    DEST_ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    DEST_FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    DEST_SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    DEST_TIPO_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    DEST_NIVEL_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    DEST_CODIGO_TAREA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    DEST_CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    DEST_TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CUSER_MOD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EQUIPO_MOD: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CUADRO_TRANSFERENCIA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CUADRO_TRANSF",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANNO_EJEC" },
          { name: "NRO_TRANSFERENCIA" },
        ]
      },
    ]
  });
};
