const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ENCARGO_REQ', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVENIO',
        key: 'SEC_EJEC'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVENIO',
        key: 'SEC_EJEC'
      }
    },
    SEC_ENCARGO_REQ: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    ROL_ENCARGO: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      references: {
        model: 'SIG_CONVENIO',
        key: 'SEC_EJEC'
      }
    },
    NRO_CONVENIO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true,
      references: {
        model: 'SIG_CONVENIO',
        key: 'SEC_EJEC'
      }
    },
    SEC_EJEC2: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    OBSERVACION: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    MES_ENCARGO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FECHA_ENCARGO_REQ: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
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
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FLAG_TESORO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NIVEL_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CODIGO_TAREA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    FECHA_AUTORIZACION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_AUTORIZACION: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    },
    NRO_REFERENCIA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHA_REFERENCIA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EXPEDIENTE: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    FLAG_EXP: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    tipo_entidad: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_MOD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_MOD: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_ENCARGO_REQ',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_ENCARGO_REQ",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_ENCARGO_REQ" },
        ]
      },
    ]
  });
};
