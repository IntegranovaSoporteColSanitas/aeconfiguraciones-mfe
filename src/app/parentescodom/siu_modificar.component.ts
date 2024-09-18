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
    selector: 'imes-parentescodom-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentescoDomSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisParentescoDom: FieldOVLense;
    public puEdadMinimaA: Field;
    public puEdadMaximaA: Field;
    public puEdadMinimaD: Field;
    public puEdadMaximaP: Field;

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
        this.idXML = 'Clas_1434710704128231Ser_3UIServ_1';
        this.className = ModelConstants.Parentescodom.name;
        this.iuName = ModelConstants.Parentescodom.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_ParentescoDom_svc_modificar',
            'Modificar parentesco de dominio');

        // Create inbound argument components
        this.puthisParentescoDom = new FieldOVLense(this.langMng);
        this.puEdadMinimaA = new Field(this.langMng);
        this.puEdadMaximaA = new Field(this.langMng);
        this.puEdadMinimaD = new Field(this.langMng);
        this.puEdadMaximaP = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisParentescoDom.nameInRequest = 'p_thisparentescodom';
        this.puthisParentescoDom.alias = this.langMng.translateText(
            'cls_ParentescoDom_svc_modificar_inArg_p_thisParentescoDom',
            'Parentesco dominio');
        this.puthisParentescoDom.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisParentescoDom.mandatory = true;
        this.puthisParentescoDom.dataType = ModelConstants.Parentescodom.name;
        this.puthisParentescoDom.allowMultiSelect = true;
        this.puthisParentescoDom.oidFields = Array(2);
        this.puthisParentescoDom.oidFieldsTypes = ['autonumerico', 'autonumerico'];
        this.puthisParentescoDom.assignCSS();
        this.fields.push(this.puthisParentescoDom);

        this.puEdadMinimaA.nameInRequest = 'p_edadminimaa';
        this.puEdadMinimaA.alias = this.langMng.translateText(
            'cls_ParentescoDom_svc_modificar_inArg_p_EdadMinimaA',
            'Edad mínima (años)');
        this.puEdadMinimaA.mandatory = false;
        this.puEdadMinimaA.dataType = Field.dtInt;
        this.puEdadMinimaA.assignCSS();
        this.fields.push(this.puEdadMinimaA);

        this.puEdadMaximaA.nameInRequest = 'p_edadmaximaa';
        this.puEdadMaximaA.alias = this.langMng.translateText(
            'cls_ParentescoDom_svc_modificar_inArg_p_EdadMaximaA',
            'Edad máxima (años)');
        this.puEdadMaximaA.mandatory = false;
        this.puEdadMaximaA.dataType = Field.dtInt;
        this.puEdadMaximaA.assignCSS();
        this.fields.push(this.puEdadMaximaA);

        this.puEdadMinimaD.nameInRequest = 'p_edadminimad';
        this.puEdadMinimaD.alias = this.langMng.translateText(
            'cls_ParentescoDom_svc_modificar_inArg_p_EdadMinimaD',
            'Edad mínima (días)');
        this.puEdadMinimaD.mandatory = false;
        this.puEdadMinimaD.dataType = Field.dtInt;
        this.puEdadMinimaD.assignCSS();
        this.fields.push(this.puEdadMinimaD);

        this.puEdadMaximaP.nameInRequest = 'p_edadmaximap';
        this.puEdadMaximaP.alias = this.langMng.translateText(
            'cls_ParentescoDom_svc_modificar_inArg_p_EdadMaximaP',
            'Edad máxima (permanencia)');
        this.puEdadMaximaP.mandatory = false;
        this.puEdadMaximaP.dataType = Field.dtInt;
        this.puEdadMaximaP.assignCSS();
        this.fields.push(this.puEdadMaximaP);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['ParentescoDom'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisParentescoDom.setValue(this.context.exchangeInfo.selectedOids);
            this.setOidFieldsValueputhisParentescoDom();
            this.executeDependecyRulesputhisparentescodom('SetValue', true);
            this.puthisParentescoDom.enabled = false;
            this.executeDependecyRulesputhisparentescodom('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisParentescoDom'.toLowerCase()) {
            this.puthisParentescoDom.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueputhisParentescoDom();
            this.executeDependecyRulesputhisparentescodom('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisParentescoDom argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisparentescodom(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisparentescodom();
        }
        if ('SetValue' === event && this.puthisParentescoDom.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisParentescoDom();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisParentescoDom argument
     */
    private setSuppInfoputhisparentescodom(): void {

        const displaySetIC = 'Dominio.Numero';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisParentescoDom.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Parentescodom.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueputhisParentescoDom();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisParentescoDom.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Parentescodom.name,
                            value.oid, displaySetIC, [Field.dtAuto]);
                    }
                }
                this.setOidFieldsValueputhisParentescoDom();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisParentescoDom argument
     */
    private executeDependecyRules1puthisParentescoDom(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisParentescoDom,
                'edadminimaa,edadmaximaa,edadminimad,edadmaximap');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisParentescoDomActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisParentescoDom argument
     */
    private executeDependecyRules1puthisParentescoDomActions(): void {
        const varputhisparentescodom = this.getFirstInstanceFromCache(this.puthisParentescoDom);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhisparentescodom && !this.util.isNull(varputhisparentescodom)) {
            // p_EdadMinimaA.SetValue( v.edadminimaa )
            this.puEdadMinimaA.setValue(this.util.getInt(varputhisparentescodom?.get('edadminimaa')));
            // p_EdadMaximaA.SetValue( v.edadmaximaa )
            this.puEdadMaximaA.setValue(this.util.getInt(varputhisparentescodom?.get('edadmaximaa')));
            // p_EdadMinimaD.SetValue( v.edadminimad )
            this.puEdadMinimaD.setValue(this.util.getInt(varputhisparentescodom?.get('edadminimad')));
            // p_EdadMaximaP.SetValue( v.edadmaximap )
            this.puEdadMaximaP.setValue(this.util.getInt(varputhisparentescodom?.get('edadmaximap')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Set values to the Oid fields and supplementary information of p_thisParentescoDom lense argument
    */
    private setOidFieldsValueputhisParentescoDom(): void {
        if (this.puthisParentescoDom.getSelectedInstances().length > 0) {
            if (this.puthisParentescoDom.getSelectedInstances().length > 1) {
                this.puthisParentescoDom.oidFields = [null];
                this.puthisParentescoDom.editorsEnabled = false;
                this.puthisParentescoDom.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.puthisParentescoDom.getSelectedInstances().length.toString());
            } else {
                this.puthisParentescoDom.editorsEnabled = true;
                this.puthisParentescoDom.oidFields[0] = this.puthisParentescoDom.getSelectedInstances()[0].oid.numero;
                this.puthisParentescoDom.oidFields[1] = this.puthisParentescoDom.getSelectedInstances()[0].oid.identificador;
                this.puthisParentescoDom.supplementaryInfo = this.puthisParentescoDom.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.puthisParentescoDom.oidFields = Array(2);
            this.puthisParentescoDom.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the p_thisParentescoDom lense argument
     */
    public onputhisparentescodomChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.puthisParentescoDom.oidFields) {
            if (!field) {
                fieldsHasValue = false;
                break;
            }
        }

        this.puthisParentescoDom.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            numero: this.puthisParentescoDom.oidFields[0]
            , identificador: this.puthisParentescoDom.oidFields[1]
            };
            this.puthisParentescoDom.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Parentescodom.name, oid,
                'Dominio.Numero');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.puthisParentescoDom.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Parentescodom.name, value.oid)) {
                        this.puthisParentescoDom.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.puthisParentescoDom.alias));
                        this.puthisParentescoDom.cleanSelectedInstances();
                        this.puthisParentescoDom.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesputhisparentescodom('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean p_thisParentescoDom argument value
     */
    public cleanputhisparentescodom(): void {
        this.clearValidationMessages();
        this.puthisParentescoDom.clean();
        this.puthisParentescoDom.oidFields = Array(2);
        this.executeDependecyRulesputhisparentescodom('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisParentescoDom'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisParentescoDom.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_ParentescoDom';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
