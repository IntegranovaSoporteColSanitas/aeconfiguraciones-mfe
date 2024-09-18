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
    selector: 'imes-reportesprocalm-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportesProcAlmSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisReportesProcAlm: FieldOVLenseSearch;
    public puDescripcion: Field;
    public puNombreProc: Field;
    public puNombreFichero: Field;

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
        this.idXML = 'Clas_1547029184512775Ser_3UIServ_1';
        this.className = ModelConstants.Reportesprocalm.name;
        this.iuName = ModelConstants.Reportesprocalm.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_ReportesProcAlm_svc_modificar',
            'Modificar');

        // Create inbound argument components
        this.puthisReportesProcAlm = new FieldOVLenseSearch(this.langMng);
        this.puDescripcion = new Field(this.langMng);
        this.puNombreProc = new Field(this.langMng);
        this.puNombreFichero = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisReportesProcAlm.nameInRequest = 'p_thisreportesprocalm';
        this.puthisReportesProcAlm.alias = this.langMng.translateText(
            'cls_ReportesProcAlm_svc_modificar_inArg_p_thisReportesProcAlm',
            'Info Reporte');
        this.puthisReportesProcAlm.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisReportesProcAlm.mandatory = true;
        this.puthisReportesProcAlm.dataType = ModelConstants.Reportesprocalm.name;
        this.puthisReportesProcAlm.allowMultiSelect = true;
        this.puthisReportesProcAlm.maxLength = 50;
        this.puthisReportesProcAlm.assignCSS();
        this.fields.push(this.puthisReportesProcAlm);

        this.puDescripcion.nameInRequest = 'p_descripcion';
        this.puDescripcion.alias = this.langMng.translateText(
            'cls_ReportesProcAlm_svc_modificar_inArg_p_Descripcion',
            'Descripción');
        this.puDescripcion.mandatory = true;
        this.puDescripcion.dataType = Field.dtString;
        this.puDescripcion.maxLength = 50;
        this.puDescripcion.assignCSS();
        this.fields.push(this.puDescripcion);

        this.puNombreProc.nameInRequest = 'p_nombreproc';
        this.puNombreProc.alias = this.langMng.translateText(
            'cls_ReportesProcAlm_svc_modificar_inArg_p_NombreProc',
            'Nombre procedimiento');
        this.puNombreProc.mandatory = true;
        this.puNombreProc.dataType = Field.dtString;
        this.puNombreProc.maxLength = 200;
        this.puNombreProc.assignCSS();
        this.fields.push(this.puNombreProc);

        this.puNombreFichero.nameInRequest = 'p_nombrefichero';
        this.puNombreFichero.alias = this.langMng.translateText(
            'cls_ReportesProcAlm_svc_modificar_inArg_p_NombreFichero',
            'Nombre fichero');
        this.puNombreFichero.mandatory = true;
        this.puNombreFichero.dataType = Field.dtString;
        this.puNombreFichero.maxLength = 200;
        this.puNombreFichero.assignCSS();
        this.fields.push(this.puNombreFichero);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['ReportesProcAlm'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisReportesProcAlm.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisreportesprocalm('SetValue', true);
            this.puthisReportesProcAlm.enabled = false;
            this.executeDependecyRulesputhisreportesprocalm('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisReportesProcAlm'.toLowerCase()) {
            this.puthisReportesProcAlm.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisreportesprocalm('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisReportesProcAlm argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisreportesprocalm(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisreportesprocalm();
        }
        if ('SetValue' === event && this.puthisReportesProcAlm.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisReportesProcAlm();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisReportesProcAlm argument
     */
    private setSuppInfoputhisreportesprocalm(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisReportesProcAlm.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Reportesprocalm.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisReportesProcAlm.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisReportesProcAlm.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Reportesprocalm.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisReportesProcAlm.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisReportesProcAlm argument
     */
    private executeDependecyRules1puthisReportesProcAlm(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisReportesProcAlm,
                'descripcion,nombreproc,nombrefichero');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisReportesProcAlmActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisReportesProcAlm argument
     */
    private executeDependecyRules1puthisReportesProcAlmActions(): void {
        const varputhisreportesprocalm = this.getFirstInstanceFromCache(this.puthisReportesProcAlm);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhisreportesprocalm && !this.util.isNull(varputhisreportesprocalm)) {
            // p_Descripcion.SetValue( v.descripcion )
            this.puDescripcion.setValue(varputhisreportesprocalm?.get('descripcion'));
            // p_NombreProc.SetValue( v.nombreproc )
            this.puNombreProc.setValue(varputhisreportesprocalm?.get('nombreproc'));
            // p_NombreFichero.SetValue( v.nombrefichero )
            this.puNombreFichero.setValue(varputhisreportesprocalm?.get('nombrefichero'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisReportesProcAlm lense search argument
     */
    public onputhisreportesprocalmChange(): void {

        const searchText = this.puthisReportesProcAlm.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisReportesProcAlm.lastText) {
                this.puthisReportesProcAlm.removeCSSClass('noResultsLenseSearch');
                this.puthisReportesProcAlm.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Reportesprocalm.name, 'IC_ReportesProcAlm', searchText, [], null).then(
                        (response: any) => {
                            this.puthisReportesProcAlm.removeCSSClass('noResultsLenseSearch');
                            this.puthisReportesProcAlm.searchResults = response.results;
                            if (this.puthisReportesProcAlm.searchResults &&
                                this.puthisReportesProcAlm.searchResults.length === 0) {
                                this.puthisReportesProcAlm.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisReportesProcAlm.searchResults &&
                                this.puthisReportesProcAlm.searchResults.length === 1) {
                                this.processputhisreportesprocalmSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisReportesProcAlm.removeCSSClass('noResultsLenseSearch');
                            this.puthisReportesProcAlm.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisReportesProcAlm.removeCSSClass('noResultsLenseSearch');
            this.puthisReportesProcAlm.searchResults = [];
            this.cleanputhisreportesprocalm();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisReportesProcAlm lense search argument
     */
    public processputhisreportesprocalmSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisReportesProcAlm.searchResults.length > index) {
            selectedInstance = this.puthisReportesProcAlm.searchResults[index];
        }
        // Clean the result list
        this.puthisReportesProcAlm.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisReportesProcAlm.allowMultiSelect) {
                this.puthisReportesProcAlm.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisReportesProcAlm.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisreportesprocalm('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisReportesProcAlm lense search argument
     */
    public cleanputhisreportesprocalm(): void {
        this.clearValidationMessages();
        this.puthisReportesProcAlm.clean();
        this.executeDependecyRulesputhisreportesprocalm('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisReportesProcAlm'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisReportesProcAlm.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_ReportesProcAlm';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
