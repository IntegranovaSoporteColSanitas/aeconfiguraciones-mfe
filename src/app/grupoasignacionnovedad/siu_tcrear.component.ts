import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldOVLenseSearch, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-grupoasignacionnovedad-siu-tcrear',
    templateUrl: './siu_tcrear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrupoAsignacionNovedadSIUuTCREARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public ptupuagrDominio: FieldOVLenseSearch;
    public ptupuagrCausal: FieldOVPreload;
    public ptupuagrGrupoUsuarios: FieldOVLenseSearch;
    public ptNovedad: FieldOVPreload;

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
        this.idXML = 'Clas_1586852003840652Ser_8UIServ_1';
        this.className = ModelConstants.Grupoasignacionnovedad.name;
        this.iuName = ModelConstants.Grupoasignacionnovedad.siuutcrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TCREAR';
        this.title = this.langMng.translateText('cls_GrupoAsignacionNovedad_svc_TCREAR',
            'Crear');

        // Create inbound argument components
        this.ptupuagrDominio = new FieldOVLenseSearch(this.langMng);
        this.ptupuagrCausal = new FieldOVPreload(this.langMng);
        this.ptupuagrGrupoUsuarios = new FieldOVLenseSearch(this.langMng);
        this.ptNovedad = new FieldOVPreload(this.langMng);

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
            'cls_GrupoAsignacionNovedad_svc_TCREAR_inArg_pt_p_agrDominio',
            'Dominio');
        this.ptupuagrDominio.mandatory = true;
        this.ptupuagrDominio.dataType = ModelConstants.Dominio.name;
        this.ptupuagrDominio.maxLength = 250;
        this.ptupuagrDominio.assignCSS();
        this.fields.push(this.ptupuagrDominio);

        this.ptupuagrCausal.nameInRequest = 'pt_p_agrcausal';
        this.ptupuagrCausal.alias = this.langMng.translateText(
            'cls_GrupoAsignacionNovedad_svc_TCREAR_inArg_pt_p_agrCausal',
            'Causal');
        this.ptupuagrCausal.mandatory = true;
        this.ptupuagrCausal.dataType = ModelConstants.Causal.name;
        this.ptupuagrCausal.maxLength = 50;
        this.ptupuagrCausal.assignCSS();
        this.fields.push(this.ptupuagrCausal);

        this.ptupuagrGrupoUsuarios.nameInRequest = 'pt_p_agrgrupousuarios';
        this.ptupuagrGrupoUsuarios.alias = this.langMng.translateText(
            'cls_GrupoAsignacionNovedad_svc_TCREAR_inArg_pt_p_agrGrupoUsuarios',
            'Grupo Usuarios');
        this.ptupuagrGrupoUsuarios.mandatory = true;
        this.ptupuagrGrupoUsuarios.dataType = ModelConstants.Grupoasignacion.name;
        this.ptupuagrGrupoUsuarios.maxLength = 50;
        this.ptupuagrGrupoUsuarios.assignCSS();
        this.fields.push(this.ptupuagrGrupoUsuarios);

        this.ptNovedad.nameInRequest = 'ptnovedad';
        this.ptNovedad.alias = this.langMng.translateText(
            'cls_GrupoAsignacionNovedad_svc_TCREAR_inArg_ptNovedad',
            'Novedad');
        this.ptNovedad.mandatory = true;
        this.ptNovedad.dataType = ModelConstants.Novedad.name;
        this.ptNovedad.maxLength = 50;
        this.ptNovedad.assignCSS();
        this.fields.push(this.ptNovedad);
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
            if (lastRole === 'Causal') {
                this.ptupuagrCausal.setValue(lastRoleOid);
                this.ptupuagrCausal.enabled = false;
            }
            if (lastRole === 'GrupoUsuarios') {
                this.ptupuagrGrupoUsuarios.setValue(lastRoleOid);
                this.executeDependecyRulesptupuagrgrupousuarios('SetValue', true);
                this.ptupuagrGrupoUsuarios.enabled = false;
                this.executeDependecyRulesptupuagrgrupousuarios('SetEnabled', true);
            }
        }
    }

    /**
     * Search the preload values of field pt_p_agrCausal
     */
    private loadPreloadptupuagrcausal(): void {

        if (this.ptNovedad.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('GrupoAsignacionNovedad_TCREAR_pt_p_agrCausal_NavFilter0');
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
     * Search the preload values of field ptNovedad
     */
    private loadPreloadptnovedad(): void {

        if (this.ptupuagrDominio.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('GrupoAsignacionNovedad_TCREAR_ptNovedad_NavFilter0');
            this.util.searchPreload('Novedad', 'IC_Novedad', navFilters, this.getNavigationFilterVariables(), 'OC_Novedad').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptNovedad.loadPreload(response.results);
                    } else {
                        this.ptNovedad.loadPreload([]);
                    }
                    this.loadPreloadptupuagrcausal();
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptNovedad.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptNovedad.cleanPreload();
            this.loadPreloadptupuagrcausal();
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

        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuagrGrupoUsuarios'.toLowerCase()) {
            this.ptupuagrGrupoUsuarios.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptupuagrgrupousuarios('SetValue', false);
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
            this.loadPreloadptnovedad();
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
     * Evaluate dependendy rules for pt_p_agrGrupoUsuarios argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrgrupousuarios(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptupuagrgrupousuarios();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_agrGrupoUsuarios argument
     */
    private setSuppInfoptupuagrgrupousuarios(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.ptupuagrGrupoUsuarios.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Grupoasignacion.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptupuagrGrupoUsuarios.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptupuagrGrupoUsuarios.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Grupoasignacion.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptupuagrGrupoUsuarios.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the pt_p_agrGrupoUsuarios lense search argument
     */
    public onptupuagrgrupousuariosChange(): void {

        const searchText = this.ptupuagrGrupoUsuarios.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.ptupuagrGrupoUsuarios.lastText) {
                const navFilters: string[] = [];
                navFilters.push('GrupoAsignacionNovedad_TCREAR_pt_p_agrGrupoUsuarios_NavFilter0');
                this.ptupuagrGrupoUsuarios.removeCSSClass('noResultsLenseSearch');
                this.ptupuagrGrupoUsuarios.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Grupoasignacion.name, 'IC_GrupoAsignacion', searchText, navFilters,
                    this.getNavigationFilterVariables()).then(
                        (response: any) => {
                            this.ptupuagrGrupoUsuarios.removeCSSClass('noResultsLenseSearch');
                            this.ptupuagrGrupoUsuarios.searchResults = response.results;
                            if (this.ptupuagrGrupoUsuarios.searchResults &&
                                this.ptupuagrGrupoUsuarios.searchResults.length === 0) {
                                this.ptupuagrGrupoUsuarios.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.ptupuagrGrupoUsuarios.searchResults &&
                                this.ptupuagrGrupoUsuarios.searchResults.length === 1) {
                                this.processptupuagrgrupousuariosSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.ptupuagrGrupoUsuarios.removeCSSClass('noResultsLenseSearch');
                            this.ptupuagrGrupoUsuarios.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.ptupuagrGrupoUsuarios.removeCSSClass('noResultsLenseSearch');
            this.ptupuagrGrupoUsuarios.searchResults = [];
            this.cleanptupuagrgrupousuarios();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_agrGrupoUsuarios lense search argument
     */
    public processptupuagrgrupousuariosSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptupuagrGrupoUsuarios.searchResults.length > index) {
            selectedInstance = this.ptupuagrGrupoUsuarios.searchResults[index];
        }
        // Clean the result list
        this.ptupuagrGrupoUsuarios.searchResults = [];
        if (selectedInstance) {
            if (!this.ptupuagrGrupoUsuarios.allowMultiSelect) {
                this.ptupuagrGrupoUsuarios.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptupuagrGrupoUsuarios.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesptupuagrgrupousuarios('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_agrGrupoUsuarios lense search argument
     */
    public cleanptupuagrgrupousuarios(): void {
        this.clearValidationMessages();
        this.ptupuagrGrupoUsuarios.clean();
        this.executeDependecyRulesptupuagrgrupousuarios('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Manages the change for the ptNovedad argument
     */
    public onptnovedadChange(): void {
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
        if ('ptupuagrGrupoUsuarios'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuagrGrupoUsuarios.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_GrupoAsignacion';
            exchInfo.navigationalFilterIdentity = [];
            exchInfo.navigationalFilterIdentity.push('GrupoAsignacionNovedad_TCREAR_pt_p_agrGrupoUsuarios_NavFilter0');
            exchInfo.navigationalFilterVariables = this.getNavigationFilterVariables();
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
