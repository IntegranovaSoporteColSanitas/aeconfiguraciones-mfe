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

export class NovedadIIUuNovedadComponent extends AbstractIIU {

    /** Display Set elements */
    public dseTipoNovedadNombre: Field;
    public dseNombre: Field;
    public dseAliasNovedad: Field;
    public dseDescripcion: Field;
    public dseCodigoLegal: Field;
    public dseReqDocPersona: FieldDefinedSelection;
    public dseReqDocSolicitud: FieldDefinedSelection;
    public dseVariasFamilias: FieldDefinedSelection;
    public dseMinValorMeses: Field;
    public dseMaxValorMeses: Field;

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
        this.idXML = 'Clas_1581412253696713UIInst_1';
        this.className = ModelConstants.Novedad.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Novedad_iiu_IIU_Novedad',
            'Novedad');
        this.queryURL = '/api/NovedadApi/GetPopulationDynamic';

        this.dseTipoNovedadNombre = new Field(this.langMng);
        this.dseNombre = new Field(this.langMng);
        this.dseAliasNovedad = new Field(this.langMng);
        this.dseDescripcion = new Field(this.langMng);
        this.dseCodigoLegal = new Field(this.langMng);
        this.dseReqDocPersona = new FieldDefinedSelection(this.langMng);
        this.dseReqDocSolicitud = new FieldDefinedSelection(this.langMng);
        this.dseVariasFamilias = new FieldDefinedSelection(this.langMng);
        this.dseMinValorMeses = new Field(this.langMng);
        this.dseMaxValorMeses = new Field(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseTipoNovedadNombre.nameInRequest = 'tiponovedad.nombre';
        this.dseTipoNovedadNombre.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_item_Clas_1581412253696713CjtoVis_2ICtjoVis_1',
            'Tipo');
        this.dseTipoNovedadNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581412253696713CjtoVis_2ICtjoVis_1', ['Admin', 'SuperAdmin']);
        this.dseTipoNovedadNombre.enabled = false;
        this.dseTipoNovedadNombre.mandatory = false;
        this.dseTipoNovedadNombre.dataType = Field.dtString;
        this.dseTipoNovedadNombre.maxLength = 50;
        this.dseTipoNovedadNombre.assignCSS();
        this.fields.push(this.dseTipoNovedadNombre);

        this.dseNombre.nameInRequest = 'nombre';
        this.dseNombre.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_item_Clas_1581412253696713CjtoVis_2ICtjoVis_2',
            'Nombre');
        this.dseNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581412253696713CjtoVis_2ICtjoVis_2', ['Admin', 'SuperAdmin']);
        this.dseNombre.enabled = false;
        this.dseNombre.mandatory = false;
        this.dseNombre.dataType = Field.dtString;
        this.dseNombre.maxLength = 50;
        this.dseNombre.assignCSS();
        this.fields.push(this.dseNombre);

        this.dseAliasNovedad.nameInRequest = 'aliasnovedad';
        this.dseAliasNovedad.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_item_Clas_1581412253696713CjtoVis_2ICtjoVis_3',
            'Alias');
        this.dseAliasNovedad.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581412253696713CjtoVis_2ICtjoVis_3', ['Admin', 'SuperAdmin']);
        this.dseAliasNovedad.enabled = false;
        this.dseAliasNovedad.mandatory = false;
        this.dseAliasNovedad.dataType = Field.dtString;
        this.dseAliasNovedad.maxLength = 2;
        this.dseAliasNovedad.assignCSS();
        this.fields.push(this.dseAliasNovedad);

        this.dseDescripcion.nameInRequest = 'descripcion';
        this.dseDescripcion.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_item_Clas_1581412253696713CjtoVis_2ICtjoVis_4',
            'Descripción');
        this.dseDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581412253696713CjtoVis_2ICtjoVis_4', ['Admin', 'SuperAdmin']);
        this.dseDescripcion.enabled = false;
        this.dseDescripcion.mandatory = false;
        this.dseDescripcion.dataType = Field.dtString;
        this.dseDescripcion.maxLength = 200;
        this.dseDescripcion.assignCSS();
        this.fields.push(this.dseDescripcion);

        this.dseCodigoLegal.nameInRequest = 'codigolegal';
        this.dseCodigoLegal.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_item_Clas_1581412253696713CjtoVis_2ICtjoVis_5',
            'Código Legal');
        this.dseCodigoLegal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581412253696713CjtoVis_2ICtjoVis_5', ['Admin', 'SuperAdmin']);
        this.dseCodigoLegal.enabled = false;
        this.dseCodigoLegal.mandatory = false;
        this.dseCodigoLegal.dataType = Field.dtString;
        this.dseCodigoLegal.maxLength = 5;
        this.dseCodigoLegal.assignCSS();
        this.fields.push(this.dseCodigoLegal);

        this.dseReqDocPersona.nameInRequest = 'reqdocpersona';
        this.dseReqDocPersona.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_item_Clas_1581412253696713CjtoVis_2ICtjoVis_6',
            'Requiere doc. persona');
        this.dseReqDocPersona.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581412253696713CjtoVis_2ICtjoVis_6', ['Admin', 'SuperAdmin']);
        this.dseReqDocPersona.enabled = false;
        this.dseReqDocPersona.mandatory = false;
        this.dseReqDocPersona.dataType = Field.dtBool;
        this.dseReqDocPersona.options = DefinedSelections.DS_SINO;
        this.dseReqDocPersona.assignCSS();
        this.fields.push(this.dseReqDocPersona);

        this.dseReqDocSolicitud.nameInRequest = 'reqdocsolicitud';
        this.dseReqDocSolicitud.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_item_Clas_1581412253696713CjtoVis_2ICtjoVis_7',
            'Requiere doc. solicitud');
        this.dseReqDocSolicitud.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581412253696713CjtoVis_2ICtjoVis_7', ['Admin', 'SuperAdmin']);
        this.dseReqDocSolicitud.enabled = false;
        this.dseReqDocSolicitud.mandatory = false;
        this.dseReqDocSolicitud.dataType = Field.dtBool;
        this.dseReqDocSolicitud.options = DefinedSelections.DS_SINO;
        this.dseReqDocSolicitud.assignCSS();
        this.fields.push(this.dseReqDocSolicitud);

        this.dseVariasFamilias.nameInRequest = 'variasfamilias';
        this.dseVariasFamilias.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_item_Clas_1581412253696713CjtoVis_2ICtjoVis_8',
            'Varias familias');
        this.dseVariasFamilias.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581412253696713CjtoVis_2ICtjoVis_8', ['Admin', 'SuperAdmin']);
        this.dseVariasFamilias.enabled = false;
        this.dseVariasFamilias.mandatory = false;
        this.dseVariasFamilias.dataType = Field.dtBool;
        this.dseVariasFamilias.options = DefinedSelections.DS_SINO;
        this.dseVariasFamilias.assignCSS();
        this.fields.push(this.dseVariasFamilias);

        this.dseMinValorMeses.nameInRequest = 'minvalormeses';
        this.dseMinValorMeses.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_item_Clas_1581412253696713CjtoVis_2ICtjoVis_9',
            'Valor mínimo meses');
        this.dseMinValorMeses.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581412253696713CjtoVis_2ICtjoVis_9', ['Admin', 'SuperAdmin']);
        this.dseMinValorMeses.enabled = false;
        this.dseMinValorMeses.mandatory = false;
        this.dseMinValorMeses.dataType = Field.dtNat;
        this.dseMinValorMeses.assignCSS();
        this.fields.push(this.dseMinValorMeses);

        this.dseMaxValorMeses.nameInRequest = 'maxvalormeses';
        this.dseMaxValorMeses.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_item_Clas_1581412253696713CjtoVis_2ICtjoVis_10',
            'Valor máximo meses');
        this.dseMaxValorMeses.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581412253696713CjtoVis_2ICtjoVis_10', ['Admin', 'SuperAdmin']);
        this.dseMaxValorMeses.enabled = false;
        this.dseMaxValorMeses.mandatory = false;
        this.dseMaxValorMeses.dataType = Field.dtNat;
        this.dseMaxValorMeses.assignCSS();
        this.fields.push(this.dseMaxValorMeses);

    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1581412253696713AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Novedad_act_A_Novedad_M_item_Clas_1581412253696713AccOfer_1ElemAcc_1',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Novedad.name;
        accItem.targetUI = ModelConstants.Novedad.siuumodificar;
        this.actions.push(accItem);

    }
}
