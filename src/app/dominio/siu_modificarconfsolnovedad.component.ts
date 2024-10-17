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
    selector: 'imes-dominio-siu-modificarconfsolnovedad',
    templateUrl: './siu_modificarconfsolnovedad.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DominioSIUumodificarConfSolNovedadComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisDominio: FieldOVLenseSearch;
    public puNovExcepcionReqDoc: FieldDefinedSelection;
    public puSolNovColorOscuro: Field;
    public puSolNovColorClaro: Field;
    public puSolNovLogo: Field;

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
        this.idXML = 'Clas_1431701422080423Ser_22UIServ_1';
        this.className = ModelConstants.Dominio.name;
        this.iuName = ModelConstants.Dominio.siuumodificarconfsolnovedad;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificarConfSolNovedad';
        this.title = this.langMng.translateText('cls_Dominio_svc_modificarConfSolNovedad',
            'Modificar configuración Solicitudes de Novedad');

        // Create inbound argument components
        this.puthisDominio = new FieldOVLenseSearch(this.langMng);
        this.puNovExcepcionReqDoc = new FieldDefinedSelection(this.langMng);
        this.puSolNovColorOscuro = new Field(this.langMng);
        this.puSolNovColorClaro = new Field(this.langMng);
        this.puSolNovLogo = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisDominio.nameInRequest = 'p_thisdominio';
        this.puthisDominio.alias = this.langMng.translateText(
            'cls_Dominio_svc_modificarConfSolNovedad_inArg_p_thisDominio',
            'Dominio');
        this.puthisDominio.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisDominio.mandatory = true;
        this.puthisDominio.dataType = ModelConstants.Dominio.name;
        this.puthisDominio.allowMultiSelect = true;
        this.puthisDominio.maxLength = 250;
        this.puthisDominio.assignCSS();
        this.fields.push(this.puthisDominio);

        this.puNovExcepcionReqDoc.nameInRequest = 'p_novexcepcionreqdoc';
        this.puNovExcepcionReqDoc.alias = this.langMng.translateText(
            'cls_Dominio_svc_modificarConfSolNovedad_inArg_p_NovExcepcionReqDoc',
            'Novedades Excepción requiere documentos');
        this.puNovExcepcionReqDoc.mandatory = true;
        this.puNovExcepcionReqDoc.dataType = Field.dtBool;
        this.puNovExcepcionReqDoc.options = DefinedSelections.DS_SINO;
        this.puNovExcepcionReqDoc.assignCSS();
        this.fields.push(this.puNovExcepcionReqDoc);

        this.puSolNovColorOscuro.nameInRequest = 'p_solnovcoloroscuro';
        this.puSolNovColorOscuro.alias = this.langMng.translateText(
            'cls_Dominio_svc_modificarConfSolNovedad_inArg_p_SolNovColorOscuro',
            'Color oscuro');
        this.puSolNovColorOscuro.mandatory = false;
        this.puSolNovColorOscuro.dataType = Field.dtString;
        this.puSolNovColorOscuro.maxLength = 10;
        this.puSolNovColorOscuro.assignCSS();
        this.fields.push(this.puSolNovColorOscuro);

        this.puSolNovColorClaro.nameInRequest = 'p_solnovcolorclaro';
        this.puSolNovColorClaro.alias = this.langMng.translateText(
            'cls_Dominio_svc_modificarConfSolNovedad_inArg_p_SolNovColorClaro',
            'Color claro');
        this.puSolNovColorClaro.mandatory = false;
        this.puSolNovColorClaro.dataType = Field.dtString;
        this.puSolNovColorClaro.maxLength = 10;
        this.puSolNovColorClaro.assignCSS();
        this.fields.push(this.puSolNovColorClaro);

        this.puSolNovLogo.nameInRequest = 'p_solnovlogo';
        this.puSolNovLogo.alias = this.langMng.translateText(
            'cls_Dominio_svc_modificarConfSolNovedad_inArg_p_SolNovLogo',
            'Logo');
        this.puSolNovLogo.mandatory = false;
        this.puSolNovLogo.dataType = Field.dtString;
        this.puSolNovLogo.maxLength = 50;
        this.puSolNovLogo.assignCSS();
        this.fields.push(this.puSolNovLogo);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // p_NovExcepcionReqDoc
            const defValpuNovExcepcionReqDoc = new Promise<void>((resolveDefValue) => {
                this.puNovExcepcionReqDoc.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuNovExcepcionReqDoc);

            Promise.all(promiseArr).then((results: any[]) => {
                this.util.hideWaitDialog();
                this.changeDetectorRef.markForCheck();
                resolve();
            });
        });
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Dominio'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisDominio.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisdominio('SetValue', true);
            this.puthisDominio.enabled = false;
            this.executeDependecyRulesputhisdominio('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisDominio'.toLowerCase()) {
            this.puthisDominio.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisdominio('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisDominio argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisdominio(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisdominio();
        }
        if ('SetValue' === event && this.puthisDominio.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisDominio();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisDominio argument
     */
    private setSuppInfoputhisdominio(): void {

        const displaySetIC = 'ProductoT.Descripcion,PlanT.Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisDominio.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Dominio.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisDominio.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisDominio.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Dominio.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString]);
                    }
                }
                this.puthisDominio.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisDominio argument
     */
    private executeDependecyRules1puthisDominio(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisDominio,
                'novexcepcionreqdoc,solnovcoloroscuro,solnovcolorclaro,solnovlogo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisDominioActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisDominio argument
     */
    private executeDependecyRules1puthisDominioActions(): void {
        const varputhisdominio = this.getFirstInstanceFromCache(this.puthisDominio);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhisdominio && !this.util.isNull(varputhisdominio)) {
            // p_NovExcepcionReqDoc.SetValue( v.novexcepcionreqdoc )
            this.puNovExcepcionReqDoc.setValue(this.util.getBool(varputhisdominio?.get('novexcepcionreqdoc')));
            // p_SolNovColorOscuro.SetValue( v.solnovcoloroscuro )
            this.puSolNovColorOscuro.setValue(varputhisdominio?.get('solnovcoloroscuro'));
            // p_SolNovColorClaro.SetValue( v.solnovcolorclaro )
            this.puSolNovColorClaro.setValue(varputhisdominio?.get('solnovcolorclaro'));
            // p_SolNovLogo.SetValue( v.solnovlogo )
            this.puSolNovLogo.setValue(varputhisdominio?.get('solnovlogo'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisDominio lense search argument
     */
    public onputhisdominioChange(): void {

        const searchText = this.puthisDominio.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisDominio.lastText) {
                this.puthisDominio.removeCSSClass('noResultsLenseSearch');
                this.puthisDominio.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Dominio.name, 'IC_Dominio', searchText, [], null).then(
                        (response: any) => {
                            this.puthisDominio.removeCSSClass('noResultsLenseSearch');
                            this.puthisDominio.searchResults = response.results;
                            if (this.puthisDominio.searchResults &&
                                this.puthisDominio.searchResults.length === 0) {
                                this.puthisDominio.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisDominio.searchResults &&
                                this.puthisDominio.searchResults.length === 1) {
                                this.processputhisdominioSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisDominio.removeCSSClass('noResultsLenseSearch');
                            this.puthisDominio.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisDominio.removeCSSClass('noResultsLenseSearch');
            this.puthisDominio.searchResults = [];
            this.cleanputhisdominio();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisDominio lense search argument
     */
    public processputhisdominioSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisDominio.searchResults.length > index) {
            selectedInstance = this.puthisDominio.searchResults[index];
        }
        // Clean the result list
        this.puthisDominio.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisDominio.allowMultiSelect) {
                this.puthisDominio.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisDominio.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisdominio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisDominio lense search argument
     */
    public cleanputhisdominio(): void {
        this.clearValidationMessages();
        this.puthisDominio.clean();
        this.executeDependecyRulesputhisdominio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisDominio'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisDominio.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Dominio_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
    }

    /**
     * Returns true if all elements contained in the group are visible
     * @param groupId Group id.
     */
    public isGroupVisible(groupId: string): boolean {
        let isVisible = true;

        if (groupId === '2') {
            isVisible = this.puSolNovColorOscuro.visible ||
                this.puSolNovColorClaro.visible ||
                this.puSolNovLogo.visible;
        }
        return isVisible;
    }

    /**
     * Returns the alias group
     * @param groupId Group id
     */
    public getGroupAlias(groupId: string): string {
        let alias = '';

        if (groupId === '2') {
            alias = this.langMng.translateText('2',
                'Configuración de Reporte');
        }
        return alias;
    }
}
