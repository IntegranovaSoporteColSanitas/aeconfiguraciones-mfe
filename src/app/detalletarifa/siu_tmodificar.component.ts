import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldDefinedSelection, FieldOVLense, FieldOVLenseSearch } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-detalletarifa-siu-tmodificar',
    templateUrl: './siu_tmodificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetalleTarifaSIUuTMODIFICARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisDetalleTarifa: FieldOVLense;
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
        this.idXML = 'Clas_1445859950592289Ser_5UIServ_1';
        this.className = ModelConstants.Detalletarifa.name;
        this.iuName = ModelConstants.Detalletarifa.siuutmodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TMODIFICAR';
        this.title = this.langMng.translateText('cls_DetalleTarifa_svc_TMODIFICAR',
            'Modificar Detalle de Tarifa');

        // Create inbound argument components
        this.puthisDetalleTarifa = new FieldOVLense(this.langMng);
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

        this.puthisDetalleTarifa.nameInRequest = 'p_thisdetalletarifa';
        this.puthisDetalleTarifa.alias = this.langMng.translateText(
            'cls_DetalleTarifa_svc_TMODIFICAR_inArg_p_thisDetalleTarifa',
            'Detalle de Tarifa');
        this.puthisDetalleTarifa.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisDetalleTarifa.mandatory = true;
        this.puthisDetalleTarifa.dataType = ModelConstants.Detalletarifa.name;
        this.puthisDetalleTarifa.oidFields = Array(1);
        this.puthisDetalleTarifa.oidFieldsTypes = ['autonumerico'];
        this.puthisDetalleTarifa.assignCSS();
        this.fields.push(this.puthisDetalleTarifa);

        this.pProducto.nameInRequest = 'pproducto';
        this.pProducto.alias = this.langMng.translateText(
            'cls_DetalleTarifa_svc_TMODIFICAR_inArg_pProducto',
            'Producto');
        this.pProducto.mandatory = true;
        this.pProducto.dataType = ModelConstants.Productos.name;
        this.pProducto.maxLength = 100;
        this.pProducto.assignCSS();
        this.fields.push(this.pProducto);

        this.pPlan.nameInRequest = 'pplan';
        this.pPlan.alias = this.langMng.translateText(
            'cls_DetalleTarifa_svc_TMODIFICAR_inArg_pPlan',
            'Plan');
        this.pPlan.mandatory = true;
        this.pPlan.dataType = ModelConstants.Planes.name;
        this.pPlan.maxLength = 150;
        this.pPlan.assignCSS();
        this.fields.push(this.pPlan);

        this.pTipoContrato.nameInRequest = 'ptipocontrato';
        this.pTipoContrato.alias = this.langMng.translateText(
            'cls_DetalleTarifa_svc_TMODIFICAR_inArg_pTipoContrato',
            'Tipo Contrato');
        this.pTipoContrato.mandatory = true;
        this.pTipoContrato.dataType = Field.dtNat;
        this.pTipoContrato.options = DefinedSelections.DS_TIPOCONTRATO;
        this.pTipoContrato.assignCSS();
        this.fields.push(this.pTipoContrato);

        this.pAnyo.nameInRequest = 'panyo';
        this.pAnyo.alias = this.langMng.translateText(
            'cls_DetalleTarifa_svc_TMODIFICAR_inArg_pAnyo',
            'Año');
        this.pAnyo.mandatory = true;
        this.pAnyo.dataType = Field.dtInt;
        this.pAnyo.assignCSS();
        this.fields.push(this.pAnyo);

        this.pLimInferiorEdad.nameInRequest = 'pliminferioredad';
        this.pLimInferiorEdad.alias = this.langMng.translateText(
            'cls_DetalleTarifa_svc_TMODIFICAR_inArg_pLimInferiorEdad',
            'Lim. inferior edad');
        this.pLimInferiorEdad.mandatory = true;
        this.pLimInferiorEdad.dataType = Field.dtInt;
        this.pLimInferiorEdad.assignCSS();
        this.fields.push(this.pLimInferiorEdad);

        this.pLimSuperiorEdad.nameInRequest = 'plimsuperioredad';
        this.pLimSuperiorEdad.alias = this.langMng.translateText(
            'cls_DetalleTarifa_svc_TMODIFICAR_inArg_pLimSuperiorEdad',
            'Lim. superior edad');
        this.pLimSuperiorEdad.mandatory = true;
        this.pLimSuperiorEdad.dataType = Field.dtInt;
        this.pLimSuperiorEdad.assignCSS();
        this.fields.push(this.pLimSuperiorEdad);

        this.pValor.nameInRequest = 'pvalor';
        this.pValor.alias = this.langMng.translateText(
            'cls_DetalleTarifa_svc_TMODIFICAR_inArg_pValor',
            'Valor');
        this.pValor.mandatory = true;
        this.pValor.dataType = Field.dtReal;
        this.pValor.assignCSS();
        this.fields.push(this.pValor);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['DetalleTarifa'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisDetalleTarifa.setValue(this.context.exchangeInfo.selectedOids);
            this.setOidFieldsValueputhisDetalleTarifa();
            this.executeDependecyRulesputhisdetalletarifa('SetValue', true);
            this.puthisDetalleTarifa.enabled = false;
            this.executeDependecyRulesputhisdetalletarifa('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisDetalleTarifa'.toLowerCase()) {
            this.puthisDetalleTarifa.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueputhisDetalleTarifa();
            this.executeDependecyRulesputhisdetalletarifa('SetValue', false);
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
     * Evaluate dependendy rules for p_thisDetalleTarifa argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisdetalletarifa(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisdetalletarifa();
        }
        if ('SetValue' === event && this.puthisDetalleTarifa.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisDetalleTarifa();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisDetalleTarifa argument
     */
    private setSuppInfoputhisdetalletarifa(): void {

        const displaySetIC = 'id_DetalleTarifa';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisDetalleTarifa.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Detalletarifa.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueputhisDetalleTarifa();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisDetalleTarifa.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Detalletarifa.name,
                            value.oid, displaySetIC, [Field.dtAuto]);
                    }
                }
                this.setOidFieldsValueputhisDetalleTarifa();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisDetalleTarifa argument
     */
    private executeDependecyRules1puthisDetalleTarifa(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisDetalleTarifa,
                'anyo,liminferioredad,limsuperioredad,tarifa.plant.Plan,tarifa.productot.Producto,tarifa.tipocontrato,valor');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisDetalleTarifaActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisDetalleTarifa argument
     */
    private executeDependecyRules1puthisDetalleTarifaActions(): void {
        const varputhisdetalletarifa = this.getFirstInstanceFromCache(this.puthisDetalleTarifa);
        // v <> NULL
        if (varputhisdetalletarifa && !this.util.isNull(varputhisdetalletarifa)) {
            // p_thisDetalleTarifa.SetVisible( FALSE )
            this.puthisDetalleTarifa.visible = false;
            // pAnyo.SetValue( v.anyo )
            this.pAnyo.setValue(this.util.getInt(varputhisdetalletarifa.get('anyo')));
            // pLimInferiorEdad.SetValue( v.liminferioredad )
            this.pLimInferiorEdad.setValue(this.util.getInt(varputhisdetalletarifa.get('liminferioredad')));
            // pLimSuperiorEdad.SetValue( v.limsuperioredad )
            this.pLimSuperiorEdad.setValue(this.util.getInt(varputhisdetalletarifa.get('limsuperioredad')));
            // pPlan.SetValue( v.tarifa.plant )
            this.pPlan.setValue(this.util.oidBuilder.buildOidPlanes(
                this.util.getInt(varputhisdetalletarifa.get('tarifa.plant.Plan'))));
            this.executeDependecyRulespplan('SetValue', true);
            // pPlan.SetActive( FALSE )
            this.pPlan.enabled = false;
            this.executeDependecyRulespplan('SetActive', true);
            // pProducto.SetValue( v.tarifa.productot )
            this.pProducto.setValue(this.util.oidBuilder.buildOidProductos(
                this.util.getInt(varputhisdetalletarifa.get('tarifa.productot.Producto'))));
            this.executeDependecyRulespproducto('SetValue', true);
            // pProducto.SetActive( FALSE )
            this.pProducto.enabled = false;
            this.executeDependecyRulespproducto('SetActive', true);
            // pTipoContrato.SetValue( v.tarifa.tipocontrato )
            this.pTipoContrato.setValue(this.util.getInt(varputhisdetalletarifa.get('tarifa.tipocontrato')));
            // pTipoContrato.SetActive( FALSE )
            this.pTipoContrato.enabled = false;
            // pValor.SetValue( v.valor )
            this.pValor.setValue(this.util.getReal(varputhisdetalletarifa.get('valor')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Set values to the Oid fields and supplementary information of p_thisDetalleTarifa lense argument
    */
    private setOidFieldsValueputhisDetalleTarifa(): void {
        if (this.puthisDetalleTarifa.getSelectedInstances().length > 0) {
            if (this.puthisDetalleTarifa.getSelectedInstances().length > 1) {
                this.puthisDetalleTarifa.oidFields = [null];
                this.puthisDetalleTarifa.editorsEnabled = false;
                this.puthisDetalleTarifa.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.puthisDetalleTarifa.getSelectedInstances().length.toString());
            } else {
                this.puthisDetalleTarifa.editorsEnabled = true;
                this.puthisDetalleTarifa.oidFields[0] = this.puthisDetalleTarifa.getSelectedInstances()[0].oid.id_detalletarifa;
                this.puthisDetalleTarifa.supplementaryInfo = this.puthisDetalleTarifa.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.puthisDetalleTarifa.oidFields = Array(1);
            this.puthisDetalleTarifa.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the p_thisDetalleTarifa lense argument
     */
    public onputhisdetalletarifaChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.puthisDetalleTarifa.oidFields) {
            if (!field) {
                fieldsHasValue = false;
                break;
            }
        }

        this.puthisDetalleTarifa.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            id_detalletarifa: this.puthisDetalleTarifa.oidFields[0]
            };
            this.puthisDetalleTarifa.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Detalletarifa.name, oid,
                'id_DetalleTarifa');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.puthisDetalleTarifa.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Detalletarifa.name, value.oid)) {
                        this.puthisDetalleTarifa.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.puthisDetalleTarifa.alias));
                        this.puthisDetalleTarifa.cleanSelectedInstances();
                        this.puthisDetalleTarifa.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesputhisdetalletarifa('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean p_thisDetalleTarifa argument value
     */
    public cleanputhisdetalletarifa(): void {
        this.clearValidationMessages();
        this.puthisDetalleTarifa.clean();
        this.puthisDetalleTarifa.oidFields = Array(1);
        this.executeDependecyRulesputhisdetalletarifa('SetValue', false);
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
        if ('puthisDetalleTarifa'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisDetalleTarifa.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_DetallesTarifa';
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
