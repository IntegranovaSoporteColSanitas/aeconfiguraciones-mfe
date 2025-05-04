import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'ContSinDocSol'
 */
export class ContSinDocSolServices extends AbstractServices {

    private crearSrvName = 'crear';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'ContSinDocSol');
    }

    /**
     * Call to the filter 'F_ContSinDocSolNumContrato' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfNumContVar Variable vfNumCont
     */
    public queryByFilterFuContSinDocSolNumContrato(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfNumContVar: string | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_ContSinDocSolNumContrato');
        this.util.addFilterVariable(filter, 'vfnumcont', vfNumContVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrNumContratoInArg Mandatory argument 'p_atrNumContrato'
     */
    public crear(
        puatrNumContratoInArg: string): Promise<void> {
        const request: {
            p_atrnumcontrato: string
        } = {
            p_atrnumcontrato: puatrNumContratoInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.crearSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
