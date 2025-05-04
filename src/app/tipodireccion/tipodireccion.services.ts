import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'TipoDireccion'
 */
export class TipoDireccionServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'TipoDireccion');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrCodigoInArg Mandatory argument 'p_atrCodigo'
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     * @param puatrEsResidenciaInArg Mandatory argument 'p_atrEsResidencia'
     * @param puatrEsCorrespondenciaInArg Mandatory argument 'p_atrEsCorrespondencia'
     */
    public crear(
        puatrCodigoInArg: number, puatrDescripcionInArg: string, puatrEsResidenciaInArg: boolean,
        puatrEsCorrespondenciaInArg: boolean): Promise<void> {
        const request: {
            p_atrcodigo: number, p_atrdescripcion: string, p_atresresidencia: boolean, p_atrescorrespondencia: boolean
        } = {
            p_atrcodigo: puatrCodigoInArg, p_atrdescripcion: puatrDescripcionInArg, p_atresresidencia: puatrEsResidenciaInArg,
            p_atrescorrespondencia: puatrEsCorrespondenciaInArg
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
     * @param puthisTipoDireccionInArg Mandatory argument 'p_thisTipoDireccion'. Oid of 'TipoDireccion' class
     */
    public eliminar(
        puthisTipoDireccionInArg: any): Promise<void> {
        const request: {
            p_thistipodireccion_oid: any
        } = {
            p_thistipodireccion_oid: puthisTipoDireccionInArg
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
     * @param puthisTipoDireccionInArg Mandatory argument 'p_thisTipoDireccion'. Oid of 'TipoDireccion' class
     * @param puEsResidenciaInArg Mandatory argument 'p_EsResidencia'
     * @param puEsCorrespondenciaInArg Mandatory argument 'p_EsCorrespondencia'
     */
    public modificar(
        puthisTipoDireccionInArg: any, puEsResidenciaInArg: boolean, puEsCorrespondenciaInArg: boolean): Promise<void> {
        const request: {
            p_thistipodireccion_oid: any, p_esresidencia: boolean, p_escorrespondencia: boolean
        } = {
            p_thistipodireccion_oid: puthisTipoDireccionInArg, p_esresidencia: puEsResidenciaInArg,
            p_escorrespondencia: puEsCorrespondenciaInArg
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
