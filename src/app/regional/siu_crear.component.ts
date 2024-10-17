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
    selector: 'imes-regional-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionalSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puagrRespRegional: FieldOVLenseSearch;
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
        this.idXML = 'Clas_1431872733184951Ser_1UIServ_1';
        this.className = ModelConstants.Regional.name;
        this.iuName = ModelConstants.Regional.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_Regional_svc_crear',
            'Crear regional');

        // Create inbound argument components
        this.puagrRespRegional = new FieldOVLenseSearch(this.langMng);
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

        this.puagrRespRegional.nameInRequest = 'p_agrrespregional';
        this.puagrRespRegional.alias = this.langMng.translateText(
            'cls_Regional_svc_crear_inArg_p_agrRespRegional',
            'Responsable');
        this.puagrRespRegional.mandatory = false;
        this.puagrRespRegional.dataType = ModelConstants.Respregional.name;
        this.puagrRespRegional.maxLength = 200;
        this.puagrRespRegional.assignCSS();
        this.fields.push(this.puagrRespRegional);

        this.puatrCodigo.nameInRequest = 'p_atrcodigo';
        this.puatrCodigo.alias = this.langMng.translateText(
            'cls_Regional_svc_crear_inArg_p_atrCodigo',
            'Código');
        this.puatrCodigo.mandatory = true;
        this.puatrCodigo.dataType = Field.dtInt;
        this.puatrCodigo.assignCSS();
        this.fields.push(this.puatrCodigo);

        this.puatrDescripcion.nameInRequest = 'p_atrdescripcion';
        this.puatrDescripcion.alias = this.langMng.translateText(
            'cls_Regional_svc_crear_inArg_p_atrDescripcion',
            'Descripción');
        this.puatrDescripcion.mandatory = true;
        this.puatrDescripcion.dataType = Field.dtString;
        this.puatrDescripcion.maxLength = 150;
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
            if (lastRole === 'RespRegional') {
                this.puagrRespRegional.setValue(lastRoleOid);
                this.executeDependecyRulespuagrrespregional('SetValue', true);
                this.puagrRespRegional.enabled = false;
                this.executeDependecyRulespuagrrespregional('SetEnabled', true);
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
        if (exchInfo.originArgumentName.toLowerCase() === 'puagrRespRegional'.toLowerCase()) {
            this.puagrRespRegional.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespuagrrespregional('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_agrRespRegional argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuagrrespregional(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopuagrrespregional();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_agrRespRegional argument
     */
    private setSuppInfopuagrrespregional(): void {

        const displaySetIC = 'PrimerNombre,SegundoNombre,PrimerApellido,SegundoApellido';
        let numberMissingSupInfo = 0;
        for (const value of this.puagrRespRegional.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Respregional.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puagrRespRegional.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puagrRespRegional.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Respregional.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString, Field.dtString, Field.dtString]);
                    }
                }
                this.puagrRespRegional.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the p_agrRespRegional lense search argument
     */
    public onpuagrrespregionalChange(): void {

        const searchText = this.puagrRespRegional.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puagrRespRegional.lastText) {
                this.puagrRespRegional.removeCSSClass('noResultsLenseSearch');
                this.puagrRespRegional.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Respregional.name, 'IC_RespRegionalNomApe', searchText, [], null).then(
                        (response: any) => {
                            this.puagrRespRegional.removeCSSClass('noResultsLenseSearch');
                            this.puagrRespRegional.searchResults = response.results;
                            if (this.puagrRespRegional.searchResults &&
                                this.puagrRespRegional.searchResults.length === 0) {
                                this.puagrRespRegional.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puagrRespRegional.searchResults &&
                                this.puagrRespRegional.searchResults.length === 1) {
                                this.processpuagrrespregionalSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puagrRespRegional.removeCSSClass('noResultsLenseSearch');
                            this.puagrRespRegional.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puagrRespRegional.removeCSSClass('noResultsLenseSearch');
            this.puagrRespRegional.searchResults = [];
            this.cleanpuagrrespregional();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_agrRespRegional lense search argument
     */
    public processpuagrrespregionalSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puagrRespRegional.searchResults.length > index) {
            selectedInstance = this.puagrRespRegional.searchResults[index];
        }
        // Clean the result list
        this.puagrRespRegional.searchResults = [];
        if (selectedInstance) {
            if (!this.puagrRespRegional.allowMultiSelect) {
                this.puagrRespRegional.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puagrRespRegional.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespuagrrespregional('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_agrRespRegional lense search argument
     */
    public cleanpuagrrespregional(): void {
        this.clearValidationMessages();
        this.puagrRespRegional.clean();
        this.executeDependecyRulespuagrrespregional('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puagrRespRegional'.toLowerCase() === argumentName.toLowerCase()) {
            this.puagrRespRegional.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_RespRegional';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
