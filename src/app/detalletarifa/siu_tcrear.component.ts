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
    selector: 'imes-detalletarifa-siu-tcrear',
    templateUrl: './siu_tcrear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetalleTarifaSIUuTCREARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public pTarifa: FieldOVLenseSearch;
    public pProducto: FieldOVLenseSearch;
    public pPlan: FieldOVLenseSearch;
    public pTipoContrato: FieldDefinedSelection;
    public pAnyo: Field;
    public pLimInferiorEdad: Field;
    public pLimSuperiorEdad: Field;
    public pValor: Field;

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
        this.idXML = 'Clas_1445859950592289Ser_4UIServ_1';
        this.className = ModelConstants.Detalletarifa.name;
        this.iuName = ModelConstants.Detalletarifa.siuutcrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TCREAR';
        this.title = this.langMng.translateText('cls_DetalleTarifa_svc_TCREAR',
            'Crear Detalle de Tarifa');

        // Create inbound argument components
        this.pTarifa = new FieldOVLenseSearch(this.langMng);
        this.pProducto = new FieldOVLenseSearch(this.langMng);
        this.pPlan = new FieldOVLenseSearch(this.langMng);
        this.pTipoContrato = new FieldDefinedSelection(this.langMng);
        this.pAnyo = new Field(this.langMng);
        this.pLimInferiorEdad = new Field(this.langMng);
        this.pLimSuperiorEdad = new Field(this.langMng);
        this.pValor = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.pTarifa.nameInRequest = 'ptarifa';
        this.pTarifa.alias = this.langMng.translateText(
            'cls_DetalleTarifa_svc_TCREAR_inArg_pTarifa',
            'Tarifa');
        this.pTarifa.mandatory = true;
        this.pTarifa.dataType = ModelConstants.Tarifa.name;
        this.pTarifa.maxLength = 262;
        this.pTarifa.assignCSS();
        this.fields.push(this.pTarifa);

        this.pProducto.nameInRequest = 'pproducto';
        this.pProducto.alias = this.langMng.translateText(
            'cls_DetalleTarifa_svc_TCREAR_inArg_pProducto',
            'Producto');
        this.pProducto.mandatory = true;
        this.pProducto.dataType = ModelConstants.Productos.name;
        this.pProducto.maxLength = 100;
        this.pProducto.assignCSS();
        this.fields.push(this.pProducto);

        this.pPlan.nameInRequest = 'pplan';
        this.pPlan.alias = this.langMng.translateText(
            'cls_DetalleTarifa_svc_TCREAR_inArg_pPlan',
            'Plan');
        this.pPlan.mandatory = true;
        this.pPlan.dataType = ModelConstants.Planes.name;
        this.pPlan.maxLength = 150;
        this.pPlan.assignCSS();
        this.fields.push(this.pPlan);

        this.pTipoContrato.nameInRequest = 'ptipocontrato';
        this.pTipoContrato.alias = this.langMng.translateText(
            'cls_DetalleTarifa_svc_TCREAR_inArg_pTipoContrato',
            'Tipo Contrato');
        this.pTipoContrato.mandatory = true;
        this.pTipoContrato.dataType = Field.dtNat;
        this.pTipoContrato.options = DefinedSelections.DS_TIPOCONTRATO;
        this.pTipoContrato.assignCSS();
        this.fields.push(this.pTipoContrato);

        this.pAnyo.nameInRequest = 'panyo';
        this.pAnyo.alias = this.langMng.translateText(
            'cls_DetalleTarifa_svc_TCREAR_inArg_pAnyo',
            'Año');
        this.pAnyo.mandatory = true;
        this.pAnyo.dataType = Field.dtInt;
        this.pAnyo.assignCSS();
        this.fields.push(this.pAnyo);

        this.pLimInferiorEdad.nameInRequest = 'pliminferioredad';
        this.pLimInferiorEdad.alias = this.langMng.translateText(
            'cls_DetalleTarifa_svc_TCREAR_inArg_pLimInferiorEdad',
            'Lim. inferior edad');
        this.pLimInferiorEdad.mandatory = true;
        this.pLimInferiorEdad.dataType = Field.dtInt;
        this.pLimInferiorEdad.assignCSS();
        this.fields.push(this.pLimInferiorEdad);

        this.pLimSuperiorEdad.nameInRequest = 'plimsuperioredad';
        this.pLimSuperiorEdad.alias = this.langMng.translateText(
            'cls_DetalleTarifa_svc_TCREAR_inArg_pLimSuperiorEdad',
            'Lim. superior edad');
        this.pLimSuperiorEdad.mandatory = true;
        this.pLimSuperiorEdad.dataType = Field.dtInt;
        this.pLimSuperiorEdad.assignCSS();
        this.fields.push(this.pLimSuperiorEdad);

        this.pValor.nameInRequest = 'pvalor';
        this.pValor.alias = this.langMng.translateText(
            'cls_DetalleTarifa_svc_TCREAR_inArg_pValor',
            'Valor');
        this.pValor.mandatory = true;
        this.pValor.dataType = Field.dtReal;
        this.pValor.assignCSS();
        this.fields.push(this.pValor);
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
            if (lastRole === 'Tarifa') {
                this.pTarifa.setValue(lastRoleOid);
                this.executeDependecyRulesptarifa('SetValue', true);
                this.pTarifa.enabled = false;
                this.executeDependecyRulesptarifa('SetEnabled', true);
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
        if (exchInfo.originArgumentName.toLowerCase() === 'pTarifa'.toLowerCase()) {
            this.pTarifa.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptarifa('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'pProducto'.toLowerCase()) {
            this.pProducto.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespproducto('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'pPlan'.toLowerCase()) {
            this.pPlan.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespplan('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for pTarifa argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptarifa(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptarifa();
        }
        if ('SetValue' === event && this.pTarifa.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1pTarifa();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pTarifa argument
     */
    private setSuppInfoptarifa(): void {

        const displaySetIC = 'ProductoT.Descripcion,PlanT.Nombre,Codigo';
        let numberMissingSupInfo = 0;
        for (const value of this.pTarifa.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Tarifa.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.pTarifa.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.pTarifa.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Tarifa.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString, Field.dtString]);
                    }
                }
                this.pTarifa.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for pTarifa argument
     */
    private executeDependecyRules1pTarifa(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.pTarifa,
                'plant.Plan,productot.Producto,tipocontrato');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1pTarifaActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pTarifa argument
     */
    private executeDependecyRules1pTarifaActions(): void {
        const varptarifa = this.getFirstInstanceFromCache(this.pTarifa);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varptarifa && !this.util.isNull(varptarifa)) {
            // pTarifa.SetVisible( FALSE )
            this.pTarifa.visible = false;
            // pPlan.SetValue( v.plant )
            this.pPlan.setValue(this.util.oidBuilder.buildOidPlanes(
                this.util.getInt(varptarifa?.get('plant.Plan'))));
            this.executeDependecyRulespplan('SetValue', true);
            // pPlan.SetActive( FALSE )
            this.pPlan.enabled = false;
            this.executeDependecyRulespplan('SetActive', true);
            // pProducto.SetValue( v.productot )
            this.pProducto.setValue(this.util.oidBuilder.buildOidProductos(
                this.util.getInt(varptarifa?.get('productot.Producto'))));
            this.executeDependecyRulespproducto('SetValue', true);
            // pProducto.SetActive( FALSE )
            this.pProducto.enabled = false;
            this.executeDependecyRulespproducto('SetActive', true);
            // pTipoContrato.SetValue( v.tipocontrato )
            this.pTipoContrato.setValue(this.util.getInt(varptarifa?.get('tipocontrato')));
            // pTipoContrato.SetActive( FALSE )
            this.pTipoContrato.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pTarifa lense search argument
     */
    public onptarifaChange(): void {

        const searchText = this.pTarifa.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.pTarifa.lastText) {
                this.pTarifa.removeCSSClass('noResultsLenseSearch');
                this.pTarifa.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Tarifa.name, 'IC_Tarifa', searchText, [], null).then(
                        (response: any) => {
                            this.pTarifa.removeCSSClass('noResultsLenseSearch');
                            this.pTarifa.searchResults = response.results;
                            if (this.pTarifa.searchResults &&
                                this.pTarifa.searchResults.length === 0) {
                                this.pTarifa.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.pTarifa.searchResults &&
                                this.pTarifa.searchResults.length === 1) {
                                this.processptarifaSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.pTarifa.removeCSSClass('noResultsLenseSearch');
                            this.pTarifa.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.pTarifa.removeCSSClass('noResultsLenseSearch');
            this.pTarifa.searchResults = [];
            this.cleanptarifa();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pTarifa lense search argument
     */
    public processptarifaSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.pTarifa.searchResults.length > index) {
            selectedInstance = this.pTarifa.searchResults[index];
        }
        // Clean the result list
        this.pTarifa.searchResults = [];
        if (selectedInstance) {
            if (!this.pTarifa.allowMultiSelect) {
                this.pTarifa.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.pTarifa.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesptarifa('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pTarifa lense search argument
     */
    public cleanptarifa(): void {
        this.clearValidationMessages();
        this.pTarifa.clean();
        this.executeDependecyRulesptarifa('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pProducto argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespproducto(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopproducto();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pProducto argument
     */
    private setSuppInfopproducto(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.pProducto.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Productos.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.pProducto.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.pProducto.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Productos.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.pProducto.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the pProducto lense search argument
     */
    public onpproductoChange(): void {

        const searchText = this.pProducto.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.pProducto.lastText) {
                this.pProducto.removeCSSClass('noResultsLenseSearch');
                this.pProducto.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Productos.name, 'IC_Producto', searchText, [], null).then(
                        (response: any) => {
                            this.pProducto.removeCSSClass('noResultsLenseSearch');
                            this.pProducto.searchResults = response.results;
                            if (this.pProducto.searchResults &&
                                this.pProducto.searchResults.length === 0) {
                                this.pProducto.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.pProducto.searchResults &&
                                this.pProducto.searchResults.length === 1) {
                                this.processpproductoSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.pProducto.removeCSSClass('noResultsLenseSearch');
                            this.pProducto.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.pProducto.removeCSSClass('noResultsLenseSearch');
            this.pProducto.searchResults = [];
            this.cleanpproducto();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pProducto lense search argument
     */
    public processpproductoSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.pProducto.searchResults.length > index) {
            selectedInstance = this.pProducto.searchResults[index];
        }
        // Clean the result list
        this.pProducto.searchResults = [];
        if (selectedInstance) {
            if (!this.pProducto.allowMultiSelect) {
                this.pProducto.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.pProducto.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespproducto('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pProducto lense search argument
     */
    public cleanpproducto(): void {
        this.clearValidationMessages();
        this.pProducto.clean();
        this.executeDependecyRulespproducto('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pPlan argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespplan(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopplan();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pPlan argument
     */
    private setSuppInfopplan(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.pPlan.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Planes.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.pPlan.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.pPlan.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Planes.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.pPlan.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the pPlan lense search argument
     */
    public onpplanChange(): void {

        const searchText = this.pPlan.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.pPlan.lastText) {
                this.pPlan.removeCSSClass('noResultsLenseSearch');
                this.pPlan.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Planes.name, 'IC_Plan', searchText, [], null).then(
                        (response: any) => {
                            this.pPlan.removeCSSClass('noResultsLenseSearch');
                            this.pPlan.searchResults = response.results;
                            if (this.pPlan.searchResults &&
                                this.pPlan.searchResults.length === 0) {
                                this.pPlan.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.pPlan.searchResults &&
                                this.pPlan.searchResults.length === 1) {
                                this.processpplanSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.pPlan.removeCSSClass('noResultsLenseSearch');
                            this.pPlan.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.pPlan.removeCSSClass('noResultsLenseSearch');
            this.pPlan.searchResults = [];
            this.cleanpplan();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pPlan lense search argument
     */
    public processpplanSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.pPlan.searchResults.length > index) {
            selectedInstance = this.pPlan.searchResults[index];
        }
        // Clean the result list
        this.pPlan.searchResults = [];
        if (selectedInstance) {
            if (!this.pPlan.allowMultiSelect) {
                this.pPlan.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.pPlan.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespplan('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pPlan lense search argument
     */
    public cleanpplan(): void {
        this.clearValidationMessages();
        this.pPlan.clean();
        this.executeDependecyRulespplan('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('pTarifa'.toLowerCase() === argumentName.toLowerCase()) {
            this.pTarifa.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Tarifas';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('pProducto'.toLowerCase() === argumentName.toLowerCase()) {
            this.pProducto.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Productos_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('pPlan'.toLowerCase() === argumentName.toLowerCase()) {
            this.pPlan.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Planes_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
