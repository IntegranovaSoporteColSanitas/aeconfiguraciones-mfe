import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType, OpenScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_InstitucionMatNeo of InstitucionMatNeo »
 */
@Component({
    selector: 'imes-institucionmatneo-piu-institucionmatneo',
    templateUrl: './piu_institucionmatneo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstitucionMatNeoPIUuInstitucionMatNeoComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dstarifadproductotddescripcion = 'Producto';
    private readonly dstarifadcodigo = 'Tarifa';
    private readonly dscodigo = 'Código';
    private readonly dstipoidentificaciondnombrecorto = 'Tipo Doc.';
    private readonly dsnumidentificacion = 'Nº Identificación';
    private readonly dsnombre = 'Nombre de la Sucursal';
    private readonly dsparamaternidad = 'Maternidad';
    private readonly dsparaneonatal = 'Neonatal';
    private readonly dsfechainicial = 'Fecha inicial';
    private readonly dsfechafinal = 'Fecha final';

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
        public override langMng: LanguageMng, public stdFun: StandardFunctions,
        public override condNavMng: ConditionalNavigationMng) {
        super(appGlobalInfo, util, changeDetectorRef, langMng, condNavMng);
        this.idXML = 'Clas_1463993499648846UIPobCl_1';
        this.className = ModelConstants.Institucionmatneo.name;
        this.classAlias = this.langMng.translateText('cls_InstitucionMatNeo',
            'Institución Maternal/Neonatal');
        this.supplementaryInfoAtt.push('nombre');
        this.iuName = ModelConstants.Institucionmatneo.piuuinstitucionmatneo;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_InstitucionMatNeo_piu_PIU_InstitucionMatNeo',
            'Instituciones Maternal/Neonatal');
        this.queryURL = '/api/InstitucionMatNeoApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * It is the main component. Process the initial actions
     */
    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1463993499648846CjtoVis_1ICtjoVis_1';
        dsItem.name = 'tarifa.productot.descripcion';
        dsItem.field = 'tarifa-productot-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_ds_DS_InstitucionMatNeo_item_Clas_1463993499648846CjtoVis_1ICtjoVis_1',
            this.dstarifadproductotddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1463993499648846CjtoVis_1ICtjoVis_2';
        dsItem.name = 'tarifa.codigo';
        dsItem.field = 'tarifa-codigo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 12;
        dsItem.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_ds_DS_InstitucionMatNeo_item_Clas_1463993499648846CjtoVis_1ICtjoVis_2',
            this.dstarifadcodigo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1463993499648846CjtoVis_1ICtjoVis_3';
        dsItem.name = 'codigo';
        dsItem.field = 'codigo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_ds_DS_InstitucionMatNeo_item_Clas_1463993499648846CjtoVis_1ICtjoVis_3',
            this.dscodigo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1463993499648846CjtoVis_1ICtjoVis_4';
        dsItem.name = 'tipoidentificacion.nombrecorto';
        dsItem.field = 'tipoidentificacion-nombrecorto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_ds_DS_InstitucionMatNeo_item_Clas_1463993499648846CjtoVis_1ICtjoVis_4',
            this.dstipoidentificaciondnombrecorto);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1463993499648846CjtoVis_1ICtjoVis_5';
        dsItem.name = 'numidentificacion';
        dsItem.field = 'numidentificacion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 60;
        dsItem.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_ds_DS_InstitucionMatNeo_item_Clas_1463993499648846CjtoVis_1ICtjoVis_5',
            this.dsnumidentificacion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1463993499648846CjtoVis_1ICtjoVis_6';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_ds_DS_InstitucionMatNeo_item_Clas_1463993499648846CjtoVis_1ICtjoVis_6',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1463993499648846CjtoVis_1ICtjoVis_7';
        dsItem.name = 'paramaternidad';
        dsItem.field = 'paramaternidad';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_ds_DS_InstitucionMatNeo_item_Clas_1463993499648846CjtoVis_1ICtjoVis_7',
            this.dsparamaternidad);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1463993499648846CjtoVis_1ICtjoVis_8';
        dsItem.name = 'paraneonatal';
        dsItem.field = 'paraneonatal';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_ds_DS_InstitucionMatNeo_item_Clas_1463993499648846CjtoVis_1ICtjoVis_8',
            this.dsparaneonatal);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1463993499648846CjtoVis_1ICtjoVis_9';
        dsItem.name = 'fechainicial';
        dsItem.field = 'fechainicial';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_ds_DS_InstitucionMatNeo_item_Clas_1463993499648846CjtoVis_1ICtjoVis_9',
            this.dsfechainicial);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1463993499648846CjtoVis_1ICtjoVis_10';
        dsItem.name = 'fechafinal';
        dsItem.field = 'fechafinal';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_ds_DS_InstitucionMatNeo_item_Clas_1463993499648846CjtoVis_1ICtjoVis_10',
            this.dsfechafinal);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1463993499648846AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_act_A_InstitucionMatNeo_item_Clas_1463993499648846AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Institucionmatneo.name;
        accItem.targetUI = ModelConstants.Institucionmatneo.siuucrear;
        accItem.targetType  = ScenarioType.Create;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1463993499648846AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_act_A_InstitucionMatNeo_item_Clas_1463993499648846AccOfer_1ElemAcc_3',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Institucionmatneo.name;
        accItem.targetUI = ModelConstants.Institucionmatneo.siuutmodificar;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1463993499648846AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_InstitucionMatNeo_act_A_InstitucionMatNeo_item_Clas_1463993499648846AccOfer_1ElemAcc_2',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Institucionmatneo.name;
        accItem.targetUI = ModelConstants.Institucionmatneo.siuueliminar;
        accItem.targetType  = ScenarioType.Delete;
        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
