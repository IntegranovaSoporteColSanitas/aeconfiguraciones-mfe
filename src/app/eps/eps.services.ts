import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'Eps'
 */
export class EpsServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Eps');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrCodigoInArg Mandatory argument 'p_atrCodigo'
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     * @param puatrEpsSanitasInArg Mandatory argument 'p_atrEpsSanitas'
     */
    public crear(
        puatrCodigoInArg: number, puatrDescripcionInArg: string, puatrEpsSanitasInArg: boolean): Promise<void> {
        const request: {
            p_atrcodigo: number, p_atrdescripcion: string, p_atrepssanitas: boolean
        } = {
            p_atrcodigo: puatrCodigoInArg, p_atrdescripcion: puatrDescripcionInArg, p_atrepssanitas: puatrEpsSanitasInArg
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
     * @param puthisEPSInArg Mandatory argument 'p_thisEPS'. Oid of 'Eps' class
     */
    public eliminar(
        puthisEPSInArg: any): Promise<void> {
        const request: {
            p_thiseps_oid: any
        } = {
            p_thiseps_oid: puthisEPSInArg
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
     * @param puthisEPSInArg Mandatory argument 'p_thisEPS'. Oid of 'Eps' class
     * @param puEPSSanitasInArg Mandatory argument 'p_EPSSanitas'
     */
    public modificar(
        puthisEPSInArg: any, puEPSSanitasInArg: boolean): Promise<void> {
        const request: {
            p_thiseps_oid: any, p_epssanitas: boolean
        } = {
            p_thiseps_oid: puthisEPSInArg, p_epssanitas: puEPSSanitasInArg
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
