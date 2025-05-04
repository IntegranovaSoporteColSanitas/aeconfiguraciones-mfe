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
    selector: 'imes-prorrateo-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProrrateoSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisProrrateo: FieldOVLense;
    public puDia: Field;
    public puPorcentaje: Field;

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
        this.idXML = 'Clas_1547053432832527Ser_3UIServ_1';
        this.className = ModelConstants.Prorrateo.name;
        this.iuName = ModelConstants.Prorrateo.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_Prorrateo_svc_modificar',
            'Modificar');

        // Create inbound argument components
        this.puthisProrrateo = new FieldOVLense(this.langMng);
        this.puDia = new Field(this.langMng);
        this.puPorcentaje = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisProrrateo.nameInRequest = 'p_thisprorrateo';
        this.puthisProrrateo.alias = this.langMng.translateText(
            'cls_Prorrateo_svc_modificar_inArg_p_thisProrrateo',
            'Prorrateo');
        this.puthisProrrateo.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisProrrateo.mandatory = true;
        this.puthisProrrateo.dataType = ModelConstants.Prorrateo.name;
        this.puthisProrrateo.allowMultiSelect = true;
        this.puthisProrrateo.oidFields = Array(2);
        this.puthisProrrateo.oidFieldsTypes = ['autonumerico', 'autonumerico'];
        this.puthisProrrateo.assignCSS();
        this.fields.push(this.puthisProrrateo);

        this.puDia.nameInRequest = 'p_dia';
        this.puDia.alias = this.langMng.translateText(
            'cls_Prorrateo_svc_modificar_inArg_p_Dia',
            'Día del mes');
        this.puDia.mandatory = true;
        this.puDia.dataType = Field.dtNat;
        this.puDia.assignCSS();
        this.fields.push(this.puDia);

        this.puPorcentaje.nameInRequest = 'p_porcentaje';
        this.puPorcentaje.alias = this.langMng.translateText(
            'cls_Prorrateo_svc_modificar_inArg_p_Porcentaje',
            'Porcentaje');
        this.puPorcentaje.mandatory = true;
        this.puPorcentaje.dataType = Field.dtReal;
        this.puPorcentaje.assignCSS();
        this.fields.push(this.puPorcentaje);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Prorrateo'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisProrrateo.setValue(this.context.exchangeInfo.selectedOids);
            this.setOidFieldsValueputhisProrrateo();
            this.executeDependecyRulesputhisprorrateo('SetValue', true);
            this.puthisProrrateo.enabled = false;
            this.executeDependecyRulesputhisprorrateo('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisProrrateo'.toLowerCase()) {
            this.puthisProrrateo.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueputhisProrrateo();
            this.executeDependecyRulesputhisprorrateo('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisProrrateo argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisprorrateo(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisprorrateo();
        }
        if ('SetValue' === event && this.puthisProrrateo.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisProrrateo();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisProrrateo argument
     */
    private setSuppInfoputhisprorrateo(): void {

        const displaySetIC = 'Porcentaje';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisProrrateo.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Prorrateo.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueputhisProrrateo();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisProrrateo.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Prorrateo.name,
                            value.oid, displaySetIC, [Field.dtReal]);
                    }
                }
                this.setOidFieldsValueputhisProrrateo();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisProrrateo argument
     */
    private executeDependecyRules1puthisProrrateo(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisProrrateo,
                'dia,porcentaje');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisProrrateoActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisProrrateo argument
     */
    private executeDependecyRules1puthisProrrateoActions(): void {
        const varputhisprorrateo = this.getFirstInstanceFromCache(this.puthisProrrateo);
        // v <> NULL
        if (varputhisprorrateo && !this.util.isNull(varputhisprorrateo)) {
            // p_Dia.SetValue( v.Dia )
            this.puDia.setValue(this.util.getInt(varputhisprorrateo.get('dia')));
            // p_Porcentaje.SetValue( v.Porcentaje )
            this.puPorcentaje.setValue(this.util.getReal(varputhisprorrateo.get('porcentaje')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Set values to the Oid fields and supplementary information of p_thisProrrateo lense argument
    */
    private setOidFieldsValueputhisProrrateo(): void {
        if (this.puthisProrrateo.getSelectedInstances().length > 0) {
            if (this.puthisProrrateo.getSelectedInstances().length > 1) {
                this.puthisProrrateo.oidFields = [null];
                this.puthisProrrateo.editorsEnabled = false;
                this.puthisProrrateo.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.puthisProrrateo.getSelectedInstances().length.toString());
            } else {
                this.puthisProrrateo.editorsEnabled = true;
                this.puthisProrrateo.oidFields[0] = this.puthisProrrateo.getSelectedInstances()[0].oid.numero;
                this.puthisProrrateo.oidFields[1] = this.puthisProrrateo.getSelectedInstances()[0].oid.id_prorrateo;
                this.puthisProrrateo.supplementaryInfo = this.puthisProrrateo.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.puthisProrrateo.oidFields = Array(2);
            this.puthisProrrateo.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the p_thisProrrateo lense argument
     */
    public onputhisprorrateoChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.puthisProrrateo.oidFields) {
            if (!field) {
                fieldsHasValue = false;
                break;
            }
        }

        this.puthisProrrateo.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            numero: this.puthisProrrateo.oidFields[0]
            , id_prorrateo: this.puthisProrrateo.oidFields[1]
            };
            this.puthisProrrateo.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Prorrateo.name, oid,
                'Porcentaje');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.puthisProrrateo.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Prorrateo.name, value.oid)) {
                        this.puthisProrrateo.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.puthisProrrateo.alias));
                        this.puthisProrrateo.cleanSelectedInstances();
                        this.puthisProrrateo.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesputhisprorrateo('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean p_thisProrrateo argument value
     */
    public cleanputhisprorrateo(): void {
        this.clearValidationMessages();
        this.puthisProrrateo.clean();
        this.puthisProrrateo.oidFields = Array(2);
        this.executeDependecyRulesputhisprorrateo('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisProrrateo'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisProrrateo.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Prorrateo';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
