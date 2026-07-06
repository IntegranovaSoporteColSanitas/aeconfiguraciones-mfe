import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation } from '../common/answerRequestInformation';

/**
 * « Service and queries of class 'Companyia' »
 */
export class CompanyiaServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Companyia');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrCodigoInArg Mandatory argument 'p_atrCodigo'
     * @param puatrNombreInArg Mandatory argument 'p_atrNombre'
     * @param puatrEsDeMPInArg Mandatory argument 'p_atrEsDeMP'
     */
    public crear(
        puatrCodigoInArg: number, puatrNombreInArg: string, puatrEsDeMPInArg: boolean): Promise<void> {
        const request: {
            p_atrcodigo: number, p_atrnombre: string, p_atresdemp: boolean
        } = {
            p_atrcodigo: puatrCodigoInArg, p_atrnombre: puatrNombreInArg, p_atresdemp: puatrEsDeMPInArg
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
     * @param puthisCompanyiaInArg Mandatory argument 'p_thisCompanyia'. Oid of 'Companyia' class
     */
    public eliminar(
        puthisCompanyiaInArg: any): Promise<void> {
        const request: {
            p_thiscompanyia_oid: any
        } = {
            p_thiscompanyia_oid: puthisCompanyiaInArg
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
     * @param puthisCompanyiaInArg Mandatory argument 'p_thisCompanyia'. Oid of 'Companyia' class
     * @param puEsDeMPInArg Mandatory argument 'p_EsDeMP'
     */
    public modificar(
        puthisCompanyiaInArg: any, puEsDeMPInArg: boolean): Promise<void> {
        const request: {
            p_thiscompanyia_oid: any, p_esdemp: boolean
        } = {
            p_thiscompanyia_oid: puthisCompanyiaInArg, p_esdemp: puEsDeMPInArg
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
