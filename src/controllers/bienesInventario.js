const { QueryTypes } = require("sequelize");
const sequelize = require("../../config/database");
const { models } = require("./../../config/database");
const dayjs = require("dayjs");

const getBienes = async (req, res) => {
  try {
    const sqlQuery = `
    SELECT sig_patrimonio.sec_ejec,
           sig_patrimonio.tipo_modalidad,
           sig_patrimonio.secuencia,
           sig_patrimonio.codigo_activo,
           sig_patrimonio.descripcion,
           sig_patrimonio.estado,
           sig_patrimonio.item_bien,
           sig_centro_costo.nombre_depend,
           sig_patrimonio.tipo_ubicac,
           sig_patrimonio.empleado,
           sig_personal_a.apellido_paterno,
           sig_personal_a.apellido_materno,
           sig_personal_a.nombres,
           sig_patrimonio.sede,
           sig_sedes.nombre_sede,
           sig_patrimonio.pliego,
           sig_patrimonio.tipo_ppto,
           sig_patrimonio.tipo_bien,
           sig_patrimonio.modelo,
           sig_patrimonio.marca,
           sig_patrimonio.medidas,
           sig_patrimonio.caracteristicas,
           sig_patrimonio.estado_conserv,
           sig_patrimonio.estado_actual,
           sig_patrimonio.tipo_patrim,
           sig_patrimonio.subtipo,
           sig_patrimonio.flag_sbn,
           sig_patrimonio.tipo_activo,
           sig_patrimonio.grupo_bien,
           sig_patrimonio.clase_bien,
           sig_patrimonio.familia_bien,
           sig_patrimonio.fecha_movimto,
           sig_patrimonio.proveedor,
           sig_contratistas.nombre_prov,
           sig_patrimonio.flag_etiqueta,
           sig_patrimonio.fecha_etiquet,
           sig_patrimonio.flag_salida,
           sig_patrimonio.flag_contrato,
           sig_patrimonio.fecha_garantia,
           sig_patrimonio.nro_orden,
           sig_patrimonio.fecha_compra,
           sig_patrimonio.valor_compra,
           sig_patrimonio.nro_pecosa,
           sig_patrimonio.fecha_alta,
           sig_patrimonio.ano_eje,
           sig_patrimonio.clasificador,
           sig_patrimonio.sub_cta,
           sig_patrimonio.mayor,
           sig_patrimonio.fecha_reg,
           sig_patrimonio.cuser_id,
           sig_patrimonio.fecha_act,
           plan_ctb_sub_cta.nombre,
           sig_almacen.nombre_alm,
           sig_ubicac_fisica.ubicac_fisica,
           sig_patrimonio.invent_scaner,
           sig_patrimonio.valor_uit,
           sig_patrimonio.equipo_act,
           sig_patrimonio.tasa_deprec,
           sig_patrimonio.empleado_final,
           sig_personal_b.nombres AS nombre_usu,
           sig_personal_b.apellido_materno AS materno_usu,
           sig_personal_b.apellido_paterno AS paterno_usu,
           sig_patrimonio.vida_util,
           sig_patrimonio.tipo_documento,
           sig_patrimonio.nro_documento,
           sig_patrimonio.clase_patrim,
           sig_patrimonio.fecha_nea,
           sig_patrimonio.valor_nea,
           sig_patrimonio.tipo_doc_refer,
           sig_patrimonio.valor_inicial,
           sig_patrimonio.valor_deprec,
           sig_patrimonio.fec_fin_vida,
           sig_patrimonio.observaciones,
           marca.nombre,
           sig_patrimonio.tipo_marca,
           sig_patrimonio.hdepr_ajustada,
           sig_patrimonio.nro_contrato,
           sig_patrimonio.tipo_mov_ingr,
           sig_patrimonio.tipo_tran_ingr,
           sig_patrimonio.nro_mov_ingr,
           '                                                  ' AS nombre_tipo_movi,
           sig_patrimonio.estado_conserv_fin,
           sig_patrimonio.pais,
           sig_patrimonio.centro_costo,
           sig_patrimonio.sec_almacen,
           sig_patrimonio.cod_ubicac,
           '1' AS amortizable,
           sig_patrimonio.almacen,
           sig_patrimonio.sec_modelo,
           sig_patrimonio.flag_esni,
           sig_patrimonio.nro_serie,
           sig_patrimonio.codigo_barra,
           sig_patrimonio.IND_COMPONETIZABLE,
           sig_patrimonio.ind_tipo_deprec,
           sig_patrimonio.hvalor_inicial,
           sig_patrimonio.VALOR_INICIAL_ORIG,
           sig_patrimonio.VALOR_DEPREC_ORIG,
           sig_patrimonio.FLAG_DEPR_SALDO,
           sig_patrimonio.SALDO_VALOR_INICIAL,
           sig_patrimonio.FECHA_ALTA_ORIGEN
    FROM sig_patrimonio
    LEFT JOIN sig_contratistas ON sig_patrimonio.proveedor = sig_contratistas.proveedor
    LEFT JOIN sig_personal sig_personal_a ON sig_patrimonio.sec_ejec = sig_personal_a.sec_ejec AND sig_patrimonio.empleado = sig_personal_a.empleado
    LEFT JOIN sig_personal sig_personal_b ON sig_patrimonio.empleado_final = sig_personal_b.empleado AND sig_patrimonio.sec_ejec = sig_personal_b.sec_ejec
    LEFT JOIN sig_almacen ON sig_patrimonio.sec_ejec = sig_almacen.sec_ejec AND sig_patrimonio.almacen = sig_almacen.almacen AND sig_patrimonio.sec_almacen = sig_almacen.sec_almacen
    LEFT JOIN plan_ctb_sub_cta ON sig_patrimonio.ano_eje = plan_ctb_sub_cta.ano_eje AND sig_patrimonio.mayor = plan_ctb_sub_cta.mayor AND sig_patrimonio.sub_cta = plan_ctb_sub_cta.sub_cta
    LEFT JOIN sig_ubicac_fisica ON sig_patrimonio.tipo_ubicac = sig_ubicac_fisica.tipo_ubicac AND sig_patrimonio.cod_ubicac = sig_ubicac_fisica.cod_ubicac
    LEFT JOIN sig_sedes ON sig_patrimonio.pliego = sig_sedes.pliego AND sig_patrimonio.sede = sig_sedes.sede
    LEFT JOIN sig_centro_costo ON sig_patrimonio.ano_eje = sig_centro_costo.ano_eje AND sig_patrimonio.sec_ejec = sig_centro_costo.sec_ejec AND sig_patrimonio.centro_costo = sig_centro_costo.centro_costo,
    marca,
    sig_detalle_activos
    WHERE sig_patrimonio.marca = marca.marca
      AND sig_patrimonio.tipo_marca = marca.tipo_marca
      AND sig_patrimonio.sec_ejec = sig_detalle_activos.sec_ejec
      AND sig_patrimonio.tipo_modalidad = sig_detalle_activos.tipo_modalidad
      AND sig_patrimonio.secuencia = sig_detalle_activos.secuencia
      AND sig_detalle_activos.ano_eje > 2010
      AND sig_detalle_activos.sec_ejec = 1137
      AND sig_detalle_activos.tipo_modalidad = 1
      AND (
        (sig_patrimonio.grupo_bien = 74 AND sig_patrimonio.clase_bien = 8) OR
        (sig_patrimonio.grupo_bien = 95 AND sig_patrimonio.clase_bien = 22) OR
        (sig_patrimonio.grupo_bien = 74 AND sig_patrimonio.clase_bien = 22)
      )
      AND NOT EXISTS (
        SELECT a.ano_eje
        FROM sig_asignaciones a
        WHERE sig_detalle_activos.ano_eje = a.ano_eje
          AND sig_detalle_activos.sec_ejec = a.sec_ejec
          AND sig_detalle_activos.tipo_modalidad = a.tipo_modalidad
          AND sig_detalle_activos.secuencia = a.secuencia
      )
    UNION
    SELECT sig_patrimonio.sec_ejec,
           sig_patrimonio.tipo_modalidad,
           sig_patrimonio.secuencia,
           sig_patrimonio.codigo_activo,
           sig_patrimonio.descripcion,
           sig_patrimonio.estado,
           sig_patrimonio.item_bien,
           sig_centro_costo.nombre_depend,
           sig_asignaciones.tipo_ubicac,
           sig_asignaciones.empleado,
           sig_personal_a.apellido_paterno,
           sig_personal_a.apellido_materno,
           sig_personal_a.nombres,
           sig_asignaciones.sede,
           sig_sedes.nombre_sede,
           sig_asignaciones.pliego,
           sig_patrimonio.tipo_ppto,
           sig_patrimonio.tipo_bien,
           sig_patrimonio.modelo,
           sig_patrimonio.marca,
           sig_patrimonio.medidas,
           sig_patrimonio.caracteristicas,
           sig_patrimonio.estado_conserv,
           sig_patrimonio.estado_actual,
           sig_patrimonio.tipo_patrim,
           sig_patrimonio.subtipo,
           sig_patrimonio.flag_sbn,
           sig_patrimonio.tipo_activo,
           sig_patrimonio.grupo_bien,
           sig_patrimonio.clase_bien,
           sig_patrimonio.familia_bien,
           sig_patrimonio.fecha_movimto,
           sig_patrimonio.proveedor,
           sig_contratistas.nombre_prov,
           sig_patrimonio.flag_etiqueta,
           sig_patrimonio.fecha_etiquet,
           sig_patrimonio.flag_salida,
           sig_patrimonio.flag_contrato,
           sig_patrimonio.fecha_garantia,
           sig_patrimonio.nro_orden,
           sig_patrimonio.fecha_compra,
           sig_patrimonio.valor_compra,
           sig_patrimonio.nro_pecosa,
           sig_patrimonio.fecha_alta,
           sig_patrimonio.ano_eje,
           sig_patrimonio.clasificador,
           sig_patrimonio.sub_cta,
           sig_patrimonio.mayor,
           sig_patrimonio.fecha_reg,
           sig_patrimonio.cuser_id,
           sig_patrimonio.fecha_act,
           plan_ctb_sub_cta.nombre,
           sig_almacen.nombre_alm,
           sig_ubicac_fisica.ubicac_fisica,
           sig_patrimonio.invent_scaner,
           sig_patrimonio.valor_uit,
           sig_patrimonio.equipo_act,
           sig_patrimonio.tasa_deprec,
           sig_asignaciones.empleado_final,
           sig_personal_b.nombres AS nombre_usu,
           sig_personal_b.apellido_materno AS materno_usu,
           sig_personal_b.apellido_paterno AS paterno_usu,
           sig_patrimonio.vida_util,
           sig_patrimonio.tipo_documento,
           sig_patrimonio.nro_documento,
           sig_patrimonio.clase_patrim,
           sig_patrimonio.fecha_nea,
           sig_patrimonio.valor_nea,
           sig_patrimonio.tipo_doc_refer,
           sig_patrimonio.valor_inicial,
           sig_patrimonio.valor_deprec,
           sig_patrimonio.fec_fin_vida,
           sig_patrimonio.observaciones,
           marca.nombre,
           sig_patrimonio.tipo_marca,
           sig_patrimonio.hdepr_ajustada,
           sig_patrimonio.nro_contrato,
           sig_patrimonio.tipo_mov_ingr,
           sig_patrimonio.tipo_tran_ingr,
           sig_patrimonio.nro_mov_ingr,
           '                                                  ' AS nombre_tipo_movi,
           sig_patrimonio.estado_conserv_fin,
           sig_patrimonio.pais,
           sig_asignaciones.centro_costo,
           sig_patrimonio.sec_almacen,
           sig_asignaciones.cod_ubicac,
           '1' AS amortizable,
           sig_patrimonio.almacen,
           sig_patrimonio.sec_modelo,
           sig_patrimonio.flag_esni,
           sig_patrimonio.nro_serie,
           sig_patrimonio.codigo_barra,
           sig_patrimonio.IND_COMPONETIZABLE,
           sig_patrimonio.ind_tipo_deprec,
           sig_patrimonio.hvalor_inicial,
           sig_patrimonio.VALOR_INICIAL_ORIG,
           sig_patrimonio.VALOR_DEPREC_ORIG,
           sig_patrimonio.FLAG_DEPR_SALDO,
           sig_patrimonio.SALDO_VALOR_INICIAL,
           sig_patrimonio.FECHA_ALTA_ORIGEN
    FROM sig_patrimonio
    LEFT JOIN sig_contratistas ON sig_patrimonio.proveedor = sig_contratistas.proveedor
    LEFT JOIN sig_almacen ON sig_patrimonio.sec_ejec = sig_almacen.sec_ejec AND sig_patrimonio.almacen = sig_almacen.almacen AND sig_patrimonio.sec_almacen = sig_almacen.sec_almacen
    LEFT JOIN plan_ctb_sub_cta ON sig_patrimonio.ano_eje = plan_ctb_sub_cta.ano_eje AND sig_patrimonio.mayor = plan_ctb_sub_cta.mayor AND sig_patrimonio.sub_cta = plan_ctb_sub_cta.sub_cta,
    marca,
    sig_detalle_activos,
    sig_asignaciones
    LEFT JOIN sig_centro_costo ON sig_asignaciones.ano_eje = sig_centro_costo.ano_eje AND sig_asignaciones.sec_ejec = sig_centro_costo.sec_ejec AND sig_asignaciones.centro_costo = sig_centro_costo.centro_costo
    LEFT JOIN sig_personal sig_personal_a ON sig_asignaciones.sec_ejec = sig_personal_a.sec_ejec AND sig_asignaciones.empleado = sig_personal_a.empleado
    LEFT JOIN sig_personal sig_personal_b ON sig_asignaciones.sec_ejec = sig_personal_b.sec_ejec AND sig_asignaciones.empleado_final = sig_personal_b.empleado
    LEFT JOIN sig_ubicac_fisica ON sig_asignaciones.tipo_ubicac = sig_ubicac_fisica.tipo_ubicac AND sig_asignaciones.cod_ubicac = sig_ubicac_fisica.cod_ubicac
    LEFT JOIN sig_sedes ON sig_asignaciones.pliego = sig_sedes.pliego AND sig_asignaciones.sede = sig_sedes.sede
    WHERE sig_patrimonio.marca = marca.marca
      AND sig_patrimonio.tipo_marca = marca.tipo_marca
      AND sig_patrimonio.sec_ejec = sig_detalle_activos.sec_ejec
      AND sig_patrimonio.tipo_modalidad = sig_detalle_activos.tipo_modalidad
      AND sig_patrimonio.secuencia = sig_detalle_activos.secuencia
      AND sig_asignaciones.ano_eje = sig_detalle_activos.ano_eje
      AND sig_asignaciones.sec_ejec = sig_detalle_activos.sec_ejec
      AND sig_asignaciones.tipo_modalidad = sig_detalle_activos.tipo_modalidad
      AND sig_asignaciones.secuencia = sig_detalle_activos.secuencia
      AND sig_detalle_activos.ano_eje > 2010
      AND sig_detalle_activos.sec_ejec = 1137
      AND sig_detalle_activos.tipo_modalidad = 1
      AND (
        (sig_patrimonio.grupo_bien = 74 AND sig_patrimonio.clase_bien = 8) OR
        (sig_patrimonio.grupo_bien = 95 AND sig_patrimonio.clase_bien = 22) OR
        (sig_patrimonio.grupo_bien = 74 AND sig_patrimonio.clase_bien = 22)

      )
    `;

    const etiquetas = await sequelize.query(sqlQuery, {
      type: QueryTypes.SELECT,
    });

    // Filtrar elementos repetidos por codigo_activo
    const filteredEtiquetas = [];
    const seenCodigos = new Set();

    for (const etiqueta of etiquetas) {
      if (!seenCodigos.has(etiqueta.codigo_activo)) {
        filteredEtiquetas.push(etiqueta);
        seenCodigos.add(etiqueta.codigo_activo);
      }
    }

    const format = filteredEtiquetas.map((item) => {
      return {
        sec_eje: item?.sec_eje,
        secuencia: item?.secuencia,
        sbn: item?.codigo_activo,
        descripcion: item?.descripcion,
        estado: item?.estado,
        nombre_depend: item?.nombre_depend,
        nombre_sede: item?.nombre_sede,
        modelo: item?.modelo,
        marca: item?.marca,
        caracteristicas: item?.caracteristicas,
        estado_conserv: item?.estado_conserv,
        estado_actual: item?.estado_actual,
        nro_orden: item?.nro_orden,
        fecha_compra: item?.fecha_compra,
        valor_compra: item?.valor_compra,
        ubicac_fisica: item?.ubicac_fisica,
        empleado_final: item?.empleado_final,
        usuario_final:
          item?.nombre_usu + " " + item?.paterno_usu + " " + item?.materno_usu,
        valor_inicial: item?.valor_inicial,
        nro_serie: item?.nro_serie,
        codigo_barra: item?.codigo_barra,
        proveedor: item?.proveedor,
        grupo_bien: item.grupo_bien,
        clase_bien: item.clase_bien,
      };
    });

    return res.status(200).json({ total: format.length, data: format });
  } catch (error) {
    res.status(500).json();
    console.error("====================================");
    console.error(error);
    console.error("====================================");
  }
};
const getBienesPrueba = async (req, res) => {
  try {
    const sqlQuery = `
    SELECT 
    sig_patrimonio.sec_ejec,
    sig_patrimonio.tipo_modalidad,
    sig_patrimonio.secuencia,
    sig_patrimonio.codigo_activo,
    sig_patrimonio.descripcion,
    sig_personal_a.apellido_paterno,
    sig_personal_a.apellido_materno,
    sig_personal_a.nombres,
    sig_patrimonio.modelo,
    sig_patrimonio.marca,
    marca.nombre AS nombre_marca, -- Campo agregado
    sig_patrimonio.medidas,
    sig_patrimonio.caracteristicas,
    sig_patrimonio.estado_conserv,
    sig_patrimonio.grupo_bien,
    sig_patrimonio.clase_bien,
    sig_patrimonio.familia_bien,
    sig_contratistas.nombre_prov,
    sig_patrimonio.nro_orden,
    sig_patrimonio.fecha_compra,
    sig_patrimonio.valor_compra,
    sig_personal_b.nombres AS nombre_usu,
    sig_personal_b.apellido_materno AS materno_usu,
    sig_personal_b.apellido_paterno AS paterno_usu,
    sig_patrimonio.valor_inicial,
    sig_patrimonio.nro_serie,
    sig_patrimonio.empleado_final,
    sig_patrimonio.codigo_barra,
    sig_patrimonio.FECHA_ALTA_ORIGEN
FROM sig_patrimonio
LEFT JOIN sig_contratistas ON sig_patrimonio.proveedor = sig_contratistas.proveedor
LEFT JOIN sig_almacen ON sig_patrimonio.sec_ejec = sig_almacen.sec_ejec AND sig_patrimonio.almacen = sig_almacen.almacen AND sig_patrimonio.sec_almacen = sig_almacen.sec_almacen
LEFT JOIN plan_ctb_sub_cta ON sig_patrimonio.ano_eje = plan_ctb_sub_cta.ano_eje AND sig_patrimonio.mayor = plan_ctb_sub_cta.mayor AND sig_patrimonio.sub_cta = plan_ctb_sub_cta.sub_cta
LEFT JOIN marca ON sig_patrimonio.marca = marca.marca AND sig_patrimonio.tipo_marca = marca.tipo_marca -- Unión para obtener el nombre de la marca
LEFT JOIN sig_detalle_activos ON sig_patrimonio.sec_ejec = sig_detalle_activos.sec_ejec AND sig_patrimonio.tipo_modalidad = sig_detalle_activos.tipo_modalidad AND sig_patrimonio.secuencia = sig_detalle_activos.secuencia
LEFT JOIN sig_asignaciones ON sig_asignaciones.ano_eje = sig_detalle_activos.ano_eje AND sig_asignaciones.sec_ejec = sig_detalle_activos.sec_ejec AND sig_asignaciones.tipo_modalidad = sig_detalle_activos.tipo_modalidad AND sig_asignaciones.secuencia = sig_detalle_activos.secuencia
LEFT JOIN sig_centro_costo ON sig_asignaciones.ano_eje = sig_centro_costo.ano_eje AND sig_asignaciones.sec_ejec = sig_centro_costo.sec_ejec AND sig_asignaciones.centro_costo = sig_centro_costo.centro_costo
LEFT JOIN sig_personal sig_personal_a ON sig_asignaciones.sec_ejec = sig_personal_a.sec_ejec AND sig_asignaciones.empleado = sig_personal_a.empleado
LEFT JOIN sig_personal sig_personal_b ON sig_asignaciones.sec_ejec = sig_personal_b.sec_ejec AND sig_asignaciones.empleado_final = sig_personal_b.empleado
LEFT JOIN sig_ubicac_fisica ON sig_asignaciones.tipo_ubicac = sig_ubicac_fisica.tipo_ubicac AND sig_asignaciones.cod_ubicac = sig_ubicac_fisica.cod_ubicac
LEFT JOIN sig_sedes ON sig_asignaciones.pliego = sig_sedes.pliego AND sig_asignaciones.sede = sig_sedes.sede
WHERE 
    sig_detalle_activos.ano_eje > 2010
    AND sig_detalle_activos.sec_ejec = 1137
    AND sig_detalle_activos.tipo_modalidad = 1
    AND (
        (sig_patrimonio.grupo_bien = 74 AND sig_patrimonio.clase_bien = 8) OR
        (sig_patrimonio.grupo_bien = 95 AND sig_patrimonio.clase_bien = 22) OR
        (sig_patrimonio.grupo_bien = 74 AND sig_patrimonio.clase_bien = 22)
    )
    `;

    const bienes = await sequelize.query(sqlQuery, {
      type: QueryTypes.SELECT,
    });


    // Filtrar elementos repetidos por codigo_activo
    const filteredEtiquetas = [];
    const seenCodigos = new Set();

    for (const etiqueta of bienes) {
      if (!seenCodigos.has(etiqueta.codigo_activo)) {
        filteredEtiquetas.push(etiqueta);
        seenCodigos.add(etiqueta.codigo_activo);
      }
    }

    const format = filteredEtiquetas.map((item) => {
      return {
        secuencia: item?.secuencia,
        sbn: item?.codigo_activo,
        descripcion: item?.descripcion,
        estado: item?.estado_conserv,
        modelo: item?.modelo,
        marca: item?.nombre_marca,
        caracteristicas: item?.caracteristicas,
        estado_conserv: item?.estado_conserv,
        nro_orden: item?.nro_orden,
        fecha_ingreso: item?.fecha_compra,
        valor_compra: item?.valor_compra,
        ubicac_fisica: item?.ubicac_fisica,
        empleado_final: item?.empleado_final,
        usuario_final:
          item?.nombre_usu + " " + item?.paterno_usu + " " + item?.materno_usu,
        nro_serie: item?.nro_serie,
        proveedor: item?.nombre_prov,
        grupo_bien: item.grupo_bien,
        clase_bien: item.clase_bien,
      };
    });

    return res.status(200).json({  data: format });
  } catch (error) {
    res.status(500).json();
    console.error("====================================");
    console.error(error);
    console.error("====================================");
  }
};

module.exports = {
  getBienes,
  getBienesPrueba
};
