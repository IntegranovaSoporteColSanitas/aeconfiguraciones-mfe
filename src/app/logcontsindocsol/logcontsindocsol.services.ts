import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'LogContSinDocSol'
 */
export class LogContSinDocSolServices extends AbstractServices {


    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'LogContSinDocSol');
    }

    /**
     * Call to the filter 'F_LogContSinDocSol' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfDesdeVar Variable vfDesde
     * @param vfHastaVar Variable vfHasta
     * @param vfNumContVar Variable vfNumCont
     */
    public queryByFilterFuLogContSinDocSol(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfDesdeVar: Date | null, vfHastaVar: Date | null, vfNumContVar: string | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_LogContSinDocSol');
        this.util.addFilterVariable(filter, 'vfdesde', JsonUtility.date2Json(vfDesdeVar));
        this.util.addFilterVariable(filter, 'vfhasta', JsonUtility.date2Json(vfHastaVar));
        this.util.addFilterVariable(filter, 'vfnumcont', vfNumContVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }
}
