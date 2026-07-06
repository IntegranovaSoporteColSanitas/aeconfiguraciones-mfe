import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * « Service and queries of class 'FrecuenciaAct' »
 */
export class FrecuenciaActServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'FrecuenciaAct');
    }

    /**
     * Call to the filter 'F_FrecuenciaActVarios' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vuParametricaVar Variable v_Parametrica
     * @param vuFIniVar Variable v_FIni
     * @param vuFFinVar Variable v_FFin
     */
    public queryByFilterFuFrecuenciaActVarios(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vuParametricaVar: number | null, vuFIniVar: Date | null, vuFFinVar: Date | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_FrecuenciaActVarios');
        this.util.addFilterVariable(filter, 'v_parametrica', vuParametricaVar);
        this.util.addFilterVariable(filter, 'v_fini', JsonUtility.date2Json(vuFIniVar));
        this.util.addFilterVariable(filter, 'v_ffin', JsonUtility.date2Json(vuFFinVar));
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrParametricaInArg Mandatory argument 'p_atrParametrica'
     * @param puatrFrecuenciaInArg Mandatory argument 'p_atrFrecuencia'
     */
    public crear(
        puatrParametricaInArg: number, puatrFrecuenciaInArg: number): Promise<void> {
        const request: {
            p_atrparametrica: number, p_atrfrecuencia: number
        } = {
            p_atrparametrica: puatrParametricaInArg, p_atrfrecuencia: puatrFrecuenciaInArg
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
     * @param puthisFrecuenciaActInArg Mandatory argument 'p_thisFrecuenciaAct'. Oid of 'FrecuenciaAct' class
     */
    public eliminar(
        puthisFrecuenciaActInArg: any): Promise<void> {
        const request: {
            p_thisfrecuenciaact_oid: any
        } = {
            p_thisfrecuenciaact_oid: puthisFrecuenciaActInArg
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
     * @param puthisFrecuenciaActInArg Mandatory argument 'p_thisFrecuenciaAct'. Oid of 'FrecuenciaAct' class
     * @param puFrecuenciaInArg Mandatory argument 'p_Frecuencia'
     */
    public modificar(
        puthisFrecuenciaActInArg: any, puFrecuenciaInArg: number): Promise<void> {
        const request: {
            p_thisfrecuenciaact_oid: any, p_frecuencia: number
        } = {
            p_thisfrecuenciaact_oid: puthisFrecuenciaActInArg, p_frecuencia: puFrecuenciaInArg
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
