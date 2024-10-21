import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'Funcionario'
 */
export class FuncionarioServices extends AbstractServices {

    private insReporteFuncionarioSrvName = 'InsReporteFuncionario';
    private delReporteFuncionarioSrvName = 'DelReporteFuncionario';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Funcionario');
    }

    /**
     * Call to the filter 'F_Funcionario_PorNombre' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfPriNomVar Variable vfPriNom
     * @param vfSegNomVar Variable vfSegNom
     * @param vfPriApeVar Variable vfPriApe
     * @param vfSegApeVar Variable vfSegApe
     */
    public queryByFilterFuFuncionariouPorNombre(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfPriNomVar: string | null, vfSegNomVar: string | null, vfPriApeVar: string | null,
        vfSegApeVar: string | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_Funcionario_PorNombre');
        this.util.addFilterVariable(filter, 'vfprinom', vfPriNomVar);
        this.util.addFilterVariable(filter, 'vfsegnom', vfSegNomVar);
        this.util.addFilterVariable(filter, 'vfpriape', vfPriApeVar);
        this.util.addFilterVariable(filter, 'vfsegape', vfSegApeVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * @param oidRol Oid of related 'Rol' instance using the role 'Rol'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedRol(
        oidRol: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidRol, 'Rol');
    }

    /**
     * @param oidSucursal Oid of related 'Sucursal' instance using the role 'Sucursal'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedSucursal(
        oidSucursal: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidSucursal, 'Sucursal');
    }

    /**
     * @param oidReportes Oid of related 'ReportesProcAlm' instance using the role 'Reportes'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedReportes(
        oidReportes: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidReportes, 'Reportes');
    }

    /**
     * @param oidGrupoAsignacion Oid of related 'GrupoAsignacion' instance using the role 'GrupoAsignacion'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedGrupoAsignacion(
        oidGrupoAsignacion: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidGrupoAsignacion, 'GrupoAsignacion');
    }

    /**
     * Call to the service 'InsReporteFuncionario' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisFuncionarioInArg Mandatory argument 'p_thisFuncionario'. Oid of 'Funcionario' class
     * @param puevcReportesProcAlmInArg Mandatory argument 'p_evcReportesProcAlm'. Oid of 'ReportesProcAlm' class
     */
    public insReporteFuncionario(
        puthisFuncionarioInArg: any, puevcReportesProcAlmInArg: any): Promise<void> {
        const request: {
            p_thisfuncionario_oid: any, p_evcreportesprocalm_json: any
        } = {
            p_thisfuncionario_oid: puthisFuncionarioInArg,
            p_evcreportesprocalm_json: puevcReportesProcAlmInArg ? JSON.stringify(puevcReportesProcAlmInArg) : ''
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.insReporteFuncionarioSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'DelReporteFuncionario' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisFuncionarioInArg Mandatory argument 'p_thisFuncionario'. Oid of 'Funcionario' class
     * @param puevcReportesProcAlmInArg Mandatory argument 'p_evcReportesProcAlm'. Oid of 'ReportesProcAlm' class
     */
    public delReporteFuncionario(
        puthisFuncionarioInArg: any, puevcReportesProcAlmInArg: any): Promise<void> {
        const request: {
            p_thisfuncionario_oid: any, p_evcreportesprocalm_json: any
        } = {
            p_thisfuncionario_oid: puthisFuncionarioInArg,
            p_evcreportesprocalm_json: puevcReportesProcAlmInArg ? JSON.stringify(puevcReportesProcAlmInArg) : ''
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.delReporteFuncionarioSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
