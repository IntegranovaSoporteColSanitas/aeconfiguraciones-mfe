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
    selector: 'imes-grupoasociado-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrupoAsociadoSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisGrupoAsociado: FieldOVLenseSearch;
    public puDisminucionCarencia: Field;

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
        this.idXML = 'Clas_1431875354624341Ser_10UIServ_1';
        this.className = ModelConstants.Grupoasociado.name;
        this.iuName = ModelConstants.Grupoasociado.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_GrupoAsociado_svc_modificar',
            'Modificar grupo asociado');

        // Create inbound argument components
        this.puthisGrupoAsociado = new FieldOVLenseSearch(this.langMng);
        this.puDisminucionCarencia = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisGrupoAsociado.nameInRequest = 'p_thisgrupoasociado';
        this.puthisGrupoAsociado.alias = this.langMng.translateText(
            'cls_GrupoAsociado_svc_modificar_inArg_p_thisGrupoAsociado',
            'Grupo Asociado');
        this.puthisGrupoAsociado.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisGrupoAsociado.mandatory = true;
        this.puthisGrupoAsociado.dataType = ModelConstants.Grupoasociado.name;
        this.puthisGrupoAsociado.maxLength = 200;
        this.puthisGrupoAsociado.assignCSS();
        this.fields.push(this.puthisGrupoAsociado);

        this.puDisminucionCarencia.nameInRequest = 'p_disminucioncarencia';
        this.puDisminucionCarencia.alias = this.langMng.translateText(
            'cls_GrupoAsociado_svc_modificar_inArg_p_DisminucionCarencia',
            'Disminución carencia');
        this.puDisminucionCarencia.mandatory = true;
        this.puDisminucionCarencia.dataType = Field.dtNat;
        this.puDisminucionCarencia.assignCSS();
        this.fields.push(this.puDisminucionCarencia);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // p_DisminucionCarencia
            const defValpuDisminucionCarencia = new Promise<void>((resolveDefValue) => {
                this.puDisminucionCarencia.setValue(0);
                resolveDefValue();
            });
            promiseArr.push(defValpuDisminucionCarencia);

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
            ['GrupoAsociado'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisGrupoAsociado.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisgrupoasociado('SetValue', true);
            this.puthisGrupoAsociado.enabled = false;
            this.executeDependecyRulesputhisgrupoasociado('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisGrupoAsociado'.toLowerCase()) {
            this.puthisGrupoAsociado.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisgrupoasociado('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisGrupoAsociado argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisgrupoasociado(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisgrupoasociado();
        }
        if ('SetValue' === event && this.puthisGrupoAsociado.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisGrupoAsociado();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisGrupoAsociado argument
     */
    private setSuppInfoputhisgrupoasociado(): void {

        const displaySetIC = 'CodigoLegal,Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisGrupoAsociado.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Grupoasociado.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisGrupoAsociado.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisGrupoAsociado.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Grupoasociado.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString]);
                    }
                }
                this.puthisGrupoAsociado.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisGrupoAsociado argument
     */
    private executeDependecyRules1puthisGrupoAsociado(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisGrupoAsociado,
                'disminucioncarencia');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisGrupoAsociadoActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisGrupoAsociado argument
     */
    private executeDependecyRules1puthisGrupoAsociadoActions(): void {
        const varputhisgrupoasociado = this.getFirstInstanceFromCache(this.puthisGrupoAsociado);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhisgrupoasociado && !this.util.isNull(varputhisgrupoasociado)) {
            // p_DisminucionCarencia.SetValue( v.disminucioncarencia )
            this.puDisminucionCarencia.setValue(this.util.getInt(varputhisgrupoasociado?.get('disminucioncarencia')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisGrupoAsociado lense search argument
     */
    public onputhisgrupoasociadoChange(): void {

        const searchText = this.puthisGrupoAsociado.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisGrupoAsociado.lastText) {
                this.puthisGrupoAsociado.removeCSSClass('noResultsLenseSearch');
                this.puthisGrupoAsociado.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Grupoasociado.name, 'IC_GrupoAsociado', searchText, [], null).then(
                        (response: any) => {
                            this.puthisGrupoAsociado.removeCSSClass('noResultsLenseSearch');
                            this.puthisGrupoAsociado.searchResults = response.results;
                            if (this.puthisGrupoAsociado.searchResults &&
                                this.puthisGrupoAsociado.searchResults.length === 0) {
                                this.puthisGrupoAsociado.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisGrupoAsociado.searchResults &&
                                this.puthisGrupoAsociado.searchResults.length === 1) {
                                this.processputhisgrupoasociadoSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisGrupoAsociado.removeCSSClass('noResultsLenseSearch');
                            this.puthisGrupoAsociado.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisGrupoAsociado.removeCSSClass('noResultsLenseSearch');
            this.puthisGrupoAsociado.searchResults = [];
            this.cleanputhisgrupoasociado();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisGrupoAsociado lense search argument
     */
    public processputhisgrupoasociadoSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisGrupoAsociado.searchResults.length > index) {
            selectedInstance = this.puthisGrupoAsociado.searchResults[index];
        }
        // Clean the result list
        this.puthisGrupoAsociado.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisGrupoAsociado.allowMultiSelect) {
                this.puthisGrupoAsociado.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisGrupoAsociado.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisgrupoasociado('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisGrupoAsociado lense search argument
     */
    public cleanputhisgrupoasociado(): void {
        this.clearValidationMessages();
        this.puthisGrupoAsociado.clean();
        this.executeDependecyRulesputhisgrupoasociado('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisGrupoAsociado'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisGrupoAsociado.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_GrupoAsociado';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
