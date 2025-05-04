import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'Parentesco'
 */
export class ParentescoServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Parentesco');
    }

    /**
     * @param oidParentescosDom Oid of related 'ParentescoDom' instance using the role 'ParentescosDom'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedParentescosDom(
        oidParentescosDom: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidParentescosDom, 'ParentescosDom');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrCodigoInArg Mandatory argument 'p_atrCodigo'
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     * @param puatrEsTitularInArg Mandatory argument 'p_atrEsTitular'
     * @param puatrEsConyugeInArg Mandatory argument 'p_atrEsConyuge'
     * @param puatrEsPadreInArg Mandatory argument 'p_atrEsPadre'
     * @param puatrEsHijoInArg Mandatory argument 'p_atrEsHijo'
     * @param puatrNombreCortoInArg Mandatory argument 'p_atrNombreCorto'
     */
    public crear(
        puatrCodigoInArg: number, puatrDescripcionInArg: string, puatrEsTitularInArg: boolean, puatrEsConyugeInArg: boolean,
        puatrEsPadreInArg: boolean, puatrEsHijoInArg: boolean, puatrNombreCortoInArg: string): Promise<void> {
        const request: {
            p_atrcodigo: number, p_atrdescripcion: string, p_atrestitular: boolean, p_atresconyuge: boolean, p_atrespadre: boolean,
            p_atreshijo: boolean, p_atrnombrecorto: string
        } = {
            p_atrcodigo: puatrCodigoInArg, p_atrdescripcion: puatrDescripcionInArg, p_atrestitular: puatrEsTitularInArg,
            p_atresconyuge: puatrEsConyugeInArg, p_atrespadre: puatrEsPadreInArg, p_atreshijo: puatrEsHijoInArg,
            p_atrnombrecorto: puatrNombreCortoInArg
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
     * @param puthisParentescoInArg Mandatory argument 'p_thisParentesco'. Oid of 'Parentesco' class
     */
    public eliminar(
        puthisParentescoInArg: any): Promise<void> {
        const request: {
            p_thisparentesco_oid: any
        } = {
            p_thisparentesco_oid: puthisParentescoInArg
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
     * @param puthisParentescoInArg Mandatory argument 'p_thisParentesco'. Oid of 'Parentesco' class
     * @param puEsTitularInArg Mandatory argument 'p_EsTitular'
     * @param puEsConyugeInArg Mandatory argument 'p_EsConyuge'
     * @param puEsPadreInArg Mandatory argument 'p_EsPadre'
     * @param puEsHijoInArg Mandatory argument 'p_EsHijo'
     */
    public modificar(
        puthisParentescoInArg: any, puEsTitularInArg: boolean, puEsConyugeInArg: boolean, puEsPadreInArg: boolean,
        puEsHijoInArg: boolean): Promise<void> {
        const request: {
            p_thisparentesco_oid: any, p_estitular: boolean, p_esconyuge: boolean, p_espadre: boolean, p_eshijo: boolean
        } = {
            p_thisparentesco_oid: puthisParentescoInArg, p_estitular: puEsTitularInArg, p_esconyuge: puEsConyugeInArg,
            p_espadre: puEsPadreInArg, p_eshijo: puEsHijoInArg
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
