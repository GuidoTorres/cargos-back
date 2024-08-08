const { QueryTypes } = require("sequelize");
const sequelize = require("../../config/database");
const { models } = require("./../../config/database");

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
    SELECT DISTINCT
    sig_patrimonio.codigo_activo,   
    sig_patrimonio.descripcion,   
    sig_sedes.nombre_sede,   
    sig_centro_costo.nombre_depend,   
    sig_personal.nombre_completo,   
    sig_contratistas.nombre_prov,   
    sig_patrimonio.fecha_compra,   
    sig_patrimonio.valor_compra,   
    sig_patrimonio.fecha_alta,   
    sig_patrimonio.valor_inicial,   
    sig_patrimonio.sede,   
    sig_patrimonio.pliego,   
    sig_ubicac_fisica.ubicac_fisica,   
    catalogo_bien_serv.nombre_item,   
    sig_patrimonio.sec_ejec,   
    sig_patrimonio.tipo_modalidad,   
    sig_patrimonio.codigo_barra,   
    sig_patrimonio.modelo,   
    sig_patrimonio.nro_orden,   
    sig_patrimonio.medidas,   
    sig_tipo_movimiento.abrev_movimto,   
    sig_patrimonio.secuencia,   
    sig_subtipos_patrimonio.nombre_subtipo,   
    marca.nombre,   
    sig_movimiento_activo.tipo_movimto,   
    sig_movimiento_activo.tipo_transac,   
    sig_movimiento_activo.nro_movimto,   
    sig_patrimonio.valor_inicial-(sig_patrimonio.valor_deprec) as hvalor_neto,   
    sig_movimiento_activo.ano_eje,   
    sig_movimiento_activo.mes_proceso,   
    sig_patrimonio.fecha_movimto,   
    sig_patrimonio.valor_nea,   
    sig_patrimonio.fecha_nea,   
    sig_patrimonio.nro_documento,   
    'N' as fecha_baja_ctble,   
    sig_patrimonio.fec_baja_ctble,   
    sig_patrimonio.sec_modelo,   
    sig_patrimonio.nro_serie,
    COALESCE(tdevolucion.flag_devolucion, 'N') as FLAG_DEVOLUCION,
    SIG_PATRIMONIO.IND_TIPO_DEPREC  METODO_DEPREC,
    sig_patrimonio.tipo_documento,
    0 alta_auto
