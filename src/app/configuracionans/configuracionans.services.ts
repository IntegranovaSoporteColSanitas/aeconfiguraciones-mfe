import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'ConfiguracionANS'
 */
export class ConfiguracionANSServices extends AbstractServices {

    private tCREARSrvName = 'TCREAR';
    private tMODIFICARSrvName = 'TMODIFICAR';
    private tELIMINARSrvName = 'TELIMINAR';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'ConfiguracionANS');
    }

    /**
     * @param oidDominio Oid of related 'Dominio' instance using the role 'Dominio'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDominio(
        oidDominio: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDominio, 'Dominio');
    }

    /**
     * @param oidNovedad Oid of related 'Novedad' instance using the role 'Novedad'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedNovedad(
        oidNovedad: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidNovedad, 'Novedad');
    }

    /**
     * @param oidCausal Oid of related 'Causal' instance using the role 'Causal'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedCausal(
        oidCausal: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidCausal, 'Causal');
    }

    /**
     * @param oidLogConfiguracionANS Oid of related 'LogConfiguracionANS' instance using the role 'LogConfiguracionANS'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedLogConfiguracionANS(
        oidLogConfiguracionANS: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidLogConfiguracionANS, 'LogConfiguracionANS');
    }

    /**
     * Call to the service 'TCREAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuagrDominioInArg Mandatory argument 'pt_p_agrDominio'. Oid of 'Dominio' class
     * @param ptupuagrNovedadInArg Optional argument 'pt_p_agrNovedad'. Oid of 'Novedad' class
     * @param ptupuagrCausalInArg Optional argument 'pt_p_agrCausal'. Oid of 'Causal' class
     * @param ptupuatrTramiteInArg Mandatory argument 'pt_p_atrTramite'
     * @param ptupuatrANSAreaMedicaInArg Mandatory argument 'pt_p_atrANSAreaMedica'
     * @param ptupuatrANSAfiliacionesInArg Mandatory argument 'pt_p_atrANSAfiliaciones'
     * @param ptupuatrHabilLunesInArg Mandatory argument 'pt_p_atrHabilLunes'
     * @param ptupuatrHabilMartesInArg Mandatory argument 'pt_p_atrHabilMartes'
     * @param ptupuatrHabilMiercolesInArg Mandatory argument 'pt_p_atrHabilMiercoles'
     * @param ptupuatrHabilJuevesInArg Mandatory argument 'pt_p_atrHabilJueves'
     * @param ptupuatrHabilViernesInArg Mandatory argument 'pt_p_atrHabilViernes'
     * @param ptupuatrHabilSabadoInArg Mandatory argument 'pt_p_atrHabilSabado'
     * @param ptupuatrHabilDomingoInArg Mandatory argument 'pt_p_atrHabilDomingo'
     */
    public tCREAR(
        ptupuagrDominioInArg: any, ptupuagrNovedadInArg: any, ptupuagrCausalInArg: any, ptupuatrTramiteInArg: number,
        ptupuatrANSAreaMedicaInArg: number, ptupuatrANSAfiliacionesInArg: number, ptupuatrHabilLunesInArg: boolean,
        ptupuatrHabilMartesInArg: boolean, ptupuatrHabilMiercolesInArg: boolean, ptupuatrHabilJuevesInArg: boolean,
        ptupuatrHabilViernesInArg: boolean, ptupuatrHabilSabadoInArg: boolean, ptupuatrHabilDomingoInArg: boolean): Promise<void> {
        const request: {
            pt_p_agrdominio_oid: any, pt_p_agrnovedad_json: any, pt_p_agrcausal_json: any, pt_p_atrtramite: number,
            pt_p_atransareamedica: number, pt_p_atransafiliaciones: number, pt_p_atrhabillunes: boolean, pt_p_atrhabilmartes: boolean,
            pt_p_atrhabilmiercoles: boolean, pt_p_atrhabiljueves: boolean, pt_p_atrhabilviernes: boolean,
            pt_p_atrhabilsabado: boolean, pt_p_atrhabildomingo: boolean
        } = {
            pt_p_agrdominio_oid: ptupuagrDominioInArg,
            pt_p_agrnovedad_json: ptupuagrNovedadInArg ? JSON.stringify(ptupuagrNovedadInArg) : '',
            pt_p_agrcausal_json: ptupuagrCausalInArg ? JSON.stringify(ptupuagrCausalInArg) : '',
            pt_p_atrtramite: ptupuatrTramiteInArg, pt_p_atransareamedica: ptupuatrANSAreaMedicaInArg,
            pt_p_atransafiliaciones: ptupuatrANSAfiliacionesInArg, pt_p_atrhabillunes: ptupuatrHabilLunesInArg,
            pt_p_atrhabilmartes: ptupuatrHabilMartesInArg, pt_p_atrhabilmiercoles: ptupuatrHabilMiercolesInArg,
            pt_p_atrhabiljueves: ptupuatrHabilJuevesInArg, pt_p_atrhabilviernes: ptupuatrHabilViernesInArg,
            pt_p_atrhabilsabado: ptupuatrHabilSabadoInArg, pt_p_atrhabildomingo: ptupuatrHabilDomingoInArg
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
     * @param puthisConfiguracionANSInArg Mandatory argument 'p_thisConfiguracionANS'. Oid of 'ConfiguracionANS' class
     * @param ptupuANSAreaMedicaInArg Mandatory argument 'pt_p_ANSAreaMedica'
     * @param ptupuHabilLunesInArg Mandatory argument 'pt_p_HabilLunes'
     * @param ptupuHabilMartesInArg Mandatory argument 'pt_p_HabilMartes'
     * @param ptupuHabilMiercolesInArg Mandatory argument 'pt_p_HabilMiercoles'
     * @param ptupuHabilJuevesInArg Mandatory argument 'pt_p_HabilJueves'
     * @param ptupuHabilViernesInArg Mandatory argument 'pt_p_HabilViernes'
     * @param ptupuHabilSabadoInArg Mandatory argument 'pt_p_HabilSabado'
     * @param ptupuHabilDomingoInArg Mandatory argument 'pt_p_HabilDomingo'
     * @param ptupuANSAfiliacionesInArg Mandatory argument 'pt_p_ANSAfiliaciones'
     */
    public tMODIFICAR(
        puthisConfiguracionANSInArg: any, ptupuANSAreaMedicaInArg: number, ptupuHabilLunesInArg: boolean,
        ptupuHabilMartesInArg: boolean, ptupuHabilMiercolesInArg: boolean, ptupuHabilJuevesInArg: boolean,
        ptupuHabilViernesInArg: boolean, ptupuHabilSabadoInArg: boolean, ptupuHabilDomingoInArg: boolean,
        ptupuANSAfiliacionesInArg: number): Promise<void> {
        const request: {
            p_thisconfiguracionans_oid: any, pt_p_ansareamedica: number, pt_p_habillunes: boolean, pt_p_habilmartes: boolean,
            pt_p_habilmiercoles: boolean, pt_p_habiljueves: boolean, pt_p_habilviernes: boolean, pt_p_habilsabado: boolean,
            pt_p_habildomingo: boolean, pt_p_ansafiliaciones: number
        } = {
            p_thisconfiguracionans_oid: puthisConfiguracionANSInArg, pt_p_ansareamedica: ptupuANSAreaMedicaInArg,
            pt_p_habillunes: ptupuHabilLunesInArg, pt_p_habilmartes: ptupuHabilMartesInArg,
            pt_p_habilmiercoles: ptupuHabilMiercolesInArg, pt_p_habiljueves: ptupuHabilJuevesInArg,
            pt_p_habilviernes: ptupuHabilViernesInArg, pt_p_habilsabado: ptupuHabilSabadoInArg,
            pt_p_habildomingo: ptupuHabilDomingoInArg, pt_p_ansafiliaciones: ptupuANSAfiliacionesInArg
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
     * @param puthisConfiguracionANSInArg Mandatory argument 'p_thisConfiguracionANS'. Oid of 'ConfiguracionANS' class
     */
    public tELIMINAR(
        puthisConfiguracionANSInArg: any): Promise<void> {
        const request: {
            p_thisconfiguracionans_oid: any
        } = {
            p_thisconfiguracionans_oid: puthisConfiguracionANSInArg
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
