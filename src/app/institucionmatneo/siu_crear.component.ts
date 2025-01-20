import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldDefinedSelection, FieldOVLenseSearch, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-institucionmatneo-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstitucionMatNeoSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puagrTarifa: FieldOVLenseSearch;
    public puagrTipoIdentificacion: FieldOVPreload;
    public puagrMunicipio: FieldOVLenseSearch;
    public puatrNumIdentificacion: Field;
    public puatrNombre: Field;
    public puatrParaMaternidad: FieldDefinedSelection;
    public puatrParaNeonatal: FieldDefinedSelection;
    public puatrFechaInicial: Field;
    public puatrFechaFinal: Field;
    public puatrCodigo: Field;

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param stdFun Standard functions
     * @param condNavMng Conditional manager
     */
    constructor(
        public override appGlobalInfo: AppGlobalInfo, public override util: Util, public override changeDetectorRef: ChangeDetectorRef,
        public langMng: LanguageMng, public stdFun: StandardFunctions,
        public override condNavMng: ConditionalNavigationMng) {
        super(appGlobalInfo, util, changeDetectorRef, condNavMng);
        this.idXML = 'Clas_1463993499648846Ser_1UIServ_1';
        this.className = ModelConstants.Institucionmatneo.name;
        this.iuName = ModelConstants.Institucionmatneo.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_InstitucionMatNeo_svc_crear',
            'Crear');

        // Create inbound argument components
        this.puagrTarifa = new FieldOVLenseSearch(this.langMng);
        this.puagrTipoIdentificacion = new FieldOVPreload(this.langMng);
        this.puagrMunicipio = new FieldOVLenseSearch(this.langMng);
        this.puatrNumIdentificacion = new Field(this.langMng);
        this.puatrNombre = new Field(this.langMng);
        this.puatrParaMaternidad = new FieldDefinedSelection(this.langMng);
        this.puatrParaNeonatal = new FieldDefinedSelection(this.langMng);
        this.puatrFechaInicial = new Field(this.langMng);
        this.puatrFechaFinal = new Field(this.langMng);
        this.puatrCodigo = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puagrTarifa.nameInRequest = 'p_agrtarifa';
        this.puagrTarifa.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_svc_crear_inArg_p_agrTarifa',
            'Tarifa');
        this.puagrTarifa.mandatory = true;
        this.puagrTarifa.dataType = ModelConstants.Tarifa.name;
        this.puagrTarifa.maxLength = 262;
        this.puagrTarifa.assignCSS();
        this.fields.push(this.puagrTarifa);

        this.puagrTipoIdentificacion.nameInRequest = 'p_agrtipoidentificacion';
        this.puagrTipoIdentificacion.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_svc_crear_inArg_p_agrTipoIdentificacion',
            'Tipo Identificacion');
        this.puagrTipoIdentificacion.mandatory = true;
        this.puagrTipoIdentificacion.dataType = ModelConstants.Tipoidentificacion.name;
        this.puagrTipoIdentificacion.maxLength = 170;
        this.puagrTipoIdentificacion.assignCSS();
        this.fields.push(this.puagrTipoIdentificacion);

        this.puagrMunicipio.nameInRequest = 'p_agrmunicipio';
        this.puagrMunicipio.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_svc_crear_inArg_p_agrMunicipio',
            'Municipio');
        this.puagrMunicipio.mandatory = true;
        this.puagrMunicipio.dataType = ModelConstants.Municipio.name;
        this.puagrMunicipio.maxLength = 150;
        this.puagrMunicipio.assignCSS();
        this.fields.push(this.puagrMunicipio);

        this.puatrNumIdentificacion.nameInRequest = 'p_atrnumidentificacion';
        this.puatrNumIdentificacion.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_svc_crear_inArg_p_atrNumIdentificacion',
            'Nº Identificación');
        this.puatrNumIdentificacion.mandatory = true;
        this.puatrNumIdentificacion.dataType = Field.dtString;
        this.puatrNumIdentificacion.maxLength = 60;
        this.puatrNumIdentificacion.assignCSS();
        this.fields.push(this.puatrNumIdentificacion);

        this.puatrNombre.nameInRequest = 'p_atrnombre';
        this.puatrNombre.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_svc_crear_inArg_p_atrNombre',
            'Nombre de la Sucursal');
        this.puatrNombre.mandatory = true;
        this.puatrNombre.dataType = Field.dtString;
        this.puatrNombre.maxLength = 100;
        this.puatrNombre.assignCSS();
        this.fields.push(this.puatrNombre);

        this.puatrParaMaternidad.nameInRequest = 'p_atrparamaternidad';
        this.puatrParaMaternidad.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_svc_crear_inArg_p_atrParaMaternidad',
            'Maternidad');
        this.puatrParaMaternidad.mandatory = true;
        this.puatrParaMaternidad.dataType = Field.dtBool;
        this.puatrParaMaternidad.options = DefinedSelections.DS_SINO;
        this.puatrParaMaternidad.value = false;
        this.puatrParaMaternidad.assignCSS();
        this.fields.push(this.puatrParaMaternidad);

        this.puatrParaNeonatal.nameInRequest = 'p_atrparaneonatal';
        this.puatrParaNeonatal.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_svc_crear_inArg_p_atrParaNeonatal',
            'Neonatal');
        this.puatrParaNeonatal.mandatory = true;
        this.puatrParaNeonatal.dataType = Field.dtBool;
        this.puatrParaNeonatal.options = DefinedSelections.DS_SINO;
        this.puatrParaNeonatal.value = false;
        this.puatrParaNeonatal.assignCSS();
        this.fields.push(this.puatrParaNeonatal);

        this.puatrFechaInicial.nameInRequest = 'p_atrfechainicial';
        this.puatrFechaInicial.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_svc_crear_inArg_p_atrFechaInicial',
            'Fecha inicial');
        this.puatrFechaInicial.mandatory = true;
        this.puatrFechaInicial.dataType = Field.dtDate;
        this.puatrFechaInicial.assignCSS();
        this.fields.push(this.puatrFechaInicial);

        this.puatrFechaFinal.nameInRequest = 'p_atrfechafinal';
        this.puatrFechaFinal.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_svc_crear_inArg_p_atrFechaFinal',
            'Fecha final');
        this.puatrFechaFinal.mandatory = true;
        this.puatrFechaFinal.dataType = Field.dtDate;
        this.puatrFechaFinal.assignCSS();
        this.fields.push(this.puatrFechaFinal);

        this.puatrCodigo.nameInRequest = 'p_atrcodigo';
        this.puatrCodigo.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_svc_crear_inArg_p_atrCodigo',
            'Código');
        this.puatrCodigo.mandatory = true;
        this.puatrCodigo.dataType = Field.dtString;
        this.puatrCodigo.maxLength = 20;
        this.puatrCodigo.assignCSS();
        this.fields.push(this.puatrCodigo);
    }

    /**
     * Initialize arguments from context that identify a Role
     */
    public override initializeFromCtxRelated(): void {
        let lastRole = '';
        let lastRoleOid = null;
        if (this.context.exchangeInfo) {
            lastRole = this.context.exchangeInfo.getLastNavigationRole();
            lastRoleOid = this.context.exchangeInfo.getLastNavigationRoleOid();
        }

        if (lastRole && lastRoleOid) {
            if (lastRole === 'Tarifa') {
                this.puagrTarifa.setValue(lastRoleOid);
                this.executeDependecyRulespuagrtarifa('SetValue', true);
                this.puagrTarifa.enabled = false;
                this.executeDependecyRulespuagrtarifa('SetEnabled', true);
            }
            if (lastRole === 'TipoIdentificacion') {
                this.puagrTipoIdentificacion.setValue(lastRoleOid);
                this.puagrTipoIdentificacion.enabled = false;
            }
            if (lastRole === 'Municipio') {
                this.puagrMunicipio.setValue(lastRoleOid);
                this.executeDependecyRulespuagrmunicipio('SetValue', true);
                this.puagrMunicipio.enabled = false;
                this.executeDependecyRulespuagrmunicipio('SetEnabled', true);
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // puagrTipoIdentificacion
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('TipoIdentificacion', 'IC_TipoIdentificacion', [], null, 'OC_TipoIdentificacion').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.puagrTipoIdentificacion.loadPreload(response.results);
                } else {
                    this.puagrTipoIdentificacion.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                this.processErrorInLoadPreload(response.resultDescription);
            }
        );
        this.numberOfPendingPreload++;
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puagrTarifa'.toLowerCase()) {
            this.puagrTarifa.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespuagrtarifa('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'puagrMunicipio'.toLowerCase()) {
            this.puagrMunicipio.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespuagrmunicipio('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_agrTarifa argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuagrtarifa(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopuagrtarifa();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_agrTarifa argument
     */
    private setSuppInfopuagrtarifa(): void {

        const displaySetIC = 'ProductoT.Descripcion,PlanT.Nombre,Codigo';
        let numberMissingSupInfo = 0;
        for (const value of this.puagrTarifa.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Tarifa.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puagrTarifa.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puagrTarifa.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Tarifa.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString, Field.dtString]);
                    }
                }
                this.puagrTarifa.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the p_agrTarifa lense search argument
     */
    public onpuagrtarifaChange(): void {

        const searchText = this.puagrTarifa.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puagrTarifa.lastText) {
                this.puagrTarifa.removeCSSClass('noResultsLenseSearch');
                this.puagrTarifa.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Tarifa.name, 'IC_Tarifa', searchText, [], null).then(
                        (response: any) => {
                            this.puagrTarifa.removeCSSClass('noResultsLenseSearch');
                            this.puagrTarifa.searchResults = response.results;
                            if (this.puagrTarifa.searchResults &&
                                this.puagrTarifa.searchResults.length === 0) {
                                this.puagrTarifa.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puagrTarifa.searchResults &&
                                this.puagrTarifa.searchResults.length === 1) {
                                this.processpuagrtarifaSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puagrTarifa.removeCSSClass('noResultsLenseSearch');
                            this.puagrTarifa.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puagrTarifa.removeCSSClass('noResultsLenseSearch');
            this.puagrTarifa.searchResults = [];
            this.cleanpuagrtarifa();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_agrTarifa lense search argument
     */
    public processpuagrtarifaSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puagrTarifa.searchResults.length > index) {
            selectedInstance = this.puagrTarifa.searchResults[index];
        }
        // Clean the result list
        this.puagrTarifa.searchResults = [];
        if (selectedInstance) {
            if (!this.puagrTarifa.allowMultiSelect) {
                this.puagrTarifa.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puagrTarifa.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespuagrtarifa('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_agrTarifa lense search argument
     */
    public cleanpuagrtarifa(): void {
        this.clearValidationMessages();
        this.puagrTarifa.clean();
        this.executeDependecyRulespuagrtarifa('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for p_agrMunicipio argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuagrmunicipio(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopuagrmunicipio();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_agrMunicipio argument
     */
    private setSuppInfopuagrmunicipio(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puagrMunicipio.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Municipio.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puagrMunicipio.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puagrMunicipio.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Municipio.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puagrMunicipio.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the p_agrMunicipio lense search argument
     */
    public onpuagrmunicipioChange(): void {

        const searchText = this.puagrMunicipio.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puagrMunicipio.lastText) {
                this.puagrMunicipio.removeCSSClass('noResultsLenseSearch');
                this.puagrMunicipio.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Municipio.name, 'IC_Municipio', searchText, [], null).then(
                        (response: any) => {
                            this.puagrMunicipio.removeCSSClass('noResultsLenseSearch');
                            this.puagrMunicipio.searchResults = response.results;
                            if (this.puagrMunicipio.searchResults &&
                                this.puagrMunicipio.searchResults.length === 0) {
                                this.puagrMunicipio.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puagrMunicipio.searchResults &&
                                this.puagrMunicipio.searchResults.length === 1) {
                                this.processpuagrmunicipioSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puagrMunicipio.removeCSSClass('noResultsLenseSearch');
                            this.puagrMunicipio.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puagrMunicipio.removeCSSClass('noResultsLenseSearch');
            this.puagrMunicipio.searchResults = [];
            this.cleanpuagrmunicipio();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_agrMunicipio lense search argument
     */
    public processpuagrmunicipioSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puagrMunicipio.searchResults.length > index) {
            selectedInstance = this.puagrMunicipio.searchResults[index];
        }
        // Clean the result list
        this.puagrMunicipio.searchResults = [];
        if (selectedInstance) {
            if (!this.puagrMunicipio.allowMultiSelect) {
                this.puagrMunicipio.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puagrMunicipio.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespuagrmunicipio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_agrMunicipio lense search argument
     */
    public cleanpuagrmunicipio(): void {
        this.clearValidationMessages();
        this.puagrMunicipio.clean();
        this.executeDependecyRulespuagrmunicipio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puagrTarifa'.toLowerCase() === argumentName.toLowerCase()) {
            this.puagrTarifa.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Tarifas';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('puagrMunicipio'.toLowerCase() === argumentName.toLowerCase()) {
            this.puagrMunicipio.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Municipio';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
