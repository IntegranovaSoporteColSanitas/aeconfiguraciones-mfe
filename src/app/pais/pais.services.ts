import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'Pais'
 */
export class PaisServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Pais');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrCodigoInArg Mandatory argument 'p_atrCodigo'
     * @param puatrDescripcionInArg Optional argument 'p_atrDescripcion'
     */
    public crear(
        puatrCodigoInArg: string, puatrDescripcionInArg: string | null): Promise<void> {
        const request: {
            p_atrcodigo: string, p_atrdescripcion: string | null
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
     * @param puthisPaisInArg Mandatory argument 'p_thisPais'. Oid of 'Pais' class
     */
    public eliminar(
        puthisPaisInArg: any): Promise<void> {
        const request: {
            p_thispais_oid: any
        } = {
            p_thispais_oid: puthisPaisInArg
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
