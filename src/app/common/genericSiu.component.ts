import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from './app.utils';
import { LanguageMng } from './languageMng';
import { ExchangeInfo } from './app.exchangeinfo';
import { ModelConstants } from './model.constants';
import { ConditionalNavigationMng } from './conditionalNavigationMng';
import { Field } from './baseIUElements';
import { Subscription } from 'rxjs';
/**
 * Generic component for services under specific conditions
 *      Service has not inbound argments or only one and object valued that not allows null
 *      Service has not outbound arguments
 *      Service is not offered in the manu
 */
@Component({
    selector: 'genericsiu',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `

    <ng-container *ngIf="visible">
        <div style="text-align: center;margin-bottom: 10px;">
            <h2>{{title}}</h2>

            <div>
                <label class="control-label">{{argAlias}}</label>
                <label class="control-label" style="padding-left: 10px;">
                    {{argValue}}
                </label>
            </div>

        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 siuButtons">
            <button type="button" class="btnOk btn btn-primary" (click)="saveChanges()">
                {{langMng.translateText('app_SIU_BTNOK', '')}}</button>
            <button type="button" class="btnCancel btn btn-danger" (click)="processCancel()">
                {{langMng.translateText('app_SIU_BTNCANCEL', '')}}
            </button>
        </div>
    </ng-container>

  `
})
export class GenericSiuComponent implements OnInit {

    /** Exchange information */
    private exchangeInfo: ExchangeInfo | null = null;
    /** Target class name */
    private className = '';
    /** Target service interaction unit name */
    private serviceIUName = '';
    /** Target service name */
    private serviceName = '';
    /** Argument class name */
    private argClassName = '';
    /** Argument name */
    private argName = '';
    /** Argument name in request */
    private argNameInRequest = '';
    /** Supplementary information attribute names */
    private argSupInfAttNames = '';
    /** Supplementary attribute data types */
    private argSupInfAttTypes: string[] = [];
    /** Service Interaction unit must not been shown */
    private siuHasNoShow = false;

    /** Title */
    public title = '';
    /** Argument alias */
    public argAlias = '';
    /** Argument value */
    public argValue = '';

    /** Progress bar subscription to manage the cancel */
    protected progressBarSubscription: Subscription | null = null;
    /** Selected Oids */
    private originalOidList: any[] = [];
    private oidList: any[] = [];

    /** Scenario is visible or not */
    public visible = true;

    constructor(
        protected appGlobalInfo: AppGlobalInfo,
        protected util: Util,
        public langMng: LanguageMng,
        protected condNavMng: ConditionalNavigationMng,
        public changeDetectorRef: ChangeDetectorRef) {
    }

    public ngOnInit(): void {
        this.util.hideWaitDialog();
        this.exchangeInfo = this.appGlobalInfo.appExchangeInfo.get();
        this.className = this.exchangeInfo.targetClassName;
        this.serviceIUName = this.exchangeInfo.targetIUName;

        if (this.configureSIU()) {
            this.visible = !this.siuHasNoShow;
            // Get the selected instances
            if (this.argName) {
                // Navigational or custom initialization
                if (this.exchangeInfo.customData[this.argName]) {
                    this.originalOidList.push(this.exchangeInfo.customData[this.argName]);
                } else if (this.exchangeInfo.selectedOidsClassName === this.argClassName) {
                    // Selected instance
                    this.originalOidList = this.exchangeInfo.selectedOids;
                } else {
                    // Any in the context stack
                    this.originalOidList = this.exchangeInfo.getOidsOfClass(this.argClassName);
                }
            }
            if (this.argName && this.originalOidList.length === 0) {
                // No Oid found
                this.title = 'Error';
                this.argAlias = 'No selected element';
                this.argValue = '';
            } else {
                this.showSuplementaryInformation();
            }
        } else {
            // Configuration has not been found
            this.title = 'Error';
            this.argAlias = 'Configuration not found';
            this.argValue = '';
        }
        if (this.util.modalForIUResponse.observers.length <= 1) {
            this.appGlobalInfo.setScenarioTitle(this.title);
        }
    }

    /**
     * Call service
     */
    public saveChanges(): void {
        this.oidList  = [];
        this.originalOidList.forEach(val => this.oidList.push(Object.assign({}, val)));

        if (this.oidList.length === 0) {
            this.executeService(null, [], 0, 1);
        } else {
            const totalOids = this.oidList.length;
            if (totalOids > 1) {
                this.progressBarSubscription = this.util.progessBarCancelResponse.subscribe(() => {
                    this.util.hideProgressBar();
                    this.oidList = [];
                    if (this.progressBarSubscription) {
                        this.progressBarSubscription.unsubscribe();
                    }   
                });
            }
            this.executeService(this.oidList.pop(), [], 0, totalOids);
        }
    }

    /**
     * Auxiliar function to manages the multiselection
     * @param oid Instance Oid
     * @param errorList List of errors
     * @param executionCount Execution counter
     * @param totalExecutions Total executions
     */
    private executeService(oid: any, errorList: string[], executionCount: number, totalExecutions: number): void {
        // Show progress bar or wait dialog
        if (totalExecutions > 1) {
            this.util.showProgressBar(this.title, executionCount + 1 === totalExecutions ? 99 :
                Math.round(((executionCount + 1) / totalExecutions) * 100), 0);
        } else {
            this.util.showWaitDialog();
        }
        let lOid = oid;
        if (this.argNameInRequest?.endsWith('_json')) {
            lOid = JSON.stringify(oid);
        }
        this.util.executeNoShowService(this.className, this.serviceName, lOid, this.argNameInRequest).then(
            (data: {request: any, response: any}) => {
                executionCount++;
                this.processServiceResponse(data, errorList, executionCount, totalExecutions);
                
            }, (error: {request: any, response: any}) => {
                executionCount++;
                errorList.push(this.langMng.translateError(error.response));
                if (this.oidList.length === 0) {
                    this.visible = true;
                    this.util.addErrorMessageList(errorList);
                    this.util.hideWaitDialog();
                    this.util.hideProgressBar();
                    this.changeDetectorRef.markForCheck();
                } else {
                    this.executeService(this.oidList.pop(), errorList, executionCount, totalExecutions);
                }
            });
    }

    private processServiceResponse(data: {request: any, response: any}, errorList: string[], executionCount: number, totalExecutions: number): void {
        if (data.response.resultCode !== '000' && data.response.resultCode !== '') {
            errorList.push(data.response.resultDescription);
        }
        if (this.oidList.length === 0) {
            if (errorList.length === 0) {
                this.util.hideWaitDialog();
                this.util.hideProgressBar();
                this.processSuccessfulExecution(data, executionCount);
            } else {
                this.visible = true;
                this.util.addErrorMessageList(errorList);
                this.util.hideWaitDialog();
                this.util.hideProgressBar();
                this.changeDetectorRef.markForCheck();
            }
        } else {
            this.executeService(this.oidList.pop(), errorList, executionCount, totalExecutions);
        }
    }

    private processSuccessfulExecution(data: {request: any, response: any}, executionCount: number): void {
        if (executionCount <= 1) {
            if (!this.condNavMng.processConditionalNavigation(this.className, this.serviceName,
                data.request, data.response,
                this.exchangeInfo ? this.exchangeInfo.previous : null,
                this.exchangeInfo ? this.exchangeInfo.comeBackContext : null)) {
                this.processCancel(true);
            }
        } else {
            this.processCancel(true);
        }
    }


