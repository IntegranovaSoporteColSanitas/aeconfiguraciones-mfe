import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'TextoAviso'
 */
export class TextoAvisoServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'TextoAviso');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrIdentificadorInArg Mandatory argument 'p_atrIdentificador'
     * @param puatrDescripcionInArg Optional argument 'p_atrDescripcion'
     * @param puatrValorInArg Mandatory argument 'p_atrValor'
     */
    public crear(
        puatrIdentificadorInArg: string, puatrDescripcionInArg: string | null, puatrValorInArg: string): Promise<void> {
        const request: {
            p_atridentificador: string, p_atrdescripcion: string | null, p_atrvalor: string
        } = {
            p_atridentificador: puatrIdentificadorInArg, p_atrdescripcion: puatrDescripcionInArg, p_atrvalor: puatrValorInArg
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
     * @param puthisTextoAvisoInArg Mandatory argument 'p_thisTextoAviso'. Oid of 'TextoAviso' class
     */
    public eliminar(
        puthisTextoAvisoInArg: any): Promise<void> {
        const request: {
            p_thistextoaviso_oid: any
        } = {
            p_thistextoaviso_oid: puthisTextoAvisoInArg
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
     * @param puthisTextoAvisoInArg Mandatory argument 'p_thisTextoAviso'. Oid of 'TextoAviso' class
     * @param puDescripcionInArg Optional argument 'p_Descripcion'
     * @param puValorInArg Mandatory argument 'p_Valor'
     */
    public modificar(
        puthisTextoAvisoInArg: any, puDescripcionInArg: string | null, puValorInArg: string): Promise<void> {
        const request: {
            p_thistextoaviso_oid: any, p_descripcion: string | null, p_valor: string
        } = {
            p_thistextoaviso_oid: puthisTextoAvisoInArg, p_descripcion: puDescripcionInArg, p_valor: puValorInArg
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
