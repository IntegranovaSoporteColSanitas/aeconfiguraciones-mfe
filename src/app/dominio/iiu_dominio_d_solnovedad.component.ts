import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AccNavItem, ScenarioType, OpenScenarioType} from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field, FieldDefinedSelection } from '../common/baseIUElements';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements IIU IIU_Dominio_D_SolNovedad of Dominio »
 */
export class DominioIIUuDominiouDuSolNovedadComponent extends AbstractIIU {

    /** Display Set elements */
    public dseNovExcepcionReqDoc: FieldDefinedSelection;
    public dseSolNovColorOscuro: Field;
    public dseSolNovColorClaro: Field;
    public dseSolNovLogo: Field;

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
        this.idXML = 'Clas_1431701422080423UIInst_4';
        this.className = ModelConstants.Dominio.name;
        this.classAlias = this.langMng.translateText('cls_Dominio',
            'Dominio');
        this.supplementaryInfoAtt.push('productot.descripcion');
        this.supplementaryInfoAtt.push('plant.nombre');
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Dominio_iiu_IIU_Dominio_D_SolNovedad',
            'Solicitudes de Novedad');
        this.queryURL = '/api/DominioApi/GetPopulationDynamic';

        this.dseNovExcepcionReqDoc = new FieldDefinedSelection(this.langMng);
        this.dseSolNovColorOscuro = new Field(this.langMng);
        this.dseSolNovColorClaro = new Field(this.langMng);
        this.dseSolNovLogo = new Field(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseNovExcepcionReqDoc.nameInRequest = 'novexcepcionreqdoc';
        this.dseNovExcepcionReqDoc.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_SolNovedad_item_Clas_1431701422080423CjtoVis_6ICtjoVis_1',
            'Novedades Excepción requiere documentos');
        this.dseNovExcepcionReqDoc.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_6ICtjoVis_1', ['Admin', 'SuperAdmin']);
        this.dseNovExcepcionReqDoc.enabled = false;
        this.dseNovExcepcionReqDoc.mandatory = false;
        this.dseNovExcepcionReqDoc.dataType = Field.dtBool;
        this.dseNovExcepcionReqDoc.options = DefinedSelections.DS_SINO;
        this.dseNovExcepcionReqDoc.assignCSS();
        this.fields.push(this.dseNovExcepcionReqDoc);

        this.dseSolNovColorOscuro.nameInRequest = 'solnovcoloroscuro';
        this.dseSolNovColorOscuro.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_SolNovedad_item_Clas_1431701422080423CjtoVis_6ICtjoVis_3',
            'Color oscuro');
        this.dseSolNovColorOscuro.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_6ICtjoVis_3', ['Admin', 'SuperAdmin']);
        this.dseSolNovColorOscuro.enabled = false;
        this.dseSolNovColorOscuro.mandatory = false;
        this.dseSolNovColorOscuro.dataType = Field.dtString;
        this.dseSolNovColorOscuro.maxLength = 10;
        this.dseSolNovColorOscuro.assignCSS();
        this.fields.push(this.dseSolNovColorOscuro);

        this.dseSolNovColorClaro.nameInRequest = 'solnovcolorclaro';
        this.dseSolNovColorClaro.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_SolNovedad_item_Clas_1431701422080423CjtoVis_6ICtjoVis_2',
            'Color claro');
        this.dseSolNovColorClaro.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_6ICtjoVis_2', ['Admin', 'SuperAdmin']);
        this.dseSolNovColorClaro.enabled = false;
        this.dseSolNovColorClaro.mandatory = false;
        this.dseSolNovColorClaro.dataType = Field.dtString;
        this.dseSolNovColorClaro.maxLength = 10;
        this.dseSolNovColorClaro.assignCSS();
        this.fields.push(this.dseSolNovColorClaro);

        this.dseSolNovLogo.nameInRequest = 'solnovlogo';
        this.dseSolNovLogo.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_SolNovedad_item_Clas_1431701422080423CjtoVis_6ICtjoVis_4',
            'Logo');
        this.dseSolNovLogo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_6ICtjoVis_4', ['Admin', 'SuperAdmin']);
        this.dseSolNovLogo.enabled = false;
        this.dseSolNovLogo.mandatory = false;
        this.dseSolNovLogo.dataType = Field.dtString;
        this.dseSolNovLogo.maxLength = 50;
        this.dseSolNovLogo.assignCSS();
        this.fields.push(this.dseSolNovLogo);

    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431701422080423AccOfer_5ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Dominio_act_A_Dominio_ConfSolNovedad_item_Clas_1431701422080423AccOfer_5ElemAcc_1',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Dominio.name;
        accItem.targetUI = ModelConstants.Dominio.siuumodificarconfsolnovedad;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

    }
}
