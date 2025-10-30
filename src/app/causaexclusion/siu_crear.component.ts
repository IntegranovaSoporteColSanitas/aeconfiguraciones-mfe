import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldOVLenseSearch } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-causaexclusion-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CausaExclusionSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puagrNovedad: FieldOVLenseSearch;
    public puatrAliasCausa: Field;
    public puatrDescripcion: Field;

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
        this.idXML = 'Clas_1581522485248372Ser_1UIServ_1';
        this.className = ModelConstants.Causaexclusion.name;
        this.iuName = ModelConstants.Causaexclusion.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_CausaExclusion_svc_crear',
            'Crear');

        // Create inbound argument components
        this.puagrNovedad = new FieldOVLenseSearch(this.langMng, this.util);
        this.puatrAliasCausa = new Field(this.langMng);
        this.puatrDescripcion = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puagrNovedad.nameInRequest = 'p_agrnovedad';
        this.puagrNovedad.alias = this.langMng.translateText(
            'cls_CausaExclusion_svc_crear_inArg_p_agrNovedad',
            'Novedad');
        this.puagrNovedad.mandatory = true;
        this.puagrNovedad.dataType = ModelConstants.Novedad.name;
        this.puagrNovedad.maxLength = 50;
        this.puagrNovedad.assignCSS();
        this.fields.push(this.puagrNovedad);

        this.puatrAliasCausa.nameInRequest = 'p_atraliascausa';
        this.puatrAliasCausa.alias = this.langMng.translateText(
            'cls_CausaExclusion_svc_crear_inArg_p_atrAliasCausa',
            'Alias');
        this.puatrAliasCausa.mandatory = true;
        this.puatrAliasCausa.dataType = Field.dtString;
        this.puatrAliasCausa.maxLength = 10;
        this.puatrAliasCausa.assignCSS();
        this.fields.push(this.puatrAliasCausa);

        this.puatrDescripcion.nameInRequest = 'p_atrdescripcion';
        this.puatrDescripcion.alias = this.langMng.translateText(
            'cls_CausaExclusion_svc_crear_inArg_p_atrDescripcion',
            'Descripción');
        this.puatrDescripcion.mandatory = true;
        this.puatrDescripcion.dataType = Field.dtString;
        this.puatrDescripcion.maxLength = 100;
        this.puatrDescripcion.assignCSS();
        this.fields.push(this.puatrDescripcion);
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
            if (lastRole === 'Novedad') {
                this.puagrNovedad.setValue(lastRoleOid);
                this.executeDependecyRulespuagrnovedad('SetValue', true);
                this.puagrNovedad.enabled = false;
                this.executeDependecyRulespuagrnovedad('SetEnabled', true);
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
        if (exchInfo.originArgumentName.toLowerCase() === 'puagrNovedad'.toLowerCase()) {
            this.puagrNovedad.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespuagrnovedad('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_agrNovedad argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuagrnovedad(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopuagrnovedad();
        }
        if ('SetValue' === event && this.puagrNovedad.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puagrNovedad();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_agrNovedad argument
     */
    private setSuppInfopuagrnovedad(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puagrNovedad.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Novedad.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puagrNovedad.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puagrNovedad.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Novedad.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puagrNovedad.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_agrNovedad argument
     */
    private executeDependecyRules1puagrNovedad(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puagrNovedad,
                'id_Novedad');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puagrNovedadActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_agrNovedad argument
     */
    private executeDependecyRules1puagrNovedadActions(): void {
        const varpuagrnovedad = this.getFirstInstanceFromCache(this.puagrNovedad);
        // v <> NULL
        if (varpuagrnovedad && !this.util.isNull(varpuagrnovedad)) {
            // p_agrNovedad.SetVisible( FALSE )
            this.puagrNovedad.visible = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }
    /**
     * Process the change in the p_agrNovedad lense search argument
     */
    public onpuagrnovedadChange(): void {
        this.executeLenseSearch(this.puagrNovedad, ModelConstants.Novedad.name, 'IC_Novedad',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanpuagrnovedad();
            }
            if (foundInstances === 1) {
                this.processpuagrnovedadSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_agrNovedad lense search argument
     */
    public processpuagrnovedadSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puagrNovedad.searchResults.length > index) {
            selectedInstance = this.puagrNovedad.searchResults[index];
        }
        // Clean the result list
        this.puagrNovedad.searchResults = [];
        if (selectedInstance) {
            if (!this.puagrNovedad.allowMultiSelect) {
                this.puagrNovedad.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puagrNovedad.addInstances(selectedInstance);
        }
        this.executeDependecyRulespuagrnovedad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_agrNovedad lense search argument
     */
    public cleanpuagrnovedad(): void {
        this.clearValidationMessages();
        this.puagrNovedad.clean();
        this.executeDependecyRulespuagrnovedad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puagrNovedad'.toLowerCase() === argumentName.toLowerCase()) {
            this.puagrNovedad.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Novedad_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
