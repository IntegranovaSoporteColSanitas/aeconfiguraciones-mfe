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
    selector: 'imes-periodicidad-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeriodicidadSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisPeriodicidad: FieldOVLenseSearch;
    public puEsMensual: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431699849216490Ser_10UIServ_1';
        this.className = ModelConstants.Periodicidad.name;
        this.iuName = ModelConstants.Periodicidad.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_Periodicidad_svc_modificar',
            'Modificar periodicidad');

        // Create inbound argument components
        this.puthisPeriodicidad = new FieldOVLenseSearch(this.langMng);
        this.puEsMensual = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisPeriodicidad.nameInRequest = 'p_thisperiodicidad';
        this.puthisPeriodicidad.alias = this.langMng.translateText(
            'cls_Periodicidad_svc_modificar_inArg_p_thisPeriodicidad',
            'Periodicidad');
        this.puthisPeriodicidad.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisPeriodicidad.mandatory = true;
        this.puthisPeriodicidad.dataType = ModelConstants.Periodicidad.name;
        this.puthisPeriodicidad.maxLength = 150;
        this.puthisPeriodicidad.assignCSS();
        this.fields.push(this.puthisPeriodicidad);

        this.puEsMensual.nameInRequest = 'p_esmensual';
        this.puEsMensual.alias = this.langMng.translateText(
            'cls_Periodicidad_svc_modificar_inArg_p_EsMensual',
            'Es mensual');
        this.puEsMensual.mandatory = true;
        this.puEsMensual.dataType = Field.dtBool;
        this.puEsMensual.options = DefinedSelections.DS_SINO;
        this.puEsMensual.value = false;
        this.puEsMensual.assignCSS();
        this.fields.push(this.puEsMensual);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Periodicidad'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisPeriodicidad.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisperiodicidad('SetValue', true);
            this.puthisPeriodicidad.enabled = false;
            this.executeDependecyRulesputhisperiodicidad('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisPeriodicidad'.toLowerCase()) {
            this.puthisPeriodicidad.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisperiodicidad('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisPeriodicidad argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisperiodicidad(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisperiodicidad();
        }
        if ('SetValue' === event && this.puthisPeriodicidad.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisPeriodicidad();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisPeriodicidad argument
     */
    private setSuppInfoputhisperiodicidad(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisPeriodicidad.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Periodicidad.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisPeriodicidad.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisPeriodicidad.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Periodicidad.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisPeriodicidad.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisPeriodicidad argument
     */
    private executeDependecyRules1puthisPeriodicidad(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisPeriodicidad,
                'esmensual');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisPeriodicidadActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisPeriodicidad argument
     */
    private executeDependecyRules1puthisPeriodicidadActions(): void {
        const varputhisperiodicidad = this.getFirstInstanceFromCache(this.puthisPeriodicidad);
        // v <> NULL
        if (varputhisperiodicidad && !this.util.isNull(varputhisperiodicidad)) {
            // p_EsMensual.SetValue( v.esmensual )
            this.puEsMensual.setValue(this.util.getBool(varputhisperiodicidad.get('esmensual')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisPeriodicidad lense search argument
     */
    public onputhisperiodicidadChange(): void {

        const searchText = this.puthisPeriodicidad.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisPeriodicidad.lastText) {
                this.puthisPeriodicidad.removeCSSClass('noResultsLenseSearch');
                this.puthisPeriodicidad.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Periodicidad.name, 'IC_Periodicidad', searchText, [], null).then(
                        (response: any) => {
                            this.puthisPeriodicidad.removeCSSClass('noResultsLenseSearch');
                            this.puthisPeriodicidad.searchResults = response.results;
                            if (this.puthisPeriodicidad.searchResults &&
                                this.puthisPeriodicidad.searchResults.length === 0) {
                                this.puthisPeriodicidad.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisPeriodicidad.searchResults &&
                                this.puthisPeriodicidad.searchResults.length === 1) {
                                this.processputhisperiodicidadSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisPeriodicidad.removeCSSClass('noResultsLenseSearch');
                            this.puthisPeriodicidad.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisPeriodicidad.removeCSSClass('noResultsLenseSearch');
            this.puthisPeriodicidad.searchResults = [];
            this.cleanputhisperiodicidad();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisPeriodicidad lense search argument
     */
    public processputhisperiodicidadSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisPeriodicidad.searchResults.length > index) {
            selectedInstance = this.puthisPeriodicidad.searchResults[index];
        }
        // Clean the result list
        this.puthisPeriodicidad.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisPeriodicidad.allowMultiSelect) {
                this.puthisPeriodicidad.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisPeriodicidad.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisperiodicidad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisPeriodicidad lense search argument
     */
    public cleanputhisperiodicidad(): void {
        this.clearValidationMessages();
        this.puthisPeriodicidad.clean();
        this.executeDependecyRulesputhisperiodicidad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisPeriodicidad'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisPeriodicidad.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Periodicidad';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
