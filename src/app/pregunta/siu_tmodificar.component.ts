import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldDefinedSelection, FieldOVLense, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-pregunta-siu-tmodificar',
    templateUrl: './siu_tmodificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreguntaSIUuTMODIFICARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisPregunta: FieldOVLense;
    public ptupuDescripcion: Field;
    public ptupuValorSNObliga: FieldDefinedSelection;
    public ptupuObsOblig: FieldDefinedSelection;
    public ptupuEsNumero: FieldDefinedSelection;
    public ptupuValorMax: Field;
    public ptupuValorMin: Field;
    public ptupuSoloHombres: FieldDefinedSelection;
    public ptupuSoloMujeres: FieldDefinedSelection;
    public ptupuRespMultiple: FieldDefinedSelection;
    public ptupuNuevoOrden: Field;
    public ptupuevcSeccion: FieldOVPreload;
    public ptupuSeEnviaAlCORE: FieldDefinedSelection;
    public ptupuCondicionEdad: FieldDefinedSelection;
    public ptupuCondicionEdadAnyos: Field;

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
        this.idXML = 'Clas_1431633788928040Ser_8UIServ_1';
        this.className = ModelConstants.Pregunta.name;
        this.iuName = ModelConstants.Pregunta.siuutmodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TMODIFICAR';
        this.title = this.langMng.translateText('cls_Pregunta_svc_TMODIFICAR',
            'Modificar pregunta');

        // Create inbound argument components
        this.puthisPregunta = new FieldOVLense(this.langMng);
        this.ptupuDescripcion = new Field(this.langMng);
        this.ptupuValorSNObliga = new FieldDefinedSelection(this.langMng);
        this.ptupuObsOblig = new FieldDefinedSelection(this.langMng);
        this.ptupuEsNumero = new FieldDefinedSelection(this.langMng);
        this.ptupuValorMax = new Field(this.langMng);
        this.ptupuValorMin = new Field(this.langMng);
        this.ptupuSoloHombres = new FieldDefinedSelection(this.langMng);
        this.ptupuSoloMujeres = new FieldDefinedSelection(this.langMng);
        this.ptupuRespMultiple = new FieldDefinedSelection(this.langMng);
        this.ptupuNuevoOrden = new Field(this.langMng);
        this.ptupuevcSeccion = new FieldOVPreload(this.langMng);
        this.ptupuSeEnviaAlCORE = new FieldDefinedSelection(this.langMng);
        this.ptupuCondicionEdad = new FieldDefinedSelection(this.langMng);
        this.ptupuCondicionEdadAnyos = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisPregunta.nameInRequest = 'p_thispregunta';
        this.puthisPregunta.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TMODIFICAR_inArg_p_thisPregunta',
            'Pregunta');
        this.puthisPregunta.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisPregunta.mandatory = true;
        this.puthisPregunta.dataType = ModelConstants.Pregunta.name;
        this.puthisPregunta.oidFields = Array(1);
        this.puthisPregunta.oidFieldsTypes = [Field.dtInt];
        this.puthisPregunta.assignCSS();
        this.fields.push(this.puthisPregunta);

        this.ptupuDescripcion.nameInRequest = 'pt_p_descripcion';
        this.ptupuDescripcion.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TMODIFICAR_inArg_pt_p_Descripcion',
            'Descripción');
        this.ptupuDescripcion.mandatory = true;
        this.ptupuDescripcion.dataType = Field.dtString;
        this.ptupuDescripcion.maxLength = 255;
        this.ptupuDescripcion.assignCSS();
        this.fields.push(this.ptupuDescripcion);

        this.ptupuValorSNObliga.nameInRequest = 'pt_p_valorsnobliga';
        this.ptupuValorSNObliga.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TMODIFICAR_inArg_pt_p_ValorSNObliga',
            'Si/No Obligatorio');
        this.ptupuValorSNObliga.mandatory = true;
        this.ptupuValorSNObliga.dataType = Field.dtBool;
        this.ptupuValorSNObliga.options = DefinedSelections.DS_SINO;
        this.ptupuValorSNObliga.value = false;
        this.ptupuValorSNObliga.assignCSS();
        this.fields.push(this.ptupuValorSNObliga);

        this.ptupuObsOblig.nameInRequest = 'pt_p_obsoblig';
        this.ptupuObsOblig.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TMODIFICAR_inArg_pt_p_ObsOblig',
            'Obs. Obligatoria');
        this.ptupuObsOblig.mandatory = true;
        this.ptupuObsOblig.dataType = Field.dtBool;
        this.ptupuObsOblig.options = DefinedSelections.DS_SINO;
        this.ptupuObsOblig.value = false;
        this.ptupuObsOblig.assignCSS();
        this.fields.push(this.ptupuObsOblig);

        this.ptupuEsNumero.nameInRequest = 'pt_p_esnumero';
        this.ptupuEsNumero.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TMODIFICAR_inArg_pt_p_EsNumero',
            'Es número');
        this.ptupuEsNumero.mandatory = true;
        this.ptupuEsNumero.dataType = Field.dtBool;
        this.ptupuEsNumero.options = DefinedSelections.DS_SINO;
        this.ptupuEsNumero.value = false;
        this.ptupuEsNumero.assignCSS();
        this.fields.push(this.ptupuEsNumero);

        this.ptupuValorMax.nameInRequest = 'pt_p_valormax';
        this.ptupuValorMax.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TMODIFICAR_inArg_pt_p_ValorMax',
            'Valor máximo');
        this.ptupuValorMax.mandatory = false;
        this.ptupuValorMax.dataType = Field.dtReal;
        this.ptupuValorMax.assignCSS();
        this.fields.push(this.ptupuValorMax);

        this.ptupuValorMin.nameInRequest = 'pt_p_valormin';
        this.ptupuValorMin.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TMODIFICAR_inArg_pt_p_ValorMin',
            'Valor mínimo');
        this.ptupuValorMin.mandatory = false;
        this.ptupuValorMin.dataType = Field.dtReal;
        this.ptupuValorMin.assignCSS();
        this.fields.push(this.ptupuValorMin);

        this.ptupuSoloHombres.nameInRequest = 'pt_p_solohombres';
        this.ptupuSoloHombres.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TMODIFICAR_inArg_pt_p_SoloHombres',
            'Solo hombres');
        this.ptupuSoloHombres.mandatory = true;
        this.ptupuSoloHombres.dataType = Field.dtBool;
        this.ptupuSoloHombres.options = DefinedSelections.DS_SINO;
        this.ptupuSoloHombres.value = false;
        this.ptupuSoloHombres.assignCSS();
        this.fields.push(this.ptupuSoloHombres);

        this.ptupuSoloMujeres.nameInRequest = 'pt_p_solomujeres';
        this.ptupuSoloMujeres.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TMODIFICAR_inArg_pt_p_SoloMujeres',
            'Solo mujeres');
        this.ptupuSoloMujeres.mandatory = true;
        this.ptupuSoloMujeres.dataType = Field.dtBool;
        this.ptupuSoloMujeres.options = DefinedSelections.DS_SINO;
        this.ptupuSoloMujeres.value = false;
        this.ptupuSoloMujeres.assignCSS();
        this.fields.push(this.ptupuSoloMujeres);

        this.ptupuRespMultiple.nameInRequest = 'pt_p_respmultiple';
        this.ptupuRespMultiple.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TMODIFICAR_inArg_pt_p_RespMultiple',
            'Resp. múltiple');
        this.ptupuRespMultiple.mandatory = true;
        this.ptupuRespMultiple.dataType = Field.dtBool;
        this.ptupuRespMultiple.options = DefinedSelections.DS_SINO;
        this.ptupuRespMultiple.value = false;
        this.ptupuRespMultiple.assignCSS();
        this.fields.push(this.ptupuRespMultiple);

        this.ptupuNuevoOrden.nameInRequest = 'pt_p_nuevoorden';
        this.ptupuNuevoOrden.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TMODIFICAR_inArg_pt_p_NuevoOrden',
            'Nº orden');
        this.ptupuNuevoOrden.mandatory = true;
        this.ptupuNuevoOrden.dataType = Field.dtNat;
        this.ptupuNuevoOrden.assignCSS();
        this.fields.push(this.ptupuNuevoOrden);

        this.ptupuevcSeccion.nameInRequest = 'pt_p_evcseccion';
        this.ptupuevcSeccion.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TMODIFICAR_inArg_pt_p_evcSeccion',
            'Sección');
        this.ptupuevcSeccion.mandatory = true;
        this.ptupuevcSeccion.dataType = ModelConstants.Seccion.name;
        this.ptupuevcSeccion.maxLength = 150;
        this.ptupuevcSeccion.assignCSS();
        this.fields.push(this.ptupuevcSeccion);

        this.ptupuSeEnviaAlCORE.nameInRequest = 'pt_p_seenviaalcore';
        this.ptupuSeEnviaAlCORE.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TMODIFICAR_inArg_pt_p_SeEnviaAlCORE',
            'Se envía al CORE');
        this.ptupuSeEnviaAlCORE.mandatory = true;
        this.ptupuSeEnviaAlCORE.dataType = Field.dtBool;
        this.ptupuSeEnviaAlCORE.options = DefinedSelections.DS_SINO;
        this.ptupuSeEnviaAlCORE.value = false;
        this.ptupuSeEnviaAlCORE.assignCSS();
        this.fields.push(this.ptupuSeEnviaAlCORE);

        this.ptupuCondicionEdad.nameInRequest = 'pt_p_condicionedad';
        this.ptupuCondicionEdad.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TMODIFICAR_inArg_pt_p_CondicionEdad',
            'Condicionada por edad');
        this.ptupuCondicionEdad.mandatory = true;
        this.ptupuCondicionEdad.dataType = Field.dtNat;
        this.ptupuCondicionEdad.options = DefinedSelections.DS_CONDICIONADAEDAD;
        this.ptupuCondicionEdad.assignCSS();
        this.fields.push(this.ptupuCondicionEdad);

        this.ptupuCondicionEdadAnyos.nameInRequest = 'pt_p_condicionedadanyos';
        this.ptupuCondicionEdadAnyos.alias = this.langMng.translateText(
            'cls_Pregunta_svc_TMODIFICAR_inArg_pt_p_CondicionEdadAnyos',
            'Condicionada por edad');
        this.ptupuCondicionEdadAnyos.mandatory = false;
        this.ptupuCondicionEdadAnyos.dataType = Field.dtNat;
        this.ptupuCondicionEdadAnyos.assignCSS();
        this.fields.push(this.ptupuCondicionEdadAnyos);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // pt_p_CondicionEdadAnyos
            const defValptupuCondicionEdadAnyos = new Promise<void>((resolveDefValue) => {
                this.ptupuCondicionEdadAnyos.setValue(0);
                resolveDefValue();
            });
            promiseArr.push(defValptupuCondicionEdadAnyos);

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
            ['Pregunta'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisPregunta.setValue(this.context.exchangeInfo.selectedOids);
            this.setOidFieldsValueputhisPregunta();
            this.executeDependecyRulesputhispregunta('SetValue', true);
            this.puthisPregunta.enabled = false;
            this.executeDependecyRulesputhispregunta('SetEnabled', true);
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
            if (lastRole === 'Seccion') {
                this.ptupuevcSeccion.setValue(lastRoleOid);
                this.executeDependecyRulesptupuevcseccion('SetValue', true);
                this.ptupuevcSeccion.enabled = false;
                this.executeDependecyRulesptupuevcseccion('SetEnabled', true);
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptupuevcSeccion
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Seccion', 'IC_Seccion', [], null, '').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuevcSeccion.loadPreload(response.results);
                } else {
                    this.ptupuevcSeccion.loadPreload([]);
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
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisPregunta'.toLowerCase()) {
            this.puthisPregunta.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueputhisPregunta();
            this.executeDependecyRulesputhispregunta('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisPregunta argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhispregunta(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhispregunta();
        }
        if ('SetValue' === event && this.puthisPregunta.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisPregunta();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisPregunta argument
     */
    private setSuppInfoputhispregunta(): void {

        const displaySetIC = 'Numero';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisPregunta.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Pregunta.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueputhisPregunta();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisPregunta.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Pregunta.name,
                            value.oid, displaySetIC, [Field.dtInt]);
                    }
                }
                this.setOidFieldsValueputhisPregunta();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisPregunta argument
     */
    private executeDependecyRules1puthisPregunta(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisPregunta,
                'descripcion,esnumero,seccion.Identificador,numorden,obsoblig,respmultiple,solohombres,solomujeres,valormax,valormin' +
                ',valorsnobliga,seenviaalcore,condicionedad,condicionedadanyos');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisPreguntaActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisPregunta argument
     */
    private executeDependecyRules1puthisPreguntaActions(): void {
        const varputhispregunta = this.getFirstInstanceFromCache(this.puthisPregunta);
        // v <> NULL
        if (varputhispregunta && !this.util.isNull(varputhispregunta)) {
            // pt_p_Descripcion.SetValue( v.descripcion )
            this.ptupuDescripcion.setValue(varputhispregunta.get('descripcion'));
            // pt_p_EsNumero.SetValue( v.esnumero )
            this.ptupuEsNumero.setValue(this.util.getBool(varputhispregunta.get('esnumero')));
            this.executeDependecyRulesptupuesnumero('SetValue', true);
            // pt_p_evcSeccion.SetValue( v.seccion )
            this.ptupuevcSeccion.setValue(this.util.oidBuilder.buildOidSeccion(
                this.util.getInt(varputhispregunta.get('seccion.Identificador'))));
            this.executeDependecyRulesptupuevcseccion('SetValue', true);
            // pt_p_NuevoOrden.SetValue( v.numorden )
            this.ptupuNuevoOrden.setValue(this.util.getInt(varputhispregunta.get('numorden')));
            // pt_p_ObsOblig.SetValue( v.obsoblig )
            this.ptupuObsOblig.setValue(this.util.getBool(varputhispregunta.get('obsoblig')));
            // pt_p_RespMultiple.SetValue( v.respmultiple )
            this.ptupuRespMultiple.setValue(this.util.getBool(varputhispregunta.get('respmultiple')));
            // pt_p_SoloHombres.SetValue( v.solohombres )
            this.ptupuSoloHombres.setValue(this.util.getBool(varputhispregunta.get('solohombres')));
            this.executeDependecyRulesptupusolohombres('SetValue', true);
            // pt_p_SoloMujeres.SetValue( v.solomujeres )
            this.ptupuSoloMujeres.setValue(this.util.getBool(varputhispregunta.get('solomujeres')));
            this.executeDependecyRulesptupusolomujeres('SetValue', true);
            // pt_p_ValorMax.SetValue( v.valormax )
            this.ptupuValorMax.setValue(this.util.getReal(varputhispregunta.get('valormax')));
            // pt_p_ValorMin.SetValue( v.valormin )
            this.ptupuValorMin.setValue(this.util.getReal(varputhispregunta.get('valormin')));
            // pt_p_ValorSNObliga.SetValue( v.valorsnobliga )
            this.ptupuValorSNObliga.setValue(this.util.getBool(varputhispregunta.get('valorsnobliga')));
            // pt_p_SeEnviaAlCORE.SetValue( v.seenviaalcore )
            this.ptupuSeEnviaAlCORE.setValue(this.util.getBool(varputhispregunta.get('seenviaalcore')));
            // pt_p_CondicionEdad.SetValue( v.CondicionEdad )
            this.ptupuCondicionEdad.setValue(this.util.getInt(varputhispregunta.get('condicionedad')));
            this.executeDependecyRulesptupucondicionedad('SetValue', true);
            // pt_p_CondicionEdadAnyos.SetValue( v.CondicionEdadAnyos )
            this.ptupuCondicionEdadAnyos.setValue(this.util.getInt(varputhispregunta.get('condicionedadanyos')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Set values to the Oid fields and supplementary information of p_thisPregunta lense argument
    */
    private setOidFieldsValueputhisPregunta(): void {
        if (this.puthisPregunta.getSelectedInstances().length > 0) {
            if (this.puthisPregunta.getSelectedInstances().length > 1) {
                this.puthisPregunta.oidFields = [null];
                this.puthisPregunta.editorsEnabled = false;
                this.puthisPregunta.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.puthisPregunta.getSelectedInstances().length.toString());
            } else {
                this.puthisPregunta.editorsEnabled = true;
                this.puthisPregunta.oidFields[0] = this.puthisPregunta.getSelectedInstances()[0].oid.numero;
                this.puthisPregunta.supplementaryInfo = this.puthisPregunta.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.puthisPregunta.oidFields = Array(1);
            this.puthisPregunta.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the p_thisPregunta lense argument
     */
    public onputhispreguntaChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.puthisPregunta.oidFields) {
            if (this.util.isNull(field)) {
                fieldsHasValue = false;
                break;
            }
        }

        this.puthisPregunta.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            numero: this.puthisPregunta.oidFields[0]
            };
            this.puthisPregunta.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Pregunta.name, oid,
                'Numero');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.puthisPregunta.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Pregunta.name, value.oid)) {
                        this.puthisPregunta.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.puthisPregunta.alias));
                        this.puthisPregunta.cleanSelectedInstances();
                        this.puthisPregunta.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesputhispregunta('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean p_thisPregunta argument value
     */
    public cleanputhispregunta(): void {
        this.clearValidationMessages();
        this.puthisPregunta.clean();
        this.puthisPregunta.oidFields = Array(1);
        this.executeDependecyRulesputhispregunta('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_EsNumero argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuesnumero(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuEsNumero();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuEsNumero();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_EsNumero argument
     */
    private executeDependecyRules1ptupuEsNumero(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptupuEsNumeroActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_EsNumero argument
     */
    private executeDependecyRules1ptupuEsNumeroActions(): void {
        // v <> NULL AND v = true
        if (!this.util.isNull(this.util.getBool(this.ptupuEsNumero.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptupuEsNumero.value), true)) {
            // pt_p_ValorMax.SetActive( TRUE )
            this.ptupuValorMax.enabled = true;
            // pt_p_ValorMin.SetActive( TRUE )
            this.ptupuValorMin.enabled = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_EsNumero argument
     */
    private executeDependecyRules2ptupuEsNumero(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptupuEsNumeroActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_EsNumero argument
     */
    private executeDependecyRules2ptupuEsNumeroActions(): void {
        // v <> NULL AND v = false
        if (!this.util.isNull(this.util.getBool(this.ptupuEsNumero.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptupuEsNumero.value), false)) {
            // pt_p_ValorMax.SetValue( NULL )
            this.ptupuValorMax.setValue(null);
            // pt_p_ValorMax.SetActive( FALSE )
            this.ptupuValorMax.enabled = false;
            // pt_p_ValorMin.SetValue( NULL )
            this.ptupuValorMin.setValue(null);
            // pt_p_ValorMin.SetActive( FALSE )
            this.ptupuValorMin.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_EsNumero argument
     */
    public onptupuesnumeroChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptupuesnumero('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_SoloHombres argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupusolohombres(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuSoloHombres();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuSoloHombres();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_SoloHombres argument
     */
    private executeDependecyRules1ptupuSoloHombres(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptupuSoloHombresActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_SoloHombres argument
     */
    private executeDependecyRules1ptupuSoloHombresActions(): void {
        // v <> NULL AND v = TRUE
        if (!this.util.isNull(this.util.getBool(this.ptupuSoloHombres.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptupuSoloHombres.value), true)) {
            // pt_p_SoloMujeres.SetValue( FALSE )
            this.ptupuSoloMujeres.setValue(false);
            this.executeDependecyRulesptupusolomujeres('SetValue', true);
            // pt_p_SoloMujeres.SetActive( FALSE )
            this.ptupuSoloMujeres.enabled = false;
            this.executeDependecyRulesptupusolomujeres('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_SoloHombres argument
     */
    private executeDependecyRules2ptupuSoloHombres(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptupuSoloHombresActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_SoloHombres argument
     */
    private executeDependecyRules2ptupuSoloHombresActions(): void {
        // v <> NULL AND v = FALSE
        if (!this.util.isNull(this.util.getBool(this.ptupuSoloHombres.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptupuSoloHombres.value), false)) {
            // pt_p_SoloMujeres.SetActive( TRUE )
            this.ptupuSoloMujeres.enabled = true;
            this.executeDependecyRulesptupusolomujeres('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_SoloHombres argument
     */
    public onptupusolohombresChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptupusolohombres('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_SoloMujeres argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupusolomujeres(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuSoloMujeres();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuSoloMujeres();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_SoloMujeres argument
     */
    private executeDependecyRules1ptupuSoloMujeres(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptupuSoloMujeresActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_SoloMujeres argument
     */
    private executeDependecyRules1ptupuSoloMujeresActions(): void {
        // v <> NULL AND v = TRUE
        if (!this.util.isNull(this.util.getBool(this.ptupuSoloMujeres.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptupuSoloMujeres.value), true)) {
            // pt_p_SoloHombres.SetValue( FALSE )
            this.ptupuSoloHombres.setValue(false);
            this.executeDependecyRulesptupusolohombres('SetValue', true);
            // pt_p_SoloHombres.SetActive( FALSE )
            this.ptupuSoloHombres.enabled = false;
            this.executeDependecyRulesptupusolohombres('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_SoloMujeres argument
     */
    private executeDependecyRules2ptupuSoloMujeres(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptupuSoloMujeresActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_SoloMujeres argument
     */
    private executeDependecyRules2ptupuSoloMujeresActions(): void {
        // v <> NULL AND v = FALSE
        if (!this.util.isNull(this.util.getBool(this.ptupuSoloMujeres.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptupuSoloMujeres.value), false)) {
            // pt_p_SoloHombres.SetActive( TRUE )
            this.ptupuSoloHombres.enabled = true;
            this.executeDependecyRulesptupusolohombres('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_SoloMujeres argument
     */
    public onptupusolomujeresChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptupusolomujeres('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_evcSeccion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuevcseccion(event: string, internal: boolean): void {
        if ('SetValue' === event && this.ptupuevcSeccion.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetActive' === event && internal) {
            this.executeDependecyRules1ptupuevcSeccion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_evcSeccion argument
     */
    private executeDependecyRules1ptupuevcSeccion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuevcSeccion,
                'Identificador');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptupuevcSeccionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_evcSeccion argument
     */
    private executeDependecyRules1ptupuevcSeccionActions(): void {
        const varptupuevcseccion = this.getFirstInstanceFromCache(this.ptupuevcSeccion);
        // v = FALSE
        if (varptupuevcseccion && this.util.valueEquals(varptupuevcseccion?.oid, false)) {
            // pt_p_evcSeccion.SetActive( TRUE )
            this.ptupuevcSeccion.enabled = true;
            this.executeDependecyRulesptupuevcseccion('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_evcSeccion argument
     */
    public onptupuevcseccionChange(): void {
        this.executeDependecyRulesptupuevcseccion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_CondicionEdad argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupucondicionedad(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuCondicionEdad();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuCondicionEdad();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_CondicionEdad argument
     */
    private executeDependecyRules1ptupuCondicionEdad(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptupuCondicionEdadActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_CondicionEdad argument
     */
    private executeDependecyRules1ptupuCondicionEdadActions(): void {
        // v <> NULL AND v > 0
        if (!this.util.isNull(this.util.getInt(this.ptupuCondicionEdad.value)) &&
            this.util.getInt(this.ptupuCondicionEdad.value) > 0) {
            // pt_p_CondicionEdadAnyos.SetActive( TRUE )
            this.ptupuCondicionEdadAnyos.enabled = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_CondicionEdad argument
     */
    private executeDependecyRules2ptupuCondicionEdad(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptupuCondicionEdadActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_CondicionEdad argument
     */
    private executeDependecyRules2ptupuCondicionEdadActions(): void {
        // v <> NULL AND v = 0
        if (!this.util.isNull(this.util.getInt(this.ptupuCondicionEdad.value)) &&
            this.util.valueEquals(this.util.getInt(this.ptupuCondicionEdad.value), 0)) {
            // pt_p_CondicionEdadAnyos.SetActive( FALSE )
            this.ptupuCondicionEdadAnyos.enabled = false;
            // pt_p_CondicionEdadAnyos.SetValue( NULL )
            this.ptupuCondicionEdadAnyos.setValue(null);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_CondicionEdad argument
     */
    public onptupucondicionedadChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptupucondicionedad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisPregunta'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisPregunta.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Pregunta';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
