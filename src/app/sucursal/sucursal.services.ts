import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * « Service and queries of class 'Sucursal' »
 */
export class SucursalServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Sucursal');
    }

    /**
     * @param oidRegional Oid of related 'Regional' instance using the role 'Regional'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedRegional(
        oidRegional: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidRegional, 'Regional');
    }

    /**
     * @param oidAgentes Oid of related 'Funcionario' instance using the role 'Agentes'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedAgentes(
        oidAgentes: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidAgentes, 'Agentes');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puagrRegionalInArg Mandatory argument 'p_agrRegional'. Oid of 'Regional' class
     * @param puatrCodigoInArg Mandatory argument 'p_atrCodigo'
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     */
    public crear(
        puagrRegionalInArg: any, puatrCodigoInArg: number, puatrDescripcionInArg: string): Promise<void> {
        const request: {
            p_agrregional_oid: any, p_atrcodigo: number, p_atrdescripcion: string
        } = {
            p_agrregional_oid: puagrRegionalInArg, p_atrcodigo: puatrCodigoInArg, p_atrdescripcion: puatrDescripcionInArg
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
     * @param puthisSucursalInArg Mandatory argument 'p_thisSucursal'. Oid of 'Sucursal' class
     */
    public eliminar(
        puthisSucursalInArg: any): Promise<void> {
        const request: {
            p_thissucursal_oid: any
        } = {
            p_thissucursal_oid: puthisSucursalInArg
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
