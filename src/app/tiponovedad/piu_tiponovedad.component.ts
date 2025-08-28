import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_TipoNovedad of TipoNovedad »
 */
@Component({
    selector: 'imes-tiponovedad-piu-tiponovedad',
    templateUrl: './piu_tiponovedad.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipoNovedadPIUuTipoNovedadComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsnombre = 'Nombre';
    private readonly dsaliastipo = 'Alias';
    private readonly dsdescripcion = 'Descripción';
    private readonly dscodigolegal = 'Código Legal';

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
        this.idXML = 'Clas_1581411467264384UIPobCl_1';
        this.className = ModelConstants.Tiponovedad.name;
        this.classAlias = this.langMng.translateText('cls_TipoNovedad',
            'Tipo Novedad');
        this.supplementaryInfoAtt.push('nombre');
        this.iuName = ModelConstants.Tiponovedad.piuutiponovedad;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_TipoNovedad_piu_PIU_TipoNovedad',
            'Tipos de Novedad');
        this.queryURL = '/api/TipoNovedadApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1581411467264384CjtoVis_1ICtjoVis_1';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoNovedad_ds_DS_TipoNovedad_item_Clas_1581411467264384CjtoVis_1ICtjoVis_1',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581411467264384CjtoVis_1ICtjoVis_2';
        dsItem.name = 'aliastipo';
        dsItem.field = 'aliastipo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoNovedad_ds_DS_TipoNovedad_item_Clas_1581411467264384CjtoVis_1ICtjoVis_2',
            this.dsaliastipo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581411467264384CjtoVis_1ICtjoVis_3';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 200;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoNovedad_ds_DS_TipoNovedad_item_Clas_1581411467264384CjtoVis_1ICtjoVis_3',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581411467264384CjtoVis_1ICtjoVis_4';
        dsItem.name = 'codigolegal';
        dsItem.field = 'codigolegal';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 5;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoNovedad_ds_DS_TipoNovedad_item_Clas_1581411467264384CjtoVis_1ICtjoVis_4',
            this.dscodigolegal);
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
        accItem.idXML = 'Clas_1581411467264384AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_TipoNovedad_act_A_TipoNovedad_item_Clas_1581411467264384AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Tiponovedad.name;
        accItem.targetUI = ModelConstants.Tiponovedad.siuucrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1581411467264384AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_TipoNovedad_act_A_TipoNovedad_item_Clas_1581411467264384AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Tiponovedad.name;
        accItem.targetUI = ModelConstants.Tiponovedad.siuumodificar;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1581411467264384AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_TipoNovedad_act_A_TipoNovedad_item_Clas_1581411467264384AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Tiponovedad.name;
        accItem.targetUI = ModelConstants.Tiponovedad.siuueliminar;

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
