import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * « Service and queries of class 'InstitucionMatNeo' »
 */
export class InstitucionMatNeoServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private tMODIFICARSrvName = 'TMODIFICAR';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'InstitucionMatNeo');
    }

    /**
     * @param oidTipoIdentificacion Oid of related 'TipoIdentificacion' instance using the role 'TipoIdentificacion'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedTipoIdentificacion(
        oidTipoIdentificacion: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidTipoIdentificacion, 'TipoIdentificacion');
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
     * @param oidMunicipio Oid of related 'Municipio' instance using the role 'Municipio'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedMunicipio(
        oidMunicipio: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidMunicipio, 'Municipio');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puagrTarifaInArg Mandatory argument 'p_agrTarifa'. Oid of 'Tarifa' class
     * @param puagrTipoIdentificacionInArg Mandatory argument 'p_agrTipoIdentificacion'. Oid of 'TipoIdentificacion' class
     * @param puagrMunicipioInArg Mandatory argument 'p_agrMunicipio'. Oid of 'Municipio' class
     * @param puatrNumIdentificacionInArg Mandatory argument 'p_atrNumIdentificacion'
     * @param puatrNombreInArg Mandatory argument 'p_atrNombre'
     * @param puatrParaMaternidadInArg Mandatory argument 'p_atrParaMaternidad'
     * @param puatrParaNeonatalInArg Mandatory argument 'p_atrParaNeonatal'
     * @param puatrFechaInicialInArg Mandatory argument 'p_atrFechaInicial'
     * @param puatrFechaFinalInArg Mandatory argument 'p_atrFechaFinal'
     * @param puatrCodigoInArg Mandatory argument 'p_atrCodigo'
     */
    public crear(
        puagrTarifaInArg: any, puagrTipoIdentificacionInArg: any, puagrMunicipioInArg: any, puatrNumIdentificacionInArg: string,
        puatrNombreInArg: string, puatrParaMaternidadInArg: boolean, puatrParaNeonatalInArg: boolean, puatrFechaInicialInArg: Date,
        puatrFechaFinalInArg: Date, puatrCodigoInArg: string): Promise<void> {
        const request: {
            p_agrtarifa_oid: any, p_agrtipoidentificacion_json: any, p_agrmunicipio_oid: any, p_atrnumidentificacion: string,
            p_atrnombre: string, p_atrparamaternidad: boolean, p_atrparaneonatal: boolean, p_atrfechainicial: string,
            p_atrfechafinal: string, p_atrcodigo: string
        } = {
            p_agrtarifa_oid: puagrTarifaInArg,
            p_agrtipoidentificacion_json: puagrTipoIdentificacionInArg ? JSON.stringify(puagrTipoIdentificacionInArg) : '',
            p_agrmunicipio_oid: puagrMunicipioInArg, p_atrnumidentificacion: puatrNumIdentificacionInArg,
            p_atrnombre: puatrNombreInArg, p_atrparamaternidad: puatrParaMaternidadInArg, p_atrparaneonatal: puatrParaNeonatalInArg,
            p_atrfechainicial: puatrFechaInicialInArg ? JsonUtility.date2Json(puatrFechaInicialInArg) : '',
            p_atrfechafinal: puatrFechaFinalInArg ? JsonUtility.date2Json(puatrFechaFinalInArg) : '', p_atrcodigo: puatrCodigoInArg
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
     * @param puthisInstitucionMatNeoInArg Mandatory argument 'p_thisInstitucionMatNeo'. Oid of 'InstitucionMatNeo' class
     */
    public eliminar(
        puthisInstitucionMatNeoInArg: any): Promise<void> {
        const request: {
            p_thisinstitucionmatneo_oid: any
        } = {
            p_thisinstitucionmatneo_oid: puthisInstitucionMatNeoInArg
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
     * Call to the service 'TMODIFICAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisInstitucionMatNeoInArg Mandatory argument 'p_thisInstitucionMatNeo'. Oid of 'InstitucionMatNeo' class
     * @param ptupuevcMunicipioInArg Mandatory argument 'pt_p_evcMunicipio'. Oid of 'Municipio' class
     * @param ptupuevcTarifaInArg Mandatory argument 'pt_p_evcTarifa'. Oid of 'Tarifa' class
     * @param ptupuevcTipoIdentificacionInArg Mandatory argument 'pt_p_evcTipoIdentificacion'. Oid of 'TipoIdentificacion' class
     * @param ptupuNumIdentificacionInArg Mandatory argument 'pt_p_NumIdentificacion'
     * @param ptupuNombreInArg Mandatory argument 'pt_p_Nombre'
     * @param ptupuParaMaternidadInArg Mandatory argument 'pt_p_ParaMaternidad'
     * @param ptupuParaNeonatalInArg Mandatory argument 'pt_p_ParaNeonatal'
     * @param ptupuFechaInicialInArg Mandatory argument 'pt_p_FechaInicial'
     * @param ptupuFechaFinalInArg Mandatory argument 'pt_p_FechaFinal'
     */
    public tMODIFICAR(
        puthisInstitucionMatNeoInArg: any, ptupuevcMunicipioInArg: any, ptupuevcTarifaInArg: any,
        ptupuevcTipoIdentificacionInArg: any, ptupuNumIdentificacionInArg: string, ptupuNombreInArg: string,
        ptupuParaMaternidadInArg: boolean, ptupuParaNeonatalInArg: boolean, ptupuFechaInicialInArg: Date,
        ptupuFechaFinalInArg: Date): Promise<void> {
        const request: {
            p_thisinstitucionmatneo_oid: any, pt_p_evcmunicipio_oid: any, pt_p_evctarifa_oid: any,
            pt_p_evctipoidentificacion_json: any, pt_p_numidentificacion: string, pt_p_nombre: string, pt_p_paramaternidad: boolean,
            pt_p_paraneonatal: boolean, pt_p_fechainicial: string, pt_p_fechafinal: string
        } = {
            p_thisinstitucionmatneo_oid: puthisInstitucionMatNeoInArg, pt_p_evcmunicipio_oid: ptupuevcMunicipioInArg,
            pt_p_evctarifa_oid: ptupuevcTarifaInArg,
            pt_p_evctipoidentificacion_json: ptupuevcTipoIdentificacionInArg ? JSON.stringify(ptupuevcTipoIdentificacionInArg) : '',
            pt_p_numidentificacion: ptupuNumIdentificacionInArg, pt_p_nombre: ptupuNombreInArg,
            pt_p_paramaternidad: ptupuParaMaternidadInArg, pt_p_paraneonatal: ptupuParaNeonatalInArg,
            pt_p_fechainicial: ptupuFechaInicialInArg ? JsonUtility.date2Json(ptupuFechaInicialInArg) : '',
            pt_p_fechafinal: ptupuFechaFinalInArg ? JsonUtility.date2Json(ptupuFechaFinalInArg) : ''
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tMODIFICARSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
