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
    selector: 'imes-tipoiva-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipoIVASIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisTipoIVA: FieldOVLenseSearch;
    public puDescripcion: Field;
    public puPorcentaje: Field;
    public puFechaInicio: Field;
    public puFechaFin: Field;

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
        this.idXML = 'Clas_1431882432512691Ser_7UIServ_1';
        this.className = ModelConstants.Tipoiva.name;
        this.iuName = ModelConstants.Tipoiva.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_TipoIVA_svc_modificar',
            'Modificar');

        // Create inbound argument components
        this.puthisTipoIVA = new FieldOVLenseSearch(this.langMng);
        this.puDescripcion = new Field(this.langMng);
        this.puPorcentaje = new Field(this.langMng);
        this.puFechaInicio = new Field(this.langMng);
        this.puFechaFin = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisTipoIVA.nameInRequest = 'p_thistipoiva';
        this.puthisTipoIVA.alias = this.langMng.translateText(
            'cls_TipoIVA_svc_modificar_inArg_p_thisTipoIVA',
            'Tipo I.V.A');
        this.puthisTipoIVA.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisTipoIVA.mandatory = true;
        this.puthisTipoIVA.dataType = ModelConstants.Tipoiva.name;
        this.puthisTipoIVA.maxLength = 150;
        this.puthisTipoIVA.assignCSS();
        this.fields.push(this.puthisTipoIVA);

        this.puDescripcion.nameInRequest = 'p_descripcion';
        this.puDescripcion.alias = this.langMng.translateText(
            'cls_TipoIVA_svc_modificar_inArg_p_Descripcion',
            'Descripción');
        this.puDescripcion.mandatory = true;
        this.puDescripcion.dataType = Field.dtString;
        this.puDescripcion.maxLength = 150;
        this.puDescripcion.assignCSS();
        this.fields.push(this.puDescripcion);

        this.puPorcentaje.nameInRequest = 'p_porcentaje';
        this.puPorcentaje.alias = this.langMng.translateText(
            'cls_TipoIVA_svc_modificar_inArg_p_Porcentaje',
            'Porcentaje');
        this.puPorcentaje.mandatory = true;
        this.puPorcentaje.dataType = Field.dtReal;
        this.puPorcentaje.assignCSS();
        this.fields.push(this.puPorcentaje);

        this.puFechaInicio.nameInRequest = 'p_fechainicio';
        this.puFechaInicio.alias = this.langMng.translateText(
            'cls_TipoIVA_svc_modificar_inArg_p_FechaInicio',
            'Fecha Inicio');
        this.puFechaInicio.mandatory = true;
        this.puFechaInicio.dataType = Field.dtDate;
        this.puFechaInicio.assignCSS();
        this.fields.push(this.puFechaInicio);

        this.puFechaFin.nameInRequest = 'p_fechafin';
        this.puFechaFin.alias = this.langMng.translateText(
            'cls_TipoIVA_svc_modificar_inArg_p_FechaFin',
            'Fecha Fin');
        this.puFechaFin.mandatory = true;
        this.puFechaFin.dataType = Field.dtDate;
        this.puFechaFin.assignCSS();
        this.fields.push(this.puFechaFin);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['TipoIVA'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisTipoIVA.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhistipoiva('SetValue', true);
            this.puthisTipoIVA.enabled = false;
            this.executeDependecyRulesputhistipoiva('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisTipoIVA'.toLowerCase()) {
            this.puthisTipoIVA.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhistipoiva('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisTipoIVA argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhistipoiva(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhistipoiva();
        }
        if ('SetValue' === event && this.puthisTipoIVA.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisTipoIVA();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisTipoIVA argument
     */
    private setSuppInfoputhistipoiva(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisTipoIVA.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Tipoiva.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisTipoIVA.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisTipoIVA.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Tipoiva.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisTipoIVA.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisTipoIVA argument
     */
    private executeDependecyRules1puthisTipoIVA(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisTipoIVA,
                'descripcion,porcentaje,fechainicio,fechafin');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisTipoIVAActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisTipoIVA argument
     */
    private executeDependecyRules1puthisTipoIVAActions(): void {
        const varputhistipoiva = this.getFirstInstanceFromCache(this.puthisTipoIVA);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhistipoiva && !this.util.isNull(varputhistipoiva)) {
            // p_Descripcion.SetValue( v.Descripcion )
            this.puDescripcion.setValue(varputhistipoiva?.get('descripcion'));
            // p_Porcentaje.SetValue( v.Porcentaje )
            this.puPorcentaje.setValue(this.util.getReal(varputhistipoiva?.get('porcentaje')));
            // p_FechaInicio.SetValue( v.FechaInicio )
            this.puFechaInicio.setValue(this.util.getDate(varputhistipoiva?.get('fechainicio')));
            // p_FechaFin.SetValue( v.FechaFin )
            this.puFechaFin.setValue(this.util.getDate(varputhistipoiva?.get('fechafin')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisTipoIVA lense search argument
     */
    public onputhistipoivaChange(): void {

        const searchText = this.puthisTipoIVA.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisTipoIVA.lastText) {
                this.puthisTipoIVA.removeCSSClass('noResultsLenseSearch');
                this.puthisTipoIVA.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Tipoiva.name, 'IC_TipoIVA', searchText, [], null).then(
                        (response: any) => {
                            this.puthisTipoIVA.removeCSSClass('noResultsLenseSearch');
                            this.puthisTipoIVA.searchResults = response.results;
                            if (this.puthisTipoIVA.searchResults &&
                                this.puthisTipoIVA.searchResults.length === 0) {
                                this.puthisTipoIVA.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisTipoIVA.searchResults &&
                                this.puthisTipoIVA.searchResults.length === 1) {
                                this.processputhistipoivaSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisTipoIVA.removeCSSClass('noResultsLenseSearch');
                            this.puthisTipoIVA.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisTipoIVA.removeCSSClass('noResultsLenseSearch');
            this.puthisTipoIVA.searchResults = [];
            this.cleanputhistipoiva();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisTipoIVA lense search argument
     */
    public processputhistipoivaSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisTipoIVA.searchResults.length > index) {
            selectedInstance = this.puthisTipoIVA.searchResults[index];
        }
        // Clean the result list
        this.puthisTipoIVA.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisTipoIVA.allowMultiSelect) {
                this.puthisTipoIVA.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisTipoIVA.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhistipoiva('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisTipoIVA lense search argument
     */
    public cleanputhistipoiva(): void {
        this.clearValidationMessages();
        this.puthisTipoIVA.clean();
        this.executeDependecyRulesputhistipoiva('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisTipoIVA'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisTipoIVA.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_TipoIVA';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
