import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'Persona'
 */
export class PersonaServices extends AbstractServices {


    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Persona');
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
     * @param oidDepartamentoNacimiento Oid of related 'Departamento' instance using the role 'DepartamentoNacimiento'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDepartamentoNacimiento(
        oidDepartamentoNacimiento: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDepartamentoNacimiento, 'DepartamentoNacimiento');
    }

    /**
     * @param oidMunicipioNacimiento Oid of related 'Municipio' instance using the role 'MunicipioNacimiento'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedMunicipioNacimiento(
        oidMunicipioNacimiento: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidMunicipioNacimiento, 'MunicipioNacimiento');
    }

    /**
     * @param oidEstadoCivil Oid of related 'EstadoCivil' instance using the role 'EstadoCivil'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedEstadoCivil(
        oidEstadoCivil: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidEstadoCivil, 'EstadoCivil');
    }

    /**
     * @param oidEstadoPersona Oid of related 'EstadoPersona' instance using the role 'EstadoPersona'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedEstadoPersona(
        oidEstadoPersona: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidEstadoPersona, 'EstadoPersona');
    }
}
