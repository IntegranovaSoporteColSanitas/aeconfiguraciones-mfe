import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'PersonaC'
 */
export class PersonaCServices extends AbstractServices {


    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'PersonaC');
    }

    /**
     * @param oidTipoInstitucionC Oid of related 'TipoInstitucionC' instance using the role 'TipoInstitucionC'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedTipoInstitucionC(
        oidTipoInstitucionC: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidTipoInstitucionC, 'TipoInstitucionC');
    }

    /**
     * @param oidTipoEntidadC Oid of related 'TipoEntidadC' instance using the role 'TipoEntidadC'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedTipoEntidadC(
        oidTipoEntidadC: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidTipoEntidadC, 'TipoEntidadC');
    }

    /**
     * @param oidEstadoCivilC Oid of related 'EstadoCivil' instance using the role 'EstadoCivilC'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedEstadoCivilC(
        oidEstadoCivilC: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidEstadoCivilC, 'EstadoCivilC');
    }

    /**
     * @param oidEstadoPersonaC Oid of related 'EstadoPersona' instance using the role 'EstadoPersonaC'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedEstadoPersonaC(
        oidEstadoPersonaC: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidEstadoPersonaC, 'EstadoPersonaC');
    }

    /**
     * @param oidTipoIdentificacionC Oid of related 'TipoIdentificacion' instance using the role 'TipoIdentificacionC'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedTipoIdentificacionC(
        oidTipoIdentificacionC: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidTipoIdentificacionC, 'TipoIdentificacionC');
    }

    /**
     * @param oidMunicipioCNac Oid of related 'Municipio' instance using the role 'MunicipioCNac'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedMunicipioCNac(
        oidMunicipioCNac: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidMunicipioCNac, 'MunicipioCNac');
    }

    /**
     * @param oidDepartamentoCNac Oid of related 'Departamento' instance using the role 'DepartamentoCNac'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDepartamentoCNac(
        oidDepartamentoCNac: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDepartamentoCNac, 'DepartamentoCNac');
    }
}
