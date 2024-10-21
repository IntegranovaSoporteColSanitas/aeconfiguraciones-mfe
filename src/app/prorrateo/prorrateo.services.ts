import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'Prorrateo'
 */
export class ProrrateoServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Prorrateo');
    }

    /**
     * @param oidDominio Oid of related 'Dominio' instance using the role 'Dominio'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDominio(
        oidDominio: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDominio, 'Dominio');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puagrDominioInArg Mandatory argument 'p_agrDominio'. Oid of 'Dominio' class
     * @param puatrDiaInArg Mandatory argument 'p_atrDia'
     * @param puatrPorcentajeInArg Mandatory argument 'p_atrPorcentaje'
     */
    public crear(
        puagrDominioInArg: any, puatrDiaInArg: number, puatrPorcentajeInArg: number): Promise<void> {
        const request: {
            p_agrdominio_oid: any, p_atrdia: number, p_atrporcentaje: number
        } = {
            p_agrdominio_oid: puagrDominioInArg, p_atrdia: puatrDiaInArg, p_atrporcentaje: puatrPorcentajeInArg
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
     * @param puthisProrrateoInArg Mandatory argument 'p_thisProrrateo'. Oid of 'Prorrateo' class
     */
    public eliminar(
        puthisProrrateoInArg: any): Promise<void> {
        const request: {
            p_thisprorrateo_oid: any
        } = {
            p_thisprorrateo_oid: puthisProrrateoInArg
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
     * @param puthisProrrateoInArg Mandatory argument 'p_thisProrrateo'. Oid of 'Prorrateo' class
     * @param puDiaInArg Mandatory argument 'p_Dia'
     * @param puPorcentajeInArg Mandatory argument 'p_Porcentaje'
     */
    public modificar(
        puthisProrrateoInArg: any, puDiaInArg: number, puPorcentajeInArg: number): Promise<void> {
        const request: {
            p_thisprorrateo_oid: any, p_dia: number, p_porcentaje: number
        } = {
            p_thisprorrateo_oid: puthisProrrateoInArg, p_dia: puDiaInArg, p_porcentaje: puPorcentajeInArg
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
