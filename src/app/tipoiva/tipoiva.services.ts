import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'TipoIVA'
 */
export class TipoIVAServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'TipoIVA');
    }

    /**
     * Call to the filter 'F_TipoIVAVarios' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vouProductoVar Variable vo_Producto
     * @param vouPlanVar Variable vo_Plan
     * @param vuDesdeVar Variable v_Desde
     * @param vuHastaVar Variable v_Hasta
     */
    public queryByFilterFuTipoIVAVarios(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vouProductoVar: any, vouPlanVar: any, vuDesdeVar: Date | null, vuHastaVar: Date | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_TipoIVAVarios');
        this.util.addFilterVariable(filter, 'vo_producto', vouProductoVar);
        this.util.addFilterVariable(filter, 'vo_plan', vouPlanVar);
        this.util.addFilterVariable(filter, 'v_desde', JsonUtility.date2Json(vuDesdeVar));
        this.util.addFilterVariable(filter, 'v_hasta', JsonUtility.date2Json(vuHastaVar));
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * @param oidProductoT Oid of related 'Productos' instance using the role 'ProductoT'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedProductoT(
        oidProductoT: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidProductoT, 'ProductoT');
    }

    /**
     * @param oidPlanT Oid of related 'Planes' instance using the role 'PlanT'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPlanT(
        oidPlanT: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPlanT, 'PlanT');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puagrProductoTInArg Mandatory argument 'p_agrProductoT'. Oid of 'Productos' class
     * @param puagrPlanTInArg Mandatory argument 'p_agrPlanT'. Oid of 'Planes' class
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     * @param puatrPorcentajeInArg Mandatory argument 'p_atrPorcentaje'
     * @param puatrFechaInicioInArg Mandatory argument 'p_atrFechaInicio'
     * @param puatrFechaFinInArg Mandatory argument 'p_atrFechaFin'
     */
    public crear(
        puagrProductoTInArg: any, puagrPlanTInArg: any, puatrDescripcionInArg: string, puatrPorcentajeInArg: number,
        puatrFechaInicioInArg: Date, puatrFechaFinInArg: Date): Promise<void> {
        const request: {
            p_agrproductot_json: any, p_agrplant_json: any, p_atrdescripcion: string, p_atrporcentaje: number,
            p_atrfechainicio: string, p_atrfechafin: string
        } = {
            p_agrproductot_json: puagrProductoTInArg ? JSON.stringify(puagrProductoTInArg) : '',
            p_agrplant_json: puagrPlanTInArg ? JSON.stringify(puagrPlanTInArg) : '', p_atrdescripcion: puatrDescripcionInArg,
            p_atrporcentaje: puatrPorcentajeInArg,
            p_atrfechainicio: puatrFechaInicioInArg ? JsonUtility.date2Json(puatrFechaInicioInArg) : '',
            p_atrfechafin: puatrFechaFinInArg ? JsonUtility.date2Json(puatrFechaFinInArg) : ''
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
     * @param puthisTipoIVAInArg Mandatory argument 'p_thisTipoIVA'. Oid of 'TipoIVA' class
     */
    public eliminar(
        puthisTipoIVAInArg: any): Promise<void> {
        const request: {
            p_thistipoiva_oid: any
        } = {
            p_thistipoiva_oid: puthisTipoIVAInArg
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
     * @param puthisTipoIVAInArg Mandatory argument 'p_thisTipoIVA'. Oid of 'TipoIVA' class
     * @param puDescripcionInArg Mandatory argument 'p_Descripcion'
     * @param puPorcentajeInArg Mandatory argument 'p_Porcentaje'
     * @param puFechaInicioInArg Mandatory argument 'p_FechaInicio'
     * @param puFechaFinInArg Mandatory argument 'p_FechaFin'
     */
    public modificar(
        puthisTipoIVAInArg: any, puDescripcionInArg: string, puPorcentajeInArg: number, puFechaInicioInArg: Date,
        puFechaFinInArg: Date): Promise<void> {
        const request: {
            p_thistipoiva_oid: any, p_descripcion: string, p_porcentaje: number, p_fechainicio: string, p_fechafin: string
        } = {
            p_thistipoiva_oid: puthisTipoIVAInArg, p_descripcion: puDescripcionInArg, p_porcentaje: puPorcentajeInArg,
            p_fechainicio: puFechaInicioInArg ? JsonUtility.date2Json(puFechaInicioInArg) : '',
            p_fechafin: puFechaFinInArg ? JsonUtility.date2Json(puFechaFinInArg) : ''
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
