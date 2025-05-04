import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'GrupoAsignacionNovedad'
 */
export class GrupoAsignacionNovedadServices extends AbstractServices {

    private eliminarSrvName = 'eliminar';
    private tCREARSrvName = 'TCREAR';
    private tASGGRUPOSrvName = 'TASGGRUPO';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'GrupoAsignacionNovedad');
    }

    /**
     * @param oidDominio Oid of related 'Dominio' instance using the role 'Dominio'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDominio(
        oidDominio: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDominio, 'Dominio');
    }

    /**
     * @param oidCausal Oid of related 'Causal' instance using the role 'Causal'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedCausal(
        oidCausal: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidCausal, 'Causal');
    }

    /**
     * @param oidGrupoUsuarios Oid of related 'GrupoAsignacion' instance using the role 'GrupoUsuarios'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedGrupoUsuarios(
        oidGrupoUsuarios: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidGrupoUsuarios, 'GrupoUsuarios');
    }

    /**
     * Call to the service 'eliminar' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisGrupoAsignacionNovedadInArg Mandatory argument 'p_thisGrupoAsignacionNovedad'. Oid of 'GrupoAsignacionNovedad' class
     */
    public eliminar(
        puthisGrupoAsignacionNovedadInArg: any): Promise<void> {
        const request: {
            p_thisgrupoasignacionnovedad_oid: any
        } = {
            p_thisgrupoasignacionnovedad_oid: puthisGrupoAsignacionNovedadInArg
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
     * Call to the service 'TCREAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuagrDominioInArg Mandatory argument 'pt_p_agrDominio'. Oid of 'Dominio' class
     * @param ptupuagrCausalInArg Mandatory argument 'pt_p_agrCausal'. Oid of 'Causal' class
     * @param ptupuagrGrupoUsuariosInArg Mandatory argument 'pt_p_agrGrupoUsuarios'. Oid of 'GrupoAsignacion' class
     * @param ptNovedadInArg Mandatory argument 'ptNovedad'. Oid of 'Novedad' class
     */
    public tCREAR(
        ptupuagrDominioInArg: any, ptupuagrCausalInArg: any, ptupuagrGrupoUsuariosInArg: any, ptNovedadInArg: any): Promise<void> {
        const request: {
            pt_p_agrdominio_oid: any, pt_p_agrcausal_json: any, pt_p_agrgrupousuarios_oid: any, ptnovedad_json: any
        } = {
            pt_p_agrdominio_oid: ptupuagrDominioInArg,
            pt_p_agrcausal_json: ptupuagrCausalInArg ? JSON.stringify(ptupuagrCausalInArg) : '',
            pt_p_agrgrupousuarios_oid: ptupuagrGrupoUsuariosInArg, ptnovedad_json: ptNovedadInArg ? JSON.stringify(ptNovedadInArg) : ''
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tCREARSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TASGGRUPO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisGrupoAsignacionNovedadInArg Mandatory argument 'p_thisGrupoAsignacionNovedad'. Oid of 'GrupoAsignacionNovedad' class
     * @param ptGrupoInArg Mandatory argument 'ptGrupo'. Oid of 'GrupoAsignacion' class
     */
    public tASGGRUPO(
        puthisGrupoAsignacionNovedadInArg: any, ptGrupoInArg: any): Promise<void> {
        const request: {
            p_thisgrupoasignacionnovedad_oid: any, ptgrupo_oid: any
        } = {
            p_thisgrupoasignacionnovedad_oid: puthisGrupoAsignacionNovedadInArg, ptgrupo_oid: ptGrupoInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tASGGRUPOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
