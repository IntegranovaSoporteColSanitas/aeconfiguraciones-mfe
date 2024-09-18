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
    selector: 'imes-dominio-siu-tdelincompatible',
    templateUrl: './siu_tdelincompatible.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DominioSIUuTDELINCOMPATIBLEComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisDominio: FieldOVLenseSearch;
    public ptupuevcDominio: FieldOVLenseSearch;

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
        this.idXML = 'Clas_1431701422080423Ser_39UIServ_1';
        this.className = ModelConstants.Dominio.name;
        this.iuName = ModelConstants.Dominio.siuutdelincompatible;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TDELINCOMPATIBLE';
        this.title = this.langMng.translateText('cls_Dominio_svc_TDELINCOMPATIBLE',
            'Desasociar');

        // Create inbound argument components
        this.puthisDominio = new FieldOVLenseSearch(this.langMng);
        this.ptupuevcDominio = new FieldOVLenseSearch(this.langMng);

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
            'cls_Dominio_svc_TDELINCOMPATIBLE_inArg_p_thisDominio',
            'Dominio');
        this.puthisDominio.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisDominio.mandatory = true;
        this.puthisDominio.dataType = ModelConstants.Dominio.name;
        this.puthisDominio.maxLength = 250;
        this.puthisDominio.assignCSS();
        this.fields.push(this.puthisDominio);

        this.ptupuevcDominio.nameInRequest = 'pt_p_evcdominio';
        this.ptupuevcDominio.alias = this.langMng.translateText(
            'cls_Dominio_svc_TDELINCOMPATIBLE_inArg_pt_p_evcDominio',
            'Dominio incompatible');
        this.ptupuevcDominio.mandatory = true;
        this.ptupuevcDominio.dataType = ModelConstants.Dominio.name;
        this.ptupuevcDominio.maxLength = 250;
        this.ptupuevcDominio.assignCSS();
        this.fields.push(this.ptupuevcDominio);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        // Cambiamos las inicializaciones, al ser un rol reflexivo se hace un lio.
        // Inicializamos el THIS con la instancia seleccionada en el Maestro 
        let lastRole = '';
        let lastRoleOid = null;
        if (this.context.exchangeInfo) {
            lastRole = this.context.exchangeInfo.getLastNavigationRole();
            lastRoleOid = this.context.exchangeInfo.getLastNavigationRoleOid();
        }
        // Compare the argument role with the role of the navigation obtained from the context.
        if (lastRole === 'DominiosConIncompatibilidad' ) {
            this.puthisDominio.setValue(lastRoleOid);
            this.puthisDominio.enabled = false;
            this.executeDependecyRulesputhisdominio('SetValue', true);
        }        

        // if (this.context.exchangeInfo &&
        //     ['Dominio'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
        //     this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
        //     this.puthisDominio.setValue(this.context.exchangeInfo.selectedOids);
        //     this.executeDependecyRulesputhisdominio('SetValue', true);
        //     this.puthisDominio.enabled = false;
        //     this.executeDependecyRulesputhisdominio('SetEnabled', true);
        // }
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

        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuevcDominio'.toLowerCase()) {
            this.ptupuevcDominio.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptupuevcdominio('SetValue', false);
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
     * Evaluate dependendy rules for pt_p_evcDominio argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuevcdominio(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptupuevcdominio();
        }
        if ('SetValue' === event && this.ptupuevcDominio.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && internal) {
            this.executeDependecyRules1ptupuevcDominio();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_evcDominio argument
     */
    private setSuppInfoptupuevcdominio(): void {

        const displaySetIC = 'ProductoT.Descripcion,PlanT.Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.ptupuevcDominio.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Dominio.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptupuevcDominio.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptupuevcDominio.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Dominio.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString]);
                    }
                }
                this.ptupuevcDominio.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for pt_p_evcDominio argument
     */
    private executeDependecyRules1ptupuevcDominio(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuevcDominio,
                'Numero');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1ptupuevcDominioActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_evcDominio argument
     */
    private executeDependecyRules1ptupuevcDominioActions(): void {
        const varptupuevcdominio = this.getFirstInstanceFromCache(this.ptupuevcDominio);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varptupuevcdominio && !this.util.isNull(varptupuevcdominio)) {
            // pt_p_evcDominio.SetActive( FALSE )
            this.ptupuevcDominio.enabled = false;
            this.executeDependecyRulesptupuevcdominio('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_evcDominio lense search argument
     */
    public onptupuevcdominioChange(): void {

        const searchText = this.ptupuevcDominio.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.ptupuevcDominio.lastText) {
                this.ptupuevcDominio.removeCSSClass('noResultsLenseSearch');
                this.ptupuevcDominio.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Dominio.name, 'IC_Dominio', searchText, [], null).then(
                        (response: any) => {
                            this.ptupuevcDominio.removeCSSClass('noResultsLenseSearch');
                            this.ptupuevcDominio.searchResults = response.results;
                            if (this.ptupuevcDominio.searchResults &&
                                this.ptupuevcDominio.searchResults.length === 0) {
                                this.ptupuevcDominio.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.ptupuevcDominio.searchResults &&
                                this.ptupuevcDominio.searchResults.length === 1) {
                                this.processptupuevcdominioSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.ptupuevcDominio.removeCSSClass('noResultsLenseSearch');
                            this.ptupuevcDominio.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.ptupuevcDominio.removeCSSClass('noResultsLenseSearch');
            this.ptupuevcDominio.searchResults = [];
            this.cleanptupuevcdominio();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_evcDominio lense search argument
     */
    public processptupuevcdominioSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptupuevcDominio.searchResults.length > index) {
            selectedInstance = this.ptupuevcDominio.searchResults[index];
        }
        // Clean the result list
        this.ptupuevcDominio.searchResults = [];
        if (selectedInstance) {
            if (!this.ptupuevcDominio.allowMultiSelect) {
                this.ptupuevcDominio.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptupuevcDominio.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesptupuevcdominio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_evcDominio lense search argument
     */
    public cleanptupuevcdominio(): void {
        this.clearValidationMessages();
        this.ptupuevcDominio.clean();
        this.executeDependecyRulesptupuevcdominio('SetValue', false);
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
        if ('ptupuevcDominio'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuevcDominio.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Dominio_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
