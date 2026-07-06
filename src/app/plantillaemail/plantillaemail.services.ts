import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * « Service and queries of class 'PlantillaEmail' »
 */
export class PlantillaEmailServices extends AbstractServices {

    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';
    private modificarTextoMensajeSrvName = 'modificarTextoMensaje';
    private dummyModificarSrvName = 'dummyModificar';
    private tNEWSrvName = 'TNEW';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'PlantillaEmail');
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
     * Call to the service 'eliminar' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisPlantillasEmailInArg Mandatory argument 'p_thisPlantillasEmail'. Oid of 'PlantillaEmail' class
     */
    public eliminar(
        puthisPlantillasEmailInArg: any): Promise<void> {
        const request: {
            p_thisplantillasemail_oid: any
        } = {
            p_thisplantillasemail_oid: puthisPlantillasEmailInArg
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
     * @param puthisPlantillasEmailInArg Mandatory argument 'p_thisPlantillasEmail'. Oid of 'PlantillaEmail' class
     * @param puAsuntoInArg Mandatory argument 'p_Asunto'
     * @param puTextoMensajeInArg Mandatory argument 'p_TextoMensaje'
     * @param puEmailConfInArg Optional argument 'p_EmailConf'
     */
    public modificar(
        puthisPlantillasEmailInArg: any, puAsuntoInArg: string, puTextoMensajeInArg: string,
        puEmailConfInArg: string | null): Promise<void> {
        const request: {
            p_thisplantillasemail_oid: any, p_asunto: string, p_textomensaje: string, p_emailconf: string | null
        } = {
            p_thisplantillasemail_oid: puthisPlantillasEmailInArg, p_asunto: puAsuntoInArg, p_textomensaje: puTextoMensajeInArg,
            p_emailconf: puEmailConfInArg
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
     * Call to the service 'modificarTextoMensaje' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisPlantillaEmailInArg Mandatory argument 'p_thisPlantillaEmail'. Oid of 'PlantillaEmail' class
     * @param puTextoMensajeInArg Mandatory argument 'p_TextoMensaje'
     */
    public modificarTextoMensaje(
        puthisPlantillaEmailInArg: any, puTextoMensajeInArg: string): Promise<void> {
        const request: {
            p_thisplantillaemail_oid: any, p_textomensaje: string
        } = {
            p_thisplantillaemail_oid: puthisPlantillaEmailInArg, p_textomensaje: puTextoMensajeInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.modificarTextoMensajeSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'dummyModificar' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisPlantillaEmailInArg Mandatory argument 'p_thisPlantillaEmail'. Oid of 'PlantillaEmail' class
     */
    public dummyModificar(
        puthisPlantillaEmailInArg: any): Promise<void> {
        const request: {
            p_thisplantillaemail_oid: any
        } = {
            p_thisplantillaemail_oid: puthisPlantillaEmailInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.dummyModificarSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TNEW' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuatrCodigoInArg Mandatory argument 'pt_p_atrCodigo'
     * @param ptupuatrDescripcionInArg Mandatory argument 'pt_p_atrDescripcion'
     */
    public tNEW(
        ptupuatrCodigoInArg: number, ptupuatrDescripcionInArg: string):
        Promise<{
            psplantilla: any
        }> {
        const request: {
            pt_p_atrcodigo: number, pt_p_atrdescripcion: string
        } = {
            pt_p_atrcodigo: ptupuatrCodigoInArg, pt_p_atrdescripcion: ptupuatrDescripcionInArg
        };
        return new Promise<{
            psplantilla: any
        }> ((resolve, reject) => {
            this.callService(this.tNEWSrvName, request).then((response: any) => {
                resolve({
                    psplantilla: response.psplantilla
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
