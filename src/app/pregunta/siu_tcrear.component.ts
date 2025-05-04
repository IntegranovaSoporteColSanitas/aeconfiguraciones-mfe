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
    selector: 'imes-pregunta-siu-tcrear',
    templateUrl: './siu_tcrear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreguntaSIUuTCREARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public ptupuagrSeccion: FieldOVPreload;
    public ptupuatrNumero: Field;
    public ptupuatrNumOrden: Field;
    public ptupuatrDescripcion: Field;
    public ptupuatrValorSNObliga: FieldDefinedSelection;
    public ptupuatrObsOblig: FieldDefinedSelection;
    public ptupuatrEsNumero: FieldDefinedSelection;
    public ptupuatrValorMax: Field;
    public ptupuatrValorMin: Field;
    public ptupuatrSoloHombres: FieldDefinedSelection;
    public ptupuatrSoloMujeres: FieldDefinedSelection;
    public ptupuatrRespMultiple: FieldDefinedSelection;
    public ptupuatrSeEnviaAlCORE: FieldDefinedSelection;
    public ptupuatrCondicionEdad: FieldDefinedSelection;
    public ptupuatrCondicionEdadAnyos: Field;

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
        this.idXML = 'Clas_1431633788928040Ser_7UIServ_1';
        this.className = ModelConstants.Pregunta.name;
        this.iuName = ModelConstants.Pregunta.siuutcrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TCREAR';
        this.title = this.langMng.translateText('cls_Pregunta_svc_TCREAR',
            'Crear pregunta');

        // Create inbound argument components
        this.ptupuagrSeccion = new FieldOVPreload(this.langMng);
        this.ptupuatrNumero = new Field(this.langMng);
        this.ptupuatrNumOrden = new Field(this.langMng);
        this.ptupuatrDescripcion = new Field(this.langMng);
        this.ptupuatrValorSNObliga = new FieldDefinedSelection(this.langMng);
        this.ptupuatrObsOblig = new FieldDefinedSelection(this.langMng);
        this.ptupuatrEsNumero = new FieldDefinedSelection(this.langMng);
        this.ptupuatrValorMax = new Field(this.langMng);
        this.ptupuatrValorMin = new Field(this.langMng);
        this.ptupuatrSoloHombres = new FieldDefinedSelection(this.langMng);
        this.ptupuatrSoloMujeres = new FieldDefinedSelection(this.langMng);
        this.ptupuatrRespMultiple = new FieldDefinedSelection(this.langMng);
        this.ptupuatrSeEnviaAlCORE = new FieldDefinedSelection(this.langMng);
        this.ptupuatrCondicionEdad = new FieldDefinedSelection(this.langMng);
        this.ptupuatrCondicionEdadAnyos = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptupuagrSeccion.nameInRequest = 'pt_p_agrseccion';
        this.ptupuagrSeccion.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TCREAR_inArg_pt_p_agrSeccion',
            'Sección');
        this.ptupuagrSeccion.mandatory = true;
        this.ptupuagrSeccion.dataType = ModelConstants.Seccion.name;
        this.ptupuagrSeccion.maxLength = 150;
        this.ptupuagrSeccion.assignCSS();
        this.fields.push(this.ptupuagrSeccion);

        this.ptupuatrNumero.nameInRequest = 'pt_p_atrnumero';
        this.ptupuatrNumero.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TCREAR_inArg_pt_p_atrNumero',
            'Número');
        this.ptupuatrNumero.mandatory = true;
        this.ptupuatrNumero.dataType = Field.dtInt;
        this.ptupuatrNumero.assignCSS();
        this.fields.push(this.ptupuatrNumero);

        this.ptupuatrNumOrden.nameInRequest = 'pt_p_atrnumorden';
        this.ptupuatrNumOrden.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TCREAR_inArg_pt_p_atrNumOrden',
            'Nº orden');
        this.ptupuatrNumOrden.mandatory = true;
        this.ptupuatrNumOrden.dataType = Field.dtNat;
        this.ptupuatrNumOrden.assignCSS();
        this.fields.push(this.ptupuatrNumOrden);

        this.ptupuatrDescripcion.nameInRequest = 'pt_p_atrdescripcion';
        this.ptupuatrDescripcion.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TCREAR_inArg_pt_p_atrDescripcion',
            'Descripción');
        this.ptupuatrDescripcion.mandatory = true;
        this.ptupuatrDescripcion.dataType = Field.dtString;
        this.ptupuatrDescripcion.maxLength = 255;
        this.ptupuatrDescripcion.assignCSS();
        this.fields.push(this.ptupuatrDescripcion);

        this.ptupuatrValorSNObliga.nameInRequest = 'pt_p_atrvalorsnobliga';
        this.ptupuatrValorSNObliga.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TCREAR_inArg_pt_p_atrValorSNObliga',
            'Si/No Obligatorio');
        this.ptupuatrValorSNObliga.mandatory = true;
        this.ptupuatrValorSNObliga.dataType = Field.dtBool;
        this.ptupuatrValorSNObliga.options = DefinedSelections.DS_SINO;
        this.ptupuatrValorSNObliga.value = false;
        this.ptupuatrValorSNObliga.assignCSS();
        this.fields.push(this.ptupuatrValorSNObliga);

        this.ptupuatrObsOblig.nameInRequest = 'pt_p_atrobsoblig';
        this.ptupuatrObsOblig.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TCREAR_inArg_pt_p_atrObsOblig',
            'Obs. Obligatoria');
        this.ptupuatrObsOblig.mandatory = true;
        this.ptupuatrObsOblig.dataType = Field.dtBool;
        this.ptupuatrObsOblig.options = DefinedSelections.DS_SINO;
        this.ptupuatrObsOblig.value = false;
        this.ptupuatrObsOblig.assignCSS();
        this.fields.push(this.ptupuatrObsOblig);

        this.ptupuatrEsNumero.nameInRequest = 'pt_p_atresnumero';
        this.ptupuatrEsNumero.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TCREAR_inArg_pt_p_atrEsNumero',
            'Es número');
        this.ptupuatrEsNumero.mandatory = true;
        this.ptupuatrEsNumero.dataType = Field.dtBool;
        this.ptupuatrEsNumero.options = DefinedSelections.DS_SINO;
        this.ptupuatrEsNumero.value = false;
        this.ptupuatrEsNumero.assignCSS();
        this.fields.push(this.ptupuatrEsNumero);

        this.ptupuatrValorMax.nameInRequest = 'pt_p_atrvalormax';
        this.ptupuatrValorMax.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TCREAR_inArg_pt_p_atrValorMax',
            'Valor máximo');
        this.ptupuatrValorMax.mandatory = false;
        this.ptupuatrValorMax.dataType = Field.dtReal;
        this.ptupuatrValorMax.assignCSS();
        this.fields.push(this.ptupuatrValorMax);

        this.ptupuatrValorMin.nameInRequest = 'pt_p_atrvalormin';
        this.ptupuatrValorMin.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TCREAR_inArg_pt_p_atrValorMin',
            'Valor mínimo');
        this.ptupuatrValorMin.mandatory = false;
        this.ptupuatrValorMin.dataType = Field.dtReal;
        this.ptupuatrValorMin.assignCSS();
        this.fields.push(this.ptupuatrValorMin);

        this.ptupuatrSoloHombres.nameInRequest = 'pt_p_atrsolohombres';
        this.ptupuatrSoloHombres.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TCREAR_inArg_pt_p_atrSoloHombres',
            'Solo hombres');
        this.ptupuatrSoloHombres.mandatory = true;
        this.ptupuatrSoloHombres.dataType = Field.dtBool;
        this.ptupuatrSoloHombres.options = DefinedSelections.DS_SINO;
        this.ptupuatrSoloHombres.value = false;
        this.ptupuatrSoloHombres.assignCSS();
        this.fields.push(this.ptupuatrSoloHombres);

        this.ptupuatrSoloMujeres.nameInRequest = 'pt_p_atrsolomujeres';
        this.ptupuatrSoloMujeres.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TCREAR_inArg_pt_p_atrSoloMujeres',
            'Solo mujeres');
        this.ptupuatrSoloMujeres.mandatory = true;
        this.ptupuatrSoloMujeres.dataType = Field.dtBool;
        this.ptupuatrSoloMujeres.options = DefinedSelections.DS_SINO;
        this.ptupuatrSoloMujeres.value = false;
        this.ptupuatrSoloMujeres.assignCSS();
        this.fields.push(this.ptupuatrSoloMujeres);

        this.ptupuatrRespMultiple.nameInRequest = 'pt_p_atrrespmultiple';
        this.ptupuatrRespMultiple.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TCREAR_inArg_pt_p_atrRespMultiple',
            'Resp. múltiple');
        this.ptupuatrRespMultiple.mandatory = true;
        this.ptupuatrRespMultiple.dataType = Field.dtBool;
        this.ptupuatrRespMultiple.options = DefinedSelections.DS_SINO;
        this.ptupuatrRespMultiple.value = false;
        this.ptupuatrRespMultiple.assignCSS();
        this.fields.push(this.ptupuatrRespMultiple);

        this.ptupuatrSeEnviaAlCORE.nameInRequest = 'pt_p_atrseenviaalcore';
        this.ptupuatrSeEnviaAlCORE.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TCREAR_inArg_pt_p_atrSeEnviaAlCORE',
            'Se envía al CORE');
        this.ptupuatrSeEnviaAlCORE.mandatory = true;
        this.ptupuatrSeEnviaAlCORE.dataType = Field.dtBool;
        this.ptupuatrSeEnviaAlCORE.options = DefinedSelections.DS_SINO;
        this.ptupuatrSeEnviaAlCORE.value = false;
        this.ptupuatrSeEnviaAlCORE.assignCSS();
        this.fields.push(this.ptupuatrSeEnviaAlCORE);

        this.ptupuatrCondicionEdad.nameInRequest = 'pt_p_atrcondicionedad';
        this.ptupuatrCondicionEdad.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TCREAR_inArg_pt_p_atrCondicionEdad',
            'Condicionada por edad');
        this.ptupuatrCondicionEdad.mandatory = true;
        this.ptupuatrCondicionEdad.dataType = Field.dtNat;
        this.ptupuatrCondicionEdad.options = DefinedSelections.DS_CONDICIONADAEDAD;
        this.ptupuatrCondicionEdad.assignCSS();
        this.fields.push(this.ptupuatrCondicionEdad);

        this.ptupuatrCondicionEdadAnyos.nameInRequest = 'pt_p_atrcondicionedadanyos';
        this.ptupuatrCondicionEdadAnyos.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TCREAR_inArg_pt_p_atrCondicionEdadAnyos',
            'Condicionada por edad');
        this.ptupuatrCondicionEdadAnyos.mandatory = false;
        this.ptupuatrCondicionEdadAnyos.dataType = Field.dtNat;
        this.ptupuatrCondicionEdadAnyos.assignCSS();
        this.fields.push(this.ptupuatrCondicionEdadAnyos);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // pt_p_atrCondicionEdadAnyos
            const defValptupuatrCondicionEdadAnyos = new Promise<void>((resolveDefValue) => {
                this.ptupuatrCondicionEdadAnyos.setValue(0);
                resolveDefValue();
            });
            promiseArr.push(defValptupuatrCondicionEdadAnyos);

            Promise.all(promiseArr).then((results: any[]) => {
                this.setShowWait(false);
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
            if (lastRole === 'Seccion') {
                this.ptupuagrSeccion.setValue(lastRoleOid);
                this.executeDependecyRulesptupuagrseccion('SetValue', true);
                this.ptupuagrSeccion.enabled = false;
                this.executeDependecyRulesptupuagrseccion('SetEnabled', true);
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptupuagrSeccion
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Seccion', 'IC_Seccion', [], null, '').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuagrSeccion.loadPreload(response.results);
                } else {
                    this.ptupuagrSeccion.loadPreload([]);
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
     * Evaluate dependendy rules for pt_p_agrSeccion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrseccion(event: string, internal: boolean): void {
        if ('SetValue' === event && this.ptupuagrSeccion.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuagrSeccion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_agrSeccion argument
     */
    private executeDependecyRules1ptupuagrSeccion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrSeccion,
                'Identificador');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptupuagrSeccionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_agrSeccion argument
     */
    private executeDependecyRules1ptupuagrSeccionActions(): void {
        const varptupuagrseccion = this.getFirstInstanceFromCache(this.ptupuagrSeccion);
        // v <> NULL
        if (varptupuagrseccion && !this.util.isNull(varptupuagrseccion)) {
            // pt_p_atrEsNumero.SetValue( FALSE )
            this.ptupuatrEsNumero.setValue(false);
            this.executeDependecyRulesptupuatresnumero('SetValue', true);
            // pt_p_atrValorMax.SetValue( NULL )
            this.ptupuatrValorMax.setValue(null);
            // pt_p_atrValorMax.SetActive( FALSE )
            this.ptupuatrValorMax.enabled = false;
            // pt_p_atrValorMin.SetValue( NULL )
            this.ptupuatrValorMin.setValue(null);
            // pt_p_atrValorMin.SetActive( FALSE )
            this.ptupuatrValorMin.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_agrSeccion argument
     */
    public onptupuagrseccionChange(): void {
        this.executeDependecyRulesptupuagrseccion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_atrEsNumero argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuatresnumero(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuatrEsNumero();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuatrEsNumero();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_atrEsNumero argument
     */
    private executeDependecyRules1ptupuatrEsNumero(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptupuatrEsNumeroActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_atrEsNumero argument
     */
    private executeDependecyRules1ptupuatrEsNumeroActions(): void {
        // v <> NULL AND v = true
        if (!this.util.isNull(this.util.getBool(this.ptupuatrEsNumero.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptupuatrEsNumero.value), true)) {
            // pt_p_atrValorMax.SetActive( TRUE )
            this.ptupuatrValorMax.enabled = true;
            // pt_p_atrValorMin.SetActive( TRUE )
            this.ptupuatrValorMin.enabled = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_atrEsNumero argument
     */
    private executeDependecyRules2ptupuatrEsNumero(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptupuatrEsNumeroActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_atrEsNumero argument
     */
    private executeDependecyRules2ptupuatrEsNumeroActions(): void {
        // v <> NULL AND v = false
        if (!this.util.isNull(this.util.getBool(this.ptupuatrEsNumero.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptupuatrEsNumero.value), false)) {
            // pt_p_atrValorMax.SetValue( NULL )
            this.ptupuatrValorMax.setValue(null);
            // pt_p_atrValorMax.SetActive( FALSE )
            this.ptupuatrValorMax.enabled = false;
            // pt_p_atrValorMin.SetValue( NULL )
            this.ptupuatrValorMin.setValue(null);
            // pt_p_atrValorMin.SetActive( FALSE )
            this.ptupuatrValorMin.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_atrEsNumero argument
     */
    public onptupuatresnumeroChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptupuatresnumero('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_atrSoloHombres argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuatrsolohombres(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuatrSoloHombres();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuatrSoloHombres();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_atrSoloHombres argument
     */
    private executeDependecyRules1ptupuatrSoloHombres(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptupuatrSoloHombresActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_atrSoloHombres argument
     */
    private executeDependecyRules1ptupuatrSoloHombresActions(): void {
        // v <> NULL AND v= TRUE
        if (!this.util.isNull(this.util.getBool(this.ptupuatrSoloHombres.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptupuatrSoloHombres.value), true)) {
            // pt_p_atrSoloMujeres.SetValue( FALSE )
            this.ptupuatrSoloMujeres.setValue(false);
            this.executeDependecyRulesptupuatrsolomujeres('SetValue', true);
            // pt_p_atrSoloMujeres.SetActive( FALSE )
            this.ptupuatrSoloMujeres.enabled = false;
            this.executeDependecyRulesptupuatrsolomujeres('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_atrSoloHombres argument
     */
    private executeDependecyRules2ptupuatrSoloHombres(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptupuatrSoloHombresActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_atrSoloHombres argument
     */
    private executeDependecyRules2ptupuatrSoloHombresActions(): void {
        // v <> NULL AND v= FALSE
        if (!this.util.isNull(this.util.getBool(this.ptupuatrSoloHombres.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptupuatrSoloHombres.value), false)) {
            // pt_p_atrSoloMujeres.SetActive( TRUE )
            this.ptupuatrSoloMujeres.enabled = true;
            this.executeDependecyRulesptupuatrsolomujeres('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_atrSoloHombres argument
     */
    public onptupuatrsolohombresChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptupuatrsolohombres('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_atrSoloMujeres argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuatrsolomujeres(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuatrSoloMujeres();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuatrSoloMujeres();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_atrSoloMujeres argument
     */
    private executeDependecyRules1ptupuatrSoloMujeres(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptupuatrSoloMujeresActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_atrSoloMujeres argument
     */
    private executeDependecyRules1ptupuatrSoloMujeresActions(): void {
        // v <> NULL AND v = TRUE
        if (!this.util.isNull(this.util.getBool(this.ptupuatrSoloMujeres.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptupuatrSoloMujeres.value), true)) {
            // pt_p_atrSoloHombres.SetValue( FALSE )
            this.ptupuatrSoloHombres.setValue(false);
            this.executeDependecyRulesptupuatrsolohombres('SetValue', true);
            // pt_p_atrSoloHombres.SetActive( FALSE )
            this.ptupuatrSoloHombres.enabled = false;
            this.executeDependecyRulesptupuatrsolohombres('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_atrSoloMujeres argument
     */
    private executeDependecyRules2ptupuatrSoloMujeres(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptupuatrSoloMujeresActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_atrSoloMujeres argument
     */
    private executeDependecyRules2ptupuatrSoloMujeresActions(): void {
        // v <> NULL AND v = FALSE
        if (!this.util.isNull(this.util.getBool(this.ptupuatrSoloMujeres.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptupuatrSoloMujeres.value), false)) {
            // pt_p_atrSoloHombres.SetActive( TRUE )
            this.ptupuatrSoloHombres.enabled = true;
            this.executeDependecyRulesptupuatrsolohombres('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_atrSoloMujeres argument
     */
    public onptupuatrsolomujeresChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptupuatrsolomujeres('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_atrCondicionEdad argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuatrcondicionedad(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuatrCondicionEdad();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuatrCondicionEdad();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_atrCondicionEdad argument
     */
    private executeDependecyRules1ptupuatrCondicionEdad(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptupuatrCondicionEdadActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_atrCondicionEdad argument
     */
    private executeDependecyRules1ptupuatrCondicionEdadActions(): void {
        // v <> NULL AND v > 0
        if (!this.util.isNull(this.util.getInt(this.ptupuatrCondicionEdad.value)) &&
            this.util.getInt(this.ptupuatrCondicionEdad.value) > 0) {
            // pt_p_atrCondicionEdadAnyos.SetActive( TRUE )
            this.ptupuatrCondicionEdadAnyos.enabled = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_atrCondicionEdad argument
     */
    private executeDependecyRules2ptupuatrCondicionEdad(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptupuatrCondicionEdadActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_atrCondicionEdad argument
     */
    private executeDependecyRules2ptupuatrCondicionEdadActions(): void {
        // v <> NULL AND v = 0
        if (!this.util.isNull(this.util.getInt(this.ptupuatrCondicionEdad.value)) &&
            this.util.valueEquals(this.util.getInt(this.ptupuatrCondicionEdad.value), 0)) {
            // pt_p_atrCondicionEdadAnyos.SetActive( FALSE )
            this.ptupuatrCondicionEdadAnyos.enabled = false;
            // pt_p_atrCondicionEdadAnyos.SetValue( NULL )
            this.ptupuatrCondicionEdadAnyos.setValue(null);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_atrCondicionEdad argument
     */
    public onptupuatrcondicionedadChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptupuatrcondicionedad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }
}
