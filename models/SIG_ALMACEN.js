const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ALMACEN', {
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_personal',
        key: 'sec_ejec'
      }
    },
    ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    SEC_ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    pliego: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    INDICADOR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SEDE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NOMBRE_ALM: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DIRECCION: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    REFERENCIA: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'sig_personal',
        key: 'sec_ejec'
      }
    },
    TELEFONOS: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Pais: {
      type: DataTypes.STRING(4),
      allowNull: true,
      references: {
        model: 'ubigeo',
        key: 'provincia'
      }
    },
    departamento: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'ubigeo',
        key: 'provincia'
      }
    },
    provincia: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'ubigeo',
        key: 'provincia'
      }
    },
    distrito: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'ubigeo',
        key: 'provincia'
      }
    },
    ANO_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MES_PROCESO: {
      type: DataTypes.STRING(2),
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
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FLAG_SISMED: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_DONACION: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NIVEL: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_ALMACEN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_ALMACEN_01",
        fields: [
          { name: "EMPLEADO" },
          { name: "sec_ejec" },
        ]
      },
      {
        name: "IND_SIG_ALMACEN_02",
        fields: [
          { name: "Pais" },
          { name: "departamento" },
          { name: "provincia" },
          { name: "distrito" },
        ]
      },
      {
        name: "IND_SIG_ALMACEN_03",
        fields: [
          { name: "SEDE" },
          { name: "pliego" },
        ]
      },
      {
        name: "PK_SIG_ALMACEN",
        unique: true,
        fields: [
          { name: "sec_ejec" },
          { name: "ALMACEN" },
          { name: "SEC_ALMACEN" },
        ]
      },
    ]
  });
};
