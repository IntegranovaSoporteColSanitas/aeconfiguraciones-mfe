import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType, OpenScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_Seccion of Seccion »
 */
@Component({
    selector: 'imes-seccion-piu-seccion',
    templateUrl: './piu_seccion.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeccionPIUuSeccionComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsnumorden = 'Nº orden';
    private readonly dsnombre = 'Nombre';

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
        this.idXML = 'Clas_1431633526784668UIPobCl_1';
        this.className = ModelConstants.Seccion.name;
        this.classAlias = this.langMng.translateText('cls_Seccion',
            'Sección');
        this.supplementaryInfoAtt.push('nombre');
        this.iuName = ModelConstants.Seccion.piuuseccion;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Seccion_piu_PIU_Seccion',
            'Secciones');
        this.queryURL = '/api/SeccionApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431633526784668CjtoVis_2ICtjoVis_1';
        dsItem.name = 'numorden';
        dsItem.field = 'numorden';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_Seccion_ds_DS_Seccion_PIU_item_Clas_1431633526784668CjtoVis_2ICtjoVis_1',
            this.dsnumorden);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431633526784668CjtoVis_2ICtjoVis_2';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_Seccion_ds_DS_Seccion_PIU_item_Clas_1431633526784668CjtoVis_2ICtjoVis_2',
            this.dsnombre);
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
        accItem.idXML = 'Clas_1431633526784668AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Seccion_act_A_Seccion_PIU_item_Clas_1431633526784668AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Seccion.name;
        accItem.targetUI = ModelConstants.Seccion.siuutcrear;
        accItem.targetType  = ScenarioType.Create;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431633526784668AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Seccion_act_A_Seccion_PIU_item_Clas_1431633526784668AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Seccion.name;
        accItem.targetUI = ModelConstants.Seccion.siuutmodificar;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431633526784668AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Seccion_act_A_Seccion_PIU_item_Clas_1431633526784668AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Seccion.name;
        accItem.targetUI = ModelConstants.Seccion.siuuteliminar;
        accItem.setNoShowProperties('TELIMINAR', 'p_thisseccion_oid', '', false);
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
