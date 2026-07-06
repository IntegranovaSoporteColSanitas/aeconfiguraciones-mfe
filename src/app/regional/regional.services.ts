import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * « Service and queries of class 'Regional' »
 */
export class RegionalServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Regional');
    }

    /**
     * @param oidRespRegional Oid of related 'RespRegional' instance using the role 'RespRegional'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedRespRegional(
        oidRespRegional: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidRespRegional, 'RespRegional');
    }

    /**
     * @param oidSucursales Oid of related 'Sucursal' instance using the role 'Sucursales'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedSucursales(
        oidSucursales: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidSucursales, 'Sucursales');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puagrRespRegionalInArg Optional argument 'p_agrRespRegional'. Oid of 'RespRegional' class
     * @param puatrCodigoInArg Mandatory argument 'p_atrCodigo'
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     */
    public crear(
        puagrRespRegionalInArg: any, puatrCodigoInArg: number, puatrDescripcionInArg: string): Promise<void> {
        const request: {
            p_agrrespregional_oid: any, p_atrcodigo: number, p_atrdescripcion: string
        } = {
            p_agrrespregional_oid: puagrRespRegionalInArg, p_atrcodigo: puatrCodigoInArg, p_atrdescripcion: puatrDescripcionInArg
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
     * @param puthisRegionalInArg Mandatory argument 'p_thisRegional'. Oid of 'Regional' class
     */
    public eliminar(
        puthisRegionalInArg: any): Promise<void> {
        const request: {
            p_thisregional_oid: any
        } = {
            p_thisregional_oid: puthisRegionalInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.eliminarSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