FROM sig_patrimonio
  INNER JOIN
     (Select y.ano_eje,x.sec_ejec,x.tipo_modalidad,x.secuencia,
           (Case When Coalesce(t_acto_admin.ind_sin_retorno,'X')='S' Then t_acto_admin.mayor Else x.mayor End) as mayor,
           (Case When Coalesce(t_acto_admin.ind_sin_retorno,'X')='S' Then t_acto_admin.sub_cta Else x.sub_cta End) as sub_cta,t_acto_admin.ind_sin_retorno
       from sig_detalle_activos y,
           sig_patrimonio x
           LEFT JOIN
             (Select s.sec_ejec,s.tipo_modalidad,s.secuencia,s.mayor,s.sub_cta,'S' as ind_sin_retorno
               from sig_movim_administrativo r,
                   sig_det_administrativo s
               where r.ano_eje			= s.ano_eje and
                   r.sec_ejec		= s.sec_ejec and
                   r.mes_eje			= s.mes_eje and
                   r.tipo_acto_adm	= s.tipo_acto_adm and
                   r.nro_movimto	= s.nro_movimto and
                  ((((r.fecha_inicio <= '30-4-2024' AND r.fecha_fin >= '1-4-2024') or r.fecha_fin < '1-4-2024') and 
                   (s.tipo_acto_adm > 1 or	/* ARRENDAMIENTO o CESION EN USO */
                   (s.tipo_acto_adm = 1 and	/* AFECTACION EN USO */
                   (s.estado = '0' or
                   (s.estado = '1' and s.fecha_retorno > '30-4-2024')))) and r.fecha_fin_renovacion is null) OR	/* SIN RENOVACION */
                 (((r.fecha_inicio <= '30-4-2024' AND r.fecha_fin_renovacion >= '1-4-2024') or r.fecha_fin_renovacion < '1-4-2024') and 
                   (s.tipo_acto_adm <> 2 and	/* diferente a ARRENDAMIENTO */
                   (s.estado = '0' or
                   (s.estado = '1' and s.fecha_retorno > '30-4-2024'))) and r.fecha_fin_renovacion is not null))	/* CON RENOVACION */
                   ) t_acto_admin ON
           x.sec_ejec			= t_acto_admin.sec_ejec and
           x.tipo_modalidad	= t_acto_admin.tipo_modalidad and
           x.secuencia			= t_acto_admin.secuencia
      where y.sec_ejec			= x.sec_ejec and
          y.tipo_modalidad = x.tipo_modalidad and
          y.secuencia		= x.secuencia and
          y.ano_eje			= 2024 and
          y.sec_ejec			= 1137 and
          y.tipo_modalidad	= 1 and
          y.tipo_movimto in ('A','I')) t_pat ON
   sig_patrimonio.sec_ejec			= t_pat.sec_ejec and
  sig_patrimonio.tipo_modalidad	= t_pat.tipo_modalidad and
  sig_patrimonio.secuencia			= t_pat.secuencia
    left join (SELECT DISTINCT 'S' as flag_devolucion, x.ano_eje, x.sec_ejec, x.mes_proceso, x.tipo_movimto, x.nro_movimto, y.tipo_modalidad, y.secuencia
                FROM sig_movimiento_activo x, sig_detalle_activos y
         where x.ano_eje = y.ano_eje and 
             x.sec_ejec = y.sec_ejec and 
             x.mes_proceso = y.mes_proceso and 
             x.tipo_movimto = y.tipo_movimto and 
             x.nro_movimto = y.nro_movimto and
             x.ano_eje = 2024 and
             x.sec_ejec = 1137 and
             x.TIPO_MOVIMTO = 'S'    AND
                x.TIPO_TRANSAC = 10	) tdevolucion ON
   tdevolucion.SEC_EJEC     = sig_patrimonio.SEC_EJEC      AND
   tdevolucion.tipo_modalidad = sig_patrimonio.tipo_modalidad  AND
   tdevolucion.secuencia  = sig_patrimonio.secuencia
    LEFT JOIN sig_sedes ON
    sig_sedes.sede = sig_patrimonio.sede AND 
  sig_sedes.pliego = sig_patrimonio.pliego
    LEFT JOIN sig_personal ON
    sig_personal.sec_ejec = sig_patrimonio.sec_ejec AND 
  sig_personal.empleado = sig_patrimonio.empleado
    LEFT JOIN sig_contratistas ON
    sig_contratistas.proveedor = sig_patrimonio.proveedor
    LEFT JOIN sig_ubicac_fisica ON 
    sig_ubicac_fisica.tipo_ubicac = sig_patrimonio.tipo_ubicac AND 
  sig_ubicac_fisica.cod_ubicac = sig_patrimonio.cod_ubicac
    LEFT JOIN sig_centro_costo ON
    sig_centro_costo.ano_eje = sig_patrimonio.ano_eje AND 
  sig_centro_costo.sec_ejec = sig_patrimonio.sec_ejec AND 
  sig_patrimonio.centro_costo = sig_centro_costo.centro_costo
    JOIN catalogo_bien_serv ON 
    catalogo_bien_serv.sec_ejec = sig_patrimonio.sec_ejec AND 
  catalogo_bien_serv.tipo_bien = sig_patrimonio.tipo_bien AND 
  catalogo_bien_serv.grupo_bien = sig_patrimonio.grupo_bien AND 
  catalogo_bien_serv.clase_bien = sig_patrimonio.clase_bien AND 
  catalogo_bien_serv.familia_bien = sig_patrimonio.familia_bien AND  
  catalogo_bien_serv.item_bien = sig_patrimonio.item_bien
    JOIN sig_subtipos_patrimonio ON
    sig_subtipos_patrimonio.tipo_patrim = sig_patrimonio.tipo_patrim AND 
  sig_subtipos_patrimonio.clase_patrim = sig_patrimonio.clase_patrim AND 
  sig_subtipos_patrimonio.subtipo = sig_patrimonio.subtipo
    JOIN sig_detalle_activos ON
    sig_detalle_activos.sec_ejec = sig_patrimonio.sec_ejec AND 
  sig_detalle_activos.tipo_modalidad = sig_patrimonio.tipo_modalidad AND 
  sig_detalle_activos.secuencia = sig_patrimonio.secuencia
