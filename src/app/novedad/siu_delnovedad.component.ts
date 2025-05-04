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
    selector: 'imes-novedad-siu-delnovedad',
    templateUrl: './siu_delnovedad.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NovedadSIUuDelNovedadComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisNovedad: FieldOVLenseSearch;
    public puevcDominio: FieldOVLenseSearch;

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
        this.idXML = 'Clas_1581412253696713Ser_6UIServ_1';
        this.className = ModelConstants.Novedad.name;
        this.iuName = ModelConstants.Novedad.siuudelnovedad;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'DelNovedad';
        this.title = this.langMng.translateText('cls_Novedad_svc_DelNovedad',
            'Quitar Novedad');

        // Create inbound argument components
        this.puthisNovedad = new FieldOVLenseSearch(this.langMng);
        this.puevcDominio = new FieldOVLenseSearch(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisNovedad.nameInRequest = 'p_thisnovedad';
        this.puthisNovedad.alias = this.langMng.translateText(
            'cls_Novedad_svc_DelNovedad_inArg_p_thisNovedad',
            'Novedad');
        this.puthisNovedad.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisNovedad.mandatory = true;
        this.puthisNovedad.dataType = ModelConstants.Novedad.name;
        this.puthisNovedad.maxLength = 50;
        this.puthisNovedad.assignCSS();
        this.fields.push(this.puthisNovedad);

        this.puevcDominio.nameInRequest = 'p_evcdominio';
        this.puevcDominio.alias = this.langMng.translateText(
            'cls_Novedad_svc_DelNovedad_inArg_p_evcDominio',
            'Dominio');
        this.puevcDominio.mandatory = true;
        this.puevcDominio.dataType = ModelConstants.Dominio.name;
        this.puevcDominio.maxLength = 250;
        this.puevcDominio.assignCSS();
        this.fields.push(this.puevcDominio);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Novedad'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisNovedad.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisnovedad('SetValue', true);
            this.puthisNovedad.enabled = false;
            this.executeDependecyRulesputhisnovedad('SetEnabled', true);
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
            if (lastRole === 'Novedades') {
                this.puthisNovedad.setValue(lastRoleOid);
                this.executeDependecyRulesputhisnovedad('SetValue', true);
                this.puthisNovedad.enabled = false;
                this.executeDependecyRulesputhisnovedad('SetEnabled', true);
            }
            if (lastRole === 'Dominios') {
                this.puevcDominio.setValue(lastRoleOid);
                this.executeDependecyRulespuevcdominio('SetValue', true);
                this.puevcDominio.enabled = false;
                this.executeDependecyRulespuevcdominio('SetEnabled', true);
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
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisNovedad'.toLowerCase()) {
            this.puthisNovedad.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisnovedad('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'puevcDominio'.toLowerCase()) {
            this.puevcDominio.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespuevcdominio('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisNovedad argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisnovedad(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisnovedad();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisNovedad argument
     */
    private setSuppInfoputhisnovedad(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisNovedad.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Novedad.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisNovedad.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisNovedad.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Novedad.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisNovedad.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the p_thisNovedad lense search argument
     */
    public onputhisnovedadChange(): void {

        const searchText = this.puthisNovedad.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisNovedad.lastText) {
                this.puthisNovedad.removeCSSClass('noResultsLenseSearch');
                this.puthisNovedad.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Novedad.name, 'IC_Novedad', searchText, [], null).then(
                        (response: any) => {
                            this.puthisNovedad.removeCSSClass('noResultsLenseSearch');
                            this.puthisNovedad.searchResults = response.results;
                            if (this.puthisNovedad.searchResults &&
                                this.puthisNovedad.searchResults.length === 0) {
                                this.puthisNovedad.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisNovedad.searchResults &&
                                this.puthisNovedad.searchResults.length === 1) {
                                this.processputhisnovedadSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisNovedad.removeCSSClass('noResultsLenseSearch');
                            this.puthisNovedad.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisNovedad.removeCSSClass('noResultsLenseSearch');
            this.puthisNovedad.searchResults = [];
            this.cleanputhisnovedad();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisNovedad lense search argument
     */
    public processputhisnovedadSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisNovedad.searchResults.length > index) {
            selectedInstance = this.puthisNovedad.searchResults[index];
        }
        // Clean the result list
        this.puthisNovedad.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisNovedad.allowMultiSelect) {
                this.puthisNovedad.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisNovedad.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisnovedad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisNovedad lense search argument
     */
    public cleanputhisnovedad(): void {
        this.clearValidationMessages();
        this.puthisNovedad.clean();
        this.executeDependecyRulesputhisnovedad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for p_evcDominio argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuevcdominio(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopuevcdominio();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_evcDominio argument
     */
    private setSuppInfopuevcdominio(): void {

        const displaySetIC = 'ProductoT.Descripcion,PlanT.Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puevcDominio.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Dominio.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puevcDominio.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puevcDominio.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Dominio.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString]);
                    }
                }
                this.puevcDominio.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the p_evcDominio lense search argument
     */
    public onpuevcdominioChange(): void {

        const searchText = this.puevcDominio.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puevcDominio.lastText) {
                this.puevcDominio.removeCSSClass('noResultsLenseSearch');
                this.puevcDominio.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Dominio.name, 'IC_Dominio', searchText, [], null).then(
                        (response: any) => {
                            this.puevcDominio.removeCSSClass('noResultsLenseSearch');
                            this.puevcDominio.searchResults = response.results;
                            if (this.puevcDominio.searchResults &&
                                this.puevcDominio.searchResults.length === 0) {
                                this.puevcDominio.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puevcDominio.searchResults &&
                                this.puevcDominio.searchResults.length === 1) {
                                this.processpuevcdominioSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puevcDominio.removeCSSClass('noResultsLenseSearch');
                            this.puevcDominio.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puevcDominio.removeCSSClass('noResultsLenseSearch');
            this.puevcDominio.searchResults = [];
            this.cleanpuevcdominio();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_evcDominio lense search argument
     */
    public processpuevcdominioSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puevcDominio.searchResults.length > index) {
            selectedInstance = this.puevcDominio.searchResults[index];
        }
        // Clean the result list
        this.puevcDominio.searchResults = [];
        if (selectedInstance) {
            if (!this.puevcDominio.allowMultiSelect) {
                this.puevcDominio.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puevcDominio.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespuevcdominio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_evcDominio lense search argument
     */
    public cleanpuevcdominio(): void {
        this.clearValidationMessages();
        this.puevcDominio.clean();
        this.executeDependecyRulespuevcdominio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisNovedad'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisNovedad.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Novedad_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('puevcDominio'.toLowerCase() === argumentName.toLowerCase()) {
            this.puevcDominio.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Dominio_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
