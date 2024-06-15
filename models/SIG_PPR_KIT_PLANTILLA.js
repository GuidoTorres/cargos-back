const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_KIT_PLANTILLA', {
    NROKIT: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_KIT: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true
    },
    ID_ESTCOSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SECTOR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    ESTRATEGIA_NACIONAL: {
      type: DataTypes.STRING(4),
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
    SUB_PROGRAMA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    FINALIDAD: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CANT_REQUERIDA: {
      type: DataTypes.DECIMAL(10,3),
      allowNull: true
    },
    PREC_UNIT: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_CREACION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_MOD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    NRO_INTERVENCIONES: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    ENVIADO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    origen: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    programa_institucional: {
      type: DataTypes.STRING(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_KIT_PLANTILLA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PPR_KIT_PLANTILLA",
        unique: true,
        fields: [
          { name: "NROKIT" },
          { name: "SEC_KIT" },
          { name: "ID_ESTCOSTO" },
          { name: "ANO_EJE" },
        ]
      },
    ]
  });
};
