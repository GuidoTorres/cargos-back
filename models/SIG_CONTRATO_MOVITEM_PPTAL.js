const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONTRATO_MOVITEM_PPTAL', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SOLICITUD_MODIFICACION',
        key: 'SEC_SOL_MOD'
      }
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_MOVIM_ITEM',
        key: 'TIPO_CONTRATO'
      }
    },
    TIPO_CONTRATO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_MOVIM_ITEM',
        key: 'TIPO_CONTRATO'
      }
    },
    NRO_CONTRATO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_MOVIM_ITEM',
        key: 'TIPO_CONTRATO'
      }
    },
    SEC_MOVIMIENTO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_MOVIM_ITEM',
        key: 'TIPO_CONTRATO'
      }
    },
    NRO_ITEM: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_MOVIM_ITEM',
        key: 'TIPO_CONTRATO'
      }
    },
    ANO_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_MOVIM_ITEM',
        key: 'TIPO_CONTRATO'
      }
    },
    SEC_PPTO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    TIPO_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    NIVEL_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    CODIGO_TAREA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      references: {
        model: 'SIG_SOLICITUD_MODIFICACION',
        key: 'SEC_SOL_MOD'
      }
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    VALOR_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    SEC_CUADRO_CM: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    SEC_ITEM_CM: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    ANNO_PROG_CM: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    ANNO_EJEC_SMD: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true,
      references: {
        model: 'SIG_SOLICITUD_MODIFICACION',
        key: 'SEC_SOL_MOD'
      }
    },
    SEC_SOL_MOD_SMD: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      references: {
        model: 'SIG_SOLICITUD_MODIFICACION',
        key: 'SEC_SOL_MOD'
      }
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
    ANNO_EJEC_CM: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    }
  }, {
    sequelize,
    tableName: 'SIG_CONTRATO_MOVITEM_PPTAL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CON_MOV_PPT",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
          { name: "TIPO_CONTRATO" },
          { name: "NRO_CONTRATO" },
          { name: "SEC_MOVIMIENTO" },
          { name: "NRO_ITEM" },
          { name: "ANO_PROCESO" },
          { name: "SEC_PPTO" },
        ]
      },
    ]
  });
};
