/**
 * Model constans names
 */
export class ModelConstants {
    public static readonly Funcionario = {name : 'Funcionario', siuuinsreportefuncionario: 'siu_insreportefuncionario',
        siuudelreportefuncionario: 'siu_delreportefuncionario', piuufuncionariougrupousuarios: 'piu_funcionario_grupousuarios',
        piuufuncionariouobs: 'piu_funcionario_obs'};
    public static readonly Admin = {name : 'Admin'};
    public static readonly Superadmin = {name : 'SuperAdmin'};
    public static readonly Asesor = {name : 'Asesor'};
    public static readonly Areamedica = {name : 'AreaMedica', piuuareamedicaunull: 'piu_areamedica_null'};
    public static readonly Afiliaciones = {name : 'Afiliaciones'};
    public static readonly Respregional = {name : 'RespRegional', siuutmodificar: 'siu_tmodificar',
        siuutcrearomodfirma: 'siu_tcrearomodfirma', iiuurespregionalufirma: 'iiu_respregional_firma',
        piuurespregional: 'piu_respregional'};
    public static readonly Gestor = {name : 'Gestor'};
    public static readonly Mesadeapoyo = {name : 'MesaDeApoyo'};
    public static readonly Paramconfig = {name : 'ParamConfig', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuutmodificar: 'siu_tmodificar', piuuparamconfig: 'piu_paramconfig', mdiuuparamconfig: 'mdiu_paramconfig'};
    public static readonly Logparam = {name : 'LogParam'};
    public static readonly Frecuenciaact = {name : 'FrecuenciaAct', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuufrecuenciaact: 'piu_frecuenciaact'};
    public static readonly Cuestionariomed = {name : 'CuestionarioMed', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        piuucuestionariomed: 'piu_cuestionariomed', mdiuucuestionariomed: 'mdiu_cuestionariomed'};
    public static readonly Seccion = {name : 'Seccion', siuutcrear: 'siu_tcrear', siuutmodificar: 'siu_tmodificar',
        siuuteliminar: 'siu_teliminar', piuuseccion: 'piu_seccion', mdiuuseccion: 'mdiu_seccion'};
    public static readonly Pregunta = {name : 'Pregunta', siuuinsvalorpregunta: 'siu_insvalorpregunta',
        siuudelvalorpregunta: 'siu_delvalorpregunta', siuutcrear: 'siu_tcrear', siuutmodificar: 'siu_tmodificar',
        siuuteliminar: 'siu_teliminar', iiuupregunta: 'iiu_pregunta', piuupregunta: 'piu_pregunta'};
    public static readonly Valor = {name : 'Valor', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuuvalor: 'piu_valor'};
    public static readonly Productos = {name : 'Productos', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuuproducto: 'piu_producto', piuuproductosuobs: 'piu_productos_obs'};
    public static readonly Planes = {name : 'Planes', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuuplan: 'piu_plan', piuuplanesuobs: 'piu_planes_obs'};
    public static readonly Parentesco = {name : 'Parentesco', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuuparentesco: 'piu_parentesco'};
    public static readonly Periodicidad = {name : 'Periodicidad', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuuperiodicidad: 'piu_periodicidad'};
    public static readonly Rol = {name : 'Rol', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar', piuurol: 'piu_rol'};
    public static readonly Dominio = {name : 'Dominio', siuucrear: 'siu_crear',
        siuuinsperiodicidaddominio: 'siu_insperiodicidaddominio', siuudelperiodicidaddominio: 'siu_delperiodicidaddominio',
        siuuinsroldominio: 'siu_insroldominio', siuudelrolldominio: 'siu_delrolldominio',
        siuumoddatosrespfirma: 'siu_moddatosrespfirma', siuumodimagenfirma: 'siu_modimagenfirma',
        siuuinsformapago: 'siu_insformapago', siuudelformapago: 'siu_delformapago',
        siuucambiardiasvigencia: 'siu_cambiardiasvigencia', siuumodificarconfsolnovedad: 'siu_modificarconfsolnovedad',
        siuuteliminar: 'siu_teliminar', siuutinsplantilla: 'siu_tinsplantilla', siuutinsnovedad: 'siu_tinsnovedad',
        siuutaddgrpasesores: 'siu_taddgrpasesores', siuutdelgrpasesores: 'siu_tdelgrpasesores',
        siuutaddgrpmedico: 'siu_taddgrpmedico', siuutdelgrpmedico: 'siu_tdelgrpmedico', siuutaddreporte: 'siu_taddreporte',
        siuutinsincompatible: 'siu_tinsincompatible', siuutdelincompatible: 'siu_tdelincompatible', siuutmodificar: 'siu_tmodificar',
        piuudominio: 'piu_dominio', piuudominiouobs: 'piu_dominio_obs', mdiuudominio: 'mdiu_dominio',
        mdiuudominiougrupoasesores: 'mdiu_dominio_grupoasesores', mdiuudominiougrupoareamedica: 'mdiu_dominio_grupoareamedica',
        mdiuudominiogruposusuarios: 'mdiu_dominiogruposusuarios', mdiuudominiosincompatbles: 'mdiu_dominiosincompatbles',
        mdiuudominioulogdatos: 'mdiu_dominio_logdatos'};
    public static readonly Plantillaemail = {name : 'PlantillaEmail', siuueliminar: 'siu_eliminar', siuumodificar: 'siu_modificar',
        siuumodificartextomensaje: 'siu_modificartextomensaje', siuudummymodificar: 'siu_dummymodificar', siuutnew: 'siu_tnew',
        piuuplantillaemail: 'piu_plantillaemail'};
    public static readonly Estadocontrato = {name : 'EstadoContrato', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        piuuestadocontrato: 'piu_estadocontrato'};
    public static readonly Estadobeneficiario = {name : 'EstadoBeneficiario', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuuestadobeneficiario: 'piu_estadobeneficiario'};
    public static readonly Estadobeneficiarioae = {name : 'EstadoBeneficiarioAE', siuucrear: 'siu_crear',
        siuueliminar: 'siu_eliminar', siuutmodificar: 'siu_tmodificar', piuuestadobeneficiarioae: 'piu_estadobeneficiarioae'};
    public static readonly Tarifa = {name : 'Tarifa', piuutarifas: 'piu_tarifas', mdiuutarifas: 'mdiu_tarifas'};
    public static readonly Regional = {name : 'Regional', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        piuuregional: 'piu_regional', piuuregionaluobs: 'piu_regional_obs'};
    public static readonly Sucursal = {name : 'Sucursal', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        piuusucursal: 'piu_sucursal', piuusucursaluobs: 'piu_sucursal_obs'};
    public static readonly Grupoasociado = {name : 'GrupoAsociado', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuugrupoasociado: 'piu_grupoasociado'};
    public static readonly Estadocivil = {name : 'EstadoCivil', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        piuuestadocivil: 'piu_estadocivil'};
    public static readonly Departamento = {name : 'Departamento', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        piuudepartamento: 'piu_departamento'};
    public static readonly Tipoiva = {name : 'TipoIVA', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuutipoiva: 'piu_tipoiva'};
    public static readonly Persona = {name : 'Persona'};
    public static readonly Companyia = {name : 'Companyia', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuucompanyia: 'piu_companyia'};
    public static readonly Municipio = {name : 'Municipio', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuumunicipio: 'piu_municipio'};
    public static readonly Tipodireccion = {name : 'TipoDireccion', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuutipodireccion: 'piu_tipodireccion'};
    public static readonly Estadopersona = {name : 'EstadoPersona', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuuestadopersona: 'piu_estadopersona'};
    public static readonly Formapago = {name : 'FormaPago', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuuformapago: 'piu_formapago'};
    public static readonly Tipoidentificacion = {name : 'TipoIdentificacion', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuutipoidentificacion: 'piu_tipoidentificacion'};
    public static readonly Eps = {name : 'Eps', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar', siuumodificar: 'siu_modificar',
        piuueps: 'piu_eps'};
    public static readonly Entidadfinancierac = {name : 'EntidadFinancieraC', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        piuuentidadfinanciera: 'piu_entidadfinanciera'};
    public static readonly Tipoentidadc = {name : 'TipoEntidadC', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        piuutipoentidad: 'piu_tipoentidad'};
    public static readonly Tipoinstitucionc = {name : 'TipoInstitucionC', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        piuutipoinstitucion: 'piu_tipoinstitucion'};
    public static readonly Aeusolicitudes = {name : 'Ae_solicitudes'};
    public static readonly Solicitud = {name : 'Solicitud'};
    public static readonly Personac = {name : 'PersonaC'};
    public static readonly Direccionc = {name : 'DireccionC'};
    public static readonly Telefonoc = {name : 'TelefonoC'};
    public static readonly Protecciondatosc = {name : 'ProteccionDatosC'};
    public static readonly Direccion = {name : 'Direccion'};
    public static readonly Pais = {name : 'Pais', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar', piuupais: 'piu_pais'};
    public static readonly Protecciondatos = {name : 'ProteccionDatos'};
    public static readonly Usuario = {name : 'Usuario'};
    public static readonly Cuestionariop = {name : 'CuestionarioP'};
    public static readonly Seccionp = {name : 'SeccionP'};
    public static readonly Preguntap = {name : 'PreguntaP'};
    public static readonly Contratante = {name : 'Contratante'};
    public static readonly Anexomat = {name : 'AnexoMat'};
    public static readonly Anexoneo = {name : 'AnexoNeo'};
    public static readonly Firma = {name : 'Firma', siuueliminar: 'siu_eliminar', piuufirmasrespregional: 'piu_firmasrespregional',
        piuufirmaunull: 'piu_firma_null'};
    public static readonly Contratoc = {name : 'ContratoC'};
    public static readonly Observacionesc = {name : 'ObservacionesC'};
    public static readonly Beneficiarioc = {name : 'BeneficiarioC'};
    public static readonly Anexoc = {name : 'AnexoC'};
    public static readonly Pregcuesmedc = {name : 'PregCuesMedC'};
    public static readonly Dirsucursalc = {name : 'DirSucursalC'};
    public static readonly Familiac = {name : 'FamiliaC'};
    public static readonly Usuarioreg = {name : 'UsuarioReg'};
    public static readonly Titular = {name : 'Titular'};
    public static readonly Preexistenciac = {name : 'PreexistenciaC'};
    public static readonly Preexistencia = {name : 'Preexistencia'};
    public static readonly Documentog = {name : 'DocumentoG'};
    public static readonly Obsestado = {name : 'ObsEstado'};
    public static readonly Errorws = {name : 'ErrorWS'};
    public static readonly Parentescodom = {name : 'ParentescoDom', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuuparentescodom: 'piu_parentescodom'};
    public static readonly Marcamedicac = {name : 'MarcaMedicaC'};
    public static readonly Tiposucursalc = {name : 'TipoSucursalC', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        piuutiposucursalc: 'piu_tiposucursalc'};
    public static readonly Conceptoc = {name : 'ConceptoC'};
    public static readonly Detalletarifa = {name : 'DetalleTarifa', siuutcrear: 'siu_tcrear', siuutmodificar: 'siu_tmodificar',
        siuuteliminar: 'siu_teliminar', piuudetallestarifa: 'piu_detallestarifa'};
    public static readonly Agentexproducto = {name : 'AgentexProducto'};
    public static readonly Institucionmatneo = {name : 'InstitucionMatNeo', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuutmodificar: 'siu_tmodificar', piuuinstitucionmatneo: 'piu_institucionmatneo'};
    public static readonly Logestado = {name : 'LogEstado'};
    public static readonly Motdevareamedica = {name : 'MotDevAreaMedica', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuumotdevareamedica: 'piu_motdevareamedica'};
    public static readonly Contsindocsol = {name : 'ContSinDocSol', siuucrear: 'siu_crear', piuucontsindocsol: 'piu_contsindocsol'};
    public static readonly Logcontsindocsol = {name : 'LogContSinDocSol', piuulogcontsindocsol: 'piu_logcontsindocsol'};
    public static readonly Logasignaciones = {name : 'LogAsignaciones'};
    public static readonly Reportesprocalm = {name : 'ReportesProcAlm', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuureportesprocalm: 'piu_reportesprocalm', mdiuureportesprocalm: 'mdiu_reportesprocalm'};
    public static readonly Prorrateo = {name : 'Prorrateo', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuuprorrateo: 'piu_prorrateo'};
    public static readonly Tipofactura = {name : 'TipoFactura', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuutipofactura: 'piu_tipofactura'};
    public static readonly Paramreporte = {name : 'ParamReporte', siuumodificar: 'siu_modificar', siuutnew: 'siu_tnew',
        siuutdelete: 'siu_tdelete', siuutsubir: 'siu_tsubir', siuutbajar: 'siu_tbajar', piuuduparametros: 'piu_d_parametros'};
    public static readonly Tiponovedad = {name : 'TipoNovedad', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuutiponovedad: 'piu_tiponovedad'};
    public static readonly Novedad = {name : 'Novedad', siuumodificar: 'siu_modificar', siuudelnovedad: 'siu_delnovedad',
        siuuteliminar: 'siu_teliminar', siuutcrear: 'siu_tcrear', iiuunovedad: 'iiu_novedad', piuunovedad: 'piu_novedad',
        piuunovedadunull: 'piu_novedad_null', mdiuunovedaducausales: 'mdiu_novedad_causales'};
    public static readonly Causal = {name : 'Causal', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', uautou: '_auto_', piuucausalunull: 'piu_causal_null'};
    public static readonly Solicitudnovedad = {name : 'SolicitudNovedad'};
    public static readonly Familianovedad = {name : 'FamiliaNovedad'};
    public static readonly Usuarionovedad = {name : 'UsuarioNovedad'};
    public static readonly Causaexclusion = {name : 'CausaExclusion', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuucausaexclusion: 'piu_causaexclusion'};
    public static readonly Novedadct = {name : 'NovedadCT'};
    public static readonly Documentonovedad = {name : 'DocumentoNovedad'};
    public static readonly Novedadmd = {name : 'NovedadMD'};
    public static readonly Logestadosn = {name : 'LogEstadoSN'};
    public static readonly Motivoexcepcionsolnov = {name : 'MotivoExcepcionSolNov', siuucrear: 'siu_crear',
        siuueliminar: 'siu_eliminar', siuumodificar: 'siu_modificar', piuumotivoexcepcionsolnov: 'piu_motivoexcepcionsolnov'};
    public static readonly Priorizacionsolicitudes = {name : 'PriorizacionSolicitudes', siuutcrear: 'siu_tcrear',
        siuuteliminar: 'siu_teliminar', siuutmodificar: 'siu_tmodificar', piuupriorizacionsolicitudes: 'piu_priorizacionsolicitudes'};
    public static readonly Logpriorizacionsol = {name : 'LogPriorizacionSol', piuulogpriorizacionsol: 'piu_logpriorizacionsol'};
    public static readonly Grupoasignacion = {name : 'GrupoAsignacion', siuuteliminar: 'siu_teliminar', siuutcrear: 'siu_tcrear',
        siuutmodificar: 'siu_tmodificar', siuutaddusuario: 'siu_taddusuario', siuutdelusuario: 'siu_tdelusuario',
        piuugrupoasignacion: 'piu_grupoasignacion', mdiuugrupoasignacion: 'mdiu_grupoasignacion'};
    public static readonly Loggrupoasignacion = {name : 'LogGrupoAsignacion', piuuloggrupoasignacion: 'piu_loggrupoasignacion'};
    public static readonly Loggruposusuarios = {name : 'LogGruposUsuarios', piuuloggruposusuarios: 'piu_loggruposusuarios'};
    public static readonly Grupoasignacionnovedad = {name : 'GrupoAsignacionNovedad', siuueliminar: 'siu_eliminar',
        siuutcrear: 'siu_tcrear', siuutasggrupo: 'siu_tasggrupo', piuugrpasignovedadududominio: 'piu_grpasignovedad_d_dominio',
        mdiuugrupoasignacionnovedad: 'mdiu_grupoasignacionnovedad'};
    public static readonly Logfuncionario = {name : 'LogFuncionario'};
    public static readonly Logusrsolnov = {name : 'LogUsrSolNov'};
    public static readonly Contratocombo = {name : 'ContratoCombo', piuucontratocombo: 'piu_contratocombo'};
    public static readonly Logcontratocombo = {name : 'LogContratoCombo', piuulogcontratocombo: 'piu_logcontratocombo'};
    public static readonly Configuracionans = {name : 'ConfiguracionANS', siuutcrear: 'siu_tcrear', siuutmodificar: 'siu_tmodificar',
        siuuteliminar: 'siu_teliminar', iiuuconfiguracionans: 'iiu_configuracionans', piuuconfiguracionans: 'piu_configuracionans'};
    public static readonly Logconfiguracionans = {name : 'LogConfiguracionANS', piuulogconfiguracionans: 'piu_logconfiguracionans'};
    public static readonly Configuracionfestivos = {name : 'ConfiguracionFestivos'};
    public static readonly Logestadodocnov = {name : 'LogEstadoDocNov'};
    public static readonly Plantillareporte = {name : 'PlantillaReporte', siuueliminar: 'siu_eliminar',
        piuuplantillareporte: 'piu_plantillareporte'};
    public static readonly Reportesdominio = {name : 'ReportesDominio', siuueliminar: 'siu_eliminar', siuumodificar: 'siu_modificar',
        piuureportesdominio: 'piu_reportesdominio'};
    public static readonly Loginformacionasesor = {name : 'LogInformacionAsesor'};
    public static readonly Loghistoricoplanes = {name : 'LogHistoricoPlanes'};
    public static readonly Logllamadasae = {name : 'LogLlamadasAE', iiuulogllamadasae: 'iiu_logllamadasae',
        piuulogllamadasae: 'piu_logllamadasae'};
    public static readonly Logllamadasbh = {name : 'LogLlamadasBH', iiuulogllamadasbh: 'iiu_logllamadasbh',
        piuulogllamadasbh: 'piu_logllamadasbh'};
    public static readonly Fechainieps = {name : 'FechaIniEPS', siuueliminar: 'siu_eliminar', piuufechainieps: 'piu_fechainieps'};
    public static readonly Logincompatibilidades = {name : 'LogIncompatibilidades',
        piuulogincompatibilidades: 'piu_logincompatibilidades'};
    public static readonly Logdatosdominio = {name : 'LogDatosDominio'};
    public static readonly Contratosexentosfingreso = {name : 'ContratosExentosFIngreso',
        piuucontratosexentosfingreso: 'piu_contratosexentosfingreso'};
    public static readonly Logcontratosexentosfingreso = {name : 'LogContratosExentosFIngreso',
        piuulogcontratosexentosfingres: 'piu_logcontratosexentosfingres'};
    public static readonly Textoaviso = {name : 'TextoAviso', siuucrear: 'siu_crear', siuueliminar: 'siu_eliminar',
        siuumodificar: 'siu_modificar', piuutextoaviso: 'piu_textoaviso'};
    public static readonly Usuariosistemaexterno = {name : 'UsuarioSistemaExterno'};
    public static readonly Globalservices = {name : 'GlobalServices', siuutgsincproductos: 'siu_tgsincproductos',
        siuutgsincplanes: 'siu_tgsincplanes', siuutgsincparentescos: 'siu_tgsincparentescos',
        siuutgsincperiodicidades: 'siu_tgsincperiodicidades', siuutgsincestadoscontrato: 'siu_tgsincestadoscontrato',
        siuutgsincestadosbeneficiario: 'siu_tgsincestadosbeneficiario', siuutgsincregionales: 'siu_tgsincregionales',
        siuuogsincsucursales: 'siu_ogsincsucursales', siuuogsincgruposasociados: 'siu_ogsincgruposasociados',
        siuutgsincestadosciviles: 'siu_tgsincestadosciviles', siuutgsincdepartamentos: 'siu_tgsincdepartamentos',
        siuuogsincompanias: 'siu_ogsincompanias', siuuogsincmunicipios: 'siu_ogsincmunicipios',
        siuutgsinctiposdireccion: 'siu_tgsinctiposdireccion', siuutgsincestadospersona: 'siu_tgsincestadospersona',
        siuutgsincformaspago: 'siu_tgsincformaspago', siuutgsinctiposidentificacion: 'siu_tgsinctiposidentificacion',
        siuuogsincepss: 'siu_ogsincepss', siuutgsincpaises: 'siu_tgsincpaises', siuutgsincentidadesfin: 'siu_tgsincentidadesfin',
        siuutgsinctiposdeentidad: 'siu_tgsinctiposdeentidad', siuutgsinctiposinstitucion: 'siu_tgsinctiposinstitucion',
        siuutgsinctipossucursal: 'siu_tgsinctipossucursal', siuutgcreartarifa: 'siu_tgcreartarifa',
        siuutgeliminartarifa: 'siu_tgeliminartarifa', siuutdelcontsindocsol: 'siu_tdelcontsindocsol',
        siuutgcrearcombo: 'siu_tgcrearcombo', siuutgeditarcombo: 'siu_tgeditarcombo', siuutdelcombo: 'siu_tdelcombo',
        siuutgaddplantrep: 'siu_tgaddplantrep', siuutgeditplantrep: 'siu_tgeditplantrep', siuutgcrearfinieps: 'siu_tgcrearfinieps',
        siuutgmodfinieps: 'siu_tgmodfinieps', siuutgcrearcontexento: 'siu_tgcrearcontexento',
        siuutgdelcontratoexento: 'siu_tgdelcontratoexento', siuutgenrepalm: 'siu_tgenrepalm',
        siuutgenrepalmuout: 'siu_tgenrepalm_out'};
}
