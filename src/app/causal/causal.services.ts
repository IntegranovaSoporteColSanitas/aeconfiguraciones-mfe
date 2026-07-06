import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * « Service and queries of class 'Causal' »
 */
export class CausalServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Causal');
    }

    /**
     * @param oidNovedad Oid of related 'Novedad' instance using the role 'Novedad'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedNovedad(
        oidNovedad: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidNovedad, 'Novedad');
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
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puagrNovedadInArg Mandatory argument 'p_agrNovedad'. Oid of 'Novedad' class
     * @param puatrAliasCausalInArg Mandatory argument 'p_atrAliasCausal'
     * @param puatrNombreInArg Mandatory argument 'p_atrNombre'
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     * @param puatrCodigoLegalInArg Mandatory argument 'p_atrCodigoLegal'
     * @param puatrReqDocPersonaInArg Mandatory argument 'p_atrReqDocPersona'
     * @param puatrReqDocSolicitudInArg Mandatory argument 'p_atrReqDocSolicitud'
     */
    public crear(
        puagrNovedadInArg: any, puatrAliasCausalInArg: string, puatrNombreInArg: string, puatrDescripcionInArg: string,
        puatrCodigoLegalInArg: string, puatrReqDocPersonaInArg: boolean, puatrReqDocSolicitudInArg: boolean): Promise<void> {
        const request: {
            p_agrnovedad_oid: any, p_atraliascausal: string, p_atrnombre: string, p_atrdescripcion: string, p_atrcodigolegal: string,
            p_atrreqdocpersona: boolean, p_atrreqdocsolicitud: boolean
        } = {
            p_agrnovedad_oid: puagrNovedadInArg, p_atraliascausal: puatrAliasCausalInArg, p_atrnombre: puatrNombreInArg,
            p_atrdescripcion: puatrDescripcionInArg, p_atrcodigolegal: puatrCodigoLegalInArg,
            p_atrreqdocpersona: puatrReqDocPersonaInArg, p_atrreqdocsolicitud: puatrReqDocSolicitudInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.crearSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'eliminar' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisCausalInArg Mandatory argument 'p_thisCausal'. Oid of 'Causal' class
     */
    public eliminar(
        puthisCausalInArg: any): Promise<void> {
        const request: {
            p_thiscausal_oid: any
        } = {
            p_thiscausal_oid: puthisCausalInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.eliminarSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'modificar' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisCausalInArg Mandatory argument 'p_thisCausal'. Oid of 'Causal' class
     * @param puAliasCausalInArg Mandatory argument 'p_AliasCausal'
     * @param puNombreInArg Mandatory argument 'p_Nombre'
     * @param puDescripcionInArg Mandatory argument 'p_Descripcion'
     * @param puCodigoLegalInArg Mandatory argument 'p_CodigoLegal'
     * @param puReqDocPersonaInArg Mandatory argument 'p_ReqDocPersona'
     * @param puReqDocSolicitudInArg Mandatory argument 'p_ReqDocSolicitud'
     */
    public modificar(
        puthisCausalInArg: any, puAliasCausalInArg: string, puNombreInArg: string, puDescripcionInArg: string,
        puCodigoLegalInArg: string, puReqDocPersonaInArg: boolean, puReqDocSolicitudInArg: boolean): Promise<void> {
        const request: {
            p_thiscausal_oid: any, p_aliascausal: string, p_nombre: string, p_descripcion: string, p_codigolegal: string,
            p_reqdocpersona: boolean, p_reqdocsolicitud: boolean
        } = {
            p_thiscausal_oid: puthisCausalInArg, p_aliascausal: puAliasCausalInArg, p_nombre: puNombreInArg,
            p_descripcion: puDescripcionInArg, p_codigolegal: puCodigoLegalInArg, p_reqdocpersona: puReqDocPersonaInArg,
            p_reqdocsolicitud: puReqDocSolicitudInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.modificarSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
