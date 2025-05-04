import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'TipoFactura'
 */
export class TipoFacturaServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'TipoFactura');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrCodigoInArg Mandatory argument 'p_atrCodigo'
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     * @param puatrEsEmailInArg Mandatory argument 'p_atrEsEmail'
     * @param puatrEsCelularInArg Mandatory argument 'p_atrEsCelular'
     */
    public crear(
        puatrCodigoInArg: string, puatrDescripcionInArg: string, puatrEsEmailInArg: boolean,
        puatrEsCelularInArg: boolean): Promise<void> {
        const request: {
            p_atrcodigo: string, p_atrdescripcion: string, p_atresemail: boolean, p_atrescelular: boolean
        } = {
            p_atrcodigo: puatrCodigoInArg, p_atrdescripcion: puatrDescripcionInArg, p_atresemail: puatrEsEmailInArg,
            p_atrescelular: puatrEsCelularInArg
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
     * @param puthisTipoFacturaInArg Mandatory argument 'p_thisTipoFactura'. Oid of 'TipoFactura' class
     */
    public eliminar(
        puthisTipoFacturaInArg: any): Promise<void> {
        const request: {
            p_thistipofactura_json: any
        } = {
            p_thistipofactura_json: puthisTipoFacturaInArg ? JSON.stringify(puthisTipoFacturaInArg) : ''
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
     * @param puthisTipoFacturaInArg Mandatory argument 'p_thisTipoFactura'. Oid of 'TipoFactura' class
     * @param puDescripcionInArg Mandatory argument 'p_Descripcion'
     * @param puEsEmailInArg Mandatory argument 'p_EsEmail'
     * @param puEsCelularInArg Mandatory argument 'p_EsCelular'
     * @param puActivoInArg Mandatory argument 'p_Activo'
     */
    public modificar(
        puthisTipoFacturaInArg: any, puDescripcionInArg: string, puEsEmailInArg: boolean, puEsCelularInArg: boolean,
        puActivoInArg: boolean): Promise<void> {
        const request: {
            p_thistipofactura_json: any, p_descripcion: string, p_esemail: boolean, p_escelular: boolean, p_activo: boolean
        } = {
            p_thistipofactura_json: puthisTipoFacturaInArg ? JSON.stringify(puthisTipoFacturaInArg) : '',
            p_descripcion: puDescripcionInArg, p_esemail: puEsEmailInArg, p_escelular: puEsCelularInArg, p_activo: puActivoInArg
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
