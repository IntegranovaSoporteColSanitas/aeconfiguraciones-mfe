import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'TipoIdentificacion'
 */
export class TipoIdentificacionServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'TipoIdentificacion');
    }

    /**
     * @param oidInstitucionMatNeo Oid of related 'InstitucionMatNeo' instance using the role 'InstitucionMatNeo'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedInstitucionMatNeo(
        oidInstitucionMatNeo: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidInstitucionMatNeo, 'InstitucionMatNeo');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrCodigoInArg Mandatory argument 'p_atrCodigo'
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     * @param puatrNombreCortoInArg Mandatory argument 'p_atrNombreCorto'
     * @param puatrValidoContratanteInArg Mandatory argument 'p_atrValidoContratante'
     * @param puatrValidoTitularInArg Mandatory argument 'p_atrValidoTitular'
     * @param puatrDiplomaticoInArg Mandatory argument 'p_atrDiplomatico'
     * @param puatrNITInArg Mandatory argument 'p_atrNIT'
     * @param puatrHijoDeInArg Mandatory argument 'p_atrHijoDe'
     * @param puatrRequiereEPSInArg Mandatory argument 'p_atrRequiereEPS'
     * @param puatrMenorSinIdentificarInArg Mandatory argument 'p_atrMenorSinIdentificar'
     * @param puatrEsPasaporteInArg Mandatory argument 'p_atrEsPasaporte'
     * @param puatrVisibleValidadorUsuInArg Mandatory argument 'p_atrVisibleValidadorUsu'
     */
    public crear(
        puatrCodigoInArg: number, puatrDescripcionInArg: string, puatrNombreCortoInArg: string, puatrValidoContratanteInArg: boolean,
        puatrValidoTitularInArg: boolean, puatrDiplomaticoInArg: boolean, puatrNITInArg: boolean, puatrHijoDeInArg: boolean,
        puatrRequiereEPSInArg: boolean, puatrMenorSinIdentificarInArg: boolean, puatrEsPasaporteInArg: boolean,
        puatrVisibleValidadorUsuInArg: boolean): Promise<void> {
        const request: {
            p_atrcodigo: number, p_atrdescripcion: string, p_atrnombrecorto: string, p_atrvalidocontratante: boolean,
            p_atrvalidotitular: boolean, p_atrdiplomatico: boolean, p_atrnit: boolean, p_atrhijode: boolean,
            p_atrrequiereeps: boolean, p_atrmenorsinidentificar: boolean, p_atrespasaporte: boolean, p_atrvisiblevalidadorusu: boolean
        } = {
            p_atrcodigo: puatrCodigoInArg, p_atrdescripcion: puatrDescripcionInArg, p_atrnombrecorto: puatrNombreCortoInArg,
            p_atrvalidocontratante: puatrValidoContratanteInArg, p_atrvalidotitular: puatrValidoTitularInArg,
            p_atrdiplomatico: puatrDiplomaticoInArg, p_atrnit: puatrNITInArg, p_atrhijode: puatrHijoDeInArg,
            p_atrrequiereeps: puatrRequiereEPSInArg, p_atrmenorsinidentificar: puatrMenorSinIdentificarInArg,
            p_atrespasaporte: puatrEsPasaporteInArg, p_atrvisiblevalidadorusu: puatrVisibleValidadorUsuInArg
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
     * @param puthisTipoIdentificacionInArg Mandatory argument 'p_thisTipoIdentificacion'. Oid of 'TipoIdentificacion' class
     */
    public eliminar(
        puthisTipoIdentificacionInArg: any): Promise<void> {
        const request: {
            p_thistipoidentificacion_oid: any
        } = {
            p_thistipoidentificacion_oid: puthisTipoIdentificacionInArg
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
     * @param puthisTipoIdentificacionInArg Mandatory argument 'p_thisTipoIdentificacion'. Oid of 'TipoIdentificacion' class
     * @param puValidoContratanteInArg Mandatory argument 'p_ValidoContratante'
     * @param puValidoTitularInArg Mandatory argument 'p_ValidoTitular'
     * @param puDiplomaticoInArg Mandatory argument 'p_Diplomatico'
     * @param puNITInArg Mandatory argument 'p_NIT'
     * @param puHijoDeInArg Mandatory argument 'p_HijoDe'
     * @param puRequiereEPSInArg Mandatory argument 'p_RequiereEPS'
     * @param puMenorSinIdentificarInArg Mandatory argument 'p_MenorSinIdentificar'
     * @param puEsPasaporteInArg Mandatory argument 'p_EsPasaporte'
     * @param puVisibleValidadorUsuariosInArg Mandatory argument 'p_VisibleValidadorUsuarios'
     */
    public modificar(
        puthisTipoIdentificacionInArg: any, puValidoContratanteInArg: boolean, puValidoTitularInArg: boolean,
        puDiplomaticoInArg: boolean, puNITInArg: boolean, puHijoDeInArg: boolean, puRequiereEPSInArg: boolean,
        puMenorSinIdentificarInArg: boolean, puEsPasaporteInArg: boolean, puVisibleValidadorUsuariosInArg: boolean): Promise<void> {
        const request: {
            p_thistipoidentificacion_oid: any, p_validocontratante: boolean, p_validotitular: boolean, p_diplomatico: boolean,
            p_nit: boolean, p_hijode: boolean, p_requiereeps: boolean, p_menorsinidentificar: boolean, p_espasaporte: boolean,
            p_visiblevalidadorusuarios: boolean
        } = {
            p_thistipoidentificacion_oid: puthisTipoIdentificacionInArg, p_validocontratante: puValidoContratanteInArg,
            p_validotitular: puValidoTitularInArg, p_diplomatico: puDiplomaticoInArg, p_nit: puNITInArg, p_hijode: puHijoDeInArg,
            p_requiereeps: puRequiereEPSInArg, p_menorsinidentificar: puMenorSinIdentificarInArg, p_espasaporte: puEsPasaporteInArg,
            p_visiblevalidadorusuarios: puVisibleValidadorUsuariosInArg
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
