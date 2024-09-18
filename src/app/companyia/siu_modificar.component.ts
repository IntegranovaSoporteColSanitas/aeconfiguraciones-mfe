import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldDefinedSelection, FieldOVLenseSearch } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-companyia-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyiaSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisCompanyia: FieldOVLenseSearch;
    public puEsDeMP: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431889510400288Ser_3UIServ_1';
        this.className = ModelConstants.Companyia.name;
        this.iuName = ModelConstants.Companyia.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_Companyia_svc_modificar',
            'Modificar compañía');

        // Create inbound argument components
        this.puthisCompanyia = new FieldOVLenseSearch(this.langMng);
        this.puEsDeMP = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisCompanyia.nameInRequest = 'p_thiscompanyia';
        this.puthisCompanyia.alias = this.langMng.translateText(
            'cls_Companyia_svc_modificar_inArg_p_thisCompanyia',
            'Compañía');
        this.puthisCompanyia.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisCompanyia.mandatory = true;
        this.puthisCompanyia.dataType = ModelConstants.Companyia.name;
        this.puthisCompanyia.allowMultiSelect = true;
        this.puthisCompanyia.maxLength = 150;
        this.puthisCompanyia.assignCSS();
        this.fields.push(this.puthisCompanyia);

        this.puEsDeMP.nameInRequest = 'p_esdemp';
        this.puEsDeMP.alias = this.langMng.translateText(
            'cls_Companyia_svc_modificar_inArg_p_EsDeMP',
            'Medicina Prepagada');
        this.puEsDeMP.mandatory = true;
        this.puEsDeMP.dataType = Field.dtBool;
        this.puEsDeMP.options = DefinedSelections.DS_SINO;
        this.puEsDeMP.value = false;
        this.puEsDeMP.assignCSS();
        this.fields.push(this.puEsDeMP);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Companyia'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisCompanyia.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhiscompanyia('SetValue', true);
            this.puthisCompanyia.enabled = false;
            this.executeDependecyRulesputhiscompanyia('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisCompanyia'.toLowerCase()) {
            this.puthisCompanyia.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhiscompanyia('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisCompanyia argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhiscompanyia(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhiscompanyia();
        }
        if ('SetValue' === event && this.puthisCompanyia.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisCompanyia();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisCompanyia argument
     */
    private setSuppInfoputhiscompanyia(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisCompanyia.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Companyia.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisCompanyia.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisCompanyia.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Companyia.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisCompanyia.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisCompanyia argument
     */
    private executeDependecyRules1puthisCompanyia(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisCompanyia,
                'esdemp');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisCompanyiaActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisCompanyia argument
     */
    private executeDependecyRules1puthisCompanyiaActions(): void {
        const varputhiscompanyia = this.getFirstInstanceFromCache(this.puthisCompanyia);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhiscompanyia && !this.util.isNull(varputhiscompanyia)) {
            // p_EsDeMP.SetValue( v.esdemp )
            this.puEsDeMP.setValue(this.util.getBool(varputhiscompanyia?.get('esdemp')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisCompanyia lense search argument
     */
    public onputhiscompanyiaChange(): void {

        const searchText = this.puthisCompanyia.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisCompanyia.lastText) {
                this.puthisCompanyia.removeCSSClass('noResultsLenseSearch');
                this.puthisCompanyia.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Companyia.name, 'IC_Companyia', searchText, [], null).then(
                        (response: any) => {
                            this.puthisCompanyia.removeCSSClass('noResultsLenseSearch');
                            this.puthisCompanyia.searchResults = response.results;
                            if (this.puthisCompanyia.searchResults &&
                                this.puthisCompanyia.searchResults.length === 0) {
                                this.puthisCompanyia.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisCompanyia.searchResults &&
                                this.puthisCompanyia.searchResults.length === 1) {
                                this.processputhiscompanyiaSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisCompanyia.removeCSSClass('noResultsLenseSearch');
                            this.puthisCompanyia.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisCompanyia.removeCSSClass('noResultsLenseSearch');
            this.puthisCompanyia.searchResults = [];
            this.cleanputhiscompanyia();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisCompanyia lense search argument
     */
    public processputhiscompanyiaSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisCompanyia.searchResults.length > index) {
            selectedInstance = this.puthisCompanyia.searchResults[index];
        }
        // Clean the result list
        this.puthisCompanyia.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisCompanyia.allowMultiSelect) {
                this.puthisCompanyia.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisCompanyia.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhiscompanyia('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisCompanyia lense search argument
     */
    public cleanputhiscompanyia(): void {
        this.clearValidationMessages();
        this.puthisCompanyia.clean();
        this.executeDependecyRulesputhiscompanyia('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisCompanyia'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisCompanyia.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Companyia';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