    /**
     * Manages Cancel button
     * @param lastExecutionSuccess Tue if the execution was success or not
     */
    public processCancel(lastExecutionSuccess = false): void {
        this.util.hideProgressBar();
        if (this.exchangeInfo) {
            if (this.util.processCancelInPopup(lastExecutionSuccess)) {
                // Remove the top element in the context stack
                if (this.exchangeInfo?.comeBackContext?.exchangeInfo) {
                    this.appGlobalInfo.appExchangeInfo.save(this.exchangeInfo.comeBackContext.exchangeInfo);
                }
            } else if (this.exchangeInfo?.comeBackContext) {
                this.util.navigateComeBack(this.exchangeInfo.comeBackContext);
            } else {
                this.util.navigateToMain();
            }
        } else {
            this.util.navigateToMain();
        }
    }

    /**
     * Show the supplementary information of the selected Oids
     */
    private showSuplementaryInformation(): void {
        // If no argument
        if (!this.argName || this.originalOidList.length === 0) {
            if (this.siuHasNoShow) {
                this.saveChanges();
            }
            return;
        }

        if (this.originalOidList.length > 1) {
            this.argValue = this.langMng.translateTextWithParams(
                LanguageMng.fsNumberInstacesSelected, '',
                this.originalOidList.length.toString());
            if (this.siuHasNoShow) {
                this.saveChanges();
            }
        } else {
            // Query to get the value of attributes
			this.util.showWaitDialog();
			this.util.callQueryByOid(this.argClassName, JSON.stringify(this.originalOidList[0]),
				this.argSupInfAttNames).then((instance) => {
				if (instance) {
					let textValue = '';
					const attArray: string[] = this.argSupInfAttNames.split(',');
					let i = 0;
					for (const att of attArray) {
						if (textValue.length > 0) {
							textValue += ' ';
						}
						if (this.argSupInfAttTypes && this.argSupInfAttTypes.length > i) {
							textValue += this.util.applyDefaultFormat(instance[att.replace('.', '-')], this.argSupInfAttTypes[i]);
						} else {
							textValue += this.util.valueToString(instance[att.replace('.', '-')]);
						}
						i++;
					}
					this.argValue = textValue;
				} else {
					this.argValue = '';
				}
				this.util.hideWaitDialog();
				this.changeDetectorRef.markForCheck();
				if (this.siuHasNoShow) {
					this.saveChanges();
				}
			}).catch((errorMsg) => {
				this.argValue = '';
				this.util.addErrorMessage(errorMsg);
				this.util.hideWaitDialog();
				this.changeDetectorRef.markForCheck();
			});
        }
    }

