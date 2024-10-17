import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'EstadoBeneficiarioAE'
 */
export class EstadoBeneficiarioAEServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private tMODIFICARSrvName = 'TMODIFICAR';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'EstadoBeneficiarioAE');
    }

    /**
     * @param oidEstadoBeneficiarioCORE Oid of related 'EstadoBeneficiario' instance using the role 'EstadoBeneficiarioCORE'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedEstadoBeneficiarioCORE(
        oidEstadoBeneficiarioCORE: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidEstadoBeneficiarioCORE, 'EstadoBeneficiarioCORE');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puagrEstadoBeneficiarioCOREInArg Mandatory argument 'p_agrEstadoBeneficiarioCORE'. Oid of 'EstadoBeneficiario' class
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     */
    public crear(
        puagrEstadoBeneficiarioCOREInArg: any, puatrDescripcionInArg: string): Promise<void> {
        const request: {
            p_agrestadobeneficiariocore_json: any, p_atrdescripcion: string
        } = {
            p_agrestadobeneficiariocore_json: puagrEstadoBeneficiarioCOREInArg ? JSON.stringify(puagrEstadoBeneficiarioCOREInArg) : '',
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
     * @param puthisEstadoBeneficiarioAEInArg Mandatory argument 'p_thisEstadoBeneficiarioAE'. Oid of 'EstadoBeneficiarioAE' class
     */
    public eliminar(
        puthisEstadoBeneficiarioAEInArg: any): Promise<void> {
        const request: {
            p_thisestadobeneficiarioae_oid: any
        } = {
            p_thisestadobeneficiarioae_oid: puthisEstadoBeneficiarioAEInArg
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
     * Call to the service 'TMODIFICAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisEstadoBeneficiarioAEInArg Mandatory argument 'p_thisEstadoBeneficiarioAE'. Oid of 'EstadoBeneficiarioAE' class
     * @param ptupuDescripcionInArg Mandatory argument 'pt_p_Descripcion'
     * @param ptupuevcEstadoBeneficiarioInArg Mandatory argument 'pt_p_evcEstadoBeneficiario'. Oid of 'EstadoBeneficiario' class
     */
    public tMODIFICAR(
        puthisEstadoBeneficiarioAEInArg: any, ptupuDescripcionInArg: string, ptupuevcEstadoBeneficiarioInArg: any): Promise<void> {
        const request: {
            p_thisestadobeneficiarioae_oid: any, pt_p_descripcion: string, pt_p_evcestadobeneficiario_json: any
        } = {
            p_thisestadobeneficiarioae_oid: puthisEstadoBeneficiarioAEInArg, pt_p_descripcion: ptupuDescripcionInArg,
            pt_p_evcestadobeneficiario_json: ptupuevcEstadoBeneficiarioInArg ? JSON.stringify(ptupuevcEstadoBeneficiarioInArg) : ''
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tMODIFICARSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
