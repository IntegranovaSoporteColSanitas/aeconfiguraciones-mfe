import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * « Service and queries of class 'ParentescoDom' »
 */
export class ParentescoDomServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'ParentescoDom');
    }

    /**
     * @param oidDominio Oid of related 'Dominio' instance using the role 'Dominio'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDominio(
        oidDominio: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDominio, 'Dominio');
    }

    /**
     * @param oidParentesco Oid of related 'Parentesco' instance using the role 'Parentesco'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedParentesco(
        oidParentesco: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidParentesco, 'Parentesco');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puagrParentescoInArg Mandatory argument 'p_agrParentesco'. Oid of 'Parentesco' class
     * @param puagrDominioInArg Mandatory argument 'p_agrDominio'. Oid of 'Dominio' class
     * @param puatrEdadMinimaAInArg Optional argument 'p_atrEdadMinimaA'
     * @param puatrEdadMaximaAInArg Optional argument 'p_atrEdadMaximaA'
     * @param puatrEdadMinimaDInArg Optional argument 'p_atrEdadMinimaD'
     * @param puatrEdadMaximaPInArg Optional argument 'p_atrEdadMaximaP'
     */
    public crear(
        puagrParentescoInArg: any, puagrDominioInArg: any, puatrEdadMinimaAInArg: number | null, puatrEdadMaximaAInArg: number | null,
        puatrEdadMinimaDInArg: number | null, puatrEdadMaximaPInArg: number | null): Promise<void> {
        const request: {
            p_agrparentesco_json: any, p_agrdominio_oid: any, p_atredadminimaa: number | null, p_atredadmaximaa: number | null,
            p_atredadminimad: number | null, p_atredadmaximap: number | null
        } = {
            p_agrparentesco_json: puagrParentescoInArg ? JSON.stringify(puagrParentescoInArg) : '',
            p_agrdominio_oid: puagrDominioInArg, p_atredadminimaa: puatrEdadMinimaAInArg, p_atredadmaximaa: puatrEdadMaximaAInArg,
            p_atredadminimad: puatrEdadMinimaDInArg, p_atredadmaximap: puatrEdadMaximaPInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.crearSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'eliminar' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisParentescoDomInArg Mandatory argument 'p_thisParentescoDom'. Oid of 'ParentescoDom' class
     */
    public eliminar(
        puthisParentescoDomInArg: any): Promise<void> {
        const request: {
            p_thisparentescodom_oid: any
        } = {
            p_thisparentescodom_oid: puthisParentescoDomInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.eliminarSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'modificar' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisParentescoDomInArg Mandatory argument 'p_thisParentescoDom'. Oid of 'ParentescoDom' class
     * @param puEdadMinimaAInArg Optional argument 'p_EdadMinimaA'
     * @param puEdadMaximaAInArg Optional argument 'p_EdadMaximaA'
     * @param puEdadMinimaDInArg Optional argument 'p_EdadMinimaD'
     * @param puEdadMaximaPInArg Optional argument 'p_EdadMaximaP'
     */
    public modificar(
        puthisParentescoDomInArg: any, puEdadMinimaAInArg: number | null, puEdadMaximaAInArg: number | null,
        puEdadMinimaDInArg: number | null, puEdadMaximaPInArg: number | null): Promise<void> {
        const request: {
            p_thisparentescodom_oid: any, p_edadminimaa: number | null, p_edadmaximaa: number | null, p_edadminimad: number | null,
            p_edadmaximap: number | null
        } = {
            p_thisparentescodom_oid: puthisParentescoDomInArg, p_edadminimaa: puEdadMinimaAInArg, p_edadmaximaa: puEdadMaximaAInArg,
            p_edadminimad: puEdadMinimaDInArg, p_edadmaximap: puEdadMaximaPInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.modificarSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
