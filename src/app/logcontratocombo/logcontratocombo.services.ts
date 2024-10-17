import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'LogContratoCombo'
 */
export class LogContratoComboServices extends AbstractServices {


    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'LogContratoCombo');
    }

    /**
     * Call to the filter 'F_LogContratoCombo' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfDesdeVar Variable vfDesde
     * @param vfHastaVar Variable vfHasta
     * @param vfNumVar Variable vfNum
     */
    public queryByFilterFuLogContratoCombo(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfDesdeVar: Date | null, vfHastaVar: Date | null, vfNumVar: string | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_LogContratoCombo');
        this.util.addFilterVariable(filter, 'vfdesde', JsonUtility.date2Json(vfDesdeVar));
        this.util.addFilterVariable(filter, 'vfhasta', JsonUtility.date2Json(vfHastaVar));
        this.util.addFilterVariable(filter, 'vfnum', vfNumVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }
}
