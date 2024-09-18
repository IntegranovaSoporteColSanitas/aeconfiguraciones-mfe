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
    selector: 'imes-dominio-siu-taddreporte',
    templateUrl: './siu_taddreporte.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DominioSIUuTADDREPORTEComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisDominio: FieldOVLenseSearch;
    public ptupuagrPlantillaReporte: FieldOVLenseSearch;
    public ptupuatrEnviarAuto: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431701422080423Ser_33UIServ_1';
        this.className = ModelConstants.Dominio.name;
        this.iuName = ModelConstants.Dominio.siuutaddreporte;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TADDREPORTE';
        this.title = this.langMng.translateText('cls_Dominio_svc_TADDREPORTE',
            'Asociar reporte');

        // Create inbound argument components
        this.puthisDominio = new FieldOVLenseSearch(this.langMng);
        this.ptupuagrPlantillaReporte = new FieldOVLenseSearch(this.langMng);
        this.ptupuatrEnviarAuto = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisDominio.nameInRequest = 'p_thisdominio';
        this.puthisDominio.alias = this.langMng.translateText(
            'cls_Dominio_svc_TADDREPORTE_inArg_p_thisDominio',
            'Dominio');
        this.puthisDominio.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisDominio.mandatory = true;
        this.puthisDominio.dataType = ModelConstants.Dominio.name;
        this.puthisDominio.maxLength = 250;
        this.puthisDominio.assignCSS();
        this.fields.push(this.puthisDominio);

        this.ptupuagrPlantillaReporte.nameInRequest = 'pt_p_agrplantillareporte';
        this.ptupuagrPlantillaReporte.alias = this.langMng.translateText(
            'cls_Dominio_svc_TADDREPORTE_inArg_pt_p_agrPlantillaReporte',
            'Plantilla');
        this.ptupuagrPlantillaReporte.mandatory = true;
        this.ptupuagrPlantillaReporte.dataType = ModelConstants.Plantillareporte.name;
        this.ptupuagrPlantillaReporte.allowMultiSelect = true;
        this.ptupuagrPlantillaReporte.maxLength = 100;
        this.ptupuagrPlantillaReporte.assignCSS();
        this.fields.push(this.ptupuagrPlantillaReporte);

        this.ptupuatrEnviarAuto.nameInRequest = 'pt_p_atrenviarauto';
        this.ptupuatrEnviarAuto.alias = this.langMng.translateText(
            'cls_Dominio_svc_TADDREPORTE_inArg_pt_p_atrEnviarAuto',
            'Enviar automáticamente');
        this.ptupuatrEnviarAuto.mandatory = true;
        this.ptupuatrEnviarAuto.dataType = Field.dtBool;
        this.ptupuatrEnviarAuto.options = DefinedSelections.DS_SINO;
        this.ptupuatrEnviarAuto.assignCSS();
        this.fields.push(this.ptupuatrEnviarAuto);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // pt_p_atrEnviarAuto
            const defValptupuatrEnviarAuto = new Promise<void>((resolveDefValue) => {
                this.ptupuatrEnviarAuto.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValptupuatrEnviarAuto);

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
            ['Dominio'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisDominio.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisdominio('SetValue', true);
            this.puthisDominio.enabled = false;
            this.executeDependecyRulesputhisdominio('SetEnabled', true);
        }
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
            if (lastRole === 'PlantillaReporte') {
                this.ptupuagrPlantillaReporte.setValue(lastRoleOid);
                this.executeDependecyRulesptupuagrplantillareporte('SetValue', true);
                this.ptupuagrPlantillaReporte.enabled = false;
                this.executeDependecyRulesptupuagrplantillareporte('SetEnabled', true);
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
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisDominio'.toLowerCase()) {
            this.puthisDominio.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisdominio('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuagrPlantillaReporte'.toLowerCase()) {
            this.ptupuagrPlantillaReporte.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptupuagrplantillareporte('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisDominio argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisdominio(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisdominio();
        }
        if ('SetValue' === event && this.puthisDominio.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisDominio();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisDominio argument
     */
    private setSuppInfoputhisdominio(): void {

        const displaySetIC = 'ProductoT.Descripcion,PlanT.Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisDominio.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Dominio.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisDominio.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisDominio.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Dominio.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString]);
                    }
                }
                this.puthisDominio.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisDominio argument
     */
    private executeDependecyRules1puthisDominio(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisDominio,
                'Numero');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisDominioActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisDominio argument
     */
    private executeDependecyRules1puthisDominioActions(): void {
        const varputhisdominio = this.getFirstInstanceFromCache(this.puthisDominio);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhisdominio && !this.util.isNull(varputhisdominio)) {
            // p_thisDominio.SetActive( FALSE )
            this.puthisDominio.enabled = false;
            this.executeDependecyRulesputhisdominio('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisDominio lense search argument
     */
    public onputhisdominioChange(): void {

        const searchText = this.puthisDominio.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisDominio.lastText) {
                this.puthisDominio.removeCSSClass('noResultsLenseSearch');
                this.puthisDominio.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Dominio.name, 'IC_Dominio', searchText, [], null).then(
                        (response: any) => {
                            this.puthisDominio.removeCSSClass('noResultsLenseSearch');
                            this.puthisDominio.searchResults = response.results;
                            if (this.puthisDominio.searchResults &&
                                this.puthisDominio.searchResults.length === 0) {
                                this.puthisDominio.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisDominio.searchResults &&
                                this.puthisDominio.searchResults.length === 1) {
                                this.processputhisdominioSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisDominio.removeCSSClass('noResultsLenseSearch');
                            this.puthisDominio.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisDominio.removeCSSClass('noResultsLenseSearch');
            this.puthisDominio.searchResults = [];
            this.cleanputhisdominio();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisDominio lense search argument
     */
    public processputhisdominioSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisDominio.searchResults.length > index) {
            selectedInstance = this.puthisDominio.searchResults[index];
        }
        // Clean the result list
        this.puthisDominio.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisDominio.allowMultiSelect) {
                this.puthisDominio.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisDominio.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisdominio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisDominio lense search argument
     */
    public cleanputhisdominio(): void {
        this.clearValidationMessages();
        this.puthisDominio.clean();
        this.executeDependecyRulesputhisdominio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_agrPlantillaReporte argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrplantillareporte(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptupuagrplantillareporte();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_agrPlantillaReporte argument
     */
    private setSuppInfoptupuagrplantillareporte(): void {

        const displaySetIC = 'Titulo';
        let numberMissingSupInfo = 0;
        for (const value of this.ptupuagrPlantillaReporte.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Plantillareporte.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptupuagrPlantillaReporte.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptupuagrPlantillaReporte.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Plantillareporte.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptupuagrPlantillaReporte.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the pt_p_agrPlantillaReporte lense search argument
     */
    public onptupuagrplantillareporteChange(): void {

        const searchText = this.ptupuagrPlantillaReporte.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.ptupuagrPlantillaReporte.lastText) {
                const navFilters: string[] = [];
                navFilters.push('Dominio_TADDREPORTE_pt_p_agrPlantillaReporte_NavFilter0');
                this.ptupuagrPlantillaReporte.removeCSSClass('noResultsLenseSearch');
                this.ptupuagrPlantillaReporte.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Plantillareporte.name, 'IC_PlantillaReporte', searchText, navFilters,
                    this.getNavigationFilterVariables()).then(
                        (response: any) => {
                            this.ptupuagrPlantillaReporte.removeCSSClass('noResultsLenseSearch');
                            this.ptupuagrPlantillaReporte.searchResults = response.results;
                            if (this.ptupuagrPlantillaReporte.searchResults &&
                                this.ptupuagrPlantillaReporte.searchResults.length === 0) {
                                this.ptupuagrPlantillaReporte.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.ptupuagrPlantillaReporte.searchResults &&
                                this.ptupuagrPlantillaReporte.searchResults.length === 1) {
                                this.processptupuagrplantillareporteSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.ptupuagrPlantillaReporte.removeCSSClass('noResultsLenseSearch');
                            this.ptupuagrPlantillaReporte.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.ptupuagrPlantillaReporte.removeCSSClass('noResultsLenseSearch');
            this.ptupuagrPlantillaReporte.searchResults = [];
            this.cleanptupuagrplantillareporte();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_agrPlantillaReporte lense search argument
     */
    public processptupuagrplantillareporteSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptupuagrPlantillaReporte.searchResults.length > index) {
            selectedInstance = this.ptupuagrPlantillaReporte.searchResults[index];
        }
        // Clean the result list
        this.ptupuagrPlantillaReporte.searchResults = [];
        if (selectedInstance) {
            if (!this.ptupuagrPlantillaReporte.allowMultiSelect) {
                this.ptupuagrPlantillaReporte.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptupuagrPlantillaReporte.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesptupuagrplantillareporte('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_agrPlantillaReporte lense search argument
     */
    public cleanptupuagrplantillareporte(): void {
        this.clearValidationMessages();
        this.ptupuagrPlantillaReporte.clean();
        this.executeDependecyRulesptupuagrplantillareporte('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisDominio'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisDominio.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Dominio_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('ptupuagrPlantillaReporte'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuagrPlantillaReporte.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_PlantillaReporte';
            exchInfo.navigationalFilterIdentity = [];
            exchInfo.navigationalFilterIdentity.push('Dominio_TADDREPORTE_pt_p_agrPlantillaReporte_NavFilter0');
            exchInfo.navigationalFilterVariables = this.getNavigationFilterVariables();
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
