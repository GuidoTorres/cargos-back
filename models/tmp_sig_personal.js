const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_sig_personal', {
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    empleado: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    estado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    apellido_paterno: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    apellido_materno: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    nombres: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    tipo_empleado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    entidad_externa: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    nombre_completo: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    centro_costo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    pais: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    departamento: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    provincia: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    distrito: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    telefonos: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    fecha_ingreso: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tipo_planilla: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    estado_civil: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    sexo_empleado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    grado_inst: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fecha_nac: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pais_nac: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    docum_ident: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    codigo_ipss: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    grupo_sang: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    codigo_prof: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    flag_interno: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    nro_colegiatura: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    fecha_reg: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cuser_id: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    empleado_sbn: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FLAG_AUTORIZADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    cuserlp: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    nivel_viatico: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    banco_pago: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cuenta_banco: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CATEGORIA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CARGO: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    tipo_pago_planilla: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    E_MAIL: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FAX: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TIPO_DOCUM_IDENT: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    CUENTA_INTERBANC: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    BANCO: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmp_sig_personal',
    schema: 'dbo',
    timestamps: false
  });
};
