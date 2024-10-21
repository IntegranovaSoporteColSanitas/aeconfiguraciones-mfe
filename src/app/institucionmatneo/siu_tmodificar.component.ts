import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldDefinedSelection, FieldOVLenseSearch, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-institucionmatneo-siu-tmodificar',
    templateUrl: './siu_tmodificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstitucionMatNeoSIUuTMODIFICARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisInstitucionMatNeo: FieldOVLenseSearch;
    public ptupuevcMunicipio: FieldOVLenseSearch;
    public ptupuevcTarifa: FieldOVLenseSearch;
    public ptupuevcTipoIdentificacion: FieldOVPreload;
    public ptupuNumIdentificacion: Field;
    public ptupuNombre: Field;
    public ptupuParaMaternidad: FieldDefinedSelection;
    public ptupuParaNeonatal: FieldDefinedSelection;
    public ptupuFechaInicial: Field;
    public ptupuFechaFinal: Field;

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
        this.idXML = 'Clas_1463993499648846Ser_9UIServ_1';
        this.className = ModelConstants.Institucionmatneo.name;
        this.iuName = ModelConstants.Institucionmatneo.siuutmodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TMODIFICAR';
        this.title = this.langMng.translateText('cls_InstitucionMatNeo_svc_TMODIFICAR',
            'Modificar');

        // Create inbound argument components
        this.puthisInstitucionMatNeo = new FieldOVLenseSearch(this.langMng);
        this.ptupuevcMunicipio = new FieldOVLenseSearch(this.langMng);
        this.ptupuevcTarifa = new FieldOVLenseSearch(this.langMng);
        this.ptupuevcTipoIdentificacion = new FieldOVPreload(this.langMng);
        this.ptupuNumIdentificacion = new Field(this.langMng);
        this.ptupuNombre = new Field(this.langMng);
        this.ptupuParaMaternidad = new FieldDefinedSelection(this.langMng);
        this.ptupuParaNeonatal = new FieldDefinedSelection(this.langMng);
        this.ptupuFechaInicial = new Field(this.langMng);
        this.ptupuFechaFinal = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisInstitucionMatNeo.nameInRequest = 'p_thisinstitucionmatneo';
        this.puthisInstitucionMatNeo.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_svc_TMODIFICAR_inArg_p_thisInstitucionMatNeo',
            'Institución Maternal/Neonatal');
        this.puthisInstitucionMatNeo.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisInstitucionMatNeo.mandatory = true;
        this.puthisInstitucionMatNeo.dataType = ModelConstants.Institucionmatneo.name;
        this.puthisInstitucionMatNeo.maxLength = 100;
        this.puthisInstitucionMatNeo.assignCSS();
        this.fields.push(this.puthisInstitucionMatNeo);

        this.ptupuevcMunicipio.nameInRequest = 'pt_p_evcmunicipio';
        this.ptupuevcMunicipio.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_svc_TMODIFICAR_inArg_pt_p_evcMunicipio',
            'Municipio');
        this.ptupuevcMunicipio.mandatory = true;
        this.ptupuevcMunicipio.dataType = ModelConstants.Municipio.name;
        this.ptupuevcMunicipio.maxLength = 150;
        this.ptupuevcMunicipio.assignCSS();
        this.fields.push(this.ptupuevcMunicipio);

        this.ptupuevcTarifa.nameInRequest = 'pt_p_evctarifa';
        this.ptupuevcTarifa.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_svc_TMODIFICAR_inArg_pt_p_evcTarifa',
            'Tarifa');
        this.ptupuevcTarifa.mandatory = true;
        this.ptupuevcTarifa.dataType = ModelConstants.Tarifa.name;
        this.ptupuevcTarifa.maxLength = 262;
        this.ptupuevcTarifa.assignCSS();
        this.fields.push(this.ptupuevcTarifa);

        this.ptupuevcTipoIdentificacion.nameInRequest = 'pt_p_evctipoidentificacion';
        this.ptupuevcTipoIdentificacion.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_svc_TMODIFICAR_inArg_pt_p_evcTipoIdentificacion',
            'Tipo Identificacion');
        this.ptupuevcTipoIdentificacion.mandatory = true;
        this.ptupuevcTipoIdentificacion.dataType = ModelConstants.Tipoidentificacion.name;
        this.ptupuevcTipoIdentificacion.maxLength = 170;
        this.ptupuevcTipoIdentificacion.assignCSS();
        this.fields.push(this.ptupuevcTipoIdentificacion);

        this.ptupuNumIdentificacion.nameInRequest = 'pt_p_numidentificacion';
        this.ptupuNumIdentificacion.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_svc_TMODIFICAR_inArg_pt_p_NumIdentificacion',
            'Nº Identificación');
        this.ptupuNumIdentificacion.mandatory = true;
        this.ptupuNumIdentificacion.dataType = Field.dtString;
        this.ptupuNumIdentificacion.maxLength = 60;
        this.ptupuNumIdentificacion.assignCSS();
        this.fields.push(this.ptupuNumIdentificacion);

        this.ptupuNombre.nameInRequest = 'pt_p_nombre';
        this.ptupuNombre.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_svc_TMODIFICAR_inArg_pt_p_Nombre',
            'Nombre de la Sucursal');
        this.ptupuNombre.mandatory = true;
        this.ptupuNombre.dataType = Field.dtString;
        this.ptupuNombre.maxLength = 100;
        this.ptupuNombre.assignCSS();
        this.fields.push(this.ptupuNombre);

        this.ptupuParaMaternidad.nameInRequest = 'pt_p_paramaternidad';
        this.ptupuParaMaternidad.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_svc_TMODIFICAR_inArg_pt_p_ParaMaternidad',
            'Maternidad');
        this.ptupuParaMaternidad.mandatory = true;
        this.ptupuParaMaternidad.dataType = Field.dtBool;
        this.ptupuParaMaternidad.options = DefinedSelections.DS_SINO;
        this.ptupuParaMaternidad.value = false;
        this.ptupuParaMaternidad.assignCSS();
        this.fields.push(this.ptupuParaMaternidad);

        this.ptupuParaNeonatal.nameInRequest = 'pt_p_paraneonatal';
        this.ptupuParaNeonatal.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_svc_TMODIFICAR_inArg_pt_p_ParaNeonatal',
            'Neonatal');
        this.ptupuParaNeonatal.mandatory = true;
        this.ptupuParaNeonatal.dataType = Field.dtBool;
        this.ptupuParaNeonatal.options = DefinedSelections.DS_SINO;
        this.ptupuParaNeonatal.value = false;
        this.ptupuParaNeonatal.assignCSS();
        this.fields.push(this.ptupuParaNeonatal);

        this.ptupuFechaInicial.nameInRequest = 'pt_p_fechainicial';
        this.ptupuFechaInicial.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_svc_TMODIFICAR_inArg_pt_p_FechaInicial',
            'Fecha inicial');
        this.ptupuFechaInicial.mandatory = true;
        this.ptupuFechaInicial.dataType = Field.dtDate;
        this.ptupuFechaInicial.assignCSS();
        this.fields.push(this.ptupuFechaInicial);

        this.ptupuFechaFinal.nameInRequest = 'pt_p_fechafinal';
        this.ptupuFechaFinal.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_svc_TMODIFICAR_inArg_pt_p_FechaFinal',
            'Fecha final');
        this.ptupuFechaFinal.mandatory = true;
        this.ptupuFechaFinal.dataType = Field.dtDate;
        this.ptupuFechaFinal.assignCSS();
        this.fields.push(this.ptupuFechaFinal);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['InstitucionMatNeo'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisInstitucionMatNeo.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisinstitucionmatneo('SetValue', true);
            this.puthisInstitucionMatNeo.enabled = false;
            this.executeDependecyRulesputhisinstitucionmatneo('SetEnabled', true);
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
            if (lastRole === 'Municipio') {
                this.ptupuevcMunicipio.setValue(lastRoleOid);
                this.executeDependecyRulesptupuevcmunicipio('SetValue', true);
                this.ptupuevcMunicipio.enabled = false;
                this.executeDependecyRulesptupuevcmunicipio('SetEnabled', true);
            }
            if (lastRole === 'Tarifa') {
                this.ptupuevcTarifa.setValue(lastRoleOid);
                this.executeDependecyRulesptupuevctarifa('SetValue', true);
                this.ptupuevcTarifa.enabled = false;
                this.executeDependecyRulesptupuevctarifa('SetEnabled', true);
            }
            if (lastRole === 'TipoIdentificacion') {
                this.ptupuevcTipoIdentificacion.setValue(lastRoleOid);
                this.ptupuevcTipoIdentificacion.enabled = false;
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptupuevcTipoIdentificacion
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('TipoIdentificacion', 'IC_TipoIdentificacion', [], null, 'OC_TipoIdentificacion').then(
            (response: any) => {
                if (response && response.results) {
                    this.ptupuevcTipoIdentificacion.loadPreload(response.results);
                } else {
                    this.ptupuevcTipoIdentificacion.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.notifyAnswerFromToTheBackEnd();
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.processErrorInLoadPreload(response.resultDescription);
            }
        );
        this.numberOfPendingPreload++;
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisInstitucionMatNeo'.toLowerCase()) {
            this.puthisInstitucionMatNeo.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisinstitucionmatneo('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuevcMunicipio'.toLowerCase()) {
            this.ptupuevcMunicipio.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptupuevcmunicipio('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuevcTarifa'.toLowerCase()) {
            this.ptupuevcTarifa.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptupuevctarifa('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisInstitucionMatNeo argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisinstitucionmatneo(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisinstitucionmatneo();
        }
        if ('SetValue' === event && this.puthisInstitucionMatNeo.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisInstitucionMatNeo();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisInstitucionMatNeo argument
     */
    private setSuppInfoputhisinstitucionmatneo(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisInstitucionMatNeo.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Institucionmatneo.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisInstitucionMatNeo.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisInstitucionMatNeo.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Institucionmatneo.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisInstitucionMatNeo.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisInstitucionMatNeo argument
     */
    private executeDependecyRules1puthisInstitucionMatNeo(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisInstitucionMatNeo,
                'numidentificacion,nombre,paramaternidad,paraneonatal,fechainicial,fechafinal,municipio.Codigo,tarifa.Id' +
                ',tipoidentificacion.Codigo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisInstitucionMatNeoActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisInstitucionMatNeo argument
     */
    private executeDependecyRules1puthisInstitucionMatNeoActions(): void {
        const varputhisinstitucionmatneo = this.getFirstInstanceFromCache(this.puthisInstitucionMatNeo);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhisinstitucionmatneo && !this.util.isNull(varputhisinstitucionmatneo)) {
            // pt_p_NumIdentificacion.SetValue( v.numidentificacion )
            this.ptupuNumIdentificacion.setValue(varputhisinstitucionmatneo.get('numidentificacion'));
            // pt_p_Nombre.SetValue( v.nombre )
            this.ptupuNombre.setValue(varputhisinstitucionmatneo.get('nombre'));
            // pt_p_ParaMaternidad.SetValue( v.paramaternidad )
            this.ptupuParaMaternidad.setValue(this.util.getBool(varputhisinstitucionmatneo.get('paramaternidad')));
            // pt_p_ParaNeonatal.SetValue( v.paraneonatal )
            this.ptupuParaNeonatal.setValue(this.util.getBool(varputhisinstitucionmatneo.get('paraneonatal')));
            // pt_p_FechaInicial.SetValue( v.fechainicial )
            this.ptupuFechaInicial.setValue(this.util.getDate(varputhisinstitucionmatneo.get('fechainicial')));
            // pt_p_FechaFinal.SetValue( v.fechafinal )
            this.ptupuFechaFinal.setValue(this.util.getDate(varputhisinstitucionmatneo.get('fechafinal')));
            // pt_p_evcMunicipio.SetValue( v.municipio )
            this.ptupuevcMunicipio.setValue(this.util.oidBuilder.buildOidMunicipio(
                this.util.getInt(varputhisinstitucionmatneo.get('municipio.Codigo'))));
            this.executeDependecyRulesptupuevcmunicipio('SetValue', true);
            // pt_p_evcTarifa.SetValue( v.tarifa )
            this.ptupuevcTarifa.setValue(this.util.oidBuilder.buildOidTarifa(
                this.util.getInt(varputhisinstitucionmatneo.get('tarifa.Id'))));
            this.executeDependecyRulesptupuevctarifa('SetValue', true);
            // pt_p_evcTipoIdentificacion.SetValue( v.tipoidentificacion )
            this.ptupuevcTipoIdentificacion.setValue(this.util.oidBuilder.buildOidTipoIdentificacion(
                this.util.getInt(varputhisinstitucionmatneo.get('tipoidentificacion.Codigo'))));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisInstitucionMatNeo lense search argument
     */
    public onputhisinstitucionmatneoChange(): void {

        const searchText = this.puthisInstitucionMatNeo.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisInstitucionMatNeo.lastText) {
                this.puthisInstitucionMatNeo.removeCSSClass('noResultsLenseSearch');
                this.puthisInstitucionMatNeo.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Institucionmatneo.name, 'IC_InstitucionMatNeo', searchText, [], null).then(
                        (response: any) => {
                            this.puthisInstitucionMatNeo.removeCSSClass('noResultsLenseSearch');
                            this.puthisInstitucionMatNeo.searchResults = response.results;
                            if (this.puthisInstitucionMatNeo.searchResults &&
                                this.puthisInstitucionMatNeo.searchResults.length === 0) {
                                this.puthisInstitucionMatNeo.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisInstitucionMatNeo.searchResults &&
                                this.puthisInstitucionMatNeo.searchResults.length === 1) {
                                this.processputhisinstitucionmatneoSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisInstitucionMatNeo.removeCSSClass('noResultsLenseSearch');
                            this.puthisInstitucionMatNeo.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisInstitucionMatNeo.removeCSSClass('noResultsLenseSearch');
            this.puthisInstitucionMatNeo.searchResults = [];
            this.cleanputhisinstitucionmatneo();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisInstitucionMatNeo lense search argument
     */
    public processputhisinstitucionmatneoSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisInstitucionMatNeo.searchResults.length > index) {
            selectedInstance = this.puthisInstitucionMatNeo.searchResults[index];
        }
        // Clean the result list
        this.puthisInstitucionMatNeo.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisInstitucionMatNeo.allowMultiSelect) {
                this.puthisInstitucionMatNeo.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisInstitucionMatNeo.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisinstitucionmatneo('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisInstitucionMatNeo lense search argument
     */
    public cleanputhisinstitucionmatneo(): void {
        this.clearValidationMessages();
        this.puthisInstitucionMatNeo.clean();
        this.executeDependecyRulesputhisinstitucionmatneo('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_evcMunicipio argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuevcmunicipio(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptupuevcmunicipio();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_evcMunicipio argument
     */
    private setSuppInfoptupuevcmunicipio(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.ptupuevcMunicipio.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Municipio.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptupuevcMunicipio.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptupuevcMunicipio.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Municipio.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptupuevcMunicipio.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the pt_p_evcMunicipio lense search argument
     */
    public onptupuevcmunicipioChange(): void {

        const searchText = this.ptupuevcMunicipio.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.ptupuevcMunicipio.lastText) {
                this.ptupuevcMunicipio.removeCSSClass('noResultsLenseSearch');
                this.ptupuevcMunicipio.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Municipio.name, 'IC_Municipio', searchText, [], null).then(
                        (response: any) => {
                            this.ptupuevcMunicipio.removeCSSClass('noResultsLenseSearch');
                            this.ptupuevcMunicipio.searchResults = response.results;
                            if (this.ptupuevcMunicipio.searchResults &&
                                this.ptupuevcMunicipio.searchResults.length === 0) {
                                this.ptupuevcMunicipio.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.ptupuevcMunicipio.searchResults &&
                                this.ptupuevcMunicipio.searchResults.length === 1) {
                                this.processptupuevcmunicipioSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.ptupuevcMunicipio.removeCSSClass('noResultsLenseSearch');
                            this.ptupuevcMunicipio.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.ptupuevcMunicipio.removeCSSClass('noResultsLenseSearch');
            this.ptupuevcMunicipio.searchResults = [];
            this.cleanptupuevcmunicipio();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_evcMunicipio lense search argument
     */
    public processptupuevcmunicipioSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptupuevcMunicipio.searchResults.length > index) {
            selectedInstance = this.ptupuevcMunicipio.searchResults[index];
        }
        // Clean the result list
        this.ptupuevcMunicipio.searchResults = [];
        if (selectedInstance) {
            if (!this.ptupuevcMunicipio.allowMultiSelect) {
                this.ptupuevcMunicipio.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptupuevcMunicipio.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesptupuevcmunicipio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_evcMunicipio lense search argument
     */
    public cleanptupuevcmunicipio(): void {
        this.clearValidationMessages();
        this.ptupuevcMunicipio.clean();
        this.executeDependecyRulesptupuevcmunicipio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_evcTarifa argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuevctarifa(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptupuevctarifa();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_evcTarifa argument
     */
    private setSuppInfoptupuevctarifa(): void {

        const displaySetIC = 'ProductoT.Descripcion,PlanT.Nombre,Codigo';
        let numberMissingSupInfo = 0;
        for (const value of this.ptupuevcTarifa.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Tarifa.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptupuevcTarifa.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptupuevcTarifa.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Tarifa.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString, Field.dtString]);
                    }
                }
                this.ptupuevcTarifa.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the pt_p_evcTarifa lense search argument
     */
    public onptupuevctarifaChange(): void {

        const searchText = this.ptupuevcTarifa.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.ptupuevcTarifa.lastText) {
                this.ptupuevcTarifa.removeCSSClass('noResultsLenseSearch');
                this.ptupuevcTarifa.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Tarifa.name, 'IC_Tarifa', searchText, [], null).then(
                        (response: any) => {
                            this.ptupuevcTarifa.removeCSSClass('noResultsLenseSearch');
                            this.ptupuevcTarifa.searchResults = response.results;
                            if (this.ptupuevcTarifa.searchResults &&
                                this.ptupuevcTarifa.searchResults.length === 0) {
                                this.ptupuevcTarifa.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.ptupuevcTarifa.searchResults &&
                                this.ptupuevcTarifa.searchResults.length === 1) {
                                this.processptupuevctarifaSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.ptupuevcTarifa.removeCSSClass('noResultsLenseSearch');
                            this.ptupuevcTarifa.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.ptupuevcTarifa.removeCSSClass('noResultsLenseSearch');
            this.ptupuevcTarifa.searchResults = [];
            this.cleanptupuevctarifa();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_evcTarifa lense search argument
     */
    public processptupuevctarifaSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptupuevcTarifa.searchResults.length > index) {
            selectedInstance = this.ptupuevcTarifa.searchResults[index];
        }
        // Clean the result list
        this.ptupuevcTarifa.searchResults = [];
        if (selectedInstance) {
            if (!this.ptupuevcTarifa.allowMultiSelect) {
                this.ptupuevcTarifa.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptupuevcTarifa.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesptupuevctarifa('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_evcTarifa lense search argument
     */
    public cleanptupuevctarifa(): void {
        this.clearValidationMessages();
        this.ptupuevcTarifa.clean();
        this.executeDependecyRulesptupuevctarifa('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisInstitucionMatNeo'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisInstitucionMatNeo.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_InstitucionMatNeo';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('ptupuevcMunicipio'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuevcMunicipio.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Municipio';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('ptupuevcTarifa'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuevcTarifa.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Tarifas';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
