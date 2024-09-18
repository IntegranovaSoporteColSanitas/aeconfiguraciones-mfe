import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'EntidadFinancieraC'
 */
export class EntidadFinancieraCServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'EntidadFinancieraC');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrCodigoInArg Mandatory argument 'p_atrCodigo'
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     */
    public crear(
        puatrCodigoInArg: number, puatrDescripcionInArg: string): Promise<void> {
        const request: {
            p_atrcodigo: number, p_atrdescripcion: string
        } = {
            p_atrcodigo: puatrCodigoInArg, p_atrdescripcion: puatrDescripcionInArg
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
     * @param puthisEntidadFinancieraInArg Mandatory argument 'p_thisEntidadFinanciera'. Oid of 'EntidadFinancieraC' class
     */
    public eliminar(
        puthisEntidadFinancieraInArg: any): Promise<void> {
        const request: {
            p_thisentidadfinanciera_oid: any
        } = {
            p_thisentidadfinanciera_oid: puthisEntidadFinancieraInArg
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
