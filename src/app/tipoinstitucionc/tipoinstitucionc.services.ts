import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'TipoInstitucionC'
 */
export class TipoInstitucionCServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'TipoInstitucionC');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrCodigoInArg Mandatory argument 'p_atrCodigo'
     * @param puatrNombreInArg Mandatory argument 'p_atrNombre'
     */
    public crear(
        puatrCodigoInArg: number, puatrNombreInArg: string): Promise<void> {
        const request: {
            p_atrcodigo: number, p_atrnombre: string
        } = {
            p_atrcodigo: puatrCodigoInArg, p_atrnombre: puatrNombreInArg
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
     * @param puthisTipoInstitucionInArg Mandatory argument 'p_thisTipoInstitucion'. Oid of 'TipoInstitucionC' class
     */
    public eliminar(
        puthisTipoInstitucionInArg: any): Promise<void> {
        const request: {
            p_thistipoinstitucion_oid: any
        } = {
            p_thistipoinstitucion_oid: puthisTipoInstitucionInArg
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
