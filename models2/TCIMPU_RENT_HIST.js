const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TCIMPU_RENT_HIST', {
    ID_PERS: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    IRenEnero: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    },
    IRenFebrero: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    },
    IRenMarzo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    },
    IRenAbril: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    },
    IRenMayo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    },
    IRenJunio: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    },
    IRenJulio: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    },
    IRenAgosto: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    },
    IRenSeptiembre: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    },
    IRenOctubre: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    },
    IRenNoviembre: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    },
    IRenDiciembre: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    },
    IRenGratFiesPatrias: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    },
    IRenEscolaridad: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'TCIMPU_RENT_HIST',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_HistorialImpuestoRenta",
        unique: true,
        fields: [
          { name: "ID_PERS" },
        ]
      },
    ]
  });
};
