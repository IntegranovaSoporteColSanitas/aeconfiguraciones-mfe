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
    selector: 'imes-configuracionans-siu-tcrear',
    templateUrl: './siu_tcrear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfiguracionANSSIUuTCREARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public ptupuagrDominio: FieldOVLenseSearch;
    public ptupuagrNovedad: FieldOVPreload;
    public ptupuagrCausal: FieldOVPreload;
    public ptupuatrTramite: FieldDefinedSelection;
    public ptupuatrANSAreaMedica: Field;
    public ptupuatrANSAfiliaciones: Field;
    public ptupuatrHabilLunes: FieldDefinedSelection;
    public ptupuatrHabilMartes: FieldDefinedSelection;
    public ptupuatrHabilMiercoles: FieldDefinedSelection;
    public ptupuatrHabilJueves: FieldDefinedSelection;
    public ptupuatrHabilViernes: FieldDefinedSelection;
    public ptupuatrHabilSabado: FieldDefinedSelection;
    public ptupuatrHabilDomingo: FieldDefinedSelection;

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
        this.idXML = 'Clas_1586859868160432Ser_10UIServ_1';
        this.className = ModelConstants.Configuracionans.name;
        this.iuName = ModelConstants.Configuracionans.siuutcrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TCREAR';
        this.title = this.langMng.translateText('cls_ConfiguracionANS_svc_TCREAR',
            'Crear');

        // Create inbound argument components
        this.ptupuagrDominio = new FieldOVLenseSearch(this.langMng);
        this.ptupuagrNovedad = new FieldOVPreload(this.langMng);
        this.ptupuagrCausal = new FieldOVPreload(this.langMng);
        this.ptupuatrTramite = new FieldDefinedSelection(this.langMng);
        this.ptupuatrANSAreaMedica = new Field(this.langMng);
        this.ptupuatrANSAfiliaciones = new Field(this.langMng);
        this.ptupuatrHabilLunes = new FieldDefinedSelection(this.langMng);
        this.ptupuatrHabilMartes = new FieldDefinedSelection(this.langMng);
        this.ptupuatrHabilMiercoles = new FieldDefinedSelection(this.langMng);
        this.ptupuatrHabilJueves = new FieldDefinedSelection(this.langMng);
        this.ptupuatrHabilViernes = new FieldDefinedSelection(this.langMng);
        this.ptupuatrHabilSabado = new FieldDefinedSelection(this.langMng);
        this.ptupuatrHabilDomingo = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptupuagrDominio.nameInRequest = 'pt_p_agrdominio';
        this.ptupuagrDominio.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TCREAR_inArg_pt_p_agrDominio',
            'Dominio');
        this.ptupuagrDominio.mandatory = true;
        this.ptupuagrDominio.dataType = ModelConstants.Dominio.name;
        this.ptupuagrDominio.maxLength = 250;
        this.ptupuagrDominio.assignCSS();
        this.fields.push(this.ptupuagrDominio);

        this.ptupuagrNovedad.nameInRequest = 'pt_p_agrnovedad';
        this.ptupuagrNovedad.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TCREAR_inArg_pt_p_agrNovedad',
            'Novedad');
        this.ptupuagrNovedad.mandatory = false;
        this.ptupuagrNovedad.dataType = ModelConstants.Novedad.name;
        this.ptupuagrNovedad.maxLength = 50;
        this.ptupuagrNovedad.assignCSS();
        this.fields.push(this.ptupuagrNovedad);

        this.ptupuagrCausal.nameInRequest = 'pt_p_agrcausal';
        this.ptupuagrCausal.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TCREAR_inArg_pt_p_agrCausal',
            'Causal');
        this.ptupuagrCausal.mandatory = false;
        this.ptupuagrCausal.dataType = ModelConstants.Causal.name;
        this.ptupuagrCausal.maxLength = 50;
        this.ptupuagrCausal.assignCSS();
        this.fields.push(this.ptupuagrCausal);

        this.ptupuatrTramite.nameInRequest = 'pt_p_atrtramite';
        this.ptupuatrTramite.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TCREAR_inArg_pt_p_atrTramite',
            'Trámite');
        this.ptupuatrTramite.mandatory = true;
        this.ptupuatrTramite.dataType = Field.dtNat;
        this.ptupuatrTramite.options = DefinedSelections.DS_TRAMITECONFANS;
        this.ptupuatrTramite.assignCSS();
        this.fields.push(this.ptupuatrTramite);

        this.ptupuatrANSAreaMedica.nameInRequest = 'pt_p_atransareamedica';
        this.ptupuatrANSAreaMedica.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TCREAR_inArg_pt_p_atrANSAreaMedica',
            'ANS Área Médica');
        this.ptupuatrANSAreaMedica.mandatory = true;
        this.ptupuatrANSAreaMedica.dataType = Field.dtNat;
        this.ptupuatrANSAreaMedica.assignCSS();
        this.fields.push(this.ptupuatrANSAreaMedica);

        this.ptupuatrANSAfiliaciones.nameInRequest = 'pt_p_atransafiliaciones';
        this.ptupuatrANSAfiliaciones.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TCREAR_inArg_pt_p_atrANSAfiliaciones',
            'ANS Afiliaciones');
        this.ptupuatrANSAfiliaciones.mandatory = true;
        this.ptupuatrANSAfiliaciones.dataType = Field.dtNat;
        this.ptupuatrANSAfiliaciones.assignCSS();
        this.fields.push(this.ptupuatrANSAfiliaciones);

        this.ptupuatrHabilLunes.nameInRequest = 'pt_p_atrhabillunes';
        this.ptupuatrHabilLunes.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TCREAR_inArg_pt_p_atrHabilLunes',
            'Lunes');
        this.ptupuatrHabilLunes.mandatory = true;
        this.ptupuatrHabilLunes.dataType = Field.dtBool;
        this.ptupuatrHabilLunes.options = DefinedSelections.DS_SINO;
        this.ptupuatrHabilLunes.value = false;
        this.ptupuatrHabilLunes.assignCSS();
        this.fields.push(this.ptupuatrHabilLunes);

        this.ptupuatrHabilMartes.nameInRequest = 'pt_p_atrhabilmartes';
        this.ptupuatrHabilMartes.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TCREAR_inArg_pt_p_atrHabilMartes',
            'Martes');
        this.ptupuatrHabilMartes.mandatory = true;
        this.ptupuatrHabilMartes.dataType = Field.dtBool;
        this.ptupuatrHabilMartes.options = DefinedSelections.DS_SINO;
        this.ptupuatrHabilMartes.value = false;
        this.ptupuatrHabilMartes.assignCSS();
        this.fields.push(this.ptupuatrHabilMartes);

        this.ptupuatrHabilMiercoles.nameInRequest = 'pt_p_atrhabilmiercoles';
        this.ptupuatrHabilMiercoles.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TCREAR_inArg_pt_p_atrHabilMiercoles',
            'Miércoles');
        this.ptupuatrHabilMiercoles.mandatory = true;
        this.ptupuatrHabilMiercoles.dataType = Field.dtBool;
        this.ptupuatrHabilMiercoles.options = DefinedSelections.DS_SINO;
        this.ptupuatrHabilMiercoles.value = false;
        this.ptupuatrHabilMiercoles.assignCSS();
        this.fields.push(this.ptupuatrHabilMiercoles);

        this.ptupuatrHabilJueves.nameInRequest = 'pt_p_atrhabiljueves';
        this.ptupuatrHabilJueves.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TCREAR_inArg_pt_p_atrHabilJueves',
            'Jueves');
        this.ptupuatrHabilJueves.mandatory = true;
        this.ptupuatrHabilJueves.dataType = Field.dtBool;
        this.ptupuatrHabilJueves.options = DefinedSelections.DS_SINO;
        this.ptupuatrHabilJueves.value = false;
        this.ptupuatrHabilJueves.assignCSS();
        this.fields.push(this.ptupuatrHabilJueves);

        this.ptupuatrHabilViernes.nameInRequest = 'pt_p_atrhabilviernes';
        this.ptupuatrHabilViernes.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TCREAR_inArg_pt_p_atrHabilViernes',
            'Viernes');
        this.ptupuatrHabilViernes.mandatory = true;
        this.ptupuatrHabilViernes.dataType = Field.dtBool;
        this.ptupuatrHabilViernes.options = DefinedSelections.DS_SINO;
        this.ptupuatrHabilViernes.value = false;
        this.ptupuatrHabilViernes.assignCSS();
        this.fields.push(this.ptupuatrHabilViernes);

        this.ptupuatrHabilSabado.nameInRequest = 'pt_p_atrhabilsabado';
        this.ptupuatrHabilSabado.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TCREAR_inArg_pt_p_atrHabilSabado',
            'Sábado');
        this.ptupuatrHabilSabado.mandatory = true;
        this.ptupuatrHabilSabado.dataType = Field.dtBool;
        this.ptupuatrHabilSabado.options = DefinedSelections.DS_SINO;
        this.ptupuatrHabilSabado.value = false;
        this.ptupuatrHabilSabado.assignCSS();
        this.fields.push(this.ptupuatrHabilSabado);

        this.ptupuatrHabilDomingo.nameInRequest = 'pt_p_atrhabildomingo';
        this.ptupuatrHabilDomingo.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TCREAR_inArg_pt_p_atrHabilDomingo',
            'Domingo');
        this.ptupuatrHabilDomingo.mandatory = true;
        this.ptupuatrHabilDomingo.dataType = Field.dtBool;
        this.ptupuatrHabilDomingo.options = DefinedSelections.DS_SINO;
        this.ptupuatrHabilDomingo.value = false;
        this.ptupuatrHabilDomingo.assignCSS();
        this.fields.push(this.ptupuatrHabilDomingo);
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
            if (lastRole === 'Dominio') {
                this.ptupuagrDominio.setValue(lastRoleOid);
                this.executeDependecyRulesptupuagrdominio('SetValue', true);
                this.ptupuagrDominio.enabled = false;
                this.executeDependecyRulesptupuagrdominio('SetEnabled', true);
            }
            if (lastRole === 'Novedad') {
                this.ptupuagrNovedad.setValue(lastRoleOid);
                this.ptupuagrNovedad.enabled = false;
                this.loadPreloadptupuagrcausal();
            }
            if (lastRole === 'Causal') {
                this.ptupuagrCausal.setValue(lastRoleOid);
                this.ptupuagrCausal.enabled = false;
            }
        }
    }

    /**
     * Search the preload values of field pt_p_agrNovedad
     */
    private loadPreloadptupuagrnovedad(): void {

        if (this.ptupuagrDominio.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('ConfiguracionANS_TCREAR_pt_p_agrNovedad_NavFilter0');
            this.util.searchPreload('Novedad', 'IC_Novedad', navFilters, this.getNavigationFilterVariables(), 'OC_Novedad').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptupuagrNovedad.loadPreload(response.results);
                    } else {
                        this.ptupuagrNovedad.loadPreload([]);
                    }
                    this.loadPreloadptupuagrcausal();
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptupuagrNovedad.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptupuagrNovedad.cleanPreload();
            this.loadPreloadptupuagrcausal();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * Search the preload values of field pt_p_agrCausal
     */
    private loadPreloadptupuagrcausal(): void {

        if (this.ptupuagrNovedad.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('ConfiguracionANS_TCREAR_pt_p_agrCausal_NavFilter0');
            this.util.searchPreload('Causal', 'IC_Causal', navFilters, this.getNavigationFilterVariables(), 'OC_Causal').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptupuagrCausal.loadPreload(response.results);
                    } else {
                        this.ptupuagrCausal.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptupuagrCausal.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptupuagrCausal.cleanPreload();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuagrDominio'.toLowerCase()) {
            this.ptupuagrDominio.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptupuagrdominio('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for pt_p_agrDominio argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrdominio(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptupuagrdominio();
        }

        // Load dependent preload
        if ('SetValue' === event) {
            this.loadPreloadptupuagrnovedad();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_agrDominio argument
     */
    private setSuppInfoptupuagrdominio(): void {

        const displaySetIC = 'ProductoT.Descripcion,PlanT.Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.ptupuagrDominio.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Dominio.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptupuagrDominio.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptupuagrDominio.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Dominio.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString]);
                    }
                }
                this.ptupuagrDominio.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the pt_p_agrDominio lense search argument
     */
    public onptupuagrdominioChange(): void {

        const searchText = this.ptupuagrDominio.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.ptupuagrDominio.lastText) {
                this.ptupuagrDominio.removeCSSClass('noResultsLenseSearch');
                this.ptupuagrDominio.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Dominio.name, 'IC_Dominio', searchText, [], null).then(
                        (response: any) => {
                            this.ptupuagrDominio.removeCSSClass('noResultsLenseSearch');
                            this.ptupuagrDominio.searchResults = response.results;
                            if (this.ptupuagrDominio.searchResults &&
                                this.ptupuagrDominio.searchResults.length === 0) {
                                this.ptupuagrDominio.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.ptupuagrDominio.searchResults &&
                                this.ptupuagrDominio.searchResults.length === 1) {
                                this.processptupuagrdominioSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.ptupuagrDominio.removeCSSClass('noResultsLenseSearch');
                            this.ptupuagrDominio.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.ptupuagrDominio.removeCSSClass('noResultsLenseSearch');
            this.ptupuagrDominio.searchResults = [];
            this.cleanptupuagrdominio();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_agrDominio lense search argument
     */
    public processptupuagrdominioSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptupuagrDominio.searchResults.length > index) {
            selectedInstance = this.ptupuagrDominio.searchResults[index];
        }
        // Clean the result list
        this.ptupuagrDominio.searchResults = [];
        if (selectedInstance) {
            if (!this.ptupuagrDominio.allowMultiSelect) {
                this.ptupuagrDominio.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptupuagrDominio.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesptupuagrdominio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_agrDominio lense search argument
     */
    public cleanptupuagrdominio(): void {
        this.clearValidationMessages();
        this.ptupuagrDominio.clean();
        this.executeDependecyRulesptupuagrdominio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_atrTramite argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuatrtramite(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuatrTramite();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuatrTramite();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_atrTramite argument
     */
    private executeDependecyRules1ptupuatrTramite(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptupuatrTramiteActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_atrTramite argument
     */
    private executeDependecyRules1ptupuatrTramiteActions(): void {
        // v = 3
        if (this.util.valueEquals(this.util.getInt(this.ptupuatrTramite.value), 3)) {
            // pt_p_agrNovedad.SetActive( TRUE )
            this.ptupuagrNovedad.enabled = true;
            // pt_p_agrNovedad.SetMandatory( TRUE )
            this.ptupuagrNovedad.mandatory = true;
            // pt_p_agrCausal.SetActive( TRUE )
            this.ptupuagrCausal.enabled = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_atrTramite argument
     */
    private executeDependecyRules2ptupuatrTramite(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptupuatrTramiteActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_atrTramite argument
     */
    private executeDependecyRules2ptupuatrTramiteActions(): void {
        // v <> NULL AND v <> 3
        if (!this.util.isNull(this.util.getInt(this.ptupuatrTramite.value)) &&
            !this.util.valueEquals(this.util.getInt(this.ptupuatrTramite.value), 3)) {
            // pt_p_agrNovedad.SetActive( FALSE )
            this.ptupuagrNovedad.enabled = false;
            // pt_p_agrNovedad.SetMandatory( FALSE )
            this.ptupuagrNovedad.mandatory = false;
            // pt_p_agrNovedad.SetValue( NULL )
            this.ptupuagrNovedad.setValue(null);
            this.pendingDependencyRules.push('loadPreloadptupuagrcausal');
            // pt_p_agrCausal.SetActive( FALSE )
            this.ptupuagrCausal.enabled = false;
            // pt_p_agrCausal.SetValue( NULL )
            this.ptupuagrCausal.setValue(null);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_atrTramite argument
     */
    public onptupuatrtramiteChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptupuatrtramite('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Manages the change for the pt_p_agrNovedad argument
     */
    public onptupuagrnovedadChange(): void {
        this.loadPreloadptupuagrcausal();

        this.executePendingDependencyRules();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('ptupuagrDominio'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuagrDominio.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Dominio_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
    }

    /**
     * Returns true if all elements contained in the group are visible
     * @param groupId Group id.
     */
    public isGroupVisible(groupId: string): boolean {
        let isVisible = true;

        if (groupId === '6') {
            isVisible = this.ptupuatrHabilLunes.visible ||
                this.ptupuatrHabilMartes.visible ||
                this.ptupuatrHabilMiercoles.visible ||
                this.ptupuatrHabilJueves.visible ||
                this.ptupuatrHabilViernes.visible ||
                this.ptupuatrHabilSabado.visible ||
                this.ptupuatrHabilDomingo.visible;
        }
        return isVisible;
    }

    /**
     * Returns the alias group
     * @param groupId Group id
     */
    public getGroupAlias(groupId: string): string {
        let alias = '';

        if (groupId === '6') {
            alias = this.langMng.translateText('6',
                'Días hábiles');
        }
        return alias;
    }
}
