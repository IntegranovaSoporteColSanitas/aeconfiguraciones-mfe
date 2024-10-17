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
    selector: 'imes-grupoasociado-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrupoAsociadoSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puagrProductoT: FieldOVLenseSearch;
    public puagrPlanT: FieldOVLenseSearch;
    public puatrCodigoLegal: Field;
    public puatrDescripcion: Field;
    public puatrFIniVigencia: Field;
    public puatrFFinVigencia: Field;
    public puatrEstado: Field;
    public puatrDisminucionCarencia: Field;
    public puatrCodTarifaCORE: Field;
    public puatrCodigo: Field;

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
        this.idXML = 'Clas_1431875354624341Ser_1UIServ_1';
        this.className = ModelConstants.Grupoasociado.name;
        this.iuName = ModelConstants.Grupoasociado.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_GrupoAsociado_svc_crear',
            'Crear grupo asociado');

        // Create inbound argument components
        this.puagrProductoT = new FieldOVLenseSearch(this.langMng);
        this.puagrPlanT = new FieldOVLenseSearch(this.langMng);
        this.puatrCodigoLegal = new Field(this.langMng);
        this.puatrDescripcion = new Field(this.langMng);
        this.puatrFIniVigencia = new Field(this.langMng);
        this.puatrFFinVigencia = new Field(this.langMng);
        this.puatrEstado = new Field(this.langMng);
        this.puatrDisminucionCarencia = new Field(this.langMng);
        this.puatrCodTarifaCORE = new Field(this.langMng);
        this.puatrCodigo = new Field(this.langMng);

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
            'cls_GrupoAsociado_svc_crear_inArg_p_agrProductoT',
            'Producto');
        this.puagrProductoT.mandatory = true;
        this.puagrProductoT.dataType = ModelConstants.Productos.name;
        this.puagrProductoT.maxLength = 100;
        this.puagrProductoT.assignCSS();
        this.fields.push(this.puagrProductoT);

        this.puagrPlanT.nameInRequest = 'p_agrplant';
        this.puagrPlanT.alias = this.langMng.translateText(
            'cls_GrupoAsociado_svc_crear_inArg_p_agrPlanT',
            'Plan');
        this.puagrPlanT.mandatory = true;
        this.puagrPlanT.dataType = ModelConstants.Planes.name;
        this.puagrPlanT.maxLength = 150;
        this.puagrPlanT.assignCSS();
        this.fields.push(this.puagrPlanT);

        this.puatrCodigoLegal.nameInRequest = 'p_atrcodigolegal';
        this.puatrCodigoLegal.alias = this.langMng.translateText(
            'cls_GrupoAsociado_svc_crear_inArg_p_atrCodigoLegal',
            'Código legal');
        this.puatrCodigoLegal.mandatory = true;
        this.puatrCodigoLegal.dataType = Field.dtString;
        this.puatrCodigoLegal.maxLength = 50;
        this.puatrCodigoLegal.assignCSS();
        this.fields.push(this.puatrCodigoLegal);

        this.puatrDescripcion.nameInRequest = 'p_atrdescripcion';
        this.puatrDescripcion.alias = this.langMng.translateText(
            'cls_GrupoAsociado_svc_crear_inArg_p_atrDescripcion',
            'Descripción');
        this.puatrDescripcion.mandatory = true;
        this.puatrDescripcion.dataType = Field.dtString;
        this.puatrDescripcion.maxLength = 150;
        this.puatrDescripcion.assignCSS();
        this.fields.push(this.puatrDescripcion);

        this.puatrFIniVigencia.nameInRequest = 'p_atrfinivigencia';
        this.puatrFIniVigencia.alias = this.langMng.translateText(
            'cls_GrupoAsociado_svc_crear_inArg_p_atrFIniVigencia',
            'F. Inicio Vigencia');
        this.puatrFIniVigencia.mandatory = true;
        this.puatrFIniVigencia.dataType = Field.dtDate;
        this.puatrFIniVigencia.assignCSS();
        this.fields.push(this.puatrFIniVigencia);

        this.puatrFFinVigencia.nameInRequest = 'p_atrffinvigencia';
        this.puatrFFinVigencia.alias = this.langMng.translateText(
            'cls_GrupoAsociado_svc_crear_inArg_p_atrFFinVigencia',
            'F. Fin Vigencia');
        this.puatrFFinVigencia.mandatory = true;
        this.puatrFFinVigencia.dataType = Field.dtDate;
        this.puatrFFinVigencia.assignCSS();
        this.fields.push(this.puatrFFinVigencia);

        this.puatrEstado.nameInRequest = 'p_atrestado';
        this.puatrEstado.alias = this.langMng.translateText(
            'cls_GrupoAsociado_svc_crear_inArg_p_atrEstado',
            'Estado');
        this.puatrEstado.mandatory = true;
        this.puatrEstado.dataType = Field.dtInt;
        this.puatrEstado.assignCSS();
        this.fields.push(this.puatrEstado);

        this.puatrDisminucionCarencia.nameInRequest = 'p_atrdisminucioncarencia';
        this.puatrDisminucionCarencia.alias = this.langMng.translateText(
            'cls_GrupoAsociado_svc_crear_inArg_p_atrDisminucionCarencia',
            'Disminución carencia');
        this.puatrDisminucionCarencia.mandatory = true;
        this.puatrDisminucionCarencia.dataType = Field.dtNat;
        this.puatrDisminucionCarencia.assignCSS();
        this.fields.push(this.puatrDisminucionCarencia);

        this.puatrCodTarifaCORE.nameInRequest = 'p_atrcodtarifacore';
        this.puatrCodTarifaCORE.alias = this.langMng.translateText(
            'cls_GrupoAsociado_svc_crear_inArg_p_atrCodTarifaCORE',
            'Cod. Tarifa CORE');
        this.puatrCodTarifaCORE.mandatory = false;
        this.puatrCodTarifaCORE.dataType = Field.dtString;
        this.puatrCodTarifaCORE.maxLength = 50;
        this.puatrCodTarifaCORE.assignCSS();
        this.fields.push(this.puatrCodTarifaCORE);

        this.puatrCodigo.nameInRequest = 'p_atrcodigo';
        this.puatrCodigo.alias = this.langMng.translateText(
            'cls_GrupoAsociado_svc_crear_inArg_p_atrCodigo',
            'Código');
        this.puatrCodigo.mandatory = true;
        this.puatrCodigo.dataType = Field.dtInt;
        this.puatrCodigo.assignCSS();
        this.fields.push(this.puatrCodigo);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // p_atrDisminucionCarencia
            const defValpuatrDisminucionCarencia = new Promise<void>((resolveDefValue) => {
                this.puatrDisminucionCarencia.setValue(0);
                resolveDefValue();
            });
            promiseArr.push(defValpuatrDisminucionCarencia);

            Promise.all(promiseArr).then((results: any[]) => {
                this.util.hideWaitDialog();
                this.changeDetectorRef.markForCheck();
                resolve();
            });
        });
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
            if (lastRole === 'PlanT') {
                this.puagrPlanT.setValue(lastRoleOid);
                this.executeDependecyRulespuagrplant('SetValue', true);
                this.puagrPlanT.enabled = false;
                this.executeDependecyRulespuagrplant('SetEnabled', true);
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

        if (exchInfo.originArgumentName.toLowerCase() === 'puagrPlanT'.toLowerCase()) {
            this.puagrPlanT.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespuagrplant('SetValue', false);
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
     * Evaluate dependendy rules for p_agrPlanT argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuagrplant(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopuagrplant();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_agrPlanT argument
     */
    private setSuppInfopuagrplant(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puagrPlanT.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Planes.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puagrPlanT.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puagrPlanT.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Planes.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puagrPlanT.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the p_agrPlanT lense search argument
     */
    public onpuagrplantChange(): void {

        const searchText = this.puagrPlanT.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puagrPlanT.lastText) {
                this.puagrPlanT.removeCSSClass('noResultsLenseSearch');
                this.puagrPlanT.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Planes.name, 'IC_Plan', searchText, [], null).then(
                        (response: any) => {
                            this.puagrPlanT.removeCSSClass('noResultsLenseSearch');
                            this.puagrPlanT.searchResults = response.results;
                            if (this.puagrPlanT.searchResults &&
                                this.puagrPlanT.searchResults.length === 0) {
                                this.puagrPlanT.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puagrPlanT.searchResults &&
                                this.puagrPlanT.searchResults.length === 1) {
                                this.processpuagrplantSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puagrPlanT.removeCSSClass('noResultsLenseSearch');
                            this.puagrPlanT.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puagrPlanT.removeCSSClass('noResultsLenseSearch');
            this.puagrPlanT.searchResults = [];
            this.cleanpuagrplant();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_agrPlanT lense search argument
     */
    public processpuagrplantSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puagrPlanT.searchResults.length > index) {
            selectedInstance = this.puagrPlanT.searchResults[index];
        }
        // Clean the result list
        this.puagrPlanT.searchResults = [];
        if (selectedInstance) {
            if (!this.puagrPlanT.allowMultiSelect) {
                this.puagrPlanT.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puagrPlanT.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespuagrplant('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_agrPlanT lense search argument
     */
    public cleanpuagrplant(): void {
        this.clearValidationMessages();
        this.puagrPlanT.clean();
        this.executeDependecyRulespuagrplant('SetValue', false);
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
        if ('puagrPlanT'.toLowerCase() === argumentName.toLowerCase()) {
            this.puagrPlanT.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Planes_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
