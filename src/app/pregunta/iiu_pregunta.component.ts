import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
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

@Component({
    selector: 'imes-pregunta-iiu-pregunta',
    templateUrl: './iiu_pregunta.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreguntaIIUuPreguntaComponent extends AbstractIIU implements OnInit {

    /** Display Set elements */
    public dseSeccionNombre: Field;
    public dseNumero: Field;
    public dseNumOrden: Field;
    public dseDescripcion: Field;
    public dseValorSNObliga: FieldDefinedSelection;
    public dseObsOblig: FieldDefinedSelection;
    public dseEsNumero: FieldDefinedSelection;
    public dseValorMin: Field;
    public dseValorMax: Field;
    public dseSoloHombres: FieldDefinedSelection;
    public dseSoloMujeres: FieldDefinedSelection;
    public dseRespMultiple: FieldDefinedSelection;
    public dseCondicionEdad: FieldDefinedSelection;
    public dseCondicionEdadAnyos: Field;
    public dsedrvValoresPosibles: Field;

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
        this.idXML = 'Clas_1431633788928040UIInst_1';
        this.className = ModelConstants.Pregunta.name;
        this.iuName = ModelConstants.Pregunta.iiuupregunta;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Pregunta_iiu_IIU_Pregunta',
            'Ver detalle');
        this.queryURL = '/api/PreguntaApi/GetPopulationDynamic';

        this.dseSeccionNombre = new Field(this.langMng);
        this.dseNumero = new Field(this.langMng);
        this.dseNumOrden = new Field(this.langMng);
        this.dseDescripcion = new Field(this.langMng);
        this.dseValorSNObliga = new FieldDefinedSelection(this.langMng);
        this.dseObsOblig = new FieldDefinedSelection(this.langMng);
        this.dseEsNumero = new FieldDefinedSelection(this.langMng);
        this.dseValorMin = new Field(this.langMng);
        this.dseValorMax = new Field(this.langMng);
        this.dseSoloHombres = new FieldDefinedSelection(this.langMng);
        this.dseSoloMujeres = new FieldDefinedSelection(this.langMng);
        this.dseRespMultiple = new FieldDefinedSelection(this.langMng);
        this.dseCondicionEdad = new FieldDefinedSelection(this.langMng);
        this.dseCondicionEdadAnyos = new Field(this.langMng);
        this.dsedrvValoresPosibles = new Field(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseSeccionNombre.nameInRequest = 'seccion.nombre';
        this.dseSeccionNombre.alias = this.langMng.translateText(
            'cls_Pregunta_ds_DS_Pregunta_IIU_item_Clas_1431633788928040CjtoVis_2ICtjoVis_1',
            'Sección');
        this.dseSeccionNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431633788928040CjtoVis_2ICtjoVis_1', ['Admin', 'SuperAdmin']);
        this.dseSeccionNombre.enabled = false;
        this.dseSeccionNombre.mandatory = false;
        this.dseSeccionNombre.dataType = Field.dtString;
        this.dseSeccionNombre.maxLength = 150;
        this.dseSeccionNombre.assignCSS();
        this.fields.push(this.dseSeccionNombre);

        this.dseNumero.nameInRequest = 'numero';
        this.dseNumero.alias = this.langMng.translateText(
            'cls_Pregunta_ds_DS_Pregunta_IIU_item_Clas_1431633788928040CjtoVis_2ICtjoVis_2',
            'Número');
        this.dseNumero.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431633788928040CjtoVis_2ICtjoVis_2', ['Admin', 'SuperAdmin']);
        this.dseNumero.enabled = false;
        this.dseNumero.mandatory = false;
        this.dseNumero.dataType = Field.dtInt;
        this.dseNumero.assignCSS();
        this.fields.push(this.dseNumero);

        this.dseNumOrden.nameInRequest = 'numorden';
        this.dseNumOrden.alias = this.langMng.translateText(
            'cls_Pregunta_ds_DS_Pregunta_IIU_item_Clas_1431633788928040CjtoVis_2ICtjoVis_3',
            'Nº orden');
        this.dseNumOrden.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431633788928040CjtoVis_2ICtjoVis_3', ['Admin', 'SuperAdmin']);
        this.dseNumOrden.enabled = false;
        this.dseNumOrden.mandatory = false;
        this.dseNumOrden.dataType = Field.dtNat;
        this.dseNumOrden.assignCSS();
        this.fields.push(this.dseNumOrden);

        this.dseDescripcion.nameInRequest = 'descripcion';
        this.dseDescripcion.alias = this.langMng.translateText(
            'cls_Pregunta_ds_DS_Pregunta_IIU_item_Clas_1431633788928040CjtoVis_2ICtjoVis_4',
            'Descripción');
        this.dseDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431633788928040CjtoVis_2ICtjoVis_4', ['Admin', 'SuperAdmin']);
        this.dseDescripcion.enabled = false;
        this.dseDescripcion.mandatory = false;
        this.dseDescripcion.dataType = Field.dtString;
        this.dseDescripcion.maxLength = 255;
        this.dseDescripcion.assignCSS();
        this.fields.push(this.dseDescripcion);

        this.dseValorSNObliga.nameInRequest = 'valorsnobliga';
        this.dseValorSNObliga.alias = this.langMng.translateText(
            'cls_Pregunta_ds_DS_Pregunta_IIU_item_Clas_1431633788928040CjtoVis_2ICtjoVis_9',
            'Si/No Obligatorio');
        this.dseValorSNObliga.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431633788928040CjtoVis_2ICtjoVis_9', ['Admin', 'SuperAdmin']);
        this.dseValorSNObliga.enabled = false;
        this.dseValorSNObliga.mandatory = false;
        this.dseValorSNObliga.dataType = Field.dtBool;
        this.dseValorSNObliga.options = DefinedSelections.DS_SINO;
        this.dseValorSNObliga.assignCSS();
        this.fields.push(this.dseValorSNObliga);

        this.dseObsOblig.nameInRequest = 'obsoblig';
        this.dseObsOblig.alias = this.langMng.translateText(
            'cls_Pregunta_ds_DS_Pregunta_IIU_item_Clas_1431633788928040CjtoVis_2ICtjoVis_8',
            'Obs. Obligatoria');
        this.dseObsOblig.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431633788928040CjtoVis_2ICtjoVis_8', ['Admin', 'SuperAdmin']);
        this.dseObsOblig.enabled = false;
        this.dseObsOblig.mandatory = false;
        this.dseObsOblig.dataType = Field.dtBool;
        this.dseObsOblig.options = DefinedSelections.DS_SINO;
        this.dseObsOblig.assignCSS();
        this.fields.push(this.dseObsOblig);

        this.dseEsNumero.nameInRequest = 'esnumero';
        this.dseEsNumero.alias = this.langMng.translateText(
            'cls_Pregunta_ds_DS_Pregunta_IIU_item_Clas_1431633788928040CjtoVis_2ICtjoVis_5',
            'Es número');
        this.dseEsNumero.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431633788928040CjtoVis_2ICtjoVis_5', ['Admin', 'SuperAdmin']);
        this.dseEsNumero.enabled = false;
        this.dseEsNumero.mandatory = false;
        this.dseEsNumero.dataType = Field.dtBool;
        this.dseEsNumero.options = DefinedSelections.DS_SINO;
        this.dseEsNumero.assignCSS();
        this.fields.push(this.dseEsNumero);

        this.dseValorMin.nameInRequest = 'valormin';
        this.dseValorMin.alias = this.langMng.translateText(
            'cls_Pregunta_ds_DS_Pregunta_IIU_item_Clas_1431633788928040CjtoVis_2ICtjoVis_6',
            'Valor mínimo');
        this.dseValorMin.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431633788928040CjtoVis_2ICtjoVis_6', ['Admin', 'SuperAdmin']);
        this.dseValorMin.enabled = false;
        this.dseValorMin.mandatory = false;
        this.dseValorMin.dataType = Field.dtReal;
        this.dseValorMin.assignCSS();
        this.fields.push(this.dseValorMin);

        this.dseValorMax.nameInRequest = 'valormax';
        this.dseValorMax.alias = this.langMng.translateText(
            'cls_Pregunta_ds_DS_Pregunta_IIU_item_Clas_1431633788928040CjtoVis_2ICtjoVis_7',
            'Valor máximo');
        this.dseValorMax.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431633788928040CjtoVis_2ICtjoVis_7', ['Admin', 'SuperAdmin']);
        this.dseValorMax.enabled = false;
        this.dseValorMax.mandatory = false;
        this.dseValorMax.dataType = Field.dtReal;
        this.dseValorMax.assignCSS();
        this.fields.push(this.dseValorMax);

        this.dseSoloHombres.nameInRequest = 'solohombres';
        this.dseSoloHombres.alias = this.langMng.translateText(
            'cls_Pregunta_ds_DS_Pregunta_IIU_item_Clas_1431633788928040CjtoVis_2ICtjoVis_10',
            'Solo hombres');
        this.dseSoloHombres.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431633788928040CjtoVis_2ICtjoVis_10', ['Admin', 'SuperAdmin']);
        this.dseSoloHombres.enabled = false;
        this.dseSoloHombres.mandatory = false;
        this.dseSoloHombres.dataType = Field.dtBool;
        this.dseSoloHombres.options = DefinedSelections.DS_SINO;
        this.dseSoloHombres.assignCSS();
        this.fields.push(this.dseSoloHombres);

        this.dseSoloMujeres.nameInRequest = 'solomujeres';
        this.dseSoloMujeres.alias = this.langMng.translateText(
            'cls_Pregunta_ds_DS_Pregunta_IIU_item_Clas_1431633788928040CjtoVis_2ICtjoVis_11',
            'Solo mujeres');
        this.dseSoloMujeres.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431633788928040CjtoVis_2ICtjoVis_11', ['Admin', 'SuperAdmin']);
        this.dseSoloMujeres.enabled = false;
        this.dseSoloMujeres.mandatory = false;
        this.dseSoloMujeres.dataType = Field.dtBool;
        this.dseSoloMujeres.options = DefinedSelections.DS_SINO;
        this.dseSoloMujeres.assignCSS();
        this.fields.push(this.dseSoloMujeres);

        this.dseRespMultiple.nameInRequest = 'respmultiple';
        this.dseRespMultiple.alias = this.langMng.translateText(
            'cls_Pregunta_ds_DS_Pregunta_IIU_item_Clas_1431633788928040CjtoVis_2ICtjoVis_13',
            'Resp. múltiple');
        this.dseRespMultiple.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431633788928040CjtoVis_2ICtjoVis_13', ['Admin', 'SuperAdmin']);
        this.dseRespMultiple.enabled = false;
        this.dseRespMultiple.mandatory = false;
        this.dseRespMultiple.dataType = Field.dtBool;
        this.dseRespMultiple.options = DefinedSelections.DS_SINO;
        this.dseRespMultiple.assignCSS();
        this.fields.push(this.dseRespMultiple);

        this.dseCondicionEdad.nameInRequest = 'condicionedad';
        this.dseCondicionEdad.alias = this.langMng.translateText(
            'cls_Pregunta_ds_DS_Pregunta_IIU_item_Clas_1431633788928040CjtoVis_2ICtjoVis_15',
            'Condicionada por edad');
        this.dseCondicionEdad.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431633788928040CjtoVis_2ICtjoVis_15', ['Admin', 'SuperAdmin']);
        this.dseCondicionEdad.enabled = false;
        this.dseCondicionEdad.mandatory = false;
        this.dseCondicionEdad.dataType = Field.dtNat;
        this.dseCondicionEdad.options = DefinedSelections.DS_CONDICIONADAEDAD;
        this.dseCondicionEdad.assignCSS();
        this.fields.push(this.dseCondicionEdad);

        this.dseCondicionEdadAnyos.nameInRequest = 'condicionedadanyos';
        this.dseCondicionEdadAnyos.alias = this.langMng.translateText(
            'cls_Pregunta_ds_DS_Pregunta_IIU_item_Clas_1431633788928040CjtoVis_2ICtjoVis_16',
            'Condicionada por edad');
        this.dseCondicionEdadAnyos.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431633788928040CjtoVis_2ICtjoVis_16', ['Admin', 'SuperAdmin']);
        this.dseCondicionEdadAnyos.enabled = false;
        this.dseCondicionEdadAnyos.mandatory = false;
        this.dseCondicionEdadAnyos.dataType = Field.dtNat;
        this.dseCondicionEdadAnyos.assignCSS();
        this.fields.push(this.dseCondicionEdadAnyos);

        this.dsedrvValoresPosibles.nameInRequest = 'drvvaloresposibles';
        this.dsedrvValoresPosibles.alias = this.langMng.translateText(
            'cls_Pregunta_ds_DS_Pregunta_IIU_item_Clas_1431633788928040CjtoVis_2ICtjoVis_14',
            'Valores posibles');
        this.dsedrvValoresPosibles.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431633788928040CjtoVis_2ICtjoVis_14', ['Admin', 'SuperAdmin']);
        this.dsedrvValoresPosibles.enabled = false;
        this.dsedrvValoresPosibles.mandatory = false;
        this.dsedrvValoresPosibles.dataType = Field.dtString;
        this.dsedrvValoresPosibles.maxLength = 255;
        this.dsedrvValoresPosibles.assignCSS();
        this.fields.push(this.dsedrvValoresPosibles);

    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431633788928040AccOfer_2ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Pregunta_act_A_Pregunta_IIU_item_Clas_1431633788928040AccOfer_2ElemAcc_1',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Pregunta.name;
        accItem.targetUI = ModelConstants.Pregunta.siuutmodificar;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431633788928040AccOfer_2ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Pregunta_act_A_Pregunta_IIU_item_Clas_1431633788928040AccOfer_2ElemAcc_2',
            'Añadir posible valor');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Pregunta.name;
        accItem.targetUI = ModelConstants.Pregunta.siuuinsvalorpregunta;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431633788928040AccOfer_2ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Pregunta_act_A_Pregunta_IIU_item_Clas_1431633788928040AccOfer_2ElemAcc_3',
            'Quitar posible valor');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Pregunta.name;
        accItem.targetUI = ModelConstants.Pregunta.siuudelvalorpregunta;
        this.actions.push(accItem);

    }
}
