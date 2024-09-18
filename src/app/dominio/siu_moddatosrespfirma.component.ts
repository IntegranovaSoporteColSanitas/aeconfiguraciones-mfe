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
    selector: 'imes-dominio-siu-moddatosrespfirma',
    templateUrl: './siu_moddatosrespfirma.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DominioSIUumodDatosRespFirmaComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisDominio: FieldOVLenseSearch;
    public pNombre: Field;
    public pNumCelula: Field;
    public pExpedicionCelula: Field;
    public pCargo: Field;

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
        this.idXML = 'Clas_1431701422080423Ser_12UIServ_1';
        this.className = ModelConstants.Dominio.name;
        this.iuName = ModelConstants.Dominio.siuumoddatosrespfirma;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modDatosRespFirma';
        this.title = this.langMng.translateText('cls_Dominio_svc_modDatosRespFirma',
            'Datos responsable firma');

        // Create inbound argument components
        this.puthisDominio = new FieldOVLenseSearch(this.langMng);
        this.pNombre = new Field(this.langMng);
        this.pNumCelula = new Field(this.langMng);
        this.pExpedicionCelula = new Field(this.langMng);
        this.pCargo = new Field(this.langMng);

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
            'cls_Dominio_svc_modDatosRespFirma_inArg_p_thisDominio',
            'Dominio');
        this.puthisDominio.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisDominio.mandatory = true;
        this.puthisDominio.dataType = ModelConstants.Dominio.name;
        this.puthisDominio.maxLength = 250;
        this.puthisDominio.assignCSS();
        this.fields.push(this.puthisDominio);

        this.pNombre.nameInRequest = 'pnombre';
        this.pNombre.alias = this.langMng.translateText(
            'cls_Dominio_svc_modDatosRespFirma_inArg_pNombre',
            'Nombre');
        this.pNombre.mandatory = true;
        this.pNombre.dataType = Field.dtString;
        this.pNombre.maxLength = 100;
        this.pNombre.assignCSS();
        this.fields.push(this.pNombre);

        this.pNumCelula.nameInRequest = 'pnumcelula';
        this.pNumCelula.alias = this.langMng.translateText(
            'cls_Dominio_svc_modDatosRespFirma_inArg_pNumCelula',
            'Nº célula');
        this.pNumCelula.mandatory = true;
        this.pNumCelula.dataType = Field.dtString;
        this.pNumCelula.maxLength = 15;
        this.pNumCelula.assignCSS();
        this.fields.push(this.pNumCelula);

        this.pExpedicionCelula.nameInRequest = 'pexpedicioncelula';
        this.pExpedicionCelula.alias = this.langMng.translateText(
            'cls_Dominio_svc_modDatosRespFirma_inArg_pExpedicionCelula',
            'Lugar de expedición');
        this.pExpedicionCelula.mandatory = true;
        this.pExpedicionCelula.dataType = Field.dtString;
        this.pExpedicionCelula.maxLength = 50;
        this.pExpedicionCelula.assignCSS();
        this.fields.push(this.pExpedicionCelula);

        this.pCargo.nameInRequest = 'pcargo';
        this.pCargo.alias = this.langMng.translateText(
            'cls_Dominio_svc_modDatosRespFirma_inArg_pCargo',
            'Cargo');
        this.pCargo.mandatory = true;
        this.pCargo.dataType = Field.dtString;
        this.pCargo.maxLength = 50;
        this.pCargo.assignCSS();
        this.fields.push(this.pCargo);
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
                'respclaunombre,respclaucelula,respclauexpcelula,respclaucargo');
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
            // pNombre.SetValue( v.RespClauNombre )
            this.pNombre.setValue(varputhisdominio?.get('respclaunombre'));
            // pNumCelula.SetValue( v.RespClauCelula )
            this.pNumCelula.setValue(varputhisdominio?.get('respclaucelula'));
            // pExpedicionCelula.SetValue( v.RespClauExpCelula )
            this.pExpedicionCelula.setValue(varputhisdominio?.get('respclauexpcelula'));
            // pCargo.SetValue( v.RespClauCargo )
            this.pCargo.setValue(varputhisdominio?.get('respclaucargo'));
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
    }
}
