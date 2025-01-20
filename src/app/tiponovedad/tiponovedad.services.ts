import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'TipoNovedad'
 */
export class TipoNovedadServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'TipoNovedad');
    }

    /**
     * @param oidNovedades Oid of related 'Novedad' instance using the role 'Novedades'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedNovedades(
        oidNovedades: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidNovedades, 'Novedades');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrTipoInArg Mandatory argument 'p_atrTipo'
     * @param puatrAliasTipoInArg Mandatory argument 'p_atrAliasTipo'
     * @param puatrNombreInArg Mandatory argument 'p_atrNombre'
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     * @param puatrCodigoLegalInArg Mandatory argument 'p_atrCodigoLegal'
     */
    public crear(
        puatrTipoInArg: number, puatrAliasTipoInArg: string, puatrNombreInArg: string, puatrDescripcionInArg: string,
        puatrCodigoLegalInArg: string): Promise<void> {
        const request: {
            p_atrtipo: number, p_atraliastipo: string, p_atrnombre: string, p_atrdescripcion: string, p_atrcodigolegal: string
        } = {
            p_atrtipo: puatrTipoInArg, p_atraliastipo: puatrAliasTipoInArg, p_atrnombre: puatrNombreInArg,
            p_atrdescripcion: puatrDescripcionInArg, p_atrcodigolegal: puatrCodigoLegalInArg
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
     * @param puthisTipoNovedadInArg Mandatory argument 'p_thisTipoNovedad'. Oid of 'TipoNovedad' class
     */
    public eliminar(
        puthisTipoNovedadInArg: any): Promise<void> {
        const request: {
            p_thistiponovedad_json: any
        } = {
            p_thistiponovedad_json: puthisTipoNovedadInArg ? JSON.stringify(puthisTipoNovedadInArg) : ''
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
     * @param puthisTipoNovedadInArg Mandatory argument 'p_thisTipoNovedad'. Oid of 'TipoNovedad' class
     * @param puAliasTipoInArg Mandatory argument 'p_AliasTipo'
     * @param puNombreInArg Mandatory argument 'p_Nombre'
     * @param puDescripcionInArg Mandatory argument 'p_Descripcion'
     * @param puCodigoLegalInArg Mandatory argument 'p_CodigoLegal'
     */
    public modificar(
        puthisTipoNovedadInArg: any, puAliasTipoInArg: string, puNombreInArg: string, puDescripcionInArg: string,
        puCodigoLegalInArg: string): Promise<void> {
        const request: {
            p_thistiponovedad_json: any, p_aliastipo: string, p_nombre: string, p_descripcion: string, p_codigolegal: string
        } = {
            p_thistiponovedad_json: puthisTipoNovedadInArg ? JSON.stringify(puthisTipoNovedadInArg) : '',
            p_aliastipo: puAliasTipoInArg, p_nombre: puNombreInArg, p_descripcion: puDescripcionInArg,
            p_codigolegal: puCodigoLegalInArg
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
