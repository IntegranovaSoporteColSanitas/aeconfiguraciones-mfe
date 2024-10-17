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

@Component({
    selector: 'imes-prorrateo-piu-prorrateo',
    templateUrl: './piu_prorrateo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProrrateoPIUuProrrateoComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsdia = 'Día del mes';
    private readonly dsporcentaje = 'Porcentaje';

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
        this.idXML = 'Clas_1547053432832527UIPobCl_1';
        this.className = ModelConstants.Prorrateo.name;
        this.iuName = ModelConstants.Prorrateo.piuuprorrateo;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Prorrateo_piu_PIU_Prorrateo',
            'Prorrateos');
        this.queryURL = '/api/ProrrateoApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1547053432832527CjtoVis_2ICtjoVis_1';
        dsItem.name = 'dia';
        dsItem.field = 'dia';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_Prorrateo_ds_DS_Prorrateo_item_Clas_1547053432832527CjtoVis_2ICtjoVis_1',
            this.dsdia);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1547053432832527CjtoVis_2ICtjoVis_2';
        dsItem.name = 'porcentaje';
        dsItem.field = 'porcentaje';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_Prorrateo_ds_DS_Prorrateo_item_Clas_1547053432832527CjtoVis_2ICtjoVis_2',
            this.dsporcentaje);
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
        accItem.idXML = 'Clas_1547053432832527AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Prorrateo_act_A_Prorrateo_item_Clas_1547053432832527AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Prorrateo.name;
        accItem.targetUI = ModelConstants.Prorrateo.siuucrear;
        accItem.setShowInModalProperties('imes-prorrateo-siu-crear',
            this.langMng.translateText(
            'cls_Prorrateo_svc_crear',
            'Crear'));

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1547053432832527AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Prorrateo_act_A_Prorrateo_item_Clas_1547053432832527AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Prorrateo.name;
        accItem.targetUI = ModelConstants.Prorrateo.siuumodificar;
        accItem.setShowInModalProperties('imes-prorrateo-siu-modificar',
            this.langMng.translateText(
            'cls_Prorrateo_svc_modificar',
            'Modificar'));

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1547053432832527AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Prorrateo_act_A_Prorrateo_item_Clas_1547053432832527AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Prorrateo.name;
        accItem.targetUI = ModelConstants.Prorrateo.siuueliminar;
        accItem.setShowInModalProperties('genericsiu',
            this.langMng.translateText(
            'cls_Prorrateo_svc_eliminar',
            'Eliminar'));

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_Prorrateo', value: 'Por Dia'});
        this.orderCriteria = 'OC_Prorrateo';
    }
}
