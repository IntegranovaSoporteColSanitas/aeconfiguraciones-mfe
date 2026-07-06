import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { QueryResponse } from '../common/answerRequestInformation';

/**
 * « Service and queries of class 'ContratoCombo' »
 */
export class ContratoComboServices extends AbstractServices {


    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'ContratoCombo');
    }

    /**
     * Call to the filter 'F_ContratoCombo_PorNumero' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfNumVar Variable vfNum
     */
    public queryByFilterFuContratoCombouPorNumero(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfNumVar: string | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_ContratoCombo_PorNumero');
        this.util.addFilterVariable(filter, 'vfnum', vfNumVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }
}
