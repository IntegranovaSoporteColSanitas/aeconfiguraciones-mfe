import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * « Service and queries of class 'Planes' »
 */
export class PlanesServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Planes');
    }

    /**
     * Call to the filter 'F_PlanVarios' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vouProductoVar Variable vo_Producto
     * @param vuNombreVar Variable v_Nombre
     * @param vuEsBancoRepVar Variable v_EsBancoRep
     * @param vEsVoluntarioVar Variable vEsVoluntario
     */
    public queryByFilterFuPlanVarios(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vouProductoVar: any, vuNombreVar: string | null, vuEsBancoRepVar: boolean | null,
        vEsVoluntarioVar: boolean | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_PlanVarios');
        this.util.addFilterVariable(filter, 'vo_producto', vouProductoVar);
        this.util.addFilterVariable(filter, 'v_nombre', vuNombreVar);
        this.util.addFilterVariable(filter, 'v_esbancorep', vuEsBancoRepVar);
        this.util.addFilterVariable(filter, 'vesvoluntario', vEsVoluntarioVar);
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
     * @param oidDominios Oid of related 'Dominio' instance using the role 'Dominios'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDominios(
        oidDominios: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDominios, 'Dominios');
    }

    /**
     * @param oidTarifas Oid of related 'Tarifa' instance using the role 'Tarifas'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedTarifas(
        oidTarifas: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidTarifas, 'Tarifas');
    }

    /**
     * @param oidGruposAsociados Oid of related 'GrupoAsociado' instance using the role 'GruposAsociados'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedGruposAsociados(
        oidGruposAsociados: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidGruposAsociados, 'GruposAsociados');
    }

    /**
     * @param oidTiposIVA Oid of related 'TipoIVA' instance using the role 'TiposIVA'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedTiposIVA(
        oidTiposIVA: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidTiposIVA, 'TiposIVA');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puagrProductoTInArg Mandatory argument 'p_agrProductoT'. Oid of 'Productos' class
     * @param puatrPlanInArg Mandatory argument 'p_atrPlan'
     * @param puatrNombreInArg Mandatory argument 'p_atrNombre'
     * @param puatrEsBancoRepInArg Mandatory argument 'p_atrEsBancoRep'
     * @param puatrCodigoLegalInArg Mandatory argument 'p_atrCodigoLegal'
     */
    public crear(
        puagrProductoTInArg: any, puatrPlanInArg: number, puatrNombreInArg: string, puatrEsBancoRepInArg: boolean,
        puatrCodigoLegalInArg: string): Promise<void> {
        const request: {
            p_agrproductot_oid: any, p_atrplan: number, p_atrnombre: string, p_atresbancorep: boolean, p_atrcodigolegal: string
        } = {
            p_agrproductot_oid: puagrProductoTInArg, p_atrplan: puatrPlanInArg, p_atrnombre: puatrNombreInArg,
            p_atresbancorep: puatrEsBancoRepInArg, p_atrcodigolegal: puatrCodigoLegalInArg
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
     * @param puthisPlanInArg Mandatory argument 'p_thisPlan'. Oid of 'Planes' class
     */
    public eliminar(
        puthisPlanInArg: any): Promise<void> {
        const request: {
            p_thisplan_oid: any
        } = {
            p_thisplan_oid: puthisPlanInArg
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
     * @param puthisPlanInArg Mandatory argument 'p_thisPlan'. Oid of 'Planes' class
     * @param puEsBancoRepInArg Mandatory argument 'p_EsBancoRep'
     * @param puAceptaPreexistenciasInArg Mandatory argument 'p_AceptaPreexistencias'
     * @param puEsVoluntarioInArg Mandatory argument 'p_EsVoluntario'
     * @param puInicioContDiaUnoInArg Mandatory argument 'p_InicioContDiaUno'
     */
    public modificar(
        puthisPlanInArg: any, puEsBancoRepInArg: boolean, puAceptaPreexistenciasInArg: boolean, puEsVoluntarioInArg: boolean,
        puInicioContDiaUnoInArg: boolean): Promise<void> {
        const request: {
            p_thisplan_oid: any, p_esbancorep: boolean, p_aceptapreexistencias: boolean, p_esvoluntario: boolean,
            p_iniciocontdiauno: boolean
        } = {
            p_thisplan_oid: puthisPlanInArg, p_esbancorep: puEsBancoRepInArg, p_aceptapreexistencias: puAceptaPreexistenciasInArg,
            p_esvoluntario: puEsVoluntarioInArg, p_iniciocontdiauno: puInicioContDiaUnoInArg
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
