import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldOVLenseSearch } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-dominio-siu-taddgrpmedico',
    templateUrl: './siu_taddgrpmedico.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DominioSIUuTADDGRPMEDICOComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisDominio: FieldOVLenseSearch;
    public ptGrupo: FieldOVLenseSearch;

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
        this.idXML = 'Clas_1431701422080423Ser_31UIServ_1';
        this.className = ModelConstants.Dominio.name;
        this.iuName = ModelConstants.Dominio.siuutaddgrpmedico;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TADDGRPMEDICO';
        this.title = this.langMng.translateText('cls_Dominio_svc_TADDGRPMEDICO',
            'Asignar Grupo');

        // Create inbound argument components
        this.puthisDominio = new FieldOVLenseSearch(this.langMng);
        this.ptGrupo = new FieldOVLenseSearch(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisDominio.nameInRequest = 'p_thisdominio';
        this.puthisDominio.alias = this.langMng.translateText(
            'cls_Dominio_svc_TADDGRPMEDICO_inArg_p_thisDominio',
            'Dominio');
        this.puthisDominio.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisDominio.mandatory = true;
        this.puthisDominio.dataType = ModelConstants.Dominio.name;
        this.puthisDominio.maxLength = 250;
        this.puthisDominio.assignCSS();
        this.fields.push(this.puthisDominio);

        this.ptGrupo.nameInRequest = 'ptgrupo';
        this.ptGrupo.alias = this.langMng.translateText(
            'cls_Dominio_svc_TADDGRPMEDICO_inArg_ptGrupo',
            'Grupo');
        this.ptGrupo.mandatory = true;
        this.ptGrupo.dataType = ModelConstants.Grupoasignacion.name;
        this.ptGrupo.maxLength = 50;
        this.ptGrupo.assignCSS();
        this.fields.push(this.ptGrupo);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Dominio'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisDominio.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisdominio('SetValue', true);
            this.puthisDominio.enabled = false;
            this.executeDependecyRulesputhisdominio('SetEnabled', true);
        }
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
            if (lastRole === 'GrupoAreaMedica') {
                this.ptGrupo.setValue(lastRoleOid);
                this.executeDependecyRulesptgrupo('SetValue', true);
                this.ptGrupo.enabled = false;
                this.executeDependecyRulesptgrupo('SetEnabled', true);
            }
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisDominio'.toLowerCase()) {
            this.puthisDominio.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisdominio('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'ptGrupo'.toLowerCase()) {
            this.ptGrupo.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptgrupo('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisDominio argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisdominio(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisdominio();
        }
        if ('SetValue' === event && this.puthisDominio.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisDominio();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisDominio argument
     */
    private setSuppInfoputhisdominio(): void {

        const displaySetIC = 'ProductoT.Descripcion,PlanT.Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisDominio.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Dominio.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisDominio.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisDominio.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Dominio.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString]);
                    }
                }
                this.puthisDominio.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisDominio argument
     */
    private executeDependecyRules1puthisDominio(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisDominio,
                'grupoareamedica.Id');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisDominioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisDominio argument
     */
    private executeDependecyRules1puthisDominioActions(): void {
        const varputhisdominio = this.getFirstInstanceFromCache(this.puthisDominio);
        // v <> NULL
        if (varputhisdominio && !this.util.isNull(varputhisdominio)) {
            // ptGrupo.SetValue( v.grupoareamedica )
            this.ptGrupo.setValue(this.util.oidBuilder.buildOidGrupoAsignacion(
                this.util.getInt(varputhisdominio.get('grupoareamedica.Id'))));
            this.executeDependecyRulesptgrupo('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisDominio lense search argument
     */
    public onputhisdominioChange(): void {

        const searchText = this.puthisDominio.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisDominio.lastText) {
                this.puthisDominio.removeCSSClass('noResultsLenseSearch');
                this.puthisDominio.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Dominio.name, 'IC_Dominio', searchText, [], null).then(
                        (response: any) => {
                            this.puthisDominio.removeCSSClass('noResultsLenseSearch');
                            this.puthisDominio.searchResults = response.results;
                            if (this.puthisDominio.searchResults &&
                                this.puthisDominio.searchResults.length === 0) {
                                this.puthisDominio.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisDominio.searchResults &&
                                this.puthisDominio.searchResults.length === 1) {
                                this.processputhisdominioSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisDominio.removeCSSClass('noResultsLenseSearch');
                            this.puthisDominio.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisDominio.removeCSSClass('noResultsLenseSearch');
            this.puthisDominio.searchResults = [];
            this.cleanputhisdominio();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisDominio lense search argument
     */
    public processputhisdominioSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisDominio.searchResults.length > index) {
            selectedInstance = this.puthisDominio.searchResults[index];
        }
        // Clean the result list
        this.puthisDominio.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisDominio.allowMultiSelect) {
                this.puthisDominio.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisDominio.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisdominio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisDominio lense search argument
     */
    public cleanputhisdominio(): void {
        this.clearValidationMessages();
        this.puthisDominio.clean();
        this.executeDependecyRulesputhisdominio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptGrupo argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptgrupo(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptgrupo();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the ptGrupo argument
     */
    private setSuppInfoptgrupo(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.ptGrupo.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Grupoasignacion.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptGrupo.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptGrupo.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Grupoasignacion.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptGrupo.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the ptGrupo lense search argument
     */
    public onptgrupoChange(): void {

        const searchText = this.ptGrupo.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.ptGrupo.lastText) {
                const navFilters: string[] = [];
                navFilters.push('Dominio_TADDGRPMEDICO_ptGrupo_NavFilter0');
                this.ptGrupo.removeCSSClass('noResultsLenseSearch');
                this.ptGrupo.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Grupoasignacion.name, 'IC_GrupoAsignacion', searchText, navFilters,
                    this.getNavigationFilterVariables()).then(
                        (response: any) => {
                            this.ptGrupo.removeCSSClass('noResultsLenseSearch');
                            this.ptGrupo.searchResults = response.results;
                            if (this.ptGrupo.searchResults &&
                                this.ptGrupo.searchResults.length === 0) {
                                this.ptGrupo.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.ptGrupo.searchResults &&
                                this.ptGrupo.searchResults.length === 1) {
                                this.processptgrupoSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.ptGrupo.removeCSSClass('noResultsLenseSearch');
                            this.ptGrupo.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.ptGrupo.removeCSSClass('noResultsLenseSearch');
            this.ptGrupo.searchResults = [];
            this.cleanptgrupo();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the ptGrupo lense search argument
     */
    public processptgrupoSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptGrupo.searchResults.length > index) {
            selectedInstance = this.ptGrupo.searchResults[index];
        }
        // Clean the result list
        this.ptGrupo.searchResults = [];
        if (selectedInstance) {
            if (!this.ptGrupo.allowMultiSelect) {
                this.ptGrupo.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptGrupo.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesptgrupo('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the ptGrupo lense search argument
     */
    public cleanptgrupo(): void {
        this.clearValidationMessages();
        this.ptGrupo.clean();
        this.executeDependecyRulesptgrupo('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisDominio'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisDominio.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Dominio_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('ptGrupo'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptGrupo.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_GrupoAsignacion';
            exchInfo.navigationalFilterIdentity = [];
            exchInfo.navigationalFilterIdentity.push('Dominio_TADDGRPMEDICO_ptGrupo_NavFilter0');
            exchInfo.navigationalFilterVariables = this.getNavigationFilterVariables();
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
