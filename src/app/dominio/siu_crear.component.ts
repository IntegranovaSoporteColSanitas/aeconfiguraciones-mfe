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
    selector: 'imes-dominio-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DominioSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puagrPlanT: FieldOVPreload;
    public puagrProductoT: FieldOVPreload;
    public puagrGrupoAsesores: FieldOVLenseSearch;
    public puagrGrupoAreaMedica: FieldOVLenseSearch;
    public puatrReqCuesMed: FieldDefinedSelection;
    public puatrNoCuesMedTras: FieldDefinedSelection;
    public puatrNuevaAfiliacion: FieldDefinedSelection;
    public puatrInclusion: FieldDefinedSelection;
    public puatrAcepCuesMat: FieldDefinedSelection;
    public puatrAcepCuesNeo: FieldDefinedSelection;
    public puatrAcepBBGestante: FieldDefinedSelection;
    public puatrMostrarPreexAnexos: FieldDefinedSelection;
    public puatrMostrarPreexContrato: FieldDefinedSelection;
    public puatrIgnorarPreexistencias: FieldDefinedSelection;
    public puatrProrrateoUsuExistente: FieldDefinedSelection;
    public puatrInclusionModGrupoAsoc: FieldDefinedSelection;
    public puatrPermiteRechazadosAfi: FieldDefinedSelection;
    public puatrAcepPolizaInter: FieldDefinedSelection;
    public puatrNovExcepcionReqDoc: FieldDefinedSelection;
    public puatrSolNovColorOscuro: Field;
    public puatrSolNovColorClaro: Field;
    public puatrSolNovLogo: Field;
    public puatrTramiteEnLinea: FieldDefinedSelection;
    public puatrVigenciaRadicacion: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431701422080423Ser_1UIServ_1';
        this.className = ModelConstants.Dominio.name;
        this.iuName = ModelConstants.Dominio.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_Dominio_svc_crear',
            'Crear dominio');

        // Create inbound argument components
        this.puagrPlanT = new FieldOVPreload(this.langMng);
        this.puagrProductoT = new FieldOVPreload(this.langMng);
        this.puagrGrupoAsesores = new FieldOVLenseSearch(this.langMng);
        this.puagrGrupoAreaMedica = new FieldOVLenseSearch(this.langMng);
        this.puatrReqCuesMed = new FieldDefinedSelection(this.langMng);
        this.puatrNoCuesMedTras = new FieldDefinedSelection(this.langMng);
        this.puatrNuevaAfiliacion = new FieldDefinedSelection(this.langMng);
        this.puatrInclusion = new FieldDefinedSelection(this.langMng);
        this.puatrAcepCuesMat = new FieldDefinedSelection(this.langMng);
        this.puatrAcepCuesNeo = new FieldDefinedSelection(this.langMng);
        this.puatrAcepBBGestante = new FieldDefinedSelection(this.langMng);
        this.puatrMostrarPreexAnexos = new FieldDefinedSelection(this.langMng);
        this.puatrMostrarPreexContrato = new FieldDefinedSelection(this.langMng);
        this.puatrIgnorarPreexistencias = new FieldDefinedSelection(this.langMng);
        this.puatrProrrateoUsuExistente = new FieldDefinedSelection(this.langMng);
        this.puatrInclusionModGrupoAsoc = new FieldDefinedSelection(this.langMng);
        this.puatrPermiteRechazadosAfi = new FieldDefinedSelection(this.langMng);
        this.puatrAcepPolizaInter = new FieldDefinedSelection(this.langMng);
        this.puatrNovExcepcionReqDoc = new FieldDefinedSelection(this.langMng);
        this.puatrSolNovColorOscuro = new Field(this.langMng);
        this.puatrSolNovColorClaro = new Field(this.langMng);
        this.puatrSolNovLogo = new Field(this.langMng);
        this.puatrTramiteEnLinea = new FieldDefinedSelection(this.langMng);
        this.puatrVigenciaRadicacion = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puagrPlanT.nameInRequest = 'p_agrplant';
        this.puagrPlanT.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_agrPlanT',
            'Plan');
        this.puagrPlanT.mandatory = true;
        this.puagrPlanT.dataType = ModelConstants.Planes.name;
        this.puagrPlanT.maxLength = 150;
        this.puagrPlanT.assignCSS();
        this.fields.push(this.puagrPlanT);

        this.puagrProductoT.nameInRequest = 'p_agrproductot';
        this.puagrProductoT.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_agrProductoT',
            'Producto');
        this.puagrProductoT.mandatory = true;
        this.puagrProductoT.dataType = ModelConstants.Productos.name;
        this.puagrProductoT.maxLength = 100;
        this.puagrProductoT.assignCSS();
        this.fields.push(this.puagrProductoT);

        this.puagrGrupoAsesores.nameInRequest = 'p_agrgrupoasesores';
        this.puagrGrupoAsesores.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_agrGrupoAsesores',
            'Grupo Asesores');
        this.puagrGrupoAsesores.mandatory = false;
        this.puagrGrupoAsesores.dataType = ModelConstants.Grupoasignacion.name;
        this.puagrGrupoAsesores.maxLength = 50;
        this.puagrGrupoAsesores.assignCSS();
        this.fields.push(this.puagrGrupoAsesores);

        this.puagrGrupoAreaMedica.nameInRequest = 'p_agrgrupoareamedica';
        this.puagrGrupoAreaMedica.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_agrGrupoAreaMedica',
            'Grupo Área Médica');
        this.puagrGrupoAreaMedica.mandatory = false;
        this.puagrGrupoAreaMedica.dataType = ModelConstants.Grupoasignacion.name;
        this.puagrGrupoAreaMedica.maxLength = 50;
        this.puagrGrupoAreaMedica.assignCSS();
        this.fields.push(this.puagrGrupoAreaMedica);

        this.puatrReqCuesMed.nameInRequest = 'p_atrreqcuesmed';
        this.puatrReqCuesMed.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_atrReqCuesMed',
            'Cuestionario médico');
        this.puatrReqCuesMed.mandatory = true;
        this.puatrReqCuesMed.dataType = Field.dtBool;
        this.puatrReqCuesMed.options = DefinedSelections.DS_SINO;
        this.puatrReqCuesMed.value = false;
        this.puatrReqCuesMed.assignCSS();
        this.fields.push(this.puatrReqCuesMed);

        this.puatrNoCuesMedTras.nameInRequest = 'p_atrnocuesmedtras';
        this.puatrNoCuesMedTras.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_atrNoCuesMedTras',
            'No cuestionario si traslado');
        this.puatrNoCuesMedTras.mandatory = true;
        this.puatrNoCuesMedTras.dataType = Field.dtBool;
        this.puatrNoCuesMedTras.options = DefinedSelections.DS_SINO;
        this.puatrNoCuesMedTras.assignCSS();
        this.fields.push(this.puatrNoCuesMedTras);

        this.puatrNuevaAfiliacion.nameInRequest = 'p_atrnuevaafiliacion';
        this.puatrNuevaAfiliacion.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_atrNuevaAfiliacion',
            'Nueva afiliación');
        this.puatrNuevaAfiliacion.mandatory = true;
        this.puatrNuevaAfiliacion.dataType = Field.dtBool;
        this.puatrNuevaAfiliacion.options = DefinedSelections.DS_SINO;
        this.puatrNuevaAfiliacion.value = false;
        this.puatrNuevaAfiliacion.assignCSS();
        this.fields.push(this.puatrNuevaAfiliacion);

        this.puatrInclusion.nameInRequest = 'p_atrinclusion';
        this.puatrInclusion.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_atrInclusion',
            'Permitido');
        this.puatrInclusion.mandatory = true;
        this.puatrInclusion.dataType = Field.dtBool;
        this.puatrInclusion.options = DefinedSelections.DS_SINO;
        this.puatrInclusion.value = false;
        this.puatrInclusion.assignCSS();
        this.fields.push(this.puatrInclusion);

        this.puatrAcepCuesMat.nameInRequest = 'p_atracepcuesmat';
        this.puatrAcepCuesMat.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_atrAcepCuesMat',
            'Cuestionario maternal');
        this.puatrAcepCuesMat.mandatory = true;
        this.puatrAcepCuesMat.dataType = Field.dtBool;
        this.puatrAcepCuesMat.options = DefinedSelections.DS_SINO;
        this.puatrAcepCuesMat.value = false;
        this.puatrAcepCuesMat.assignCSS();
        this.fields.push(this.puatrAcepCuesMat);

        this.puatrAcepCuesNeo.nameInRequest = 'p_atracepcuesneo';
        this.puatrAcepCuesNeo.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_atrAcepCuesNeo',
            'Cuestionario neonatal');
        this.puatrAcepCuesNeo.mandatory = true;
        this.puatrAcepCuesNeo.dataType = Field.dtBool;
        this.puatrAcepCuesNeo.options = DefinedSelections.DS_SINO;
        this.puatrAcepCuesNeo.value = false;
        this.puatrAcepCuesNeo.assignCSS();
        this.fields.push(this.puatrAcepCuesNeo);

        this.puatrAcepBBGestante.nameInRequest = 'p_atracepbbgestante';
        this.puatrAcepBBGestante.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_atrAcepBBGestante',
            'Bebe gestante');
        this.puatrAcepBBGestante.mandatory = true;
        this.puatrAcepBBGestante.dataType = Field.dtBool;
        this.puatrAcepBBGestante.options = DefinedSelections.DS_SINO;
        this.puatrAcepBBGestante.value = false;
        this.puatrAcepBBGestante.assignCSS();
        this.fields.push(this.puatrAcepBBGestante);

        this.puatrMostrarPreexAnexos.nameInRequest = 'p_atrmostrarpreexanexos';
        this.puatrMostrarPreexAnexos.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_atrMostrarPreexAnexos',
            'Mostrar preexistencias en anexo');
        this.puatrMostrarPreexAnexos.mandatory = true;
        this.puatrMostrarPreexAnexos.dataType = Field.dtBool;
        this.puatrMostrarPreexAnexos.options = DefinedSelections.DS_SINO;
        this.puatrMostrarPreexAnexos.assignCSS();
        this.fields.push(this.puatrMostrarPreexAnexos);

        this.puatrMostrarPreexContrato.nameInRequest = 'p_atrmostrarpreexcontrato';
        this.puatrMostrarPreexContrato.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_atrMostrarPreexContrato',
            'Mostrar preexistencias en contrato');
        this.puatrMostrarPreexContrato.mandatory = true;
        this.puatrMostrarPreexContrato.dataType = Field.dtBool;
        this.puatrMostrarPreexContrato.options = DefinedSelections.DS_SINO;
        this.puatrMostrarPreexContrato.assignCSS();
        this.fields.push(this.puatrMostrarPreexContrato);

        this.puatrIgnorarPreexistencias.nameInRequest = 'p_atrignorarpreexistencias';
        this.puatrIgnorarPreexistencias.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_atrIgnorarPreexistencias',
            'Ignorar preexistencias');
        this.puatrIgnorarPreexistencias.mandatory = true;
        this.puatrIgnorarPreexistencias.dataType = Field.dtBool;
        this.puatrIgnorarPreexistencias.options = DefinedSelections.DS_SINO;
        this.puatrIgnorarPreexistencias.assignCSS();
        this.fields.push(this.puatrIgnorarPreexistencias);

        this.puatrProrrateoUsuExistente.nameInRequest = 'p_atrprorrateousuexistente';
        this.puatrProrrateoUsuExistente.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_atrProrrateoUsuExistente',
            'Prorrateo usuarios existente');
        this.puatrProrrateoUsuExistente.mandatory = true;
        this.puatrProrrateoUsuExistente.dataType = Field.dtBool;
        this.puatrProrrateoUsuExistente.options = DefinedSelections.DS_SINO;
        this.puatrProrrateoUsuExistente.value = false;
        this.puatrProrrateoUsuExistente.assignCSS();
        this.fields.push(this.puatrProrrateoUsuExistente);

        this.puatrInclusionModGrupoAsoc.nameInRequest = 'p_atrinclusionmodgrupoasoc';
        this.puatrInclusionModGrupoAsoc.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_atrInclusionModGrupoAsoc',
            'Modificación grupo asociado');
        this.puatrInclusionModGrupoAsoc.mandatory = true;
        this.puatrInclusionModGrupoAsoc.dataType = Field.dtBool;
        this.puatrInclusionModGrupoAsoc.options = DefinedSelections.DS_SINO;
        this.puatrInclusionModGrupoAsoc.assignCSS();
        this.fields.push(this.puatrInclusionModGrupoAsoc);

        this.puatrPermiteRechazadosAfi.nameInRequest = 'p_atrpermiterechazadosafi';
        this.puatrPermiteRechazadosAfi.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_atrPermiteRechazadosAfi',
            'Permite rechazados afiliación');
        this.puatrPermiteRechazadosAfi.mandatory = true;
        this.puatrPermiteRechazadosAfi.dataType = Field.dtBool;
        this.puatrPermiteRechazadosAfi.options = DefinedSelections.DS_SINO;
        this.puatrPermiteRechazadosAfi.assignCSS();
        this.fields.push(this.puatrPermiteRechazadosAfi);

        this.puatrAcepPolizaInter.nameInRequest = 'p_atraceppolizainter';
        this.puatrAcepPolizaInter.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_atrAcepPolizaInter',
            'Poliza Internacional');
        this.puatrAcepPolizaInter.mandatory = true;
        this.puatrAcepPolizaInter.dataType = Field.dtBool;
        this.puatrAcepPolizaInter.options = DefinedSelections.DS_SINO;
        this.puatrAcepPolizaInter.assignCSS();
        this.fields.push(this.puatrAcepPolizaInter);

        this.puatrNovExcepcionReqDoc.nameInRequest = 'p_atrnovexcepcionreqdoc';
        this.puatrNovExcepcionReqDoc.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_atrNovExcepcionReqDoc',
            'Novedades Excepción requiere documentos');
        this.puatrNovExcepcionReqDoc.mandatory = true;
        this.puatrNovExcepcionReqDoc.dataType = Field.dtBool;
        this.puatrNovExcepcionReqDoc.options = DefinedSelections.DS_SINO;
        this.puatrNovExcepcionReqDoc.assignCSS();
        this.fields.push(this.puatrNovExcepcionReqDoc);

        this.puatrSolNovColorOscuro.nameInRequest = 'p_atrsolnovcoloroscuro';
        this.puatrSolNovColorOscuro.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_atrSolNovColorOscuro',
            'Color oscuro');
        this.puatrSolNovColorOscuro.mandatory = false;
        this.puatrSolNovColorOscuro.dataType = Field.dtString;
        this.puatrSolNovColorOscuro.maxLength = 10;
        this.puatrSolNovColorOscuro.assignCSS();
        this.fields.push(this.puatrSolNovColorOscuro);

        this.puatrSolNovColorClaro.nameInRequest = 'p_atrsolnovcolorclaro';
        this.puatrSolNovColorClaro.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_atrSolNovColorClaro',
            'Color claro');
        this.puatrSolNovColorClaro.mandatory = false;
        this.puatrSolNovColorClaro.dataType = Field.dtString;
        this.puatrSolNovColorClaro.maxLength = 10;
        this.puatrSolNovColorClaro.assignCSS();
        this.fields.push(this.puatrSolNovColorClaro);

        this.puatrSolNovLogo.nameInRequest = 'p_atrsolnovlogo';
        this.puatrSolNovLogo.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_atrSolNovLogo',
            'Logo');
        this.puatrSolNovLogo.mandatory = false;
        this.puatrSolNovLogo.dataType = Field.dtString;
        this.puatrSolNovLogo.maxLength = 50;
        this.puatrSolNovLogo.assignCSS();
        this.fields.push(this.puatrSolNovLogo);

        this.puatrTramiteEnLinea.nameInRequest = 'p_atrtramiteenlinea';
        this.puatrTramiteEnLinea.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_atrTramiteEnLinea',
            'Trámite en línea');
        this.puatrTramiteEnLinea.mandatory = true;
        this.puatrTramiteEnLinea.dataType = Field.dtBool;
        this.puatrTramiteEnLinea.options = DefinedSelections.DS_SINO;
        this.puatrTramiteEnLinea.assignCSS();
        this.fields.push(this.puatrTramiteEnLinea);

        this.puatrVigenciaRadicacion.nameInRequest = 'p_atrvigenciaradicacion';
        this.puatrVigenciaRadicacion.alias = this.langMng.translateText(
            'cls_Dominio_svc_crear_inArg_p_atrVigenciaRadicacion',
            'Vigencia de radicación');
        this.puatrVigenciaRadicacion.mandatory = true;
        this.puatrVigenciaRadicacion.dataType = Field.dtBool;
        this.puatrVigenciaRadicacion.options = DefinedSelections.DS_SINO;
        this.puatrVigenciaRadicacion.assignCSS();
        this.fields.push(this.puatrVigenciaRadicacion);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // p_atrNoCuesMedTras
            const defValpuatrNoCuesMedTras = new Promise<void>((resolveDefValue) => {
                this.puatrNoCuesMedTras.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuatrNoCuesMedTras);

            // p_atrMostrarPreexAnexos
            const defValpuatrMostrarPreexAnexos = new Promise<void>((resolveDefValue) => {
                this.puatrMostrarPreexAnexos.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuatrMostrarPreexAnexos);

            // p_atrMostrarPreexContrato
            const defValpuatrMostrarPreexContrato = new Promise<void>((resolveDefValue) => {
                this.puatrMostrarPreexContrato.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuatrMostrarPreexContrato);

            // p_atrIgnorarPreexistencias
            const defValpuatrIgnorarPreexistencias = new Promise<void>((resolveDefValue) => {
                this.puatrIgnorarPreexistencias.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuatrIgnorarPreexistencias);

            // p_atrInclusionModGrupoAsoc
            const defValpuatrInclusionModGrupoAsoc = new Promise<void>((resolveDefValue) => {
                this.puatrInclusionModGrupoAsoc.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuatrInclusionModGrupoAsoc);

            // p_atrPermiteRechazadosAfi
            const defValpuatrPermiteRechazadosAfi = new Promise<void>((resolveDefValue) => {
                this.puatrPermiteRechazadosAfi.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuatrPermiteRechazadosAfi);

            // p_atrAcepPolizaInter
            const defValpuatrAcepPolizaInter = new Promise<void>((resolveDefValue) => {
                this.puatrAcepPolizaInter.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuatrAcepPolizaInter);

            // p_atrNovExcepcionReqDoc
            const defValpuatrNovExcepcionReqDoc = new Promise<void>((resolveDefValue) => {
                this.puatrNovExcepcionReqDoc.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuatrNovExcepcionReqDoc);

            // p_atrTramiteEnLinea
            const defValpuatrTramiteEnLinea = new Promise<void>((resolveDefValue) => {
                this.puatrTramiteEnLinea.setValue(true);
                resolveDefValue();
            });
            promiseArr.push(defValpuatrTramiteEnLinea);

            // p_atrVigenciaRadicacion
            const defValpuatrVigenciaRadicacion = new Promise<void>((resolveDefValue) => {
                this.puatrVigenciaRadicacion.setValue(true);
                resolveDefValue();
            });
            promiseArr.push(defValpuatrVigenciaRadicacion);

            Promise.all(promiseArr).then((results: any[]) => {
                this.util.hideWaitDialog();
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
            if (lastRole === 'PlanT') {
                this.puagrPlanT.setValue(lastRoleOid);
                this.puagrPlanT.enabled = false;
            }
            if (lastRole === 'ProductoT') {
                this.puagrProductoT.setValue(lastRoleOid);
                this.puagrProductoT.enabled = false;
                this.loadPreloadpuagrplant();
            }
            if (lastRole === 'GrupoAsesores') {
                this.puagrGrupoAsesores.setValue(lastRoleOid);
                this.executeDependecyRulespuagrgrupoasesores('SetValue', true);
                this.puagrGrupoAsesores.enabled = false;
                this.executeDependecyRulespuagrgrupoasesores('SetEnabled', true);
            }
            if (lastRole === 'GrupoAreaMedica') {
                this.puagrGrupoAreaMedica.setValue(lastRoleOid);
                this.executeDependecyRulespuagrgrupoareamedica('SetValue', true);
                this.puagrGrupoAreaMedica.enabled = false;
                this.executeDependecyRulespuagrgrupoareamedica('SetEnabled', true);
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // puagrProductoT
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Productos', 'IC_Producto', [], null, '').then(
            (response: any) => {
                if (response && response.results) {
                    this.puagrProductoT.loadPreload(response.results);
                } else {
                    this.puagrProductoT.loadPreload([]);
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
     * Search the preload values of field p_agrPlanT
     */
    private loadPreloadpuagrplant(): void {

        if (this.puagrProductoT.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('Dominio_crear_p_agrPlanT_NavFilter0');
            this.util.searchPreload('Planes', 'IC_Plan', navFilters, this.getNavigationFilterVariables(), '').then(
                (response: any) => {
                    if (response && response.results) {
                        this.puagrPlanT.loadPreload(response.results);
                    } else {
                        this.puagrPlanT.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.puagrPlanT.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.puagrPlanT.cleanPreload();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puagrGrupoAsesores'.toLowerCase()) {
            this.puagrGrupoAsesores.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespuagrgrupoasesores('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'puagrGrupoAreaMedica'.toLowerCase()) {
            this.puagrGrupoAreaMedica.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespuagrgrupoareamedica('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_agrGrupoAsesores argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuagrgrupoasesores(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopuagrgrupoasesores();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_agrGrupoAsesores argument
     */
    private setSuppInfopuagrgrupoasesores(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puagrGrupoAsesores.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Grupoasignacion.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puagrGrupoAsesores.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puagrGrupoAsesores.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Grupoasignacion.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puagrGrupoAsesores.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the p_agrGrupoAsesores lense search argument
     */
    public onpuagrgrupoasesoresChange(): void {

        const searchText = this.puagrGrupoAsesores.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puagrGrupoAsesores.lastText) {
                this.puagrGrupoAsesores.removeCSSClass('noResultsLenseSearch');
                this.puagrGrupoAsesores.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Grupoasignacion.name, 'IC_GrupoAsignacion', searchText, [], null).then(
                        (response: any) => {
                            this.puagrGrupoAsesores.removeCSSClass('noResultsLenseSearch');
                            this.puagrGrupoAsesores.searchResults = response.results;
                            if (this.puagrGrupoAsesores.searchResults &&
                                this.puagrGrupoAsesores.searchResults.length === 0) {
                                this.puagrGrupoAsesores.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puagrGrupoAsesores.searchResults &&
                                this.puagrGrupoAsesores.searchResults.length === 1) {
                                this.processpuagrgrupoasesoresSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puagrGrupoAsesores.removeCSSClass('noResultsLenseSearch');
                            this.puagrGrupoAsesores.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puagrGrupoAsesores.removeCSSClass('noResultsLenseSearch');
            this.puagrGrupoAsesores.searchResults = [];
            this.cleanpuagrgrupoasesores();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_agrGrupoAsesores lense search argument
     */
    public processpuagrgrupoasesoresSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puagrGrupoAsesores.searchResults.length > index) {
            selectedInstance = this.puagrGrupoAsesores.searchResults[index];
        }
        // Clean the result list
        this.puagrGrupoAsesores.searchResults = [];
        if (selectedInstance) {
            if (!this.puagrGrupoAsesores.allowMultiSelect) {
                this.puagrGrupoAsesores.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puagrGrupoAsesores.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespuagrgrupoasesores('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_agrGrupoAsesores lense search argument
     */
    public cleanpuagrgrupoasesores(): void {
        this.clearValidationMessages();
        this.puagrGrupoAsesores.clean();
        this.executeDependecyRulespuagrgrupoasesores('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for p_agrGrupoAreaMedica argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuagrgrupoareamedica(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopuagrgrupoareamedica();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_agrGrupoAreaMedica argument
     */
    private setSuppInfopuagrgrupoareamedica(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puagrGrupoAreaMedica.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Grupoasignacion.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puagrGrupoAreaMedica.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puagrGrupoAreaMedica.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Grupoasignacion.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puagrGrupoAreaMedica.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the p_agrGrupoAreaMedica lense search argument
     */
    public onpuagrgrupoareamedicaChange(): void {

        const searchText = this.puagrGrupoAreaMedica.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puagrGrupoAreaMedica.lastText) {
                this.puagrGrupoAreaMedica.removeCSSClass('noResultsLenseSearch');
                this.puagrGrupoAreaMedica.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Grupoasignacion.name, 'IC_GrupoAsignacion', searchText, [], null).then(
                        (response: any) => {
                            this.puagrGrupoAreaMedica.removeCSSClass('noResultsLenseSearch');
                            this.puagrGrupoAreaMedica.searchResults = response.results;
                            if (this.puagrGrupoAreaMedica.searchResults &&
                                this.puagrGrupoAreaMedica.searchResults.length === 0) {
                                this.puagrGrupoAreaMedica.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puagrGrupoAreaMedica.searchResults &&
                                this.puagrGrupoAreaMedica.searchResults.length === 1) {
                                this.processpuagrgrupoareamedicaSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puagrGrupoAreaMedica.removeCSSClass('noResultsLenseSearch');
                            this.puagrGrupoAreaMedica.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puagrGrupoAreaMedica.removeCSSClass('noResultsLenseSearch');
            this.puagrGrupoAreaMedica.searchResults = [];
            this.cleanpuagrgrupoareamedica();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_agrGrupoAreaMedica lense search argument
     */
    public processpuagrgrupoareamedicaSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puagrGrupoAreaMedica.searchResults.length > index) {
            selectedInstance = this.puagrGrupoAreaMedica.searchResults[index];
        }
        // Clean the result list
        this.puagrGrupoAreaMedica.searchResults = [];
        if (selectedInstance) {
            if (!this.puagrGrupoAreaMedica.allowMultiSelect) {
                this.puagrGrupoAreaMedica.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puagrGrupoAreaMedica.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespuagrgrupoareamedica('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_agrGrupoAreaMedica lense search argument
     */
    public cleanpuagrgrupoareamedica(): void {
        this.clearValidationMessages();
        this.puagrGrupoAreaMedica.clean();
        this.executeDependecyRulespuagrgrupoareamedica('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for p_atrInclusion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuatrinclusion(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puatrInclusion();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2puatrInclusion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for p_atrInclusion argument
     */
    private executeDependecyRules1puatrInclusion(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1puatrInclusionActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_atrInclusion argument
     */
    private executeDependecyRules1puatrInclusionActions(): void {
        // v <> NULL AND v = FALSE
        if (!this.util.isNull(this.util.getBool(this.puatrInclusion.value)) &&
            this.util.valueEquals(this.util.getBool(this.puatrInclusion.value), false)) {
            // p_atrInclusionModGrupoAsoc.SetActive( FALSE )
            this.puatrInclusionModGrupoAsoc.enabled = false;
            // p_atrInclusionModGrupoAsoc.SetValue( FALSE )
            this.puatrInclusionModGrupoAsoc.setValue(false);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for p_atrInclusion argument
     */
    private executeDependecyRules2puatrInclusion(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2puatrInclusionActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for p_atrInclusion argument
     */
    private executeDependecyRules2puatrInclusionActions(): void {
        // v <> NULL AND v = TRUE
        if (!this.util.isNull(this.util.getBool(this.puatrInclusion.value)) &&
            this.util.valueEquals(this.util.getBool(this.puatrInclusion.value), true)) {
            // p_atrInclusionModGrupoAsoc.SetActive( TRUE )
            this.puatrInclusionModGrupoAsoc.enabled = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_atrInclusion argument
     */
    public onpuatrinclusionChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulespuatrinclusion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Manages the change for the p_agrProductoT argument
     */
    public onpuagrproductotChange(): void {
        this.loadPreloadpuagrplant();

        this.executePendingDependencyRules();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puagrGrupoAsesores'.toLowerCase() === argumentName.toLowerCase()) {
            this.puagrGrupoAsesores.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_GrupoAsignacion';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('puagrGrupoAreaMedica'.toLowerCase() === argumentName.toLowerCase()) {
            this.puagrGrupoAreaMedica.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_GrupoAsignacion';
            this.util.navigateSelectionForward(exchInfo);
        }
    }

    /**
     * Returns true if all elements contained in the group are visible
     * @param groupId Group id.
     */
    public isGroupVisible(groupId: string): boolean {
        let isVisible = true;

        if (groupId === '5') {
            isVisible = this.puatrInclusion.visible ||
                this.puatrInclusionModGrupoAsoc.visible;
        }
        if (groupId === '15') {
            isVisible = this.puatrNovExcepcionReqDoc.visible ||
                this.puatrSolNovColorOscuro.visible ||
                this.puatrSolNovColorClaro.visible ||
                this.puatrSolNovLogo.visible;
        }
        if (groupId === '15_1') {
            isVisible = this.puatrSolNovColorOscuro.visible ||
                this.puatrSolNovColorClaro.visible ||
                this.puatrSolNovLogo.visible;
        }
        return isVisible;
    }

    /**
     * Returns the alias group
     * @param groupId Group id
     */
    public getGroupAlias(groupId: string): string {
        let alias = '';

        if (groupId === '5') {
            alias = this.langMng.translateText('5',
                'Inclusiones');
        }
        if (groupId === '15') {
            alias = this.langMng.translateText('15',
                'Solicitudes de Novedad');
        }
        if (groupId === '15_1') {
            alias = this.langMng.translateText('15_1',
                'Configuración de Reporte');
        }
        return alias;
    }
}
