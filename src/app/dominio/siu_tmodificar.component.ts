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
    selector: 'imes-dominio-siu-tmodificar',
    templateUrl: './siu_tmodificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DominioSIUuTMODIFICARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisDominio: FieldOVLenseSearch;
    public puReqCuesMed: FieldDefinedSelection;
    public puNoCuesMedTras: FieldDefinedSelection;
    public puNuevaAfiliacion: FieldDefinedSelection;
    public puInclusion: FieldDefinedSelection;
    public puAcepCuesMat: FieldDefinedSelection;
    public puAcepCuesNeo: FieldDefinedSelection;
    public puAcepBBGestante: FieldDefinedSelection;
    public puIgnorarPreexistencias: FieldDefinedSelection;
    public puProrrateoUsuExistente: FieldDefinedSelection;
    public puInclusionModGrupoAsoc: FieldDefinedSelection;
    public puPermiteRechazadosAfi: FieldDefinedSelection;
    public puAcepPolizaInter: FieldDefinedSelection;
    public puMostrarPreexAnexos: FieldDefinedSelection;
    public puMostrarPreexContrato: FieldDefinedSelection;
    public puTramiteEnLinea: FieldDefinedSelection;
    public ptVigenciaRadicacion: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431701422080423Ser_41UIServ_1';
        this.className = ModelConstants.Dominio.name;
        this.iuName = ModelConstants.Dominio.siuutmodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TMODIFICAR';
        this.title = this.langMng.translateText('cls_Dominio_svc_TMODIFICAR',
            'Modificar dominio');

        // Create inbound argument components
        this.puthisDominio = new FieldOVLenseSearch(this.langMng);
        this.puReqCuesMed = new FieldDefinedSelection(this.langMng);
        this.puNoCuesMedTras = new FieldDefinedSelection(this.langMng);
        this.puNuevaAfiliacion = new FieldDefinedSelection(this.langMng);
        this.puInclusion = new FieldDefinedSelection(this.langMng);
        this.puAcepCuesMat = new FieldDefinedSelection(this.langMng);
        this.puAcepCuesNeo = new FieldDefinedSelection(this.langMng);
        this.puAcepBBGestante = new FieldDefinedSelection(this.langMng);
        this.puIgnorarPreexistencias = new FieldDefinedSelection(this.langMng);
        this.puProrrateoUsuExistente = new FieldDefinedSelection(this.langMng);
        this.puInclusionModGrupoAsoc = new FieldDefinedSelection(this.langMng);
        this.puPermiteRechazadosAfi = new FieldDefinedSelection(this.langMng);
        this.puAcepPolizaInter = new FieldDefinedSelection(this.langMng);
        this.puMostrarPreexAnexos = new FieldDefinedSelection(this.langMng);
        this.puMostrarPreexContrato = new FieldDefinedSelection(this.langMng);
        this.puTramiteEnLinea = new FieldDefinedSelection(this.langMng);
        this.ptVigenciaRadicacion = new FieldDefinedSelection(this.langMng);

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
            'cls_Dominio_svc_TMODIFICAR_inArg_p_thisDominio',
            'Dominio');
        this.puthisDominio.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisDominio.mandatory = true;
        this.puthisDominio.dataType = ModelConstants.Dominio.name;
        this.puthisDominio.allowMultiSelect = true;
        this.puthisDominio.maxLength = 250;
        this.puthisDominio.assignCSS();
        this.fields.push(this.puthisDominio);

        this.puReqCuesMed.nameInRequest = 'p_reqcuesmed';
        this.puReqCuesMed.alias = this.langMng.translateText(
            'cls_Dominio_svc_TMODIFICAR_inArg_p_ReqCuesMed',
            'Cuestionario médico');
        this.puReqCuesMed.mandatory = true;
        this.puReqCuesMed.dataType = Field.dtBool;
        this.puReqCuesMed.options = DefinedSelections.DS_SINO;
        this.puReqCuesMed.value = false;
        this.puReqCuesMed.assignCSS();
        this.fields.push(this.puReqCuesMed);

        this.puNoCuesMedTras.nameInRequest = 'p_nocuesmedtras';
        this.puNoCuesMedTras.alias = this.langMng.translateText(
            'cls_Dominio_svc_TMODIFICAR_inArg_p_NoCuesMedTras',
            'No cuestionario si traslado');
        this.puNoCuesMedTras.mandatory = true;
        this.puNoCuesMedTras.dataType = Field.dtBool;
        this.puNoCuesMedTras.options = DefinedSelections.DS_SINO;
        this.puNoCuesMedTras.assignCSS();
        this.fields.push(this.puNoCuesMedTras);

        this.puNuevaAfiliacion.nameInRequest = 'p_nuevaafiliacion';
        this.puNuevaAfiliacion.alias = this.langMng.translateText(
            'cls_Dominio_svc_TMODIFICAR_inArg_p_NuevaAfiliacion',
            'Nueva afiliación');
        this.puNuevaAfiliacion.mandatory = true;
        this.puNuevaAfiliacion.dataType = Field.dtBool;
        this.puNuevaAfiliacion.options = DefinedSelections.DS_SINO;
        this.puNuevaAfiliacion.value = false;
        this.puNuevaAfiliacion.assignCSS();
        this.fields.push(this.puNuevaAfiliacion);

        this.puInclusion.nameInRequest = 'p_inclusion';
        this.puInclusion.alias = this.langMng.translateText(
            'cls_Dominio_svc_TMODIFICAR_inArg_p_Inclusion',
            'Permitido');
        this.puInclusion.mandatory = true;
        this.puInclusion.dataType = Field.dtBool;
        this.puInclusion.options = DefinedSelections.DS_SINO;
        this.puInclusion.value = false;
        this.puInclusion.assignCSS();
        this.fields.push(this.puInclusion);

        this.puAcepCuesMat.nameInRequest = 'p_acepcuesmat';
        this.puAcepCuesMat.alias = this.langMng.translateText(
            'cls_Dominio_svc_TMODIFICAR_inArg_p_AcepCuesMat',
            'Cuestionario maternal');
        this.puAcepCuesMat.mandatory = true;
        this.puAcepCuesMat.dataType = Field.dtBool;
        this.puAcepCuesMat.options = DefinedSelections.DS_SINO;
        this.puAcepCuesMat.value = false;
        this.puAcepCuesMat.assignCSS();
        this.fields.push(this.puAcepCuesMat);

        this.puAcepCuesNeo.nameInRequest = 'p_acepcuesneo';
        this.puAcepCuesNeo.alias = this.langMng.translateText(
            'cls_Dominio_svc_TMODIFICAR_inArg_p_AcepCuesNeo',
            'Cuestionario neonatal');
        this.puAcepCuesNeo.mandatory = true;
        this.puAcepCuesNeo.dataType = Field.dtBool;
        this.puAcepCuesNeo.options = DefinedSelections.DS_SINO;
        this.puAcepCuesNeo.value = false;
        this.puAcepCuesNeo.assignCSS();
        this.fields.push(this.puAcepCuesNeo);

        this.puAcepBBGestante.nameInRequest = 'p_acepbbgestante';
        this.puAcepBBGestante.alias = this.langMng.translateText(
            'cls_Dominio_svc_TMODIFICAR_inArg_p_AcepBBGestante',
            'Bebe gestante');
        this.puAcepBBGestante.mandatory = true;
        this.puAcepBBGestante.dataType = Field.dtBool;
        this.puAcepBBGestante.options = DefinedSelections.DS_SINO;
        this.puAcepBBGestante.value = false;
        this.puAcepBBGestante.assignCSS();
        this.fields.push(this.puAcepBBGestante);

        this.puIgnorarPreexistencias.nameInRequest = 'p_ignorarpreexistencias';
        this.puIgnorarPreexistencias.alias = this.langMng.translateText(
            'cls_Dominio_svc_TMODIFICAR_inArg_p_IgnorarPreexistencias',
            'Ignorar preexistencias');
        this.puIgnorarPreexistencias.mandatory = true;
        this.puIgnorarPreexistencias.dataType = Field.dtBool;
        this.puIgnorarPreexistencias.options = DefinedSelections.DS_SINO;
        this.puIgnorarPreexistencias.assignCSS();
        this.fields.push(this.puIgnorarPreexistencias);

        this.puProrrateoUsuExistente.nameInRequest = 'p_prorrateousuexistente';
        this.puProrrateoUsuExistente.alias = this.langMng.translateText(
            'cls_Dominio_svc_TMODIFICAR_inArg_p_ProrrateoUsuExistente',
            'Prorrateo usuarios existentes');
        this.puProrrateoUsuExistente.mandatory = true;
        this.puProrrateoUsuExistente.dataType = Field.dtBool;
        this.puProrrateoUsuExistente.options = DefinedSelections.DS_SINO;
        this.puProrrateoUsuExistente.value = false;
        this.puProrrateoUsuExistente.assignCSS();
        this.fields.push(this.puProrrateoUsuExistente);

        this.puInclusionModGrupoAsoc.nameInRequest = 'p_inclusionmodgrupoasoc';
        this.puInclusionModGrupoAsoc.alias = this.langMng.translateText(
            'cls_Dominio_svc_TMODIFICAR_inArg_p_InclusionModGrupoAsoc',
            'Modificación grupo asociado');
        this.puInclusionModGrupoAsoc.mandatory = true;
        this.puInclusionModGrupoAsoc.dataType = Field.dtBool;
        this.puInclusionModGrupoAsoc.options = DefinedSelections.DS_SINO;
        this.puInclusionModGrupoAsoc.assignCSS();
        this.fields.push(this.puInclusionModGrupoAsoc);

        this.puPermiteRechazadosAfi.nameInRequest = 'p_permiterechazadosafi';
        this.puPermiteRechazadosAfi.alias = this.langMng.translateText(
            'cls_Dominio_svc_TMODIFICAR_inArg_p_PermiteRechazadosAfi',
            'Permite rechazados afiliación');
        this.puPermiteRechazadosAfi.mandatory = true;
        this.puPermiteRechazadosAfi.dataType = Field.dtBool;
        this.puPermiteRechazadosAfi.options = DefinedSelections.DS_SINO;
        this.puPermiteRechazadosAfi.assignCSS();
        this.fields.push(this.puPermiteRechazadosAfi);

        this.puAcepPolizaInter.nameInRequest = 'p_aceppolizainter';
        this.puAcepPolizaInter.alias = this.langMng.translateText(
            'cls_Dominio_svc_TMODIFICAR_inArg_p_AcepPolizaInter',
            'Poliza Internacional');
        this.puAcepPolizaInter.mandatory = true;
        this.puAcepPolizaInter.dataType = Field.dtBool;
        this.puAcepPolizaInter.options = DefinedSelections.DS_SINO;
        this.puAcepPolizaInter.assignCSS();
        this.fields.push(this.puAcepPolizaInter);

        this.puMostrarPreexAnexos.nameInRequest = 'p_mostrarpreexanexos';
        this.puMostrarPreexAnexos.alias = this.langMng.translateText(
            'cls_Dominio_svc_TMODIFICAR_inArg_p_MostrarPreexAnexos',
            'En Anexos');
        this.puMostrarPreexAnexos.mandatory = true;
        this.puMostrarPreexAnexos.dataType = Field.dtBool;
        this.puMostrarPreexAnexos.options = DefinedSelections.DS_SINO;
        this.puMostrarPreexAnexos.assignCSS();
        this.fields.push(this.puMostrarPreexAnexos);

        this.puMostrarPreexContrato.nameInRequest = 'p_mostrarpreexcontrato';
        this.puMostrarPreexContrato.alias = this.langMng.translateText(
            'cls_Dominio_svc_TMODIFICAR_inArg_p_MostrarPreexContrato',
            'En Contrato');
        this.puMostrarPreexContrato.mandatory = true;
        this.puMostrarPreexContrato.dataType = Field.dtBool;
        this.puMostrarPreexContrato.options = DefinedSelections.DS_SINO;
        this.puMostrarPreexContrato.assignCSS();
        this.fields.push(this.puMostrarPreexContrato);

        this.puTramiteEnLinea.nameInRequest = 'p_tramiteenlinea';
        this.puTramiteEnLinea.alias = this.langMng.translateText(
            'cls_Dominio_svc_TMODIFICAR_inArg_p_TramiteEnLinea',
            'Trámite en línea');
        this.puTramiteEnLinea.mandatory = true;
        this.puTramiteEnLinea.dataType = Field.dtBool;
        this.puTramiteEnLinea.options = DefinedSelections.DS_SINO;
        this.puTramiteEnLinea.assignCSS();
        this.fields.push(this.puTramiteEnLinea);

        this.ptVigenciaRadicacion.nameInRequest = 'ptvigenciaradicacion';
        this.ptVigenciaRadicacion.alias = this.langMng.translateText(
            'cls_Dominio_svc_TMODIFICAR_inArg_ptVigenciaRadicacion',
            'Vigencia de radicación');
        this.ptVigenciaRadicacion.mandatory = true;
        this.ptVigenciaRadicacion.dataType = Field.dtBool;
        this.ptVigenciaRadicacion.options = DefinedSelections.DS_SINO;
        this.ptVigenciaRadicacion.value = false;
        this.ptVigenciaRadicacion.assignCSS();
        this.fields.push(this.ptVigenciaRadicacion);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // p_NoCuesMedTras
            const defValpuNoCuesMedTras = new Promise<void>((resolveDefValue) => {
                this.puNoCuesMedTras.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuNoCuesMedTras);

            // p_IgnorarPreexistencias
            const defValpuIgnorarPreexistencias = new Promise<void>((resolveDefValue) => {
                this.puIgnorarPreexistencias.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuIgnorarPreexistencias);

            // p_InclusionModGrupoAsoc
            const defValpuInclusionModGrupoAsoc = new Promise<void>((resolveDefValue) => {
                this.puInclusionModGrupoAsoc.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuInclusionModGrupoAsoc);

            // p_PermiteRechazadosAfi
            const defValpuPermiteRechazadosAfi = new Promise<void>((resolveDefValue) => {
                this.puPermiteRechazadosAfi.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuPermiteRechazadosAfi);

            // p_AcepPolizaInter
            const defValpuAcepPolizaInter = new Promise<void>((resolveDefValue) => {
                this.puAcepPolizaInter.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuAcepPolizaInter);

            // p_MostrarPreexAnexos
            const defValpuMostrarPreexAnexos = new Promise<void>((resolveDefValue) => {
                this.puMostrarPreexAnexos.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuMostrarPreexAnexos);

            // p_MostrarPreexContrato
            const defValpuMostrarPreexContrato = new Promise<void>((resolveDefValue) => {
                this.puMostrarPreexContrato.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuMostrarPreexContrato);

            // p_TramiteEnLinea
            const defValpuTramiteEnLinea = new Promise<void>((resolveDefValue) => {
                this.puTramiteEnLinea.setValue(true);
                resolveDefValue();
            });
            promiseArr.push(defValpuTramiteEnLinea);

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
                'reqcuesmed,nocuesmedtras,nuevaafiliacion,inclusion,acepcuesmat,acepcuesneo,acepbbgestante,ignorarpreexistencias' +
                ',prorrateousuexistente,inclusionmodgrupoasoc,permiterechazadosafi,aceppolizainter,mostrarpreexanexos' +
                ',mostrarpreexcontrato,tramiteenlinea,vigenciaradicacion');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisDominioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
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
        // v <> NULL
        if (varputhisdominio && !this.util.isNull(varputhisdominio)) {
            // p_ReqCuesMed.SetValue( v.reqcuesmed )
            this.puReqCuesMed.setValue(this.util.getBool(varputhisdominio.get('reqcuesmed')));
            // p_NoCuesMedTras.SetValue( v.nocuesmedtras )
            this.puNoCuesMedTras.setValue(this.util.getBool(varputhisdominio.get('nocuesmedtras')));
            // p_NuevaAfiliacion.SetValue( v.nuevaafiliacion )
            this.puNuevaAfiliacion.setValue(this.util.getBool(varputhisdominio.get('nuevaafiliacion')));
            // p_Inclusion.SetValue( v.inclusion )
            this.puInclusion.setValue(this.util.getBool(varputhisdominio.get('inclusion')));
            this.executeDependecyRulespuinclusion('SetValue', true);
            // p_AcepCuesMat.SetValue( v.acepcuesmat )
            this.puAcepCuesMat.setValue(this.util.getBool(varputhisdominio.get('acepcuesmat')));
            // p_AcepCuesNeo.SetValue( v.acepcuesneo )
            this.puAcepCuesNeo.setValue(this.util.getBool(varputhisdominio.get('acepcuesneo')));
            // p_AcepBBGestante.SetValue( v.acepbbgestante )
            this.puAcepBBGestante.setValue(this.util.getBool(varputhisdominio.get('acepbbgestante')));
            // p_IgnorarPreexistencias.SetValue( v.ignorarpreexistencias )
            this.puIgnorarPreexistencias.setValue(this.util.getBool(varputhisdominio.get('ignorarpreexistencias')));
            // p_ProrrateoUsuExistente.SetValue( v.prorrateousuexistente )
            this.puProrrateoUsuExistente.setValue(this.util.getBool(varputhisdominio.get('prorrateousuexistente')));
            // p_InclusionModGrupoAsoc.SetValue( v.inclusionmodgrupoasoc )
            this.puInclusionModGrupoAsoc.setValue(this.util.getBool(varputhisdominio.get('inclusionmodgrupoasoc')));
            // p_PermiteRechazadosAfi.SetValue( v.permiterechazadosafi )
            this.puPermiteRechazadosAfi.setValue(this.util.getBool(varputhisdominio.get('permiterechazadosafi')));
            // p_AcepPolizaInter.SetValue( v.aceppolizainter )
            this.puAcepPolizaInter.setValue(this.util.getBool(varputhisdominio.get('aceppolizainter')));
            // p_MostrarPreexAnexos.SetValue( v.mostrarpreexanexos )
            this.puMostrarPreexAnexos.setValue(this.util.getBool(varputhisdominio.get('mostrarpreexanexos')));
            // p_MostrarPreexContrato.SetValue( v.mostrarpreexcontrato )
            this.puMostrarPreexContrato.setValue(this.util.getBool(varputhisdominio.get('mostrarpreexcontrato')));
            // p_TramiteEnLinea.SetValue( v.TramiteEnLinea )
            this.puTramiteEnLinea.setValue(this.util.getBool(varputhisdominio.get('tramiteenlinea')));
            // ptVigenciaRadicacion.SetValue( v.VigenciaRadicacion )
            this.ptVigenciaRadicacion.setValue(this.util.getBool(varputhisdominio.get('vigenciaradicacion')));
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
     * Evaluate dependendy rules for p_Inclusion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuinclusion(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puInclusion();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2puInclusion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for p_Inclusion argument
     */
    private executeDependecyRules1puInclusion(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1puInclusionActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_Inclusion argument
     */
    private executeDependecyRules1puInclusionActions(): void {
        // v <> NULL AND v = TRUE
        if (!this.util.isNull(this.util.getBool(this.puInclusion.value)) &&
            this.util.valueEquals(this.util.getBool(this.puInclusion.value), true)) {
            // p_InclusionModGrupoAsoc.SetActive( TRUE )
            this.puInclusionModGrupoAsoc.enabled = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for p_Inclusion argument
     */
    private executeDependecyRules2puInclusion(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2puInclusionActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for p_Inclusion argument
     */
    private executeDependecyRules2puInclusionActions(): void {
        // v <> NULL AND v = FALSE
        if (!this.util.isNull(this.util.getBool(this.puInclusion.value)) &&
            this.util.valueEquals(this.util.getBool(this.puInclusion.value), false)) {
            // p_InclusionModGrupoAsoc.SetActive( FALSE )
            this.puInclusionModGrupoAsoc.enabled = false;
            // p_InclusionModGrupoAsoc.SetValue( FALSE )
            this.puInclusionModGrupoAsoc.setValue(false);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_Inclusion argument
     */
    public onpuinclusionChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulespuinclusion('SetValue', false);
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

        if (groupId === '4') {
            isVisible = this.puInclusion.visible ||
                this.puInclusionModGrupoAsoc.visible;
        }
        if (groupId === '12') {
            isVisible = this.puMostrarPreexAnexos.visible ||
                this.puMostrarPreexContrato.visible;
        }
        return isVisible;
    }

    /**
     * Returns the alias group
     * @param groupId Group id
     */
    public getGroupAlias(groupId: string): string {
        let alias = '';

        if (groupId === '4') {
            alias = this.langMng.translateText('4',
                'Inclusiones');
        }
        if (groupId === '12') {
            alias = this.langMng.translateText('12',
                'Mostrar preexistencias');
        }
        return alias;
    }
}
