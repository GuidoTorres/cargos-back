const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cert_cab', {
    secuencial: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    ano_eje: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    sec_ejec: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    es_comp: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tipo_ope: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    cod_doc: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    num_doc: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fec_doc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tipo_id: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ruc: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    fte_fin: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    moneda: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    t_cambio: {
      type: DataTypes.DECIMAL(19,15),
      allowNull: true
    },
    gloza: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ue_envio: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ue_estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    siaf_cer: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    siaf_sec: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    siaf_cor: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    intf_cer: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    intf_sec: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    intf_cor: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    mef_estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    mef_error: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    mef_mensa: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    estado_reg: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    dato_ori: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPO_FINAN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TRANSFERENCIA_FINANCIERA_ID: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DISP_LEGAL: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    TIPO_CERTI: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CEAMOCE_ID: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    INTF_IOARR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SECUENCIA_FASE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SECUENCIA_OPERA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SECUENCIA_DET: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cert_cab',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ind_cert_cab_01",
        fields: [
          { name: "secuencial" },
        ]
      },
      {
        name: "IND_CERT_CAB_02",
        fields: [
          { name: "secuencial" },
          { name: "fte_fin" },
          { name: "ano_eje" },
          { name: "sec_ejec" },
        ]
      },
      {
        name: "pk_cert_cab",
        unique: true,
        fields: [
          { name: "secuencial" },
        ]
      },
    ]
  });
};
