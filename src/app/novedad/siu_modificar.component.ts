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
    selector: 'imes-novedad-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NovedadSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisNovedad: FieldOVLenseSearch;
    public puDescripcion: Field;
    public puCodigoLegal: Field;
    public puReqDocPersona: FieldDefinedSelection;
    public puReqDocSolicitud: FieldDefinedSelection;
    public puVariasFamilias: FieldDefinedSelection;
    public puNombre: Field;
    public puMinValorMeses: Field;
    public puMaxValorMeses: Field;

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
        this.idXML = 'Clas_1581412253696713Ser_3UIServ_1';
        this.className = ModelConstants.Novedad.name;
        this.iuName = ModelConstants.Novedad.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_Novedad_svc_modificar',
            'Modificar');

        // Create inbound argument components
        this.puthisNovedad = new FieldOVLenseSearch(this.langMng);
        this.puDescripcion = new Field(this.langMng);
        this.puCodigoLegal = new Field(this.langMng);
        this.puReqDocPersona = new FieldDefinedSelection(this.langMng);
        this.puReqDocSolicitud = new FieldDefinedSelection(this.langMng);
        this.puVariasFamilias = new FieldDefinedSelection(this.langMng);
        this.puNombre = new Field(this.langMng);
        this.puMinValorMeses = new Field(this.langMng);
        this.puMaxValorMeses = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisNovedad.nameInRequest = 'p_thisnovedad';
        this.puthisNovedad.alias = this.langMng.translateText(
            'cls_Novedad_svc_modificar_inArg_p_thisNovedad',
            'Novedad');
        this.puthisNovedad.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisNovedad.mandatory = true;
        this.puthisNovedad.dataType = ModelConstants.Novedad.name;
        this.puthisNovedad.maxLength = 50;
        this.puthisNovedad.assignCSS();
        this.fields.push(this.puthisNovedad);

        this.puDescripcion.nameInRequest = 'p_descripcion';
        this.puDescripcion.alias = this.langMng.translateText(
            'cls_Novedad_svc_modificar_inArg_p_Descripcion',
            'Descripción');
        this.puDescripcion.mandatory = true;
        this.puDescripcion.dataType = Field.dtString;
        this.puDescripcion.maxLength = 200;
        this.puDescripcion.assignCSS();
        this.fields.push(this.puDescripcion);

        this.puCodigoLegal.nameInRequest = 'p_codigolegal';
        this.puCodigoLegal.alias = this.langMng.translateText(
            'cls_Novedad_svc_modificar_inArg_p_CodigoLegal',
            'Código Legal');
        this.puCodigoLegal.mandatory = true;
        this.puCodigoLegal.dataType = Field.dtString;
        this.puCodigoLegal.maxLength = 5;
        this.puCodigoLegal.assignCSS();
        this.fields.push(this.puCodigoLegal);

        this.puReqDocPersona.nameInRequest = 'p_reqdocpersona';
        this.puReqDocPersona.alias = this.langMng.translateText(
            'cls_Novedad_svc_modificar_inArg_p_ReqDocPersona',
            'Requiere doc. persona');
        this.puReqDocPersona.mandatory = true;
        this.puReqDocPersona.dataType = Field.dtBool;
        this.puReqDocPersona.options = DefinedSelections.DS_SINO;
        this.puReqDocPersona.value = false;
        this.puReqDocPersona.assignCSS();
        this.fields.push(this.puReqDocPersona);

        this.puReqDocSolicitud.nameInRequest = 'p_reqdocsolicitud';
        this.puReqDocSolicitud.alias = this.langMng.translateText(
            'cls_Novedad_svc_modificar_inArg_p_ReqDocSolicitud',
            'Requiere doc. solicitud');
        this.puReqDocSolicitud.mandatory = true;
        this.puReqDocSolicitud.dataType = Field.dtBool;
        this.puReqDocSolicitud.options = DefinedSelections.DS_SINO;
        this.puReqDocSolicitud.value = false;
        this.puReqDocSolicitud.assignCSS();
        this.fields.push(this.puReqDocSolicitud);

        this.puVariasFamilias.nameInRequest = 'p_variasfamilias';
        this.puVariasFamilias.alias = this.langMng.translateText(
            'cls_Novedad_svc_modificar_inArg_p_VariasFamilias',
            'Varias familias');
        this.puVariasFamilias.mandatory = true;
        this.puVariasFamilias.dataType = Field.dtBool;
        this.puVariasFamilias.options = DefinedSelections.DS_SINO;
        this.puVariasFamilias.value = false;
        this.puVariasFamilias.assignCSS();
        this.fields.push(this.puVariasFamilias);

        this.puNombre.nameInRequest = 'p_nombre';
        this.puNombre.alias = this.langMng.translateText(
            'cls_Novedad_svc_modificar_inArg_p_Nombre',
            'Nombre');
        this.puNombre.mandatory = true;
        this.puNombre.dataType = Field.dtString;
        this.puNombre.maxLength = 50;
        this.puNombre.assignCSS();
        this.fields.push(this.puNombre);

        this.puMinValorMeses.nameInRequest = 'p_minvalormeses';
        this.puMinValorMeses.alias = this.langMng.translateText(
            'cls_Novedad_svc_modificar_inArg_p_MinValorMeses',
            'Valor mínimo meses');
        this.puMinValorMeses.mandatory = false;
        this.puMinValorMeses.dataType = Field.dtNat;
        this.puMinValorMeses.assignCSS();
        this.fields.push(this.puMinValorMeses);

        this.puMaxValorMeses.nameInRequest = 'p_maxvalormeses';
        this.puMaxValorMeses.alias = this.langMng.translateText(
            'cls_Novedad_svc_modificar_inArg_p_MaxValorMeses',
            'Valor máximo meses');
        this.puMaxValorMeses.mandatory = false;
        this.puMaxValorMeses.dataType = Field.dtNat;
        this.puMaxValorMeses.assignCSS();
        this.fields.push(this.puMaxValorMeses);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Novedad'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisNovedad.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisnovedad('SetValue', true);
            this.puthisNovedad.enabled = false;
            this.executeDependecyRulesputhisnovedad('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisNovedad'.toLowerCase()) {
            this.puthisNovedad.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisnovedad('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisNovedad argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisnovedad(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisnovedad();
        }
        if ('SetValue' === event && this.puthisNovedad.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisNovedad();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2puthisNovedad();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisNovedad argument
     */
    private setSuppInfoputhisnovedad(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisNovedad.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Novedad.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisNovedad.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisNovedad.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Novedad.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisNovedad.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisNovedad argument
     */
    private executeDependecyRules1puthisNovedad(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisNovedad,
                'descripcion,codigolegal,reqdocpersona,reqdocsolicitud,variasfamilias,nombre,minvalormeses,maxvalormeses');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisNovedadActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisNovedad argument
     */
    private executeDependecyRules1puthisNovedadActions(): void {
        const varputhisnovedad = this.getFirstInstanceFromCache(this.puthisNovedad);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhisnovedad && !this.util.isNull(varputhisnovedad)) {
            // p_Descripcion.SetValue( v.descripcion )
            this.puDescripcion.setValue(varputhisnovedad?.get('descripcion'));
            // p_CodigoLegal.SetValue( v.codigolegal )
            this.puCodigoLegal.setValue(varputhisnovedad?.get('codigolegal'));
            // p_ReqDocPersona.SetValue( v.reqdocpersona )
            this.puReqDocPersona.setValue(this.util.getBool(varputhisnovedad?.get('reqdocpersona')));
            // p_ReqDocSolicitud.SetValue( v.reqdocsolicitud )
            this.puReqDocSolicitud.setValue(this.util.getBool(varputhisnovedad?.get('reqdocsolicitud')));
            // p_VariasFamilias.SetValue( v.variasfamilias )
            this.puVariasFamilias.setValue(this.util.getBool(varputhisnovedad?.get('variasfamilias')));
            // p_Nombre.SetValue( v.nombre )
            this.puNombre.setValue(varputhisnovedad?.get('nombre'));
            // p_MinValorMeses.SetValue( v.MinValorMeses )
            this.puMinValorMeses.setValue(this.util.getInt(varputhisnovedad?.get('minvalormeses')));
            // p_MaxValorMeses.SetValue( v.MaxValorMeses )
            this.puMaxValorMeses.setValue(this.util.getInt(varputhisnovedad?.get('maxvalormeses')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for p_thisNovedad argument
     */
    private executeDependecyRules2puthisNovedad(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisNovedad,
                'tiponovedad.tipo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules2puthisNovedadActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for p_thisNovedad argument
     */
    private executeDependecyRules2puthisNovedadActions(): void {
        const varputhisnovedad = this.getFirstInstanceFromCache(this.puthisNovedad);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL AND v.tiponovedad.tipo = 0
        if (varputhisnovedad && !this.util.isNull(varputhisnovedad) &&
            this.util.valueEquals(this.util.getInt(varputhisnovedad?.get('tiponovedad.tipo')), 0)) {
            // p_VariasFamilias.SetActive( FALSE )
            this.puVariasFamilias.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisNovedad lense search argument
     */
    public onputhisnovedadChange(): void {

        const searchText = this.puthisNovedad.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisNovedad.lastText) {
                this.puthisNovedad.removeCSSClass('noResultsLenseSearch');
                this.puthisNovedad.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Novedad.name, 'IC_Novedad', searchText, [], null).then(
                        (response: any) => {
                            this.puthisNovedad.removeCSSClass('noResultsLenseSearch');
                            this.puthisNovedad.searchResults = response.results;
                            if (this.puthisNovedad.searchResults &&
                                this.puthisNovedad.searchResults.length === 0) {
                                this.puthisNovedad.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisNovedad.searchResults &&
                                this.puthisNovedad.searchResults.length === 1) {
                                this.processputhisnovedadSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisNovedad.removeCSSClass('noResultsLenseSearch');
                            this.puthisNovedad.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisNovedad.removeCSSClass('noResultsLenseSearch');
            this.puthisNovedad.searchResults = [];
            this.cleanputhisnovedad();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisNovedad lense search argument
     */
    public processputhisnovedadSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisNovedad.searchResults.length > index) {
            selectedInstance = this.puthisNovedad.searchResults[index];
        }
        // Clean the result list
        this.puthisNovedad.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisNovedad.allowMultiSelect) {
                this.puthisNovedad.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisNovedad.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisnovedad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisNovedad lense search argument
     */
    public cleanputhisnovedad(): void {
        this.clearValidationMessages();
        this.puthisNovedad.clean();
        this.executeDependecyRulesputhisnovedad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisNovedad'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisNovedad.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Novedad';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
