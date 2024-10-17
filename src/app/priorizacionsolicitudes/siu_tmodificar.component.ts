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
    selector: 'imes-priorizacionsolicitudes-siu-tmodificar',
    templateUrl: './siu_tmodificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriorizacionSolicitudesSIUuTMODIFICARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisPriorizacionSolicitudes: FieldOVLense;
    public ptupuPrioridad: Field;
    public ptEstadoSolicitud: FieldDefinedSelection;
    public ptEstadoDoc: FieldDefinedSelection;

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
        this.idXML = 'Clas_1586846892032587Ser_8UIServ_1';
        this.className = ModelConstants.Priorizacionsolicitudes.name;
        this.iuName = ModelConstants.Priorizacionsolicitudes.siuutmodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TMODIFICAR';
        this.title = this.langMng.translateText('cls_PriorizacionSolicitudes_svc_TMODIFICAR',
            'Modificar');

        // Create inbound argument components
        this.puthisPriorizacionSolicitudes = new FieldOVLense(this.langMng);
        this.ptupuPrioridad = new Field(this.langMng);
        this.ptEstadoSolicitud = new FieldDefinedSelection(this.langMng);
        this.ptEstadoDoc = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisPriorizacionSolicitudes.nameInRequest = 'p_thispriorizacionsolicitudes';
        this.puthisPriorizacionSolicitudes.alias = this.langMng.translateText(
            'cls_PriorizacionSolicitudes_svc_TMODIFICAR_inArg_p_thisPriorizacionSolicitudes',
            'Priorización Solicitudes');
        this.puthisPriorizacionSolicitudes.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisPriorizacionSolicitudes.mandatory = true;
        this.puthisPriorizacionSolicitudes.dataType = ModelConstants.Priorizacionsolicitudes.name;
        this.puthisPriorizacionSolicitudes.oidFields = Array(2);
        this.puthisPriorizacionSolicitudes.oidFieldsTypes = ['int', 'nat'];
        this.puthisPriorizacionSolicitudes.assignCSS();
        this.fields.push(this.puthisPriorizacionSolicitudes);

        this.ptupuPrioridad.nameInRequest = 'pt_p_prioridad';
        this.ptupuPrioridad.alias = this.langMng.translateText(
            'cls_PriorizacionSolicitudes_svc_TMODIFICAR_inArg_pt_p_Prioridad',
            'Prioridad');
        this.ptupuPrioridad.mandatory = true;
        this.ptupuPrioridad.dataType = Field.dtNat;
        this.ptupuPrioridad.assignCSS();
        this.fields.push(this.ptupuPrioridad);

        this.ptEstadoSolicitud.nameInRequest = 'ptestadosolicitud';
        this.ptEstadoSolicitud.alias = this.langMng.translateText(
            'cls_PriorizacionSolicitudes_svc_TMODIFICAR_inArg_ptEstadoSolicitud',
            'Estado Solicitud');
        this.ptEstadoSolicitud.mandatory = true;
        this.ptEstadoSolicitud.dataType = Field.dtInt;
        this.ptEstadoSolicitud.options = DefinedSelections.DS_ESTADOSOLICITUD;
        this.ptEstadoSolicitud.assignCSS();
        this.fields.push(this.ptEstadoSolicitud);

        this.ptEstadoDoc.nameInRequest = 'ptestadodoc';
        this.ptEstadoDoc.alias = this.langMng.translateText(
            'cls_PriorizacionSolicitudes_svc_TMODIFICAR_inArg_ptEstadoDoc',
            'Estado Documentación');
        this.ptEstadoDoc.mandatory = true;
        this.ptEstadoDoc.dataType = Field.dtNat;
        this.ptEstadoDoc.options = DefinedSelections.DS_ESTADODOCUMENTOG;
        this.ptEstadoDoc.assignCSS();
        this.fields.push(this.ptEstadoDoc);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['PriorizacionSolicitudes'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisPriorizacionSolicitudes.setValue(this.context.exchangeInfo.selectedOids);
            this.setOidFieldsValueputhisPriorizacionSolicitudes();
            this.executeDependecyRulesputhispriorizacionsolicitudes('SetValue', true);
            this.puthisPriorizacionSolicitudes.enabled = false;
            this.executeDependecyRulesputhispriorizacionsolicitudes('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisPriorizacionSolicitudes'.toLowerCase()) {
            this.puthisPriorizacionSolicitudes.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueputhisPriorizacionSolicitudes();
            this.executeDependecyRulesputhispriorizacionsolicitudes('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisPriorizacionSolicitudes argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhispriorizacionsolicitudes(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhispriorizacionsolicitudes();
        }
        if ('SetValue' === event && this.puthisPriorizacionSolicitudes.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisPriorizacionSolicitudes();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisPriorizacionSolicitudes argument
     */
    private setSuppInfoputhispriorizacionsolicitudes(): void {

        const displaySetIC = 'EstadoSolicitud';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisPriorizacionSolicitudes.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Priorizacionsolicitudes.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueputhisPriorizacionSolicitudes();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisPriorizacionSolicitudes.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Priorizacionsolicitudes.name,
                            value.oid, displaySetIC, [Field.dtInt]);
                    }
                }
                this.setOidFieldsValueputhisPriorizacionSolicitudes();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisPriorizacionSolicitudes argument
     */
    private executeDependecyRules1puthisPriorizacionSolicitudes(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisPriorizacionSolicitudes,
                'prioridad,estadodoc,estadosolicitud');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisPriorizacionSolicitudesActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisPriorizacionSolicitudes argument
     */
    private executeDependecyRules1puthisPriorizacionSolicitudesActions(): void {
        const varputhispriorizacionsolicitudes = this.getFirstInstanceFromCache(this.puthisPriorizacionSolicitudes);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhispriorizacionsolicitudes && !this.util.isNull(varputhispriorizacionsolicitudes)) {
            // pt_p_Prioridad.SetValue( v.prioridad )
            this.ptupuPrioridad.setValue(this.util.getInt(varputhispriorizacionsolicitudes?.get('prioridad')));
            // p_thisPriorizacionSolicitudes.SetVisible( FALSE )
            this.puthisPriorizacionSolicitudes.visible = false;
            // ptEstadoDoc.SetValue( v.EstadoDoc )
            this.ptEstadoDoc.setValue(this.util.getInt(varputhispriorizacionsolicitudes?.get('estadodoc')));
            // ptEstadoDoc.SetActive( FALSE )
            this.ptEstadoDoc.enabled = false;
            // ptEstadoSolicitud.SetValue( v.EstadoSolicitud )
            this.ptEstadoSolicitud.setValue(this.util.getInt(varputhispriorizacionsolicitudes?.get('estadosolicitud')));
            // ptEstadoSolicitud.SetActive( FALSE )
            this.ptEstadoSolicitud.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Set values to the Oid fields and supplementary information of p_thisPriorizacionSolicitudes lense argument
    */
    private setOidFieldsValueputhisPriorizacionSolicitudes(): void {
        if (this.puthisPriorizacionSolicitudes.getSelectedInstances().length > 0) {
            if (this.puthisPriorizacionSolicitudes.getSelectedInstances().length > 1) {
                this.puthisPriorizacionSolicitudes.oidFields = [null];
                this.puthisPriorizacionSolicitudes.editorsEnabled = false;
                this.puthisPriorizacionSolicitudes.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.puthisPriorizacionSolicitudes.getSelectedInstances().length.toString());
            } else {
                this.puthisPriorizacionSolicitudes.editorsEnabled = true;
                this.puthisPriorizacionSolicitudes.oidFields[0] =
                    this.puthisPriorizacionSolicitudes.getSelectedInstances()[0].oid.estadosolicitud;
                this.puthisPriorizacionSolicitudes.oidFields[1] =
                    this.puthisPriorizacionSolicitudes.getSelectedInstances()[0].oid.estadodoc;
                this.puthisPriorizacionSolicitudes.supplementaryInfo =
                    this.puthisPriorizacionSolicitudes.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.puthisPriorizacionSolicitudes.oidFields = Array(2);
            this.puthisPriorizacionSolicitudes.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the p_thisPriorizacionSolicitudes lense argument
     */
    public onputhispriorizacionsolicitudesChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.puthisPriorizacionSolicitudes.oidFields) {
            if (!field) {
                fieldsHasValue = false;
                break;
            }
        }

        this.puthisPriorizacionSolicitudes.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            estadosolicitud: this.puthisPriorizacionSolicitudes.oidFields[0]
            , estadodoc: this.puthisPriorizacionSolicitudes.oidFields[1]
            };
            this.puthisPriorizacionSolicitudes.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Priorizacionsolicitudes.name, oid,
                'EstadoSolicitud');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.puthisPriorizacionSolicitudes.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Priorizacionsolicitudes.name, value.oid)) {
                        this.puthisPriorizacionSolicitudes.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.puthisPriorizacionSolicitudes.alias));
                        this.puthisPriorizacionSolicitudes.cleanSelectedInstances();
                        this.puthisPriorizacionSolicitudes.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesputhispriorizacionsolicitudes('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean p_thisPriorizacionSolicitudes argument value
     */
    public cleanputhispriorizacionsolicitudes(): void {
        this.clearValidationMessages();
        this.puthisPriorizacionSolicitudes.clean();
        this.puthisPriorizacionSolicitudes.oidFields = Array(2);
        this.executeDependecyRulesputhispriorizacionsolicitudes('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisPriorizacionSolicitudes'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisPriorizacionSolicitudes.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_PriorizacionSolicitudes';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
