const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MOVIMIENTO_PERSONAL', {
    nro_movimiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    empleado: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_personal',
        key: 'sec_ejec'
      }
    },
    ano_eje: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_personal',
        key: 'sec_ejec'
      }
    },
    tipo: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    centro_costo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    grado_inst: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    profesion: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    nro_colegiatura: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fecha_cese: {
      type: DataTypes.DATE,
      allowNull: true
    },
    comentario: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    usua_crea_reg: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    fec_crea_reg: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_MOVIMIENTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FEC_MODI_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USUA_MODI_REG: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SEC_EJEC_DEST: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_MOVIMIENTO_PERSONAL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SI_MOV_PERSONA",
        unique: true,
        fields: [
          { name: "nro_movimiento" },
          { name: "empleado" },
          { name: "ano_eje" },
          { name: "sec_ejec" },
        ]
      },
    ]
  });
};
