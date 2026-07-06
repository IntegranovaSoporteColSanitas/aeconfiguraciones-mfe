import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * « Service and queries of class 'Municipio' »
 */
export class MunicipioServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Municipio');
    }

    /**
     * Call to the filter 'F_MunicipioVarios' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vouDepartamentoVar Variable vo_Departamento
     * @param vuDescripcionVar Variable v_Descripcion
     * @param vuEsValidoEPSVar Variable v_EsValidoEPS
     * @param vuAplicaIVAVar Variable v_AplicaIVA
     */
    public queryByFilterFuMunicipioVarios(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vouDepartamentoVar: any, vuDescripcionVar: string | null, vuEsValidoEPSVar: boolean | null,
        vuAplicaIVAVar: boolean | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_MunicipioVarios');
        this.util.addFilterVariable(filter, 'vo_departamento', vouDepartamentoVar);
        this.util.addFilterVariable(filter, 'v_descripcion', vuDescripcionVar);
        this.util.addFilterVariable(filter, 'v_esvalidoeps', vuEsValidoEPSVar);
        this.util.addFilterVariable(filter, 'v_aplicaiva', vuAplicaIVAVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * @param oidDepartamento Oid of related 'Departamento' instance using the role 'Departamento'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDepartamento(
        oidDepartamento: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDepartamento, 'Departamento');
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
     * @param puagrDepartamentoInArg Optional argument 'p_agrDepartamento'. Oid of 'Departamento' class
     * @param puatrCodigoInArg Mandatory argument 'p_atrCodigo'
     * @param puatrDescripcionInArg Mandatory argument 'p_atrDescripcion'
     * @param puatrCodigoLegalInArg Mandatory argument 'p_atrCodigoLegal'
     * @param puatrEsValidoEPSInArg Mandatory argument 'p_atrEsValidoEPS'
     * @param puatrAplicaIVAInArg Mandatory argument 'p_atrAplicaIVA'
     */
    public crear(
        puagrDepartamentoInArg: any, puatrCodigoInArg: number, puatrDescripcionInArg: string, puatrCodigoLegalInArg: string,
        puatrEsValidoEPSInArg: boolean, puatrAplicaIVAInArg: boolean): Promise<void> {
        const request: {
            p_agrdepartamento_oid: any, p_atrcodigo: number, p_atrdescripcion: string, p_atrcodigolegal: string,
            p_atresvalidoeps: boolean, p_atraplicaiva: boolean
        } = {
            p_agrdepartamento_oid: puagrDepartamentoInArg, p_atrcodigo: puatrCodigoInArg, p_atrdescripcion: puatrDescripcionInArg,
            p_atrcodigolegal: puatrCodigoLegalInArg, p_atresvalidoeps: puatrEsValidoEPSInArg, p_atraplicaiva: puatrAplicaIVAInArg
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
     * @param puthisMunicipioInArg Mandatory argument 'p_thisMunicipio'. Oid of 'Municipio' class
     */
    public eliminar(
        puthisMunicipioInArg: any): Promise<void> {
        const request: {
            p_thismunicipio_oid: any
        } = {
            p_thismunicipio_oid: puthisMunicipioInArg
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
     * @param puthisMunicipioInArg Mandatory argument 'p_thisMunicipio'. Oid of 'Municipio' class
     * @param puAplicaIVAInArg Mandatory argument 'p_AplicaIVA'
     */
    public modificar(
        puthisMunicipioInArg: any, puAplicaIVAInArg: boolean): Promise<void> {
        const request: {
            p_thismunicipio_oid: any, p_aplicaiva: boolean
        } = {
            p_thismunicipio_oid: puthisMunicipioInArg, p_aplicaiva: puAplicaIVAInArg
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