LEFT JOIN marca ON 
  marca.tipo_marca = sig_patrimonio.tipo_marca  AND
    marca.marca      = sig_patrimonio.marca
    JOIN sig_movimiento_activo ON 
    sig_movimiento_activo.ano_eje = sig_detalle_activos.ano_eje AND 
  sig_movimiento_activo.sec_ejec = sig_detalle_activos.sec_ejec AND 	
  sig_movimiento_activo.mes_proceso = sig_detalle_activos.mes_proceso AND 
  sig_movimiento_activo.tipo_movimto = sig_detalle_activos.tipo_movimto AND 
  sig_movimiento_activo.nro_movimto = sig_detalle_activos.nro_movimto
    JOIN sig_tipo_movimiento ON 
    sig_tipo_movimiento.tipo_movimto = sig_movimiento_activo.tipo_movimto AND 
  sig_tipo_movimiento.tipo_transac = sig_movimiento_activo.tipo_transac
WHERE sig_patrimonio.sec_ejec = 1137  AND  
    ('T' = 'T' OR 
  ('F' = 'T' AND sig_patrimonio.fecha_alta >= '1-1-1900' AND sig_patrimonio.fecha_alta <= '1-1-1900' )) AND 
    sig_patrimonio.tipo_modalidad = 1 AND  
    sig_movimiento_activo.ano_eje = 2024 AND  
    sig_movimiento_activo.sec_ejec = 1137 AND 
    not exists (Select y.secuencia from sig_movimiento_activo x,sig_detalle_activos y 
         where x.ano_eje = y.ano_eje AND 
             x.sec_ejec = y.sec_ejec AND 
             x.mes_proceso = y.mes_proceso AND 
             x.tipo_movimto = y.tipo_movimto AND 
             x.nro_movimto = y.nro_movimto AND 
             sig_patrimonio.sec_ejec = y.sec_ejec AND 
             sig_patrimonio.tipo_modalidad = y.tipo_modalidad AND 
             sig_patrimonio.secuencia = y.secuencia AND 
             x.tipo_movimto = 'I' AND x.tipo_transac = 12) AND 
    not exists (select b.secuencia from sig_detalle_activos b, sig_movimiento_activo c 
         where b.ano_eje = c.ano_eje AND 
             b.sec_ejec = c.sec_ejec AND 
             b.mes_proceso = c.mes_proceso AND 
             b.tipo_movimto = c.tipo_movimto AND 
             b.nro_movimto = c.nro_movimto AND 	
             b.sec_ejec = sig_patrimonio.sec_ejec AND 
             b.tipo_modalidad = sig_patrimonio.tipo_modalidad AND 
             b.secuencia = sig_patrimonio.secuencia AND 
             c.tipo_movimto = 'S' AND c.tipo_transac = 5 ) AND
    ('DMARIN' = '%' OR 
  ('DMARIN' <> '%' AND
     sig_patrimonio.centro_costo in (Select a.centro_costo from sig_usuario_ccosto a 
                         where a.ano_eje = 2024 AND a.cuser_id = 'DMARIN' AND a.sec_ejec = 1137) OR
     EXISTS (SELECT CUSER_ID FROM SIG_USUARIO_EJECUTORA 
         WHERE SIG_USUARIO_EJECUTORA.CUSER_ID = 'DMARIN' AND 
             SIG_USUARIO_EJECUTORA.SEC_EJEC = 1137 AND  
             SIG_USUARIO_EJECUTORA.FLAG_CCOSTO = 'S'))) 

and sig_movimiento_activo.tipo_movimto in ('A','I') UNION 

