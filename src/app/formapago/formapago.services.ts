import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'FormaPago'
 */
export class FormaPagoServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'FormaPago');
    }

    /**
     * @param oidDominios Oid of related 'Dominio' instance using the role 'Dominios'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDominios(
        oidDominios: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDominios, 'Dominios');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrCodigoInArg Mandatory argument 'p_atrCodigo'
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     * @param puatrAbrirURLInArg Mandatory argument 'p_atrAbrirURL'
     * @param puatrEsVisibleInArg Mandatory argument 'p_atrEsVisible'
     */
    public crear(
        puatrCodigoInArg: number, puatrDescripcionInArg: string, puatrAbrirURLInArg: boolean,
        puatrEsVisibleInArg: boolean): Promise<void> {
        const request: {
            p_atrcodigo: number, p_atrdescripcion: string, p_atrabrirurl: boolean, p_atresvisible: boolean
        } = {
            p_atrcodigo: puatrCodigoInArg, p_atrdescripcion: puatrDescripcionInArg, p_atrabrirurl: puatrAbrirURLInArg,
            p_atresvisible: puatrEsVisibleInArg
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
     * @param puthisFormaPagoInArg Mandatory argument 'p_thisFormaPago'. Oid of 'FormaPago' class
     */
    public eliminar(
        puthisFormaPagoInArg: any): Promise<void> {
        const request: {
            p_thisformapago_oid: any
        } = {
            p_thisformapago_oid: puthisFormaPagoInArg
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
     * @param puthisFormaPagoInArg Mandatory argument 'p_thisFormaPago'. Oid of 'FormaPago' class
     * @param puAbrirURLInArg Mandatory argument 'p_AbrirURL'
     * @param puVisibleInArg Mandatory argument 'p_Visible'
     */
    public modificar(
        puthisFormaPagoInArg: any, puAbrirURLInArg: boolean, puVisibleInArg: boolean): Promise<void> {
        const request: {
            p_thisformapago_oid: any, p_abrirurl: boolean, p_visible: boolean
        } = {
            p_thisformapago_oid: puthisFormaPagoInArg, p_abrirurl: puAbrirURLInArg, p_visible: puVisibleInArg
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