    /**
     * Configure the scenario based on the Class and service interaction unit
     */
    private configureSIU(): boolean {
        let siuFound = false;
        switch (this.className) {
            case ModelConstants.Paramconfig.name:
                siuFound = this.configureClassParamConfig();
                break;
            case ModelConstants.Frecuenciaact.name:
                siuFound = this.configureClassFrecuenciaAct();
                break;
            case ModelConstants.Cuestionariomed.name:
                siuFound = this.configureClassCuestionarioMed();
                break;
            case ModelConstants.Seccion.name:
                siuFound = this.configureClassSeccion();
                break;
            case ModelConstants.Pregunta.name:
                siuFound = this.configureClassPregunta();
                break;
            case ModelConstants.Valor.name:
                siuFound = this.configureClassValor();
                break;
            case ModelConstants.Productos.name:
                siuFound = this.configureClassProductos();
                break;
            case ModelConstants.Planes.name:
                siuFound = this.configureClassPlanes();
                break;
            case ModelConstants.Parentesco.name:
                siuFound = this.configureClassParentesco();
                break;
            case ModelConstants.Periodicidad.name:
                siuFound = this.configureClassPeriodicidad();
                break;
            case ModelConstants.Rol.name:
                siuFound = this.configureClassRol();
                break;
            case ModelConstants.Dominio.name:
                siuFound = this.configureClassDominio();
                break;
            case ModelConstants.Plantillaemail.name:
                siuFound = this.configureClassPlantillaEmail();
                break;
            case ModelConstants.Estadocontrato.name:
                siuFound = this.configureClassEstadoContrato();
                break;
            case ModelConstants.Estadobeneficiario.name:
                siuFound = this.configureClassEstadoBeneficiario();
                break;
            case ModelConstants.Estadobeneficiarioae.name:
                siuFound = this.configureClassEstadoBeneficiarioAE();
                break;
            case ModelConstants.Regional.name:
                siuFound = this.configureClassRegional();
                break;
            case ModelConstants.Sucursal.name:
                siuFound = this.configureClassSucursal();
                break;
            case ModelConstants.Grupoasociado.name:
                siuFound = this.configureClassGrupoAsociado();
                break;
            case ModelConstants.Estadocivil.name:
                siuFound = this.configureClassEstadoCivil();
                break;
            case ModelConstants.Departamento.name:
                siuFound = this.configureClassDepartamento();
                break;
            case ModelConstants.Tipoiva.name:
                siuFound = this.configureClassTipoIVA();
                break;
            case ModelConstants.Companyia.name:
                siuFound = this.configureClassCompanyia();
                break;
            case ModelConstants.Municipio.name:
                siuFound = this.configureClassMunicipio();
                break;
            case ModelConstants.Tipodireccion.name:
                siuFound = this.configureClassTipoDireccion();
                break;
            case ModelConstants.Estadopersona.name:
                siuFound = this.configureClassEstadoPersona();
                break;
            case ModelConstants.Formapago.name:
                siuFound = this.configureClassFormaPago();
                break;
            case ModelConstants.Tipoidentificacion.name:
                siuFound = this.configureClassTipoIdentificacion();
                break;
            case ModelConstants.Eps.name:
                siuFound = this.configureClassEps();
                break;
            case ModelConstants.Entidadfinancierac.name:
                siuFound = this.configureClassEntidadFinancieraC();
                break;
            case ModelConstants.Tipoentidadc.name:
                siuFound = this.configureClassTipoEntidadC();
                break;
            case ModelConstants.Tipoinstitucionc.name:
                siuFound = this.configureClassTipoInstitucionC();
                break;
            case ModelConstants.Pais.name:
                siuFound = this.configureClassPais();
                break;
            case ModelConstants.Firma.name:
                siuFound = this.configureClassFirma();
                break;
            case ModelConstants.Parentescodom.name:
                siuFound = this.configureClassParentescoDom();
                break;
            case ModelConstants.Tiposucursalc.name:
                siuFound = this.configureClassTipoSucursalC();
                break;
            case ModelConstants.Detalletarifa.name:
                siuFound = this.configureClassDetalleTarifa();
                break;
            case ModelConstants.Institucionmatneo.name:
                siuFound = this.configureClassInstitucionMatNeo();
                break;
            case ModelConstants.Motdevareamedica.name:
                siuFound = this.configureClassMotDevAreaMedica();
                break;
            case ModelConstants.Reportesprocalm.name:
                siuFound = this.configureClassReportesProcAlm();
                break;
            case ModelConstants.Prorrateo.name:
                siuFound = this.configureClassProrrateo();
                break;
            case ModelConstants.Tipofactura.name:
                siuFound = this.configureClassTipoFactura();
                break;
            case ModelConstants.Paramreporte.name:
                siuFound = this.configureClassParamReporte();
                break;
            case ModelConstants.Tiponovedad.name:
                siuFound = this.configureClassTipoNovedad();
                break;
            case ModelConstants.Novedad.name:
                siuFound = this.configureClassNovedad();
                break;
            case ModelConstants.Causal.name:
                siuFound = this.configureClassCausal();
                break;
            case ModelConstants.Causaexclusion.name:
                siuFound = this.configureClassCausaExclusion();
                break;
            case ModelConstants.Motivoexcepcionsolnov.name:
                siuFound = this.configureClassMotivoExcepcionSolNov();
                break;
            case ModelConstants.Grupoasignacion.name:
                siuFound = this.configureClassGrupoAsignacion();
                break;
            case ModelConstants.Grupoasignacionnovedad.name:
                siuFound = this.configureClassGrupoAsignacionNovedad();
                break;
            case ModelConstants.Configuracionans.name:
                siuFound = this.configureClassConfiguracionANS();
                break;
            case ModelConstants.Plantillareporte.name:
                siuFound = this.configureClassPlantillaReporte();
                break;
            case ModelConstants.Reportesdominio.name:
                siuFound = this.configureClassReportesDominio();
                break;
            case ModelConstants.Fechainieps.name:
                siuFound = this.configureClassFechaIniEPS();
                break;
            case ModelConstants.Globalservices.name:
                siuFound = this.configureGlobalServices();
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class ParamConfig
     */
    private configureClassParamConfig(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Paramconfig.siuueliminar:
                this.title = this.langMng.translateText('cls_ParamConfig_svc_eliminar',
                    'Eliminar');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisparamconfig';
                this.argNameInRequest = 'p_thisparamconfig_oid';
                this.argClassName = ModelConstants.Paramconfig.name;
                this.argAlias = this.langMng.translateText(
                    'cls_ParamConfig_svc_eliminar_inArg_p_thisParamConfig',
                    'Parámetro Conf.');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class FrecuenciaAct
     */
    private configureClassFrecuenciaAct(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Frecuenciaact.siuueliminar:
                this.title = this.langMng.translateText('cls_FrecuenciaAct_svc_eliminar',
                    'Eliminar');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisfrecuenciaact';
                this.argNameInRequest = 'p_thisfrecuenciaact_oid';
                this.argClassName = ModelConstants.Frecuenciaact.name;
                this.argAlias = this.langMng.translateText(
                    'cls_FrecuenciaAct_svc_eliminar_inArg_p_thisFrecuenciaAct',
                    'Frecuencias act.');
                this.argSupInfAttNames = 'drvnombreparametrica';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class CuestionarioMed
     */
    private configureClassCuestionarioMed(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Cuestionariomed.siuueliminar:
                this.title = this.langMng.translateText('cls_CuestionarioMed_svc_eliminar',
                    'Eliminar');
                this.serviceName = 'eliminar';
                this.argName = 'p_thiscuestionariomed';
                this.argNameInRequest = 'p_thiscuestionariomed_oid';
                this.argClassName = ModelConstants.Cuestionariomed.name;
                this.argAlias = this.langMng.translateText(
                    'cls_CuestionarioMed_svc_eliminar_inArg_p_thisCuestionarioMed',
                    'Cuestionario médico');
                this.argSupInfAttNames = 'nombre';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Seccion
     */
    private configureClassSeccion(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Seccion.siuuteliminar:
                this.title = this.langMng.translateText('cls_Seccion_svc_TELIMINAR',
                    'Eliminar sección');
                this.serviceName = 'TELIMINAR';
                this.argName = 'p_thisseccion';
                this.argNameInRequest = 'p_thisseccion_oid';
                this.argClassName = ModelConstants.Seccion.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Seccion_svc_TELIMINAR_inArg_p_thisSeccion',
                    'Sección');
                this.argSupInfAttNames = 'nombre';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Pregunta
     */
    private configureClassPregunta(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Pregunta.siuuteliminar:
                this.title = this.langMng.translateText('cls_Pregunta_svc_TELIMINAR',
                    'Eliminar pregunta');
                this.serviceName = 'TELIMINAR';
                this.argName = 'p_thispregunta';
                this.argNameInRequest = 'p_thispregunta_oid';
                this.argClassName = ModelConstants.Pregunta.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Pregunta_svc_TELIMINAR_inArg_p_thisPregunta',
                    'Pregunta');
                this.argSupInfAttNames = 'numero';
                this.argSupInfAttTypes = [Field.dtInt];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Valor
     */
    private configureClassValor(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Valor.siuueliminar:
                this.title = this.langMng.translateText('cls_Valor_svc_eliminar',
                    'Eliminar valor posible de respuesta');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisvalor';
                this.argNameInRequest = 'p_thisvalor_oid';
                this.argClassName = ModelConstants.Valor.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Valor_svc_eliminar_inArg_p_thisValor',
                    'Valor');
                this.argSupInfAttNames = 'valorposible';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Productos
     */
    private configureClassProductos(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Productos.siuueliminar:
                this.title = this.langMng.translateText('cls_Productos_svc_eliminar',
                    'Eliminar producto');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisproducto';
                this.argNameInRequest = 'p_thisproducto_oid';
                this.argClassName = ModelConstants.Productos.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Productos_svc_eliminar_inArg_p_thisProducto',
                    'Producto');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Planes
     */
    private configureClassPlanes(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Planes.siuueliminar:
                this.title = this.langMng.translateText('cls_Planes_svc_eliminar',
                    'Eliminar plan');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisplan';
                this.argNameInRequest = 'p_thisplan_oid';
                this.argClassName = ModelConstants.Planes.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Planes_svc_eliminar_inArg_p_thisPlan',
                    'Plan');
                this.argSupInfAttNames = 'nombre';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Parentesco
     */
    private configureClassParentesco(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Parentesco.siuueliminar:
                this.title = this.langMng.translateText('cls_Parentesco_svc_eliminar',
                    'Eliminar parentesco');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisparentesco';
                this.argNameInRequest = 'p_thisparentesco_oid';
                this.argClassName = ModelConstants.Parentesco.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Parentesco_svc_eliminar_inArg_p_thisParentesco',
                    'Parentesco');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Periodicidad
     */
    private configureClassPeriodicidad(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Periodicidad.siuueliminar:
                this.title = this.langMng.translateText('cls_Periodicidad_svc_eliminar',
                    'Eliminar periodicidad');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisperiodicidad';
                this.argNameInRequest = 'p_thisperiodicidad_oid';
                this.argClassName = ModelConstants.Periodicidad.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Periodicidad_svc_eliminar_inArg_p_thisPeriodicidad',
                    'Periodicidad');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Rol
     */
    private configureClassRol(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Rol.siuueliminar:
                this.title = this.langMng.translateText('cls_Rol_svc_eliminar',
                    'Eliminar rol');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisrol';
                this.argNameInRequest = 'p_thisrol_oid';
                this.argClassName = ModelConstants.Rol.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Rol_svc_eliminar_inArg_p_thisRol',
                    'Rol');
                this.argSupInfAttNames = 'nombre';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Dominio
     */
    private configureClassDominio(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Dominio.siuuteliminar:
                this.title = this.langMng.translateText('cls_Dominio_svc_TELIMINAR',
                    'Eliminar dominio');
                this.serviceName = 'TELIMINAR';
                this.argName = 'p_thisdominio';
                this.argNameInRequest = 'p_thisdominio_oid';
                this.argClassName = ModelConstants.Dominio.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Dominio_svc_TELIMINAR_inArg_p_thisDominio',
                    'Dominio');
                this.argSupInfAttNames = 'productot.descripcion,plant.nombre';
                this.argSupInfAttTypes = [Field.dtString, Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class PlantillaEmail
     */
    private configureClassPlantillaEmail(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Plantillaemail.siuueliminar:
                this.title = this.langMng.translateText('cls_PlantillaEmail_svc_eliminar',
                    'Eliminar plantilla de email');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisplantillasemail';
                this.argNameInRequest = 'p_thisplantillasemail_oid';
                this.argClassName = ModelConstants.Plantillaemail.name;
                this.argAlias = this.langMng.translateText(
                    'cls_PlantillaEmail_svc_eliminar_inArg_p_thisPlantillasEmail',
                    'Plantilla email');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class EstadoContrato
     */
    private configureClassEstadoContrato(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Estadocontrato.siuueliminar:
                this.title = this.langMng.translateText('cls_EstadoContrato_svc_eliminar',
                    'Eliminar estado contrato CORE');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisestadocontrato';
                this.argNameInRequest = 'p_thisestadocontrato_oid';
                this.argClassName = ModelConstants.Estadocontrato.name;
                this.argAlias = this.langMng.translateText(
                    'cls_EstadoContrato_svc_eliminar_inArg_p_thisEstadoContrato',
                    'Estado contrato');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class EstadoBeneficiario
     */
    private configureClassEstadoBeneficiario(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Estadobeneficiario.siuueliminar:
                this.title = this.langMng.translateText('cls_EstadoBeneficiario_svc_eliminar',
                    'Eliminar estado beneficiario');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisestadobeneficiario';
                this.argNameInRequest = 'p_thisestadobeneficiario_oid';
                this.argClassName = ModelConstants.Estadobeneficiario.name;
                this.argAlias = this.langMng.translateText(
                    'cls_EstadoBeneficiario_svc_eliminar_inArg_p_thisEstadoBeneficiario',
                    'Estado beneficiario CORE');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class EstadoBeneficiarioAE
     */
    private configureClassEstadoBeneficiarioAE(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Estadobeneficiarioae.siuueliminar:
                this.title = this.langMng.translateText('cls_EstadoBeneficiarioAE_svc_eliminar',
                    'Eliminar estado beneficiario');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisestadobeneficiarioae';
                this.argNameInRequest = 'p_thisestadobeneficiarioae_oid';
                this.argClassName = ModelConstants.Estadobeneficiarioae.name;
                this.argAlias = this.langMng.translateText(
                    'cls_EstadoBeneficiarioAE_svc_eliminar_inArg_p_thisEstadoBeneficiarioAE',
                    'Estado beneficiario AE');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Regional
     */
    private configureClassRegional(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Regional.siuueliminar:
                this.title = this.langMng.translateText('cls_Regional_svc_eliminar',
                    'Eliminar regional');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisregional';
                this.argNameInRequest = 'p_thisregional_oid';
                this.argClassName = ModelConstants.Regional.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Regional_svc_eliminar_inArg_p_thisRegional',
                    'Regional');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Sucursal
     */
    private configureClassSucursal(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Sucursal.siuueliminar:
                this.title = this.langMng.translateText('cls_Sucursal_svc_eliminar',
                    'Eliminar sucursal');
                this.serviceName = 'eliminar';
                this.argName = 'p_thissucursal';
                this.argNameInRequest = 'p_thissucursal_oid';
                this.argClassName = ModelConstants.Sucursal.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Sucursal_svc_eliminar_inArg_p_thisSucursal',
                    'Sucursal');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class GrupoAsociado
     */
    private configureClassGrupoAsociado(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Grupoasociado.siuueliminar:
                this.title = this.langMng.translateText('cls_GrupoAsociado_svc_eliminar',
                    'Eliminar grupo asociado');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisgrupoasociado';
                this.argNameInRequest = 'p_thisgrupoasociado_oid';
                this.argClassName = ModelConstants.Grupoasociado.name;
                this.argAlias = this.langMng.translateText(
                    'cls_GrupoAsociado_svc_eliminar_inArg_p_thisGrupoAsociado',
                    'Grupo Asociado');
                this.argSupInfAttNames = 'codigolegal,descripcion';
                this.argSupInfAttTypes = [Field.dtString, Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class EstadoCivil
     */
    private configureClassEstadoCivil(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Estadocivil.siuueliminar:
                this.title = this.langMng.translateText('cls_EstadoCivil_svc_eliminar',
                    'Eliminar estado civil');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisestadocivil';
                this.argNameInRequest = 'p_thisestadocivil_oid';
                this.argClassName = ModelConstants.Estadocivil.name;
                this.argAlias = this.langMng.translateText(
                    'cls_EstadoCivil_svc_eliminar_inArg_p_thisEstadoCivil',
                    'Estado civil');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Departamento
     */
    private configureClassDepartamento(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Departamento.siuueliminar:
                this.title = this.langMng.translateText('cls_Departamento_svc_eliminar',
                    'Eliminar departamento');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisdepartamento';
                this.argNameInRequest = 'p_thisdepartamento_oid';
                this.argClassName = ModelConstants.Departamento.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Departamento_svc_eliminar_inArg_p_thisDepartamento',
                    'Departamento');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class TipoIVA
     */
    private configureClassTipoIVA(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Tipoiva.siuueliminar:
                this.title = this.langMng.translateText('cls_TipoIVA_svc_eliminar',
                    'Eliminar tipo de I.V.A');
                this.serviceName = 'eliminar';
                this.argName = 'p_thistipoiva';
                this.argNameInRequest = 'p_thistipoiva_oid';
                this.argClassName = ModelConstants.Tipoiva.name;
                this.argAlias = this.langMng.translateText(
                    'cls_TipoIVA_svc_eliminar_inArg_p_thisTipoIVA',
                    'Tipo I.V.A');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Companyia
     */
    private configureClassCompanyia(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Companyia.siuueliminar:
                this.title = this.langMng.translateText('cls_Companyia_svc_eliminar',
                    'Eliminar compañía');
                this.serviceName = 'eliminar';
                this.argName = 'p_thiscompanyia';
                this.argNameInRequest = 'p_thiscompanyia_oid';
                this.argClassName = ModelConstants.Companyia.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Companyia_svc_eliminar_inArg_p_thisCompanyia',
                    'Compañía');
                this.argSupInfAttNames = 'nombre';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Municipio
     */
    private configureClassMunicipio(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Municipio.siuueliminar:
                this.title = this.langMng.translateText('cls_Municipio_svc_eliminar',
                    'Eliminar municipio');
                this.serviceName = 'eliminar';
                this.argName = 'p_thismunicipio';
                this.argNameInRequest = 'p_thismunicipio_oid';
                this.argClassName = ModelConstants.Municipio.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Municipio_svc_eliminar_inArg_p_thisMunicipio',
                    'Municipio');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class TipoDireccion
     */
    private configureClassTipoDireccion(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Tipodireccion.siuueliminar:
                this.title = this.langMng.translateText('cls_TipoDireccion_svc_eliminar',
                    'Eliminar tipo de dirección');
                this.serviceName = 'eliminar';
                this.argName = 'p_thistipodireccion';
                this.argNameInRequest = 'p_thistipodireccion_oid';
                this.argClassName = ModelConstants.Tipodireccion.name;
                this.argAlias = this.langMng.translateText(
                    'cls_TipoDireccion_svc_eliminar_inArg_p_thisTipoDireccion',
                    'Tipo dirección');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class EstadoPersona
     */
    private configureClassEstadoPersona(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Estadopersona.siuueliminar:
                this.title = this.langMng.translateText('cls_EstadoPersona_svc_eliminar',
                    'Eliminar estado persona');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisestadopersona';
                this.argNameInRequest = 'p_thisestadopersona_oid';
                this.argClassName = ModelConstants.Estadopersona.name;
                this.argAlias = this.langMng.translateText(
                    'cls_EstadoPersona_svc_eliminar_inArg_p_thisEstadoPersona',
                    'Estado persona');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class FormaPago
     */
    private configureClassFormaPago(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Formapago.siuueliminar:
                this.title = this.langMng.translateText('cls_FormaPago_svc_eliminar',
                    'Eliminar forma de pago');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisformapago';
                this.argNameInRequest = 'p_thisformapago_oid';
                this.argClassName = ModelConstants.Formapago.name;
                this.argAlias = this.langMng.translateText(
                    'cls_FormaPago_svc_eliminar_inArg_p_thisFormaPago',
                    'Forma pago');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class TipoIdentificacion
     */
    private configureClassTipoIdentificacion(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Tipoidentificacion.siuueliminar:
                this.title = this.langMng.translateText('cls_TipoIdentificacion_svc_eliminar',
                    'Eliminar tipo de identificación');
                this.serviceName = 'eliminar';
                this.argName = 'p_thistipoidentificacion';
                this.argNameInRequest = 'p_thistipoidentificacion_oid';
                this.argClassName = ModelConstants.Tipoidentificacion.name;
                this.argAlias = this.langMng.translateText(
                    'cls_TipoIdentificacion_svc_eliminar_inArg_p_thisTipoIdentificacion',
                    'Tipo identificación');
                this.argSupInfAttNames = 'nombrecorto,descripcion';
                this.argSupInfAttTypes = [Field.dtString, Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Eps
     */
    private configureClassEps(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Eps.siuueliminar:
                this.title = this.langMng.translateText('cls_Eps_svc_eliminar',
                    'Eliminar EPS');
                this.serviceName = 'eliminar';
                this.argName = 'p_thiseps';
                this.argNameInRequest = 'p_thiseps_oid';
                this.argClassName = ModelConstants.Eps.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Eps_svc_eliminar_inArg_p_thisEPS',
                    'EPS');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class EntidadFinancieraC
     */
    private configureClassEntidadFinancieraC(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Entidadfinancierac.siuueliminar:
                this.title = this.langMng.translateText('cls_EntidadFinancieraC_svc_eliminar',
                    'Eliminar entidad financiera');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisentidadfinanciera';
                this.argNameInRequest = 'p_thisentidadfinanciera_oid';
                this.argClassName = ModelConstants.Entidadfinancierac.name;
                this.argAlias = this.langMng.translateText(
                    'cls_EntidadFinancieraC_svc_eliminar_inArg_p_thisEntidadFinanciera',
                    'Entidad financiera');
                this.argSupInfAttNames = 'codigo';
                this.argSupInfAttTypes = [Field.dtInt];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class TipoEntidadC
     */
    private configureClassTipoEntidadC(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Tipoentidadc.siuueliminar:
                this.title = this.langMng.translateText('cls_TipoEntidadC_svc_eliminar',
                    'Eliminar tipo de entidad');
                this.serviceName = 'eliminar';
                this.argName = 'p_thistipoentidad';
                this.argNameInRequest = 'p_thistipoentidad_oid';
                this.argClassName = ModelConstants.Tipoentidadc.name;
                this.argAlias = this.langMng.translateText(
                    'cls_TipoEntidadC_svc_eliminar_inArg_p_thisTipoEntidad',
                    'Tipo entidad');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class TipoInstitucionC
     */
    private configureClassTipoInstitucionC(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Tipoinstitucionc.siuueliminar:
                this.title = this.langMng.translateText('cls_TipoInstitucionC_svc_eliminar',
                    'Eliminar tipo de institución');
                this.serviceName = 'eliminar';
                this.argName = 'p_thistipoinstitucion';
                this.argNameInRequest = 'p_thistipoinstitucion_oid';
                this.argClassName = ModelConstants.Tipoinstitucionc.name;
                this.argAlias = this.langMng.translateText(
                    'cls_TipoInstitucionC_svc_eliminar_inArg_p_thisTipoInstitucion',
                    'Tipo institución');
                this.argSupInfAttNames = 'nombre';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Pais
     */
    private configureClassPais(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Pais.siuueliminar:
                this.title = this.langMng.translateText('cls_Pais_svc_eliminar',
                    'Eliminar país');
                this.serviceName = 'eliminar';
                this.argName = 'p_thispais';
                this.argNameInRequest = 'p_thispais_oid';
                this.argClassName = ModelConstants.Pais.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Pais_svc_eliminar_inArg_p_thisPais',
                    'País');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Firma
     */
    private configureClassFirma(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Firma.siuueliminar:
                this.title = this.langMng.translateText('cls_Firma_svc_eliminar',
                    '¿Está seguro de que desea eliminar la firma del responsable de regional?');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisfirma';
                this.argNameInRequest = 'p_thisfirma_oid';
                this.argClassName = ModelConstants.Firma.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Firma_svc_eliminar_inArg_p_thisFirma',
                    'Firma');
                this.argSupInfAttNames = 'identificador';
                this.argSupInfAttTypes = [Field.dtAuto];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class ParentescoDom
     */
    private configureClassParentescoDom(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Parentescodom.siuueliminar:
                this.title = this.langMng.translateText('cls_ParentescoDom_svc_eliminar',
                    'Eliminar parentesco de dominio');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisparentescodom';
                this.argNameInRequest = 'p_thisparentescodom_oid';
                this.argClassName = ModelConstants.Parentescodom.name;
                this.argAlias = this.langMng.translateText(
                    'cls_ParentescoDom_svc_eliminar_inArg_p_thisParentescoDom',
                    'Parentesco dominio');
                this.argSupInfAttNames = 'identificador';
                this.argSupInfAttTypes = [Field.dtAuto, Field.dtAuto];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class TipoSucursalC
     */
    private configureClassTipoSucursalC(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Tiposucursalc.siuueliminar:
                this.title = this.langMng.translateText('cls_TipoSucursalC_svc_eliminar',
                    'Eliminar tipo de sucursal');
                this.serviceName = 'eliminar';
                this.argName = 'p_thistiposucursalc';
                this.argNameInRequest = 'p_thistiposucursalc_oid';
                this.argClassName = ModelConstants.Tiposucursalc.name;
                this.argAlias = this.langMng.translateText(
                    'cls_TipoSucursalC_svc_eliminar_inArg_p_thisTipoSucursalC',
                    'Tipo Sucursal');
                this.argSupInfAttNames = 'codigo';
                this.argSupInfAttTypes = [Field.dtInt];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class DetalleTarifa
     */
    private configureClassDetalleTarifa(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Detalletarifa.siuuteliminar:
                this.title = this.langMng.translateText('cls_DetalleTarifa_svc_TELIMINAR',
                    'Eliminar Detalle de Tarifa');
                this.serviceName = 'TELIMINAR';
                this.argName = 'p_thisdetalletarifa';
                this.argNameInRequest = 'p_thisdetalletarifa_oid';
                this.argClassName = ModelConstants.Detalletarifa.name;
                this.argAlias = this.langMng.translateText(
                    'cls_DetalleTarifa_svc_TELIMINAR_inArg_p_thisDetalleTarifa',
                    'Detalle de Tarifa');
                this.argSupInfAttNames = 'id_detalletarifa';
                this.argSupInfAttTypes = [Field.dtAuto];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class InstitucionMatNeo
     */
    private configureClassInstitucionMatNeo(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Institucionmatneo.siuueliminar:
                this.title = this.langMng.translateText('cls_InstitucionMatNeo_svc_eliminar',
                    'Eliminar');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisinstitucionmatneo';
                this.argNameInRequest = 'p_thisinstitucionmatneo_oid';
                this.argClassName = ModelConstants.Institucionmatneo.name;
                this.argAlias = this.langMng.translateText(
                    'cls_InstitucionMatNeo_svc_eliminar_inArg_p_thisInstitucionMatNeo',
                    'Institución Maternal/Neonatal');
                this.argSupInfAttNames = 'nombre';
                this.argSupInfAttTypes = [Field.dtString];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class MotDevAreaMedica
     */
    private configureClassMotDevAreaMedica(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Motdevareamedica.siuueliminar:
                this.title = this.langMng.translateText('cls_MotDevAreaMedica_svc_eliminar',
                    'Eliminar');
                this.serviceName = 'eliminar';
                this.argName = 'p_thismotdevareamedica';
                this.argNameInRequest = 'p_thismotdevareamedica_oid';
                this.argClassName = ModelConstants.Motdevareamedica.name;
                this.argAlias = this.langMng.translateText(
                    'cls_MotDevAreaMedica_svc_eliminar_inArg_p_thisMotDevAreaMedica',
                    'Motivo devolución');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class ReportesProcAlm
     */
    private configureClassReportesProcAlm(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Reportesprocalm.siuueliminar:
                this.title = this.langMng.translateText('cls_ReportesProcAlm_svc_eliminar',
                    'Eliminar');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisreportesprocalm';
                this.argNameInRequest = 'p_thisreportesprocalm_oid';
                this.argClassName = ModelConstants.Reportesprocalm.name;
                this.argAlias = this.langMng.translateText(
                    'cls_ReportesProcAlm_svc_eliminar_inArg_p_thisReportesProcAlm',
                    'Info Reporte');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Prorrateo
     */
    private configureClassProrrateo(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Prorrateo.siuueliminar:
                this.title = this.langMng.translateText('cls_Prorrateo_svc_eliminar',
                    'Eliminar');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisprorrateo';
                this.argNameInRequest = 'p_thisprorrateo_oid';
                this.argClassName = ModelConstants.Prorrateo.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Prorrateo_svc_eliminar_inArg_p_thisProrrateo',
                    'Prorrateo');
                this.argSupInfAttNames = 'porcentaje';
                this.argSupInfAttTypes = [Field.dtReal];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class TipoFactura
     */
    private configureClassTipoFactura(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Tipofactura.siuueliminar:
                this.title = this.langMng.translateText('cls_TipoFactura_svc_eliminar',
                    'Eliminar');
                this.serviceName = 'eliminar';
                this.argName = 'p_thistipofactura';
                this.argNameInRequest = 'p_thistipofactura_json';
                this.argClassName = ModelConstants.Tipofactura.name;
                this.argAlias = this.langMng.translateText(
                    'cls_TipoFactura_svc_eliminar_inArg_p_thisTipoFactura',
                    'Tipo Factura');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class ParamReporte
     */
    private configureClassParamReporte(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Paramreporte.siuutdelete:
                this.title = this.langMng.translateText('cls_ParamReporte_svc_TDELETE',
                    'Eliminar');
                this.serviceName = 'TDELETE';
                this.argName = 'p_thisparamreporte';
                this.argNameInRequest = 'p_thisparamreporte_oid';
                this.argClassName = ModelConstants.Paramreporte.name;
                this.argAlias = this.langMng.translateText(
                    'cls_ParamReporte_svc_TDELETE_inArg_p_thisParamReporte',
                    'Parámetro de reporte');
                this.argSupInfAttNames = 'id_paramreporte';
                this.argSupInfAttTypes = [Field.dtAuto];
                siuFound = true;
                break;
            case ModelConstants.Paramreporte.siuutsubir:
                this.title = this.langMng.translateText('cls_ParamReporte_svc_TSUBIR',
                    'Subir');
                this.serviceName = 'TSUBIR';
                this.argName = 'p_thisparamreporte';
                this.argNameInRequest = 'p_thisparamreporte_oid';
                this.argClassName = ModelConstants.Paramreporte.name;
                this.argAlias = this.langMng.translateText(
                    'cls_ParamReporte_svc_TSUBIR_inArg_p_thisParamReporte',
                    'Parámetro de reporte');
                this.argSupInfAttNames = 'id_paramreporte';
                this.argSupInfAttTypes = [Field.dtAuto];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Paramreporte.siuutbajar:
                this.title = this.langMng.translateText('cls_ParamReporte_svc_TBAJAR',
                    'Bajar');
                this.serviceName = 'TBAJAR';
                this.argName = 'p_thisparamreporte';
                this.argNameInRequest = 'p_thisparamreporte_oid';
                this.argClassName = ModelConstants.Paramreporte.name;
                this.argAlias = this.langMng.translateText(
                    'cls_ParamReporte_svc_TBAJAR_inArg_p_thisParamReporte',
                    'Parámetro de reporte');
                this.argSupInfAttNames = 'id_paramreporte';
                this.argSupInfAttTypes = [Field.dtAuto];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class TipoNovedad
     */
    private configureClassTipoNovedad(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Tiponovedad.siuueliminar:
                this.title = this.langMng.translateText('cls_TipoNovedad_svc_eliminar',
                    'Eliminar');
                this.serviceName = 'eliminar';
                this.argName = 'p_thistiponovedad';
                this.argNameInRequest = 'p_thistiponovedad_json';
                this.argClassName = ModelConstants.Tiponovedad.name;
                this.argAlias = this.langMng.translateText(
                    'cls_TipoNovedad_svc_eliminar_inArg_p_thisTipoNovedad',
                    'Tipo Novedad');
                this.argSupInfAttNames = 'nombre';
                this.argSupInfAttTypes = [Field.dtString];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Novedad
     */
    private configureClassNovedad(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Novedad.siuuteliminar:
                this.title = this.langMng.translateText('cls_Novedad_svc_TELIMINAR',
                    'Eliminar');
                this.serviceName = 'TELIMINAR';
                this.argName = 'p_thisnovedad';
                this.argNameInRequest = 'p_thisnovedad_oid';
                this.argClassName = ModelConstants.Novedad.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Novedad_svc_TELIMINAR_inArg_p_thisNovedad',
                    'Novedad');
                this.argSupInfAttNames = 'nombre';
                this.argSupInfAttTypes = [Field.dtString];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class Causal
     */
    private configureClassCausal(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Causal.siuueliminar:
                this.title = this.langMng.translateText('cls_Causal_svc_eliminar',
                    'Eliminar');
                this.serviceName = 'eliminar';
                this.argName = 'p_thiscausal';
                this.argNameInRequest = 'p_thiscausal_oid';
                this.argClassName = ModelConstants.Causal.name;
                this.argAlias = this.langMng.translateText(
                    'cls_Causal_svc_eliminar_inArg_p_thisCausal',
                    'Causal');
                this.argSupInfAttNames = 'nombre';
                this.argSupInfAttTypes = [Field.dtString];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class CausaExclusion
     */
    private configureClassCausaExclusion(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Causaexclusion.siuueliminar:
                this.title = this.langMng.translateText('cls_CausaExclusion_svc_eliminar',
                    'Eliminar');
                this.serviceName = 'eliminar';
                this.argName = 'p_thiscausaexclusion';
                this.argNameInRequest = 'p_thiscausaexclusion_oid';
                this.argClassName = ModelConstants.Causaexclusion.name;
                this.argAlias = this.langMng.translateText(
                    'cls_CausaExclusion_svc_eliminar_inArg_p_thisCausaExclusion',
                    'Causa de Exclusion');
                this.argSupInfAttNames = 'descripcion';
                this.argSupInfAttTypes = [Field.dtString];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class MotivoExcepcionSolNov
     */
    private configureClassMotivoExcepcionSolNov(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Motivoexcepcionsolnov.siuueliminar:
                this.title = this.langMng.translateText('cls_MotivoExcepcionSolNov_svc_eliminar',
                    'Eliminar');
                this.serviceName = 'eliminar';
                this.argName = 'p_thismotivoexcepcionsolnov';
                this.argNameInRequest = 'p_thismotivoexcepcionsolnov_oid';
                this.argClassName = ModelConstants.Motivoexcepcionsolnov.name;
                this.argAlias = this.langMng.translateText(
                    'cls_MotivoExcepcionSolNov_svc_eliminar_inArg_p_thisMotivoExcepcionSolNov',
                    'Motivo Excepción');
                this.argSupInfAttNames = 'id';
                this.argSupInfAttTypes = [Field.dtAuto];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class GrupoAsignacion
     */
    private configureClassGrupoAsignacion(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Grupoasignacion.siuuteliminar:
                this.title = this.langMng.translateText('cls_GrupoAsignacion_svc_TELIMINAR',
                    'Eliminar');
                this.serviceName = 'TELIMINAR';
                this.argName = 'p_thisgrupoasignacion';
                this.argNameInRequest = 'p_thisgrupoasignacion_oid';
                this.argClassName = ModelConstants.Grupoasignacion.name;
                this.argAlias = this.langMng.translateText(
                    'cls_GrupoAsignacion_svc_TELIMINAR_inArg_p_thisGrupoAsignacion',
                    'Grupo de Asignación');
                this.argSupInfAttNames = 'nombre';
                this.argSupInfAttTypes = [Field.dtString];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class GrupoAsignacionNovedad
     */
    private configureClassGrupoAsignacionNovedad(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Grupoasignacionnovedad.siuueliminar:
                this.title = this.langMng.translateText('cls_GrupoAsignacionNovedad_svc_eliminar',
                    'Eliminar');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisgrupoasignacionnovedad';
                this.argNameInRequest = 'p_thisgrupoasignacionnovedad_oid';
                this.argClassName = ModelConstants.Grupoasignacionnovedad.name;
                this.argAlias = this.langMng.translateText(
                    'cls_GrupoAsignacionNovedad_svc_eliminar_inArg_p_thisGrupoAsignacionNovedad',
                    'Grupo Asignación Novedades');
                this.argSupInfAttNames = 'id';
                this.argSupInfAttTypes = [Field.dtAuto];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class ConfiguracionANS
     */
    private configureClassConfiguracionANS(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Configuracionans.siuuteliminar:
                this.title = this.langMng.translateText('cls_ConfiguracionANS_svc_TELIMINAR',
                    'Eliminar');
                this.serviceName = 'TELIMINAR';
                this.argName = 'p_thisconfiguracionans';
                this.argNameInRequest = 'p_thisconfiguracionans_oid';
                this.argClassName = ModelConstants.Configuracionans.name;
                this.argAlias = this.langMng.translateText(
                    'cls_ConfiguracionANS_svc_TELIMINAR_inArg_p_thisConfiguracionANS',
                    'Acuerdo nivel de servicio');
                this.argSupInfAttNames = 'id';
                this.argSupInfAttTypes = [Field.dtAuto];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class PlantillaReporte
     */
    private configureClassPlantillaReporte(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Plantillareporte.siuueliminar:
                this.title = this.langMng.translateText('cls_PlantillaReporte_svc_eliminar',
                    'Eliminar');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisplantillareporte';
                this.argNameInRequest = 'p_thisplantillareporte_oid';
                this.argClassName = ModelConstants.Plantillareporte.name;
                this.argAlias = this.langMng.translateText(
                    'cls_PlantillaReporte_svc_eliminar_inArg_p_thisPlantillaReporte',
                    'Plantilla reporte');
                this.argSupInfAttNames = 'titulo';
                this.argSupInfAttTypes = [Field.dtString];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class ReportesDominio
     */
    private configureClassReportesDominio(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Reportesdominio.siuueliminar:
                this.title = this.langMng.translateText('cls_ReportesDominio_svc_eliminar',
                    'Desasociar');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisreportesdominio';
                this.argNameInRequest = 'p_thisreportesdominio_oid';
                this.argClassName = ModelConstants.Reportesdominio.name;
                this.argAlias = this.langMng.translateText(
                    'cls_ReportesDominio_svc_eliminar_inArg_p_thisReportesDominio',
                    'Reportes de Dominio');
                this.argSupInfAttNames = 'plantillareporte.titulo';
                this.argSupInfAttTypes = [Field.dtString];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class FechaIniEPS
     */
    private configureClassFechaIniEPS(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Fechainieps.siuueliminar:
                this.title = this.langMng.translateText('cls_FechaIniEPS_svc_eliminar',
                    'Eliminar');
                this.serviceName = 'eliminar';
                this.argName = 'p_thisfechainieps';
                this.argNameInRequest = 'p_thisfechainieps_oid';
                this.argClassName = ModelConstants.Fechainieps.name;
                this.argAlias = this.langMng.translateText(
                    'cls_FechaIniEPS_svc_eliminar_inArg_p_thisFechaIniEPS',
                    'Fechas inicio vigencia para EPS');
                this.argSupInfAttNames = 'id';
                this.argSupInfAttTypes = [Field.dtAuto];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for Global Services
     */
    private configureGlobalServices(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Globalservices.siuutgsincproductos:
                this.title = this.langMng.translateText('gs_TGSINCPRODUCTOS',
                    'Sincronizar productos');
                this.serviceName = 'TGSINCPRODUCTOS';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgsincplanes:
                this.title = this.langMng.translateText('gs_TGSINCPLANES',
                    'Sincronizar planes');
                this.serviceName = 'TGSINCPLANES';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgsincparentescos:
                this.title = this.langMng.translateText('gs_TGSINCPARENTESCOS',
                    'Sincronizar parentescos');
                this.serviceName = 'TGSINCPARENTESCOS';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgsincperiodicidades:
                this.title = this.langMng.translateText('gs_TGSINCPERIODICIDADES',
                    'Sincronizar periodicidades');
                this.serviceName = 'TGSINCPERIODICIDADES';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgsincestadoscontrato:
                this.title = this.langMng.translateText('gs_TGSINCESTADOSCONTRATO',
                    'Sincronizar estados de contrato');
                this.serviceName = 'TGSINCESTADOSCONTRATO';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgsincestadosbeneficiario:
                this.title = this.langMng.translateText('gs_TGSINCESTADOSBENEFICIARIO',
                    'Sincronizar estados de beneficiario');
                this.serviceName = 'TGSINCESTADOSBENEFICIARIO';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgsincregionales:
                this.title = this.langMng.translateText('gs_TGSINCREGIONALES',
                    'Sincronizar regionales');
                this.serviceName = 'TGSINCREGIONALES';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgsincsucursales:
                this.title = this.langMng.translateText('gs_TGSINCSUCURSALES',
                    'Sincronizar sucursales');
                this.serviceName = 'TGSINCSUCURSALES';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuuogsincgruposasociados:
                this.title = this.langMng.translateText('gs_OGSINCGRUPOSASOCIADOS',
                    'Sincronizar grupos asociados');
                this.serviceName = 'OGSINCGRUPOSASOCIADOS';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgsincestadosciviles:
                this.title = this.langMng.translateText('gs_TGSINCESTADOSCIVILES',
                    'Sincronizar estados civiles');
                this.serviceName = 'TGSINCESTADOSCIVILES';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgsincdepartamentos:
                this.title = this.langMng.translateText('gs_TGSINCDEPARTAMENTOS',
                    'Sincronizar departamentos');
                this.serviceName = 'TGSINCDEPARTAMENTOS';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgsincompanias:
                this.title = this.langMng.translateText('gs_TGSINCOMPANIAS',
                    'Sincronizar compañías');
                this.serviceName = 'TGSINCOMPANIAS';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuuogsincmunicipios:
                this.title = this.langMng.translateText('gs_OGSINCMUNICIPIOS',
                    'Sincronizar municipios');
                this.serviceName = 'OGSINCMUNICIPIOS';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgsinctiposdireccion:
                this.title = this.langMng.translateText('gs_TGSINCTIPOSDIRECCION',
                    'Sincronizar tipos de dirección');
                this.serviceName = 'TGSINCTIPOSDIRECCION';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgsincestadospersona:
                this.title = this.langMng.translateText('gs_TGSINCESTADOSPERSONA',
                    'Sincronizar estados de persona');
                this.serviceName = 'TGSINCESTADOSPERSONA';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgsincformaspago:
                this.title = this.langMng.translateText('gs_TGSINCFORMASPAGO',
                    'Sincronizar formas de pago');
                this.serviceName = 'TGSINCFORMASPAGO';
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgsinctiposidentificacion:
                this.title = this.langMng.translateText('gs_TGSINCTIPOSIDENTIFICACION',
                    'Sincronizar tipos de identificación');
                this.serviceName = 'TGSINCTIPOSIDENTIFICACION';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgsincepss:
                this.title = this.langMng.translateText('gs_TGSINCEPSS',
                    'Sincronizar EPS');
                this.serviceName = 'TGSINCEPSS';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgsincpaises:
                this.title = this.langMng.translateText('gs_TGSINCPAISES',
                    'Sincronizar países');
                this.serviceName = 'TGSINCPAISES';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgsincentidadesfin:
                this.title = this.langMng.translateText('gs_TGSINCENTIDADESFIN',
                    'Sincronizar entidades financieras');
                this.serviceName = 'TGSINCENTIDADESFIN';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgsinctiposdeentidad:
                this.title = this.langMng.translateText('gs_TGSINCTIPOSDEENTIDAD',
                    'Sincronizar tipos de entidad');
                this.serviceName = 'TGSINCTIPOSDEENTIDAD';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgsinctiposinstitucion:
                this.title = this.langMng.translateText('gs_TGSINCTIPOSINSTITUCION',
                    'Sincronizar tipos de institución');
                this.serviceName = 'TGSINCTIPOSINSTITUCION';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgsinctipossucursal:
                this.title = this.langMng.translateText('gs_TGSINCTIPOSSUCURSAL',
                    'Sincronizar tipos de sucursal');
                this.serviceName = 'TGSINCTIPOSSUCURSAL';
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgeliminartarifa:
                this.title = this.langMng.translateText('gs_TGELIMINARTARIFA',
                    'Eliminar Tarifa');
                this.serviceName = 'TGELIMINARTARIFA';
                this.argName = 'ptarifa';
                this.argNameInRequest = 'ptarifa_oid';
                this.argClassName = ModelConstants.Tarifa.name;
                this.argAlias = this.langMng.translateText(
                    'gs_TGELIMINARTARIFA_inArg_pTarifa',
                    'Tarifa');
                this.argSupInfAttNames = 'productot.descripcion,plant.nombre,codigo';
                this.argSupInfAttTypes = [Field.dtString, Field.dtString, Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutdelcontsindocsol:
                this.title = this.langMng.translateText('gs_tdelcontsindocsol',
                    'Eliminar');
                this.serviceName = 'tdelcontsindocsol';
                this.argName = 'pt_p_thiscontsindocsol';
                this.argNameInRequest = 'pt_p_thiscontsindocsol_oid';
                this.argClassName = ModelConstants.Contsindocsol.name;
                this.argAlias = this.langMng.translateText(
                    'gs_tdelcontsindocsol_inArg_pt_p_thisContSinDocSol',
                    'Contratos exentos doc. Solicitud');
                this.argSupInfAttNames = 'id_contsindocsol';
                this.argSupInfAttTypes = [Field.dtAuto];
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutdelcombo:
                this.title = this.langMng.translateText('gs_TDELCOMBO',
                    'Eliminar contrato combo');
                this.serviceName = 'TDELCOMBO';
                this.argName = 'pt_p_thiscontratocombo';
                this.argNameInRequest = 'pt_p_thiscontratocombo_oid';
                this.argClassName = ModelConstants.Contratocombo.name;
                this.argAlias = this.langMng.translateText(
                    'gs_TDELCOMBO_inArg_pt_p_thisContratoCombo',
                    'Contrato Combo');
                this.argSupInfAttNames = 'id';
                this.argSupInfAttTypes = [Field.dtAuto];
                siuFound = true;
                break;
            case ModelConstants.Globalservices.siuutgdelcontratoexento:
                this.title = this.langMng.translateText('gs_TGDELCONTRATOEXENTO',
                    'Eliminar');
                this.serviceName = 'TGDELCONTRATOEXENTO';
                this.argName = 'pt_p_thiscontratosexentosfingr';
                this.argNameInRequest = 'pt_p_thiscontratosexentosfingr_oid';
                this.argClassName = ModelConstants.Contratosexentosfingreso.name;
                this.argAlias = this.langMng.translateText(
                    'gs_TGDELCONTRATOEXENTO_inArg_pt_p_thisContratosExentosFIngr',
                    'Contrato');
                this.argSupInfAttNames = 'numcontrato';
                this.argSupInfAttTypes = [Field.dtString];
                siuFound = true;
                break;
        }
        return siuFound;
    }
}
