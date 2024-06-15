const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expediente_encargo', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    sec_ejec2: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    expediente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    ciclo: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    fase: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    secuencia: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true
    },
    correlativo: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true
    },
    categ_gasto: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    grupo_gasto: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    modalidad_gasto: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    elemento_gasto: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    sec_func: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    mes_eje: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    funcion: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    programa: {
      type: DataTypes.CHAR(3),
      allowNull: false
    },
    origen: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    fuente_financ: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    cod_doc: {
      type: DataTypes.CHAR(3),
      allowNull: false
    },
    num_doc: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    tipo_pago: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    tipo_recurso: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    tipo_compromiso: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    monto: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    monto_saldo: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    estado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    estado_envio: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    archivo: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    MONTO_REQUERIDO: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    MONTO_EJECUTADO: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    CONVENIO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FLAG_SEL: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    clasificador: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    MONTO_PRECOMPROMISO: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    FLAG_TESORO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    tipo_entidad: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'expediente_encargo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_EXPEDIENTE_ENCARGO",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "sec_ejec2" },
          { name: "expediente" },
          { name: "ciclo" },
          { name: "fase" },
          { name: "secuencia" },
          { name: "correlativo" },
          { name: "categ_gasto" },
          { name: "grupo_gasto" },
          { name: "modalidad_gasto" },
          { name: "elemento_gasto" },
          { name: "clasificador" },
          { name: "sec_func" },
        ]
      },
    ]
  });
};
