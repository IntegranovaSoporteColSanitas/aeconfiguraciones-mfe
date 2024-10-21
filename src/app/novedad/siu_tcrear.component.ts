import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldDefinedSelection, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-novedad-siu-tcrear',
    templateUrl: './siu_tcrear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NovedadSIUuTCREARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public ptupuagrTipoNovedad: FieldOVPreload;
    public ptupuatrNombre: Field;
    public ptupuatrDescripcion: Field;
    public ptupuatrCodigoLegal: Field;
    public ptupuatrReqDocPersona: FieldDefinedSelection;
    public ptupuatrReqDocSolicitud: FieldDefinedSelection;
    public ptupuatrVariasFamilias: FieldDefinedSelection;
    public ptAliasParaContrato: FieldDefinedSelection;
    public ptAliasParaTitular: FieldDefinedSelection;
    public ptAliasParaUsuario: FieldDefinedSelection;
    public ptupuatrMinValorMeses: Field;
    public ptupuatrMaxValorMeses: Field;
    public ptAlias: Field;

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
        this.idXML = 'Clas_1581412253696713Ser_7UIServ_1';
        this.className = ModelConstants.Novedad.name;
        this.iuName = ModelConstants.Novedad.siuutcrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TCREAR';
        this.title = this.langMng.translateText('cls_Novedad_svc_TCREAR',
            'Crear');

        // Create inbound argument components
        this.ptupuagrTipoNovedad = new FieldOVPreload(this.langMng);
        this.ptupuatrNombre = new Field(this.langMng);
        this.ptupuatrDescripcion = new Field(this.langMng);
        this.ptupuatrCodigoLegal = new Field(this.langMng);
        this.ptupuatrReqDocPersona = new FieldDefinedSelection(this.langMng);
        this.ptupuatrReqDocSolicitud = new FieldDefinedSelection(this.langMng);
        this.ptupuatrVariasFamilias = new FieldDefinedSelection(this.langMng);
        this.ptAliasParaContrato = new FieldDefinedSelection(this.langMng);
        this.ptAliasParaTitular = new FieldDefinedSelection(this.langMng);
        this.ptAliasParaUsuario = new FieldDefinedSelection(this.langMng);
        this.ptupuatrMinValorMeses = new Field(this.langMng);
        this.ptupuatrMaxValorMeses = new Field(this.langMng);
        this.ptAlias = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptupuagrTipoNovedad.nameInRequest = 'pt_p_agrtiponovedad';
        this.ptupuagrTipoNovedad.alias = this.langMng.translateText(
            'cls_Novedad_svc_TCREAR_inArg_pt_p_agrTipoNovedad',
            'Tipo');
        this.ptupuagrTipoNovedad.mandatory = true;
        this.ptupuagrTipoNovedad.dataType = ModelConstants.Tiponovedad.name;
        this.ptupuagrTipoNovedad.maxLength = 50;
        this.ptupuagrTipoNovedad.assignCSS();
        this.fields.push(this.ptupuagrTipoNovedad);

        this.ptupuatrNombre.nameInRequest = 'pt_p_atrnombre';
        this.ptupuatrNombre.alias = this.langMng.translateText(
            'cls_Novedad_svc_TCREAR_inArg_pt_p_atrNombre',
            'Nombre');
        this.ptupuatrNombre.mandatory = true;
        this.ptupuatrNombre.dataType = Field.dtString;
        this.ptupuatrNombre.maxLength = 50;
        this.ptupuatrNombre.assignCSS();
        this.fields.push(this.ptupuatrNombre);

        this.ptupuatrDescripcion.nameInRequest = 'pt_p_atrdescripcion';
        this.ptupuatrDescripcion.alias = this.langMng.translateText(
            'cls_Novedad_svc_TCREAR_inArg_pt_p_atrDescripcion',
            'Descripción');
        this.ptupuatrDescripcion.mandatory = true;
        this.ptupuatrDescripcion.dataType = Field.dtString;
        this.ptupuatrDescripcion.maxLength = 200;
        this.ptupuatrDescripcion.assignCSS();
        this.fields.push(this.ptupuatrDescripcion);

        this.ptupuatrCodigoLegal.nameInRequest = 'pt_p_atrcodigolegal';
        this.ptupuatrCodigoLegal.alias = this.langMng.translateText(
            'cls_Novedad_svc_TCREAR_inArg_pt_p_atrCodigoLegal',
            'Código Legal');
        this.ptupuatrCodigoLegal.mandatory = true;
        this.ptupuatrCodigoLegal.dataType = Field.dtString;
        this.ptupuatrCodigoLegal.maxLength = 5;
        this.ptupuatrCodigoLegal.assignCSS();
        this.fields.push(this.ptupuatrCodigoLegal);

        this.ptupuatrReqDocPersona.nameInRequest = 'pt_p_atrreqdocpersona';
        this.ptupuatrReqDocPersona.alias = this.langMng.translateText(
            'cls_Novedad_svc_TCREAR_inArg_pt_p_atrReqDocPersona',
            'Requiere doc. persona');
        this.ptupuatrReqDocPersona.mandatory = true;
        this.ptupuatrReqDocPersona.dataType = Field.dtBool;
        this.ptupuatrReqDocPersona.options = DefinedSelections.DS_SINO;
        this.ptupuatrReqDocPersona.value = false;
        this.ptupuatrReqDocPersona.assignCSS();
        this.fields.push(this.ptupuatrReqDocPersona);

        this.ptupuatrReqDocSolicitud.nameInRequest = 'pt_p_atrreqdocsolicitud';
        this.ptupuatrReqDocSolicitud.alias = this.langMng.translateText(
            'cls_Novedad_svc_TCREAR_inArg_pt_p_atrReqDocSolicitud',
            'Requiere doc. solicitud');
        this.ptupuatrReqDocSolicitud.mandatory = true;
        this.ptupuatrReqDocSolicitud.dataType = Field.dtBool;
        this.ptupuatrReqDocSolicitud.options = DefinedSelections.DS_SINO;
        this.ptupuatrReqDocSolicitud.value = false;
        this.ptupuatrReqDocSolicitud.assignCSS();
        this.fields.push(this.ptupuatrReqDocSolicitud);

        this.ptupuatrVariasFamilias.nameInRequest = 'pt_p_atrvariasfamilias';
        this.ptupuatrVariasFamilias.alias = this.langMng.translateText(
            'cls_Novedad_svc_TCREAR_inArg_pt_p_atrVariasFamilias',
            'Varias familias');
        this.ptupuatrVariasFamilias.mandatory = true;
        this.ptupuatrVariasFamilias.dataType = Field.dtBool;
        this.ptupuatrVariasFamilias.options = DefinedSelections.DS_SINO;
        this.ptupuatrVariasFamilias.value = false;
        this.ptupuatrVariasFamilias.assignCSS();
        this.fields.push(this.ptupuatrVariasFamilias);

        this.ptAliasParaContrato.nameInRequest = 'ptaliasparacontrato';
        this.ptAliasParaContrato.alias = this.langMng.translateText(
            'cls_Novedad_svc_TCREAR_inArg_ptAliasParaContrato',
            'Alias');
        this.ptAliasParaContrato.mandatory = false;
        this.ptAliasParaContrato.dataType = Field.dtString;
        this.ptAliasParaContrato.options = DefinedSelections.DS_ALIASNOVEDADCONTRATO;
        this.ptAliasParaContrato.maxLength = 2;
        this.ptAliasParaContrato.assignCSS();
        this.fields.push(this.ptAliasParaContrato);

        this.ptAliasParaTitular.nameInRequest = 'ptaliasparatitular';
        this.ptAliasParaTitular.alias = this.langMng.translateText(
            'cls_Novedad_svc_TCREAR_inArg_ptAliasParaTitular',
            'Alias');
        this.ptAliasParaTitular.mandatory = false;
        this.ptAliasParaTitular.dataType = Field.dtString;
        this.ptAliasParaTitular.options = DefinedSelections.DS_ALIASNOVEDADTITULAR;
        this.ptAliasParaTitular.maxLength = 2;
        this.ptAliasParaTitular.assignCSS();
        this.fields.push(this.ptAliasParaTitular);

        this.ptAliasParaUsuario.nameInRequest = 'ptaliasparausuario';
        this.ptAliasParaUsuario.alias = this.langMng.translateText(
            'cls_Novedad_svc_TCREAR_inArg_ptAliasParaUsuario',
            'Alias');
        this.ptAliasParaUsuario.mandatory = false;
        this.ptAliasParaUsuario.dataType = Field.dtString;
        this.ptAliasParaUsuario.options = DefinedSelections.DS_ALIASNOVEDADUSUARIO;
        this.ptAliasParaUsuario.maxLength = 2;
        this.ptAliasParaUsuario.assignCSS();
        this.fields.push(this.ptAliasParaUsuario);

        this.ptupuatrMinValorMeses.nameInRequest = 'pt_p_atrminvalormeses';
        this.ptupuatrMinValorMeses.alias = this.langMng.translateText(
            'cls_Novedad_svc_TCREAR_inArg_pt_p_atrMinValorMeses',
            'Valor mínimo meses');
        this.ptupuatrMinValorMeses.mandatory = false;
        this.ptupuatrMinValorMeses.dataType = Field.dtNat;
        this.ptupuatrMinValorMeses.assignCSS();
        this.fields.push(this.ptupuatrMinValorMeses);

        this.ptupuatrMaxValorMeses.nameInRequest = 'pt_p_atrmaxvalormeses';
        this.ptupuatrMaxValorMeses.alias = this.langMng.translateText(
            'cls_Novedad_svc_TCREAR_inArg_pt_p_atrMaxValorMeses',
            'Valor máximo meses');
        this.ptupuatrMaxValorMeses.mandatory = false;
        this.ptupuatrMaxValorMeses.dataType = Field.dtNat;
        this.ptupuatrMaxValorMeses.assignCSS();
        this.fields.push(this.ptupuatrMaxValorMeses);

        this.ptAlias.nameInRequest = 'ptalias';
        this.ptAlias.alias = this.langMng.translateText(
            'cls_Novedad_svc_TCREAR_inArg_ptAlias',
            'Valor del Alias');
        this.ptAlias.mandatory = true;
        this.ptAlias.dataType = Field.dtString;
        this.ptAlias.maxLength = 2;
        this.ptAlias.assignCSS();
        this.fields.push(this.ptAlias);
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
            if (lastRole === 'TipoNovedad') {
                this.ptupuagrTipoNovedad.setValue(lastRoleOid);
                this.executeDependecyRulesptupuagrtiponovedad('SetValue', true);
                this.ptupuagrTipoNovedad.enabled = false;
                this.executeDependecyRulesptupuagrtiponovedad('SetEnabled', true);
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptupuagrTipoNovedad
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('TipoNovedad', 'IC_TipoNovedad', [], null, '').then(
            (response: any) => {
                if (response && response.results) {
                    this.ptupuagrTipoNovedad.loadPreload(response.results);
                } else {
                    this.ptupuagrTipoNovedad.loadPreload([]);
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
     * Evaluate dependendy rules for pt_p_agrTipoNovedad argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrtiponovedad(event: string, internal: boolean): void {
        if ('SetValue' === event && this.ptupuagrTipoNovedad.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuagrTipoNovedad();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuagrTipoNovedad();
        }
        // Rule 3
        if ('SetValue' === event) {
            this.executeDependecyRules3ptupuagrTipoNovedad();
        }
        // Rule 4
        if ('SetValue' === event) {
            this.executeDependecyRules4ptupuagrTipoNovedad();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_agrTipoNovedad argument
     */
    private executeDependecyRules1ptupuagrTipoNovedad(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrTipoNovedad,
                'tipo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1ptupuagrTipoNovedadActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_agrTipoNovedad argument
     */
    private executeDependecyRules1ptupuagrTipoNovedadActions(): void {
        const varptupuagrtiponovedad = this.getFirstInstanceFromCache(this.ptupuagrTipoNovedad);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL AND v.tipo = 0
        if (varptupuagrtiponovedad && !this.util.isNull(varptupuagrtiponovedad) &&
            this.util.valueEquals(this.util.getInt(varptupuagrtiponovedad.get('tipo')), 0)) {
            // pt_p_atrVariasFamilias.SetActive( false )
            this.ptupuatrVariasFamilias.enabled = false;
            // pt_p_atrVariasFamilias.SetValue( false )
            this.ptupuatrVariasFamilias.setValue(false);
            // ptAliasParaContrato.SetVisible( true )
            this.ptAliasParaContrato.visible = true;
            // ptAliasParaTitular.SetVisible( false )
            this.ptAliasParaTitular.visible = false;
            // ptAliasParaTitular.SetValue( NULL )
            this.ptAliasParaTitular.setValue(null);
            this.executeDependecyRulesptaliasparatitular('SetValue', true);
            // ptAliasParaUsuario.SetVisible( false )
            this.ptAliasParaUsuario.visible = false;
            // ptAliasParaUsuario.SetValue( NULL )
            this.ptAliasParaUsuario.setValue(null);
            this.executeDependecyRulesptaliasparausuario('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_agrTipoNovedad argument
     */
    private executeDependecyRules2ptupuagrTipoNovedad(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrTipoNovedad,
                'tipo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules2ptupuagrTipoNovedadActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_agrTipoNovedad argument
     */
    private executeDependecyRules2ptupuagrTipoNovedadActions(): void {
        const varptupuagrtiponovedad = this.getFirstInstanceFromCache(this.ptupuagrTipoNovedad);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL AND v.tipo <> 0
        if (varptupuagrtiponovedad && !this.util.isNull(varptupuagrtiponovedad) &&
            !this.util.valueEquals(this.util.getInt(varptupuagrtiponovedad.get('tipo')), 0)) {
            // pt_p_atrVariasFamilias.SetActive( TRUE )
            this.ptupuatrVariasFamilias.enabled = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 3 for pt_p_agrTipoNovedad argument
     */
    private executeDependecyRules3ptupuagrTipoNovedad(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrTipoNovedad,
                'tipo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules3ptupuagrTipoNovedadActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 3 for pt_p_agrTipoNovedad argument
     */
    private executeDependecyRules3ptupuagrTipoNovedadActions(): void {
        const varptupuagrtiponovedad = this.getFirstInstanceFromCache(this.ptupuagrTipoNovedad);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL AND v.tipo = 1
        if (varptupuagrtiponovedad && !this.util.isNull(varptupuagrtiponovedad) &&
            this.util.valueEquals(this.util.getInt(varptupuagrtiponovedad.get('tipo')), 1)) {
            // ptAliasParaTitular.SetVisible( true )
            this.ptAliasParaTitular.visible = true;
            // ptAliasParaUsuario.SetVisible( false )
            this.ptAliasParaUsuario.visible = false;
            // ptAliasParaUsuario.SetValue( NULL )
            this.ptAliasParaUsuario.setValue(null);
            this.executeDependecyRulesptaliasparausuario('SetValue', true);
            // ptAliasParaContrato.SetVisible( false )
            this.ptAliasParaContrato.visible = false;
            // ptAliasParaContrato.SetValue( NULL )
            this.ptAliasParaContrato.setValue(null);
            this.executeDependecyRulesptaliasparacontrato('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 4 for pt_p_agrTipoNovedad argument
     */
    private executeDependecyRules4ptupuagrTipoNovedad(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrTipoNovedad,
                'tipo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules4ptupuagrTipoNovedadActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 4 for pt_p_agrTipoNovedad argument
     */
    private executeDependecyRules4ptupuagrTipoNovedadActions(): void {
        const varptupuagrtiponovedad = this.getFirstInstanceFromCache(this.ptupuagrTipoNovedad);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL AND v.tipo = 2
        if (varptupuagrtiponovedad && !this.util.isNull(varptupuagrtiponovedad) &&
            this.util.valueEquals(this.util.getInt(varptupuagrtiponovedad.get('tipo')), 2)) {
            // ptAliasParaUsuario.SetVisible( true )
            this.ptAliasParaUsuario.visible = true;
            // ptAliasParaContrato.SetVisible( false )
            this.ptAliasParaContrato.visible = false;
            // ptAliasParaContrato.SetValue( NULL )
            this.ptAliasParaContrato.setValue(null);
            this.executeDependecyRulesptaliasparacontrato('SetValue', true);
            // ptAliasParaTitular.SetVisible( false )
            this.ptAliasParaTitular.visible = false;
            // ptAliasParaTitular.SetValue( NULL )
            this.ptAliasParaTitular.setValue(null);
            this.executeDependecyRulesptaliasparatitular('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_agrTipoNovedad argument
     */
    public onptupuagrtiponovedadChange(): void {
        this.executeDependecyRulesptupuagrtiponovedad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptAliasParaContrato argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptaliasparacontrato(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1ptAliasParaContrato();
        }
        // Rule 2
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules2ptAliasParaContrato();
        }
        // Rule 3
        if ('SetValue' === event) {
            this.executeDependecyRules3ptAliasParaContrato();
        }
        // Rule 4
        if ('SetValue' === event) {
            this.executeDependecyRules4ptAliasParaContrato();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for ptAliasParaContrato argument
     */
    private executeDependecyRules1ptAliasParaContrato(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptAliasParaContratoActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptAliasParaContrato argument
     */
    private executeDependecyRules1ptAliasParaContratoActions(): void {
        // v = "SC"
        if (this.util.valueEquals(this.ptAliasParaContrato.value, 'SC')) {
            // pt_p_atrMinValorMeses.SetActive( TRUE )
            this.ptupuatrMinValorMeses.enabled = true;
            // pt_p_atrMinValorMeses.SetMandatory( TRUE )
            this.ptupuatrMinValorMeses.mandatory = true;
            // pt_p_atrMaxValorMeses.SetActive( TRUE )
            this.ptupuatrMaxValorMeses.enabled = true;
            // pt_p_atrMaxValorMeses.SetMandatory( TRUE )
            this.ptupuatrMaxValorMeses.mandatory = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for ptAliasParaContrato argument
     */
    private executeDependecyRules2ptAliasParaContrato(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptAliasParaContratoActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for ptAliasParaContrato argument
     */
    private executeDependecyRules2ptAliasParaContratoActions(): void {
        // v= NULL OR   v <> "SC"
        if (this.util.isNull(this.ptAliasParaContrato.value) || !this.util.valueEquals(this.ptAliasParaContrato.value, 'SC')) {
            // pt_p_atrMinValorMeses.SetActive( FALSE )
            this.ptupuatrMinValorMeses.enabled = false;
            // pt_p_atrMinValorMeses.SetMandatory( FALSE )
            this.ptupuatrMinValorMeses.mandatory = false;
            // pt_p_atrMaxValorMeses.SetActive( FALSE )
            this.ptupuatrMaxValorMeses.enabled = false;
            // pt_p_atrMaxValorMeses.SetMandatory( FALSE )
            this.ptupuatrMaxValorMeses.mandatory = false;
            // pt_p_atrMinValorMeses.SetValue( NULL )
            this.ptupuatrMinValorMeses.setValue(null);
            // pt_p_atrMaxValorMeses.SetValue( NULL )
            this.ptupuatrMaxValorMeses.setValue(null);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 3 for ptAliasParaContrato argument
     */
    private executeDependecyRules3ptAliasParaContrato(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules3ptAliasParaContratoActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 3 for ptAliasParaContrato argument
     */
    private executeDependecyRules3ptAliasParaContratoActions(): void {
        // v <> NULL AND v = "00"
        if (!this.util.isNull(this.ptAliasParaContrato.value) && this.util.valueEquals(this.ptAliasParaContrato.value, '00')) {
            // ptAlias.SetVisible( TRUE )
            this.ptAlias.visible = true;
            // ptAlias.SetValue( NULL )
            this.ptAlias.setValue(null);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 4 for ptAliasParaContrato argument
     */
    private executeDependecyRules4ptAliasParaContrato(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules4ptAliasParaContratoActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 4 for ptAliasParaContrato argument
     */
    private executeDependecyRules4ptAliasParaContratoActions(): void {
        // v <> NULL AND v <> "00"
        if (!this.util.isNull(this.ptAliasParaContrato.value) && !this.util.valueEquals(this.ptAliasParaContrato.value, '00')) {
            // ptAlias.SetVisible( FALSE )
            this.ptAlias.visible = false;
            // ptAlias.SetValue( v )
            this.ptAlias.setValue(this.ptAliasParaContrato.value);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the ptAliasParaContrato argument
     */
    public onptaliasparacontratoChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptaliasparacontrato('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptAliasParaTitular argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptaliasparatitular(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptAliasParaTitular();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptAliasParaTitular();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for ptAliasParaTitular argument
     */
    private executeDependecyRules1ptAliasParaTitular(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptAliasParaTitularActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptAliasParaTitular argument
     */
    private executeDependecyRules1ptAliasParaTitularActions(): void {
        // v <> NULL AND v = "00"
        if (!this.util.isNull(this.ptAliasParaTitular.value) && this.util.valueEquals(this.ptAliasParaTitular.value, '00')) {
            // ptAlias.SetVisible( TRUE )
            this.ptAlias.visible = true;
            // ptAlias.SetValue( NULL )
            this.ptAlias.setValue(null);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for ptAliasParaTitular argument
     */
    private executeDependecyRules2ptAliasParaTitular(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptAliasParaTitularActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for ptAliasParaTitular argument
     */
    private executeDependecyRules2ptAliasParaTitularActions(): void {
        // v <> NULL AND v <> "00"
        if (!this.util.isNull(this.ptAliasParaTitular.value) && !this.util.valueEquals(this.ptAliasParaTitular.value, '00')) {
            // ptAlias.SetVisible( FALSE )
            this.ptAlias.visible = false;
            // ptAlias.SetValue( v )
            this.ptAlias.setValue(this.ptAliasParaTitular.value);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the ptAliasParaTitular argument
     */
    public onptaliasparatitularChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptaliasparatitular('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptAliasParaUsuario argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptaliasparausuario(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptAliasParaUsuario();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptAliasParaUsuario();
        }
        // Rule 3
        if ('SetValue' === event) {
            this.executeDependecyRules3ptAliasParaUsuario();
        }
        // Rule 4
        if ('SetValue' === event) {
            this.executeDependecyRules4ptAliasParaUsuario();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for ptAliasParaUsuario argument
     */
    private executeDependecyRules1ptAliasParaUsuario(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptAliasParaUsuarioActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptAliasParaUsuario argument
     */
    private executeDependecyRules1ptAliasParaUsuarioActions(): void {
        // v <> NULL AND v = "SU"
        if (!this.util.isNull(this.ptAliasParaUsuario.value) && this.util.valueEquals(this.ptAliasParaUsuario.value, 'SU')) {
            // pt_p_atrMaxValorMeses.SetActive( TRUE )
            this.ptupuatrMaxValorMeses.enabled = true;
            // pt_p_atrMaxValorMeses.SetMandatory( TRUE )
            this.ptupuatrMaxValorMeses.mandatory = true;
            // pt_p_atrMinValorMeses.SetActive( TRUE )
            this.ptupuatrMinValorMeses.enabled = true;
            // pt_p_atrMinValorMeses.SetMandatory( TRUE )
            this.ptupuatrMinValorMeses.mandatory = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for ptAliasParaUsuario argument
     */
    private executeDependecyRules2ptAliasParaUsuario(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptAliasParaUsuarioActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for ptAliasParaUsuario argument
     */
    private executeDependecyRules2ptAliasParaUsuarioActions(): void {
        // v = NULL OR v <> "SU"
        if (this.util.isNull(this.ptAliasParaUsuario.value) || !this.util.valueEquals(this.ptAliasParaUsuario.value, 'SU')) {
            // pt_p_atrMaxValorMeses.SetActive( FALSE )
            this.ptupuatrMaxValorMeses.enabled = false;
            // pt_p_atrMaxValorMeses.SetMandatory( FALSE )
            this.ptupuatrMaxValorMeses.mandatory = false;
            // pt_p_atrMaxValorMeses.SetValue( NULL )
            this.ptupuatrMaxValorMeses.setValue(null);
            // pt_p_atrMinValorMeses.SetActive( FALSE )
            this.ptupuatrMinValorMeses.enabled = false;
            // pt_p_atrMinValorMeses.SetMandatory( FALSE )
            this.ptupuatrMinValorMeses.mandatory = false;
            // pt_p_atrMinValorMeses.SetValue( NULL )
            this.ptupuatrMinValorMeses.setValue(null);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 3 for ptAliasParaUsuario argument
     */
    private executeDependecyRules3ptAliasParaUsuario(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules3ptAliasParaUsuarioActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 3 for ptAliasParaUsuario argument
     */
    private executeDependecyRules3ptAliasParaUsuarioActions(): void {
        // v <> NULL AND v = "00"
        if (!this.util.isNull(this.ptAliasParaUsuario.value) && this.util.valueEquals(this.ptAliasParaUsuario.value, '00')) {
            // ptAlias.SetVisible( TRUE )
            this.ptAlias.visible = true;
            // ptAlias.SetValue( NULL )
            this.ptAlias.setValue(null);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 4 for ptAliasParaUsuario argument
     */
    private executeDependecyRules4ptAliasParaUsuario(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules4ptAliasParaUsuarioActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 4 for ptAliasParaUsuario argument
     */
    private executeDependecyRules4ptAliasParaUsuarioActions(): void {
        // v <> NULL AND v <> "00"
        if (!this.util.isNull(this.ptAliasParaUsuario.value) && !this.util.valueEquals(this.ptAliasParaUsuario.value, '00')) {
            // ptAlias.SetVisible( FALSE )
            this.ptAlias.visible = false;
            // ptAlias.SetValue( v )
            this.ptAlias.setValue(this.ptAliasParaUsuario.value);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the ptAliasParaUsuario argument
     */
    public onptaliasparausuarioChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptaliasparausuario('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }
}
