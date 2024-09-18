import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'Novedad'
 */
export class NovedadServices extends AbstractServices {

    private modificarSrvName = 'modificar';
    private delNovedadSrvName = 'DelNovedad';
    private tELIMINARSrvName = 'TELIMINAR';
    private tCREARSrvName = 'TCREAR';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Novedad');
    }

    /**
     * Call to the filter 'F_Novedad' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfTipoVar Variable vfTipo
     * @param vfNombreVar Variable vfNombre
     */
    public queryByFilterFuNovedad(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfTipoVar: any, vfNombreVar: string | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_Novedad');
        this.util.addFilterVariable(filter, 'vftipo', vfTipoVar);
        this.util.addFilterVariable(filter, 'vfnombre', vfNombreVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * @param oidTipoNovedad Oid of related 'TipoNovedad' instance using the role 'TipoNovedad'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedTipoNovedad(
        oidTipoNovedad: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidTipoNovedad, 'TipoNovedad');
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
     * @param oidCausales Oid of related 'Causal' instance using the role 'Causales'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedCausales(
        oidCausales: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidCausales, 'Causales');
    }

    /**
     * @param oidCausasExclusion Oid of related 'CausaExclusion' instance using the role 'CausasExclusion'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedCausasExclusion(
        oidCausasExclusion: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidCausasExclusion, 'CausasExclusion');
    }

    /**
     * @param oidConfiguracionesANS Oid of related 'ConfiguracionANS' instance using the role 'ConfiguracionesANS'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedConfiguracionesANS(
        oidConfiguracionesANS: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidConfiguracionesANS, 'ConfiguracionesANS');
    }

    /**
     * Call to the service 'modificar' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisNovedadInArg Mandatory argument 'p_thisNovedad'. Oid of 'Novedad' class
     * @param puDescripcionInArg Mandatory argument 'p_Descripcion'
     * @param puCodigoLegalInArg Mandatory argument 'p_CodigoLegal'
     * @param puReqDocPersonaInArg Mandatory argument 'p_ReqDocPersona'
     * @param puReqDocSolicitudInArg Mandatory argument 'p_ReqDocSolicitud'
     * @param puVariasFamiliasInArg Mandatory argument 'p_VariasFamilias'
     * @param puNombreInArg Mandatory argument 'p_Nombre'
     * @param puMinValorMesesInArg Optional argument 'p_MinValorMeses'
     * @param puMaxValorMesesInArg Optional argument 'p_MaxValorMeses'
     */
    public modificar(
        puthisNovedadInArg: any, puDescripcionInArg: string, puCodigoLegalInArg: string, puReqDocPersonaInArg: boolean,
        puReqDocSolicitudInArg: boolean, puVariasFamiliasInArg: boolean, puNombreInArg: string, puMinValorMesesInArg: number | null,
        puMaxValorMesesInArg: number | null): Promise<void> {
        const request: {
            p_thisnovedad_oid: any, p_descripcion: string, p_codigolegal: string, p_reqdocpersona: boolean,
            p_reqdocsolicitud: boolean, p_variasfamilias: boolean, p_nombre: string, p_minvalormeses: number | null,
            p_maxvalormeses: number | null
        } = {
            p_thisnovedad_oid: puthisNovedadInArg, p_descripcion: puDescripcionInArg, p_codigolegal: puCodigoLegalInArg,
            p_reqdocpersona: puReqDocPersonaInArg, p_reqdocsolicitud: puReqDocSolicitudInArg, p_variasfamilias: puVariasFamiliasInArg,
            p_nombre: puNombreInArg, p_minvalormeses: puMinValorMesesInArg, p_maxvalormeses: puMaxValorMesesInArg
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
     * Call to the service 'DelNovedad' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisNovedadInArg Mandatory argument 'p_thisNovedad'. Oid of 'Novedad' class
     * @param puevcDominioInArg Mandatory argument 'p_evcDominio'. Oid of 'Dominio' class
     */
    public delNovedad(
        puthisNovedadInArg: any, puevcDominioInArg: any): Promise<void> {
        const request: {
            p_thisnovedad_oid: any, p_evcdominio_oid: any
        } = {
            p_thisnovedad_oid: puthisNovedadInArg, p_evcdominio_oid: puevcDominioInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.delNovedadSrvName, request).then((response: any) => {
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
     * @param puthisNovedadInArg Mandatory argument 'p_thisNovedad'. Oid of 'Novedad' class
     */
    public tELIMINAR(
        puthisNovedadInArg: any): Promise<void> {
        const request: {
            p_thisnovedad_oid: any
        } = {
            p_thisnovedad_oid: puthisNovedadInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tELIMINARSrvName, request).then((response: any) => {
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
     * @param ptupuagrTipoNovedadInArg Mandatory argument 'pt_p_agrTipoNovedad'. Oid of 'TipoNovedad' class
     * @param ptupuatrNombreInArg Mandatory argument 'pt_p_atrNombre'
     * @param ptupuatrDescripcionInArg Mandatory argument 'pt_p_atrDescripcion'
     * @param ptupuatrCodigoLegalInArg Mandatory argument 'pt_p_atrCodigoLegal'
     * @param ptupuatrReqDocPersonaInArg Mandatory argument 'pt_p_atrReqDocPersona'
     * @param ptupuatrReqDocSolicitudInArg Mandatory argument 'pt_p_atrReqDocSolicitud'
     * @param ptupuatrVariasFamiliasInArg Mandatory argument 'pt_p_atrVariasFamilias'
     * @param ptAliasParaContratoInArg Optional argument 'ptAliasParaContrato'
     * @param ptAliasParaTitularInArg Optional argument 'ptAliasParaTitular'
     * @param ptAliasParaUsuarioInArg Optional argument 'ptAliasParaUsuario'
     * @param ptupuatrMinValorMesesInArg Optional argument 'pt_p_atrMinValorMeses'
     * @param ptupuatrMaxValorMesesInArg Optional argument 'pt_p_atrMaxValorMeses'
     * @param ptAliasInArg Mandatory argument 'ptAlias'
     */
    public tCREAR(
        ptupuagrTipoNovedadInArg: any, ptupuatrNombreInArg: string, ptupuatrDescripcionInArg: string,
        ptupuatrCodigoLegalInArg: string, ptupuatrReqDocPersonaInArg: boolean, ptupuatrReqDocSolicitudInArg: boolean,
        ptupuatrVariasFamiliasInArg: boolean, ptAliasParaContratoInArg: string | null, ptAliasParaTitularInArg: string | null,
        ptAliasParaUsuarioInArg: string | null, ptupuatrMinValorMesesInArg: number | null, ptupuatrMaxValorMesesInArg: number | null,
        ptAliasInArg: string): Promise<void> {
        const request: {
            pt_p_agrtiponovedad_json: any, pt_p_atrnombre: string, pt_p_atrdescripcion: string, pt_p_atrcodigolegal: string,
            pt_p_atrreqdocpersona: boolean, pt_p_atrreqdocsolicitud: boolean, pt_p_atrvariasfamilias: boolean,
            ptaliasparacontrato: string | null, ptaliasparatitular: string | null, ptaliasparausuario: string | null,
            pt_p_atrminvalormeses: number | null, pt_p_atrmaxvalormeses: number | null, ptalias: string
        } = {
            pt_p_agrtiponovedad_json: ptupuagrTipoNovedadInArg ? JSON.stringify(ptupuagrTipoNovedadInArg) : '',
            pt_p_atrnombre: ptupuatrNombreInArg, pt_p_atrdescripcion: ptupuatrDescripcionInArg,
            pt_p_atrcodigolegal: ptupuatrCodigoLegalInArg, pt_p_atrreqdocpersona: ptupuatrReqDocPersonaInArg,
            pt_p_atrreqdocsolicitud: ptupuatrReqDocSolicitudInArg, pt_p_atrvariasfamilias: ptupuatrVariasFamiliasInArg,
            ptaliasparacontrato: ptAliasParaContratoInArg, ptaliasparatitular: ptAliasParaTitularInArg,
            ptaliasparausuario: ptAliasParaUsuarioInArg, pt_p_atrminvalormeses: ptupuatrMinValorMesesInArg,
            pt_p_atrmaxvalormeses: ptupuatrMaxValorMesesInArg, ptalias: ptAliasInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tCREARSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
