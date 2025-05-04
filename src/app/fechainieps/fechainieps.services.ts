import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'FechaIniEPS'
 */
export class FechaIniEPSServices extends AbstractServices {

    private eliminarSrvName = 'eliminar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'FechaIniEPS');
    }

    /**
     * Call to the filter 'F_FechaIniEPS' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfTramiteVar Variable vfTramite
     * @param vfTipoContratoVar Variable vfTipoContrato
     * @param vfFechaVar Variable vfFecha
     */
    public queryByFilterFuFechaIniEPS(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfTramiteVar: number | null, vfTipoContratoVar: number | null, vfFechaVar: Date | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_FechaIniEPS');
        this.util.addFilterVariable(filter, 'vftramite', vfTramiteVar);
        this.util.addFilterVariable(filter, 'vftipocontrato', vfTipoContratoVar);
        this.util.addFilterVariable(filter, 'vffecha', JsonUtility.date2Json(vfFechaVar));
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * Call to the service 'eliminar' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisFechaIniEPSInArg Mandatory argument 'p_thisFechaIniEPS'. Oid of 'FechaIniEPS' class
     */
    public eliminar(
        puthisFechaIniEPSInArg: any): Promise<void> {
        const request: {
            p_thisfechainieps_oid: any
        } = {
            p_thisfechainieps_oid: puthisFechaIniEPSInArg
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
