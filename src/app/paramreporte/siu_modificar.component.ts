import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldDefinedSelection, FieldOVLense } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-paramreporte-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParamReporteSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisParamReporte: FieldOVLense;
    public puEsNumerico: FieldDefinedSelection;
    public puDescripcion: Field;
    public puTitulo: Field;

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
        this.idXML = 'Clas_1580739854336044Ser_3UIServ_1';
        this.className = ModelConstants.Paramreporte.name;
        this.iuName = ModelConstants.Paramreporte.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_ParamReporte_svc_modificar',
            'Modificar');

        // Create inbound argument components
        this.puthisParamReporte = new FieldOVLense(this.langMng);
        this.puEsNumerico = new FieldDefinedSelection(this.langMng);
        this.puDescripcion = new Field(this.langMng);
        this.puTitulo = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisParamReporte.nameInRequest = 'p_thisparamreporte';
        this.puthisParamReporte.alias = this.langMng.translateText(
            'cls_ParamReporte_svc_modificar_inArg_p_thisParamReporte',
            'Parámetro de reporte');
        this.puthisParamReporte.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisParamReporte.mandatory = true;
        this.puthisParamReporte.dataType = ModelConstants.Paramreporte.name;
        this.puthisParamReporte.allowMultiSelect = true;
        this.puthisParamReporte.oidFields = Array(1);
        this.puthisParamReporte.oidFieldsTypes = ['autonumerico'];
        this.puthisParamReporte.assignCSS();
        this.fields.push(this.puthisParamReporte);

        this.puEsNumerico.nameInRequest = 'p_esnumerico';
        this.puEsNumerico.alias = this.langMng.translateText(
            'cls_ParamReporte_svc_modificar_inArg_p_EsNumerico',
            'Es numérico');
        this.puEsNumerico.mandatory = true;
        this.puEsNumerico.dataType = Field.dtBool;
        this.puEsNumerico.options = DefinedSelections.DS_SINO;
        this.puEsNumerico.value = false;
        this.puEsNumerico.assignCSS();
        this.fields.push(this.puEsNumerico);

        this.puDescripcion.nameInRequest = 'p_descripcion';
        this.puDescripcion.alias = this.langMng.translateText(
            'cls_ParamReporte_svc_modificar_inArg_p_Descripcion',
            'Descripción');
        this.puDescripcion.mandatory = false;
        this.puDescripcion.dataType = Field.dtString;
        this.puDescripcion.maxLength = 200;
        this.puDescripcion.assignCSS();
        this.fields.push(this.puDescripcion);

        this.puTitulo.nameInRequest = 'p_titulo';
        this.puTitulo.alias = this.langMng.translateText(
            'cls_ParamReporte_svc_modificar_inArg_p_Titulo',
            'Titulo');
        this.puTitulo.mandatory = true;
        this.puTitulo.dataType = Field.dtString;
        this.puTitulo.maxLength = 50;
        this.puTitulo.assignCSS();
        this.fields.push(this.puTitulo);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['ParamReporte'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisParamReporte.setValue(this.context.exchangeInfo.selectedOids);
            this.setOidFieldsValueputhisParamReporte();
            this.executeDependecyRulesputhisparamreporte('SetValue', true);
            this.puthisParamReporte.enabled = false;
            this.executeDependecyRulesputhisparamreporte('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisParamReporte'.toLowerCase()) {
            this.puthisParamReporte.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueputhisParamReporte();
            this.executeDependecyRulesputhisparamreporte('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisParamReporte argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisparamreporte(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisparamreporte();
        }
        if ('SetValue' === event && this.puthisParamReporte.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisParamReporte();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisParamReporte argument
     */
    private setSuppInfoputhisparamreporte(): void {

        const displaySetIC = 'id_ParamReporte';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisParamReporte.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Paramreporte.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueputhisParamReporte();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisParamReporte.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Paramreporte.name,
                            value.oid, displaySetIC, [Field.dtAuto]);
                    }
                }
                this.setOidFieldsValueputhisParamReporte();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisParamReporte argument
     */
    private executeDependecyRules1puthisParamReporte(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisParamReporte,
                'esnumerico,descripcion,titulo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisParamReporteActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisParamReporte argument
     */
    private executeDependecyRules1puthisParamReporteActions(): void {
        const varputhisparamreporte = this.getFirstInstanceFromCache(this.puthisParamReporte);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhisparamreporte && !this.util.isNull(varputhisparamreporte)) {
            // p_EsNumerico.SetValue( v.EsNumerico )
            this.puEsNumerico.setValue(this.util.getBool(varputhisparamreporte?.get('esnumerico')));
            // p_Descripcion.SetValue( v.Descripcion )
            this.puDescripcion.setValue(varputhisparamreporte?.get('descripcion'));
            // p_Titulo.SetValue( v.Titulo )
            this.puTitulo.setValue(varputhisparamreporte?.get('titulo'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Set values to the Oid fields and supplementary information of p_thisParamReporte lense argument
    */
    private setOidFieldsValueputhisParamReporte(): void {
        if (this.puthisParamReporte.getSelectedInstances().length > 0) {
            if (this.puthisParamReporte.getSelectedInstances().length > 1) {
                this.puthisParamReporte.oidFields = [null];
                this.puthisParamReporte.editorsEnabled = false;
                this.puthisParamReporte.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.puthisParamReporte.getSelectedInstances().length.toString());
            } else {
                this.puthisParamReporte.editorsEnabled = true;
                this.puthisParamReporte.oidFields[0] = this.puthisParamReporte.getSelectedInstances()[0].oid.id_paramreporte;
                this.puthisParamReporte.supplementaryInfo = this.puthisParamReporte.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.puthisParamReporte.oidFields = Array(1);
            this.puthisParamReporte.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the p_thisParamReporte lense argument
     */
    public onputhisparamreporteChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.puthisParamReporte.oidFields) {
            if (!field) {
                fieldsHasValue = false;
                break;
            }
        }

        this.puthisParamReporte.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            id_paramreporte: this.puthisParamReporte.oidFields[0]
            };
            this.puthisParamReporte.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Paramreporte.name, oid,
                'id_ParamReporte');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.puthisParamReporte.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Paramreporte.name, value.oid)) {
                        this.puthisParamReporte.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.puthisParamReporte.alias));
                        this.puthisParamReporte.cleanSelectedInstances();
                        this.puthisParamReporte.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesputhisparamreporte('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean p_thisParamReporte argument value
     */
    public cleanputhisparamreporte(): void {
        this.clearValidationMessages();
        this.puthisParamReporte.clean();
        this.puthisParamReporte.oidFields = Array(1);
        this.executeDependecyRulesputhisparamreporte('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisParamReporte'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisParamReporte.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_D_Parametros';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
