import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'LogLlamadasAE'
 */
export class LogLlamadasAEServices extends AbstractServices {


    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'LogLlamadasAE');
    }

    /**
     * Call to the filter 'F_LogLlamadasAE' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfTipoServicioVar Variable vfTipoServicio
     * @param vfServicioVar Variable vfServicio
     * @param vfCapaVar Variable vfCapa
     * @param vfDesdeVar Variable vfDesde
     * @param vfHastaVar Variable vfHasta
     * @param vfNumSolicitudVar Variable vfNumSolicitud
     */
    public queryByFilterFuLogLlamadasAE(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfTipoServicioVar: string | null, vfServicioVar: string | null, vfCapaVar: string | null, vfDesdeVar: Date | null,
        vfHastaVar: Date | null, vfNumSolicitudVar: string | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_LogLlamadasAE');
        this.util.addFilterVariable(filter, 'vftiposervicio', vfTipoServicioVar);
        this.util.addFilterVariable(filter, 'vfservicio', vfServicioVar);
        this.util.addFilterVariable(filter, 'vfcapa', vfCapaVar);
        this.util.addFilterVariable(filter, 'vfdesde', JsonUtility.dateTime2Json(vfDesdeVar));
        this.util.addFilterVariable(filter, 'vfhasta', JsonUtility.dateTime2Json(vfHastaVar));
        this.util.addFilterVariable(filter, 'vfnumsolicitud', vfNumSolicitudVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }
}
