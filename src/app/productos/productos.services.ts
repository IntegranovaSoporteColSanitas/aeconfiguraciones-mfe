import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * « Service and queries of class 'Productos' »
 */
export class ProductosServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Productos');
    }

    /**
     * @param oidPlanes Oid of related 'Planes' instance using the role 'Planes'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPlanes(
        oidPlanes: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPlanes, 'Planes');
    }

    /**
     * @param oidDominios Oid of related 'Dominio' instance using the role 'Dominios'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDominios(
        oidDominios: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDominios, 'Dominios');
    }

    /**
     * @param oidTarifas Oid of related 'Tarifa' instance using the role 'Tarifas'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedTarifas(
        oidTarifas: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidTarifas, 'Tarifas');
    }

    /**
     * @param oidGruposAsociados Oid of related 'GrupoAsociado' instance using the role 'GruposAsociados'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedGruposAsociados(
        oidGruposAsociados: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidGruposAsociados, 'GruposAsociados');
    }

    /**
     * @param oidTiposIVA Oid of related 'TipoIVA' instance using the role 'TiposIVA'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedTiposIVA(
        oidTiposIVA: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidTiposIVA, 'TiposIVA');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrProductoInArg Mandatory argument 'p_atrProducto'
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     * @param puatrCodAnexoMatInArg Optional argument 'p_atrCodAnexoMat'
     * @param puatrCodAnexoNeoInArg Optional argument 'p_atrCodAnexoNeo'
     * @param puatrNITInArg Optional argument 'p_atrNIT'
     * @param puatrCodigoLegalInArg Mandatory argument 'p_atrCodigoLegal'
     */
    public crear(
        puatrProductoInArg: number, puatrDescripcionInArg: string, puatrCodAnexoMatInArg: number | null,
        puatrCodAnexoNeoInArg: number | null, puatrNITInArg: string | null, puatrCodigoLegalInArg: string): Promise<void> {
        const request: {
            p_atrproducto: number, p_atrdescripcion: string, p_atrcodanexomat: number | null, p_atrcodanexoneo: number | null,
            p_atrnit: string | null, p_atrcodigolegal: string
        } = {
            p_atrproducto: puatrProductoInArg, p_atrdescripcion: puatrDescripcionInArg, p_atrcodanexomat: puatrCodAnexoMatInArg,
            p_atrcodanexoneo: puatrCodAnexoNeoInArg, p_atrnit: puatrNITInArg, p_atrcodigolegal: puatrCodigoLegalInArg
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
     * @param puthisProductoInArg Mandatory argument 'p_thisProducto'. Oid of 'Productos' class
     */
    public eliminar(
        puthisProductoInArg: any): Promise<void> {
        const request: {
            p_thisproducto_oid: any
        } = {
            p_thisproducto_oid: puthisProductoInArg
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
     * @param puthisProductoInArg Mandatory argument 'p_thisProducto'. Oid of 'Productos' class
     * @param puCodAnexoMatInArg Optional argument 'p_CodAnexoMat'
     * @param puCodAnexoNeoInArg Optional argument 'p_CodAnexoNeo'
     * @param puNITInArg Optional argument 'p_NIT'
     * @param puFechaDocSolicitudInArg Optional argument 'p_FechaDocSolicitud'
     */
    public modificar(
        puthisProductoInArg: any, puCodAnexoMatInArg: number | null, puCodAnexoNeoInArg: number | null, puNITInArg: string | null,
        puFechaDocSolicitudInArg: Date | null): Promise<void> {
        const request: {
            p_thisproducto_oid: any, p_codanexomat: number | null, p_codanexoneo: number | null, p_nit: string | null,
            p_fechadocsolicitud: string | null
        } = {
            p_thisproducto_oid: puthisProductoInArg, p_codanexomat: puCodAnexoMatInArg, p_codanexoneo: puCodAnexoNeoInArg,
            p_nit: puNITInArg, p_fechadocsolicitud: puFechaDocSolicitudInArg ? JsonUtility.date2Json(puFechaDocSolicitudInArg) : ''
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
