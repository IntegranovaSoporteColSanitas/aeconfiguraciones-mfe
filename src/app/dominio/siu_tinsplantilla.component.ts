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
    selector: 'imes-dominio-siu-tinsplantilla',
    templateUrl: './siu_tinsplantilla.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DominioSIUuTINSPLANTILLAComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisDominio: FieldOVLenseSearch;
    public ptPlantilla: FieldOVLenseSearch;

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
        this.idXML = 'Clas_1431701422080423Ser_19UIServ_1';
        this.className = ModelConstants.Dominio.name;
        this.iuName = ModelConstants.Dominio.siuutinsplantilla;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TINSPLANTILLA';
        this.title = this.langMng.translateText('cls_Dominio_svc_TINSPLANTILLA',
            'Asignar Plantilla');

        // Create inbound argument components
        this.puthisDominio = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptPlantilla = new FieldOVLenseSearch(this.langMng, this.util);

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
            'cls_Dominio_svc_TINSPLANTILLA_inArg_p_thisDominio',
            'Dominio');
        this.puthisDominio.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisDominio.mandatory = true;
        this.puthisDominio.dataType = ModelConstants.Dominio.name;
        this.puthisDominio.maxLength = 250;
        this.puthisDominio.assignCSS();
        this.fields.push(this.puthisDominio);

        this.ptPlantilla.nameInRequest = 'ptplantilla';
        this.ptPlantilla.alias = this.langMng.translateText(
            'cls_Dominio_svc_TINSPLANTILLA_inArg_ptPlantilla',
            'Plantilla');
        this.ptPlantilla.mandatory = true;
        this.ptPlantilla.dataType = ModelConstants.Plantillaemail.name;
        this.ptPlantilla.maxLength = 255;
        this.ptPlantilla.assignCSS();
        this.fields.push(this.ptPlantilla);
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
            if (lastRole === 'Plantillas') {
                this.ptPlantilla.setValue(lastRoleOid);
                this.executeDependecyRulesptplantilla('SetValue', true);
                this.ptPlantilla.enabled = false;
                this.executeDependecyRulesptplantilla('SetEnabled', true);
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

        if (exchInfo.originArgumentName.toLowerCase() === 'ptPlantilla'.toLowerCase()) {
            this.ptPlantilla.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptplantilla('SetValue', false);
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
        if ('SetValue' === event && internal) {
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
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisDominioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
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
        this.executeLenseSearch(this.puthisDominio, ModelConstants.Dominio.name, 'IC_Dominio',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanputhisdominio();
            }
            if (foundInstances === 1) {
                this.processputhisdominioSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
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
            this.puthisDominio.addInstances(selectedInstance);
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
     * Evaluate dependendy rules for ptPlantilla argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptplantilla(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptplantilla();
        }
        if ('SetValue' === event && this.ptPlantilla.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && internal) {
            this.executeDependecyRules1ptPlantilla();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the ptPlantilla argument
     */
    private setSuppInfoptplantilla(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.ptPlantilla.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Plantillaemail.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptPlantilla.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptPlantilla.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Plantillaemail.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptPlantilla.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for ptPlantilla argument
     */
    private executeDependecyRules1ptPlantilla(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptPlantilla,
                'IdPlantilla');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptPlantillaActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptPlantilla argument
     */
    private executeDependecyRules1ptPlantillaActions(): void {
        const varptplantilla = this.getFirstInstanceFromCache(this.ptPlantilla);
        // v <> NULL
        if (varptplantilla && !this.util.isNull(varptplantilla)) {
            // ptPlantilla.SetValue( NULL )
            this.ptPlantilla.setValue(null);
            this.executeDependecyRulesptplantilla('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }
    /**
     * Process the change in the ptPlantilla lense search argument
     */
    public onptplantillaChange(): void {
        this.executeLenseSearch(this.ptPlantilla, ModelConstants.Plantillaemail.name, 'IC_PlantillaEmail',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanptplantilla();
            }
            if (foundInstances === 1) {
                this.processptplantillaSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the ptPlantilla lense search argument
     */
    public processptplantillaSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptPlantilla.searchResults.length > index) {
            selectedInstance = this.ptPlantilla.searchResults[index];
        }
        // Clean the result list
        this.ptPlantilla.searchResults = [];
        if (selectedInstance) {
            if (!this.ptPlantilla.allowMultiSelect) {
                this.ptPlantilla.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptPlantilla.addInstances(selectedInstance);
        }
        this.executeDependecyRulesptplantilla('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the ptPlantilla lense search argument
     */
    public cleanptplantilla(): void {
        this.clearValidationMessages();
        this.ptPlantilla.clean();
        this.executeDependecyRulesptplantilla('SetValue', false);
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
        if ('ptPlantilla'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptPlantilla.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_PlantillaEmail';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
