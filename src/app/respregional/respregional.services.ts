import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'RespRegional'
 */
export class RespRegionalServices extends AbstractServices {

    private tMODIFICARSrvName = 'TMODIFICAR';
    private tCREAROMODFIRMASrvName = 'TCREAROMODFIRMA';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'RespRegional');
    }

    /**
     * @param oidRegional Oid of related 'Regional' instance using the role 'Regional'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedRegional(
        oidRegional: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidRegional, 'Regional');
    }

    /**
     * @param oidFirma Oid of related 'Firma' instance using the role 'Firma'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedFirma(
        oidFirma: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidFirma, 'Firma');
    }

    /**
     * Call to the service 'TMODIFICAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisRespRegionalInArg Mandatory argument 'p_thisRespRegional'. Oid of 'RespRegional' class
     * @param ptupuUsuarioLDAPInArg Optional argument 'pt_p_UsuarioLDAP'
     * @param ptupuPrimerNombreInArg Mandatory argument 'pt_p_PrimerNombre'
     * @param ptupuSegundoNombreInArg Optional argument 'pt_p_SegundoNombre'
     * @param ptupuPrimerApellidoInArg Mandatory argument 'pt_p_PrimerApellido'
     * @param ptupuSegundoApellidoInArg Optional argument 'pt_p_SegundoApellido'
     * @param ptupuEmailInArg Optional argument 'pt_p_Email'
     * @param ptupuevcRegionalInArg Optional argument 'pt_p_evcRegional'. Oid of 'Regional' class
     */
    public tMODIFICAR(
        puthisRespRegionalInArg: any, ptupuUsuarioLDAPInArg: string | null, ptupuPrimerNombreInArg: string,
        ptupuSegundoNombreInArg: string | null, ptupuPrimerApellidoInArg: string, ptupuSegundoApellidoInArg: string | null,
        ptupuEmailInArg: string | null, ptupuevcRegionalInArg: any): Promise<void> {
        const request: {
            p_thisrespregional_oid: any, pt_p_usuarioldap: string | null, pt_p_primernombre: string,
            pt_p_segundonombre: string | null, pt_p_primerapellido: string, pt_p_segundoapellido: string | null,
            pt_p_email: string | null, pt_p_evcregional_json: any
        } = {
            p_thisrespregional_oid: puthisRespRegionalInArg, pt_p_usuarioldap: ptupuUsuarioLDAPInArg,
            pt_p_primernombre: ptupuPrimerNombreInArg, pt_p_segundonombre: ptupuSegundoNombreInArg,
            pt_p_primerapellido: ptupuPrimerApellidoInArg, pt_p_segundoapellido: ptupuSegundoApellidoInArg,
            pt_p_email: ptupuEmailInArg, pt_p_evcregional_json: ptupuevcRegionalInArg ? JSON.stringify(ptupuevcRegionalInArg) : ''
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
     * Call to the service 'TCREAROMODFIRMA' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisRespRegionalInArg Mandatory argument 'p_thisRespRegional'. Oid of 'RespRegional' class
     * @param ptupuatrImagenFirmaInArg Optional argument 'pt_p_atrImagenFirma'
     * @param ptupuatrLatitudInArg Optional argument 'pt_p_atrLatitud'
     * @param ptupuatrLongitudInArg Optional argument 'pt_p_atrLongitud'
     */
    public tCREAROMODFIRMA(
        puthisRespRegionalInArg: any, ptupuatrImagenFirmaInArg: string | null, ptupuatrLatitudInArg: string | null,
        ptupuatrLongitudInArg: string | null): Promise<void> {
        const request: {
            p_thisrespregional_oid: any, pt_p_atrimagenfirma: string | null, pt_p_atrlatitud: string | null,
            pt_p_atrlongitud: string | null
        } = {
            p_thisrespregional_oid: puthisRespRegionalInArg, pt_p_atrimagenfirma: ptupuatrImagenFirmaInArg,
            pt_p_atrlatitud: ptupuatrLatitudInArg, pt_p_atrlongitud: ptupuatrLongitudInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tCREAROMODFIRMASrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
