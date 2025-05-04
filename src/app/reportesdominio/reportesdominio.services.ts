import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'ReportesDominio'
 */
export class ReportesDominioServices extends AbstractServices {

    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'ReportesDominio');
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
     * @param oidPlantillaReporte Oid of related 'PlantillaReporte' instance using the role 'PlantillaReporte'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPlantillaReporte(
        oidPlantillaReporte: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPlantillaReporte, 'PlantillaReporte');
    }

    /**
     * Call to the service 'eliminar' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisReportesDominioInArg Mandatory argument 'p_thisReportesDominio'. Oid of 'ReportesDominio' class
     */
    public eliminar(
        puthisReportesDominioInArg: any): Promise<void> {
        const request: {
            p_thisreportesdominio_oid: any
        } = {
            p_thisreportesdominio_oid: puthisReportesDominioInArg
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
     * @param puthisReportesDominioInArg Mandatory argument 'p_thisReportesDominio'. Oid of 'ReportesDominio' class
     * @param puEnviarAutoInArg Mandatory argument 'p_EnviarAuto'
     */
    public modificar(
        puthisReportesDominioInArg: any, puEnviarAutoInArg: boolean): Promise<void> {
        const request: {
            p_thisreportesdominio_oid: any, p_enviarauto: boolean
        } = {
            p_thisreportesdominio_oid: puthisReportesDominioInArg, p_enviarauto: puEnviarAutoInArg
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
