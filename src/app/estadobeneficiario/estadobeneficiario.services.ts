import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * « Service and queries of class 'EstadoBeneficiario' »
 */
export class EstadoBeneficiarioServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'EstadoBeneficiario');
    }

    /**
     * @param oidEstadoBeneficiarioAE Oid of related 'EstadoBeneficiarioAE' instance using the role 'EstadoBeneficiarioAE'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedEstadoBeneficiarioAE(
        oidEstadoBeneficiarioAE: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidEstadoBeneficiarioAE, 'EstadoBeneficiarioAE');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrCodigoInArg Mandatory argument 'p_atrCodigo'
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     */
    public crear(
        puatrCodigoInArg: number, puatrDescripcionInArg: string): Promise<void> {
        const request: {
            p_atrcodigo: number, p_atrdescripcion: string
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
     * @param puthisEstadoBeneficiarioInArg Mandatory argument 'p_thisEstadoBeneficiario'. Oid of 'EstadoBeneficiario' class
     */
    public eliminar(
        puthisEstadoBeneficiarioInArg: any): Promise<void> {
        const request: {
            p_thisestadobeneficiario_oid: any
        } = {
            p_thisestadobeneficiario_oid: puthisEstadoBeneficiarioInArg
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
     * @param puthisEstadoBeneficiarioInArg Mandatory argument 'p_thisEstadoBeneficiario'. Oid of 'EstadoBeneficiario' class
     * @param puEsActivoInArg Mandatory argument 'p_EsActivo'
     * @param puConfirmadoInArg Mandatory argument 'p_Confirmado'
     * @param puEsErrorInArg Mandatory argument 'p_EsError'
     */
    public modificar(
        puthisEstadoBeneficiarioInArg: any, puEsActivoInArg: boolean, puConfirmadoInArg: boolean,
        puEsErrorInArg: boolean): Promise<void> {
        const request: {
            p_thisestadobeneficiario_oid: any, p_esactivo: boolean, p_confirmado: boolean, p_eserror: boolean
        } = {
            p_thisestadobeneficiario_oid: puthisEstadoBeneficiarioInArg, p_esactivo: puEsActivoInArg, p_confirmado: puConfirmadoInArg,
            p_eserror: puEsErrorInArg
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
