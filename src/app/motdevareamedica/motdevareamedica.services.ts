import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'MotDevAreaMedica'
 */
export class MotDevAreaMedicaServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'MotDevAreaMedica');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     */
    public crear(
        puatrDescripcionInArg: string): Promise<void> {
        const request: {
            p_atrdescripcion: string
        } = {
            p_atrdescripcion: puatrDescripcionInArg
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
     * @param puthisMotDevAreaMedicaInArg Mandatory argument 'p_thisMotDevAreaMedica'. Oid of 'MotDevAreaMedica' class
     */
    public eliminar(
        puthisMotDevAreaMedicaInArg: any): Promise<void> {
        const request: {
            p_thismotdevareamedica_oid: any
        } = {
            p_thismotdevareamedica_oid: puthisMotDevAreaMedicaInArg
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
     * @param puthisMotDevAreaMedicaInArg Mandatory argument 'p_thisMotDevAreaMedica'. Oid of 'MotDevAreaMedica' class
     * @param puDescripcionInArg Mandatory argument 'p_Descripcion'
     */
    public modificar(
        puthisMotDevAreaMedicaInArg: any, puDescripcionInArg: string): Promise<void> {
        const request: {
            p_thismotdevareamedica_oid: any, p_descripcion: string
        } = {
            p_thismotdevareamedica_oid: puthisMotDevAreaMedicaInArg, p_descripcion: puDescripcionInArg
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
