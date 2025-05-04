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
    selector: 'imes-productos-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductosSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisProducto: FieldOVLenseSearch;
    public puCodAnexoMat: Field;
    public puCodAnexoNeo: Field;
    public puNIT: Field;
    public puFechaDocSolicitud: Field;

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
        this.idXML = 'Clas_1431687397376823Ser_3UIServ_1';
        this.className = ModelConstants.Productos.name;
        this.iuName = ModelConstants.Productos.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_Productos_svc_modificar',
            'Modificar producto');

        // Create inbound argument components
        this.puthisProducto = new FieldOVLenseSearch(this.langMng);
        this.puCodAnexoMat = new Field(this.langMng);
        this.puCodAnexoNeo = new Field(this.langMng);
        this.puNIT = new Field(this.langMng);
        this.puFechaDocSolicitud = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisProducto.nameInRequest = 'p_thisproducto';
        this.puthisProducto.alias = this.langMng.translateText(
            'cls_Productos_svc_modificar_inArg_p_thisProducto',
            'Producto');
        this.puthisProducto.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisProducto.mandatory = true;
        this.puthisProducto.dataType = ModelConstants.Productos.name;
        this.puthisProducto.allowMultiSelect = true;
        this.puthisProducto.maxLength = 100;
        this.puthisProducto.assignCSS();
        this.fields.push(this.puthisProducto);

        this.puCodAnexoMat.nameInRequest = 'p_codanexomat';
        this.puCodAnexoMat.alias = this.langMng.translateText(
            'cls_Productos_svc_modificar_inArg_p_CodAnexoMat',
            'Anexo maternidad');
        this.puCodAnexoMat.mandatory = false;
        this.puCodAnexoMat.dataType = Field.dtInt;
        this.puCodAnexoMat.assignCSS();
        this.fields.push(this.puCodAnexoMat);

        this.puCodAnexoNeo.nameInRequest = 'p_codanexoneo';
        this.puCodAnexoNeo.alias = this.langMng.translateText(
            'cls_Productos_svc_modificar_inArg_p_CodAnexoNeo',
            'Anexo neonatal');
        this.puCodAnexoNeo.mandatory = false;
        this.puCodAnexoNeo.dataType = Field.dtInt;
        this.puCodAnexoNeo.assignCSS();
        this.fields.push(this.puCodAnexoNeo);

        this.puNIT.nameInRequest = 'p_nit';
        this.puNIT.alias = this.langMng.translateText(
            'cls_Productos_svc_modificar_inArg_p_NIT',
            'NIT');
        this.puNIT.mandatory = false;
        this.puNIT.dataType = Field.dtString;
        this.puNIT.maxLength = 60;
        this.puNIT.assignCSS();
        this.fields.push(this.puNIT);

        this.puFechaDocSolicitud.nameInRequest = 'p_fechadocsolicitud';
        this.puFechaDocSolicitud.alias = this.langMng.translateText(
            'cls_Productos_svc_modificar_inArg_p_FechaDocSolicitud',
            'Fecha Doc. Solicitud');
        this.puFechaDocSolicitud.mandatory = false;
        this.puFechaDocSolicitud.dataType = Field.dtDate;
        this.puFechaDocSolicitud.assignCSS();
        this.fields.push(this.puFechaDocSolicitud);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Productos'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisProducto.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisproducto('SetValue', true);
            this.puthisProducto.enabled = false;
            this.executeDependecyRulesputhisproducto('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisProducto'.toLowerCase()) {
            this.puthisProducto.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisproducto('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisProducto argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisproducto(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisproducto();
        }
        if ('SetValue' === event && this.puthisProducto.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisProducto();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisProducto argument
     */
    private setSuppInfoputhisproducto(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisProducto.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Productos.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisProducto.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisProducto.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Productos.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisProducto.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisProducto argument
     */
    private executeDependecyRules1puthisProducto(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisProducto,
                'codanexomat,codanexoneo,nit,fechadocsolicitud');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisProductoActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisProducto argument
     */
    private executeDependecyRules1puthisProductoActions(): void {
        const varputhisproducto = this.getFirstInstanceFromCache(this.puthisProducto);
        // v <> NULL
        if (varputhisproducto && !this.util.isNull(varputhisproducto)) {
            // p_CodAnexoMat.SetValue( v.codanexomat )
            this.puCodAnexoMat.setValue(this.util.getInt(varputhisproducto.get('codanexomat')));
            // p_CodAnexoNeo.SetValue( v.codanexoneo )
            this.puCodAnexoNeo.setValue(this.util.getInt(varputhisproducto.get('codanexoneo')));
            // p_NIT.SetValue( v.nit )
            this.puNIT.setValue(varputhisproducto.get('nit'));
            // p_FechaDocSolicitud.SetValue( v.fechadocsolicitud )
            this.puFechaDocSolicitud.setValue(this.util.getDate(varputhisproducto.get('fechadocsolicitud')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisProducto lense search argument
     */
    public onputhisproductoChange(): void {

        const searchText = this.puthisProducto.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisProducto.lastText) {
                this.puthisProducto.removeCSSClass('noResultsLenseSearch');
                this.puthisProducto.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Productos.name, 'IC_Producto', searchText, [], null).then(
                        (response: any) => {
                            this.puthisProducto.removeCSSClass('noResultsLenseSearch');
                            this.puthisProducto.searchResults = response.results;
                            if (this.puthisProducto.searchResults &&
                                this.puthisProducto.searchResults.length === 0) {
                                this.puthisProducto.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisProducto.searchResults &&
                                this.puthisProducto.searchResults.length === 1) {
                                this.processputhisproductoSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisProducto.removeCSSClass('noResultsLenseSearch');
                            this.puthisProducto.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisProducto.removeCSSClass('noResultsLenseSearch');
            this.puthisProducto.searchResults = [];
            this.cleanputhisproducto();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisProducto lense search argument
     */
    public processputhisproductoSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisProducto.searchResults.length > index) {
            selectedInstance = this.puthisProducto.searchResults[index];
        }
        // Clean the result list
        this.puthisProducto.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisProducto.allowMultiSelect) {
                this.puthisProducto.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisProducto.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisproducto('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisProducto lense search argument
     */
    public cleanputhisproducto(): void {
        this.clearValidationMessages();
        this.puthisProducto.clean();
        this.executeDependecyRulesputhisproducto('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisProducto'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisProducto.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Productos_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
