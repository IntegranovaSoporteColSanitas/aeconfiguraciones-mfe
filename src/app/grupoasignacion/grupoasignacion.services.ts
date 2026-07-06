import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * « Service and queries of class 'GrupoAsignacion' »
 */
export class GrupoAsignacionServices extends AbstractServices {

    private tELIMINARSrvName = 'TELIMINAR';
    private tCREARSrvName = 'TCREAR';
    private tMODIFICARSrvName = 'TMODIFICAR';
    private tADDUSUARIOSrvName = 'TADDUSUARIO';
    private tDELUSUARIOSrvName = 'TDELUSUARIO';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'GrupoAsignacion');
    }

    /**
     * Call to the filter 'F_GrupoAsignacionPorTipo' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfTipoVar Variable vfTipo
     */
    public queryByFilterFuGrupoAsignacionPorTipo(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfTipoVar: number | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_GrupoAsignacionPorTipo');
        this.util.addFilterVariable(filter, 'vftipo', vfTipoVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * @param oidFuncionario Oid of related 'Funcionario' instance using the role 'Funcionario'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedFuncionario(
        oidFuncionario: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidFuncionario, 'Funcionario');
    }

    /**
     * @param oidDominioAsesores Oid of related 'Dominio' instance using the role 'DominioAsesores'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDominioAsesores(
        oidDominioAsesores: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDominioAsesores, 'DominioAsesores');
    }

    /**
     * @param oidDominioAreaMedica Oid of related 'Dominio' instance using the role 'DominioAreaMedica'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDominioAreaMedica(
        oidDominioAreaMedica: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDominioAreaMedica, 'DominioAreaMedica');
    }

    /**
     * @param oidLogGrupoAsignacion Oid of related 'LogGrupoAsignacion' instance using the role 'LogGrupoAsignacion'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedLogGrupoAsignacion(
        oidLogGrupoAsignacion: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidLogGrupoAsignacion, 'LogGrupoAsignacion');
    }

    /**
     * @param oidDominioCausalUsuario Oid of related 'GrupoAsignacionNovedad' instance using the role 'DominioCausalUsuario'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDominioCausalUsuario(
        oidDominioCausalUsuario: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDominioCausalUsuario, 'DominioCausalUsuario');
    }

    /**
     * Call to the service 'TELIMINAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisGrupoAsignacionInArg Mandatory argument 'p_thisGrupoAsignacion'. Oid of 'GrupoAsignacion' class
     */
    public tELIMINAR(
        puthisGrupoAsignacionInArg: any): Promise<void> {
        const request: {
            p_thisgrupoasignacion_oid: any
        } = {
            p_thisgrupoasignacion_oid: puthisGrupoAsignacionInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tELIMINARSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TCREAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuatrTipoInArg Mandatory argument 'pt_p_atrTipo'
     * @param ptupuatrNombreInArg Mandatory argument 'pt_p_atrNombre'
     * @param ptupuatrDescripcionInArg Mandatory argument 'pt_p_atrDescripcion'
     */
    public tCREAR(
        ptupuatrTipoInArg: number, ptupuatrNombreInArg: string, ptupuatrDescripcionInArg: string): Promise<void> {
        const request: {
            pt_p_atrtipo: number, pt_p_atrnombre: string, pt_p_atrdescripcion: string
        } = {
            pt_p_atrtipo: ptupuatrTipoInArg, pt_p_atrnombre: ptupuatrNombreInArg, pt_p_atrdescripcion: ptupuatrDescripcionInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tCREARSrvName, request).then((response: any) => {
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
     * @param puthisGrupoAsignacionInArg Mandatory argument 'p_thisGrupoAsignacion'. Oid of 'GrupoAsignacion' class
     * @param ptupuNombreInArg Mandatory argument 'pt_p_Nombre'
     * @param ptupuDescripcionInArg Mandatory argument 'pt_p_Descripcion'
     */
    public tMODIFICAR(
        puthisGrupoAsignacionInArg: any, ptupuNombreInArg: string, ptupuDescripcionInArg: string): Promise<void> {
        const request: {
            p_thisgrupoasignacion_oid: any, pt_p_nombre: string, pt_p_descripcion: string
        } = {
            p_thisgrupoasignacion_oid: puthisGrupoAsignacionInArg, pt_p_nombre: ptupuNombreInArg,
            pt_p_descripcion: ptupuDescripcionInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tMODIFICARSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TADDUSUARIO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisGrupoAsignacionInArg Mandatory argument 'p_thisGrupoAsignacion'. Oid of 'GrupoAsignacion' class
     * @param ptFuncionarioInArg Optional argument 'ptFuncionario'. Oid of 'Funcionario' class
     * @param ptAreaMedicaInArg Optional argument 'ptAreaMedica'. Oid of 'AreaMedica' class
     */
    public tADDUSUARIO(
        puthisGrupoAsignacionInArg: any, ptFuncionarioInArg: any, ptAreaMedicaInArg: any): Promise<void> {
        const request: {
            p_thisgrupoasignacion_oid: any, ptfuncionario_oid: any, ptareamedica_oid: any
        } = {
            p_thisgrupoasignacion_oid: puthisGrupoAsignacionInArg, ptfuncionario_oid: ptFuncionarioInArg,
            ptareamedica_oid: ptAreaMedicaInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tADDUSUARIOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TDELUSUARIO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisGrupoAsignacionInArg Mandatory argument 'p_thisGrupoAsignacion'. Oid of 'GrupoAsignacion' class
     * @param ptFuncionarioInArg Mandatory argument 'ptFuncionario'. Oid of 'Funcionario' class
     */
    public tDELUSUARIO(
        puthisGrupoAsignacionInArg: any, ptFuncionarioInArg: any): Promise<void> {
        const request: {
            p_thisgrupoasignacion_oid: any, ptfuncionario_oid: any
        } = {
            p_thisgrupoasignacion_oid: puthisGrupoAsignacionInArg, ptfuncionario_oid: ptFuncionarioInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tDELUSUARIOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
