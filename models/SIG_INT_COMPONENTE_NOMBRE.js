const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INT_COMPONENTE_NOMBRE', {
    ANO_EJE_MOV: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC_MOV: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_AUD_MOV: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    TIPO_COMPONENTE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NOMBRE: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_ENVIO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_INT_COMPONENTE_NOMBRE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SIG_INT_COMPONEN__3B83265D",
        unique: true,
        fields: [
          { name: "ANO_EJE_MOV" },
          { name: "SEC_EJEC_MOV" },
          { name: "SEC_AUD_MOV" },
          { name: "ANO_EJE" },
          { name: "COMPONENTE" },
        ]
      },
    ]
  });
};
