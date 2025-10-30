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
    selector: 'imes-sucursal-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SucursalSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puagrRegional: FieldOVLenseSearch;
    public puatrCodigo: Field;
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
        this.idXML = 'Clas_1431874043904178Ser_1UIServ_1';
        this.className = ModelConstants.Sucursal.name;
        this.iuName = ModelConstants.Sucursal.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_Sucursal_svc_crear',
            'Crear sucursal');

        // Create inbound argument components
        this.puagrRegional = new FieldOVLenseSearch(this.langMng, this.util);
        this.puatrCodigo = new Field(this.langMng);
        this.puatrDescripcion = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puagrRegional.nameInRequest = 'p_agrregional';
        this.puagrRegional.alias = this.langMng.translateText(
            'cls_Sucursal_svc_crear_inArg_p_agrRegional',
            'Regional');
        this.puagrRegional.mandatory = true;
        this.puagrRegional.dataType = ModelConstants.Regional.name;
        this.puagrRegional.maxLength = 150;
        this.puagrRegional.assignCSS();
        this.fields.push(this.puagrRegional);

        this.puatrCodigo.nameInRequest = 'p_atrcodigo';
        this.puatrCodigo.alias = this.langMng.translateText(
            'cls_Sucursal_svc_crear_inArg_p_atrCodigo',
            'Código');
        this.puatrCodigo.mandatory = true;
        this.puatrCodigo.dataType = Field.dtInt;
        this.puatrCodigo.assignCSS();
        this.fields.push(this.puatrCodigo);

        this.puatrDescripcion.nameInRequest = 'p_atrdescripcion';
        this.puatrDescripcion.alias = this.langMng.translateText(
            'cls_Sucursal_svc_crear_inArg_p_atrDescripcion',
            'Descripción');
        this.puatrDescripcion.mandatory = true;
        this.puatrDescripcion.dataType = Field.dtString;
        this.puatrDescripcion.maxLength = 200;
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
            if (lastRole === 'Regional') {
                this.puagrRegional.setValue(lastRoleOid);
                this.executeDependecyRulespuagrregional('SetValue', true);
                this.puagrRegional.enabled = false;
                this.executeDependecyRulespuagrregional('SetEnabled', true);
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
        if (exchInfo.originArgumentName.toLowerCase() === 'puagrRegional'.toLowerCase()) {
            this.puagrRegional.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespuagrregional('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_agrRegional argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuagrregional(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopuagrregional();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_agrRegional argument
     */
    private setSuppInfopuagrregional(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puagrRegional.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Regional.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puagrRegional.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puagrRegional.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Regional.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puagrRegional.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * Process the change in the p_agrRegional lense search argument
     */
    public onpuagrregionalChange(): void {
        this.executeLenseSearch(this.puagrRegional, ModelConstants.Regional.name, 'IC_Regional',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanpuagrregional();
            }
            if (foundInstances === 1) {
                this.processpuagrregionalSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_agrRegional lense search argument
     */
    public processpuagrregionalSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puagrRegional.searchResults.length > index) {
            selectedInstance = this.puagrRegional.searchResults[index];
        }
        // Clean the result list
        this.puagrRegional.searchResults = [];
        if (selectedInstance) {
            if (!this.puagrRegional.allowMultiSelect) {
                this.puagrRegional.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puagrRegional.addInstances(selectedInstance);
        }
        this.executeDependecyRulespuagrregional('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_agrRegional lense search argument
     */
    public cleanpuagrregional(): void {
        this.clearValidationMessages();
        this.puagrRegional.clean();
        this.executeDependecyRulespuagrregional('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puagrRegional'.toLowerCase() === argumentName.toLowerCase()) {
            this.puagrRegional.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Regional_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