SELECT DISTINCT
    sig_patrimonio.codigo_activo,   
    sig_patrimonio.descripcion,   
    sig_sedes.nombre_sede,   
    sig_centro_costo.nombre_depend,   
    sig_personal.nombre_completo,   
    sig_contratistas.nombre_prov,   
    sig_patrimonio.fecha_compra,   
    sig_patrimonio.valor_compra,   
    sig_patrimonio.fecha_alta,   
    sig_patrimonio.valor_inicial,   
    sig_patrimonio.sede,   
    sig_patrimonio.pliego,   
    sig_ubicac_fisica.ubicac_fisica,   
    catalogo_bien_serv.nombre_item,   
    sig_patrimonio.sec_ejec,   
    sig_patrimonio.tipo_modalidad,   
    sig_patrimonio.codigo_barra,   
    sig_patrimonio.modelo,   
    sig_patrimonio.nro_orden,   
    sig_patrimonio.medidas,   
    sig_tipo_movimiento.abrev_movimto,   
    sig_patrimonio.secuencia,   
    sig_subtipos_patrimonio.nombre_subtipo,   
    marca.nombre,   
    sig_movimiento_activo.tipo_movimto,   
    sig_movimiento_activo.tipo_transac,   
    sig_movimiento_activo.nro_movimto,   
    sig_patrimonio.valor_inicial-(sig_patrimonio.valor_deprec) as hvalor_neto,   
    sig_movimiento_activo.ano_eje,   
    sig_movimiento_activo.mes_proceso,   
    sig_patrimonio.fecha_movimto,   
    sig_patrimonio.valor_nea,   
    sig_patrimonio.fecha_nea,   
    sig_patrimonio.nro_documento,   
    'S' as fecha_baja_ctble,   
    sig_patrimonio.fec_baja_ctble,   
    sig_patrimonio.sec_modelo,   
    sig_patrimonio.nro_serie,
    COALESCE(tdevolucion.flag_devolucion, 'N') as FLAG_DEVOLUCION,
    SIG_PATRIMONIO.IND_TIPO_DEPREC  METODO_DEPREC,
    sig_patrimonio.tipo_documento,
    0 alta_auto
FROM sig_patrimonio
  INNER JOIN
     (Select y.ano_eje,x.sec_ejec,x.tipo_modalidad,x.secuencia,
           (Case When Coalesce(t_acto_admin.ind_sin_retorno,'X')='S' Then t_acto_admin.mayor Else x.mayor End) as mayor,
           (Case When Coalesce(t_acto_admin.ind_sin_retorno,'X')='S' Then t_acto_admin.sub_cta Else x.sub_cta End) as sub_cta,t_acto_admin.ind_sin_retorno
       from sig_detalle_activos y,
           sig_patrimonio x
           LEFT JOIN
             (Select s.sec_ejec,s.tipo_modalidad,s.secuencia,s.mayor,s.sub_cta,'S' as ind_sin_retorno
               from sig_movim_administrativo r,
                   sig_det_administrativo s
               where r.ano_eje			= s.ano_eje and
                   r.sec_ejec		= s.sec_ejec and
                   r.mes_eje			= s.mes_eje and
                   r.tipo_acto_adm	= s.tipo_acto_adm and
                   r.nro_movimto	= s.nro_movimto and
                  ((((r.fecha_inicio <= '30-4-2024' AND r.fecha_fin >= '1-4-2024') or r.fecha_fin < '1-4-2024') and 
                   (s.tipo_acto_adm > 1 or	/* ARRENDAMIENTO o CESION EN USO */
                   (s.tipo_acto_adm = 1 and	/* AFECTACION EN USO */
                   (s.estado = '0' or
                   (s.estado = '1' and s.fecha_retorno > '30-4-2024')))) and r.fecha_fin_renovacion is null) OR	/* SIN RENOVACION */
                 (((r.fecha_inicio <= '30-4-2024' AND r.fecha_fin_renovacion >= '1-4-2024') or r.fecha_fin_renovacion < '1-4-2024') and 
                   (s.tipo_acto_adm <> 2 and	/* diferente a ARRENDAMIENTO */
                   (s.estado = '0' or
                   (s.estado = '1' and s.fecha_retorno > '30-4-2024'))) and r.fecha_fin_renovacion is not null))	/* CON RENOVACION */
                   ) t_acto_admin ON
           x.sec_ejec			= t_acto_admin.sec_ejec and
           x.tipo_modalidad	= t_acto_admin.tipo_modalidad and
           x.secuencia			= t_acto_admin.secuencia
      where y.sec_ejec			= x.sec_ejec and
          y.tipo_modalidad = x.tipo_modalidad and
          y.secuencia		= x.secuencia and
          y.ano_eje			= 2024 and
          y.sec_ejec			= 1137 and
          y.tipo_modalidad	= 1 and
          y.tipo_movimto in ('A','I')) t_pat ON
   sig_patrimonio.sec_ejec			= t_pat.sec_ejec and
  sig_patrimonio.tipo_modalidad	= t_pat.tipo_modalidad and
  sig_patrimonio.secuencia			= t_pat.secuencia
    left join (SELECT DISTINCT 'S' as flag_devolucion, x.ano_eje, x.sec_ejec, x.mes_proceso, x.tipo_movimto, x.nro_movimto, y.tipo_modalidad, y.secuencia
                FROM sig_movimiento_activo x, sig_detalle_activos y
         where x.ano_eje = y.ano_eje and 
             x.sec_ejec = y.sec_ejec and 
             x.mes_proceso = y.mes_proceso and 
             x.tipo_movimto = y.tipo_movimto and 
             x.nro_movimto = y.nro_movimto and
             x.ano_eje = 2024 and
             x.sec_ejec = 1137 and
             x.TIPO_MOVIMTO = 'S'    AND
                x.TIPO_TRANSAC = 10	) tdevolucion ON
   tdevolucion.SEC_EJEC     = sig_patrimonio.SEC_EJEC      AND
   tdevolucion.tipo_modalidad = sig_patrimonio.tipo_modalidad  AND
   tdevolucion.secuencia  = sig_patrimonio.secuencia
    JOIN catalogo_bien_serv ON
  catalogo_bien_serv.sec_ejec = sig_patrimonio.sec_ejec AND 
    catalogo_bien_serv.tipo_bien = sig_patrimonio.tipo_bien AND 
  catalogo_bien_serv.grupo_bien = sig_patrimonio.grupo_bien AND  
    catalogo_bien_serv.clase_bien = sig_patrimonio.clase_bien AND  
  catalogo_bien_serv.familia_bien = sig_patrimonio.familia_bien AND  
    catalogo_bien_serv.item_bien = sig_patrimonio.item_bien 
