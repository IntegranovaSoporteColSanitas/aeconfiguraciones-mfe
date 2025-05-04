import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'ParamReporte'
 */
export class ParamReporteServices extends AbstractServices {

    private modificarSrvName = 'modificar';
    private tNEWSrvName = 'TNEW';
    private tDELETESrvName = 'TDELETE';
    private tSUBIRSrvName = 'TSUBIR';
    private tBAJARSrvName = 'TBAJAR';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'ParamReporte');
    }

    /**
     * @param oidReporte Oid of related 'ReportesProcAlm' instance using the role 'Reporte'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedReporte(
        oidReporte: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidReporte, 'Reporte');
    }

    /**
     * Call to the service 'modificar' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisParamReporteInArg Mandatory argument 'p_thisParamReporte'. Oid of 'ParamReporte' class
     * @param puEsNumericoInArg Mandatory argument 'p_EsNumerico'
     * @param puDescripcionInArg Optional argument 'p_Descripcion'
     * @param puTituloInArg Mandatory argument 'p_Titulo'
     */
    public modificar(
        puthisParamReporteInArg: any, puEsNumericoInArg: boolean, puDescripcionInArg: string | null,
        puTituloInArg: string): Promise<void> {
        const request: {
            p_thisparamreporte_oid: any, p_esnumerico: boolean, p_descripcion: string | null, p_titulo: string
        } = {
            p_thisparamreporte_oid: puthisParamReporteInArg, p_esnumerico: puEsNumericoInArg, p_descripcion: puDescripcionInArg,
            p_titulo: puTituloInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.modificarSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TNEW' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuagrReporteInArg Mandatory argument 'pt_p_agrReporte'. Oid of 'ReportesProcAlm' class
     * @param ptupuatrEsNumericoInArg Mandatory argument 'pt_p_atrEsNumerico'
     * @param ptupuatrDescripcionInArg Optional argument 'pt_p_atrDescripcion'
     * @param ptupuatrTituloInArg Mandatory argument 'pt_p_atrTitulo'
     */
    public tNEW(
        ptupuagrReporteInArg: any, ptupuatrEsNumericoInArg: boolean, ptupuatrDescripcionInArg: string | null,
        ptupuatrTituloInArg: string): Promise<void> {
        const request: {
            pt_p_agrreporte_oid: any, pt_p_atresnumerico: boolean, pt_p_atrdescripcion: string | null, pt_p_atrtitulo: string
        } = {
            pt_p_agrreporte_oid: ptupuagrReporteInArg, pt_p_atresnumerico: ptupuatrEsNumericoInArg,
            pt_p_atrdescripcion: ptupuatrDescripcionInArg, pt_p_atrtitulo: ptupuatrTituloInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tNEWSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TDELETE' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisParamReporteInArg Mandatory argument 'p_thisParamReporte'. Oid of 'ParamReporte' class
     */
    public tDELETE(
        puthisParamReporteInArg: any): Promise<void> {
        const request: {
            p_thisparamreporte_oid: any
        } = {
            p_thisparamreporte_oid: puthisParamReporteInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tDELETESrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TSUBIR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisParamReporteInArg Mandatory argument 'p_thisParamReporte'. Oid of 'ParamReporte' class
     */
    public tSUBIR(
        puthisParamReporteInArg: any): Promise<void> {
        const request: {
            p_thisparamreporte_oid: any
        } = {
            p_thisparamreporte_oid: puthisParamReporteInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tSUBIRSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TBAJAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisParamReporteInArg Mandatory argument 'p_thisParamReporte'. Oid of 'ParamReporte' class
     */
    public tBAJAR(
        puthisParamReporteInArg: any): Promise<void> {
        const request: {
            p_thisparamreporte_oid: any
        } = {
            p_thisparamreporte_oid: puthisParamReporteInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tBAJARSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
