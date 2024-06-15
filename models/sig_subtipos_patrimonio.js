const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_subtipos_patrimonio', {
    tipo_patrim: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_tipo_patrimonio',
        key: 'tipo_patrim'
      }
    },
    clase_patrim: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_tipo_patrimonio',
        key: 'tipo_patrim'
      }
    },
    subtipo: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    nombre_subtipo: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    tipo_plantilla: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_subtipos_patrimonio',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_SIG_SUBTIPOS_PAT",
        unique: true,
        fields: [
          { name: "tipo_patrim" },
          { name: "clase_patrim" },
          { name: "subtipo" },
        ]
      },
      {
        name: "ind_subtipo_patrimonio_01",
        fields: [
          { name: "tipo_patrim" },
          { name: "clase_patrim" },
        ]
      },
      {
        name: "pk_sig_subtipos_pat",
        unique: true,
        fields: [
          { name: "tipo_patrim" },
          { name: "clase_patrim" },
          { name: "subtipo" },
        ]
      },
    ]
  });
};
