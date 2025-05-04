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
    selector: 'imes-formapago-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormaPagoSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisFormaPago: FieldOVLenseSearch;
    public puAbrirURL: FieldDefinedSelection;
    public puVisible: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431941677056219Ser_4UIServ_1';
        this.className = ModelConstants.Formapago.name;
        this.iuName = ModelConstants.Formapago.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_FormaPago_svc_modificar',
            'Modificar forma de pago');

        // Create inbound argument components
        this.puthisFormaPago = new FieldOVLenseSearch(this.langMng);
        this.puAbrirURL = new FieldDefinedSelection(this.langMng);
        this.puVisible = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisFormaPago.nameInRequest = 'p_thisformapago';
        this.puthisFormaPago.alias = this.langMng.translateText(
            'cls_FormaPago_svc_modificar_inArg_p_thisFormaPago',
            'Forma pago');
        this.puthisFormaPago.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisFormaPago.mandatory = true;
        this.puthisFormaPago.dataType = ModelConstants.Formapago.name;
        this.puthisFormaPago.allowMultiSelect = true;
        this.puthisFormaPago.maxLength = 150;
        this.puthisFormaPago.assignCSS();
        this.fields.push(this.puthisFormaPago);

        this.puAbrirURL.nameInRequest = 'p_abrirurl';
        this.puAbrirURL.alias = this.langMng.translateText(
            'cls_FormaPago_svc_modificar_inArg_p_AbrirURL',
            'Abrir URL');
        this.puAbrirURL.mandatory = true;
        this.puAbrirURL.dataType = Field.dtBool;
        this.puAbrirURL.options = DefinedSelections.DS_SINO;
        this.puAbrirURL.value = false;
        this.puAbrirURL.assignCSS();
        this.fields.push(this.puAbrirURL);

        this.puVisible.nameInRequest = 'p_visible';
        this.puVisible.alias = this.langMng.translateText(
            'cls_FormaPago_svc_modificar_inArg_p_Visible',
            'Visible');
        this.puVisible.mandatory = true;
        this.puVisible.dataType = Field.dtBool;
        this.puVisible.options = DefinedSelections.DS_SINO;
        this.puVisible.value = false;
        this.puVisible.assignCSS();
        this.fields.push(this.puVisible);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['FormaPago'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisFormaPago.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisformapago('SetValue', true);
            this.puthisFormaPago.enabled = false;
            this.executeDependecyRulesputhisformapago('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisFormaPago'.toLowerCase()) {
            this.puthisFormaPago.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisformapago('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisFormaPago argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisformapago(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisformapago();
        }
        if ('SetValue' === event && this.puthisFormaPago.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisFormaPago();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisFormaPago argument
     */
    private setSuppInfoputhisformapago(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisFormaPago.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Formapago.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisFormaPago.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisFormaPago.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Formapago.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisFormaPago.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisFormaPago argument
     */
    private executeDependecyRules1puthisFormaPago(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisFormaPago,
                'abrirurl,esvisible');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisFormaPagoActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisFormaPago argument
     */
    private executeDependecyRules1puthisFormaPagoActions(): void {
        const varputhisformapago = this.getFirstInstanceFromCache(this.puthisFormaPago);
        // v <> NULL
        if (varputhisformapago && !this.util.isNull(varputhisformapago)) {
            // p_AbrirURL.SetValue( v.abrirurl )
            this.puAbrirURL.setValue(this.util.getBool(varputhisformapago.get('abrirurl')));
            // p_Visible.SetValue( v.esvisible )
            this.puVisible.setValue(this.util.getBool(varputhisformapago.get('esvisible')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisFormaPago lense search argument
     */
    public onputhisformapagoChange(): void {

        const searchText = this.puthisFormaPago.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisFormaPago.lastText) {
                this.puthisFormaPago.removeCSSClass('noResultsLenseSearch');
                this.puthisFormaPago.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Formapago.name, 'IC_FormaPago', searchText, [], null).then(
                        (response: any) => {
                            this.puthisFormaPago.removeCSSClass('noResultsLenseSearch');
                            this.puthisFormaPago.searchResults = response.results;
                            if (this.puthisFormaPago.searchResults &&
                                this.puthisFormaPago.searchResults.length === 0) {
                                this.puthisFormaPago.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisFormaPago.searchResults &&
                                this.puthisFormaPago.searchResults.length === 1) {
                                this.processputhisformapagoSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisFormaPago.removeCSSClass('noResultsLenseSearch');
                            this.puthisFormaPago.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisFormaPago.removeCSSClass('noResultsLenseSearch');
            this.puthisFormaPago.searchResults = [];
            this.cleanputhisformapago();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisFormaPago lense search argument
     */
    public processputhisformapagoSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisFormaPago.searchResults.length > index) {
            selectedInstance = this.puthisFormaPago.searchResults[index];
        }
        // Clean the result list
        this.puthisFormaPago.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisFormaPago.allowMultiSelect) {
                this.puthisFormaPago.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisFormaPago.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisformapago('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisFormaPago lense search argument
     */
    public cleanputhisformapago(): void {
        this.clearValidationMessages();
        this.puthisFormaPago.clean();
        this.executeDependecyRulesputhisformapago('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisFormaPago'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisFormaPago.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_FormaPago';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
