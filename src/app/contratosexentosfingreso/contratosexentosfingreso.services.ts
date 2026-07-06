import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { QueryResponse } from '../common/answerRequestInformation';

/**
 * « Service and queries of class 'ContratosExentosFIngreso' »
 */
export class ContratosExentosFIngresoServices extends AbstractServices {


    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'ContratosExentosFIngreso');
    }

    /**
     * Call to the filter 'F_ContratosExentosFIngreso' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfNumVar Variable vfNum
     */
    public queryByFilterFuContratosExentosFIngreso(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfNumVar: string | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_ContratosExentosFIngreso');
        this.util.addFilterVariable(filter, 'vfnum', vfNumVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }
}
