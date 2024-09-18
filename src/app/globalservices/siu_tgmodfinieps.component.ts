import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { CacheDependencyRules, InstanceCache } from '../common/app.cachedependencyrules';
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
    selector: 'imes-gs-siu-tgmodfinieps',
    templateUrl: './siu_tgmodfinieps.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuTGMODFINIEPSComponent extends AbstractServiceIU implements OnInit {

    /** Fields */
    public ptuputhisFechaIniEPS: FieldOVLense;
    public ptupuDesde: Field;
    public ptupuHasta: Field;
    public ptupuFechaInicioAplicar: Field;
    public ptTratime: FieldDefinedSelection;
    public ptTipoContrato: FieldDefinedSelection;

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
        this.idXML = 'IGl_1655288365056783UIServ_1';
        this.className = ModelConstants.Globalservices.name;
        this.iuName = ModelConstants.Globalservices.siuutgmodfinieps;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TGMODFINIEPS';
        this.title = this.langMng.translateText('gs_TGMODFINIEPS',
            'Modificar');

        // Create inbound argument components
        this.ptuputhisFechaIniEPS = new FieldOVLense(this.langMng);
        this.ptupuDesde = new Field(this.langMng);
        this.ptupuHasta = new Field(this.langMng);
        this.ptupuFechaInicioAplicar = new Field(this.langMng);
        this.ptTratime = new FieldDefinedSelection(this.langMng);
        this.ptTipoContrato = new FieldDefinedSelection(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptuputhisFechaIniEPS.nameInRequest = 'pt_p_thisfechainieps';
        this.ptuputhisFechaIniEPS.alias = this.langMng.translateText(
            'gs_TGMODFINIEPS_inArg_pt_p_thisFechaIniEPS',
            'Fechas inicio vigencia para EPS');
        this.ptuputhisFechaIniEPS.mandatory = true;
        this.ptuputhisFechaIniEPS.dataType = ModelConstants.Fechainieps.name;
        this.ptuputhisFechaIniEPS.oidFields = Array(1);
        this.ptuputhisFechaIniEPS.oidFieldsTypes = ['autonumerico'];
        this.ptuputhisFechaIniEPS.assignCSS();
        this.fields.push(this.ptuputhisFechaIniEPS);

        this.ptupuDesde.nameInRequest = 'pt_p_desde';
        this.ptupuDesde.alias = this.langMng.translateText(
            'gs_TGMODFINIEPS_inArg_pt_p_Desde',
            'Fecha Desde');
        this.ptupuDesde.mandatory = true;
        this.ptupuDesde.dataType = Field.dtDate;
        this.ptupuDesde.assignCSS();
        this.fields.push(this.ptupuDesde);

        this.ptupuHasta.nameInRequest = 'pt_p_hasta';
        this.ptupuHasta.alias = this.langMng.translateText(
            'gs_TGMODFINIEPS_inArg_pt_p_Hasta',
            'Fecha Hasta');
        this.ptupuHasta.mandatory = true;
        this.ptupuHasta.dataType = Field.dtDate;
        this.ptupuHasta.assignCSS();
        this.fields.push(this.ptupuHasta);

        this.ptupuFechaInicioAplicar.nameInRequest = 'pt_p_fechainicioaplicar';
        this.ptupuFechaInicioAplicar.alias = this.langMng.translateText(
            'gs_TGMODFINIEPS_inArg_pt_p_FechaInicioAplicar',
            'Fecha inicio de contratación');
        this.ptupuFechaInicioAplicar.mandatory = true;
        this.ptupuFechaInicioAplicar.dataType = Field.dtDate;
        this.ptupuFechaInicioAplicar.assignCSS();
        this.fields.push(this.ptupuFechaInicioAplicar);

        this.ptTratime.nameInRequest = 'pttratime';
        this.ptTratime.alias = this.langMng.translateText(
            'gs_TGMODFINIEPS_inArg_ptTratime',
            'Tramite');
        this.ptTratime.mandatory = false;
        this.ptTratime.dataType = Field.dtNat;
        this.ptTratime.options = DefinedSelections.DS_TRAMITE;
        this.ptTratime.assignCSS();
        this.fields.push(this.ptTratime);

        this.ptTipoContrato.nameInRequest = 'pttipocontrato';
        this.ptTipoContrato.alias = this.langMng.translateText(
            'gs_TGMODFINIEPS_inArg_ptTipoContrato',
            'Tipo Contrato');
        this.ptTipoContrato.mandatory = false;
        this.ptTipoContrato.dataType = Field.dtNat;
        this.ptTipoContrato.options = DefinedSelections.DS_TIPOCONTRATO;
        this.ptTipoContrato.assignCSS();
        this.fields.push(this.ptTipoContrato);
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'ptuputhisFechaIniEPS'.toLowerCase()) {
            this.ptuputhisFechaIniEPS.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueptuputhisFechaIniEPS();
            this.executeDependecyRulesptuputhisfechainieps('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for pt_p_thisFechaIniEPS argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptuputhisfechainieps(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptuputhisfechainieps();
        }
        if ('SetValue' === event && this.ptuputhisFechaIniEPS.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptuputhisFechaIniEPS();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_thisFechaIniEPS argument
     */
    private setSuppInfoptuputhisfechainieps(): void {

        const displaySetIC = 'Id';
        let numberMissingSupInfo = 0;
        for (const value of this.ptuputhisFechaIniEPS.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Fechainieps.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueptuputhisFechaIniEPS();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptuputhisFechaIniEPS.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Fechainieps.name,
                            value.oid, displaySetIC, [Field.dtAuto]);
                    }
                }
                this.setOidFieldsValueptuputhisFechaIniEPS();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for pt_p_thisFechaIniEPS argument
     */
    private executeDependecyRules1ptuputhisFechaIniEPS(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptuputhisFechaIniEPS,
                'desde,fechainicioaplicar,hasta,tramite,tipocontrato');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1ptuputhisFechaIniEPSActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_thisFechaIniEPS argument
     */
    private executeDependecyRules1ptuputhisFechaIniEPSActions(): void {
        const varptuputhisfechainieps = this.getFirstInstanceFromCache(this.ptuputhisFechaIniEPS);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varptuputhisfechainieps && !this.util.isNull(varptuputhisfechainieps)) {
            // pt_p_thisFechaIniEPS.SetVisible( false )
            this.ptuputhisFechaIniEPS.visible = false;
            // pt_p_Desde.SetValue( v.desde )
            this.ptupuDesde.setValue(this.util.getDate(varptuputhisfechainieps?.get('desde')));
            // pt_p_FechaInicioAplicar.SetValue( v.fechainicioaplicar )
            this.ptupuFechaInicioAplicar.setValue(this.util.getDate(varptuputhisfechainieps?.get('fechainicioaplicar')));
            // pt_p_Hasta.SetValue( v.hasta )
            this.ptupuHasta.setValue(this.util.getDate(varptuputhisfechainieps?.get('hasta')));
            // ptTratime.SetValue( v.tramite )
            this.ptTratime.setValue(this.util.getInt(varptuputhisfechainieps?.get('tramite')));
            // ptTipoContrato.SetValue( v.tipocontrato )
            this.ptTipoContrato.setValue(this.util.getInt(varptuputhisfechainieps?.get('tipocontrato')));
            // ptTratime.SetActive( false )
            this.ptTratime.enabled = false;
            // ptTipoContrato.SetActive( false )
            this.ptTipoContrato.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Set values to the Oid fields and supplementary information of pt_p_thisFechaIniEPS lense argument
    */
    private setOidFieldsValueptuputhisFechaIniEPS(): void {
        if (this.ptuputhisFechaIniEPS.getSelectedInstances().length > 0) {
            if (this.ptuputhisFechaIniEPS.getSelectedInstances().length > 1) {
                this.ptuputhisFechaIniEPS.oidFields = [null];
                this.ptuputhisFechaIniEPS.editorsEnabled = false;
                this.ptuputhisFechaIniEPS.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.ptuputhisFechaIniEPS.getSelectedInstances().length.toString());
            } else {
                this.ptuputhisFechaIniEPS.editorsEnabled = true;
                this.ptuputhisFechaIniEPS.oidFields[0] = this.ptuputhisFechaIniEPS.getSelectedInstances()[0].oid.id;
                this.ptuputhisFechaIniEPS.supplementaryInfo = this.ptuputhisFechaIniEPS.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.ptuputhisFechaIniEPS.oidFields = Array(1);
            this.ptuputhisFechaIniEPS.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the pt_p_thisFechaIniEPS lense argument
     */
    public onptuputhisfechainiepsChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.ptuputhisFechaIniEPS.oidFields) {
            if (!field) {
                fieldsHasValue = false;
                break;
            }
        }

        this.ptuputhisFechaIniEPS.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            id: this.ptuputhisFechaIniEPS.oidFields[0]
            };
            this.ptuputhisFechaIniEPS.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Fechainieps.name, oid,
                'Id');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.ptuputhisFechaIniEPS.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Fechainieps.name, value.oid)) {
                        this.ptuputhisFechaIniEPS.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.ptuputhisFechaIniEPS.alias));
                        this.ptuputhisFechaIniEPS.cleanSelectedInstances();
                        this.ptuputhisFechaIniEPS.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesptuputhisfechainieps('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean pt_p_thisFechaIniEPS argument value
     */
    public cleanptuputhisfechainieps(): void {
        this.clearValidationMessages();
        this.ptuputhisFechaIniEPS.clean();
        this.ptuputhisFechaIniEPS.oidFields = Array(1);
        this.executeDependecyRulesptuputhisfechainieps('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('ptuputhisFechaIniEPS'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptuputhisFechaIniEPS.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_FechaIniEPS';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
