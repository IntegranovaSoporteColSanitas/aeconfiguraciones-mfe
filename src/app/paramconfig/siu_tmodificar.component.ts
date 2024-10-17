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
    selector: 'imes-paramconfig-siu-tmodificar',
    templateUrl: './siu_tmodificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParamConfigSIUuTMODIFICARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisParamConfig: FieldOVLenseSearch;
    public ptupuValor: Field;

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
        this.idXML = 'Clas_1431630118912680Ser_4UIServ_1';
        this.className = ModelConstants.Paramconfig.name;
        this.iuName = ModelConstants.Paramconfig.siuutmodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TMODIFICAR';
        this.title = this.langMng.translateText('cls_ParamConfig_svc_TMODIFICAR',
            'Modificar parámetro de configuración');

        // Create inbound argument components
        this.puthisParamConfig = new FieldOVLenseSearch(this.langMng);
        this.ptupuValor = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisParamConfig.nameInRequest = 'p_thisparamconfig';
        this.puthisParamConfig.alias = this.langMng.translateText(
            'cls_ParamConfig_svc_TMODIFICAR_inArg_p_thisParamConfig',
            'Parámetro Conf.');
        this.puthisParamConfig.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisParamConfig.mandatory = true;
        this.puthisParamConfig.dataType = ModelConstants.Paramconfig.name;
        this.puthisParamConfig.maxLength = 255;
        this.puthisParamConfig.assignCSS();
        this.fields.push(this.puthisParamConfig);

        this.ptupuValor.nameInRequest = 'pt_p_valor';
        this.ptupuValor.alias = this.langMng.translateText(
            'cls_ParamConfig_svc_TMODIFICAR_inArg_pt_p_Valor',
            'Valor');
        this.ptupuValor.mandatory = true;
        this.ptupuValor.dataType = Field.dtString;
        this.ptupuValor.maxLength = 999;
        this.ptupuValor.assignCSS();
        this.fields.push(this.ptupuValor);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['ParamConfig'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisParamConfig.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisparamconfig('SetValue', true);
            this.puthisParamConfig.enabled = false;
            this.executeDependecyRulesputhisparamconfig('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisParamConfig'.toLowerCase()) {
            this.puthisParamConfig.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisparamconfig('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisParamConfig argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisparamconfig(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisparamconfig();
        }
        if ('SetValue' === event && this.puthisParamConfig.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisParamConfig();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisParamConfig argument
     */
    private setSuppInfoputhisparamconfig(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisParamConfig.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Paramconfig.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisParamConfig.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisParamConfig.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Paramconfig.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisParamConfig.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisParamConfig argument
     */
    private executeDependecyRules1puthisParamConfig(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisParamConfig,
                'valor');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisParamConfigActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisParamConfig argument
     */
    private executeDependecyRules1puthisParamConfigActions(): void {
        const varputhisparamconfig = this.getFirstInstanceFromCache(this.puthisParamConfig);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhisparamconfig && !this.util.isNull(varputhisparamconfig)) {
            // pt_p_Valor.SetValue( v.Valor )
            this.ptupuValor.setValue(varputhisparamconfig?.get('valor'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisParamConfig lense search argument
     */
    public onputhisparamconfigChange(): void {

        const searchText = this.puthisParamConfig.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisParamConfig.lastText) {
                this.puthisParamConfig.removeCSSClass('noResultsLenseSearch');
                this.puthisParamConfig.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Paramconfig.name, 'IC_ParamConfig', searchText, [], null).then(
                        (response: any) => {
                            this.puthisParamConfig.removeCSSClass('noResultsLenseSearch');
                            this.puthisParamConfig.searchResults = response.results;
                            if (this.puthisParamConfig.searchResults &&
                                this.puthisParamConfig.searchResults.length === 0) {
                                this.puthisParamConfig.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisParamConfig.searchResults &&
                                this.puthisParamConfig.searchResults.length === 1) {
                                this.processputhisparamconfigSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisParamConfig.removeCSSClass('noResultsLenseSearch');
                            this.puthisParamConfig.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisParamConfig.removeCSSClass('noResultsLenseSearch');
            this.puthisParamConfig.searchResults = [];
            this.cleanputhisparamconfig();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisParamConfig lense search argument
     */
    public processputhisparamconfigSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisParamConfig.searchResults.length > index) {
            selectedInstance = this.puthisParamConfig.searchResults[index];
        }
        // Clean the result list
        this.puthisParamConfig.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisParamConfig.allowMultiSelect) {
                this.puthisParamConfig.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisParamConfig.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisparamconfig('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisParamConfig lense search argument
     */
    public cleanputhisparamconfig(): void {
        this.clearValidationMessages();
        this.puthisParamConfig.clean();
        this.executeDependecyRulesputhisparamconfig('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisParamConfig'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisParamConfig.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_ParamConfig';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