LEFT JOIN marca ON 
    marca.tipo_marca = sig_patrimonio.tipo_marca  AND
  marca.marca      = sig_patrimonio.marca
    LEFT JOIN sig_personal ON 
    sig_personal.sec_ejec = sig_patrimonio.sec_ejec AND 
  sig_personal.empleado = sig_patrimonio.empleado
    LEFT JOIN sig_sedes ON
    sig_sedes.sede = sig_patrimonio.sede AND 
  sig_sedes.pliego = sig_patrimonio.pliego
    LEFT JOIN sig_ubicac_fisica ON 
    sig_ubicac_fisica.tipo_ubicac = sig_patrimonio.tipo_ubicac AND 
  sig_ubicac_fisica.cod_ubicac = sig_patrimonio.cod_ubicac
    LEFT JOIN sig_centro_costo ON 
    sig_centro_costo.ano_eje = sig_patrimonio.ano_eje AND 
  sig_centro_costo.sec_ejec = sig_patrimonio.sec_ejec AND 
    sig_centro_costo.centro_costo = sig_patrimonio.centro_costo
    LEFT JOIN sig_contratistas ON
    sig_contratistas.proveedor = sig_patrimonio.proveedor
    LEFT JOIN sig_detalle_activos ON
    sig_detalle_activos.sec_ejec = sig_patrimonio.sec_ejec AND 
  sig_detalle_activos.tipo_modalidad = sig_patrimonio.tipo_modalidad AND  
    sig_detalle_activos.secuencia = sig_patrimonio.secuencia
    JOIN sig_movimiento_activo ON
    sig_movimiento_activo.ano_eje = sig_detalle_activos.ano_eje AND 
  sig_movimiento_activo.sec_ejec = sig_detalle_activos.sec_ejec AND 
    sig_movimiento_activo.mes_proceso = sig_detalle_activos.mes_proceso AND 
  sig_movimiento_activo.tipo_movimto = sig_detalle_activos.tipo_movimto AND  
    sig_movimiento_activo.nro_movimto = sig_detalle_activos.nro_movimto
    JOIN sig_subtipos_patrimonio ON
    sig_subtipos_patrimonio.tipo_patrim = sig_patrimonio.tipo_patrim AND 
  sig_subtipos_patrimonio.clase_patrim = sig_patrimonio.clase_patrim AND 
    sig_subtipos_patrimonio.subtipo = sig_patrimonio.subtipo
    JOIN sig_tipo_movimiento ON 
    sig_tipo_movimiento.tipo_movimto = sig_movimiento_activo.tipo_movimto AND  
  sig_tipo_movimiento.tipo_transac = sig_movimiento_activo.tipo_transac
