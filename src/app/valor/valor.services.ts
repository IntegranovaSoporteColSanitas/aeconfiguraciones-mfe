import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'Valor'
 */
export class ValorServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Valor');
    }

    /**
     * @param oidPreguntas Oid of related 'Pregunta' instance using the role 'Preguntas'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPreguntas(
        oidPreguntas: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPreguntas, 'Preguntas');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrValorPosibleInArg Mandatory argument 'p_atrValorPosible'
     */
    public crear(
        puatrValorPosibleInArg: string): Promise<void> {
        const request: {
            p_atrvalorposible: string
        } = {
            p_atrvalorposible: puatrValorPosibleInArg
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
     * @param puthisValorInArg Mandatory argument 'p_thisValor'. Oid of 'Valor' class
     */
    public eliminar(
        puthisValorInArg: any): Promise<void> {
        const request: {
            p_thisvalor_oid: any
        } = {
            p_thisvalor_oid: puthisValorInArg
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
     * @param puthisValorInArg Mandatory argument 'p_thisValor'. Oid of 'Valor' class
     * @param puValorPosibleInArg Mandatory argument 'p_ValorPosible'
     */
    public modificar(
        puthisValorInArg: any, puValorPosibleInArg: string): Promise<void> {
        const request: {
            p_thisvalor_oid: any, p_valorposible: string
        } = {
            p_thisvalor_oid: puthisValorInArg, p_valorposible: puValorPosibleInArg
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
