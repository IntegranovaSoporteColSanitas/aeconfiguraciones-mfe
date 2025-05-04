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
    selector: 'imes-grupoasignacion-siu-taddusuario',
    templateUrl: './siu_taddusuario.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrupoAsignacionSIUuTADDUSUARIOComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisGrupoAsignacion: FieldOVLenseSearch;
    public ptFuncionario: FieldOVLenseSearch;
    public ptAreaMedica: FieldOVLenseSearch;

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
        this.idXML = 'Clas_1586850168832947Ser_17UIServ_1';
        this.className = ModelConstants.Grupoasignacion.name;
        this.iuName = ModelConstants.Grupoasignacion.siuutaddusuario;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TADDUSUARIO';
        this.title = this.langMng.translateText('cls_GrupoAsignacion_svc_TADDUSUARIO',
            'Agregar Usuario');

        // Create inbound argument components
        this.puthisGrupoAsignacion = new FieldOVLenseSearch(this.langMng);
        this.ptFuncionario = new FieldOVLenseSearch(this.langMng);
        this.ptAreaMedica = new FieldOVLenseSearch(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisGrupoAsignacion.nameInRequest = 'p_thisgrupoasignacion';
        this.puthisGrupoAsignacion.alias = this.langMng.translateText(
            'cls_GrupoAsignacion_svc_TADDUSUARIO_inArg_p_thisGrupoAsignacion',
            'Grupo de Asignación');
        this.puthisGrupoAsignacion.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisGrupoAsignacion.mandatory = true;
        this.puthisGrupoAsignacion.dataType = ModelConstants.Grupoasignacion.name;
        this.puthisGrupoAsignacion.maxLength = 50;
        this.puthisGrupoAsignacion.assignCSS();
        this.fields.push(this.puthisGrupoAsignacion);

        this.ptFuncionario.nameInRequest = 'ptfuncionario';
        this.ptFuncionario.alias = this.langMng.translateText(
            'cls_GrupoAsignacion_svc_TADDUSUARIO_inArg_ptFuncionario',
            'Asesor Integral / Afiliaciones');
        this.ptFuncionario.mandatory = false;
        this.ptFuncionario.dataType = ModelConstants.Funcionario.name;
        this.ptFuncionario.allowMultiSelect = true;
        this.ptFuncionario.maxLength = 50;
        this.ptFuncionario.assignCSS();
        this.fields.push(this.ptFuncionario);

        this.ptAreaMedica.nameInRequest = 'ptareamedica';
        this.ptAreaMedica.alias = this.langMng.translateText(
            'cls_GrupoAsignacion_svc_TADDUSUARIO_inArg_ptAreaMedica',
            'Área Médica');
        this.ptAreaMedica.mandatory = false;
        this.ptAreaMedica.dataType = ModelConstants.Areamedica.name;
        this.ptAreaMedica.maxLength = 50;
        this.ptAreaMedica.assignCSS();
        this.fields.push(this.ptAreaMedica);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['GrupoAsignacion'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisGrupoAsignacion.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisgrupoasignacion('SetValue', true);
            this.puthisGrupoAsignacion.enabled = false;
            this.executeDependecyRulesputhisgrupoasignacion('SetEnabled', true);
        }
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
            if (lastRole === 'Funcionario') {
                this.ptFuncionario.setValue(lastRoleOid);
                this.executeDependecyRulesptfuncionario('SetValue', true);
                this.ptFuncionario.enabled = false;
                this.executeDependecyRulesptfuncionario('SetEnabled', true);
            }
            if (lastRole === 'Funcionario') {
                this.ptAreaMedica.setValue(lastRoleOid);
                this.executeDependecyRulesptareamedica('SetValue', true);
                this.ptAreaMedica.enabled = false;
                this.executeDependecyRulesptareamedica('SetEnabled', true);
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
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisGrupoAsignacion'.toLowerCase()) {
            this.puthisGrupoAsignacion.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisgrupoasignacion('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'ptFuncionario'.toLowerCase()) {
            this.ptFuncionario.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptfuncionario('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'ptAreaMedica'.toLowerCase()) {
            this.ptAreaMedica.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptareamedica('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisGrupoAsignacion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisgrupoasignacion(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisgrupoasignacion();
        }
        if ('SetValue' === event && this.puthisGrupoAsignacion.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisGrupoAsignacion();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2puthisGrupoAsignacion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisGrupoAsignacion argument
     */
    private setSuppInfoputhisgrupoasignacion(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisGrupoAsignacion.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Grupoasignacion.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisGrupoAsignacion.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisGrupoAsignacion.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Grupoasignacion.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisGrupoAsignacion.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisGrupoAsignacion argument
     */
    private executeDependecyRules1puthisGrupoAsignacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisGrupoAsignacion,
                'tipo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisGrupoAsignacionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisGrupoAsignacion argument
     */
    private executeDependecyRules1puthisGrupoAsignacionActions(): void {
        const varputhisgrupoasignacion = this.getFirstInstanceFromCache(this.puthisGrupoAsignacion);
        // v <> NULL AND v.Tipo = 1
        if (varputhisgrupoasignacion && !this.util.isNull(varputhisgrupoasignacion) &&
            this.util.valueEquals(this.util.getInt(varputhisgrupoasignacion.get('tipo')), 1)) {
            // ptFuncionario.SetVisible( TRUE )
            this.ptFuncionario.visible = true;
            // ptFuncionario.SetMandatory( TRUE )
            this.ptFuncionario.mandatory = true;
            // ptAreaMedica.SetVisible( FALSE )
            this.ptAreaMedica.visible = false;
            // ptAreaMedica.SetMandatory( FALSE )
            this.ptAreaMedica.mandatory = false;
            // ptAreaMedica.SetValue( NULL )
            this.ptAreaMedica.setValue(null);
            this.executeDependecyRulesptareamedica('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for p_thisGrupoAsignacion argument
     */
    private executeDependecyRules2puthisGrupoAsignacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisGrupoAsignacion,
                'tipo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2puthisGrupoAsignacionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for p_thisGrupoAsignacion argument
     */
    private executeDependecyRules2puthisGrupoAsignacionActions(): void {
        const varputhisgrupoasignacion = this.getFirstInstanceFromCache(this.puthisGrupoAsignacion);
        // v <> NULL AND v.Tipo = 2
        if (varputhisgrupoasignacion && !this.util.isNull(varputhisgrupoasignacion) &&
            this.util.valueEquals(this.util.getInt(varputhisgrupoasignacion.get('tipo')), 2)) {
            // ptFuncionario.SetVisible( FALSE )
            this.ptFuncionario.visible = false;
            // ptFuncionario.SetMandatory( FALSE )
            this.ptFuncionario.mandatory = false;
            // ptFuncionario.SetValue( NULL )
            this.ptFuncionario.setValue(null);
            this.executeDependecyRulesptfuncionario('SetValue', true);
            // ptAreaMedica.SetVisible( TRUE )
            this.ptAreaMedica.visible = true;
            // ptAreaMedica.SetMandatory( TRUE )
            this.ptAreaMedica.mandatory = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisGrupoAsignacion lense search argument
     */
    public onputhisgrupoasignacionChange(): void {

        const searchText = this.puthisGrupoAsignacion.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisGrupoAsignacion.lastText) {
                this.puthisGrupoAsignacion.removeCSSClass('noResultsLenseSearch');
                this.puthisGrupoAsignacion.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Grupoasignacion.name, 'IC_GrupoAsignacion', searchText, [], null).then(
                        (response: any) => {
                            this.puthisGrupoAsignacion.removeCSSClass('noResultsLenseSearch');
                            this.puthisGrupoAsignacion.searchResults = response.results;
                            if (this.puthisGrupoAsignacion.searchResults &&
                                this.puthisGrupoAsignacion.searchResults.length === 0) {
                                this.puthisGrupoAsignacion.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisGrupoAsignacion.searchResults &&
                                this.puthisGrupoAsignacion.searchResults.length === 1) {
                                this.processputhisgrupoasignacionSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisGrupoAsignacion.removeCSSClass('noResultsLenseSearch');
                            this.puthisGrupoAsignacion.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisGrupoAsignacion.removeCSSClass('noResultsLenseSearch');
            this.puthisGrupoAsignacion.searchResults = [];
            this.cleanputhisgrupoasignacion();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisGrupoAsignacion lense search argument
     */
    public processputhisgrupoasignacionSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisGrupoAsignacion.searchResults.length > index) {
            selectedInstance = this.puthisGrupoAsignacion.searchResults[index];
        }
        // Clean the result list
        this.puthisGrupoAsignacion.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisGrupoAsignacion.allowMultiSelect) {
                this.puthisGrupoAsignacion.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisGrupoAsignacion.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisgrupoasignacion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisGrupoAsignacion lense search argument
     */
    public cleanputhisgrupoasignacion(): void {
        this.clearValidationMessages();
        this.puthisGrupoAsignacion.clean();
        this.executeDependecyRulesputhisgrupoasignacion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptFuncionario argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptfuncionario(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptfuncionario();
        }
        if ('SetValue' === event && this.ptFuncionario.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && internal) {
            this.executeDependecyRules1ptFuncionario();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the ptFuncionario argument
     */
    private setSuppInfoptfuncionario(): void {

        const displaySetIC = 'UsuarioLDAP';
        let numberMissingSupInfo = 0;
        for (const value of this.ptFuncionario.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Funcionario.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptFuncionario.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptFuncionario.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Funcionario.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptFuncionario.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for ptFuncionario argument
     */
    private executeDependecyRules1ptFuncionario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptFuncionario,
                'Id');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptFuncionarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptFuncionario argument
     */
    private executeDependecyRules1ptFuncionarioActions(): void {
        const varptfuncionario = this.getFirstInstanceFromCache(this.ptFuncionario);
        // v <> NULL
        if (varptfuncionario && !this.util.isNull(varptfuncionario)) {
            // ptFuncionario.SetValue( NULL )
            this.ptFuncionario.setValue(null);
            this.executeDependecyRulesptfuncionario('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the ptFuncionario lense search argument
     */
    public onptfuncionarioChange(): void {

        const searchText = this.ptFuncionario.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.ptFuncionario.lastText) {
                const navFilters: string[] = [];
                navFilters.push('GrupoAsignacion_TADDUSUARIO_ptFuncionario_NavFilter0');
                navFilters.push('GrupoAsignacion_TADDUSUARIO_ptFuncionario_NavFilter1');
                this.ptFuncionario.removeCSSClass('noResultsLenseSearch');
                this.ptFuncionario.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Funcionario.name, 'IC_UsuarioLDAP', searchText, navFilters,
                    this.getNavigationFilterVariables()).then(
                        (response: any) => {
                            this.ptFuncionario.removeCSSClass('noResultsLenseSearch');
                            this.ptFuncionario.searchResults = response.results;
                            if (this.ptFuncionario.searchResults &&
                                this.ptFuncionario.searchResults.length === 0) {
                                this.ptFuncionario.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.ptFuncionario.searchResults &&
                                this.ptFuncionario.searchResults.length === 1) {
                                this.processptfuncionarioSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.ptFuncionario.removeCSSClass('noResultsLenseSearch');
                            this.ptFuncionario.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.ptFuncionario.removeCSSClass('noResultsLenseSearch');
            this.ptFuncionario.searchResults = [];
            this.cleanptfuncionario();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the ptFuncionario lense search argument
     */
    public processptfuncionarioSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptFuncionario.searchResults.length > index) {
            selectedInstance = this.ptFuncionario.searchResults[index];
        }
        // Clean the result list
        this.ptFuncionario.searchResults = [];
        if (selectedInstance) {
            if (!this.ptFuncionario.allowMultiSelect) {
                this.ptFuncionario.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptFuncionario.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesptfuncionario('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the ptFuncionario lense search argument
     */
    public cleanptfuncionario(): void {
        this.clearValidationMessages();
        this.ptFuncionario.clean();
        this.executeDependecyRulesptfuncionario('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptAreaMedica argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptareamedica(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptareamedica();
        }
        if ('SetValue' === event && this.ptAreaMedica.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && internal) {
            this.executeDependecyRules1ptAreaMedica();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the ptAreaMedica argument
     */
    private setSuppInfoptareamedica(): void {

        const displaySetIC = 'UsuarioLDAP';
        let numberMissingSupInfo = 0;
        for (const value of this.ptAreaMedica.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Areamedica.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptAreaMedica.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptAreaMedica.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Areamedica.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptAreaMedica.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for ptAreaMedica argument
     */
    private executeDependecyRules1ptAreaMedica(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptAreaMedica,
                'Id');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptAreaMedicaActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptAreaMedica argument
     */
    private executeDependecyRules1ptAreaMedicaActions(): void {
        const varptareamedica = this.getFirstInstanceFromCache(this.ptAreaMedica);
        // v <> NULL
        if (varptareamedica && !this.util.isNull(varptareamedica)) {
            // ptAreaMedica.SetValue( NULL )
            this.ptAreaMedica.setValue(null);
            this.executeDependecyRulesptareamedica('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the ptAreaMedica lense search argument
     */
    public onptareamedicaChange(): void {

        const searchText = this.ptAreaMedica.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.ptAreaMedica.lastText) {
                this.ptAreaMedica.removeCSSClass('noResultsLenseSearch');
                this.ptAreaMedica.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Areamedica.name, 'SIAreaMedica', searchText, [], null).then(
                        (response: any) => {
                            this.ptAreaMedica.removeCSSClass('noResultsLenseSearch');
                            this.ptAreaMedica.searchResults = response.results;
                            if (this.ptAreaMedica.searchResults &&
                                this.ptAreaMedica.searchResults.length === 0) {
                                this.ptAreaMedica.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.ptAreaMedica.searchResults &&
                                this.ptAreaMedica.searchResults.length === 1) {
                                this.processptareamedicaSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.ptAreaMedica.removeCSSClass('noResultsLenseSearch');
                            this.ptAreaMedica.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.ptAreaMedica.removeCSSClass('noResultsLenseSearch');
            this.ptAreaMedica.searchResults = [];
            this.cleanptareamedica();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the ptAreaMedica lense search argument
     */
    public processptareamedicaSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptAreaMedica.searchResults.length > index) {
            selectedInstance = this.ptAreaMedica.searchResults[index];
        }
        // Clean the result list
        this.ptAreaMedica.searchResults = [];
        if (selectedInstance) {
            if (!this.ptAreaMedica.allowMultiSelect) {
                this.ptAreaMedica.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptAreaMedica.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesptareamedica('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the ptAreaMedica lense search argument
     */
    public cleanptareamedica(): void {
        this.clearValidationMessages();
        this.ptAreaMedica.clean();
        this.executeDependecyRulesptareamedica('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisGrupoAsignacion'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisGrupoAsignacion.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_GrupoAsignacion';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('ptFuncionario'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptFuncionario.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Funcionario_GrupoUsuarios';
            exchInfo.navigationalFilterIdentity = [];
            exchInfo.navigationalFilterIdentity.push('GrupoAsignacion_TADDUSUARIO_ptFuncionario_NavFilter0');
            exchInfo.navigationalFilterIdentity.push('GrupoAsignacion_TADDUSUARIO_ptFuncionario_NavFilter1');
            exchInfo.navigationalFilterVariables = this.getNavigationFilterVariables();
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('ptAreaMedica'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptAreaMedica.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_AreaMedica_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
