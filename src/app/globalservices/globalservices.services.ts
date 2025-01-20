import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Global services
 */
export class GlobalServicesServices extends AbstractServices {

    private tGSINCPRODUCTOSSrvName = 'TGSINCPRODUCTOS';
    private tGSINCPLANESSrvName = 'TGSINCPLANES';
    private tGSINCPARENTESCOSSrvName = 'TGSINCPARENTESCOS';
    private tGSINCPERIODICIDADESSrvName = 'TGSINCPERIODICIDADES';
    private tGSINCESTADOSCONTRATOSrvName = 'TGSINCESTADOSCONTRATO';
    private tGSINCESTADOSBENEFICIARIOSrvName = 'TGSINCESTADOSBENEFICIARIO';
    private tGSINCREGIONALESSrvName = 'TGSINCREGIONALES';
    private tGSINCSUCURSALESSrvName = 'TGSINCSUCURSALES';
    private oGSINCGRUPOSASOCIADOSSrvName = 'OGSINCGRUPOSASOCIADOS';
    private tGSINCESTADOSCIVILESSrvName = 'TGSINCESTADOSCIVILES';
    private tGSINCDEPARTAMENTOSSrvName = 'TGSINCDEPARTAMENTOS';
    private tGSINCOMPANIASSrvName = 'TGSINCOMPANIAS';
    private oGSINCMUNICIPIOSSrvName = 'OGSINCMUNICIPIOS';
    private tGSINCTIPOSDIRECCIONSrvName = 'TGSINCTIPOSDIRECCION';
    private tGSINCESTADOSPERSONASrvName = 'TGSINCESTADOSPERSONA';
    private tGSINCFORMASPAGOSrvName = 'TGSINCFORMASPAGO';
    private tGSINCTIPOSIDENTIFICACIONSrvName = 'TGSINCTIPOSIDENTIFICACION';
    private tGSINCEPSSSrvName = 'TGSINCEPSS';
    private tGSINCPAISESSrvName = 'TGSINCPAISES';
    private tGSINCENTIDADESFINSrvName = 'TGSINCENTIDADESFIN';
    private tGSINCTIPOSDEENTIDADSrvName = 'TGSINCTIPOSDEENTIDAD';
    private tGSINCTIPOSINSTITUCIONSrvName = 'TGSINCTIPOSINSTITUCION';
    private tGSINCTIPOSSUCURSALSrvName = 'TGSINCTIPOSSUCURSAL';
    private tGCREARTARIFASrvName = 'TGCREARTARIFA';
    private tGELIMINARTARIFASrvName = 'TGELIMINARTARIFA';
    private tdelcontsindocsolSrvName = 'tdelcontsindocsol';
    private tGCREARCOMBOSrvName = 'TGCREARCOMBO';
    private tGEDITARCOMBOSrvName = 'TGEDITARCOMBO';
    private tDELCOMBOSrvName = 'TDELCOMBO';
    private tGADDPLANTREPSrvName = 'TGADDPLANTREP';
    private tGEDITPLANTREPSrvName = 'TGEDITPLANTREP';
    private tGCREARFINIEPSSrvName = 'TGCREARFINIEPS';
    private tGMODFINIEPSSrvName = 'TGMODFINIEPS';
    private tGCREARCONTEXENTOSrvName = 'TGCREARCONTEXENTO';
    private tGDELCONTRATOEXENTOSrvName = 'TGDELCONTRATOEXENTO';
    private tGENREPALMSrvName = 'TGENREPALM';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'GlobalServices');
    }

    /**
     * Call to the service 'TGSINCPRODUCTOS' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCPRODUCTOS(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCPRODUCTOSSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSINCPLANES' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCPLANES(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCPLANESSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSINCPARENTESCOS' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCPARENTESCOS(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCPARENTESCOSSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSINCPERIODICIDADES' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCPERIODICIDADES(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCPERIODICIDADESSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSINCESTADOSCONTRATO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCESTADOSCONTRATO(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCESTADOSCONTRATOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSINCESTADOSBENEFICIARIO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCESTADOSBENEFICIARIO(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCESTADOSBENEFICIARIOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSINCREGIONALES' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCREGIONALES(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCREGIONALESSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSINCSUCURSALES' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCSUCURSALES(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCSUCURSALESSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'OGSINCGRUPOSASOCIADOS' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public oGSINCGRUPOSASOCIADOS(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.oGSINCGRUPOSASOCIADOSSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSINCESTADOSCIVILES' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCESTADOSCIVILES(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCESTADOSCIVILESSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSINCDEPARTAMENTOS' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCDEPARTAMENTOS(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCDEPARTAMENTOSSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSINCOMPANIAS' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCOMPANIAS(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCOMPANIASSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'OGSINCMUNICIPIOS' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public oGSINCMUNICIPIOS(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.oGSINCMUNICIPIOSSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSINCTIPOSDIRECCION' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCTIPOSDIRECCION(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCTIPOSDIRECCIONSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSINCESTADOSPERSONA' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCESTADOSPERSONA(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCESTADOSPERSONASrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSINCFORMASPAGO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCFORMASPAGO(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCFORMASPAGOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSINCTIPOSIDENTIFICACION' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCTIPOSIDENTIFICACION(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCTIPOSIDENTIFICACIONSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSINCEPSS' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCEPSS(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCEPSSSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSINCPAISES' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCPAISES(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCPAISESSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSINCENTIDADESFIN' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCENTIDADESFIN(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCENTIDADESFINSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSINCTIPOSDEENTIDAD' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCTIPOSDEENTIDAD(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCTIPOSDEENTIDADSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSINCTIPOSINSTITUCION' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCTIPOSINSTITUCION(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCTIPOSINSTITUCIONSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGSINCTIPOSSUCURSAL' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public tGSINCTIPOSSUCURSAL(
        ): Promise<ErrorInformation | void> {
        const request = {};
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGSINCTIPOSSUCURSALSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGCREARTARIFA' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param pProductoInArg Mandatory argument 'pProducto'. Oid of 'Productos' class
     * @param pPlanInArg Mandatory argument 'pPlan'. Oid of 'Planes' class
     * @param pTipoContratoInArg Mandatory argument 'pTipoContrato'
     * @param pCodigoInArg Mandatory argument 'pCodigo'
     */
    public tGCREARTARIFA(
        pProductoInArg: any, pPlanInArg: any, pTipoContratoInArg: number, pCodigoInArg: string): Promise<ErrorInformation | void> {
        const request: {
            pproducto_json: any, pplan_json: any, ptipocontrato: number, pcodigo: string
        } = {
            pproducto_json: pProductoInArg ? JSON.stringify(pProductoInArg) : '',
            pplan_json: pPlanInArg ? JSON.stringify(pPlanInArg) : '', ptipocontrato: pTipoContratoInArg, pcodigo: pCodigoInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGCREARTARIFASrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGELIMINARTARIFA' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param pTarifaInArg Mandatory argument 'pTarifa'. Oid of 'Tarifa' class
     */
    public tGELIMINARTARIFA(
        pTarifaInArg: any): Promise<ErrorInformation | void> {
        const request: {
            ptarifa_oid: any
        } = {
            ptarifa_oid: pTarifaInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGELIMINARTARIFASrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'tdelcontsindocsol' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptuputhisContSinDocSolInArg Mandatory argument 'pt_p_thisContSinDocSol'. Oid of 'ContSinDocSol' class
     */
    public tdelcontsindocsol(
        ptuputhisContSinDocSolInArg: any): Promise<ErrorInformation | void> {
        const request: {
            pt_p_thiscontsindocsol_oid: any
        } = {
            pt_p_thiscontsindocsol_oid: ptuputhisContSinDocSolInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tdelcontsindocsolSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGCREARCOMBO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuatrContratoIntegralInArg Mandatory argument 'pt_p_atrContratoIntegral'
     * @param ptupuatrContratoOdontologicoInArg Mandatory argument 'pt_p_atrContratoOdontologico'
     */
    public tGCREARCOMBO(
        ptupuatrContratoIntegralInArg: string, ptupuatrContratoOdontologicoInArg: string): Promise<ErrorInformation | void> {
        const request: {
            pt_p_atrcontratointegral: string, pt_p_atrcontratoodontologico: string
        } = {
            pt_p_atrcontratointegral: ptupuatrContratoIntegralInArg, pt_p_atrcontratoodontologico: ptupuatrContratoOdontologicoInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGCREARCOMBOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGEDITARCOMBO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptuputhisContratoComboInArg Mandatory argument 'pt_p_thisContratoCombo'. Oid of 'ContratoCombo' class
     * @param ptupuContratoIntegralInArg Mandatory argument 'pt_p_ContratoIntegral'
     * @param ptupuContratoOdontologicoInArg Mandatory argument 'pt_p_ContratoOdontologico'
     */
    public tGEDITARCOMBO(
        ptuputhisContratoComboInArg: any, ptupuContratoIntegralInArg: string,
        ptupuContratoOdontologicoInArg: string): Promise<ErrorInformation | void> {
        const request: {
            pt_p_thiscontratocombo_oid: any, pt_p_contratointegral: string, pt_p_contratoodontologico: string
        } = {
            pt_p_thiscontratocombo_oid: ptuputhisContratoComboInArg, pt_p_contratointegral: ptupuContratoIntegralInArg,
            pt_p_contratoodontologico: ptupuContratoOdontologicoInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGEDITARCOMBOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TDELCOMBO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptuputhisContratoComboInArg Mandatory argument 'pt_p_thisContratoCombo'. Oid of 'ContratoCombo' class
     */
    public tDELCOMBO(
        ptuputhisContratoComboInArg: any): Promise<ErrorInformation | void> {
        const request: {
            pt_p_thiscontratocombo_oid: any
        } = {
            pt_p_thiscontratocombo_oid: ptuputhisContratoComboInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tDELCOMBOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGADDPLANTREP' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuatrTipoInArg Mandatory argument 'pt_p_atrTipo'
     * @param ptupuatrTituloInArg Mandatory argument 'pt_p_atrTitulo'
     * @param ptupuatrFechaVigenciaInArg Mandatory argument 'pt_p_atrFechaVigencia'
     * @param ptupuatrRutaArchivosInArg Mandatory argument 'pt_p_atrRutaArchivos'
     * @param ptupuatrNombreArchivoPDFInArg Mandatory argument 'pt_p_atrNombreArchivoPDF'
     */
    public tGADDPLANTREP(
        ptupuatrTipoInArg: number, ptupuatrTituloInArg: string, ptupuatrFechaVigenciaInArg: Date, ptupuatrRutaArchivosInArg: string,
        ptupuatrNombreArchivoPDFInArg: string): Promise<ErrorInformation | void> {
        const request: {
            pt_p_atrtipo: number, pt_p_atrtitulo: string, pt_p_atrfechavigencia: string, pt_p_atrrutaarchivos: string,
            pt_p_atrnombrearchivopdf: string
        } = {
            pt_p_atrtipo: ptupuatrTipoInArg, pt_p_atrtitulo: ptupuatrTituloInArg,
            pt_p_atrfechavigencia: JsonUtility.date2Json(ptupuatrFechaVigenciaInArg), pt_p_atrrutaarchivos: ptupuatrRutaArchivosInArg,
            pt_p_atrnombrearchivopdf: ptupuatrNombreArchivoPDFInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGADDPLANTREPSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGEDITPLANTREP' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptuputhisPlantillaReporteInArg Mandatory argument 'pt_p_thisPlantillaReporte'. Oid of 'PlantillaReporte' class
     * @param ptupuTituloInArg Mandatory argument 'pt_p_Titulo'
     * @param ptupuFechaVigenciaInArg Mandatory argument 'pt_p_FechaVigencia'
     * @param ptupuRutaArchivosInArg Mandatory argument 'pt_p_RutaArchivos'
     * @param ptupuNombreArchivoPDFInArg Mandatory argument 'pt_p_NombreArchivoPDF'
     */
    public tGEDITPLANTREP(
        ptuputhisPlantillaReporteInArg: any, ptupuTituloInArg: string, ptupuFechaVigenciaInArg: Date, ptupuRutaArchivosInArg: string,
        ptupuNombreArchivoPDFInArg: string): Promise<ErrorInformation | void> {
        const request: {
            pt_p_thisplantillareporte_oid: any, pt_p_titulo: string, pt_p_fechavigencia: string, pt_p_rutaarchivos: string,
            pt_p_nombrearchivopdf: string
        } = {
            pt_p_thisplantillareporte_oid: ptuputhisPlantillaReporteInArg, pt_p_titulo: ptupuTituloInArg,
            pt_p_fechavigencia: JsonUtility.date2Json(ptupuFechaVigenciaInArg), pt_p_rutaarchivos: ptupuRutaArchivosInArg,
            pt_p_nombrearchivopdf: ptupuNombreArchivoPDFInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGEDITPLANTREPSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGCREARFINIEPS' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuatrTramiteInArg Mandatory argument 'pt_p_atrTramite'
     * @param ptupuatrTipoContratoInArg Mandatory argument 'pt_p_atrTipoContrato'
     * @param ptupuatrDesdeInArg Mandatory argument 'pt_p_atrDesde'
     * @param ptupuatrHastaInArg Mandatory argument 'pt_p_atrHasta'
     * @param ptupuatrFechaInicioAplicarInArg Mandatory argument 'pt_p_atrFechaInicioAplicar'
     */
    public tGCREARFINIEPS(
        ptupuatrTramiteInArg: number, ptupuatrTipoContratoInArg: number, ptupuatrDesdeInArg: Date, ptupuatrHastaInArg: Date,
        ptupuatrFechaInicioAplicarInArg: Date): Promise<ErrorInformation | void> {
        const request: {
            pt_p_atrtramite: number, pt_p_atrtipocontrato: number, pt_p_atrdesde: string, pt_p_atrhasta: string,
            pt_p_atrfechainicioaplicar: string
        } = {
            pt_p_atrtramite: ptupuatrTramiteInArg, pt_p_atrtipocontrato: ptupuatrTipoContratoInArg,
            pt_p_atrdesde: JsonUtility.date2Json(ptupuatrDesdeInArg), pt_p_atrhasta: JsonUtility.date2Json(ptupuatrHastaInArg),
            pt_p_atrfechainicioaplicar: JsonUtility.date2Json(ptupuatrFechaInicioAplicarInArg)
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGCREARFINIEPSSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGMODFINIEPS' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptuputhisFechaIniEPSInArg Mandatory argument 'pt_p_thisFechaIniEPS'. Oid of 'FechaIniEPS' class
     * @param ptupuDesdeInArg Mandatory argument 'pt_p_Desde'
     * @param ptupuHastaInArg Mandatory argument 'pt_p_Hasta'
     * @param ptupuFechaInicioAplicarInArg Mandatory argument 'pt_p_FechaInicioAplicar'
     * @param ptTratimeInArg Optional argument 'ptTratime'
     * @param ptTipoContratoInArg Optional argument 'ptTipoContrato'
     */
    public tGMODFINIEPS(
        ptuputhisFechaIniEPSInArg: any, ptupuDesdeInArg: Date, ptupuHastaInArg: Date, ptupuFechaInicioAplicarInArg: Date,
        ptTratimeInArg: number, ptTipoContratoInArg: number): Promise<ErrorInformation | void> {
        const request: {
            pt_p_thisfechainieps_oid: any, pt_p_desde: string, pt_p_hasta: string, pt_p_fechainicioaplicar: string, pttratime: number,
            pttipocontrato: number
        } = {
            pt_p_thisfechainieps_oid: ptuputhisFechaIniEPSInArg, pt_p_desde: JsonUtility.date2Json(ptupuDesdeInArg),
            pt_p_hasta: JsonUtility.date2Json(ptupuHastaInArg),
            pt_p_fechainicioaplicar: JsonUtility.date2Json(ptupuFechaInicioAplicarInArg), pttratime: ptTratimeInArg,
            pttipocontrato: ptTipoContratoInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGMODFINIEPSSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGCREARCONTEXENTO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuatrNumContratoInArg Mandatory argument 'pt_p_atrNumContrato'
     */
    public tGCREARCONTEXENTO(
        ptupuatrNumContratoInArg: string): Promise<ErrorInformation | void> {
        const request: {
            pt_p_atrnumcontrato: string
        } = {
            pt_p_atrnumcontrato: ptupuatrNumContratoInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGCREARCONTEXENTOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGDELCONTRATOEXENTO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptuputhisContratosExentosFIngrInArg Mandatory argument 'pt_p_thisContratosExentosFIngr'. Oid of 'ContratosExentosFIngreso' class
     */
    public tGDELCONTRATOEXENTO(
        ptuputhisContratosExentosFIngrInArg: any): Promise<ErrorInformation | void> {
        const request: {
            pt_p_thiscontratosexentosfingr_oid: any
        } = {
            pt_p_thiscontratosexentosfingr_oid: ptuputhisContratosExentosFIngrInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGDELCONTRATOEXENTOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGENREPALM' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptReportesProcAlmInArg Mandatory argument 'ptReportesProcAlm'. Oid of 'ReportesProcAlm' class
     * @param ptValorArgumentosInArg Optional argument 'ptValorArgumentos'
     */
    public tGENREPALM(
        ptReportesProcAlmInArg: any, ptValorArgumentosInArg: string):
        Promise<ErrorInformation | {
            oafichero: string,
            oanombrefichero: string
        }> {
        const request: {
            ptreportesprocalm_json: any, ptvalorargumentos: string
        } = {
            ptreportesprocalm_json: ptReportesProcAlmInArg ? JSON.stringify(ptReportesProcAlmInArg) : '',
            ptvalorargumentos: ptValorArgumentosInArg
        };
        return new Promise<ErrorInformation | {
            oafichero: string,
            oanombrefichero: string
        }> ((resolve, reject) => {
            this.callService(this.tGENREPALMSrvName, request).then((response: any) => {
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
