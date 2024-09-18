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
    selector: 'imes-configuracionans-siu-tmodificar',
    templateUrl: './siu_tmodificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfiguracionANSSIUuTMODIFICARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisConfiguracionANS: FieldOVLense;
    public ptupuANSAreaMedica: Field;
    public ptupuHabilLunes: FieldDefinedSelection;
    public ptupuHabilMartes: FieldDefinedSelection;
    public ptupuHabilMiercoles: FieldDefinedSelection;
    public ptupuHabilJueves: FieldDefinedSelection;
    public ptupuHabilViernes: FieldDefinedSelection;
    public ptupuHabilSabado: FieldDefinedSelection;
    public ptupuHabilDomingo: FieldDefinedSelection;
    public ptupuANSAfiliaciones: Field;

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
        this.idXML = 'Clas_1586859868160432Ser_11UIServ_1';
        this.className = ModelConstants.Configuracionans.name;
        this.iuName = ModelConstants.Configuracionans.siuutmodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TMODIFICAR';
        this.title = this.langMng.translateText('cls_ConfiguracionANS_svc_TMODIFICAR',
            'Modificar');

        // Create inbound argument components
        this.puthisConfiguracionANS = new FieldOVLense(this.langMng);
        this.ptupuANSAreaMedica = new Field(this.langMng);
        this.ptupuHabilLunes = new FieldDefinedSelection(this.langMng);
        this.ptupuHabilMartes = new FieldDefinedSelection(this.langMng);
        this.ptupuHabilMiercoles = new FieldDefinedSelection(this.langMng);
        this.ptupuHabilJueves = new FieldDefinedSelection(this.langMng);
        this.ptupuHabilViernes = new FieldDefinedSelection(this.langMng);
        this.ptupuHabilSabado = new FieldDefinedSelection(this.langMng);
        this.ptupuHabilDomingo = new FieldDefinedSelection(this.langMng);
        this.ptupuANSAfiliaciones = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisConfiguracionANS.nameInRequest = 'p_thisconfiguracionans';
        this.puthisConfiguracionANS.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TMODIFICAR_inArg_p_thisConfiguracionANS',
            'Id');
        this.puthisConfiguracionANS.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisConfiguracionANS.mandatory = true;
        this.puthisConfiguracionANS.dataType = ModelConstants.Configuracionans.name;
        this.puthisConfiguracionANS.oidFields = Array(1);
        this.puthisConfiguracionANS.oidFieldsTypes = ['autonumerico'];
        this.puthisConfiguracionANS.assignCSS();
        this.fields.push(this.puthisConfiguracionANS);

        this.ptupuANSAreaMedica.nameInRequest = 'pt_p_ansareamedica';
        this.ptupuANSAreaMedica.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TMODIFICAR_inArg_pt_p_ANSAreaMedica',
            'ANS Área Médica');
        this.ptupuANSAreaMedica.mandatory = true;
        this.ptupuANSAreaMedica.dataType = Field.dtNat;
        this.ptupuANSAreaMedica.assignCSS();
        this.fields.push(this.ptupuANSAreaMedica);

        this.ptupuHabilLunes.nameInRequest = 'pt_p_habillunes';
        this.ptupuHabilLunes.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TMODIFICAR_inArg_pt_p_HabilLunes',
            'Lunes');
        this.ptupuHabilLunes.mandatory = true;
        this.ptupuHabilLunes.dataType = Field.dtBool;
        this.ptupuHabilLunes.options = DefinedSelections.DS_SINO;
        this.ptupuHabilLunes.value = false;
        this.ptupuHabilLunes.assignCSS();
        this.fields.push(this.ptupuHabilLunes);

        this.ptupuHabilMartes.nameInRequest = 'pt_p_habilmartes';
        this.ptupuHabilMartes.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TMODIFICAR_inArg_pt_p_HabilMartes',
            'Martes');
        this.ptupuHabilMartes.mandatory = true;
        this.ptupuHabilMartes.dataType = Field.dtBool;
        this.ptupuHabilMartes.options = DefinedSelections.DS_SINO;
        this.ptupuHabilMartes.value = false;
        this.ptupuHabilMartes.assignCSS();
        this.fields.push(this.ptupuHabilMartes);

        this.ptupuHabilMiercoles.nameInRequest = 'pt_p_habilmiercoles';
        this.ptupuHabilMiercoles.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TMODIFICAR_inArg_pt_p_HabilMiercoles',
            'Miércoles');
        this.ptupuHabilMiercoles.mandatory = true;
        this.ptupuHabilMiercoles.dataType = Field.dtBool;
        this.ptupuHabilMiercoles.options = DefinedSelections.DS_SINO;
        this.ptupuHabilMiercoles.value = false;
        this.ptupuHabilMiercoles.assignCSS();
        this.fields.push(this.ptupuHabilMiercoles);

        this.ptupuHabilJueves.nameInRequest = 'pt_p_habiljueves';
        this.ptupuHabilJueves.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TMODIFICAR_inArg_pt_p_HabilJueves',
            'Jueves');
        this.ptupuHabilJueves.mandatory = true;
        this.ptupuHabilJueves.dataType = Field.dtBool;
        this.ptupuHabilJueves.options = DefinedSelections.DS_SINO;
        this.ptupuHabilJueves.value = false;
        this.ptupuHabilJueves.assignCSS();
        this.fields.push(this.ptupuHabilJueves);

        this.ptupuHabilViernes.nameInRequest = 'pt_p_habilviernes';
        this.ptupuHabilViernes.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TMODIFICAR_inArg_pt_p_HabilViernes',
            'Viernes');
        this.ptupuHabilViernes.mandatory = true;
        this.ptupuHabilViernes.dataType = Field.dtBool;
        this.ptupuHabilViernes.options = DefinedSelections.DS_SINO;
        this.ptupuHabilViernes.value = false;
        this.ptupuHabilViernes.assignCSS();
        this.fields.push(this.ptupuHabilViernes);

        this.ptupuHabilSabado.nameInRequest = 'pt_p_habilsabado';
        this.ptupuHabilSabado.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TMODIFICAR_inArg_pt_p_HabilSabado',
            'Sábado');
        this.ptupuHabilSabado.mandatory = true;
        this.ptupuHabilSabado.dataType = Field.dtBool;
        this.ptupuHabilSabado.options = DefinedSelections.DS_SINO;
        this.ptupuHabilSabado.value = false;
        this.ptupuHabilSabado.assignCSS();
        this.fields.push(this.ptupuHabilSabado);

        this.ptupuHabilDomingo.nameInRequest = 'pt_p_habildomingo';
        this.ptupuHabilDomingo.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TMODIFICAR_inArg_pt_p_HabilDomingo',
            'Domingo');
        this.ptupuHabilDomingo.mandatory = true;
        this.ptupuHabilDomingo.dataType = Field.dtBool;
        this.ptupuHabilDomingo.options = DefinedSelections.DS_SINO;
        this.ptupuHabilDomingo.value = false;
        this.ptupuHabilDomingo.assignCSS();
        this.fields.push(this.ptupuHabilDomingo);

        this.ptupuANSAfiliaciones.nameInRequest = 'pt_p_ansafiliaciones';
        this.ptupuANSAfiliaciones.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_svc_TMODIFICAR_inArg_pt_p_ANSAfiliaciones',
            'ANS Afiliaciones');
        this.ptupuANSAfiliaciones.mandatory = true;
        this.ptupuANSAfiliaciones.dataType = Field.dtNat;
        this.ptupuANSAfiliaciones.assignCSS();
        this.fields.push(this.ptupuANSAfiliaciones);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['ConfiguracionANS'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisConfiguracionANS.setValue(this.context.exchangeInfo.selectedOids);
            this.setOidFieldsValueputhisConfiguracionANS();
            this.executeDependecyRulesputhisconfiguracionans('SetValue', true);
            this.puthisConfiguracionANS.enabled = false;
            this.executeDependecyRulesputhisconfiguracionans('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisConfiguracionANS'.toLowerCase()) {
            this.puthisConfiguracionANS.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueputhisConfiguracionANS();
            this.executeDependecyRulesputhisconfiguracionans('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisConfiguracionANS argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisconfiguracionans(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisconfiguracionans();
        }
        if ('SetValue' === event && this.puthisConfiguracionANS.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisConfiguracionANS();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisConfiguracionANS argument
     */
    private setSuppInfoputhisconfiguracionans(): void {

        const displaySetIC = 'Id';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisConfiguracionANS.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Configuracionans.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueputhisConfiguracionANS();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisConfiguracionANS.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Configuracionans.name,
                            value.oid, displaySetIC, [Field.dtAuto]);
                    }
                }
                this.setOidFieldsValueputhisConfiguracionANS();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisConfiguracionANS argument
     */
    private executeDependecyRules1puthisConfiguracionANS(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisConfiguracionANS,
                'ansareamedica,habillunes,habilmartes,habilmiercoles,habiljueves,habilviernes,habilsabado,habildomingo,ansafiliaciones');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisConfiguracionANSActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisConfiguracionANS argument
     */
    private executeDependecyRules1puthisConfiguracionANSActions(): void {
        const varputhisconfiguracionans = this.getFirstInstanceFromCache(this.puthisConfiguracionANS);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhisconfiguracionans && !this.util.isNull(varputhisconfiguracionans)) {
            // pt_p_ANSAreaMedica.SetValue( v.ANSAreaMedica )
            this.ptupuANSAreaMedica.setValue(this.util.getInt(varputhisconfiguracionans?.get('ansareamedica')));
            // pt_p_HabilLunes.SetValue( v.HabilLunes )
            this.ptupuHabilLunes.setValue(this.util.getBool(varputhisconfiguracionans?.get('habillunes')));
            // pt_p_HabilMartes.SetValue( v.HabilMartes )
            this.ptupuHabilMartes.setValue(this.util.getBool(varputhisconfiguracionans?.get('habilmartes')));
            // pt_p_HabilMiercoles.SetValue( v.HabilMiercoles )
            this.ptupuHabilMiercoles.setValue(this.util.getBool(varputhisconfiguracionans?.get('habilmiercoles')));
            // pt_p_HabilJueves.SetValue( v.HabilJueves )
            this.ptupuHabilJueves.setValue(this.util.getBool(varputhisconfiguracionans?.get('habiljueves')));
            // pt_p_HabilViernes.SetValue( v.HabilViernes )
            this.ptupuHabilViernes.setValue(this.util.getBool(varputhisconfiguracionans?.get('habilviernes')));
            // pt_p_HabilSabado.SetValue( v.HabilSabado )
            this.ptupuHabilSabado.setValue(this.util.getBool(varputhisconfiguracionans?.get('habilsabado')));
            // pt_p_HabilDomingo.SetValue( v.HabilDomingo )
            this.ptupuHabilDomingo.setValue(this.util.getBool(varputhisconfiguracionans?.get('habildomingo')));
            // pt_p_ANSAfiliaciones.SetValue( v.ANSAfiliaciones )
            this.ptupuANSAfiliaciones.setValue(this.util.getInt(varputhisconfiguracionans?.get('ansafiliaciones')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Set values to the Oid fields and supplementary information of p_thisConfiguracionANS lense argument
    */
    private setOidFieldsValueputhisConfiguracionANS(): void {
        if (this.puthisConfiguracionANS.getSelectedInstances().length > 0) {
            if (this.puthisConfiguracionANS.getSelectedInstances().length > 1) {
                this.puthisConfiguracionANS.oidFields = [null];
                this.puthisConfiguracionANS.editorsEnabled = false;
                this.puthisConfiguracionANS.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.puthisConfiguracionANS.getSelectedInstances().length.toString());
            } else {
                this.puthisConfiguracionANS.editorsEnabled = true;
                this.puthisConfiguracionANS.oidFields[0] = this.puthisConfiguracionANS.getSelectedInstances()[0].oid.id;
                this.puthisConfiguracionANS.supplementaryInfo = this.puthisConfiguracionANS.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.puthisConfiguracionANS.oidFields = Array(1);
            this.puthisConfiguracionANS.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the p_thisConfiguracionANS lense argument
     */
    public onputhisconfiguracionansChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.puthisConfiguracionANS.oidFields) {
            if (!field) {
                fieldsHasValue = false;
                break;
            }
        }

        this.puthisConfiguracionANS.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            id: this.puthisConfiguracionANS.oidFields[0]
            };
            this.puthisConfiguracionANS.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Configuracionans.name, oid,
                'Id');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.puthisConfiguracionANS.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Configuracionans.name, value.oid)) {
                        this.puthisConfiguracionANS.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.puthisConfiguracionANS.alias));
                        this.puthisConfiguracionANS.cleanSelectedInstances();
                        this.puthisConfiguracionANS.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesputhisconfiguracionans('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean p_thisConfiguracionANS argument value
     */
    public cleanputhisconfiguracionans(): void {
        this.clearValidationMessages();
        this.puthisConfiguracionANS.clean();
        this.puthisConfiguracionANS.oidFields = Array(1);
        this.executeDependecyRulesputhisconfiguracionans('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisConfiguracionANS'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisConfiguracionANS.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_ConfiguracionANS';
            this.util.navigateSelectionForward(exchInfo);
        }
    }

    /**
     * Returns true if all elements contained in the group are visible
     * @param groupId Group id.
     */
    public isGroupVisible(groupId: string): boolean {
        let isVisible = true;

        if (groupId === '3') {
            isVisible = this.ptupuHabilLunes.visible ||
                this.ptupuHabilMartes.visible ||
                this.ptupuHabilMiercoles.visible ||
                this.ptupuHabilJueves.visible ||
                this.ptupuHabilViernes.visible ||
                this.ptupuHabilSabado.visible ||
                this.ptupuHabilDomingo.visible;
        }
        return isVisible;
    }

    /**
     * Returns the alias group
     * @param groupId Group id
     */
    public getGroupAlias(groupId: string): string {
        let alias = '';

        if (groupId === '3') {
            alias = this.langMng.translateText('3',
                'Días hábiles');
        }
        return alias;
    }
}
