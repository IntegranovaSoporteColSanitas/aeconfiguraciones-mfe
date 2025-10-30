import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldOVLense, FieldOVLenseSearch } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-grupoasignacionnovedad-siu-tasggrupo',
    templateUrl: './siu_tasggrupo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrupoAsignacionNovedadSIUuTASGGRUPOComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisGrupoAsignacionNovedad: FieldOVLense;
    public ptGrupo: FieldOVLenseSearch;

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
        this.idXML = 'Clas_1586852003840652Ser_9UIServ_1';
        this.className = ModelConstants.Grupoasignacionnovedad.name;
        this.iuName = ModelConstants.Grupoasignacionnovedad.siuutasggrupo;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TASGGRUPO';
        this.title = this.langMng.translateText('cls_GrupoAsignacionNovedad_svc_TASGGRUPO',
            'Cambiar Grupo');

        // Create inbound argument components
        this.puthisGrupoAsignacionNovedad = new FieldOVLense(this.langMng);
        this.ptGrupo = new FieldOVLenseSearch(this.langMng, this.util);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisGrupoAsignacionNovedad.nameInRequest = 'p_thisgrupoasignacionnovedad';
        this.puthisGrupoAsignacionNovedad.alias = this.langMng.translateText(
            'cls_GrupoAsignacionNovedad_svc_TASGGRUPO_inArg_p_thisGrupoAsignacionNovedad',
            'Grupo Asignación Novedades');
        this.puthisGrupoAsignacionNovedad.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisGrupoAsignacionNovedad.mandatory = true;
        this.puthisGrupoAsignacionNovedad.dataType = ModelConstants.Grupoasignacionnovedad.name;
        this.puthisGrupoAsignacionNovedad.oidFields = Array(1);
        this.puthisGrupoAsignacionNovedad.oidFieldsTypes = ['autonumerico'];
        this.puthisGrupoAsignacionNovedad.assignCSS();
        this.fields.push(this.puthisGrupoAsignacionNovedad);

        this.ptGrupo.nameInRequest = 'ptgrupo';
        this.ptGrupo.alias = this.langMng.translateText(
            'cls_GrupoAsignacionNovedad_svc_TASGGRUPO_inArg_ptGrupo',
            'Grupo');
        this.ptGrupo.mandatory = true;
        this.ptGrupo.dataType = ModelConstants.Grupoasignacion.name;
        this.ptGrupo.maxLength = 50;
        this.ptGrupo.assignCSS();
        this.fields.push(this.ptGrupo);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['GrupoAsignacionNovedad'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisGrupoAsignacionNovedad.setValue(this.context.exchangeInfo.selectedOids);
            this.setOidFieldsValueputhisGrupoAsignacionNovedad();
            this.executeDependecyRulesputhisgrupoasignacionnovedad('SetValue', true);
            this.puthisGrupoAsignacionNovedad.enabled = false;
            this.executeDependecyRulesputhisgrupoasignacionnovedad('SetEnabled', true);
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
            if (lastRole === 'GrupoUsuarios') {
                this.ptGrupo.setValue(lastRoleOid);
                this.executeDependecyRulesptgrupo('SetValue', true);
                this.ptGrupo.enabled = false;
                this.executeDependecyRulesptgrupo('SetEnabled', true);
            }
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisGrupoAsignacionNovedad'.toLowerCase()) {
            this.puthisGrupoAsignacionNovedad.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueputhisGrupoAsignacionNovedad();
            this.executeDependecyRulesputhisgrupoasignacionnovedad('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'ptGrupo'.toLowerCase()) {
            this.ptGrupo.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptgrupo('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisGrupoAsignacionNovedad argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisgrupoasignacionnovedad(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisgrupoasignacionnovedad();
        }
        if ('SetValue' === event && this.puthisGrupoAsignacionNovedad.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisGrupoAsignacionNovedad();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisGrupoAsignacionNovedad argument
     */
    private setSuppInfoputhisgrupoasignacionnovedad(): void {

        const displaySetIC = 'Id';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisGrupoAsignacionNovedad.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Grupoasignacionnovedad.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueputhisGrupoAsignacionNovedad();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisGrupoAsignacionNovedad.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Grupoasignacionnovedad.name,
                            value.oid, displaySetIC, [Field.dtAuto]);
                    }
                }
                this.setOidFieldsValueputhisGrupoAsignacionNovedad();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisGrupoAsignacionNovedad argument
     */
    private executeDependecyRules1puthisGrupoAsignacionNovedad(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisGrupoAsignacionNovedad,
                'grupousuarios.Id');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisGrupoAsignacionNovedadActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisGrupoAsignacionNovedad argument
     */
    private executeDependecyRules1puthisGrupoAsignacionNovedadActions(): void {
        const varputhisgrupoasignacionnovedad = this.getFirstInstanceFromCache(this.puthisGrupoAsignacionNovedad);
        // v <> NULL
        if (varputhisgrupoasignacionnovedad && !this.util.isNull(varputhisgrupoasignacionnovedad)) {
            // ptGrupo.SetValue( v.grupousuarios )
            this.ptGrupo.setValue(this.util.oidBuilder.buildOidGrupoAsignacion(
                this.util.getInt(varputhisgrupoasignacionnovedad.get('grupousuarios.Id'))));
            this.executeDependecyRulesptgrupo('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Set values to the Oid fields and supplementary information of p_thisGrupoAsignacionNovedad lense argument
    */
    private setOidFieldsValueputhisGrupoAsignacionNovedad(): void {
        if (this.puthisGrupoAsignacionNovedad.getSelectedInstances().length > 0) {
            if (this.puthisGrupoAsignacionNovedad.getSelectedInstances().length > 1) {
                this.puthisGrupoAsignacionNovedad.oidFields = [null];
                this.puthisGrupoAsignacionNovedad.editorsEnabled = false;
                this.puthisGrupoAsignacionNovedad.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.puthisGrupoAsignacionNovedad.getSelectedInstances().length.toString());
            } else {
                this.puthisGrupoAsignacionNovedad.editorsEnabled = true;
                this.puthisGrupoAsignacionNovedad.oidFields[0] =
                    this.puthisGrupoAsignacionNovedad.getSelectedInstances()[0].oid.id;
                this.puthisGrupoAsignacionNovedad.supplementaryInfo =
                    this.puthisGrupoAsignacionNovedad.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.puthisGrupoAsignacionNovedad.oidFields = Array(1);
            this.puthisGrupoAsignacionNovedad.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the p_thisGrupoAsignacionNovedad lense argument
     */
    public onputhisgrupoasignacionnovedadChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.puthisGrupoAsignacionNovedad.oidFields) {
            if (!field) {
                fieldsHasValue = false;
                break;
            }
        }

        this.puthisGrupoAsignacionNovedad.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            id: this.puthisGrupoAsignacionNovedad.oidFields[0]
            };
            this.puthisGrupoAsignacionNovedad.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Grupoasignacionnovedad.name, oid,
                'Id');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.puthisGrupoAsignacionNovedad.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Grupoasignacionnovedad.name, value.oid)) {
                        this.puthisGrupoAsignacionNovedad.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.puthisGrupoAsignacionNovedad.alias));
                        this.puthisGrupoAsignacionNovedad.cleanSelectedInstances();
                        this.puthisGrupoAsignacionNovedad.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesputhisgrupoasignacionnovedad('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean p_thisGrupoAsignacionNovedad argument value
     */
    public cleanputhisgrupoasignacionnovedad(): void {
        this.clearValidationMessages();
        this.puthisGrupoAsignacionNovedad.clean();
        this.puthisGrupoAsignacionNovedad.oidFields = Array(1);
        this.executeDependecyRulesputhisgrupoasignacionnovedad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptGrupo argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptgrupo(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptgrupo();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the ptGrupo argument
     */
    private setSuppInfoptgrupo(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.ptGrupo.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Grupoasignacion.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptGrupo.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptGrupo.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Grupoasignacion.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptGrupo.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * Process the change in the ptGrupo lense search argument
     */
    public onptgrupoChange(): void {
        const navFilters: string[] = [];
        navFilters.push('GrupoAsignacionNovedad_TASGGRUPO_ptGrupo_NavFilter0');
        this.executeLenseSearch(this.ptGrupo, ModelConstants.Grupoasignacion.name, 'IC_GrupoAsignacion',
            navFilters).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanptgrupo();
            }
            if (foundInstances === 1) {
                this.processptgrupoSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the ptGrupo lense search argument
     */
    public processptgrupoSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptGrupo.searchResults.length > index) {
            selectedInstance = this.ptGrupo.searchResults[index];
        }
        // Clean the result list
        this.ptGrupo.searchResults = [];
        if (selectedInstance) {
            if (!this.ptGrupo.allowMultiSelect) {
                this.ptGrupo.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptGrupo.addInstances(selectedInstance);
        }
        this.executeDependecyRulesptgrupo('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the ptGrupo lense search argument
     */
    public cleanptgrupo(): void {
        this.clearValidationMessages();
        this.ptGrupo.clean();
        this.executeDependecyRulesptgrupo('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisGrupoAsignacionNovedad'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisGrupoAsignacionNovedad.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_GrpAsigNovedad_D_Dominio';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('ptGrupo'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptGrupo.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_GrupoAsignacion';
            exchInfo.navigationalFilterIdentity = [];
            exchInfo.navigationalFilterIdentity.push('GrupoAsignacionNovedad_TASGGRUPO_ptGrupo_NavFilter0');
            exchInfo.navigationalFilterVariables = this.getNavigationFilterVariables();
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
