import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field, FieldDefinedSelection } from '../common/baseIUElements';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements IIU IIU_Dominio of Dominio »
 */
export class DominioIIUuDominioComponent extends AbstractIIU {

    /** Display Set elements */
    public dseProductoTDescripcion: Field;
    public dsePlanTNombre: Field;
    public dseNuevaAfiliacion: FieldDefinedSelection;
    public dseInclusion: FieldDefinedSelection;
    public dseInclusionModGrupoAsoc: FieldDefinedSelection;
    public dseReqCuesMed: FieldDefinedSelection;
    public dseNoCuesMedTras: FieldDefinedSelection;
    public dseAcepCuesMat: FieldDefinedSelection;
    public dseAcepCuesNeo: FieldDefinedSelection;
    public dseAcepBBGestante: FieldDefinedSelection;
    public dseIgnorarPreexistencias: FieldDefinedSelection;
    public dseProrrateoUsuExistente: FieldDefinedSelection;
    public dseDiaIniVigencia: Field;
    public dseDiaFinVigencia: Field;
    public dseDiasCaducidad: Field;
    public dsePermiteRechazadosAfi: FieldDefinedSelection;
    public dseAcepPolizaInter: FieldDefinedSelection;
    public dseMostrarPreexAnexos: FieldDefinedSelection;
    public dseMostrarPreexContrato: FieldDefinedSelection;
    public dseTramiteEnLinea: FieldDefinedSelection;
    public dseVigenciaRadicacion: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431701422080423UIInst_1';
        this.className = ModelConstants.Dominio.name;
        this.classAlias = this.langMng.translateText('cls_Dominio',
            'Dominio');
        this.supplementaryInfoAtt.push('productot.descripcion');
        this.supplementaryInfoAtt.push('plant.nombre');
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Dominio_iiu_IIU_Dominio',
            'Dominio');
        this.queryURL = '/api/DominioApi/GetPopulationDynamic';

        this.dseProductoTDescripcion = new Field(this.langMng);
        this.dsePlanTNombre = new Field(this.langMng);
        this.dseNuevaAfiliacion = new FieldDefinedSelection(this.langMng);
        this.dseInclusion = new FieldDefinedSelection(this.langMng);
        this.dseInclusionModGrupoAsoc = new FieldDefinedSelection(this.langMng);
        this.dseReqCuesMed = new FieldDefinedSelection(this.langMng);
        this.dseNoCuesMedTras = new FieldDefinedSelection(this.langMng);
        this.dseAcepCuesMat = new FieldDefinedSelection(this.langMng);
        this.dseAcepCuesNeo = new FieldDefinedSelection(this.langMng);
        this.dseAcepBBGestante = new FieldDefinedSelection(this.langMng);
        this.dseIgnorarPreexistencias = new FieldDefinedSelection(this.langMng);
        this.dseProrrateoUsuExistente = new FieldDefinedSelection(this.langMng);
        this.dseDiaIniVigencia = new Field(this.langMng);
        this.dseDiaFinVigencia = new Field(this.langMng);
        this.dseDiasCaducidad = new Field(this.langMng);
        this.dsePermiteRechazadosAfi = new FieldDefinedSelection(this.langMng);
        this.dseAcepPolizaInter = new FieldDefinedSelection(this.langMng);
        this.dseMostrarPreexAnexos = new FieldDefinedSelection(this.langMng);
        this.dseMostrarPreexContrato = new FieldDefinedSelection(this.langMng);
        this.dseTramiteEnLinea = new FieldDefinedSelection(this.langMng);
        this.dseVigenciaRadicacion = new FieldDefinedSelection(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseProductoTDescripcion.nameInRequest = 'productot.descripcion';
        this.dseProductoTDescripcion.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_IIU_item_Clas_1431701422080423CjtoVis_3ICtjoVis_1',
            'Producto');
        this.dseProductoTDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_3ICtjoVis_1', ['Admin', 'SuperAdmin']);
        this.dseProductoTDescripcion.enabled = false;
        this.dseProductoTDescripcion.mandatory = false;
        this.dseProductoTDescripcion.dataType = Field.dtString;
        this.dseProductoTDescripcion.maxLength = 100;
        this.dseProductoTDescripcion.assignCSS();
        this.fields.push(this.dseProductoTDescripcion);

        this.dsePlanTNombre.nameInRequest = 'plant.nombre';
        this.dsePlanTNombre.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_IIU_item_Clas_1431701422080423CjtoVis_3ICtjoVis_2',
            'Plan');
        this.dsePlanTNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_3ICtjoVis_2', ['Admin', 'SuperAdmin']);
        this.dsePlanTNombre.enabled = false;
        this.dsePlanTNombre.mandatory = false;
        this.dsePlanTNombre.dataType = Field.dtString;
        this.dsePlanTNombre.maxLength = 150;
        this.dsePlanTNombre.assignCSS();
        this.fields.push(this.dsePlanTNombre);

        this.dseNuevaAfiliacion.nameInRequest = 'nuevaafiliacion';
        this.dseNuevaAfiliacion.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_IIU_item_Clas_1431701422080423CjtoVis_3ICtjoVis_3',
            'Nueva afiliación');
        this.dseNuevaAfiliacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_3ICtjoVis_3', ['Admin', 'SuperAdmin']);
        this.dseNuevaAfiliacion.enabled = false;
        this.dseNuevaAfiliacion.mandatory = false;
        this.dseNuevaAfiliacion.dataType = Field.dtBool;
        this.dseNuevaAfiliacion.options = DefinedSelections.DS_SINO;
        this.dseNuevaAfiliacion.assignCSS();
        this.fields.push(this.dseNuevaAfiliacion);

        this.dseInclusion.nameInRequest = 'inclusion';
        this.dseInclusion.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_IIU_item_Clas_1431701422080423CjtoVis_3ICtjoVis_4',
            'Inclusión');
        this.dseInclusion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_3ICtjoVis_4', ['Admin', 'SuperAdmin']);
        this.dseInclusion.enabled = false;
        this.dseInclusion.mandatory = false;
        this.dseInclusion.dataType = Field.dtBool;
        this.dseInclusion.options = DefinedSelections.DS_SINO;
        this.dseInclusion.assignCSS();
        this.fields.push(this.dseInclusion);

        this.dseInclusionModGrupoAsoc.nameInRequest = 'inclusionmodgrupoasoc';
        this.dseInclusionModGrupoAsoc.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_IIU_item_Clas_1431701422080423CjtoVis_3ICtjoVis_15',
            'Modificación grupo asociado');
        this.dseInclusionModGrupoAsoc.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_3ICtjoVis_15', ['Admin', 'SuperAdmin']);
        this.dseInclusionModGrupoAsoc.enabled = false;
        this.dseInclusionModGrupoAsoc.mandatory = false;
        this.dseInclusionModGrupoAsoc.dataType = Field.dtBool;
        this.dseInclusionModGrupoAsoc.options = DefinedSelections.DS_SINO;
        this.dseInclusionModGrupoAsoc.assignCSS();
        this.fields.push(this.dseInclusionModGrupoAsoc);

        this.dseReqCuesMed.nameInRequest = 'reqcuesmed';
        this.dseReqCuesMed.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_IIU_item_Clas_1431701422080423CjtoVis_3ICtjoVis_5',
            'Cuestionario médico');
        this.dseReqCuesMed.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_3ICtjoVis_5', ['Admin', 'SuperAdmin']);
        this.dseReqCuesMed.enabled = false;
        this.dseReqCuesMed.mandatory = false;
        this.dseReqCuesMed.dataType = Field.dtBool;
        this.dseReqCuesMed.options = DefinedSelections.DS_SINO;
        this.dseReqCuesMed.assignCSS();
        this.fields.push(this.dseReqCuesMed);

        this.dseNoCuesMedTras.nameInRequest = 'nocuesmedtras';
        this.dseNoCuesMedTras.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_IIU_item_Clas_1431701422080423CjtoVis_3ICtjoVis_6',
            'No cuestionario si traslado');
        this.dseNoCuesMedTras.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_3ICtjoVis_6', ['Admin', 'SuperAdmin']);
        this.dseNoCuesMedTras.enabled = false;
        this.dseNoCuesMedTras.mandatory = false;
        this.dseNoCuesMedTras.dataType = Field.dtBool;
        this.dseNoCuesMedTras.options = DefinedSelections.DS_SINO;
        this.dseNoCuesMedTras.assignCSS();
        this.fields.push(this.dseNoCuesMedTras);

        this.dseAcepCuesMat.nameInRequest = 'acepcuesmat';
        this.dseAcepCuesMat.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_IIU_item_Clas_1431701422080423CjtoVis_3ICtjoVis_7',
            'Cuestionario maternal');
        this.dseAcepCuesMat.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_3ICtjoVis_7', ['Admin', 'SuperAdmin']);
        this.dseAcepCuesMat.enabled = false;
        this.dseAcepCuesMat.mandatory = false;
        this.dseAcepCuesMat.dataType = Field.dtBool;
        this.dseAcepCuesMat.options = DefinedSelections.DS_SINO;
        this.dseAcepCuesMat.assignCSS();
        this.fields.push(this.dseAcepCuesMat);

        this.dseAcepCuesNeo.nameInRequest = 'acepcuesneo';
        this.dseAcepCuesNeo.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_IIU_item_Clas_1431701422080423CjtoVis_3ICtjoVis_8',
            'Cuestionario neonatal');
        this.dseAcepCuesNeo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_3ICtjoVis_8', ['Admin', 'SuperAdmin']);
        this.dseAcepCuesNeo.enabled = false;
        this.dseAcepCuesNeo.mandatory = false;
        this.dseAcepCuesNeo.dataType = Field.dtBool;
        this.dseAcepCuesNeo.options = DefinedSelections.DS_SINO;
        this.dseAcepCuesNeo.assignCSS();
        this.fields.push(this.dseAcepCuesNeo);

        this.dseAcepBBGestante.nameInRequest = 'acepbbgestante';
        this.dseAcepBBGestante.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_IIU_item_Clas_1431701422080423CjtoVis_3ICtjoVis_9',
            'Bebe gestante');
        this.dseAcepBBGestante.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_3ICtjoVis_9', ['Admin', 'SuperAdmin']);
        this.dseAcepBBGestante.enabled = false;
        this.dseAcepBBGestante.mandatory = false;
        this.dseAcepBBGestante.dataType = Field.dtBool;
        this.dseAcepBBGestante.options = DefinedSelections.DS_SINO;
        this.dseAcepBBGestante.assignCSS();
        this.fields.push(this.dseAcepBBGestante);

        this.dseIgnorarPreexistencias.nameInRequest = 'ignorarpreexistencias';
        this.dseIgnorarPreexistencias.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_IIU_item_Clas_1431701422080423CjtoVis_3ICtjoVis_10',
            'Ignorar preexistencias');
        this.dseIgnorarPreexistencias.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_3ICtjoVis_10', ['Admin', 'SuperAdmin']);
        this.dseIgnorarPreexistencias.enabled = false;
        this.dseIgnorarPreexistencias.mandatory = false;
        this.dseIgnorarPreexistencias.dataType = Field.dtBool;
        this.dseIgnorarPreexistencias.options = DefinedSelections.DS_SINO;
        this.dseIgnorarPreexistencias.assignCSS();
        this.fields.push(this.dseIgnorarPreexistencias);

        this.dseProrrateoUsuExistente.nameInRequest = 'prorrateousuexistente';
        this.dseProrrateoUsuExistente.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_IIU_item_Clas_1431701422080423CjtoVis_3ICtjoVis_14',
            'Prorrateo usuarios existente');
        this.dseProrrateoUsuExistente.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_3ICtjoVis_14', ['Admin', 'SuperAdmin']);
        this.dseProrrateoUsuExistente.enabled = false;
        this.dseProrrateoUsuExistente.mandatory = false;
        this.dseProrrateoUsuExistente.dataType = Field.dtBool;
        this.dseProrrateoUsuExistente.options = DefinedSelections.DS_SINO;
        this.dseProrrateoUsuExistente.assignCSS();
        this.fields.push(this.dseProrrateoUsuExistente);

        this.dseDiaIniVigencia.nameInRequest = 'diainivigencia';
        this.dseDiaIniVigencia.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_IIU_item_Clas_1431701422080423CjtoVis_3ICtjoVis_11',
            'Dia inicio vigencia');
        this.dseDiaIniVigencia.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_3ICtjoVis_11', ['Admin', 'SuperAdmin']);
        this.dseDiaIniVigencia.enabled = false;
        this.dseDiaIniVigencia.mandatory = false;
        this.dseDiaIniVigencia.dataType = Field.dtNat;
        this.dseDiaIniVigencia.assignCSS();
        this.fields.push(this.dseDiaIniVigencia);

        this.dseDiaFinVigencia.nameInRequest = 'diafinvigencia';
        this.dseDiaFinVigencia.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_IIU_item_Clas_1431701422080423CjtoVis_3ICtjoVis_12',
            'Dia fin vigencia');
        this.dseDiaFinVigencia.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_3ICtjoVis_12', ['Admin', 'SuperAdmin']);
        this.dseDiaFinVigencia.enabled = false;
        this.dseDiaFinVigencia.mandatory = false;
        this.dseDiaFinVigencia.dataType = Field.dtNat;
        this.dseDiaFinVigencia.assignCSS();
        this.fields.push(this.dseDiaFinVigencia);

        this.dseDiasCaducidad.nameInRequest = 'diascaducidad';
        this.dseDiasCaducidad.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_IIU_item_Clas_1431701422080423CjtoVis_3ICtjoVis_13',
            'Caducidad en días');
        this.dseDiasCaducidad.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_3ICtjoVis_13', ['Admin', 'SuperAdmin']);
        this.dseDiasCaducidad.enabled = false;
        this.dseDiasCaducidad.mandatory = false;
        this.dseDiasCaducidad.dataType = Field.dtNat;
        this.dseDiasCaducidad.assignCSS();
        this.fields.push(this.dseDiasCaducidad);

        this.dsePermiteRechazadosAfi.nameInRequest = 'permiterechazadosafi';
        this.dsePermiteRechazadosAfi.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_IIU_item_Clas_1431701422080423CjtoVis_3ICtjoVis_16',
            'Permite rechazados afiliación');
        this.dsePermiteRechazadosAfi.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_3ICtjoVis_16', ['Admin', 'SuperAdmin']);
        this.dsePermiteRechazadosAfi.enabled = false;
        this.dsePermiteRechazadosAfi.mandatory = false;
        this.dsePermiteRechazadosAfi.dataType = Field.dtBool;
        this.dsePermiteRechazadosAfi.options = DefinedSelections.DS_SINO;
        this.dsePermiteRechazadosAfi.assignCSS();
        this.fields.push(this.dsePermiteRechazadosAfi);

        this.dseAcepPolizaInter.nameInRequest = 'aceppolizainter';
        this.dseAcepPolizaInter.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_IIU_item_Clas_1431701422080423CjtoVis_3ICtjoVis_17',
            'Poliza Internacional');
        this.dseAcepPolizaInter.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_3ICtjoVis_17', ['Admin', 'SuperAdmin']);
        this.dseAcepPolizaInter.enabled = false;
        this.dseAcepPolizaInter.mandatory = false;
        this.dseAcepPolizaInter.dataType = Field.dtBool;
        this.dseAcepPolizaInter.options = DefinedSelections.DS_SINO;
        this.dseAcepPolizaInter.assignCSS();
        this.fields.push(this.dseAcepPolizaInter);

        this.dseMostrarPreexAnexos.nameInRequest = 'mostrarpreexanexos';
        this.dseMostrarPreexAnexos.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_IIU_item_Clas_1431701422080423CjtoVis_3ICtjoVis_19',
            'Mostrar Preexistencias');
        this.dseMostrarPreexAnexos.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_3ICtjoVis_19', ['Admin', 'SuperAdmin']);
        this.dseMostrarPreexAnexos.enabled = false;
        this.dseMostrarPreexAnexos.mandatory = false;
        this.dseMostrarPreexAnexos.dataType = Field.dtBool;
        this.dseMostrarPreexAnexos.options = DefinedSelections.DS_SINO;
        this.dseMostrarPreexAnexos.assignCSS();
        this.fields.push(this.dseMostrarPreexAnexos);

        this.dseMostrarPreexContrato.nameInRequest = 'mostrarpreexcontrato';
        this.dseMostrarPreexContrato.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_IIU_item_Clas_1431701422080423CjtoVis_3ICtjoVis_20',
            'Mostrar Preexistencias en Contrato');
        this.dseMostrarPreexContrato.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_3ICtjoVis_20', ['Admin', 'SuperAdmin']);
        this.dseMostrarPreexContrato.enabled = false;
        this.dseMostrarPreexContrato.mandatory = false;
        this.dseMostrarPreexContrato.dataType = Field.dtBool;
        this.dseMostrarPreexContrato.options = DefinedSelections.DS_SINO;
        this.dseMostrarPreexContrato.assignCSS();
        this.fields.push(this.dseMostrarPreexContrato);

        this.dseTramiteEnLinea.nameInRequest = 'tramiteenlinea';
        this.dseTramiteEnLinea.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_IIU_item_Clas_1431701422080423CjtoVis_3ICtjoVis_21',
            'Trámite en línea');
        this.dseTramiteEnLinea.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_3ICtjoVis_21', ['Admin', 'SuperAdmin']);
        this.dseTramiteEnLinea.enabled = false;
        this.dseTramiteEnLinea.mandatory = false;
        this.dseTramiteEnLinea.dataType = Field.dtBool;
        this.dseTramiteEnLinea.options = DefinedSelections.DS_SINO;
        this.dseTramiteEnLinea.assignCSS();
        this.fields.push(this.dseTramiteEnLinea);

        this.dseVigenciaRadicacion.nameInRequest = 'vigenciaradicacion';
        this.dseVigenciaRadicacion.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_IIU_item_Clas_1431701422080423CjtoVis_3ICtjoVis_22',
            'Vigencia de radicación');
        this.dseVigenciaRadicacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_3ICtjoVis_22', ['Admin', 'SuperAdmin']);
        this.dseVigenciaRadicacion.enabled = false;
        this.dseVigenciaRadicacion.mandatory = false;
        this.dseVigenciaRadicacion.dataType = Field.dtBool;
        this.dseVigenciaRadicacion.options = DefinedSelections.DS_SINO;
        this.dseVigenciaRadicacion.assignCSS();
        this.fields.push(this.dseVigenciaRadicacion);

    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431701422080423AccOfer_2ElemAcc_5';
        accItem.alias = this.langMng.translateText(
            'cls_Dominio_act_A_Dominio_IIU_item_Clas_1431701422080423AccOfer_2ElemAcc_5',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Dominio.name;
        accItem.targetUI = ModelConstants.Dominio.siuutmodificar;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431701422080423AccOfer_2ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Dominio_act_A_Dominio_IIU_item_Clas_1431701422080423AccOfer_2ElemAcc_2',
            'Cambiar días vigencia');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Dominio.name;
        accItem.targetUI = ModelConstants.Dominio.siuucambiardiasvigencia;
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['plant.esvoluntario'] });
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431701422080423AccOfer_2ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Dominio_act_A_Dominio_IIU_item_Clas_1431701422080423AccOfer_2ElemAcc_3',
            'Grupos Usuarios');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Dominio.name;
        accItem.targetUI = ModelConstants.Dominio.mdiuudominiogruposusuarios;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1431701422080423AccOfer_2ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_Dominio_act_A_Dominio_IIU_item_Clas_1431701422080423AccOfer_2ElemAcc_4',
            'Dominios incompatibles');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Dominio.name;
        accItem.targetUI = ModelConstants.Dominio.mdiuudominiosincompatbles;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 4;
        accItem.idXML = 'Clas_1431701422080423AccOfer_2ElemAcc_6';
        accItem.alias = this.langMng.translateText(
            'cls_Dominio_act_A_Dominio_IIU_item_Clas_1431701422080423AccOfer_2ElemAcc_6',
            'Log modificaciones');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Dominio.name;
        accItem.targetUI = ModelConstants.Dominio.mdiuudominioulogdatos;
        this.actions.push(accItem);

    }

    /**
     * Evaluate in advance the associated service preconditions to the action element
     * @param actionId Action element identification
     * @param rows Rows to be check
     */
    public override checkPreconditionInAdvanceForRows(actionId: number, rows: any[]): boolean {
        let isEnabled = true;
        for (const row of rows) {
            if (actionId === 1) {
                isEnabled = this.checkPrecondicionInAdvanceNum1(row);
            }
        }
        return isEnabled;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 1
     * @param row Instance data
     */
    private checkPrecondicionInAdvanceNum1(row: any): boolean {
        // PlanT.EsVoluntario = true
        if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'plant-esvoluntario')), true))) {
            return false;
        }
        return true;
    }
}
