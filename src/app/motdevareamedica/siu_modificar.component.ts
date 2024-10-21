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
    selector: 'imes-motdevareamedica-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MotDevAreaMedicaSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisMotDevAreaMedica: FieldOVLenseSearch;
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
        this.idXML = 'Clas_1497629065216447Ser_3UIServ_1';
        this.className = ModelConstants.Motdevareamedica.name;
        this.iuName = ModelConstants.Motdevareamedica.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_MotDevAreaMedica_svc_modificar',
            'Modificar');

        // Create inbound argument components
        this.puthisMotDevAreaMedica = new FieldOVLenseSearch(this.langMng);
        this.puDescripcion = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisMotDevAreaMedica.nameInRequest = 'p_thismotdevareamedica';
        this.puthisMotDevAreaMedica.alias = this.langMng.translateText(
            'cls_MotDevAreaMedica_svc_modificar_inArg_p_thisMotDevAreaMedica',
            'Motivo devolución');
        this.puthisMotDevAreaMedica.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisMotDevAreaMedica.mandatory = true;
        this.puthisMotDevAreaMedica.dataType = ModelConstants.Motdevareamedica.name;
        this.puthisMotDevAreaMedica.allowMultiSelect = true;
        this.puthisMotDevAreaMedica.maxLength = 50;
        this.puthisMotDevAreaMedica.assignCSS();
        this.fields.push(this.puthisMotDevAreaMedica);

        this.puDescripcion.nameInRequest = 'p_descripcion';
        this.puDescripcion.alias = this.langMng.translateText(
            'cls_MotDevAreaMedica_svc_modificar_inArg_p_Descripcion',
            'Descripción');
        this.puDescripcion.mandatory = true;
        this.puDescripcion.dataType = Field.dtString;
        this.puDescripcion.maxLength = 50;
        this.puDescripcion.assignCSS();
        this.fields.push(this.puDescripcion);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['MotDevAreaMedica'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisMotDevAreaMedica.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhismotdevareamedica('SetValue', true);
            this.puthisMotDevAreaMedica.enabled = false;
            this.executeDependecyRulesputhismotdevareamedica('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisMotDevAreaMedica'.toLowerCase()) {
            this.puthisMotDevAreaMedica.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhismotdevareamedica('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisMotDevAreaMedica argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhismotdevareamedica(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhismotdevareamedica();
        }
        if ('SetValue' === event && this.puthisMotDevAreaMedica.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisMotDevAreaMedica();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisMotDevAreaMedica argument
     */
    private setSuppInfoputhismotdevareamedica(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisMotDevAreaMedica.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Motdevareamedica.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisMotDevAreaMedica.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisMotDevAreaMedica.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Motdevareamedica.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisMotDevAreaMedica.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisMotDevAreaMedica argument
     */
    private executeDependecyRules1puthisMotDevAreaMedica(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisMotDevAreaMedica,
                'descripcion');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisMotDevAreaMedicaActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisMotDevAreaMedica argument
     */
    private executeDependecyRules1puthisMotDevAreaMedicaActions(): void {
        const varputhismotdevareamedica = this.getFirstInstanceFromCache(this.puthisMotDevAreaMedica);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhismotdevareamedica && !this.util.isNull(varputhismotdevareamedica)) {
            // p_Descripcion.SetValue( v.Descripcion )
            this.puDescripcion.setValue(varputhismotdevareamedica.get('descripcion'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisMotDevAreaMedica lense search argument
     */
    public onputhismotdevareamedicaChange(): void {

        const searchText = this.puthisMotDevAreaMedica.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisMotDevAreaMedica.lastText) {
                this.puthisMotDevAreaMedica.removeCSSClass('noResultsLenseSearch');
                this.puthisMotDevAreaMedica.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Motdevareamedica.name, 'IC_MotDevAreaMedica', searchText, [], null).then(
                        (response: any) => {
                            this.puthisMotDevAreaMedica.removeCSSClass('noResultsLenseSearch');
                            this.puthisMotDevAreaMedica.searchResults = response.results;
                            if (this.puthisMotDevAreaMedica.searchResults &&
                                this.puthisMotDevAreaMedica.searchResults.length === 0) {
                                this.puthisMotDevAreaMedica.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisMotDevAreaMedica.searchResults &&
                                this.puthisMotDevAreaMedica.searchResults.length === 1) {
                                this.processputhismotdevareamedicaSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisMotDevAreaMedica.removeCSSClass('noResultsLenseSearch');
                            this.puthisMotDevAreaMedica.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisMotDevAreaMedica.removeCSSClass('noResultsLenseSearch');
            this.puthisMotDevAreaMedica.searchResults = [];
            this.cleanputhismotdevareamedica();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisMotDevAreaMedica lense search argument
     */
    public processputhismotdevareamedicaSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisMotDevAreaMedica.searchResults.length > index) {
            selectedInstance = this.puthisMotDevAreaMedica.searchResults[index];
        }
        // Clean the result list
        this.puthisMotDevAreaMedica.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisMotDevAreaMedica.allowMultiSelect) {
                this.puthisMotDevAreaMedica.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisMotDevAreaMedica.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhismotdevareamedica('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisMotDevAreaMedica lense search argument
     */
    public cleanputhismotdevareamedica(): void {
        this.clearValidationMessages();
        this.puthisMotDevAreaMedica.clean();
        this.executeDependecyRulesputhismotdevareamedica('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisMotDevAreaMedica'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisMotDevAreaMedica.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_MotDevAreaMedica';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
