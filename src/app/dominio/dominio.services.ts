import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'Dominio'
 */
export class DominioServices extends AbstractServices {

    private crearSrvName = 'crear';
    private insPeriodicidadDominioSrvName = 'InsPeriodicidadDominio';
    private delPeriodicidadDominioSrvName = 'DelPeriodicidadDominio';
    private insRolDominioSrvName = 'InsRolDominio';
    private delRollDominioSrvName = 'DelRollDominio';
    private modDatosRespFirmaSrvName = 'modDatosRespFirma';
    private modImagenFirmaSrvName = 'modImagenFirma';
    private insFormaPagoSrvName = 'InsFormaPago';
    private delFormaPagoSrvName = 'DelFormaPago';
    private cambiarDiasVigenciaSrvName = 'cambiarDiasVigencia';
    private modificarConfSolNovedadSrvName = 'modificarConfSolNovedad';
    private tELIMINARSrvName = 'TELIMINAR';
    private tINSPLANTILLASrvName = 'TINSPLANTILLA';
    private tINSNOVEDADSrvName = 'TINSNOVEDAD';
    private tADDGRPASESORESSrvName = 'TADDGRPASESORES';
    private tDELGRPASESORESSrvName = 'TDELGRPASESORES';
    private tADDGRPMEDICOSrvName = 'TADDGRPMEDICO';
    private tDELGRPMEDICOSrvName = 'TDELGRPMEDICO';
    private tADDREPORTESrvName = 'TADDREPORTE';
    private tINSINCOMPATIBLESrvName = 'TINSINCOMPATIBLE';
    private tDELINCOMPATIBLESrvName = 'TDELINCOMPATIBLE';
    private tMODIFICARSrvName = 'TMODIFICAR';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Dominio');
    }

    /**
     * Call to the filter 'F_DominioVarios' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vouProductoVar Variable vo_Producto
     * @param vouPlanVar Variable vo_Plan
     * @param vuNuevaAfiliacionVar Variable v_NuevaAfiliacion
     * @param vuInclusionVar Variable v_Inclusion
     * @param vouRolVar Variable vo_Rol
     */
    public queryByFilterFuDominioVarios(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vouProductoVar: any, vouPlanVar: any, vuNuevaAfiliacionVar: boolean | null, vuInclusionVar: boolean | null,
        vouRolVar: any): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_DominioVarios');
        this.util.addFilterVariable(filter, 'vo_producto', vouProductoVar);
        this.util.addFilterVariable(filter, 'vo_plan', vouPlanVar);
        this.util.addFilterVariable(filter, 'v_nuevaafiliacion', vuNuevaAfiliacionVar);
        this.util.addFilterVariable(filter, 'v_inclusion', vuInclusionVar);
        this.util.addFilterVariable(filter, 'vo_rol', vouRolVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * @param oidPlanT Oid of related 'Planes' instance using the role 'PlanT'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPlanT(
        oidPlanT: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPlanT, 'PlanT');
    }

    /**
     * @param oidProductoT Oid of related 'Productos' instance using the role 'ProductoT'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedProductoT(
        oidProductoT: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidProductoT, 'ProductoT');
    }

    /**
     * @param oidPeriodicidades Oid of related 'Periodicidad' instance using the role 'Periodicidades'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPeriodicidades(
        oidPeriodicidades: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPeriodicidades, 'Periodicidades');
    }

    /**
     * @param oidRoles Oid of related 'Rol' instance using the role 'Roles'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedRoles(
        oidRoles: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidRoles, 'Roles');
    }

    /**
     * @param oidFormasPago Oid of related 'FormaPago' instance using the role 'FormasPago'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedFormasPago(
        oidFormasPago: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidFormasPago, 'FormasPago');
    }

    /**
     * @param oidPlantillas Oid of related 'PlantillaEmail' instance using the role 'Plantillas'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPlantillas(
        oidPlantillas: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPlantillas, 'Plantillas');
    }

    /**
     * @param oidNovedades Oid of related 'Novedad' instance using the role 'Novedades'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedNovedades(
        oidNovedades: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidNovedades, 'Novedades');
    }

    /**
     * @param oidGrupoAsesores Oid of related 'GrupoAsignacion' instance using the role 'GrupoAsesores'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedGrupoAsesores(
        oidGrupoAsesores: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidGrupoAsesores, 'GrupoAsesores');
    }

    /**
     * @param oidGrupoAreaMedica Oid of related 'GrupoAsignacion' instance using the role 'GrupoAreaMedica'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedGrupoAreaMedica(
        oidGrupoAreaMedica: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidGrupoAreaMedica, 'GrupoAreaMedica');
    }

    /**
     * @param oidDominiosIncompatibles Oid of related 'Dominio' instance using the role 'DominiosIncompatibles'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDominiosIncompatibles(
        oidDominiosIncompatibles: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDominiosIncompatibles, 'DominiosIncompatibles');
    }

    /**
     * @param oidDominiosConIncompatibilidad Oid of related 'Dominio' instance using the role 'DominiosConIncompatibilidad'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDominiosConIncompatibilidad(
        oidDominiosConIncompatibilidad: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDominiosConIncompatibilidad, 'DominiosConIncompatibilidad');
    }

    /**
     * @param oidParentescosDom Oid of related 'ParentescoDom' instance using the role 'ParentescosDom'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedParentescosDom(
        oidParentescosDom: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidParentescosDom, 'ParentescosDom');
    }

    /**
     * @param oidProrrateos Oid of related 'Prorrateo' instance using the role 'Prorrateos'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedProrrateos(
        oidProrrateos: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidProrrateos, 'Prorrateos');
    }

    /**
     * @param oidLogGruposUsuarios Oid of related 'LogGruposUsuarios' instance using the role 'LogGruposUsuarios'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedLogGruposUsuarios(
        oidLogGruposUsuarios: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidLogGruposUsuarios, 'LogGruposUsuarios');
    }

    /**
     * @param oidGrupoAsignacionNovedad Oid of related 'GrupoAsignacionNovedad' instance using the role 'GrupoAsignacionNovedad'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedGrupoAsignacionNovedad(
        oidGrupoAsignacionNovedad: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidGrupoAsignacionNovedad, 'GrupoAsignacionNovedad');
    }

    /**
     * @param oidConfiguracionesANS Oid of related 'ConfiguracionANS' instance using the role 'ConfiguracionesANS'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedConfiguracionesANS(
        oidConfiguracionesANS: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidConfiguracionesANS, 'ConfiguracionesANS');
    }

    /**
     * @param oidReportesDominio Oid of related 'ReportesDominio' instance using the role 'ReportesDominio'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedReportesDominio(
        oidReportesDominio: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidReportesDominio, 'ReportesDominio');
    }

    /**
     * @param oidLogIncompatibilidades Oid of related 'LogIncompatibilidades' instance using the role 'LogIncompatibilidades'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedLogIncompatibilidades(
        oidLogIncompatibilidades: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidLogIncompatibilidades, 'LogIncompatibilidades');
    }

    /**
     * @param oidLogDatosDominio Oid of related 'LogDatosDominio' instance using the role 'LogDatosDominio'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedLogDatosDominio(
        oidLogDatosDominio: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidLogDatosDominio, 'LogDatosDominio');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puagrPlanTInArg Mandatory argument 'p_agrPlanT'. Oid of 'Planes' class
     * @param puagrProductoTInArg Mandatory argument 'p_agrProductoT'. Oid of 'Productos' class
     * @param puagrGrupoAsesoresInArg Optional argument 'p_agrGrupoAsesores'. Oid of 'GrupoAsignacion' class
     * @param puagrGrupoAreaMedicaInArg Optional argument 'p_agrGrupoAreaMedica'. Oid of 'GrupoAsignacion' class
     * @param puatrReqCuesMedInArg Mandatory argument 'p_atrReqCuesMed'
     * @param puatrNoCuesMedTrasInArg Mandatory argument 'p_atrNoCuesMedTras'
     * @param puatrNuevaAfiliacionInArg Mandatory argument 'p_atrNuevaAfiliacion'
     * @param puatrInclusionInArg Mandatory argument 'p_atrInclusion'
     * @param puatrAcepCuesMatInArg Mandatory argument 'p_atrAcepCuesMat'
     * @param puatrAcepCuesNeoInArg Mandatory argument 'p_atrAcepCuesNeo'
     * @param puatrAcepBBGestanteInArg Mandatory argument 'p_atrAcepBBGestante'
     * @param puatrMostrarPreexAnexosInArg Mandatory argument 'p_atrMostrarPreexAnexos'
     * @param puatrMostrarPreexContratoInArg Mandatory argument 'p_atrMostrarPreexContrato'
     * @param puatrIgnorarPreexistenciasInArg Mandatory argument 'p_atrIgnorarPreexistencias'
     * @param puatrProrrateoUsuExistenteInArg Mandatory argument 'p_atrProrrateoUsuExistente'
     * @param puatrInclusionModGrupoAsocInArg Mandatory argument 'p_atrInclusionModGrupoAsoc'
     * @param puatrPermiteRechazadosAfiInArg Mandatory argument 'p_atrPermiteRechazadosAfi'
     * @param puatrAcepPolizaInterInArg Mandatory argument 'p_atrAcepPolizaInter'
     * @param puatrNovExcepcionReqDocInArg Mandatory argument 'p_atrNovExcepcionReqDoc'
     * @param puatrSolNovColorOscuroInArg Optional argument 'p_atrSolNovColorOscuro'
     * @param puatrSolNovColorClaroInArg Optional argument 'p_atrSolNovColorClaro'
     * @param puatrSolNovLogoInArg Optional argument 'p_atrSolNovLogo'
     * @param puatrTramiteEnLineaInArg Mandatory argument 'p_atrTramiteEnLinea'
     * @param puatrVigenciaRadicacionInArg Mandatory argument 'p_atrVigenciaRadicacion'
     */
    public crear(
        puagrPlanTInArg: any, puagrProductoTInArg: any, puagrGrupoAsesoresInArg: any, puagrGrupoAreaMedicaInArg: any,
        puatrReqCuesMedInArg: boolean, puatrNoCuesMedTrasInArg: boolean, puatrNuevaAfiliacionInArg: boolean,
        puatrInclusionInArg: boolean, puatrAcepCuesMatInArg: boolean, puatrAcepCuesNeoInArg: boolean,
        puatrAcepBBGestanteInArg: boolean, puatrMostrarPreexAnexosInArg: boolean, puatrMostrarPreexContratoInArg: boolean,
        puatrIgnorarPreexistenciasInArg: boolean, puatrProrrateoUsuExistenteInArg: boolean, puatrInclusionModGrupoAsocInArg: boolean,
        puatrPermiteRechazadosAfiInArg: boolean, puatrAcepPolizaInterInArg: boolean, puatrNovExcepcionReqDocInArg: boolean,
        puatrSolNovColorOscuroInArg: string | null, puatrSolNovColorClaroInArg: string | null, puatrSolNovLogoInArg: string | null,
        puatrTramiteEnLineaInArg: boolean, puatrVigenciaRadicacionInArg: boolean):
        Promise<{
            ps_dominio: any
        }> {
        const request: {
            p_agrplant_json: any, p_agrproductot_json: any, p_agrgrupoasesores_oid: any, p_agrgrupoareamedica_oid: any,
            p_atrreqcuesmed: boolean, p_atrnocuesmedtras: boolean, p_atrnuevaafiliacion: boolean, p_atrinclusion: boolean,
            p_atracepcuesmat: boolean, p_atracepcuesneo: boolean, p_atracepbbgestante: boolean, p_atrmostrarpreexanexos: boolean,
            p_atrmostrarpreexcontrato: boolean, p_atrignorarpreexistencias: boolean, p_atrprorrateousuexistente: boolean,
            p_atrinclusionmodgrupoasoc: boolean, p_atrpermiterechazadosafi: boolean, p_atraceppolizainter: boolean,
            p_atrnovexcepcionreqdoc: boolean, p_atrsolnovcoloroscuro: string | null, p_atrsolnovcolorclaro: string | null,
            p_atrsolnovlogo: string | null, p_atrtramiteenlinea: boolean, p_atrvigenciaradicacion: boolean
        } = {
            p_agrplant_json: puagrPlanTInArg ? JSON.stringify(puagrPlanTInArg) : '',
            p_agrproductot_json: puagrProductoTInArg ? JSON.stringify(puagrProductoTInArg) : '',
            p_agrgrupoasesores_oid: puagrGrupoAsesoresInArg, p_agrgrupoareamedica_oid: puagrGrupoAreaMedicaInArg,
            p_atrreqcuesmed: puatrReqCuesMedInArg, p_atrnocuesmedtras: puatrNoCuesMedTrasInArg,
            p_atrnuevaafiliacion: puatrNuevaAfiliacionInArg, p_atrinclusion: puatrInclusionInArg,
            p_atracepcuesmat: puatrAcepCuesMatInArg, p_atracepcuesneo: puatrAcepCuesNeoInArg,
            p_atracepbbgestante: puatrAcepBBGestanteInArg, p_atrmostrarpreexanexos: puatrMostrarPreexAnexosInArg,
            p_atrmostrarpreexcontrato: puatrMostrarPreexContratoInArg, p_atrignorarpreexistencias: puatrIgnorarPreexistenciasInArg,
            p_atrprorrateousuexistente: puatrProrrateoUsuExistenteInArg, p_atrinclusionmodgrupoasoc: puatrInclusionModGrupoAsocInArg,
            p_atrpermiterechazadosafi: puatrPermiteRechazadosAfiInArg, p_atraceppolizainter: puatrAcepPolizaInterInArg,
            p_atrnovexcepcionreqdoc: puatrNovExcepcionReqDocInArg, p_atrsolnovcoloroscuro: puatrSolNovColorOscuroInArg,
            p_atrsolnovcolorclaro: puatrSolNovColorClaroInArg, p_atrsolnovlogo: puatrSolNovLogoInArg,
            p_atrtramiteenlinea: puatrTramiteEnLineaInArg, p_atrvigenciaradicacion: puatrVigenciaRadicacionInArg
        };
        return new Promise<{
            ps_dominio: any
        }> ((resolve, reject) => {
            this.callService(this.crearSrvName, request).then((response: any) => {
                resolve({
                    ps_dominio: response.ps_dominio
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'InsPeriodicidadDominio' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDominioInArg Mandatory argument 'p_thisDominio'. Oid of 'Dominio' class
     * @param puevcPeriodicidadInArg Mandatory argument 'p_evcPeriodicidad'. Oid of 'Periodicidad' class
     */
    public insPeriodicidadDominio(
        puthisDominioInArg: any, puevcPeriodicidadInArg: any): Promise<void> {
        const request: {
            p_thisdominio_oid: any, p_evcperiodicidad_oid: any
        } = {
            p_thisdominio_oid: puthisDominioInArg, p_evcperiodicidad_oid: puevcPeriodicidadInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.insPeriodicidadDominioSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'DelPeriodicidadDominio' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDominioInArg Mandatory argument 'p_thisDominio'. Oid of 'Dominio' class
     * @param puevcPeriodicidadInArg Mandatory argument 'p_evcPeriodicidad'. Oid of 'Periodicidad' class
     */
    public delPeriodicidadDominio(
        puthisDominioInArg: any, puevcPeriodicidadInArg: any): Promise<void> {
        const request: {
            p_thisdominio_oid: any, p_evcperiodicidad_json: any
        } = {
            p_thisdominio_oid: puthisDominioInArg,
            p_evcperiodicidad_json: puevcPeriodicidadInArg ? JSON.stringify(puevcPeriodicidadInArg) : ''
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.delPeriodicidadDominioSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'InsRolDominio' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDominioInArg Mandatory argument 'p_thisDominio'. Oid of 'Dominio' class
     * @param puevcRolInArg Mandatory argument 'p_evcRol'. Oid of 'Rol' class
     */
    public insRolDominio(
        puthisDominioInArg: any, puevcRolInArg: any): Promise<void> {
        const request: {
            p_thisdominio_oid: any, p_evcrol_oid: any
        } = {
            p_thisdominio_oid: puthisDominioInArg, p_evcrol_oid: puevcRolInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.insRolDominioSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'DelRollDominio' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDominioInArg Mandatory argument 'p_thisDominio'. Oid of 'Dominio' class
     * @param puevcRolInArg Mandatory argument 'p_evcRol'. Oid of 'Rol' class
     */
    public delRollDominio(
        puthisDominioInArg: any, puevcRolInArg: any): Promise<void> {
        const request: {
            p_thisdominio_oid: any, p_evcrol_json: any
        } = {
            p_thisdominio_oid: puthisDominioInArg, p_evcrol_json: puevcRolInArg ? JSON.stringify(puevcRolInArg) : ''
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.delRollDominioSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'modDatosRespFirma' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDominioInArg Mandatory argument 'p_thisDominio'. Oid of 'Dominio' class
     * @param pNombreInArg Mandatory argument 'pNombre'
     * @param pNumCelulaInArg Mandatory argument 'pNumCelula'
     * @param pExpedicionCelulaInArg Mandatory argument 'pExpedicionCelula'
     * @param pCargoInArg Mandatory argument 'pCargo'
     */
    public modDatosRespFirma(
        puthisDominioInArg: any, pNombreInArg: string, pNumCelulaInArg: string, pExpedicionCelulaInArg: string,
        pCargoInArg: string): Promise<void> {
        const request: {
            p_thisdominio_oid: any, pnombre: string, pnumcelula: string, pexpedicioncelula: string, pcargo: string
        } = {
            p_thisdominio_oid: puthisDominioInArg, pnombre: pNombreInArg, pnumcelula: pNumCelulaInArg,
            pexpedicioncelula: pExpedicionCelulaInArg, pcargo: pCargoInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.modDatosRespFirmaSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'modImagenFirma' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDominioInArg Mandatory argument 'p_thisDominio'. Oid of 'Dominio' class
     * @param pFirmaInArg Mandatory argument 'pFirma'
     */
    public modImagenFirma(
        puthisDominioInArg: any, pFirmaInArg: string): Promise<void> {
        const request: {
            p_thisdominio_oid: any, pfirma: string
        } = {
            p_thisdominio_oid: puthisDominioInArg, pfirma: pFirmaInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.modImagenFirmaSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'InsFormaPago' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDominioInArg Mandatory argument 'p_thisDominio'. Oid of 'Dominio' class
     * @param puevcFormaPagoInArg Mandatory argument 'p_evcFormaPago'. Oid of 'FormaPago' class
     */
    public insFormaPago(
        puthisDominioInArg: any, puevcFormaPagoInArg: any): Promise<void> {
        const request: {
            p_thisdominio_oid: any, p_evcformapago_oid: any
        } = {
            p_thisdominio_oid: puthisDominioInArg, p_evcformapago_oid: puevcFormaPagoInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.insFormaPagoSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'DelFormaPago' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDominioInArg Mandatory argument 'p_thisDominio'. Oid of 'Dominio' class
     * @param puevcFormaPagoInArg Mandatory argument 'p_evcFormaPago'. Oid of 'FormaPago' class
     */
    public delFormaPago(
        puthisDominioInArg: any, puevcFormaPagoInArg: any): Promise<void> {
        const request: {
            p_thisdominio_oid: any, p_evcformapago_oid: any
        } = {
            p_thisdominio_oid: puthisDominioInArg, p_evcformapago_oid: puevcFormaPagoInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.delFormaPagoSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'cambiarDiasVigencia' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDominioInArg Mandatory argument 'p_thisDominio'. Oid of 'Dominio' class
     * @param pIniVigenciaInArg Mandatory argument 'pIniVigencia'
     * @param pFinVigenciaInArg Mandatory argument 'pFinVigencia'
     * @param pCaducidadInArg Mandatory argument 'pCaducidad'
     */
    public cambiarDiasVigencia(
        puthisDominioInArg: any, pIniVigenciaInArg: number, pFinVigenciaInArg: number, pCaducidadInArg: number): Promise<void> {
        const request: {
            p_thisdominio_oid: any, pinivigencia: number, pfinvigencia: number, pcaducidad: number
        } = {
            p_thisdominio_oid: puthisDominioInArg, pinivigencia: pIniVigenciaInArg, pfinvigencia: pFinVigenciaInArg,
            pcaducidad: pCaducidadInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.cambiarDiasVigenciaSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'modificarConfSolNovedad' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDominioInArg Mandatory argument 'p_thisDominio'. Oid of 'Dominio' class
     * @param puNovExcepcionReqDocInArg Mandatory argument 'p_NovExcepcionReqDoc'
     * @param puSolNovColorOscuroInArg Optional argument 'p_SolNovColorOscuro'
     * @param puSolNovColorClaroInArg Optional argument 'p_SolNovColorClaro'
     * @param puSolNovLogoInArg Optional argument 'p_SolNovLogo'
     */
    public modificarConfSolNovedad(
        puthisDominioInArg: any, puNovExcepcionReqDocInArg: boolean, puSolNovColorOscuroInArg: string | null,
        puSolNovColorClaroInArg: string | null, puSolNovLogoInArg: string | null): Promise<void> {
        const request: {
            p_thisdominio_oid: any, p_novexcepcionreqdoc: boolean, p_solnovcoloroscuro: string | null,
            p_solnovcolorclaro: string | null, p_solnovlogo: string | null
        } = {
            p_thisdominio_oid: puthisDominioInArg, p_novexcepcionreqdoc: puNovExcepcionReqDocInArg,
            p_solnovcoloroscuro: puSolNovColorOscuroInArg, p_solnovcolorclaro: puSolNovColorClaroInArg, p_solnovlogo: puSolNovLogoInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.modificarConfSolNovedadSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TELIMINAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDominioInArg Mandatory argument 'p_thisDominio'. Oid of 'Dominio' class
     */
    public tELIMINAR(
        puthisDominioInArg: any): Promise<void> {
        const request: {
            p_thisdominio_oid: any
        } = {
            p_thisdominio_oid: puthisDominioInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tELIMINARSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TINSPLANTILLA' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDominioInArg Mandatory argument 'p_thisDominio'. Oid of 'Dominio' class
     * @param ptPlantillaInArg Mandatory argument 'ptPlantilla'. Oid of 'PlantillaEmail' class
     */
    public tINSPLANTILLA(
        puthisDominioInArg: any, ptPlantillaInArg: any): Promise<void> {
        const request: {
            p_thisdominio_oid: any, ptplantilla_oid: any
        } = {
            p_thisdominio_oid: puthisDominioInArg, ptplantilla_oid: ptPlantillaInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tINSPLANTILLASrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TINSNOVEDAD' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDominioInArg Mandatory argument 'p_thisDominio'. Oid of 'Dominio' class
     * @param ptupuevcNovedadInArg Mandatory argument 'pt_p_evcNovedad'. Oid of 'Novedad' class
     * @param ptTipoInArg Mandatory argument 'ptTipo'. Oid of 'TipoNovedad' class
     */
    public tINSNOVEDAD(
        puthisDominioInArg: any, ptupuevcNovedadInArg: any, ptTipoInArg: any): Promise<void> {
        const request: {
            p_thisdominio_oid: any, pt_p_evcnovedad_json: any, pttipo_json: any
        } = {
            p_thisdominio_oid: puthisDominioInArg,
            pt_p_evcnovedad_json: ptupuevcNovedadInArg ? JSON.stringify(ptupuevcNovedadInArg) : '',
            pttipo_json: ptTipoInArg ? JSON.stringify(ptTipoInArg) : ''
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tINSNOVEDADSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TADDGRPASESORES' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDominioInArg Mandatory argument 'p_thisDominio'. Oid of 'Dominio' class
     * @param ptGrupoInArg Mandatory argument 'ptGrupo'. Oid of 'GrupoAsignacion' class
     */
    public tADDGRPASESORES(
        puthisDominioInArg: any, ptGrupoInArg: any): Promise<void> {
        const request: {
            p_thisdominio_oid: any, ptgrupo_oid: any
        } = {
            p_thisdominio_oid: puthisDominioInArg, ptgrupo_oid: ptGrupoInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tADDGRPASESORESSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TDELGRPASESORES' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDominioInArg Mandatory argument 'p_thisDominio'. Oid of 'Dominio' class
     */
    public tDELGRPASESORES(
        puthisDominioInArg: any): Promise<void> {
        const request: {
            p_thisdominio_oid: any
        } = {
            p_thisdominio_oid: puthisDominioInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tDELGRPASESORESSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TADDGRPMEDICO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDominioInArg Mandatory argument 'p_thisDominio'. Oid of 'Dominio' class
     * @param ptGrupoInArg Mandatory argument 'ptGrupo'. Oid of 'GrupoAsignacion' class
     */
    public tADDGRPMEDICO(
        puthisDominioInArg: any, ptGrupoInArg: any): Promise<void> {
        const request: {
            p_thisdominio_oid: any, ptgrupo_oid: any
        } = {
            p_thisdominio_oid: puthisDominioInArg, ptgrupo_oid: ptGrupoInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tADDGRPMEDICOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TDELGRPMEDICO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDominioInArg Mandatory argument 'p_thisDominio'. Oid of 'Dominio' class
     */
    public tDELGRPMEDICO(
        puthisDominioInArg: any): Promise<void> {
        const request: {
            p_thisdominio_oid: any
        } = {
            p_thisdominio_oid: puthisDominioInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tDELGRPMEDICOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TADDREPORTE' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDominioInArg Mandatory argument 'p_thisDominio'. Oid of 'Dominio' class
     * @param ptupuagrPlantillaReporteInArg Mandatory argument 'pt_p_agrPlantillaReporte'. Oid of 'PlantillaReporte' class
     * @param ptupuatrEnviarAutoInArg Mandatory argument 'pt_p_atrEnviarAuto'
     */
    public tADDREPORTE(
        puthisDominioInArg: any, ptupuagrPlantillaReporteInArg: any, ptupuatrEnviarAutoInArg: boolean): Promise<void> {
        const request: {
            p_thisdominio_oid: any, pt_p_agrplantillareporte_oid: any, pt_p_atrenviarauto: boolean
        } = {
            p_thisdominio_oid: puthisDominioInArg, pt_p_agrplantillareporte_oid: ptupuagrPlantillaReporteInArg,
            pt_p_atrenviarauto: ptupuatrEnviarAutoInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tADDREPORTESrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TINSINCOMPATIBLE' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDominioInArg Mandatory argument 'p_thisDominio'. Oid of 'Dominio' class
     * @param ptupuevcDominioInArg Mandatory argument 'pt_p_evcDominio'. Oid of 'Dominio' class
     */
    public tINSINCOMPATIBLE(
        puthisDominioInArg: any, ptupuevcDominioInArg: any): Promise<void> {
        const request: {
            p_thisdominio_oid: any, pt_p_evcdominio_oid: any
        } = {
            p_thisdominio_oid: puthisDominioInArg, pt_p_evcdominio_oid: ptupuevcDominioInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tINSINCOMPATIBLESrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TDELINCOMPATIBLE' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDominioInArg Mandatory argument 'p_thisDominio'. Oid of 'Dominio' class
     * @param ptupuevcDominioInArg Mandatory argument 'pt_p_evcDominio'. Oid of 'Dominio' class
     */
    public tDELINCOMPATIBLE(
        puthisDominioInArg: any, ptupuevcDominioInArg: any): Promise<void> {
        const request: {
            p_thisdominio_oid: any, pt_p_evcdominio_oid: any
        } = {
            p_thisdominio_oid: puthisDominioInArg, pt_p_evcdominio_oid: ptupuevcDominioInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tDELINCOMPATIBLESrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TMODIFICAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDominioInArg Mandatory argument 'p_thisDominio'. Oid of 'Dominio' class
     * @param puReqCuesMedInArg Mandatory argument 'p_ReqCuesMed'
     * @param puNoCuesMedTrasInArg Mandatory argument 'p_NoCuesMedTras'
     * @param puNuevaAfiliacionInArg Mandatory argument 'p_NuevaAfiliacion'
     * @param puInclusionInArg Mandatory argument 'p_Inclusion'
     * @param puAcepCuesMatInArg Mandatory argument 'p_AcepCuesMat'
     * @param puAcepCuesNeoInArg Mandatory argument 'p_AcepCuesNeo'
     * @param puAcepBBGestanteInArg Mandatory argument 'p_AcepBBGestante'
     * @param puIgnorarPreexistenciasInArg Mandatory argument 'p_IgnorarPreexistencias'
     * @param puProrrateoUsuExistenteInArg Mandatory argument 'p_ProrrateoUsuExistente'
     * @param puInclusionModGrupoAsocInArg Mandatory argument 'p_InclusionModGrupoAsoc'
     * @param puPermiteRechazadosAfiInArg Mandatory argument 'p_PermiteRechazadosAfi'
     * @param puAcepPolizaInterInArg Mandatory argument 'p_AcepPolizaInter'
     * @param puMostrarPreexAnexosInArg Mandatory argument 'p_MostrarPreexAnexos'
     * @param puMostrarPreexContratoInArg Mandatory argument 'p_MostrarPreexContrato'
     * @param puTramiteEnLineaInArg Mandatory argument 'p_TramiteEnLinea'
     * @param ptVigenciaRadicacionInArg Mandatory argument 'ptVigenciaRadicacion'
     */
    public tMODIFICAR(
        puthisDominioInArg: any, puReqCuesMedInArg: boolean, puNoCuesMedTrasInArg: boolean, puNuevaAfiliacionInArg: boolean,
        puInclusionInArg: boolean, puAcepCuesMatInArg: boolean, puAcepCuesNeoInArg: boolean, puAcepBBGestanteInArg: boolean,
        puIgnorarPreexistenciasInArg: boolean, puProrrateoUsuExistenteInArg: boolean, puInclusionModGrupoAsocInArg: boolean,
        puPermiteRechazadosAfiInArg: boolean, puAcepPolizaInterInArg: boolean, puMostrarPreexAnexosInArg: boolean,
        puMostrarPreexContratoInArg: boolean, puTramiteEnLineaInArg: boolean, ptVigenciaRadicacionInArg: boolean): Promise<void> {
        const request: {
            p_thisdominio_oid: any, p_reqcuesmed: boolean, p_nocuesmedtras: boolean, p_nuevaafiliacion: boolean, p_inclusion: boolean,
            p_acepcuesmat: boolean, p_acepcuesneo: boolean, p_acepbbgestante: boolean, p_ignorarpreexistencias: boolean,
            p_prorrateousuexistente: boolean, p_inclusionmodgrupoasoc: boolean, p_permiterechazadosafi: boolean,
            p_aceppolizainter: boolean, p_mostrarpreexanexos: boolean, p_mostrarpreexcontrato: boolean, p_tramiteenlinea: boolean,
            ptvigenciaradicacion: boolean
        } = {
            p_thisdominio_oid: puthisDominioInArg, p_reqcuesmed: puReqCuesMedInArg, p_nocuesmedtras: puNoCuesMedTrasInArg,
            p_nuevaafiliacion: puNuevaAfiliacionInArg, p_inclusion: puInclusionInArg, p_acepcuesmat: puAcepCuesMatInArg,
            p_acepcuesneo: puAcepCuesNeoInArg, p_acepbbgestante: puAcepBBGestanteInArg,
            p_ignorarpreexistencias: puIgnorarPreexistenciasInArg, p_prorrateousuexistente: puProrrateoUsuExistenteInArg,
            p_inclusionmodgrupoasoc: puInclusionModGrupoAsocInArg, p_permiterechazadosafi: puPermiteRechazadosAfiInArg,
            p_aceppolizainter: puAcepPolizaInterInArg, p_mostrarpreexanexos: puMostrarPreexAnexosInArg,
            p_mostrarpreexcontrato: puMostrarPreexContratoInArg, p_tramiteenlinea: puTramiteEnLineaInArg,
            ptvigenciaradicacion: ptVigenciaRadicacionInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tMODIFICARSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
