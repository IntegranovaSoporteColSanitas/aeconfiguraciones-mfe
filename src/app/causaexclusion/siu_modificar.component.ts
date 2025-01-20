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
    selector: 'imes-causaexclusion-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CausaExclusionSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisCausaExclusion: FieldOVLenseSearch;
    public puAliasCausa: Field;
    public puDescripcion: Field;

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
        this.idXML = 'Clas_1581522485248372Ser_3UIServ_1';
        this.className = ModelConstants.Causaexclusion.name;
        this.iuName = ModelConstants.Causaexclusion.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_CausaExclusion_svc_modificar',
            'Modificar');

        // Create inbound argument components
        this.puthisCausaExclusion = new FieldOVLenseSearch(this.langMng);
        this.puAliasCausa = new Field(this.langMng);
        this.puDescripcion = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisCausaExclusion.nameInRequest = 'p_thiscausaexclusion';
        this.puthisCausaExclusion.alias = this.langMng.translateText(
            'cls_CausaExclusion_svc_modificar_inArg_p_thisCausaExclusion',
            'Causa de Exclusion');
        this.puthisCausaExclusion.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisCausaExclusion.mandatory = true;
        this.puthisCausaExclusion.dataType = ModelConstants.Causaexclusion.name;
        this.puthisCausaExclusion.allowMultiSelect = true;
        this.puthisCausaExclusion.maxLength = 100;
        this.puthisCausaExclusion.assignCSS();
        this.fields.push(this.puthisCausaExclusion);

        this.puAliasCausa.nameInRequest = 'p_aliascausa';
        this.puAliasCausa.alias = this.langMng.translateText(
            'cls_CausaExclusion_svc_modificar_inArg_p_AliasCausa',
            'Alias');
        this.puAliasCausa.mandatory = true;
        this.puAliasCausa.dataType = Field.dtString;
        this.puAliasCausa.maxLength = 10;
        this.puAliasCausa.assignCSS();
        this.fields.push(this.puAliasCausa);

        this.puDescripcion.nameInRequest = 'p_descripcion';
        this.puDescripcion.alias = this.langMng.translateText(
            'cls_CausaExclusion_svc_modificar_inArg_p_Descripcion',
            'Descripción');
        this.puDescripcion.mandatory = true;
        this.puDescripcion.dataType = Field.dtString;
        this.puDescripcion.maxLength = 100;
        this.puDescripcion.assignCSS();
        this.fields.push(this.puDescripcion);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['CausaExclusion'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisCausaExclusion.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhiscausaexclusion('SetValue', true);
            this.puthisCausaExclusion.enabled = false;
            this.executeDependecyRulesputhiscausaexclusion('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisCausaExclusion'.toLowerCase()) {
            this.puthisCausaExclusion.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhiscausaexclusion('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisCausaExclusion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhiscausaexclusion(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhiscausaexclusion();
        }
        if ('SetValue' === event && this.puthisCausaExclusion.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisCausaExclusion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisCausaExclusion argument
     */
    private setSuppInfoputhiscausaexclusion(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisCausaExclusion.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Causaexclusion.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisCausaExclusion.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisCausaExclusion.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Causaexclusion.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisCausaExclusion.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisCausaExclusion argument
     */
    private executeDependecyRules1puthisCausaExclusion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisCausaExclusion,
                'aliascausa,descripcion');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisCausaExclusionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisCausaExclusion argument
     */
    private executeDependecyRules1puthisCausaExclusionActions(): void {
        const varputhiscausaexclusion = this.getFirstInstanceFromCache(this.puthisCausaExclusion);
        // v <> NULL
        if (varputhiscausaexclusion && !this.util.isNull(varputhiscausaexclusion)) {
            // p_AliasCausa.SetValue( v.AliasCausa )
            this.puAliasCausa.setValue(varputhiscausaexclusion.get('aliascausa'));
            // p_Descripcion.SetValue( v.Descripcion )
            this.puDescripcion.setValue(varputhiscausaexclusion.get('descripcion'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisCausaExclusion lense search argument
     */
    public onputhiscausaexclusionChange(): void {

        const searchText = this.puthisCausaExclusion.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisCausaExclusion.lastText) {
                this.puthisCausaExclusion.removeCSSClass('noResultsLenseSearch');
                this.puthisCausaExclusion.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Causaexclusion.name, 'IC_CausaExclusion', searchText, [], null).then(
                        (response: any) => {
                            this.puthisCausaExclusion.removeCSSClass('noResultsLenseSearch');
                            this.puthisCausaExclusion.searchResults = response.results;
                            if (this.puthisCausaExclusion.searchResults &&
                                this.puthisCausaExclusion.searchResults.length === 0) {
                                this.puthisCausaExclusion.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisCausaExclusion.searchResults &&
                                this.puthisCausaExclusion.searchResults.length === 1) {
                                this.processputhiscausaexclusionSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisCausaExclusion.removeCSSClass('noResultsLenseSearch');
                            this.puthisCausaExclusion.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisCausaExclusion.removeCSSClass('noResultsLenseSearch');
            this.puthisCausaExclusion.searchResults = [];
            this.cleanputhiscausaexclusion();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisCausaExclusion lense search argument
     */
    public processputhiscausaexclusionSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisCausaExclusion.searchResults.length > index) {
            selectedInstance = this.puthisCausaExclusion.searchResults[index];
        }
        // Clean the result list
        this.puthisCausaExclusion.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisCausaExclusion.allowMultiSelect) {
                this.puthisCausaExclusion.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisCausaExclusion.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhiscausaexclusion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisCausaExclusion lense search argument
     */
    public cleanputhiscausaexclusion(): void {
        this.clearValidationMessages();
        this.puthisCausaExclusion.clean();
        this.executeDependecyRulesputhiscausaexclusion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisCausaExclusion'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisCausaExclusion.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_CausaExclusion';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
