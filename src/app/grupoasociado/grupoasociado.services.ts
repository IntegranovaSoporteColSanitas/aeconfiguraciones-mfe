import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * « Service and queries of class 'GrupoAsociado' »
 */
export class GrupoAsociadoServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'GrupoAsociado');
    }

    /**
     * Call to the filter 'F_GrupoAsociadoVarios' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vouProductoVar Variable vo_Producto
     * @param vouPlanVar Variable vo_Plan
     * @param vuFIniVar Variable v_FIni
     * @param vuFFinVar Variable v_FFin
     */
    public queryByFilterFuGrupoAsociadoVarios(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vouProductoVar: any, vouPlanVar: any, vuFIniVar: Date | null, vuFFinVar: Date | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_GrupoAsociadoVarios');
        this.util.addFilterVariable(filter, 'vo_producto', vouProductoVar);
        this.util.addFilterVariable(filter, 'vo_plan', vouPlanVar);
        this.util.addFilterVariable(filter, 'v_fini', JsonUtility.date2Json(vuFIniVar));
        this.util.addFilterVariable(filter, 'v_ffin', JsonUtility.date2Json(vuFFinVar));
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
     * @param puatrCodigoLegalInArg Mandatory argument 'p_atrCodigoLegal'
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     * @param puatrFIniVigenciaInArg Mandatory argument 'p_atrFIniVigencia'
     * @param puatrFFinVigenciaInArg Mandatory argument 'p_atrFFinVigencia'
     * @param puatrEstadoInArg Mandatory argument 'p_atrEstado'
     * @param puatrDisminucionCarenciaInArg Mandatory argument 'p_atrDisminucionCarencia'
     * @param puatrCodTarifaCOREInArg Optional argument 'p_atrCodTarifaCORE'
     * @param puatrCodigoInArg Mandatory argument 'p_atrCodigo'
     */
    public crear(
        puagrProductoTInArg: any, puagrPlanTInArg: any, puatrCodigoLegalInArg: string, puatrDescripcionInArg: string,
        puatrFIniVigenciaInArg: Date, puatrFFinVigenciaInArg: Date, puatrEstadoInArg: number, puatrDisminucionCarenciaInArg: number,
        puatrCodTarifaCOREInArg: string | null, puatrCodigoInArg: number): Promise<void> {
        const request: {
            p_agrproductot_oid: any, p_agrplant_oid: any, p_atrcodigolegal: string, p_atrdescripcion: string,
            p_atrfinivigencia: string, p_atrffinvigencia: string, p_atrestado: number, p_atrdisminucioncarencia: number,
            p_atrcodtarifacore: string | null, p_atrcodigo: number
        } = {
            p_agrproductot_oid: puagrProductoTInArg, p_agrplant_oid: puagrPlanTInArg, p_atrcodigolegal: puatrCodigoLegalInArg,
            p_atrdescripcion: puatrDescripcionInArg,
            p_atrfinivigencia: puatrFIniVigenciaInArg ? JsonUtility.date2Json(puatrFIniVigenciaInArg) : '',
            p_atrffinvigencia: puatrFFinVigenciaInArg ? JsonUtility.date2Json(puatrFFinVigenciaInArg) : '',
            p_atrestado: puatrEstadoInArg, p_atrdisminucioncarencia: puatrDisminucionCarenciaInArg,
            p_atrcodtarifacore: puatrCodTarifaCOREInArg, p_atrcodigo: puatrCodigoInArg
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
     * @param puthisGrupoAsociadoInArg Mandatory argument 'p_thisGrupoAsociado'. Oid of 'GrupoAsociado' class
     */
    public eliminar(
        puthisGrupoAsociadoInArg: any): Promise<void> {
        const request: {
            p_thisgrupoasociado_oid: any
        } = {
            p_thisgrupoasociado_oid: puthisGrupoAsociadoInArg
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
     * @param puthisGrupoAsociadoInArg Mandatory argument 'p_thisGrupoAsociado'. Oid of 'GrupoAsociado' class
     * @param puDisminucionCarenciaInArg Mandatory argument 'p_DisminucionCarencia'
     */
    public modificar(
        puthisGrupoAsociadoInArg: any, puDisminucionCarenciaInArg: number): Promise<void> {
        const request: {
            p_thisgrupoasociado_oid: any, p_disminucioncarencia: number
        } = {
            p_thisgrupoasociado_oid: puthisGrupoAsociadoInArg, p_disminucioncarencia: puDisminucionCarenciaInArg
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
