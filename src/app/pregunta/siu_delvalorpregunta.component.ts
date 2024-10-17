import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldOVLense, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-pregunta-siu-delvalorpregunta',
    templateUrl: './siu_delvalorpregunta.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreguntaSIUuDelValorPreguntaComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisPregunta: FieldOVLense;
    public puevcValor: FieldOVPreload;

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
        this.idXML = 'Clas_1431633788928040Ser_5UIServ_1';
        this.className = ModelConstants.Pregunta.name;
        this.iuName = ModelConstants.Pregunta.siuudelvalorpregunta;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'DelValorPregunta';
        this.title = this.langMng.translateText('cls_Pregunta_svc_DelValorPregunta',
            'Quitar posible valor');

        // Create inbound argument components
        this.puthisPregunta = new FieldOVLense(this.langMng);
        this.puevcValor = new FieldOVPreload(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisPregunta.nameInRequest = 'p_thispregunta';
        this.puthisPregunta.alias = this.langMng.translateText(
            'cls_Pregunta_svc_DelValorPregunta_inArg_p_thisPregunta',
            'Pregunta');
        this.puthisPregunta.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisPregunta.mandatory = true;
        this.puthisPregunta.dataType = ModelConstants.Pregunta.name;
        this.puthisPregunta.oidFields = Array(1);
        this.puthisPregunta.oidFieldsTypes = ['int'];
        this.puthisPregunta.assignCSS();
        this.fields.push(this.puthisPregunta);

        this.puevcValor.nameInRequest = 'p_evcvalor';
        this.puevcValor.alias = this.langMng.translateText(
            'cls_Pregunta_svc_DelValorPregunta_inArg_p_evcValor',
            'Valor');
        this.puevcValor.mandatory = true;
        this.puevcValor.dataType = ModelConstants.Valor.name;
        this.puevcValor.maxLength = 150;
        this.puevcValor.assignCSS();
        this.fields.push(this.puevcValor);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Pregunta'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisPregunta.setValue(this.context.exchangeInfo.selectedOids);
            this.setOidFieldsValueputhisPregunta();
            this.executeDependecyRulesputhispregunta('SetValue', true);
            this.puthisPregunta.enabled = false;
            this.executeDependecyRulesputhispregunta('SetEnabled', true);
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
            if (lastRole === 'Preguntas') {
                this.puthisPregunta.setValue(lastRoleOid);
                this.setOidFieldsValueputhisPregunta();
                this.executeDependecyRulesputhispregunta('SetValue', true);
                this.puthisPregunta.enabled = false;
                this.executeDependecyRulesputhispregunta('SetEnabled', true);
            }
            if (lastRole === 'Valores') {
                this.puevcValor.setValue(lastRoleOid);
                this.puevcValor.enabled = false;
            }
        }
    }

    /**
     * Search the preload values of field p_evcValor
     */
    private loadPreloadpuevcvalor(): void {

        if (this.puthisPregunta.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Pregunta_DelValorPregunta_p_evcValor_NavFilter0');
            this.util.searchPreload('Valor', 'IC_Valor', navFilters, this.getNavigationFilterVariables(), '').then(
                (response: any) => {
                    if (response && response.results) {
                        this.puevcValor.loadPreload(response.results);
                    } else {
                        this.puevcValor.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.puevcValor.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.puevcValor.cleanPreload();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisPregunta'.toLowerCase()) {
            this.puthisPregunta.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueputhisPregunta();
            this.executeDependecyRulesputhispregunta('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisPregunta argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhispregunta(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhispregunta();
        }

        // Load dependent preload
        if ('SetValue' === event) {
            this.loadPreloadpuevcvalor();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisPregunta argument
     */
    private setSuppInfoputhispregunta(): void {

        const displaySetIC = 'Numero';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisPregunta.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Pregunta.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueputhisPregunta();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisPregunta.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Pregunta.name,
                            value.oid, displaySetIC, [Field.dtInt]);
                    }
                }
                this.setOidFieldsValueputhisPregunta();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

   /**
    * Set values to the Oid fields and supplementary information of p_thisPregunta lense argument
    */
    private setOidFieldsValueputhisPregunta(): void {
        if (this.puthisPregunta.getSelectedInstances().length > 0) {
            if (this.puthisPregunta.getSelectedInstances().length > 1) {
                this.puthisPregunta.oidFields = [null];
                this.puthisPregunta.editorsEnabled = false;
                this.puthisPregunta.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.puthisPregunta.getSelectedInstances().length.toString());
            } else {
                this.puthisPregunta.editorsEnabled = true;
                this.puthisPregunta.oidFields[0] = this.puthisPregunta.getSelectedInstances()[0].oid.numero;
                this.puthisPregunta.supplementaryInfo = this.puthisPregunta.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.puthisPregunta.oidFields = Array(1);
            this.puthisPregunta.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the p_thisPregunta lense argument
     */
    public onputhispreguntaChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.puthisPregunta.oidFields) {
            if (!field) {
                fieldsHasValue = false;
                break;
            }
        }

        this.puthisPregunta.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            numero: this.puthisPregunta.oidFields[0]
            };
            this.puthisPregunta.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Pregunta.name, oid,
                'Numero');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.puthisPregunta.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Pregunta.name, value.oid)) {
                        this.puthisPregunta.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.puthisPregunta.alias));
                        this.puthisPregunta.cleanSelectedInstances();
                        this.puthisPregunta.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesputhispregunta('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean p_thisPregunta argument value
     */
    public cleanputhispregunta(): void {
        this.clearValidationMessages();
        this.puthisPregunta.clean();
        this.puthisPregunta.oidFields = Array(1);
        this.executeDependecyRulesputhispregunta('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisPregunta'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisPregunta.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Pregunta';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
