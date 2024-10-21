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
    selector: 'imes-motivoexcepcionsolnov-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MotivoExcepcionSolNovSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisMotivoExcepcionSolNov: FieldOVLense;
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
        this.idXML = 'Clas_1583336390656979Ser_3UIServ_1';
        this.className = ModelConstants.Motivoexcepcionsolnov.name;
        this.iuName = ModelConstants.Motivoexcepcionsolnov.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_MotivoExcepcionSolNov_svc_modificar',
            'Modificar');

        // Create inbound argument components
        this.puthisMotivoExcepcionSolNov = new FieldOVLense(this.langMng);
        this.puDescripcion = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisMotivoExcepcionSolNov.nameInRequest = 'p_thismotivoexcepcionsolnov';
        this.puthisMotivoExcepcionSolNov.alias = this.langMng.translateText(
            'cls_MotivoExcepcionSolNov_svc_modificar_inArg_p_thisMotivoExcepcionSolNov',
            'Motivo Excepción');
        this.puthisMotivoExcepcionSolNov.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisMotivoExcepcionSolNov.mandatory = true;
        this.puthisMotivoExcepcionSolNov.dataType = ModelConstants.Motivoexcepcionsolnov.name;
        this.puthisMotivoExcepcionSolNov.allowMultiSelect = true;
        this.puthisMotivoExcepcionSolNov.oidFields = Array(1);
        this.puthisMotivoExcepcionSolNov.oidFieldsTypes = ['autonumerico'];
        this.puthisMotivoExcepcionSolNov.assignCSS();
        this.fields.push(this.puthisMotivoExcepcionSolNov);

        this.puDescripcion.nameInRequest = 'p_descripcion';
        this.puDescripcion.alias = this.langMng.translateText(
            'cls_MotivoExcepcionSolNov_svc_modificar_inArg_p_Descripcion',
            'Descripción');
        this.puDescripcion.mandatory = true;
        this.puDescripcion.dataType = Field.dtString;
        this.puDescripcion.maxLength = 150;
        this.puDescripcion.assignCSS();
        this.fields.push(this.puDescripcion);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['MotivoExcepcionSolNov'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisMotivoExcepcionSolNov.setValue(this.context.exchangeInfo.selectedOids);
            this.setOidFieldsValueputhisMotivoExcepcionSolNov();
            this.executeDependecyRulesputhismotivoexcepcionsolnov('SetValue', true);
            this.puthisMotivoExcepcionSolNov.enabled = false;
            this.executeDependecyRulesputhismotivoexcepcionsolnov('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisMotivoExcepcionSolNov'.toLowerCase()) {
            this.puthisMotivoExcepcionSolNov.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueputhisMotivoExcepcionSolNov();
            this.executeDependecyRulesputhismotivoexcepcionsolnov('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisMotivoExcepcionSolNov argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhismotivoexcepcionsolnov(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhismotivoexcepcionsolnov();
        }
        if ('SetValue' === event && this.puthisMotivoExcepcionSolNov.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisMotivoExcepcionSolNov();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisMotivoExcepcionSolNov argument
     */
    private setSuppInfoputhismotivoexcepcionsolnov(): void {

        const displaySetIC = 'Id';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisMotivoExcepcionSolNov.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Motivoexcepcionsolnov.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueputhisMotivoExcepcionSolNov();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisMotivoExcepcionSolNov.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Motivoexcepcionsolnov.name,
                            value.oid, displaySetIC, [Field.dtAuto]);
                    }
                }
                this.setOidFieldsValueputhisMotivoExcepcionSolNov();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisMotivoExcepcionSolNov argument
     */
    private executeDependecyRules1puthisMotivoExcepcionSolNov(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisMotivoExcepcionSolNov,
                'descripcion');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisMotivoExcepcionSolNovActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisMotivoExcepcionSolNov argument
     */
    private executeDependecyRules1puthisMotivoExcepcionSolNovActions(): void {
        const varputhismotivoexcepcionsolnov = this.getFirstInstanceFromCache(this.puthisMotivoExcepcionSolNov);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhismotivoexcepcionsolnov && !this.util.isNull(varputhismotivoexcepcionsolnov)) {
            // p_Descripcion.SetValue( v.Descripcion )
            this.puDescripcion.setValue(varputhismotivoexcepcionsolnov.get('descripcion'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Set values to the Oid fields and supplementary information of p_thisMotivoExcepcionSolNov lense argument
    */
    private setOidFieldsValueputhisMotivoExcepcionSolNov(): void {
        if (this.puthisMotivoExcepcionSolNov.getSelectedInstances().length > 0) {
            if (this.puthisMotivoExcepcionSolNov.getSelectedInstances().length > 1) {
                this.puthisMotivoExcepcionSolNov.oidFields = [null];
                this.puthisMotivoExcepcionSolNov.editorsEnabled = false;
                this.puthisMotivoExcepcionSolNov.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.puthisMotivoExcepcionSolNov.getSelectedInstances().length.toString());
            } else {
                this.puthisMotivoExcepcionSolNov.editorsEnabled = true;
                this.puthisMotivoExcepcionSolNov.oidFields[0] =
                    this.puthisMotivoExcepcionSolNov.getSelectedInstances()[0].oid.id;
                this.puthisMotivoExcepcionSolNov.supplementaryInfo =
                    this.puthisMotivoExcepcionSolNov.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.puthisMotivoExcepcionSolNov.oidFields = Array(1);
            this.puthisMotivoExcepcionSolNov.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the p_thisMotivoExcepcionSolNov lense argument
     */
    public onputhismotivoexcepcionsolnovChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.puthisMotivoExcepcionSolNov.oidFields) {
            if (!field) {
                fieldsHasValue = false;
                break;
            }
        }

        this.puthisMotivoExcepcionSolNov.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            id: this.puthisMotivoExcepcionSolNov.oidFields[0]
            };
            this.puthisMotivoExcepcionSolNov.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Motivoexcepcionsolnov.name, oid,
                'Id');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.puthisMotivoExcepcionSolNov.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Motivoexcepcionsolnov.name, value.oid)) {
                        this.puthisMotivoExcepcionSolNov.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.puthisMotivoExcepcionSolNov.alias));
                        this.puthisMotivoExcepcionSolNov.cleanSelectedInstances();
                        this.puthisMotivoExcepcionSolNov.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesputhismotivoexcepcionsolnov('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean p_thisMotivoExcepcionSolNov argument value
     */
    public cleanputhismotivoexcepcionsolnov(): void {
        this.clearValidationMessages();
        this.puthisMotivoExcepcionSolNov.clean();
        this.puthisMotivoExcepcionSolNov.oidFields = Array(1);
        this.executeDependecyRulesputhismotivoexcepcionsolnov('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisMotivoExcepcionSolNov'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisMotivoExcepcionSolNov.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_MotivoExcepcionSolNov';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