WHERE catalogo_bien_serv.sec_ejec = sig_patrimonio.sec_ejec AND  
    sig_detalle_activos.ano_eje = 2024 AND  
    sig_detalle_activos.sec_ejec = 1137  AND  
    sig_detalle_activos.tipo_modalidad = 1 AND  
   ('T' = 'T' OR 
 ('F' = 'T' AND sig_patrimonio.fecha_alta >= '1-1-1900' AND sig_patrimonio.fecha_alta <= '1-1-1900')) AND 
    sig_movimiento_activo.ano_eje = 2024 AND  
    sig_movimiento_activo.sec_ejec = 1137 AND  
    not exists (Select y.secuencia from sig_movimiento_activo x,sig_detalle_activos y 
         where x.ano_eje = y.ano_eje AND 
             x.sec_ejec = y.sec_ejec AND 
             x.mes_proceso = y.mes_proceso AND 
             x.tipo_movimto = y.tipo_movimto AND 
             x.nro_movimto = y.nro_movimto AND 
             sig_patrimonio.sec_ejec = y.sec_ejec AND 
             sig_patrimonio.tipo_modalidad = y.tipo_modalidad AND 
             sig_patrimonio.secuencia = y.secuencia AND 
             x.tipo_movimto = 'I' AND x.tipo_transac = 12) AND 
    exists (Select z.secuencia from sig_patrimonio z,sig_detalle_activos y 
         where z.sec_ejec = y.sec_ejec AND 
             z.tipo_modalidad = y.tipo_modalidad AND 
             z.secuencia = y.secuencia AND 
             sig_patrimonio.sec_ejec = y.sec_ejec AND 
             sig_patrimonio.tipo_modalidad = y.tipo_modalidad AND 	
             sig_patrimonio.secuencia = y.secuencia AND 
             y.ano_eje= 2024 AND 
             z.fec_baja_ctble is not null AND y.tipo_movimto = 'S')  AND
    ('DMARIN' = '%' OR 
  ('DMARIN' <> '%' AND
     sig_patrimonio.centro_costo in (Select a.centro_costo from sig_usuario_ccosto a 
                       where a.ano_eje = 2024 AND a.cuser_id = 'DMARIN' AND a.sec_ejec = 1137) OR
     EXISTS (SELECT CUSER_ID FROM SIG_USUARIO_EJECUTORA 
         WHERE SIG_USUARIO_EJECUTORA.CUSER_ID = 'DMARIN' AND 
             SIG_USUARIO_EJECUTORA.SEC_EJEC = 1137 AND  
             SIG_USUARIO_EJECUTORA.FLAG_CCOSTO = 'S'))) 
and sig_movimiento_activo.tipo_movimto in ('A','I')
    `;

    const bienes = await sequelize.query(sqlQuery, {
      type: QueryTypes.SELECT,
    });

    console.log('====================================');
    console.log("pokemon");
    console.log('====================================');
    // // Filtrar elementos repetidos por codigo_activo
    // const filteredEtiquetas = [];
    // const seenCodigos = new Set();

    // for (const etiqueta of etiquetas) {
    //   if (!seenCodigos.has(etiqueta.codigo_activo)) {
    //     filteredEtiquetas.push(etiqueta);
    //     seenCodigos.add(etiqueta.codigo_activo);
    //   }
    // }

    // const format = filteredEtiquetas.map((item) => {
    //   return {
    //     sec_eje: item?.sec_eje,
    //     secuencia: item?.secuencia,
    //     sbn: item?.codigo_activo,
    //     descripcion: item?.descripcion,
    //     estado: item?.estado,
    //     nombre_depend: item?.nombre_depend,
    //     nombre_sede: item?.nombre_sede,
    //     modelo: item?.modelo,
    //     marca: item?.marca,
    //     caracteristicas: item?.caracteristicas,
    //     estado_conserv: item?.estado_conserv,
    //     estado_actual: item?.estado_actual,
    //     nro_orden: item?.nro_orden,
    //     fecha_compra: item?.fecha_compra,
    //     valor_compra: item?.valor_compra,
    //     ubicac_fisica: item?.ubicac_fisica,
    //     empleado_final: item?.empleado_final,
    //     usuario_final:
    //       item?.nombre_usu + " " + item?.paterno_usu + " " + item?.materno_usu,
    //     valor_inicial: item?.valor_inicial,
    //     nro_serie: item?.nro_serie,
    //     codigo_barra: item?.codigo_barra,
    //     proveedor: item?.proveedor,
    //     grupo_bien: item.grupo_bien,
    //     clase_bien: item.clase_bien,
    //   };
    // });

    return res.status(200).json({  data: bienes });
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
