import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldOVLense } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-frecuenciaact-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrecuenciaActSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisFrecuenciaAct: FieldOVLense;
    public puFrecuencia: Field;

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
        this.idXML = 'Clas_1431632084992014Ser_3UIServ_1';
        this.className = ModelConstants.Frecuenciaact.name;
        this.iuName = ModelConstants.Frecuenciaact.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_FrecuenciaAct_svc_modificar',
            'Modificar frecuencia de actualización de paramétrica');

        // Create inbound argument components
        this.puthisFrecuenciaAct = new FieldOVLense(this.langMng);
        this.puFrecuencia = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisFrecuenciaAct.nameInRequest = 'p_thisfrecuenciaact';
        this.puthisFrecuenciaAct.alias = this.langMng.translateText(
            'cls_FrecuenciaAct_svc_modificar_inArg_p_thisFrecuenciaAct',
            'Frecuencias act.');
        this.puthisFrecuenciaAct.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisFrecuenciaAct.mandatory = true;
        this.puthisFrecuenciaAct.dataType = ModelConstants.Frecuenciaact.name;
        this.puthisFrecuenciaAct.allowMultiSelect = true;
        this.puthisFrecuenciaAct.oidFields = Array(1);
        this.puthisFrecuenciaAct.oidFieldsTypes = ['autonumerico'];
        this.puthisFrecuenciaAct.assignCSS();
        this.fields.push(this.puthisFrecuenciaAct);

        this.puFrecuencia.nameInRequest = 'p_frecuencia';
        this.puFrecuencia.alias = this.langMng.translateText(
            'cls_FrecuenciaAct_svc_modificar_inArg_p_Frecuencia',
            'Frecuencia');
        this.puFrecuencia.mandatory = true;
        this.puFrecuencia.dataType = Field.dtInt;
        this.puFrecuencia.assignCSS();
        this.fields.push(this.puFrecuencia);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['FrecuenciaAct'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisFrecuenciaAct.setValue(this.context.exchangeInfo.selectedOids);
            this.setOidFieldsValueputhisFrecuenciaAct();
            this.executeDependecyRulesputhisfrecuenciaact('SetValue', true);
            this.puthisFrecuenciaAct.enabled = false;
            this.executeDependecyRulesputhisfrecuenciaact('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisFrecuenciaAct'.toLowerCase()) {
            this.puthisFrecuenciaAct.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueputhisFrecuenciaAct();
            this.executeDependecyRulesputhisfrecuenciaact('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisFrecuenciaAct argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisfrecuenciaact(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisfrecuenciaact();
        }
        if ('SetValue' === event && this.puthisFrecuenciaAct.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisFrecuenciaAct();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisFrecuenciaAct argument
     */
    private setSuppInfoputhisfrecuenciaact(): void {

        const displaySetIC = 'drvNombreParametrica';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisFrecuenciaAct.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Frecuenciaact.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueputhisFrecuenciaAct();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisFrecuenciaAct.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Frecuenciaact.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.setOidFieldsValueputhisFrecuenciaAct();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisFrecuenciaAct argument
     */
    private executeDependecyRules1puthisFrecuenciaAct(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisFrecuenciaAct,
                'frecuencia');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisFrecuenciaActActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisFrecuenciaAct argument
     */
    private executeDependecyRules1puthisFrecuenciaActActions(): void {
        const varputhisfrecuenciaact = this.getFirstInstanceFromCache(this.puthisFrecuenciaAct);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhisfrecuenciaact && !this.util.isNull(varputhisfrecuenciaact)) {
            // p_Frecuencia.SetValue( v.Frecuencia )
            this.puFrecuencia.setValue(this.util.getInt(varputhisfrecuenciaact?.get('frecuencia')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Set values to the Oid fields and supplementary information of p_thisFrecuenciaAct lense argument
    */
    private setOidFieldsValueputhisFrecuenciaAct(): void {
        if (this.puthisFrecuenciaAct.getSelectedInstances().length > 0) {
            if (this.puthisFrecuenciaAct.getSelectedInstances().length > 1) {
                this.puthisFrecuenciaAct.oidFields = [null];
                this.puthisFrecuenciaAct.editorsEnabled = false;
                this.puthisFrecuenciaAct.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.puthisFrecuenciaAct.getSelectedInstances().length.toString());
            } else {
                this.puthisFrecuenciaAct.editorsEnabled = true;
                this.puthisFrecuenciaAct.oidFields[0] = this.puthisFrecuenciaAct.getSelectedInstances()[0].oid.codigo;
                this.puthisFrecuenciaAct.supplementaryInfo = this.puthisFrecuenciaAct.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.puthisFrecuenciaAct.oidFields = Array(1);
            this.puthisFrecuenciaAct.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the p_thisFrecuenciaAct lense argument
     */
    public onputhisfrecuenciaactChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.puthisFrecuenciaAct.oidFields) {
            if (!field) {
                fieldsHasValue = false;
                break;
            }
        }

        this.puthisFrecuenciaAct.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            codigo: this.puthisFrecuenciaAct.oidFields[0]
            };
            this.puthisFrecuenciaAct.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Frecuenciaact.name, oid,
                'drvNombreParametrica');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.puthisFrecuenciaAct.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Frecuenciaact.name, value.oid)) {
                        this.puthisFrecuenciaAct.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.puthisFrecuenciaAct.alias));
                        this.puthisFrecuenciaAct.cleanSelectedInstances();
                        this.puthisFrecuenciaAct.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesputhisfrecuenciaact('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean p_thisFrecuenciaAct argument value
     */
    public cleanputhisfrecuenciaact(): void {
        this.clearValidationMessages();
        this.puthisFrecuenciaAct.clean();
        this.puthisFrecuenciaAct.oidFields = Array(1);
        this.executeDependecyRulesputhisfrecuenciaact('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisFrecuenciaAct'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisFrecuenciaAct.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_FrecuenciaAct';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
