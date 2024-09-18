import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldDefinedSelection, FieldOVLenseSearch } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-planes-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanesSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puagrProductoT: FieldOVLenseSearch;
    public puatrPlan: Field;
    public puatrNombre: Field;
    public puatrEsBancoRep: FieldDefinedSelection;
    public puatrCodigoLegal: Field;

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
        this.idXML = 'Clas_1431695392768502Ser_1UIServ_1';
        this.className = ModelConstants.Planes.name;
        this.iuName = ModelConstants.Planes.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_Planes_svc_crear',
            'Crear plan');

        // Create inbound argument components
        this.puagrProductoT = new FieldOVLenseSearch(this.langMng);
        this.puatrPlan = new Field(this.langMng);
        this.puatrNombre = new Field(this.langMng);
        this.puatrEsBancoRep = new FieldDefinedSelection(this.langMng);
        this.puatrCodigoLegal = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puagrProductoT.nameInRequest = 'p_agrproductot';
        this.puagrProductoT.alias = this.langMng.translateText(
            'cls_Planes_svc_crear_inArg_p_agrProductoT',
            'ProductoT');
        this.puagrProductoT.mandatory = true;
        this.puagrProductoT.dataType = ModelConstants.Productos.name;
        this.puagrProductoT.maxLength = 100;
        this.puagrProductoT.assignCSS();
        this.fields.push(this.puagrProductoT);

        this.puatrPlan.nameInRequest = 'p_atrplan';
        this.puatrPlan.alias = this.langMng.translateText(
            'cls_Planes_svc_crear_inArg_p_atrPlan',
            'Plan');
        this.puatrPlan.mandatory = true;
        this.puatrPlan.dataType = Field.dtInt;
        this.puatrPlan.assignCSS();
        this.fields.push(this.puatrPlan);

        this.puatrNombre.nameInRequest = 'p_atrnombre';
        this.puatrNombre.alias = this.langMng.translateText(
            'cls_Planes_svc_crear_inArg_p_atrNombre',
            'Nombre');
        this.puatrNombre.mandatory = true;
        this.puatrNombre.dataType = Field.dtString;
        this.puatrNombre.maxLength = 150;
        this.puatrNombre.assignCSS();
        this.fields.push(this.puatrNombre);

        this.puatrEsBancoRep.nameInRequest = 'p_atresbancorep';
        this.puatrEsBancoRep.alias = this.langMng.translateText(
            'cls_Planes_svc_crear_inArg_p_atrEsBancoRep',
            'Es banco república');
        this.puatrEsBancoRep.mandatory = true;
        this.puatrEsBancoRep.dataType = Field.dtBool;
        this.puatrEsBancoRep.options = DefinedSelections.DS_SINO;
        this.puatrEsBancoRep.value = false;
        this.puatrEsBancoRep.assignCSS();
        this.fields.push(this.puatrEsBancoRep);

        this.puatrCodigoLegal.nameInRequest = 'p_atrcodigolegal';
        this.puatrCodigoLegal.alias = this.langMng.translateText(
            'cls_Planes_svc_crear_inArg_p_atrCodigoLegal',
            'Código Legal');
        this.puatrCodigoLegal.mandatory = true;
        this.puatrCodigoLegal.dataType = Field.dtString;
        this.puatrCodigoLegal.maxLength = 10;
        this.puatrCodigoLegal.assignCSS();
        this.fields.push(this.puatrCodigoLegal);
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
            if (lastRole === 'ProductoT') {
                this.puagrProductoT.setValue(lastRoleOid);
                this.executeDependecyRulespuagrproductot('SetValue', true);
                this.puagrProductoT.enabled = false;
                this.executeDependecyRulespuagrproductot('SetEnabled', true);
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
        if (exchInfo.originArgumentName.toLowerCase() === 'puagrProductoT'.toLowerCase()) {
            this.puagrProductoT.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespuagrproductot('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_agrProductoT argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuagrproductot(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopuagrproductot();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_agrProductoT argument
     */
    private setSuppInfopuagrproductot(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puagrProductoT.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Productos.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puagrProductoT.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puagrProductoT.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Productos.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puagrProductoT.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the p_agrProductoT lense search argument
     */
    public onpuagrproductotChange(): void {

        const searchText = this.puagrProductoT.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puagrProductoT.lastText) {
                this.puagrProductoT.removeCSSClass('noResultsLenseSearch');
                this.puagrProductoT.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Productos.name, 'IC_Producto', searchText, [], null).then(
                        (response: any) => {
                            this.puagrProductoT.removeCSSClass('noResultsLenseSearch');
                            this.puagrProductoT.searchResults = response.results;
                            if (this.puagrProductoT.searchResults &&
                                this.puagrProductoT.searchResults.length === 0) {
                                this.puagrProductoT.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puagrProductoT.searchResults &&
                                this.puagrProductoT.searchResults.length === 1) {
                                this.processpuagrproductotSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puagrProductoT.removeCSSClass('noResultsLenseSearch');
                            this.puagrProductoT.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puagrProductoT.removeCSSClass('noResultsLenseSearch');
            this.puagrProductoT.searchResults = [];
            this.cleanpuagrproductot();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_agrProductoT lense search argument
     */
    public processpuagrproductotSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puagrProductoT.searchResults.length > index) {
            selectedInstance = this.puagrProductoT.searchResults[index];
        }
        // Clean the result list
        this.puagrProductoT.searchResults = [];
        if (selectedInstance) {
            if (!this.puagrProductoT.allowMultiSelect) {
                this.puagrProductoT.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puagrProductoT.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespuagrproductot('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_agrProductoT lense search argument
     */
    public cleanpuagrproductot(): void {
        this.clearValidationMessages();
        this.puagrProductoT.clean();
        this.executeDependecyRulespuagrproductot('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puagrProductoT'.toLowerCase() === argumentName.toLowerCase()) {
            this.puagrProductoT.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Productos_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
