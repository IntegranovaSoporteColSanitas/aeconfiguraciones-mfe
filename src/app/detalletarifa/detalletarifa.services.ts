import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * « Service and queries of class 'DetalleTarifa' »
 */
export class DetalleTarifaServices extends AbstractServices {

    private tCREARSrvName = 'TCREAR';
    private tMODIFICARSrvName = 'TMODIFICAR';
    private tELIMINARSrvName = 'TELIMINAR';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'DetalleTarifa');
    }

    /**
     * @param oidTarifa Oid of related 'Tarifa' instance using the role 'Tarifa'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedTarifa(
        oidTarifa: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidTarifa, 'Tarifa');
    }

    /**
     * Call to the service 'TCREAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param pTarifaInArg Mandatory argument 'pTarifa'. Oid of 'Tarifa' class
     * @param pProductoInArg Mandatory argument 'pProducto'. Oid of 'Productos' class
     * @param pPlanInArg Mandatory argument 'pPlan'. Oid of 'Planes' class
     * @param pTipoContratoInArg Mandatory argument 'pTipoContrato'
     * @param pAnyoInArg Mandatory argument 'pAnyo'
     * @param pLimInferiorEdadInArg Mandatory argument 'pLimInferiorEdad'
     * @param pLimSuperiorEdadInArg Mandatory argument 'pLimSuperiorEdad'
     * @param pValorInArg Mandatory argument 'pValor'
     */
    public tCREAR(
        pTarifaInArg: any, pProductoInArg: any, pPlanInArg: any, pTipoContratoInArg: number, pAnyoInArg: number,
        pLimInferiorEdadInArg: number, pLimSuperiorEdadInArg: number, pValorInArg: number): Promise<void> {
        const request: {
            ptarifa_oid: any, pproducto_oid: any, pplan_oid: any, ptipocontrato: number, panyo: number, pliminferioredad: number,
            plimsuperioredad: number, pvalor: number
        } = {
            ptarifa_oid: pTarifaInArg, pproducto_oid: pProductoInArg, pplan_oid: pPlanInArg, ptipocontrato: pTipoContratoInArg,
            panyo: pAnyoInArg, pliminferioredad: pLimInferiorEdadInArg, plimsuperioredad: pLimSuperiorEdadInArg, pvalor: pValorInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tCREARSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TMODIFICAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDetalleTarifaInArg Mandatory argument 'p_thisDetalleTarifa'. Oid of 'DetalleTarifa' class
     * @param pProductoInArg Mandatory argument 'pProducto'. Oid of 'Productos' class
     * @param pPlanInArg Mandatory argument 'pPlan'. Oid of 'Planes' class
     * @param pTipoContratoInArg Mandatory argument 'pTipoContrato'
     * @param pAnyoInArg Mandatory argument 'pAnyo'
     * @param pLimInferiorEdadInArg Mandatory argument 'pLimInferiorEdad'
     * @param pLimSuperiorEdadInArg Mandatory argument 'pLimSuperiorEdad'
     * @param pValorInArg Mandatory argument 'pValor'
     */
    public tMODIFICAR(
        puthisDetalleTarifaInArg: any, pProductoInArg: any, pPlanInArg: any, pTipoContratoInArg: number, pAnyoInArg: number,
        pLimInferiorEdadInArg: number, pLimSuperiorEdadInArg: number, pValorInArg: number): Promise<void> {
        const request: {
            p_thisdetalletarifa_oid: any, pproducto_oid: any, pplan_oid: any, ptipocontrato: number, panyo: number,
            pliminferioredad: number, plimsuperioredad: number, pvalor: number
        } = {
            p_thisdetalletarifa_oid: puthisDetalleTarifaInArg, pproducto_oid: pProductoInArg, pplan_oid: pPlanInArg,
            ptipocontrato: pTipoContratoInArg, panyo: pAnyoInArg, pliminferioredad: pLimInferiorEdadInArg,
            plimsuperioredad: pLimSuperiorEdadInArg, pvalor: pValorInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tMODIFICARSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TELIMINAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDetalleTarifaInArg Mandatory argument 'p_thisDetalleTarifa'. Oid of 'DetalleTarifa' class
     */
    public tELIMINAR(
        puthisDetalleTarifaInArg: any): Promise<void> {
        const request: {
            p_thisdetalletarifa_oid: any
        } = {
            p_thisdetalletarifa_oid: puthisDetalleTarifaInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tELIMINARSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
