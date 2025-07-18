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
    selector: 'imes-paramreporte-siu-tnew',
    templateUrl: './siu_tnew.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParamReporteSIUuTNEWComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public ptupuagrReporte: FieldOVLenseSearch;
    public ptupuatrEsNumerico: FieldDefinedSelection;
    public ptupuatrDescripcion: Field;
    public ptupuatrTitulo: Field;

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
        this.idXML = 'Clas_1580739854336044Ser_4UIServ_1';
        this.className = ModelConstants.Paramreporte.name;
        this.iuName = ModelConstants.Paramreporte.siuutnew;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TNEW';
        this.title = this.langMng.translateText('cls_ParamReporte_svc_TNEW',
            'Nuevo');

        // Create inbound argument components
        this.ptupuagrReporte = new FieldOVLenseSearch(this.langMng);
        this.ptupuatrEsNumerico = new FieldDefinedSelection(this.langMng);
        this.ptupuatrDescripcion = new Field(this.langMng);
        this.ptupuatrTitulo = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptupuagrReporte.nameInRequest = 'pt_p_agrreporte';
        this.ptupuagrReporte.alias = this.langMng.translateText(
            'cls_ParamReporte_svc_TNEW_inArg_pt_p_agrReporte',
            'Reporte');
        this.ptupuagrReporte.mandatory = true;
        this.ptupuagrReporte.dataType = ModelConstants.Reportesprocalm.name;
        this.ptupuagrReporte.maxLength = 50;
        this.ptupuagrReporte.assignCSS();
        this.fields.push(this.ptupuagrReporte);

        this.ptupuatrEsNumerico.nameInRequest = 'pt_p_atresnumerico';
        this.ptupuatrEsNumerico.alias = this.langMng.translateText(
            'cls_ParamReporte_svc_TNEW_inArg_pt_p_atrEsNumerico',
            'Es numérico');
        this.ptupuatrEsNumerico.mandatory = true;
        this.ptupuatrEsNumerico.dataType = Field.dtBool;
        this.ptupuatrEsNumerico.options = DefinedSelections.DS_SINO;
        this.ptupuatrEsNumerico.value = false;
        this.ptupuatrEsNumerico.assignCSS();
        this.fields.push(this.ptupuatrEsNumerico);

        this.ptupuatrDescripcion.nameInRequest = 'pt_p_atrdescripcion';
        this.ptupuatrDescripcion.alias = this.langMng.translateText(
            'cls_ParamReporte_svc_TNEW_inArg_pt_p_atrDescripcion',
            'Descripción');
        this.ptupuatrDescripcion.mandatory = false;
        this.ptupuatrDescripcion.dataType = Field.dtString;
        this.ptupuatrDescripcion.maxLength = 200;
        this.ptupuatrDescripcion.assignCSS();
        this.fields.push(this.ptupuatrDescripcion);

        this.ptupuatrTitulo.nameInRequest = 'pt_p_atrtitulo';
        this.ptupuatrTitulo.alias = this.langMng.translateText(
            'cls_ParamReporte_svc_TNEW_inArg_pt_p_atrTitulo',
            'Titulo');
        this.ptupuatrTitulo.mandatory = true;
        this.ptupuatrTitulo.dataType = Field.dtString;
        this.ptupuatrTitulo.maxLength = 50;
        this.ptupuatrTitulo.assignCSS();
        this.fields.push(this.ptupuatrTitulo);
    }

    /**
     * Initialize arguments from context that identify a Role
     */
    public override initializeFromCtxRelated(): void {
        let lastRole = '';
        let lastRoleOid = null;
        if (this.context.exchangeInfo) {
            lastRole = this.context.exchangeInfo.getLastNavigationRole();
            lastRoleOid = this.context.exchangeInfo.getLastNavigationRoleOid();
        }

        if (lastRole && lastRoleOid) {
            if (lastRole === 'Reporte') {
                this.ptupuagrReporte.setValue(lastRoleOid);
                this.executeDependecyRulesptupuagrreporte('SetValue', true);
                this.ptupuagrReporte.enabled = false;
                this.executeDependecyRulesptupuagrreporte('SetEnabled', true);
            }
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuagrReporte'.toLowerCase()) {
            this.ptupuagrReporte.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptupuagrreporte('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for pt_p_agrReporte argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrreporte(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptupuagrreporte();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_agrReporte argument
     */
    private setSuppInfoptupuagrreporte(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.ptupuagrReporte.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Reportesprocalm.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptupuagrReporte.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptupuagrReporte.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Reportesprocalm.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptupuagrReporte.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the pt_p_agrReporte lense search argument
     */
    public onptupuagrreporteChange(): void {

        const searchText = this.ptupuagrReporte.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.ptupuagrReporte.lastText) {
                this.ptupuagrReporte.removeCSSClass('noResultsLenseSearch');
                this.ptupuagrReporte.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Reportesprocalm.name, 'IC_ReportesProcAlm', searchText, [], null).then(
                        (response: any) => {
                            this.ptupuagrReporte.removeCSSClass('noResultsLenseSearch');
                            this.ptupuagrReporte.searchResults = response.results;
                            if (this.ptupuagrReporte.searchResults &&
                                this.ptupuagrReporte.searchResults.length === 0) {
                                this.ptupuagrReporte.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.ptupuagrReporte.searchResults &&
                                this.ptupuagrReporte.searchResults.length === 1) {
                                this.processptupuagrreporteSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.ptupuagrReporte.removeCSSClass('noResultsLenseSearch');
                            this.ptupuagrReporte.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.ptupuagrReporte.removeCSSClass('noResultsLenseSearch');
            this.ptupuagrReporte.searchResults = [];
            this.cleanptupuagrreporte();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_agrReporte lense search argument
     */
    public processptupuagrreporteSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptupuagrReporte.searchResults.length > index) {
            selectedInstance = this.ptupuagrReporte.searchResults[index];
        }
        // Clean the result list
        this.ptupuagrReporte.searchResults = [];
        if (selectedInstance) {
            if (!this.ptupuagrReporte.allowMultiSelect) {
                this.ptupuagrReporte.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptupuagrReporte.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesptupuagrreporte('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_agrReporte lense search argument
     */
    public cleanptupuagrreporte(): void {
        this.clearValidationMessages();
        this.ptupuagrReporte.clean();
        this.executeDependecyRulesptupuagrreporte('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('ptupuagrReporte'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuagrReporte.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_ReportesProcAlm';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
