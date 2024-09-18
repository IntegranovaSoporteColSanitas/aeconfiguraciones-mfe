import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'ReportesProcAlm'
 */
export class ReportesProcAlmServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';
    private evGenerarSrvName = 'evGenerar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'ReportesProcAlm');
    }

    /**
     * @param oidFuncionarios Oid of related 'Funcionario' instance using the role 'Funcionarios'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedFuncionarios(
        oidFuncionarios: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidFuncionarios, 'Funcionarios');
    }

    /**
     * @param oidParametros Oid of related 'ParamReporte' instance using the role 'Parametros'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedParametros(
        oidParametros: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidParametros, 'Parametros');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     * @param puatrNombreProcInArg Mandatory argument 'p_atrNombreProc'
     * @param puatrNombreFicheroInArg Mandatory argument 'p_atrNombreFichero'
     */
    public crear(
        puatrDescripcionInArg: string, puatrNombreProcInArg: string, puatrNombreFicheroInArg: string): Promise<void> {
        const request: {
            p_atrdescripcion: string, p_atrnombreproc: string, p_atrnombrefichero: string
        } = {
            p_atrdescripcion: puatrDescripcionInArg, p_atrnombreproc: puatrNombreProcInArg, p_atrnombrefichero: puatrNombreFicheroInArg
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
     * @param puthisReportesProcAlmInArg Mandatory argument 'p_thisReportesProcAlm'. Oid of 'ReportesProcAlm' class
     */
    public eliminar(
        puthisReportesProcAlmInArg: any): Promise<void> {
        const request: {
            p_thisreportesprocalm_oid: any
        } = {
            p_thisreportesprocalm_oid: puthisReportesProcAlmInArg
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
     * @param puthisReportesProcAlmInArg Mandatory argument 'p_thisReportesProcAlm'. Oid of 'ReportesProcAlm' class
     * @param puDescripcionInArg Mandatory argument 'p_Descripcion'
     * @param puNombreProcInArg Mandatory argument 'p_NombreProc'
     * @param puNombreFicheroInArg Mandatory argument 'p_NombreFichero'
     */
    public modificar(
        puthisReportesProcAlmInArg: any, puDescripcionInArg: string, puNombreProcInArg: string,
        puNombreFicheroInArg: string): Promise<void> {
        const request: {
            p_thisreportesprocalm_oid: any, p_descripcion: string, p_nombreproc: string, p_nombrefichero: string
        } = {
            p_thisreportesprocalm_oid: puthisReportesProcAlmInArg, p_descripcion: puDescripcionInArg, p_nombreproc: puNombreProcInArg,
            p_nombrefichero: puNombreFicheroInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.modificarSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'evGenerar' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisReportesProcAlmInArg Mandatory argument 'p_thisReportesProcAlm'. Oid of 'ReportesProcAlm' class
     * @param pValorArgumentosInArg Optional argument 'pValorArgumentos'
     */
    public evGenerar(
        puthisReportesProcAlmInArg: any, pValorArgumentosInArg: string | null):
        Promise<{
            oafichero: string,
            oanombrefichero: string
        }> {
        const request: {
            p_thisreportesprocalm_json: any, pvalorargumentos: string | null
        } = {
            p_thisreportesprocalm_json: puthisReportesProcAlmInArg ? JSON.stringify(puthisReportesProcAlmInArg) : '',
            pvalorargumentos: pValorArgumentosInArg
        };
        return new Promise<{
            oafichero: string,
            oanombrefichero: string
        }> ((resolve, reject) => {
            this.callService(this.evGenerarSrvName, request).then((response: any) => {
                resolve({
                    oafichero: response.oafichero,
                    oanombrefichero: response.oanombrefichero
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
