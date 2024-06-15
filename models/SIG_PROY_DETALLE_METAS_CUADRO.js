const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PROY_DETALLE_METAS_CUADRO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROY_DETALLE_BSERV_CUADRO',
        key: 'TIPO_BIEN'
      }
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROY_DETALLE_BSERV_CUADRO',
        key: 'TIPO_BIEN'
      }
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROY_DETALLE_BSERV_CUADRO',
        key: 'TIPO_BIEN'
      }
    },
    SEC_CUADRO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROY_DETALLE_BSERV_CUADRO',
        key: 'TIPO_BIEN'
      }
    },
    SECUENCIA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROY_DETALLE_BSERV_CUADRO',
        key: 'TIPO_BIEN'
      }
    },
    SEC_META: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    sec_func: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    FUNCION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PROGRAMA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    TIPO_RECURSO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    OPERACION: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    CATEG_GASTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_GASTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TIPO_DESTINO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MODAL_DESTINO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FLAG_DESTINO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_PAGO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_COMPROMISO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CANT_SOLICITADA: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANT_APROBADA: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    MNTO_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MNTO_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    TIPO_IMPUESTO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FTE_FTO_IMPTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TASA_IMPTO: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_IMPTO_MON: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    VALOR_IMPTO_MON: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    VALOR_IMPTO_SOL: {
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
    MNTO_SOLES_MODIF: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    EXPEDIENTE: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    SEC_FUNC_ENCARGO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    ciclo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    fase: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    secuencia_expediente: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    correlativo: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    CANT_EJECUTADA: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    indicador_paac: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    sec_resumen_pao: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    sec_meta_pao: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    TIPO_PAGO_IMPTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_RECURSO_IMPTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_COMPROMISO_IMPTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_USO_ORIG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PROY_DETALLE_METAS_CUADRO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PROY_DETALLE_METAS_CUADRO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "sec_ejec" },
          { name: "TIPO_BIEN" },
          { name: "SEC_CUADRO" },
          { name: "SECUENCIA" },
          { name: "SEC_META" },
        ]
      },
    ]
  });
};
