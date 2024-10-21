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
    selector: 'imes-eps-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpsSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisEPS: FieldOVLenseSearch;
    public puEPSSanitas: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431942987776277Ser_3UIServ_1';
        this.className = ModelConstants.Eps.name;
        this.iuName = ModelConstants.Eps.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_Eps_svc_modificar',
            'Modificar EPS');

        // Create inbound argument components
        this.puthisEPS = new FieldOVLenseSearch(this.langMng);
        this.puEPSSanitas = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisEPS.nameInRequest = 'p_thiseps';
        this.puthisEPS.alias = this.langMng.translateText(
            'cls_Eps_svc_modificar_inArg_p_thisEPS',
            'EPS');
        this.puthisEPS.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisEPS.mandatory = true;
        this.puthisEPS.dataType = ModelConstants.Eps.name;
        this.puthisEPS.allowMultiSelect = true;
        this.puthisEPS.maxLength = 150;
        this.puthisEPS.assignCSS();
        this.fields.push(this.puthisEPS);

        this.puEPSSanitas.nameInRequest = 'p_epssanitas';
        this.puEPSSanitas.alias = this.langMng.translateText(
            'cls_Eps_svc_modificar_inArg_p_EPSSanitas',
            'Es EPS Sanitas');
        this.puEPSSanitas.mandatory = true;
        this.puEPSSanitas.dataType = Field.dtBool;
        this.puEPSSanitas.options = DefinedSelections.DS_SINO;
        this.puEPSSanitas.value = false;
        this.puEPSSanitas.assignCSS();
        this.fields.push(this.puEPSSanitas);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Eps'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisEPS.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhiseps('SetValue', true);
            this.puthisEPS.enabled = false;
            this.executeDependecyRulesputhiseps('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisEPS'.toLowerCase()) {
            this.puthisEPS.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhiseps('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisEPS argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhiseps(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhiseps();
        }
        if ('SetValue' === event && this.puthisEPS.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisEPS();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisEPS argument
     */
    private setSuppInfoputhiseps(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisEPS.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Eps.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisEPS.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisEPS.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Eps.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisEPS.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisEPS argument
     */
    private executeDependecyRules1puthisEPS(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisEPS,
                'epssanitas');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisEPSActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisEPS argument
     */
    private executeDependecyRules1puthisEPSActions(): void {
        const varputhiseps = this.getFirstInstanceFromCache(this.puthisEPS);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhiseps && !this.util.isNull(varputhiseps)) {
            // p_EPSSanitas.SetValue( v.epssanitas )
            this.puEPSSanitas.setValue(this.util.getBool(varputhiseps.get('epssanitas')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisEPS lense search argument
     */
    public onputhisepsChange(): void {

        const searchText = this.puthisEPS.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisEPS.lastText) {
                this.puthisEPS.removeCSSClass('noResultsLenseSearch');
                this.puthisEPS.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Eps.name, 'IC_EPS', searchText, [], null).then(
                        (response: any) => {
                            this.puthisEPS.removeCSSClass('noResultsLenseSearch');
                            this.puthisEPS.searchResults = response.results;
                            if (this.puthisEPS.searchResults &&
                                this.puthisEPS.searchResults.length === 0) {
                                this.puthisEPS.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisEPS.searchResults &&
                                this.puthisEPS.searchResults.length === 1) {
                                this.processputhisepsSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisEPS.removeCSSClass('noResultsLenseSearch');
                            this.puthisEPS.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisEPS.removeCSSClass('noResultsLenseSearch');
            this.puthisEPS.searchResults = [];
            this.cleanputhiseps();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisEPS lense search argument
     */
    public processputhisepsSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisEPS.searchResults.length > index) {
            selectedInstance = this.puthisEPS.searchResults[index];
        }
        // Clean the result list
        this.puthisEPS.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisEPS.allowMultiSelect) {
                this.puthisEPS.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisEPS.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhiseps('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisEPS lense search argument
     */
    public cleanputhiseps(): void {
        this.clearValidationMessages();
        this.puthisEPS.clean();
        this.executeDependecyRulesputhiseps('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisEPS'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisEPS.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_EPS';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
