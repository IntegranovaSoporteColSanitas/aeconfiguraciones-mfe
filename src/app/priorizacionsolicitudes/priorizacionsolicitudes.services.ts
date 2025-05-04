import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'PriorizacionSolicitudes'
 */
export class PriorizacionSolicitudesServices extends AbstractServices {

    private tCREARSrvName = 'TCREAR';
    private tELIMINARSrvName = 'TELIMINAR';
    private tMODIFICARSrvName = 'TMODIFICAR';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'PriorizacionSolicitudes');
    }

    /**
     * Call to the filter 'F_PriorizacionSolicitudes' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfEstadoSolVar Variable vfEstadoSol
     * @param vfEstadoDocVar Variable vfEstadoDoc
     * @param vfPriordadVar Variable vfPriordad
     */
    public queryByFilterFuPriorizacionSolicitudes(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfEstadoSolVar: number | null, vfEstadoDocVar: number | null, vfPriordadVar: number | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_PriorizacionSolicitudes');
        this.util.addFilterVariable(filter, 'vfestadosol', vfEstadoSolVar);
        this.util.addFilterVariable(filter, 'vfestadodoc', vfEstadoDocVar);
        this.util.addFilterVariable(filter, 'vfpriordad', vfPriordadVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * @param oidLogPriorizacionSol Oid of related 'LogPriorizacionSol' instance using the role 'LogPriorizacionSol'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedLogPriorizacionSol(
        oidLogPriorizacionSol: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidLogPriorizacionSol, 'LogPriorizacionSol');
    }

    /**
     * Call to the service 'TCREAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuatrEstadoSolicitudInArg Mandatory argument 'pt_p_atrEstadoSolicitud'
     * @param ptupuatrEstadoDocInArg Mandatory argument 'pt_p_atrEstadoDoc'
     * @param ptupuatrPrioridadInArg Mandatory argument 'pt_p_atrPrioridad'
     */
    public tCREAR(
        ptupuatrEstadoSolicitudInArg: number, ptupuatrEstadoDocInArg: number, ptupuatrPrioridadInArg: number): Promise<void> {
        const request: {
            pt_p_atrestadosolicitud: number, pt_p_atrestadodoc: number, pt_p_atrprioridad: number
        } = {
            pt_p_atrestadosolicitud: ptupuatrEstadoSolicitudInArg, pt_p_atrestadodoc: ptupuatrEstadoDocInArg,
            pt_p_atrprioridad: ptupuatrPrioridadInArg
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
     * Call to the service 'TELIMINAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisPriorizacionSolicitudesInArg Mandatory argument 'p_thisPriorizacionSolicitudes'. Oid of 'PriorizacionSolicitudes' class
     * @param ptEstadoSolicitudInArg Mandatory argument 'ptEstadoSolicitud'
     * @param ptEstadoDocInArg Mandatory argument 'ptEstadoDoc'
     */
    public tELIMINAR(
        puthisPriorizacionSolicitudesInArg: any, ptEstadoSolicitudInArg: number, ptEstadoDocInArg: number): Promise<void> {
        const request: {
            p_thispriorizacionsolicitudes_oid: any, ptestadosolicitud: number, ptestadodoc: number
        } = {
            p_thispriorizacionsolicitudes_oid: puthisPriorizacionSolicitudesInArg, ptestadosolicitud: ptEstadoSolicitudInArg,
            ptestadodoc: ptEstadoDocInArg
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
     * Call to the service 'TMODIFICAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisPriorizacionSolicitudesInArg Mandatory argument 'p_thisPriorizacionSolicitudes'. Oid of 'PriorizacionSolicitudes' class
     * @param ptupuPrioridadInArg Mandatory argument 'pt_p_Prioridad'
     * @param ptEstadoSolicitudInArg Mandatory argument 'ptEstadoSolicitud'
     * @param ptEstadoDocInArg Mandatory argument 'ptEstadoDoc'
     */
    public tMODIFICAR(
        puthisPriorizacionSolicitudesInArg: any, ptupuPrioridadInArg: number, ptEstadoSolicitudInArg: number,
        ptEstadoDocInArg: number): Promise<void> {
        const request: {
            p_thispriorizacionsolicitudes_oid: any, pt_p_prioridad: number, ptestadosolicitud: number, ptestadodoc: number
        } = {
            p_thispriorizacionsolicitudes_oid: puthisPriorizacionSolicitudesInArg, pt_p_prioridad: ptupuPrioridadInArg,
            ptestadosolicitud: ptEstadoSolicitudInArg, ptestadodoc: ptEstadoDocInArg
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
