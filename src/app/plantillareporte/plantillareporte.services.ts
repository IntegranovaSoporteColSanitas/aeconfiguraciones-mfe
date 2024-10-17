import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'PlantillaReporte'
 */
export class PlantillaReporteServices extends AbstractServices {

    private eliminarSrvName = 'eliminar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'PlantillaReporte');
    }

    /**
     * Call to the filter 'F_PlantillaReporte' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfTipoVar Variable vfTipo
     * @param vfFechaVar Variable vfFecha
     */
    public queryByFilterFuPlantillaReporte(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfTipoVar: number | null, vfFechaVar: Date | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_PlantillaReporte');
        this.util.addFilterVariable(filter, 'vftipo', vfTipoVar);
        this.util.addFilterVariable(filter, 'vffecha', JsonUtility.date2Json(vfFechaVar));
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * @param oidReportesDominio Oid of related 'ReportesDominio' instance using the role 'ReportesDominio'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedReportesDominio(
        oidReportesDominio: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidReportesDominio, 'ReportesDominio');
    }

    /**
     * Call to the service 'eliminar' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisPlantillaReporteInArg Mandatory argument 'p_thisPlantillaReporte'. Oid of 'PlantillaReporte' class
     */
    public eliminar(
        puthisPlantillaReporteInArg: any): Promise<void> {
        const request: {
            p_thisplantillareporte_oid: any
        } = {
            p_thisplantillareporte_oid: puthisPlantillaReporteInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.eliminarSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
