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
    selector: 'imes-reportesdominio-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportesDominioSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisReportesDominio: FieldOVLenseSearch;
    public puEnviarAuto: FieldDefinedSelection;

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
        this.idXML = 'Clas_1623832395776730Ser_3UIServ_1';
        this.className = ModelConstants.Reportesdominio.name;
        this.iuName = ModelConstants.Reportesdominio.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_ReportesDominio_svc_modificar',
            'Modificar');

        // Create inbound argument components
        this.puthisReportesDominio = new FieldOVLenseSearch(this.langMng, this.util);
        this.puEnviarAuto = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisReportesDominio.nameInRequest = 'p_thisreportesdominio';
        this.puthisReportesDominio.alias = this.langMng.translateText(
            'cls_ReportesDominio_svc_modificar_inArg_p_thisReportesDominio',
            'Reportes de Dominio');
        this.puthisReportesDominio.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisReportesDominio.mandatory = true;
        this.puthisReportesDominio.dataType = ModelConstants.Reportesdominio.name;
        this.puthisReportesDominio.allowMultiSelect = true;
        this.puthisReportesDominio.maxLength = 100;
        this.puthisReportesDominio.assignCSS();
        this.fields.push(this.puthisReportesDominio);

        this.puEnviarAuto.nameInRequest = 'p_enviarauto';
        this.puEnviarAuto.alias = this.langMng.translateText(
            'cls_ReportesDominio_svc_modificar_inArg_p_EnviarAuto',
            'Enviar automáticamente');
        this.puEnviarAuto.mandatory = true;
        this.puEnviarAuto.dataType = Field.dtBool;
        this.puEnviarAuto.options = DefinedSelections.DS_SINO;
        this.puEnviarAuto.assignCSS();
        this.fields.push(this.puEnviarAuto);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // p_EnviarAuto
            const defValpuEnviarAuto = new Promise<void>((resolveDefValue) => {
                this.puEnviarAuto.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuEnviarAuto);

            Promise.all(promiseArr).then((results: any[]) => {
                this.setShowWait(false);
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
            ['ReportesDominio'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisReportesDominio.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisreportesdominio('SetValue', true);
            this.puthisReportesDominio.enabled = false;
            this.executeDependecyRulesputhisreportesdominio('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisReportesDominio'.toLowerCase()) {
            this.puthisReportesDominio.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisreportesdominio('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisReportesDominio argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisreportesdominio(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisreportesdominio();
        }
        if ('SetValue' === event && this.puthisReportesDominio.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisReportesDominio();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisReportesDominio argument
     */
    private setSuppInfoputhisreportesdominio(): void {

        const displaySetIC = 'PlantillaReporte.Titulo';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisReportesDominio.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Reportesdominio.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisReportesDominio.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisReportesDominio.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Reportesdominio.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisReportesDominio.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisReportesDominio argument
     */
    private executeDependecyRules1puthisReportesDominio(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisReportesDominio,
                'enviarauto');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisReportesDominioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisReportesDominio argument
     */
    private executeDependecyRules1puthisReportesDominioActions(): void {
        const varputhisreportesdominio = this.getFirstInstanceFromCache(this.puthisReportesDominio);
        // v <> NULL
        if (varputhisreportesdominio && !this.util.isNull(varputhisreportesdominio)) {
            // p_EnviarAuto.SetValue( v.enviarauto )
            this.puEnviarAuto.setValue(this.util.getBool(varputhisreportesdominio.get('enviarauto')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }
    /**
     * Process the change in the p_thisReportesDominio lense search argument
     */
    public onputhisreportesdominioChange(): void {
        this.executeLenseSearch(this.puthisReportesDominio, ModelConstants.Reportesdominio.name, 'IC_ReportesDominio',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanputhisreportesdominio();
            }
            if (foundInstances === 1) {
                this.processputhisreportesdominioSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisReportesDominio lense search argument
     */
    public processputhisreportesdominioSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisReportesDominio.searchResults.length > index) {
            selectedInstance = this.puthisReportesDominio.searchResults[index];
        }
        // Clean the result list
        this.puthisReportesDominio.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisReportesDominio.allowMultiSelect) {
                this.puthisReportesDominio.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisReportesDominio.addInstances(selectedInstance);
        }
        this.executeDependecyRulesputhisreportesdominio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisReportesDominio lense search argument
     */
    public cleanputhisreportesdominio(): void {
        this.clearValidationMessages();
        this.puthisReportesDominio.clean();
        this.executeDependecyRulesputhisreportesdominio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisReportesDominio'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisReportesDominio.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_ReportesDominio';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
