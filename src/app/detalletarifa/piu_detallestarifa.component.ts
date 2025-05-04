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
 * « Implements PIU PIU_DetallesTarifa of DetalleTarifa »
 */
@Component({
    selector: 'imes-detalletarifa-piu-detallestarifa',
    templateUrl: './piu_detallestarifa.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetalleTarifaPIUuDetallesTarifaComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsanyo = 'Año';
    private readonly dsliminferioredad = 'Lim. inferior edad';
    private readonly dslimsuperioredad = 'Lim. superior edad';
    private readonly dsvalor = 'Valor';

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
        this.idXML = 'Clas_1445859950592289UIPobCl_1';
        this.className = ModelConstants.Detalletarifa.name;
        this.iuName = ModelConstants.Detalletarifa.piuudetallestarifa;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_DetalleTarifa_piu_PIU_DetallesTarifa',
            'Detalles de Tarifa');
        this.queryURL = '/api/DetalleTarifaApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1445859950592289CjtoVis_1ICtjoVis_1';
        dsItem.name = 'anyo';
        dsItem.field = 'anyo';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_DetalleTarifa_ds_DS_DetallesTarifa_item_Clas_1445859950592289CjtoVis_1ICtjoVis_1',
            this.dsanyo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1445859950592289CjtoVis_1ICtjoVis_2';
        dsItem.name = 'liminferioredad';
        dsItem.field = 'liminferioredad';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_DetalleTarifa_ds_DS_DetallesTarifa_item_Clas_1445859950592289CjtoVis_1ICtjoVis_2',
            this.dsliminferioredad);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1445859950592289CjtoVis_1ICtjoVis_3';
        dsItem.name = 'limsuperioredad';
        dsItem.field = 'limsuperioredad';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_DetalleTarifa_ds_DS_DetallesTarifa_item_Clas_1445859950592289CjtoVis_1ICtjoVis_3',
            this.dslimsuperioredad);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1445859950592289CjtoVis_1ICtjoVis_4';
        dsItem.name = 'valor';
        dsItem.field = 'valor';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_DetalleTarifa_ds_DS_DetallesTarifa_item_Clas_1445859950592289CjtoVis_1ICtjoVis_4',
            this.dsvalor);
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
        accItem.idXML = 'Clas_1445859950592289AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_DetalleTarifa_act_A_DetallesTarifa_item_Clas_1445859950592289AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Detalletarifa.name;
        accItem.targetUI = ModelConstants.Detalletarifa.siuutcrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1445859950592289AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_DetalleTarifa_act_A_DetallesTarifa_item_Clas_1445859950592289AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Detalletarifa.name;
        accItem.targetUI = ModelConstants.Detalletarifa.siuutmodificar;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1445859950592289AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_DetalleTarifa_act_A_DetallesTarifa_item_Clas_1445859950592289AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Detalletarifa.name;
        accItem.targetUI = ModelConstants.Detalletarifa.siuuteliminar;
        accItem.setNoShowProperties('TELIMINAR', 'p_thisdetalletarifa_oid', '', false);

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_DetallesTarifa', value: 'Por año'});
        this.orderCriteria = 'OC_DetallesTarifa';
    }
}
