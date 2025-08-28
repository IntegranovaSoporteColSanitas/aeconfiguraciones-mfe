import { ChangeDetectorRef } from '@angular/core';
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
 * « Implements PIU PIU_Dominio_D_Incompatibles of Dominio »
 */
export class DominioPIUuDominiouDuIncompatiblesComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsproductotddescripcion = 'Producto';
    private readonly dsplantdnombre = 'Plan';

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
        this.idXML = 'Clas_1431701422080423UIPobCl_4';
        this.className = ModelConstants.Dominio.name;
        this.classAlias = this.langMng.translateText('cls_Dominio',
            'Dominio');
        this.supplementaryInfoAtt.push('productot.descripcion');
        this.supplementaryInfoAtt.push('plant.nombre');
        this.iuName = 'PIU_Dominio_D_Incompatibles';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Dominio_piu_PIU_Dominio_D_Incompatibles',
            'Incompatibles');
        this.queryURL = '/api/DominioApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431701422080423CjtoVis_12ICtjoVis_1';
        dsItem.name = 'productot.descripcion';
        dsItem.field = 'productot-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_D_Incompatibles_item_Clas_1431701422080423CjtoVis_12ICtjoVis_1',
            this.dsproductotddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431701422080423CjtoVis_12ICtjoVis_2';
        dsItem.name = 'plant.nombre';
        dsItem.field = 'plant-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_D_Incompatibles_item_Clas_1431701422080423CjtoVis_12ICtjoVis_2',
            this.dsplantdnombre);
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
        accItem.idXML = 'Clas_1431701422080423AccOfer_9ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Dominio_act_A_Dominio_D_Incompatibles_item_Clas_1431701422080423AccOfer_9ElemAcc_2',
            'Desasociar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Dominio.name;
        accItem.targetUI = ModelConstants.Dominio.siuutdelincompatible;

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
