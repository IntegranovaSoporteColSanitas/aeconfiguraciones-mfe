import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'Seccion'
 */
export class SeccionServices extends AbstractServices {

    private tCREARSrvName = 'TCREAR';
    private tMODIFICARSrvName = 'TMODIFICAR';
    private tELIMINARSrvName = 'TELIMINAR';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Seccion');
    }

    /**
     * @param oidCuestionario Oid of related 'CuestionarioMed' instance using the role 'Cuestionario'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedCuestionario(
        oidCuestionario: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidCuestionario, 'Cuestionario');
    }

    /**
     * @param oidPreguntas Oid of related 'Pregunta' instance using the role 'Preguntas'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPreguntas(
        oidPreguntas: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPreguntas, 'Preguntas');
    }

    /**
     * Call to the service 'TCREAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuagrCuestionarioInArg Mandatory argument 'pt_p_agrCuestionario'. Oid of 'CuestionarioMed' class
     * @param ptupuatrNombreInArg Mandatory argument 'pt_p_atrNombre'
     * @param ptupuatrNumOrdenInArg Mandatory argument 'pt_p_atrNumOrden'
     */
    public tCREAR(
        ptupuagrCuestionarioInArg: any, ptupuatrNombreInArg: string, ptupuatrNumOrdenInArg: number): Promise<void> {
        const request: {
            pt_p_agrcuestionario_json: any, pt_p_atrnombre: string, pt_p_atrnumorden: number
        } = {
            pt_p_agrcuestionario_json: ptupuagrCuestionarioInArg ? JSON.stringify(ptupuagrCuestionarioInArg) : '',
            pt_p_atrnombre: ptupuatrNombreInArg, pt_p_atrnumorden: ptupuatrNumOrdenInArg
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
     * @param puthisSeccionInArg Mandatory argument 'p_thisSeccion'. Oid of 'Seccion' class
     * @param ptupuNombreInArg Mandatory argument 'pt_p_Nombre'
     * @param ptupuNumOrdenInArg Mandatory argument 'pt_p_NumOrden'
     */
    public tMODIFICAR(
        puthisSeccionInArg: any, ptupuNombreInArg: string, ptupuNumOrdenInArg: number): Promise<void> {
        const request: {
            p_thisseccion_oid: any, pt_p_nombre: string, pt_p_numorden: number
        } = {
            p_thisseccion_oid: puthisSeccionInArg, pt_p_nombre: ptupuNombreInArg, pt_p_numorden: ptupuNumOrdenInArg
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
     * @param puthisSeccionInArg Mandatory argument 'p_thisSeccion'. Oid of 'Seccion' class
     */
    public tELIMINAR(
        puthisSeccionInArg: any): Promise<void> {
        const request: {
            p_thisseccion_oid: any
        } = {
            p_thisseccion_oid: puthisSeccionInArg
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
