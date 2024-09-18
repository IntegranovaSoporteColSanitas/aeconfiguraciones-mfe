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
    selector: 'imes-tipodireccion-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipoDireccionSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisTipoDireccion: FieldOVLenseSearch;
    public puEsResidencia: FieldDefinedSelection;
    public puEsCorrespondencia: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431940628480765Ser_3UIServ_1';
        this.className = ModelConstants.Tipodireccion.name;
        this.iuName = ModelConstants.Tipodireccion.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_TipoDireccion_svc_modificar',
            'Modificar tipo de dirección');

        // Create inbound argument components
        this.puthisTipoDireccion = new FieldOVLenseSearch(this.langMng);
        this.puEsResidencia = new FieldDefinedSelection(this.langMng);
        this.puEsCorrespondencia = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisTipoDireccion.nameInRequest = 'p_thistipodireccion';
        this.puthisTipoDireccion.alias = this.langMng.translateText(
            'cls_TipoDireccion_svc_modificar_inArg_p_thisTipoDireccion',
            'Tipo dirección');
        this.puthisTipoDireccion.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisTipoDireccion.mandatory = true;
        this.puthisTipoDireccion.dataType = ModelConstants.Tipodireccion.name;
        this.puthisTipoDireccion.allowMultiSelect = true;
        this.puthisTipoDireccion.maxLength = 150;
        this.puthisTipoDireccion.assignCSS();
        this.fields.push(this.puthisTipoDireccion);

        this.puEsResidencia.nameInRequest = 'p_esresidencia';
        this.puEsResidencia.alias = this.langMng.translateText(
            'cls_TipoDireccion_svc_modificar_inArg_p_EsResidencia',
            'Es residencia');
        this.puEsResidencia.mandatory = true;
        this.puEsResidencia.dataType = Field.dtBool;
        this.puEsResidencia.options = DefinedSelections.DS_SINO;
        this.puEsResidencia.value = false;
        this.puEsResidencia.assignCSS();
        this.fields.push(this.puEsResidencia);

        this.puEsCorrespondencia.nameInRequest = 'p_escorrespondencia';
        this.puEsCorrespondencia.alias = this.langMng.translateText(
            'cls_TipoDireccion_svc_modificar_inArg_p_EsCorrespondencia',
            'Es correspondencia');
        this.puEsCorrespondencia.mandatory = true;
        this.puEsCorrespondencia.dataType = Field.dtBool;
        this.puEsCorrespondencia.options = DefinedSelections.DS_SINO;
        this.puEsCorrespondencia.value = false;
        this.puEsCorrespondencia.assignCSS();
        this.fields.push(this.puEsCorrespondencia);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['TipoDireccion'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisTipoDireccion.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhistipodireccion('SetValue', true);
            this.puthisTipoDireccion.enabled = false;
            this.executeDependecyRulesputhistipodireccion('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisTipoDireccion'.toLowerCase()) {
            this.puthisTipoDireccion.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhistipodireccion('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisTipoDireccion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhistipodireccion(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhistipodireccion();
        }
        if ('SetValue' === event && this.puthisTipoDireccion.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisTipoDireccion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisTipoDireccion argument
     */
    private setSuppInfoputhistipodireccion(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisTipoDireccion.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Tipodireccion.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisTipoDireccion.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisTipoDireccion.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Tipodireccion.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisTipoDireccion.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisTipoDireccion argument
     */
    private executeDependecyRules1puthisTipoDireccion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisTipoDireccion,
                'esresidencia,escorrespondencia');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisTipoDireccionActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisTipoDireccion argument
     */
    private executeDependecyRules1puthisTipoDireccionActions(): void {
        const varputhistipodireccion = this.getFirstInstanceFromCache(this.puthisTipoDireccion);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhistipodireccion && !this.util.isNull(varputhistipodireccion)) {
            // p_EsResidencia.SetValue( v.esresidencia )
            this.puEsResidencia.setValue(this.util.getBool(varputhistipodireccion?.get('esresidencia')));
            // p_EsCorrespondencia.SetValue( v.escorrespondencia )
            this.puEsCorrespondencia.setValue(this.util.getBool(varputhistipodireccion?.get('escorrespondencia')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisTipoDireccion lense search argument
     */
    public onputhistipodireccionChange(): void {

        const searchText = this.puthisTipoDireccion.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisTipoDireccion.lastText) {
                this.puthisTipoDireccion.removeCSSClass('noResultsLenseSearch');
                this.puthisTipoDireccion.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Tipodireccion.name, 'IC_TipoDireccion', searchText, [], null).then(
                        (response: any) => {
                            this.puthisTipoDireccion.removeCSSClass('noResultsLenseSearch');
                            this.puthisTipoDireccion.searchResults = response.results;
                            if (this.puthisTipoDireccion.searchResults &&
                                this.puthisTipoDireccion.searchResults.length === 0) {
                                this.puthisTipoDireccion.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisTipoDireccion.searchResults &&
                                this.puthisTipoDireccion.searchResults.length === 1) {
                                this.processputhistipodireccionSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisTipoDireccion.removeCSSClass('noResultsLenseSearch');
                            this.puthisTipoDireccion.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisTipoDireccion.removeCSSClass('noResultsLenseSearch');
            this.puthisTipoDireccion.searchResults = [];
            this.cleanputhistipodireccion();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisTipoDireccion lense search argument
     */
    public processputhistipodireccionSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisTipoDireccion.searchResults.length > index) {
            selectedInstance = this.puthisTipoDireccion.searchResults[index];
        }
        // Clean the result list
        this.puthisTipoDireccion.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisTipoDireccion.allowMultiSelect) {
                this.puthisTipoDireccion.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisTipoDireccion.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhistipodireccion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisTipoDireccion lense search argument
     */
    public cleanputhistipodireccion(): void {
        this.clearValidationMessages();
        this.puthisTipoDireccion.clean();
        this.executeDependecyRulesputhistipodireccion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisTipoDireccion'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisTipoDireccion.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_TipoDireccion';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
