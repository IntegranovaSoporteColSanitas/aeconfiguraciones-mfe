import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation } from '../common/answerRequestInformation';

/**
 * « Service and queries of class 'EstadoCivil' »
 */
export class EstadoCivilServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'EstadoCivil');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrCodigoInArg Mandatory argument 'p_atrCodigo'
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     * @param puatrNombreCortoInArg Mandatory argument 'p_atrNombreCorto'
     */
    public crear(
        puatrCodigoInArg: number, puatrDescripcionInArg: string, puatrNombreCortoInArg: string): Promise<void> {
        const request: {
            p_atrcodigo: number, p_atrdescripcion: string, p_atrnombrecorto: string
        } = {
            p_atrcodigo: puatrCodigoInArg, p_atrdescripcion: puatrDescripcionInArg, p_atrnombrecorto: puatrNombreCortoInArg
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
     * @param puthisEstadoCivilInArg Mandatory argument 'p_thisEstadoCivil'. Oid of 'EstadoCivil' class
     */
    public eliminar(
        puthisEstadoCivilInArg: any): Promise<void> {
        const request: {
            p_thisestadocivil_oid: any
        } = {
            p_thisestadocivil_oid: puthisEstadoCivilInArg
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
