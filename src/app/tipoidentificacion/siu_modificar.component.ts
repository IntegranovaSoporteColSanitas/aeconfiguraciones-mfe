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
    selector: 'imes-tipoidentificacion-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipoIdentificacionSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisTipoIdentificacion: FieldOVPreload;
    public puValidoContratante: FieldDefinedSelection;
    public puValidoTitular: FieldDefinedSelection;
    public puDiplomatico: FieldDefinedSelection;
    public puNIT: FieldDefinedSelection;
    public puHijoDe: FieldDefinedSelection;
    public puRequiereEPS: FieldDefinedSelection;
    public puMenorSinIdentificar: FieldDefinedSelection;
    public puEsPasaporte: FieldDefinedSelection;
    public puVisibleValidadorUsuarios: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431942201344066Ser_3UIServ_1';
        this.className = ModelConstants.Tipoidentificacion.name;
        this.iuName = ModelConstants.Tipoidentificacion.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_TipoIdentificacion_svc_modificar',
            'Modificar tipo de identificación');

        // Create inbound argument components
        this.puthisTipoIdentificacion = new FieldOVPreload(this.langMng);
        this.puValidoContratante = new FieldDefinedSelection(this.langMng);
        this.puValidoTitular = new FieldDefinedSelection(this.langMng);
        this.puDiplomatico = new FieldDefinedSelection(this.langMng);
        this.puNIT = new FieldDefinedSelection(this.langMng);
        this.puHijoDe = new FieldDefinedSelection(this.langMng);
        this.puRequiereEPS = new FieldDefinedSelection(this.langMng);
        this.puMenorSinIdentificar = new FieldDefinedSelection(this.langMng);
        this.puEsPasaporte = new FieldDefinedSelection(this.langMng);
        this.puVisibleValidadorUsuarios = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisTipoIdentificacion.nameInRequest = 'p_thistipoidentificacion';
        this.puthisTipoIdentificacion.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_svc_modificar_inArg_p_thisTipoIdentificacion',
            'Tipo identificación');
        this.puthisTipoIdentificacion.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisTipoIdentificacion.mandatory = true;
        this.puthisTipoIdentificacion.dataType = ModelConstants.Tipoidentificacion.name;
        this.puthisTipoIdentificacion.maxLength = 170;
        this.puthisTipoIdentificacion.assignCSS();
        this.fields.push(this.puthisTipoIdentificacion);

        this.puValidoContratante.nameInRequest = 'p_validocontratante';
        this.puValidoContratante.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_svc_modificar_inArg_p_ValidoContratante',
            'Válido contratante');
        this.puValidoContratante.mandatory = true;
        this.puValidoContratante.dataType = Field.dtBool;
        this.puValidoContratante.options = DefinedSelections.DS_SINO;
        this.puValidoContratante.value = false;
        this.puValidoContratante.assignCSS();
        this.fields.push(this.puValidoContratante);

        this.puValidoTitular.nameInRequest = 'p_validotitular';
        this.puValidoTitular.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_svc_modificar_inArg_p_ValidoTitular',
            'Válido titular');
        this.puValidoTitular.mandatory = true;
        this.puValidoTitular.dataType = Field.dtBool;
        this.puValidoTitular.options = DefinedSelections.DS_SINO;
        this.puValidoTitular.value = false;
        this.puValidoTitular.assignCSS();
        this.fields.push(this.puValidoTitular);

        this.puDiplomatico.nameInRequest = 'p_diplomatico';
        this.puDiplomatico.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_svc_modificar_inArg_p_Diplomatico',
            'Diplomático');
        this.puDiplomatico.mandatory = true;
        this.puDiplomatico.dataType = Field.dtBool;
        this.puDiplomatico.options = DefinedSelections.DS_SINO;
        this.puDiplomatico.value = false;
        this.puDiplomatico.assignCSS();
        this.fields.push(this.puDiplomatico);

        this.puNIT.nameInRequest = 'p_nit';
        this.puNIT.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_svc_modificar_inArg_p_NIT',
            'NIT');
        this.puNIT.mandatory = true;
        this.puNIT.dataType = Field.dtBool;
        this.puNIT.options = DefinedSelections.DS_SINO;
        this.puNIT.value = false;
        this.puNIT.assignCSS();
        this.fields.push(this.puNIT);

        this.puHijoDe.nameInRequest = 'p_hijode';
        this.puHijoDe.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_svc_modificar_inArg_p_HijoDe',
            'Hijo de');
        this.puHijoDe.mandatory = true;
        this.puHijoDe.dataType = Field.dtBool;
        this.puHijoDe.options = DefinedSelections.DS_SINO;
        this.puHijoDe.value = false;
        this.puHijoDe.assignCSS();
        this.fields.push(this.puHijoDe);

        this.puRequiereEPS.nameInRequest = 'p_requiereeps';
        this.puRequiereEPS.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_svc_modificar_inArg_p_RequiereEPS',
            'Requiere EPS');
        this.puRequiereEPS.mandatory = true;
        this.puRequiereEPS.dataType = Field.dtBool;
        this.puRequiereEPS.options = DefinedSelections.DS_SINO;
        this.puRequiereEPS.assignCSS();
        this.fields.push(this.puRequiereEPS);

        this.puMenorSinIdentificar.nameInRequest = 'p_menorsinidentificar';
        this.puMenorSinIdentificar.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_svc_modificar_inArg_p_MenorSinIdentificar',
            'Menor sin identificar');
        this.puMenorSinIdentificar.mandatory = true;
        this.puMenorSinIdentificar.dataType = Field.dtBool;
        this.puMenorSinIdentificar.options = DefinedSelections.DS_SINO;
        this.puMenorSinIdentificar.assignCSS();
        this.fields.push(this.puMenorSinIdentificar);

        this.puEsPasaporte.nameInRequest = 'p_espasaporte';
        this.puEsPasaporte.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_svc_modificar_inArg_p_EsPasaporte',
            'Es Pasaporte');
        this.puEsPasaporte.mandatory = true;
        this.puEsPasaporte.dataType = Field.dtBool;
        this.puEsPasaporte.options = DefinedSelections.DS_SINO;
        this.puEsPasaporte.assignCSS();
        this.fields.push(this.puEsPasaporte);

        this.puVisibleValidadorUsuarios.nameInRequest = 'p_visiblevalidadorusuarios';
        this.puVisibleValidadorUsuarios.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_svc_modificar_inArg_p_VisibleValidadorUsuarios',
            'Visible en validador de usuarios');
        this.puVisibleValidadorUsuarios.mandatory = true;
        this.puVisibleValidadorUsuarios.dataType = Field.dtBool;
        this.puVisibleValidadorUsuarios.options = DefinedSelections.DS_SINO;
        this.puVisibleValidadorUsuarios.value = false;
        this.puVisibleValidadorUsuarios.assignCSS();
        this.fields.push(this.puVisibleValidadorUsuarios);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // p_RequiereEPS
            const defValpuRequiereEPS = new Promise<void>((resolveDefValue) => {
                this.puRequiereEPS.setValue(true);
                resolveDefValue();
            });
            promiseArr.push(defValpuRequiereEPS);

            // p_MenorSinIdentificar
            const defValpuMenorSinIdentificar = new Promise<void>((resolveDefValue) => {
                this.puMenorSinIdentificar.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuMenorSinIdentificar);

            // p_EsPasaporte
            const defValpuEsPasaporte = new Promise<void>((resolveDefValue) => {
                this.puEsPasaporte.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuEsPasaporte);

            Promise.all(promiseArr).then((results: any[]) => {
                this.setShowWait(false);
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
            ['TipoIdentificacion'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisTipoIdentificacion.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhistipoidentificacion('SetValue', true);
            this.puthisTipoIdentificacion.enabled = false;
            this.executeDependecyRulesputhistipoidentificacion('SetEnabled', true);
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // puthisTipoIdentificacion
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('TipoIdentificacion', 'IC_TipoIdentificacion', [], null, 'OC_TipoIdentificacion').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.puthisTipoIdentificacion.loadPreload(response.results);
                } else {
                    this.puthisTipoIdentificacion.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                this.processErrorInLoadPreload(response.resultDescription);
            }
        );
        this.numberOfPendingPreload++;
    }

    /**
     * Evaluate dependendy rules for p_thisTipoIdentificacion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhistipoidentificacion(event: string, internal: boolean): void {
        if ('SetValue' === event && this.puthisTipoIdentificacion.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisTipoIdentificacion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for p_thisTipoIdentificacion argument
     */
    private executeDependecyRules1puthisTipoIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisTipoIdentificacion,
                'validocontratante,validotitular,diplomatico,nit,hijode,requiereeps,menorsinidentificar,espasaporte,visiblevalidadorusu');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisTipoIdentificacionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisTipoIdentificacion argument
     */
    private executeDependecyRules1puthisTipoIdentificacionActions(): void {
        const varputhistipoidentificacion = this.getFirstInstanceFromCache(this.puthisTipoIdentificacion);
        // v <> NULL
        if (varputhistipoidentificacion && !this.util.isNull(varputhistipoidentificacion)) {
            // p_ValidoContratante.SetValue( v.validocontratante )
            this.puValidoContratante.setValue(this.util.getBool(varputhistipoidentificacion.get('validocontratante')));
            // p_ValidoTitular.SetValue( v.validotitular )
            this.puValidoTitular.setValue(this.util.getBool(varputhistipoidentificacion.get('validotitular')));
            // p_Diplomatico.SetValue( v.diplomatico )
            this.puDiplomatico.setValue(this.util.getBool(varputhistipoidentificacion.get('diplomatico')));
            // p_NIT.SetValue( v.nit )
            this.puNIT.setValue(this.util.getBool(varputhistipoidentificacion.get('nit')));
            // p_HijoDe.SetValue( v.hijode )
            this.puHijoDe.setValue(this.util.getBool(varputhistipoidentificacion.get('hijode')));
            // p_RequiereEPS.SetValue( v.requiereeps )
            this.puRequiereEPS.setValue(this.util.getBool(varputhistipoidentificacion.get('requiereeps')));
            // p_MenorSinIdentificar.SetValue( v.menorsinidentificar )
            this.puMenorSinIdentificar.setValue(this.util.getBool(varputhistipoidentificacion.get('menorsinidentificar')));
            // p_EsPasaporte.SetValue( v.espasaporte )
            this.puEsPasaporte.setValue(this.util.getBool(varputhistipoidentificacion.get('espasaporte')));
            // p_VisibleValidadorUsuarios.SetValue( v.visiblevalidadorusu )
            this.puVisibleValidadorUsuarios.setValue(this.util.getBool(varputhistipoidentificacion.get('visiblevalidadorusu')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisTipoIdentificacion argument
     */
    public onputhistipoidentificacionChange(): void {
        this.executeDependecyRulesputhistipoidentificacion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }
}
