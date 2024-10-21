import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'EstadoPersona'
 */
export class EstadoPersonaServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'EstadoPersona');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrCodigoInArg Mandatory argument 'p_atrCodigo'
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     * @param puatrUnBeneficiarioDistinoInArg Mandatory argument 'p_atrUnBeneficiarioDistino'
     * @param puatrProhibidoBeneficiariosInArg Mandatory argument 'p_atrProhibidoBeneficiarios'
     * @param puatrProhibidoContratanteInArg Mandatory argument 'p_atrProhibidoContratante'
     * @param puatrProhibidoTitularInArg Mandatory argument 'p_atrProhibidoTitular'
     */
    public crear(
        puatrCodigoInArg: number, puatrDescripcionInArg: string, puatrUnBeneficiarioDistinoInArg: boolean,
        puatrProhibidoBeneficiariosInArg: boolean, puatrProhibidoContratanteInArg: boolean,
        puatrProhibidoTitularInArg: boolean): Promise<void> {
        const request: {
            p_atrcodigo: number, p_atrdescripcion: string, p_atrunbeneficiariodistino: boolean, p_atrprohibidobeneficiarios: boolean,
            p_atrprohibidocontratante: boolean, p_atrprohibidotitular: boolean
        } = {
            p_atrcodigo: puatrCodigoInArg, p_atrdescripcion: puatrDescripcionInArg,
            p_atrunbeneficiariodistino: puatrUnBeneficiarioDistinoInArg,
            p_atrprohibidobeneficiarios: puatrProhibidoBeneficiariosInArg, p_atrprohibidocontratante: puatrProhibidoContratanteInArg,
            p_atrprohibidotitular: puatrProhibidoTitularInArg
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
     * @param puthisEstadoPersonaInArg Mandatory argument 'p_thisEstadoPersona'. Oid of 'EstadoPersona' class
     */
    public eliminar(
        puthisEstadoPersonaInArg: any): Promise<void> {
        const request: {
            p_thisestadopersona_oid: any
        } = {
            p_thisestadopersona_oid: puthisEstadoPersonaInArg
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
     * @param puthisEstadoPersonaInArg Mandatory argument 'p_thisEstadoPersona'. Oid of 'EstadoPersona' class
     * @param puUnBeneficiarioDistinoInArg Mandatory argument 'p_UnBeneficiarioDistino'
     * @param puProhibidoBeneficiariosInArg Mandatory argument 'p_ProhibidoBeneficiarios'
     * @param puProhibidoContratanteInArg Mandatory argument 'p_ProhibidoContratante'
     * @param puProhibidoTitularInArg Mandatory argument 'p_ProhibidoTitular'
     */
    public modificar(
        puthisEstadoPersonaInArg: any, puUnBeneficiarioDistinoInArg: boolean, puProhibidoBeneficiariosInArg: boolean,
        puProhibidoContratanteInArg: boolean, puProhibidoTitularInArg: boolean): Promise<void> {
        const request: {
            p_thisestadopersona_oid: any, p_unbeneficiariodistino: boolean, p_prohibidobeneficiarios: boolean,
            p_prohibidocontratante: boolean, p_prohibidotitular: boolean
        } = {
            p_thisestadopersona_oid: puthisEstadoPersonaInArg, p_unbeneficiariodistino: puUnBeneficiarioDistinoInArg,
            p_prohibidobeneficiarios: puProhibidoBeneficiariosInArg, p_prohibidocontratante: puProhibidoContratanteInArg,
            p_prohibidotitular: puProhibidoTitularInArg
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
