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
    selector: 'imes-valor-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValorSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisValor: FieldOVLenseSearch;
    public puValorPosible: Field;

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
        this.idXML = 'Clas_1431634313216388Ser_3UIServ_1';
        this.className = ModelConstants.Valor.name;
        this.iuName = ModelConstants.Valor.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_Valor_svc_modificar',
            'Modificar valor posible de respuesta');

        // Create inbound argument components
        this.puthisValor = new FieldOVLenseSearch(this.langMng);
        this.puValorPosible = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisValor.nameInRequest = 'p_thisvalor';
        this.puthisValor.alias = this.langMng.translateText(
            'cls_Valor_svc_modificar_inArg_p_thisValor',
            'Valor');
        this.puthisValor.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisValor.mandatory = true;
        this.puthisValor.dataType = ModelConstants.Valor.name;
        this.puthisValor.allowMultiSelect = true;
        this.puthisValor.maxLength = 150;
        this.puthisValor.assignCSS();
        this.fields.push(this.puthisValor);

        this.puValorPosible.nameInRequest = 'p_valorposible';
        this.puValorPosible.alias = this.langMng.translateText(
            'cls_Valor_svc_modificar_inArg_p_ValorPosible',
            'Valor');
        this.puValorPosible.mandatory = true;
        this.puValorPosible.dataType = Field.dtString;
        this.puValorPosible.maxLength = 150;
        this.puValorPosible.assignCSS();
        this.fields.push(this.puValorPosible);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Valor'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisValor.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisvalor('SetValue', true);
            this.puthisValor.enabled = false;
            this.executeDependecyRulesputhisvalor('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisValor'.toLowerCase()) {
            this.puthisValor.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisvalor('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisValor argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisvalor(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisvalor();
        }
        if ('SetValue' === event && this.puthisValor.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisValor();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisValor argument
     */
    private setSuppInfoputhisvalor(): void {

        const displaySetIC = 'ValorPosible';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisValor.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Valor.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisValor.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisValor.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Valor.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisValor.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisValor argument
     */
    private executeDependecyRules1puthisValor(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisValor,
                'valorposible');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisValorActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisValor argument
     */
    private executeDependecyRules1puthisValorActions(): void {
        const varputhisvalor = this.getFirstInstanceFromCache(this.puthisValor);
        // v <> NULL
        if (varputhisvalor && !this.util.isNull(varputhisvalor)) {
            // p_ValorPosible.SetValue( v.ValorPosible )
            this.puValorPosible.setValue(varputhisvalor.get('valorposible'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisValor lense search argument
     */
    public onputhisvalorChange(): void {

        const searchText = this.puthisValor.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisValor.lastText) {
                this.puthisValor.removeCSSClass('noResultsLenseSearch');
                this.puthisValor.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Valor.name, 'IC_Valor', searchText, [], null).then(
                        (response: any) => {
                            this.puthisValor.removeCSSClass('noResultsLenseSearch');
                            this.puthisValor.searchResults = response.results;
                            if (this.puthisValor.searchResults &&
                                this.puthisValor.searchResults.length === 0) {
                                this.puthisValor.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisValor.searchResults &&
                                this.puthisValor.searchResults.length === 1) {
                                this.processputhisvalorSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisValor.removeCSSClass('noResultsLenseSearch');
                            this.puthisValor.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisValor.removeCSSClass('noResultsLenseSearch');
            this.puthisValor.searchResults = [];
            this.cleanputhisvalor();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisValor lense search argument
     */
    public processputhisvalorSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisValor.searchResults.length > index) {
            selectedInstance = this.puthisValor.searchResults[index];
        }
        // Clean the result list
        this.puthisValor.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisValor.allowMultiSelect) {
                this.puthisValor.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisValor.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisvalor('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisValor lense search argument
     */
    public cleanputhisvalor(): void {
        this.clearValidationMessages();
        this.puthisValor.clean();
        this.executeDependecyRulesputhisvalor('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisValor'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisValor.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Valor';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
