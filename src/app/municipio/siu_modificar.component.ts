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
    selector: 'imes-municipio-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MunicipioSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisMunicipio: FieldOVLenseSearch;
    public puAplicaIVA: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431890034688728Ser_3UIServ_1';
        this.className = ModelConstants.Municipio.name;
        this.iuName = ModelConstants.Municipio.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_Municipio_svc_modificar',
            'Modificar municipio');

        // Create inbound argument components
        this.puthisMunicipio = new FieldOVLenseSearch(this.langMng);
        this.puAplicaIVA = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisMunicipio.nameInRequest = 'p_thismunicipio';
        this.puthisMunicipio.alias = this.langMng.translateText(
            'cls_Municipio_svc_modificar_inArg_p_thisMunicipio',
            'Municipio');
        this.puthisMunicipio.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisMunicipio.mandatory = true;
        this.puthisMunicipio.dataType = ModelConstants.Municipio.name;
        this.puthisMunicipio.allowMultiSelect = true;
        this.puthisMunicipio.maxLength = 150;
        this.puthisMunicipio.assignCSS();
        this.fields.push(this.puthisMunicipio);

        this.puAplicaIVA.nameInRequest = 'p_aplicaiva';
        this.puAplicaIVA.alias = this.langMng.translateText(
            'cls_Municipio_svc_modificar_inArg_p_AplicaIVA',
            'Aplica IVA');
        this.puAplicaIVA.mandatory = true;
        this.puAplicaIVA.dataType = Field.dtBool;
        this.puAplicaIVA.options = DefinedSelections.DS_SINO;
        this.puAplicaIVA.value = false;
        this.puAplicaIVA.assignCSS();
        this.fields.push(this.puAplicaIVA);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Municipio'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisMunicipio.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhismunicipio('SetValue', true);
            this.puthisMunicipio.enabled = false;
            this.executeDependecyRulesputhismunicipio('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisMunicipio'.toLowerCase()) {
            this.puthisMunicipio.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhismunicipio('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisMunicipio argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhismunicipio(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhismunicipio();
        }
        if ('SetValue' === event && this.puthisMunicipio.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisMunicipio();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisMunicipio argument
     */
    private setSuppInfoputhismunicipio(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisMunicipio.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Municipio.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisMunicipio.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisMunicipio.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Municipio.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisMunicipio.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisMunicipio argument
     */
    private executeDependecyRules1puthisMunicipio(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisMunicipio,
                'aplicaiva');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisMunicipioActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisMunicipio argument
     */
    private executeDependecyRules1puthisMunicipioActions(): void {
        const varputhismunicipio = this.getFirstInstanceFromCache(this.puthisMunicipio);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhismunicipio && !this.util.isNull(varputhismunicipio)) {
            // p_AplicaIVA.SetValue( v.aplicaiva )
            this.puAplicaIVA.setValue(this.util.getBool(varputhismunicipio?.get('aplicaiva')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisMunicipio lense search argument
     */
    public onputhismunicipioChange(): void {

        const searchText = this.puthisMunicipio.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisMunicipio.lastText) {
                this.puthisMunicipio.removeCSSClass('noResultsLenseSearch');
                this.puthisMunicipio.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Municipio.name, 'IC_Municipio', searchText, [], null).then(
                        (response: any) => {
                            this.puthisMunicipio.removeCSSClass('noResultsLenseSearch');
                            this.puthisMunicipio.searchResults = response.results;
                            if (this.puthisMunicipio.searchResults &&
                                this.puthisMunicipio.searchResults.length === 0) {
                                this.puthisMunicipio.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisMunicipio.searchResults &&
                                this.puthisMunicipio.searchResults.length === 1) {
                                this.processputhismunicipioSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisMunicipio.removeCSSClass('noResultsLenseSearch');
                            this.puthisMunicipio.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisMunicipio.removeCSSClass('noResultsLenseSearch');
            this.puthisMunicipio.searchResults = [];
            this.cleanputhismunicipio();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisMunicipio lense search argument
     */
    public processputhismunicipioSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisMunicipio.searchResults.length > index) {
            selectedInstance = this.puthisMunicipio.searchResults[index];
        }
        // Clean the result list
        this.puthisMunicipio.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisMunicipio.allowMultiSelect) {
                this.puthisMunicipio.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisMunicipio.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhismunicipio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisMunicipio lense search argument
     */
    public cleanputhismunicipio(): void {
        this.clearValidationMessages();
        this.puthisMunicipio.clean();
        this.executeDependecyRulesputhismunicipio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisMunicipio'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisMunicipio.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Municipio';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
