import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'CausaExclusion'
 */
export class CausaExclusionServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'CausaExclusion');
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
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puagrNovedadInArg Mandatory argument 'p_agrNovedad'. Oid of 'Novedad' class
     * @param puatrAliasCausaInArg Mandatory argument 'p_atrAliasCausa'
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     */
    public crear(
        puagrNovedadInArg: any, puatrAliasCausaInArg: string, puatrDescripcionInArg: string): Promise<void> {
        const request: {
            p_agrnovedad_oid: any, p_atraliascausa: string, p_atrdescripcion: string
        } = {
            p_agrnovedad_oid: puagrNovedadInArg, p_atraliascausa: puatrAliasCausaInArg, p_atrdescripcion: puatrDescripcionInArg
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
     * @param puthisCausaExclusionInArg Mandatory argument 'p_thisCausaExclusion'. Oid of 'CausaExclusion' class
     */
    public eliminar(
        puthisCausaExclusionInArg: any): Promise<void> {
        const request: {
            p_thiscausaexclusion_oid: any
        } = {
            p_thiscausaexclusion_oid: puthisCausaExclusionInArg
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
     * @param puthisCausaExclusionInArg Mandatory argument 'p_thisCausaExclusion'. Oid of 'CausaExclusion' class
     * @param puAliasCausaInArg Mandatory argument 'p_AliasCausa'
     * @param puDescripcionInArg Mandatory argument 'p_Descripcion'
     */
    public modificar(
        puthisCausaExclusionInArg: any, puAliasCausaInArg: string, puDescripcionInArg: string): Promise<void> {
        const request: {
            p_thiscausaexclusion_oid: any, p_aliascausa: string, p_descripcion: string
        } = {
            p_thiscausaexclusion_oid: puthisCausaExclusionInArg, p_aliascausa: puAliasCausaInArg, p_descripcion: puDescripcionInArg
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
