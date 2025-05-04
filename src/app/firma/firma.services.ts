import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'Firma'
 */
export class FirmaServices extends AbstractServices {

    private eliminarSrvName = 'eliminar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Firma');
    }

    /**
     * Call to the filter 'F_FirmasResponsables' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vuUsuarioVar Variable v_Usuario
     * @param vuNombreVar Variable v_Nombre
     * @param vouRegionalVar Variable vo_Regional
     */
    public queryByFilterFuFirmasResponsables(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vuUsuarioVar: string | null, vuNombreVar: string | null, vouRegionalVar: any): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_FirmasResponsables');
        this.util.addFilterVariable(filter, 'v_usuario', vuUsuarioVar);
        this.util.addFilterVariable(filter, 'v_nombre', vuNombreVar);
        this.util.addFilterVariable(filter, 'vo_regional', vouRegionalVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * @param oidRespRegional Oid of related 'RespRegional' instance using the role 'RespRegional'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedRespRegional(
        oidRespRegional: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidRespRegional, 'RespRegional');
    }

    /**
     * Call to the service 'eliminar' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisFirmaInArg Mandatory argument 'p_thisFirma'. Oid of 'Firma' class
     */
    public eliminar(
        puthisFirmaInArg: any): Promise<void> {
        const request: {
            p_thisfirma_oid: any
        } = {
            p_thisfirma_oid: puthisFirmaInArg
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
