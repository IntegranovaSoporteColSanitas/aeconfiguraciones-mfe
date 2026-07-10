import { ModelConstants } from './common/model.constants';

export class Configuration {
    public BASE_URL = '';
    public URL_LOG_ERROR = '';
    public NAVCONSTANTS: any[] = [
        {
            className: ModelConstants.Funcionario.name,
            navKey: 'funcionario',
            ius: [
                { name: ModelConstants.Funcionario.siuuinsreportefuncionario,
                    navKey: 'siu_insreportefuncionario' }
                , { name: ModelConstants.Funcionario.siuudelreportefuncionario,
                    navKey: 'siu_delreportefuncionario' }
                , { name: ModelConstants.Funcionario.piuufuncionariougrupousuarios,
                    navKey: 'piu_funcionario_grupousuarios' }
                , { name: ModelConstants.Funcionario.piuufuncionariouobs,
                    navKey: 'piu_funcionario_obs' }
            ]
        }
        , {
            className: ModelConstants.Admin.name,
            navKey: 'admin',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Superadmin.name,
            navKey: 'superadmin',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Asesor.name,
            navKey: 'asesor',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Areamedica.name,
            navKey: 'areamedica',
            ius: [
                { name: ModelConstants.Areamedica.piuuareamedicauobs,
                    navKey: 'piu_areamedica_obs' }
            ]
        }
        , {
            className: ModelConstants.Afiliaciones.name,
            navKey: 'afiliaciones',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Respregional.name,
            navKey: 'respregional',
            ius: [
                { name: ModelConstants.Respregional.siuutmodificar,
                    navKey: 'siu_tmodificar' }
                , { name: ModelConstants.Respregional.siuutcrearomodfirma,
                    navKey: 'siu_tcrearomodfirma' }
                , { name: ModelConstants.Respregional.iiuurespregionalufirma,
                    navKey: 'iiu_respregional_firma' }
                , { name: ModelConstants.Respregional.piuurespregional,
                    navKey: 'piu_respregional' }
            ]
        }
        , {
            className: ModelConstants.Gestor.name,
            navKey: 'gestor',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Mesadeapoyo.name,
            navKey: 'mesadeapoyo',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Paramconfig.name,
            navKey: 'paramconfig',
            ius: [
                { name: ModelConstants.Paramconfig.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Paramconfig.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Paramconfig.siuutmodificar,
                    navKey: 'siu_tmodificar' }
                , { name: ModelConstants.Paramconfig.mdiuuparamconfig,
                    navKey: 'mdiu_paramconfig' }
                , { name: ModelConstants.Paramconfig.piuuparamconfig,
                    navKey: 'piu_paramconfig' }
            ]
        }
        , {
            className: ModelConstants.Logparam.name,
            navKey: 'logparam',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Frecuenciaact.name,
            navKey: 'frecuenciaact',
            ius: [
                { name: ModelConstants.Frecuenciaact.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Frecuenciaact.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Frecuenciaact.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Frecuenciaact.piuufrecuenciaact,
                    navKey: 'piu_frecuenciaact' }
            ]
        }
        , {
            className: ModelConstants.Cuestionariomed.name,
            navKey: 'cuestionariomed',
            ius: [
                { name: ModelConstants.Cuestionariomed.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Cuestionariomed.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Cuestionariomed.mdiuucuestionariomed,
                    navKey: 'mdiu_cuestionariomed' }
                , { name: ModelConstants.Cuestionariomed.piuucuestionariomed,
                    navKey: 'piu_cuestionariomed' }
            ]
        }
        , {
            className: ModelConstants.Seccion.name,
            navKey: 'seccion',
            ius: [
                { name: ModelConstants.Seccion.siuutcrear,
                    navKey: 'siu_tcrear' }
                , { name: ModelConstants.Seccion.siuutmodificar,
                    navKey: 'siu_tmodificar' }
                , { name: ModelConstants.Seccion.siuuteliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Seccion.mdiuuseccion,
                    navKey: 'mdiu_seccion' }
                , { name: ModelConstants.Seccion.piuuseccion,
                    navKey: 'piu_seccion' }
            ]
        }
        , {
            className: ModelConstants.Pregunta.name,
            navKey: 'pregunta',
            ius: [
                { name: ModelConstants.Pregunta.siuuinsvalorpregunta,
                    navKey: 'siu_insvalorpregunta' }
                , { name: ModelConstants.Pregunta.siuudelvalorpregunta,
                    navKey: 'siu_delvalorpregunta' }
                , { name: ModelConstants.Pregunta.siuutcrear,
                    navKey: 'siu_tcrear' }
                , { name: ModelConstants.Pregunta.siuutmodificar,
                    navKey: 'siu_tmodificar' }
                , { name: ModelConstants.Pregunta.siuuteliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Pregunta.iiuupregunta,
                    navKey: 'iiu_pregunta' }
                , { name: ModelConstants.Pregunta.piuupregunta,
                    navKey: 'piu_pregunta' }
            ]
        }
        , {
            className: ModelConstants.Valor.name,
            navKey: 'valor',
            ius: [
                { name: ModelConstants.Valor.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Valor.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Valor.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Valor.piuuvalor,
                    navKey: 'piu_valor' }
            ]
        }
        , {
            className: ModelConstants.Productos.name,
            navKey: 'productos',
            ius: [
                { name: ModelConstants.Productos.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Productos.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Productos.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Productos.piuuproducto,
                    navKey: 'piu_producto' }
                , { name: ModelConstants.Productos.piuuproductosuobs,
                    navKey: 'piu_productos_obs' }
            ]
        }
        , {
            className: ModelConstants.Planes.name,
            navKey: 'planes',
            ius: [
                { name: ModelConstants.Planes.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Planes.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Planes.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Planes.piuuplan,
                    navKey: 'piu_plan' }
                , { name: ModelConstants.Planes.piuuplanesuobs,
                    navKey: 'piu_planes_obs' }
            ]
        }
        , {
            className: ModelConstants.Parentesco.name,
            navKey: 'parentesco',
            ius: [
                { name: ModelConstants.Parentesco.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Parentesco.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Parentesco.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Parentesco.piuuparentesco,
                    navKey: 'piu_parentesco' }
            ]
        }
        , {
            className: ModelConstants.Periodicidad.name,
            navKey: 'periodicidad',
            ius: [
                { name: ModelConstants.Periodicidad.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Periodicidad.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Periodicidad.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Periodicidad.piuuperiodicidad,
                    navKey: 'piu_periodicidad' }
            ]
        }
        , {
            className: ModelConstants.Rol.name,
            navKey: 'rol',
            ius: [
                { name: ModelConstants.Rol.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Rol.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Rol.piuurol,
                    navKey: 'piu_rol' }
            ]
        }
        , {
            className: ModelConstants.Dominio.name,
            navKey: 'dominio',
            ius: [
                { name: ModelConstants.Dominio.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Dominio.siuuinsperiodicidaddominio,
                    navKey: 'siu_insperiodicidaddominio' }
                , { name: ModelConstants.Dominio.siuudelperiodicidaddominio,
                    navKey: 'siu_delperiodicidaddominio' }
                , { name: ModelConstants.Dominio.siuuinsroldominio,
                    navKey: 'siu_insroldominio' }
                , { name: ModelConstants.Dominio.siuudelrolldominio,
                    navKey: 'siu_delrolldominio' }
                , { name: ModelConstants.Dominio.siuumoddatosrespfirma,
                    navKey: 'siu_moddatosrespfirma' }
                , { name: ModelConstants.Dominio.siuumodimagenfirma,
                    navKey: 'siu_modimagenfirma' }
                , { name: ModelConstants.Dominio.siuuinsformapago,
                    navKey: 'siu_insformapago' }
                , { name: ModelConstants.Dominio.siuudelformapago,
                    navKey: 'siu_delformapago' }
                , { name: ModelConstants.Dominio.siuucambiardiasvigencia,
                    navKey: 'siu_cambiardiasvigencia' }
                , { name: ModelConstants.Dominio.siuumodificarconfsolnovedad,
                    navKey: 'siu_modificarconfsolnovedad' }
                , { name: ModelConstants.Dominio.siuuteliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Dominio.siuutinsplantilla,
                    navKey: 'siu_tinsplantilla' }
                , { name: ModelConstants.Dominio.siuutinsnovedad,
                    navKey: 'siu_tinsnovedad' }
                , { name: ModelConstants.Dominio.siuutaddgrpasesores,
                    navKey: 'siu_taddgrpasesores' }
                , { name: ModelConstants.Dominio.siuutdelgrpasesores,
                    navKey: 'siu_tdelgrpasesores' }
                , { name: ModelConstants.Dominio.siuutaddgrpmedico,
                    navKey: 'siu_taddgrpmedico' }
                , { name: ModelConstants.Dominio.siuutdelgrpmedico,
                    navKey: 'siu_tdelgrpmedico' }
                , { name: ModelConstants.Dominio.siuutaddreporte,
                    navKey: 'siu_taddreporte' }
                , { name: ModelConstants.Dominio.siuutinsincompatible,
                    navKey: 'siu_tinsincompatible' }
                , { name: ModelConstants.Dominio.siuutdelincompatible,
                    navKey: 'siu_tdelincompatible' }
                , { name: ModelConstants.Dominio.siuutmodificar,
                    navKey: 'siu_tmodificar' }
                , { name: ModelConstants.Dominio.mdiuudominio,
                    navKey: 'mdiu_dominio' }
                , { name: ModelConstants.Dominio.mdiuudominiougrupoasesores,
                    navKey: 'mdiu_dominio_grupoasesores' }
                , { name: ModelConstants.Dominio.mdiuudominiougrupoareamedica,
                    navKey: 'mdiu_dominio_grupoareamedica' }
                , { name: ModelConstants.Dominio.mdiuudominiogruposusuarios,
                    navKey: 'mdiu_dominiogruposusuarios' }
                , { name: ModelConstants.Dominio.mdiuudominiosincompatbles,
                    navKey: 'mdiu_dominiosincompatbles' }
                , { name: ModelConstants.Dominio.mdiuudominioulogdatos,
                    navKey: 'mdiu_dominio_logdatos' }
                , { name: ModelConstants.Dominio.piuudominio,
                    navKey: 'piu_dominio' }
                , { name: ModelConstants.Dominio.piuudominiouobs,
                    navKey: 'piu_dominio_obs' }
            ]
        }
        , {
            className: ModelConstants.Plantillaemail.name,
            navKey: 'plantillaemail',
            ius: [
                { name: ModelConstants.Plantillaemail.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Plantillaemail.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Plantillaemail.siuumodificartextomensaje,
                    navKey: 'siu_modificartextomensaje' }
                , { name: ModelConstants.Plantillaemail.siuudummymodificar,
                    navKey: 'siu_dummymodificar' }
                , { name: ModelConstants.Plantillaemail.siuutnew,
                    navKey: 'siu_tnew' }
                , { name: ModelConstants.Plantillaemail.piuuplantillaemail,
                    navKey: 'piu_plantillaemail' }
            ]
        }
        , {
            className: ModelConstants.Estadocontrato.name,
            navKey: 'estadocontrato',
            ius: [
                { name: ModelConstants.Estadocontrato.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Estadocontrato.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Estadocontrato.piuuestadocontrato,
                    navKey: 'piu_estadocontrato' }
            ]
        }
        , {
            className: ModelConstants.Estadobeneficiario.name,
            navKey: 'estadobeneficiario',
            ius: [
                { name: ModelConstants.Estadobeneficiario.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Estadobeneficiario.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Estadobeneficiario.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Estadobeneficiario.piuuestadobeneficiario,
                    navKey: 'piu_estadobeneficiario' }
            ]
        }
        , {
            className: ModelConstants.Estadobeneficiarioae.name,
            navKey: 'estadobeneficiarioae',
            ius: [
                { name: ModelConstants.Estadobeneficiarioae.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Estadobeneficiarioae.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Estadobeneficiarioae.siuutmodificar,
                    navKey: 'siu_tmodificar' }
                , { name: ModelConstants.Estadobeneficiarioae.piuuestadobeneficiarioae,
                    navKey: 'piu_estadobeneficiarioae' }
            ]
        }
        , {
            className: ModelConstants.Tarifa.name,
            navKey: 'tarifa',
            ius: [
                { name: ModelConstants.Tarifa.mdiuutarifas,
                    navKey: 'mdiu_tarifas' }
                , { name: ModelConstants.Tarifa.piuutarifas,
                    navKey: 'piu_tarifas' }
            ]
        }
        , {
            className: ModelConstants.Regional.name,
            navKey: 'regional',
            ius: [
                { name: ModelConstants.Regional.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Regional.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Regional.piuuregional,
                    navKey: 'piu_regional' }
                , { name: ModelConstants.Regional.piuuregionaluobs,
                    navKey: 'piu_regional_obs' }
            ]
        }
        , {
            className: ModelConstants.Sucursal.name,
            navKey: 'sucursal',
            ius: [
                { name: ModelConstants.Sucursal.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Sucursal.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Sucursal.piuusucursal,
                    navKey: 'piu_sucursal' }
                , { name: ModelConstants.Sucursal.piuusucursaluobs,
                    navKey: 'piu_sucursal_obs' }
            ]
        }
        , {
            className: ModelConstants.Grupoasociado.name,
            navKey: 'grupoasociado',
            ius: [
                { name: ModelConstants.Grupoasociado.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Grupoasociado.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Grupoasociado.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Grupoasociado.piuugrupoasociado,
                    navKey: 'piu_grupoasociado' }
            ]
        }
        , {
            className: ModelConstants.Estadocivil.name,
            navKey: 'estadocivil',
            ius: [
                { name: ModelConstants.Estadocivil.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Estadocivil.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Estadocivil.piuuestadocivil,
                    navKey: 'piu_estadocivil' }
            ]
        }
        , {
            className: ModelConstants.Departamento.name,
            navKey: 'departamento',
            ius: [
                { name: ModelConstants.Departamento.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Departamento.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Departamento.piuudepartamento,
                    navKey: 'piu_departamento' }
            ]
        }
        , {
            className: ModelConstants.Tipoiva.name,
            navKey: 'tipoiva',
            ius: [
                { name: ModelConstants.Tipoiva.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Tipoiva.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Tipoiva.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Tipoiva.piuutipoiva,
                    navKey: 'piu_tipoiva' }
            ]
        }
        , {
            className: ModelConstants.Persona.name,
            navKey: 'persona',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Companyia.name,
            navKey: 'companyia',
            ius: [
                { name: ModelConstants.Companyia.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Companyia.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Companyia.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Companyia.piuucompanyia,
                    navKey: 'piu_companyia' }
            ]
        }
        , {
            className: ModelConstants.Municipio.name,
            navKey: 'municipio',
            ius: [
                { name: ModelConstants.Municipio.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Municipio.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Municipio.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Municipio.piuumunicipio,
                    navKey: 'piu_municipio' }
            ]
        }
        , {
            className: ModelConstants.Tipodireccion.name,
            navKey: 'tipodireccion',
            ius: [
                { name: ModelConstants.Tipodireccion.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Tipodireccion.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Tipodireccion.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Tipodireccion.piuutipodireccion,
                    navKey: 'piu_tipodireccion' }
            ]
        }
        , {
            className: ModelConstants.Estadopersona.name,
            navKey: 'estadopersona',
            ius: [
                { name: ModelConstants.Estadopersona.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Estadopersona.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Estadopersona.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Estadopersona.piuuestadopersona,
                    navKey: 'piu_estadopersona' }
            ]
        }
        , {
            className: ModelConstants.Formapago.name,
            navKey: 'formapago',
            ius: [
                { name: ModelConstants.Formapago.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Formapago.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Formapago.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Formapago.piuuformapago,
                    navKey: 'piu_formapago' }
            ]
        }
        , {
            className: ModelConstants.Tipoidentificacion.name,
            navKey: 'tipoidentificacion',
            ius: [
                { name: ModelConstants.Tipoidentificacion.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Tipoidentificacion.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Tipoidentificacion.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Tipoidentificacion.piuutipoidentificacion,
                    navKey: 'piu_tipoidentificacion' }
            ]
        }
        , {
            className: ModelConstants.Eps.name,
            navKey: 'eps',
            ius: [
                { name: ModelConstants.Eps.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Eps.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Eps.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Eps.piuueps,
                    navKey: 'piu_eps' }
            ]
        }
        , {
            className: ModelConstants.Entidadfinancierac.name,
            navKey: 'entidadfinancierac',
            ius: [
                { name: ModelConstants.Entidadfinancierac.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Entidadfinancierac.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Entidadfinancierac.piuuentidadfinanciera,
                    navKey: 'piu_entidadfinanciera' }
            ]
        }
        , {
            className: ModelConstants.Tipoentidadc.name,
            navKey: 'tipoentidadc',
            ius: [
                { name: ModelConstants.Tipoentidadc.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Tipoentidadc.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Tipoentidadc.piuutipoentidad,
                    navKey: 'piu_tipoentidad' }
            ]
        }
        , {
            className: ModelConstants.Tipoinstitucionc.name,
            navKey: 'tipoinstitucionc',
            ius: [
                { name: ModelConstants.Tipoinstitucionc.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Tipoinstitucionc.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Tipoinstitucionc.piuutipoinstitucion,
                    navKey: 'piu_tipoinstitucion' }
            ]
        }
        , {
            className: ModelConstants.Aeusolicitudes.name,
            navKey: 'ae_solicitudes',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Solicitud.name,
            navKey: 'solicitud',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Personac.name,
            navKey: 'personac',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Direccionc.name,
            navKey: 'direccionc',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Telefonoc.name,
            navKey: 'telefonoc',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Protecciondatosc.name,
            navKey: 'protecciondatosc',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Direccion.name,
            navKey: 'direccion',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Pais.name,
            navKey: 'pais',
            ius: [
                { name: ModelConstants.Pais.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Pais.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Pais.piuupais,
                    navKey: 'piu_pais' }
            ]
        }
        , {
            className: ModelConstants.Protecciondatos.name,
            navKey: 'protecciondatos',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Usuario.name,
            navKey: 'usuario',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Cuestionariop.name,
            navKey: 'cuestionariop',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Seccionp.name,
            navKey: 'seccionp',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Preguntap.name,
            navKey: 'preguntap',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Contratante.name,
            navKey: 'contratante',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Anexomat.name,
            navKey: 'anexomat',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Anexoneo.name,
            navKey: 'anexoneo',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Firma.name,
            navKey: 'firma',
            ius: [
                { name: ModelConstants.Firma.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Firma.piuufirmasrespregional,
                    navKey: 'piu_firmasrespregional' }
                , { name: ModelConstants.Firma.piuufirmaunull,
                    navKey: 'piu_firma_null' }
            ]
        }
        , {
            className: ModelConstants.Contratoc.name,
            navKey: 'contratoc',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Observacionesc.name,
            navKey: 'observacionesc',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Beneficiarioc.name,
            navKey: 'beneficiarioc',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Anexoc.name,
            navKey: 'anexoc',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Pregcuesmedc.name,
            navKey: 'pregcuesmedc',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Dirsucursalc.name,
            navKey: 'dirsucursalc',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Familiac.name,
            navKey: 'familiac',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Usuarioreg.name,
            navKey: 'usuarioreg',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Titular.name,
            navKey: 'titular',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Preexistenciac.name,
            navKey: 'preexistenciac',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Preexistencia.name,
            navKey: 'preexistencia',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Documentog.name,
            navKey: 'documentog',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Obsestado.name,
            navKey: 'obsestado',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Errorws.name,
            navKey: 'errorws',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Parentescodom.name,
            navKey: 'parentescodom',
            ius: [
                { name: ModelConstants.Parentescodom.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Parentescodom.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Parentescodom.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Parentescodom.piuuparentescodom,
                    navKey: 'piu_parentescodom' }
            ]
        }
        , {
            className: ModelConstants.Marcamedicac.name,
            navKey: 'marcamedicac',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Tiposucursalc.name,
            navKey: 'tiposucursalc',
            ius: [
                { name: ModelConstants.Tiposucursalc.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Tiposucursalc.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Tiposucursalc.piuutiposucursalc,
                    navKey: 'piu_tiposucursalc' }
            ]
        }
        , {
            className: ModelConstants.Conceptoc.name,
            navKey: 'conceptoc',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Detalletarifa.name,
            navKey: 'detalletarifa',
            ius: [
                { name: ModelConstants.Detalletarifa.siuutcrear,
                    navKey: 'siu_tcrear' }
                , { name: ModelConstants.Detalletarifa.siuutmodificar,
                    navKey: 'siu_tmodificar' }
                , { name: ModelConstants.Detalletarifa.siuuteliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Detalletarifa.piuudetallestarifa,
                    navKey: 'piu_detallestarifa' }
            ]
        }
        , {
            className: ModelConstants.Agentexproducto.name,
            navKey: 'agentexproducto',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Institucionmatneo.name,
            navKey: 'institucionmatneo',
            ius: [
                { name: ModelConstants.Institucionmatneo.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Institucionmatneo.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Institucionmatneo.siuutmodificar,
                    navKey: 'siu_tmodificar' }
                , { name: ModelConstants.Institucionmatneo.piuuinstitucionmatneo,
                    navKey: 'piu_institucionmatneo' }
            ]
        }
        , {
            className: ModelConstants.Logestado.name,
            navKey: 'logestado',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Motdevareamedica.name,
            navKey: 'motdevareamedica',
            ius: [
                { name: ModelConstants.Motdevareamedica.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Motdevareamedica.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Motdevareamedica.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Motdevareamedica.piuumotdevareamedica,
                    navKey: 'piu_motdevareamedica' }
            ]
        }
        , {
            className: ModelConstants.Contsindocsol.name,
            navKey: 'contsindocsol',
            ius: [
                { name: ModelConstants.Contsindocsol.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Contsindocsol.piuucontsindocsol,
                    navKey: 'piu_contsindocsol' }
            ]
        }
        , {
            className: ModelConstants.Logcontsindocsol.name,
            navKey: 'logcontsindocsol',
            ius: [
                { name: ModelConstants.Logcontsindocsol.piuulogcontsindocsol,
                    navKey: 'piu_logcontsindocsol' }
            ]
        }
        , {
            className: ModelConstants.Logasignaciones.name,
            navKey: 'logasignaciones',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Reportesprocalm.name,
            navKey: 'reportesprocalm',
            ius: [
                { name: ModelConstants.Reportesprocalm.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Reportesprocalm.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Reportesprocalm.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Reportesprocalm.mdiuureportesprocalm,
                    navKey: 'mdiu_reportesprocalm' }
                , { name: ModelConstants.Reportesprocalm.piuureportesprocalm,
                    navKey: 'piu_reportesprocalm' }
            ]
        }
        , {
            className: ModelConstants.Prorrateo.name,
            navKey: 'prorrateo',
            ius: [
                { name: ModelConstants.Prorrateo.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Prorrateo.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Prorrateo.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Prorrateo.piuuprorrateo,
                    navKey: 'piu_prorrateo' }
            ]
        }
        , {
            className: ModelConstants.Tipofactura.name,
            navKey: 'tipofactura',
            ius: [
                { name: ModelConstants.Tipofactura.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Tipofactura.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Tipofactura.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Tipofactura.piuutipofactura,
                    navKey: 'piu_tipofactura' }
            ]
        }
        , {
            className: ModelConstants.Paramreporte.name,
            navKey: 'paramreporte',
            ius: [
                { name: ModelConstants.Paramreporte.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Paramreporte.siuutnew,
                    navKey: 'siu_tnew' }
                , { name: ModelConstants.Paramreporte.siuutdelete,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Paramreporte.siuutsubir,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Paramreporte.siuutbajar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Paramreporte.piuuduparametros,
                    navKey: 'piu_d_parametros' }
            ]
        }
        , {
            className: ModelConstants.Tiponovedad.name,
            navKey: 'tiponovedad',
            ius: [
                { name: ModelConstants.Tiponovedad.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Tiponovedad.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Tiponovedad.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Tiponovedad.piuutiponovedad,
                    navKey: 'piu_tiponovedad' }
            ]
        }
        , {
            className: ModelConstants.Novedad.name,
            navKey: 'novedad',
            ius: [
                { name: ModelConstants.Novedad.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Novedad.siuudelnovedad,
                    navKey: 'siu_delnovedad' }
                , { name: ModelConstants.Novedad.siuuteliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Novedad.siuutcrear,
                    navKey: 'siu_tcrear' }
                , { name: ModelConstants.Novedad.iiuunovedad,
                    navKey: 'iiu_novedad' }
                , { name: ModelConstants.Novedad.mdiuunovedaducausales,
                    navKey: 'mdiu_novedad_causales' }
                , { name: ModelConstants.Novedad.piuunovedad,
                    navKey: 'piu_novedad' }
                , { name: ModelConstants.Novedad.piuunovedadunull,
                    navKey: 'piu_novedad_null' }
            ]
        }
        , {
            className: ModelConstants.Causal.name,
            navKey: 'causal',
            ius: [
                { name: ModelConstants.Causal.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Causal.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Causal.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Causal.uautou,
                    navKey: '_auto_' }
                , { name: ModelConstants.Causal.piuucausalunull,
                    navKey: 'piu_causal_null' }
            ]
        }
        , {
            className: ModelConstants.Solicitudnovedad.name,
            navKey: 'solicitudnovedad',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Familianovedad.name,
            navKey: 'familianovedad',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Usuarionovedad.name,
            navKey: 'usuarionovedad',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Causaexclusion.name,
            navKey: 'causaexclusion',
            ius: [
                { name: ModelConstants.Causaexclusion.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Causaexclusion.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Causaexclusion.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Causaexclusion.piuucausaexclusion,
                    navKey: 'piu_causaexclusion' }
            ]
        }
        , {
            className: ModelConstants.Novedadct.name,
            navKey: 'novedadct',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Documentonovedad.name,
            navKey: 'documentonovedad',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Novedadmd.name,
            navKey: 'novedadmd',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Logestadosn.name,
            navKey: 'logestadosn',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Motivoexcepcionsolnov.name,
            navKey: 'motivoexcepcionsolnov',
            ius: [
                { name: ModelConstants.Motivoexcepcionsolnov.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Motivoexcepcionsolnov.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Motivoexcepcionsolnov.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Motivoexcepcionsolnov.piuumotivoexcepcionsolnov,
                    navKey: 'piu_motivoexcepcionsolnov' }
            ]
        }
        , {
            className: ModelConstants.Priorizacionsolicitudes.name,
            navKey: 'priorizacionsolicitudes',
            ius: [
                { name: ModelConstants.Priorizacionsolicitudes.siuutcrear,
                    navKey: 'siu_tcrear' }
                , { name: ModelConstants.Priorizacionsolicitudes.siuuteliminar,
                    navKey: 'siu_teliminar' }
                , { name: ModelConstants.Priorizacionsolicitudes.siuutmodificar,
                    navKey: 'siu_tmodificar' }
                , { name: ModelConstants.Priorizacionsolicitudes.piuupriorizacionsolicitudes,
                    navKey: 'piu_priorizacionsolicitudes' }
            ]
        }
        , {
            className: ModelConstants.Logpriorizacionsol.name,
            navKey: 'logpriorizacionsol',
            ius: [
                { name: ModelConstants.Logpriorizacionsol.piuulogpriorizacionsol,
                    navKey: 'piu_logpriorizacionsol' }
            ]
        }
        , {
            className: ModelConstants.Grupoasignacion.name,
            navKey: 'grupoasignacion',
            ius: [
                { name: ModelConstants.Grupoasignacion.siuuteliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Grupoasignacion.siuutcrear,
                    navKey: 'siu_tcrear' }
                , { name: ModelConstants.Grupoasignacion.siuutmodificar,
                    navKey: 'siu_tmodificar' }
                , { name: ModelConstants.Grupoasignacion.siuutaddusuario,
                    navKey: 'siu_taddusuario' }
                , { name: ModelConstants.Grupoasignacion.siuutdelusuario,
                    navKey: 'siu_tdelusuario' }
                , { name: ModelConstants.Grupoasignacion.mdiuugrupoasignacion,
                    navKey: 'mdiu_grupoasignacion' }
                , { name: ModelConstants.Grupoasignacion.piuugrupoasignacion,
                    navKey: 'piu_grupoasignacion' }
            ]
        }
        , {
            className: ModelConstants.Loggrupoasignacion.name,
            navKey: 'loggrupoasignacion',
            ius: [
                { name: ModelConstants.Loggrupoasignacion.piuuloggrupoasignacion,
                    navKey: 'piu_loggrupoasignacion' }
            ]
        }
        , {
            className: ModelConstants.Loggruposusuarios.name,
            navKey: 'loggruposusuarios',
            ius: [
                { name: ModelConstants.Loggruposusuarios.piuuloggruposusuarios,
                    navKey: 'piu_loggruposusuarios' }
            ]
        }
        , {
            className: ModelConstants.Grupoasignacionnovedad.name,
            navKey: 'grupoasignacionnovedad',
            ius: [
                { name: ModelConstants.Grupoasignacionnovedad.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Grupoasignacionnovedad.siuutcrear,
                    navKey: 'siu_tcrear' }
                , { name: ModelConstants.Grupoasignacionnovedad.siuutasggrupo,
                    navKey: 'siu_tasggrupo' }
                , { name: ModelConstants.Grupoasignacionnovedad.mdiuugrupoasignacionnovedad,
                    navKey: 'mdiu_grupoasignacionnovedad' }
                , { name: ModelConstants.Grupoasignacionnovedad.piuugrpasignovedadududominio,
                    navKey: 'piu_grpasignovedad_d_dominio' }
            ]
        }
        , {
            className: ModelConstants.Logfuncionario.name,
            navKey: 'logfuncionario',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Logusrsolnov.name,
            navKey: 'logusrsolnov',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Contratocombo.name,
            navKey: 'contratocombo',
            ius: [
                { name: ModelConstants.Contratocombo.piuucontratocombo,
                    navKey: 'piu_contratocombo' }
            ]
        }
        , {
            className: ModelConstants.Logcontratocombo.name,
            navKey: 'logcontratocombo',
            ius: [
                { name: ModelConstants.Logcontratocombo.piuulogcontratocombo,
                    navKey: 'piu_logcontratocombo' }
            ]
        }
        , {
            className: ModelConstants.Configuracionans.name,
            navKey: 'configuracionans',
            ius: [
                { name: ModelConstants.Configuracionans.siuutcrear,
                    navKey: 'siu_tcrear' }
                , { name: ModelConstants.Configuracionans.siuutmodificar,
                    navKey: 'siu_tmodificar' }
                , { name: ModelConstants.Configuracionans.siuuteliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Configuracionans.iiuuconfiguracionans,
                    navKey: 'iiu_configuracionans' }
                , { name: ModelConstants.Configuracionans.piuuconfiguracionans,
                    navKey: 'piu_configuracionans' }
            ]
        }
        , {
            className: ModelConstants.Logconfiguracionans.name,
            navKey: 'logconfiguracionans',
            ius: [
                { name: ModelConstants.Logconfiguracionans.piuulogconfiguracionans,
                    navKey: 'piu_logconfiguracionans' }
            ]
        }
        , {
            className: ModelConstants.Configuracionfestivos.name,
            navKey: 'configuracionfestivos',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Logestadodocnov.name,
            navKey: 'logestadodocnov',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Plantillareporte.name,
            navKey: 'plantillareporte',
            ius: [
                { name: ModelConstants.Plantillareporte.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Plantillareporte.piuuplantillareporte,
                    navKey: 'piu_plantillareporte' }
            ]
        }
        , {
            className: ModelConstants.Reportesdominio.name,
            navKey: 'reportesdominio',
            ius: [
                { name: ModelConstants.Reportesdominio.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Reportesdominio.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Reportesdominio.piuureportesdominio,
                    navKey: 'piu_reportesdominio' }
            ]
        }
        , {
            className: ModelConstants.Loginformacionasesor.name,
            navKey: 'loginformacionasesor',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Loghistoricoplanes.name,
            navKey: 'loghistoricoplanes',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Logllamadasae.name,
            navKey: 'logllamadasae',
            ius: [
                { name: ModelConstants.Logllamadasae.iiuulogllamadasae,
                    navKey: 'iiu_logllamadasae' }
                , { name: ModelConstants.Logllamadasae.piuulogllamadasae,
                    navKey: 'piu_logllamadasae' }
            ]
        }
        , {
            className: ModelConstants.Logllamadasbh.name,
            navKey: 'logllamadasbh',
            ius: [
                { name: ModelConstants.Logllamadasbh.iiuulogllamadasbh,
                    navKey: 'iiu_logllamadasbh' }
                , { name: ModelConstants.Logllamadasbh.piuulogllamadasbh,
                    navKey: 'piu_logllamadasbh' }
            ]
        }
        , {
            className: ModelConstants.Fechainieps.name,
            navKey: 'fechainieps',
            ius: [
                { name: ModelConstants.Fechainieps.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Fechainieps.piuufechainieps,
                    navKey: 'piu_fechainieps' }
            ]
        }
        , {
            className: ModelConstants.Logincompatibilidades.name,
            navKey: 'logincompatibilidades',
            ius: [
                { name: ModelConstants.Logincompatibilidades.piuulogincompatibilidades,
                    navKey: 'piu_logincompatibilidades' }
            ]
        }
        , {
            className: ModelConstants.Logdatosdominio.name,
            navKey: 'logdatosdominio',
            ius: [
            ]
        }
        , {
            className: ModelConstants.Contratosexentosfingreso.name,
            navKey: 'contratosexentosfingreso',
            ius: [
                { name: ModelConstants.Contratosexentosfingreso.piuucontratosexentosfingreso,
                    navKey: 'piu_contratosexentosfingreso' }
            ]
        }
        , {
            className: ModelConstants.Logcontratosexentosfingreso.name,
            navKey: 'logcontratosexentosfingreso',
            ius: [
                { name: ModelConstants.Logcontratosexentosfingreso.piuulogcontratosexentosfingres,
                    navKey: 'piu_logcontratosexentosfingres' }
            ]
        }
        , {
            className: ModelConstants.Textoaviso.name,
            navKey: 'textoaviso',
            ius: [
                { name: ModelConstants.Textoaviso.siuucrear,
                    navKey: 'siu_crear' }
                , { name: ModelConstants.Textoaviso.siuueliminar,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Textoaviso.siuumodificar,
                    navKey: 'siu_modificar' }
                , { name: ModelConstants.Textoaviso.piuutextoaviso,
                    navKey: 'piu_textoaviso' }
            ]
        }
        , {
            className: ModelConstants.Usuariosistemaexterno.name,
            navKey: 'usuariosistemaexterno',
            ius: [
            ]
        }
        , {
            className: 'globalservices',
            navKey: 'globalservices',
            ius: [
                { name: ModelConstants.Globalservices.siuutgsincproductos,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuutgsincplanes,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuutgsincparentescos,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuutgsincperiodicidades,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuutgsincestadoscontrato,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuutgsincestadosbeneficiario,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuutgsincregionales,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuuogsincsucursales,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuuogsincgruposasociados,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuutgsincestadosciviles,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuutgsincdepartamentos,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuuogsincompanias,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuuogsincmunicipios,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuutgsinctiposdireccion,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuutgsincestadospersona,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuutgsincformaspago,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuutgsinctiposidentificacion,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuuogsincepss,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuutgsincpaises,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuutgsincentidadesfin,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuutgsinctiposdeentidad,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuutgsinctiposinstitucion,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuutgsinctipossucursal,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuutgcreartarifa,
                    navKey: 'siu_tgcreartarifa' }
                , { name: ModelConstants.Globalservices.siuutgeliminartarifa,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuutdelcontsindocsol,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuutgcrearcombo,
                    navKey: 'siu_tgcrearcombo' }
                , { name: ModelConstants.Globalservices.siuutgeditarcombo,
                    navKey: 'siu_tgeditarcombo' }
                , { name: ModelConstants.Globalservices.siuutdelcombo,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuutgaddplantrep,
                    navKey: 'siu_tgaddplantrep' }
                , { name: ModelConstants.Globalservices.siuutgeditplantrep,
                    navKey: 'siu_tgeditplantrep' }
                , { name: ModelConstants.Globalservices.siuutgcrearfinieps,
                    navKey: 'siu_tgcrearfinieps' }
                , { name: ModelConstants.Globalservices.siuutgmodfinieps,
                    navKey: 'siu_tgmodfinieps' }
                , { name: ModelConstants.Globalservices.siuutgcrearcontexento,
                    navKey: 'siu_tgcrearcontexento' }
                , { name: ModelConstants.Globalservices.siuutgdelcontratoexento,
                    navKey: '_GENERICSIU' }
                , { name: ModelConstants.Globalservices.siuutgenrepalm,
                    navKey: 'siu_tgenrepalm' }
                , { name: ModelConstants.Globalservices.siuutgenrepalmuout,
                    navKey: 'siu_tgenrepalm_out' }
            ]
        }
    ];
}
