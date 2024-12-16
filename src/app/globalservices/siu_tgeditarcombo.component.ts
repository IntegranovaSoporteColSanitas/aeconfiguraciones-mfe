import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { CacheDependencyRules, InstanceCache } from '../common/app.cachedependencyrules';
import { Field, FieldOVLense } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
    selector: 'imes-gs-siu-tgeditarcombo',
    templateUrl: './siu_tgeditarcombo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuTGEDITARCOMBOComponent extends AbstractServiceIU implements OnInit {

    /** Fields */
    public ptuputhisContratoCombo: FieldOVLense;
    public ptupuContratoIntegral: Field;
    public ptupuContratoOdontologico: Field;

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
        this.idXML = 'IGl_1587633979392848UIServ_1';
        this.className = ModelConstants.Globalservices.name;
        this.iuName = ModelConstants.Globalservices.siuutgeditarcombo;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TGEDITARCOMBO';
        this.title = this.langMng.translateText('gs_TGEDITARCOMBO',
            'Editar contrato combo');

        // Create inbound argument components
        this.ptuputhisContratoCombo = new FieldOVLense(this.langMng);
        this.ptupuContratoIntegral = new Field(this.langMng);
        this.ptupuContratoOdontologico = new Field(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptuputhisContratoCombo.nameInRequest = 'pt_p_thiscontratocombo';
        this.ptuputhisContratoCombo.alias = this.langMng.translateText(
            'gs_TGEDITARCOMBO_inArg_pt_p_thisContratoCombo',
            'Contrato Combo');
        this.ptuputhisContratoCombo.mandatory = true;
        this.ptuputhisContratoCombo.dataType = ModelConstants.Contratocombo.name;
        this.ptuputhisContratoCombo.oidFields = Array(1);
        this.ptuputhisContratoCombo.oidFieldsTypes = ['autonumerico'];
        this.ptuputhisContratoCombo.assignCSS();
        this.fields.push(this.ptuputhisContratoCombo);

        this.ptupuContratoIntegral.nameInRequest = 'pt_p_contratointegral';
        this.ptupuContratoIntegral.alias = this.langMng.translateText(
            'gs_TGEDITARCOMBO_inArg_pt_p_ContratoIntegral',
            'Contrato Integral');
        this.ptupuContratoIntegral.mandatory = true;
        this.ptupuContratoIntegral.dataType = Field.dtString;
        this.ptupuContratoIntegral.maxLength = 50;
        this.ptupuContratoIntegral.assignCSS();
        this.fields.push(this.ptupuContratoIntegral);

        this.ptupuContratoOdontologico.nameInRequest = 'pt_p_contratoodontologico';
        this.ptupuContratoOdontologico.alias = this.langMng.translateText(
            'gs_TGEDITARCOMBO_inArg_pt_p_ContratoOdontologico',
            'Contrato Odontológico');
        this.ptupuContratoOdontologico.mandatory = true;
        this.ptupuContratoOdontologico.dataType = Field.dtString;
        this.ptupuContratoOdontologico.maxLength = 50;
        this.ptupuContratoOdontologico.assignCSS();
        this.fields.push(this.ptupuContratoOdontologico);
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'ptuputhisContratoCombo'.toLowerCase()) {
            this.ptuputhisContratoCombo.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueptuputhisContratoCombo();
            this.executeDependecyRulesptuputhiscontratocombo('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for pt_p_thisContratoCombo argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptuputhiscontratocombo(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptuputhiscontratocombo();
        }
        if ('SetValue' === event && this.ptuputhisContratoCombo.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptuputhisContratoCombo();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_thisContratoCombo argument
     */
    private setSuppInfoptuputhiscontratocombo(): void {

        const displaySetIC = 'Id';
        let numberMissingSupInfo = 0;
        for (const value of this.ptuputhisContratoCombo.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Contratocombo.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueptuputhisContratoCombo();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptuputhisContratoCombo.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Contratocombo.name,
                            value.oid, displaySetIC, [Field.dtAuto]);
                    }
                }
                this.setOidFieldsValueptuputhisContratoCombo();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for pt_p_thisContratoCombo argument
     */
    private executeDependecyRules1ptuputhisContratoCombo(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptuputhisContratoCombo,
                'contratointegral,contratoodontologico');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptuputhisContratoComboActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_thisContratoCombo argument
     */
    private executeDependecyRules1ptuputhisContratoComboActions(): void {
        const varptuputhiscontratocombo = this.getFirstInstanceFromCache(this.ptuputhisContratoCombo);
        // v <> NULL
        if (varptuputhiscontratocombo && !this.util.isNull(varptuputhiscontratocombo)) {
            // pt_p_ContratoIntegral.SetValue( v.ContratoIntegral )
            this.ptupuContratoIntegral.setValue(varptuputhiscontratocombo.get('contratointegral'));
            // pt_p_ContratoOdontologico.SetValue( v.ContratoOdontologico )
            this.ptupuContratoOdontologico.setValue(varptuputhiscontratocombo.get('contratoodontologico'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Set values to the Oid fields and supplementary information of pt_p_thisContratoCombo lense argument
    */
    private setOidFieldsValueptuputhisContratoCombo(): void {
        if (this.ptuputhisContratoCombo.getSelectedInstances().length > 0) {
            if (this.ptuputhisContratoCombo.getSelectedInstances().length > 1) {
                this.ptuputhisContratoCombo.oidFields = [null];
                this.ptuputhisContratoCombo.editorsEnabled = false;
                this.ptuputhisContratoCombo.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.ptuputhisContratoCombo.getSelectedInstances().length.toString());
            } else {
                this.ptuputhisContratoCombo.editorsEnabled = true;
                this.ptuputhisContratoCombo.oidFields[0] = this.ptuputhisContratoCombo.getSelectedInstances()[0].oid.id;
                this.ptuputhisContratoCombo.supplementaryInfo = this.ptuputhisContratoCombo.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.ptuputhisContratoCombo.oidFields = Array(1);
            this.ptuputhisContratoCombo.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the pt_p_thisContratoCombo lense argument
     */
    public onptuputhiscontratocomboChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.ptuputhisContratoCombo.oidFields) {
            if (!field) {
                fieldsHasValue = false;
                break;
            }
        }

        this.ptuputhisContratoCombo.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            id: this.ptuputhisContratoCombo.oidFields[0]
            };
            this.ptuputhisContratoCombo.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Contratocombo.name, oid,
                'Id');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.ptuputhisContratoCombo.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Contratocombo.name, value.oid)) {
                        this.ptuputhisContratoCombo.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.ptuputhisContratoCombo.alias));
                        this.ptuputhisContratoCombo.cleanSelectedInstances();
                        this.ptuputhisContratoCombo.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesptuputhiscontratocombo('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean pt_p_thisContratoCombo argument value
     */
    public cleanptuputhiscontratocombo(): void {
        this.clearValidationMessages();
        this.ptuputhisContratoCombo.clean();
        this.ptuputhisContratoCombo.oidFields = Array(1);
        this.executeDependecyRulesptuputhiscontratocombo('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('ptuputhisContratoCombo'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptuputhisContratoCombo.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_ContratoCombo';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
