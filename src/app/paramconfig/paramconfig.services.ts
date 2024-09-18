import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'ParamConfig'
 */
export class ParamConfigServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private tMODIFICARSrvName = 'TMODIFICAR';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'ParamConfig');
    }

    /**
     * @param oidLogs Oid of related 'LogParam' instance using the role 'Logs'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedLogs(
        oidLogs: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidLogs, 'Logs');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrCodigoInArg Mandatory argument 'p_atrCodigo'
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     * @param puatrValorInArg Mandatory argument 'p_atrValor'
     * @param puatrEsNumericoInArg Mandatory argument 'p_atrEsNumerico'
     */
    public crear(
        puatrCodigoInArg: string, puatrDescripcionInArg: string, puatrValorInArg: string,
        puatrEsNumericoInArg: boolean): Promise<void> {
        const request: {
            p_atrcodigo: string, p_atrdescripcion: string, p_atrvalor: string, p_atresnumerico: boolean
        } = {
            p_atrcodigo: puatrCodigoInArg, p_atrdescripcion: puatrDescripcionInArg, p_atrvalor: puatrValorInArg,
            p_atresnumerico: puatrEsNumericoInArg
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
     * @param puthisParamConfigInArg Mandatory argument 'p_thisParamConfig'. Oid of 'ParamConfig' class
     */
    public eliminar(
        puthisParamConfigInArg: any): Promise<void> {
        const request: {
            p_thisparamconfig_oid: any
        } = {
            p_thisparamconfig_oid: puthisParamConfigInArg
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
     * Call to the service 'TMODIFICAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisParamConfigInArg Mandatory argument 'p_thisParamConfig'. Oid of 'ParamConfig' class
     * @param ptupuValorInArg Mandatory argument 'pt_p_Valor'
     */
    public tMODIFICAR(
        puthisParamConfigInArg: any, ptupuValorInArg: string): Promise<void> {
        const request: {
            p_thisparamconfig_oid: any, pt_p_valor: string
        } = {
            p_thisparamconfig_oid: puthisParamConfigInArg, pt_p_valor: ptupuValorInArg
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
