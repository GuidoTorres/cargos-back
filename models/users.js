const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    cuser_id: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    cuserfname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cuserlname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cpassword: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tipo_ue: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    sec_ejec: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    lok2custlimit: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    lok2custview: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    lok2custadd: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    lok2custedit: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    lok2custdel: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    lok2custpgaddr: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    lok2custpginfo: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    lok2custpghist: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    lok2custpgnotes: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    lok2custpgorders: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    lok2custpg7: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    lok2custpg8: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    lok2ordadd: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    lok2orddel: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    lok2ordedit: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    lok2tbledit: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    lok2rptedit: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    lok2lbledit: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    lok2maint: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    lok2filt: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    lsupervisor: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    mnotes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tupdatelast: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cupdateby: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    lcontador: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    cpassword_ctb: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    cmenu_id: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    flag_compromiso: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    flag_devengado: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    flag_girado: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    flag_pagado: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    flag_rendicion: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    flag_determinado: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    flag_recaudado: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    cestado: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    DT_VIGEN_FECHA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NOMBRE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NOMBRE_2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    APELLIDO_PATERNO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    APELLIDO_MATERNO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CUSER_ID_REG: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_USERS",
        unique: true,
        fields: [
          { name: "cuser_id" },
        ]
      },
      {
        name: "PK_USERS",
        unique: true,
        fields: [
          { name: "cuser_id" },
        ]
      },
    ]
  });
};
