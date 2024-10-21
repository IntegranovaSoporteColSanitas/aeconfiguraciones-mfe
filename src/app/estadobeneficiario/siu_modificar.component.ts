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
    selector: 'imes-estadobeneficiario-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstadoBeneficiarioSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisEstadoBeneficiario: FieldOVLenseSearch;
    public puEsActivo: FieldDefinedSelection;
    public puConfirmado: FieldDefinedSelection;
    public puEsError: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431710597120636Ser_5UIServ_1';
        this.className = ModelConstants.Estadobeneficiario.name;
        this.iuName = ModelConstants.Estadobeneficiario.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_EstadoBeneficiario_svc_modificar',
            'Modificar estado beneficiario');

        // Create inbound argument components
        this.puthisEstadoBeneficiario = new FieldOVLenseSearch(this.langMng);
        this.puEsActivo = new FieldDefinedSelection(this.langMng);
        this.puConfirmado = new FieldDefinedSelection(this.langMng);
        this.puEsError = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisEstadoBeneficiario.nameInRequest = 'p_thisestadobeneficiario';
        this.puthisEstadoBeneficiario.alias = this.langMng.translateText(
            'cls_EstadoBeneficiario_svc_modificar_inArg_p_thisEstadoBeneficiario',
            'Estado beneficiario CORE');
        this.puthisEstadoBeneficiario.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisEstadoBeneficiario.mandatory = true;
        this.puthisEstadoBeneficiario.dataType = ModelConstants.Estadobeneficiario.name;
        this.puthisEstadoBeneficiario.maxLength = 150;
        this.puthisEstadoBeneficiario.assignCSS();
        this.fields.push(this.puthisEstadoBeneficiario);

        this.puEsActivo.nameInRequest = 'p_esactivo';
        this.puEsActivo.alias = this.langMng.translateText(
            'cls_EstadoBeneficiario_svc_modificar_inArg_p_EsActivo',
            'Es activo');
        this.puEsActivo.mandatory = true;
        this.puEsActivo.dataType = Field.dtBool;
        this.puEsActivo.options = DefinedSelections.DS_SINO;
        this.puEsActivo.assignCSS();
        this.fields.push(this.puEsActivo);

        this.puConfirmado.nameInRequest = 'p_confirmado';
        this.puConfirmado.alias = this.langMng.translateText(
            'cls_EstadoBeneficiario_svc_modificar_inArg_p_Confirmado',
            'Confirmado');
        this.puConfirmado.mandatory = true;
        this.puConfirmado.dataType = Field.dtBool;
        this.puConfirmado.options = DefinedSelections.DS_SINO;
        this.puConfirmado.assignCSS();
        this.fields.push(this.puConfirmado);

        this.puEsError.nameInRequest = 'p_eserror';
        this.puEsError.alias = this.langMng.translateText(
            'cls_EstadoBeneficiario_svc_modificar_inArg_p_EsError',
            'Es error');
        this.puEsError.mandatory = true;
        this.puEsError.dataType = Field.dtBool;
        this.puEsError.options = DefinedSelections.DS_SINO;
        this.puEsError.assignCSS();
        this.fields.push(this.puEsError);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // p_EsActivo
            const defValpuEsActivo = new Promise<void>((resolveDefValue) => {
                this.puEsActivo.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuEsActivo);

            // p_Confirmado
            const defValpuConfirmado = new Promise<void>((resolveDefValue) => {
                this.puConfirmado.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuConfirmado);

            // p_EsError
            const defValpuEsError = new Promise<void>((resolveDefValue) => {
                this.puEsError.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuEsError);

            Promise.all(promiseArr).then((results: any[]) => {
                this.util.hideWaitDialog();
                this.changeDetectorRef.markForCheck();
                resolve();
            });
        });
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['EstadoBeneficiario'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisEstadoBeneficiario.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisestadobeneficiario('SetValue', true);
            this.puthisEstadoBeneficiario.enabled = false;
            this.executeDependecyRulesputhisestadobeneficiario('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisEstadoBeneficiario'.toLowerCase()) {
            this.puthisEstadoBeneficiario.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisestadobeneficiario('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisEstadoBeneficiario argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisestadobeneficiario(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisestadobeneficiario();
        }
        if ('SetValue' === event && this.puthisEstadoBeneficiario.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisEstadoBeneficiario();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisEstadoBeneficiario argument
     */
    private setSuppInfoputhisestadobeneficiario(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisEstadoBeneficiario.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Estadobeneficiario.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisEstadoBeneficiario.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisEstadoBeneficiario.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Estadobeneficiario.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisEstadoBeneficiario.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisEstadoBeneficiario argument
     */
    private executeDependecyRules1puthisEstadoBeneficiario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisEstadoBeneficiario,
                'esactivo,confirmado');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisEstadoBeneficiarioActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisEstadoBeneficiario argument
     */
    private executeDependecyRules1puthisEstadoBeneficiarioActions(): void {
        const varputhisestadobeneficiario = this.getFirstInstanceFromCache(this.puthisEstadoBeneficiario);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhisestadobeneficiario && !this.util.isNull(varputhisestadobeneficiario)) {
            // p_EsActivo.SetValue( v.esactivo )
            this.puEsActivo.setValue(this.util.getBool(varputhisestadobeneficiario.get('esactivo')));
            // p_Confirmado.SetValue( v.confirmado )
            this.puConfirmado.setValue(this.util.getBool(varputhisestadobeneficiario.get('confirmado')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisEstadoBeneficiario lense search argument
     */
    public onputhisestadobeneficiarioChange(): void {

        const searchText = this.puthisEstadoBeneficiario.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisEstadoBeneficiario.lastText) {
                this.puthisEstadoBeneficiario.removeCSSClass('noResultsLenseSearch');
                this.puthisEstadoBeneficiario.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Estadobeneficiario.name, 'IC_EstadoBeneficiario', searchText, [],
                    null).then(
                        (response: any) => {
                            this.puthisEstadoBeneficiario.removeCSSClass('noResultsLenseSearch');
                            this.puthisEstadoBeneficiario.searchResults = response.results;
                            if (this.puthisEstadoBeneficiario.searchResults &&
                                this.puthisEstadoBeneficiario.searchResults.length === 0) {
                                this.puthisEstadoBeneficiario.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisEstadoBeneficiario.searchResults &&
                                this.puthisEstadoBeneficiario.searchResults.length === 1) {
                                this.processputhisestadobeneficiarioSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisEstadoBeneficiario.removeCSSClass('noResultsLenseSearch');
                            this.puthisEstadoBeneficiario.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisEstadoBeneficiario.removeCSSClass('noResultsLenseSearch');
            this.puthisEstadoBeneficiario.searchResults = [];
            this.cleanputhisestadobeneficiario();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisEstadoBeneficiario lense search argument
     */
    public processputhisestadobeneficiarioSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisEstadoBeneficiario.searchResults.length > index) {
            selectedInstance = this.puthisEstadoBeneficiario.searchResults[index];
        }
        // Clean the result list
        this.puthisEstadoBeneficiario.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisEstadoBeneficiario.allowMultiSelect) {
                this.puthisEstadoBeneficiario.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisEstadoBeneficiario.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisestadobeneficiario('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisEstadoBeneficiario lense search argument
     */
    public cleanputhisestadobeneficiario(): void {
        this.clearValidationMessages();
        this.puthisEstadoBeneficiario.clean();
        this.executeDependecyRulesputhisestadobeneficiario('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisEstadoBeneficiario'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisEstadoBeneficiario.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_EstadoBeneficiario';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
