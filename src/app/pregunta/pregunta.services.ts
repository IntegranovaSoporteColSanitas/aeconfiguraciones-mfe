import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'Pregunta'
 */
export class PreguntaServices extends AbstractServices {

    private insValorPreguntaSrvName = 'InsValorPregunta';
    private delValorPreguntaSrvName = 'DelValorPregunta';
    private tCREARSrvName = 'TCREAR';
    private tMODIFICARSrvName = 'TMODIFICAR';
    private tELIMINARSrvName = 'TELIMINAR';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Pregunta');
    }

    /**
     * @param oidSeccion Oid of related 'Seccion' instance using the role 'Seccion'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedSeccion(
        oidSeccion: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidSeccion, 'Seccion');
    }

    /**
     * @param oidValores Oid of related 'Valor' instance using the role 'Valores'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedValores(
        oidValores: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidValores, 'Valores');
    }

    /**
     * Call to the service 'InsValorPregunta' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisPreguntaInArg Mandatory argument 'p_thisPregunta'. Oid of 'Pregunta' class
     * @param puevcValorInArg Mandatory argument 'p_evcValor'. Oid of 'Valor' class
     */
    public insValorPregunta(
        puthisPreguntaInArg: any, puevcValorInArg: any): Promise<void> {
        const request: {
            p_thispregunta_oid: any, p_evcvalor_oid: any
        } = {
            p_thispregunta_oid: puthisPreguntaInArg, p_evcvalor_oid: puevcValorInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.insValorPreguntaSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'DelValorPregunta' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisPreguntaInArg Mandatory argument 'p_thisPregunta'. Oid of 'Pregunta' class
     * @param puevcValorInArg Mandatory argument 'p_evcValor'. Oid of 'Valor' class
     */
    public delValorPregunta(
        puthisPreguntaInArg: any, puevcValorInArg: any): Promise<void> {
        const request: {
            p_thispregunta_oid: any, p_evcvalor_json: any
        } = {
            p_thispregunta_oid: puthisPreguntaInArg, p_evcvalor_json: puevcValorInArg ? JSON.stringify(puevcValorInArg) : ''
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.delValorPreguntaSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TCREAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuagrSeccionInArg Mandatory argument 'pt_p_agrSeccion'. Oid of 'Seccion' class
     * @param ptupuatrNumeroInArg Mandatory argument 'pt_p_atrNumero'
     * @param ptupuatrNumOrdenInArg Mandatory argument 'pt_p_atrNumOrden'
     * @param ptupuatrDescripcionInArg Mandatory argument 'pt_p_atrDescripcion'
     * @param ptupuatrValorSNObligaInArg Mandatory argument 'pt_p_atrValorSNObliga'
     * @param ptupuatrObsObligInArg Mandatory argument 'pt_p_atrObsOblig'
     * @param ptupuatrEsNumeroInArg Mandatory argument 'pt_p_atrEsNumero'
     * @param ptupuatrValorMaxInArg Optional argument 'pt_p_atrValorMax'
     * @param ptupuatrValorMinInArg Optional argument 'pt_p_atrValorMin'
     * @param ptupuatrSoloHombresInArg Mandatory argument 'pt_p_atrSoloHombres'
     * @param ptupuatrSoloMujeresInArg Mandatory argument 'pt_p_atrSoloMujeres'
     * @param ptupuatrRespMultipleInArg Mandatory argument 'pt_p_atrRespMultiple'
     * @param ptupuatrSeEnviaAlCOREInArg Mandatory argument 'pt_p_atrSeEnviaAlCORE'
     * @param ptupuatrCondicionEdadInArg Mandatory argument 'pt_p_atrCondicionEdad'
     * @param ptupuatrCondicionEdadAnyosInArg Optional argument 'pt_p_atrCondicionEdadAnyos'
     */
    public tCREAR(
        ptupuagrSeccionInArg: any, ptupuatrNumeroInArg: number, ptupuatrNumOrdenInArg: number, ptupuatrDescripcionInArg: string,
        ptupuatrValorSNObligaInArg: boolean, ptupuatrObsObligInArg: boolean, ptupuatrEsNumeroInArg: boolean,
        ptupuatrValorMaxInArg: number | null, ptupuatrValorMinInArg: number | null, ptupuatrSoloHombresInArg: boolean,
        ptupuatrSoloMujeresInArg: boolean, ptupuatrRespMultipleInArg: boolean, ptupuatrSeEnviaAlCOREInArg: boolean,
        ptupuatrCondicionEdadInArg: number, ptupuatrCondicionEdadAnyosInArg: number | null): Promise<void> {
        const request: {
            pt_p_agrseccion_json: any, pt_p_atrnumero: number, pt_p_atrnumorden: number, pt_p_atrdescripcion: string,
            pt_p_atrvalorsnobliga: boolean, pt_p_atrobsoblig: boolean, pt_p_atresnumero: boolean, pt_p_atrvalormax: number | null,
            pt_p_atrvalormin: number | null, pt_p_atrsolohombres: boolean, pt_p_atrsolomujeres: boolean,
            pt_p_atrrespmultiple: boolean, pt_p_atrseenviaalcore: boolean, pt_p_atrcondicionedad: number,
            pt_p_atrcondicionedadanyos: number | null
        } = {
            pt_p_agrseccion_json: ptupuagrSeccionInArg ? JSON.stringify(ptupuagrSeccionInArg) : '',
            pt_p_atrnumero: ptupuatrNumeroInArg, pt_p_atrnumorden: ptupuatrNumOrdenInArg,
            pt_p_atrdescripcion: ptupuatrDescripcionInArg, pt_p_atrvalorsnobliga: ptupuatrValorSNObligaInArg,
            pt_p_atrobsoblig: ptupuatrObsObligInArg, pt_p_atresnumero: ptupuatrEsNumeroInArg, pt_p_atrvalormax: ptupuatrValorMaxInArg,
            pt_p_atrvalormin: ptupuatrValorMinInArg, pt_p_atrsolohombres: ptupuatrSoloHombresInArg,
            pt_p_atrsolomujeres: ptupuatrSoloMujeresInArg, pt_p_atrrespmultiple: ptupuatrRespMultipleInArg,
            pt_p_atrseenviaalcore: ptupuatrSeEnviaAlCOREInArg, pt_p_atrcondicionedad: ptupuatrCondicionEdadInArg,
            pt_p_atrcondicionedadanyos: ptupuatrCondicionEdadAnyosInArg
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
     * @param puthisPreguntaInArg Mandatory argument 'p_thisPregunta'. Oid of 'Pregunta' class
     * @param ptupuDescripcionInArg Mandatory argument 'pt_p_Descripcion'
     * @param ptupuValorSNObligaInArg Mandatory argument 'pt_p_ValorSNObliga'
     * @param ptupuObsObligInArg Mandatory argument 'pt_p_ObsOblig'
     * @param ptupuEsNumeroInArg Mandatory argument 'pt_p_EsNumero'
     * @param ptupuValorMaxInArg Optional argument 'pt_p_ValorMax'
     * @param ptupuValorMinInArg Optional argument 'pt_p_ValorMin'
     * @param ptupuSoloHombresInArg Mandatory argument 'pt_p_SoloHombres'
     * @param ptupuSoloMujeresInArg Mandatory argument 'pt_p_SoloMujeres'
     * @param ptupuRespMultipleInArg Mandatory argument 'pt_p_RespMultiple'
     * @param ptupuNuevoOrdenInArg Mandatory argument 'pt_p_NuevoOrden'
     * @param ptupuevcSeccionInArg Mandatory argument 'pt_p_evcSeccion'. Oid of 'Seccion' class
     * @param ptupuSeEnviaAlCOREInArg Mandatory argument 'pt_p_SeEnviaAlCORE'
     * @param ptupuCondicionEdadInArg Mandatory argument 'pt_p_CondicionEdad'
     * @param ptupuCondicionEdadAnyosInArg Optional argument 'pt_p_CondicionEdadAnyos'
     */
    public tMODIFICAR(
        puthisPreguntaInArg: any, ptupuDescripcionInArg: string, ptupuValorSNObligaInArg: boolean, ptupuObsObligInArg: boolean,
        ptupuEsNumeroInArg: boolean, ptupuValorMaxInArg: number | null, ptupuValorMinInArg: number | null,
        ptupuSoloHombresInArg: boolean, ptupuSoloMujeresInArg: boolean, ptupuRespMultipleInArg: boolean, ptupuNuevoOrdenInArg: number,
        ptupuevcSeccionInArg: any, ptupuSeEnviaAlCOREInArg: boolean, ptupuCondicionEdadInArg: number,
        ptupuCondicionEdadAnyosInArg: number | null): Promise<void> {
        const request: {
            p_thispregunta_oid: any, pt_p_descripcion: string, pt_p_valorsnobliga: boolean, pt_p_obsoblig: boolean,
            pt_p_esnumero: boolean, pt_p_valormax: number | null, pt_p_valormin: number | null, pt_p_solohombres: boolean,
            pt_p_solomujeres: boolean, pt_p_respmultiple: boolean, pt_p_nuevoorden: number, pt_p_evcseccion_json: any,
            pt_p_seenviaalcore: boolean, pt_p_condicionedad: number, pt_p_condicionedadanyos: number | null
        } = {
            p_thispregunta_oid: puthisPreguntaInArg, pt_p_descripcion: ptupuDescripcionInArg,
            pt_p_valorsnobliga: ptupuValorSNObligaInArg, pt_p_obsoblig: ptupuObsObligInArg, pt_p_esnumero: ptupuEsNumeroInArg,
            pt_p_valormax: ptupuValorMaxInArg, pt_p_valormin: ptupuValorMinInArg, pt_p_solohombres: ptupuSoloHombresInArg,
            pt_p_solomujeres: ptupuSoloMujeresInArg, pt_p_respmultiple: ptupuRespMultipleInArg, pt_p_nuevoorden: ptupuNuevoOrdenInArg,
            pt_p_evcseccion_json: ptupuevcSeccionInArg ? JSON.stringify(ptupuevcSeccionInArg) : '',
            pt_p_seenviaalcore: ptupuSeEnviaAlCOREInArg, pt_p_condicionedad: ptupuCondicionEdadInArg,
            pt_p_condicionedadanyos: ptupuCondicionEdadAnyosInArg
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
     * @param puthisPreguntaInArg Mandatory argument 'p_thisPregunta'. Oid of 'Pregunta' class
     */
    public tELIMINAR(
        puthisPreguntaInArg: any): Promise<void> {
        const request: {
            p_thispregunta_oid: any
        } = {
            p_thispregunta_oid: puthisPreguntaInArg
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
