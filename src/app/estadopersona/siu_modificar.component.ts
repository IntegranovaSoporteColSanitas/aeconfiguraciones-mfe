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
    selector: 'imes-estadopersona-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstadoPersonaSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisEstadoPersona: FieldOVLenseSearch;
    public puUnBeneficiarioDistino: FieldDefinedSelection;
    public puProhibidoBeneficiarios: FieldDefinedSelection;
    public puProhibidoContratante: FieldDefinedSelection;
    public puProhibidoTitular: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431941021696517Ser_3UIServ_1';
        this.className = ModelConstants.Estadopersona.name;
        this.iuName = ModelConstants.Estadopersona.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_EstadoPersona_svc_modificar',
            'Modificar estado persona');

        // Create inbound argument components
        this.puthisEstadoPersona = new FieldOVLenseSearch(this.langMng);
        this.puUnBeneficiarioDistino = new FieldDefinedSelection(this.langMng);
        this.puProhibidoBeneficiarios = new FieldDefinedSelection(this.langMng);
        this.puProhibidoContratante = new FieldDefinedSelection(this.langMng);
        this.puProhibidoTitular = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisEstadoPersona.nameInRequest = 'p_thisestadopersona';
        this.puthisEstadoPersona.alias = this.langMng.translateText(
            'cls_EstadoPersona_svc_modificar_inArg_p_thisEstadoPersona',
            'Estado persona');
        this.puthisEstadoPersona.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisEstadoPersona.mandatory = true;
        this.puthisEstadoPersona.dataType = ModelConstants.Estadopersona.name;
        this.puthisEstadoPersona.allowMultiSelect = true;
        this.puthisEstadoPersona.maxLength = 150;
        this.puthisEstadoPersona.assignCSS();
        this.fields.push(this.puthisEstadoPersona);

        this.puUnBeneficiarioDistino.nameInRequest = 'p_unbeneficiariodistino';
        this.puUnBeneficiarioDistino.alias = this.langMng.translateText(
            'cls_EstadoPersona_svc_modificar_inArg_p_UnBeneficiarioDistino',
            'Un beneficiario distinto');
        this.puUnBeneficiarioDistino.mandatory = true;
        this.puUnBeneficiarioDistino.dataType = Field.dtBool;
        this.puUnBeneficiarioDistino.options = DefinedSelections.DS_SINO;
        this.puUnBeneficiarioDistino.value = false;
        this.puUnBeneficiarioDistino.assignCSS();
        this.fields.push(this.puUnBeneficiarioDistino);

        this.puProhibidoBeneficiarios.nameInRequest = 'p_prohibidobeneficiarios';
        this.puProhibidoBeneficiarios.alias = this.langMng.translateText(
            'cls_EstadoPersona_svc_modificar_inArg_p_ProhibidoBeneficiarios',
            'Prohibido beneficiarios');
        this.puProhibidoBeneficiarios.mandatory = true;
        this.puProhibidoBeneficiarios.dataType = Field.dtBool;
        this.puProhibidoBeneficiarios.options = DefinedSelections.DS_SINO;
        this.puProhibidoBeneficiarios.value = false;
        this.puProhibidoBeneficiarios.assignCSS();
        this.fields.push(this.puProhibidoBeneficiarios);

        this.puProhibidoContratante.nameInRequest = 'p_prohibidocontratante';
        this.puProhibidoContratante.alias = this.langMng.translateText(
            'cls_EstadoPersona_svc_modificar_inArg_p_ProhibidoContratante',
            'Prohibido contratante');
        this.puProhibidoContratante.mandatory = true;
        this.puProhibidoContratante.dataType = Field.dtBool;
        this.puProhibidoContratante.options = DefinedSelections.DS_SINO;
        this.puProhibidoContratante.assignCSS();
        this.fields.push(this.puProhibidoContratante);

        this.puProhibidoTitular.nameInRequest = 'p_prohibidotitular';
        this.puProhibidoTitular.alias = this.langMng.translateText(
            'cls_EstadoPersona_svc_modificar_inArg_p_ProhibidoTitular',
            'Prohibido titular');
        this.puProhibidoTitular.mandatory = true;
        this.puProhibidoTitular.dataType = Field.dtBool;
        this.puProhibidoTitular.options = DefinedSelections.DS_SINO;
        this.puProhibidoTitular.assignCSS();
        this.fields.push(this.puProhibidoTitular);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // p_ProhibidoContratante
            const defValpuProhibidoContratante = new Promise<void>((resolveDefValue) => {
                this.puProhibidoContratante.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuProhibidoContratante);

            // p_ProhibidoTitular
            const defValpuProhibidoTitular = new Promise<void>((resolveDefValue) => {
                this.puProhibidoTitular.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuProhibidoTitular);

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
            ['EstadoPersona'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisEstadoPersona.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisestadopersona('SetValue', true);
            this.puthisEstadoPersona.enabled = false;
            this.executeDependecyRulesputhisestadopersona('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisEstadoPersona'.toLowerCase()) {
            this.puthisEstadoPersona.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisestadopersona('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisEstadoPersona argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisestadopersona(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisestadopersona();
        }
        if ('SetValue' === event && this.puthisEstadoPersona.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisEstadoPersona();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisEstadoPersona argument
     */
    private setSuppInfoputhisestadopersona(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisEstadoPersona.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Estadopersona.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisEstadoPersona.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisEstadoPersona.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Estadopersona.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisEstadoPersona.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisEstadoPersona argument
     */
    private executeDependecyRules1puthisEstadoPersona(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisEstadoPersona,
                'unbeneficiariodistino,prohibidobeneficiarios,prohibidocontratante,prohibidotitular');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisEstadoPersonaActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisEstadoPersona argument
     */
    private executeDependecyRules1puthisEstadoPersonaActions(): void {
        const varputhisestadopersona = this.getFirstInstanceFromCache(this.puthisEstadoPersona);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhisestadopersona && !this.util.isNull(varputhisestadopersona)) {
            // p_UnBeneficiarioDistino.SetValue( v.unbeneficiariodistino )
            this.puUnBeneficiarioDistino.setValue(this.util.getBool(varputhisestadopersona.get('unbeneficiariodistino')));
            // p_ProhibidoBeneficiarios.SetValue( v.prohibidobeneficiarios )
            this.puProhibidoBeneficiarios.setValue(this.util.getBool(varputhisestadopersona.get('prohibidobeneficiarios')));
            // p_ProhibidoContratante.SetValue( v.prohibidocontratante )
            this.puProhibidoContratante.setValue(this.util.getBool(varputhisestadopersona.get('prohibidocontratante')));
            // p_ProhibidoTitular.SetValue( v.prohibidotitular )
            this.puProhibidoTitular.setValue(this.util.getBool(varputhisestadopersona.get('prohibidotitular')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisEstadoPersona lense search argument
     */
    public onputhisestadopersonaChange(): void {

        const searchText = this.puthisEstadoPersona.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisEstadoPersona.lastText) {
                this.puthisEstadoPersona.removeCSSClass('noResultsLenseSearch');
                this.puthisEstadoPersona.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Estadopersona.name, 'IC_EstadoPersona', searchText, [], null).then(
                        (response: any) => {
                            this.puthisEstadoPersona.removeCSSClass('noResultsLenseSearch');
                            this.puthisEstadoPersona.searchResults = response.results;
                            if (this.puthisEstadoPersona.searchResults &&
                                this.puthisEstadoPersona.searchResults.length === 0) {
                                this.puthisEstadoPersona.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisEstadoPersona.searchResults &&
                                this.puthisEstadoPersona.searchResults.length === 1) {
                                this.processputhisestadopersonaSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisEstadoPersona.removeCSSClass('noResultsLenseSearch');
                            this.puthisEstadoPersona.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisEstadoPersona.removeCSSClass('noResultsLenseSearch');
            this.puthisEstadoPersona.searchResults = [];
            this.cleanputhisestadopersona();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisEstadoPersona lense search argument
     */
    public processputhisestadopersonaSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisEstadoPersona.searchResults.length > index) {
            selectedInstance = this.puthisEstadoPersona.searchResults[index];
        }
        // Clean the result list
        this.puthisEstadoPersona.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisEstadoPersona.allowMultiSelect) {
                this.puthisEstadoPersona.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisEstadoPersona.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisestadopersona('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisEstadoPersona lense search argument
     */
    public cleanputhisestadopersona(): void {
        this.clearValidationMessages();
        this.puthisEstadoPersona.clean();
        this.executeDependecyRulesputhisestadopersona('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisEstadoPersona'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisEstadoPersona.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_EstadoPersona';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
