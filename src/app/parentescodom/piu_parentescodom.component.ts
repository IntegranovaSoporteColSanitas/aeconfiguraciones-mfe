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
 * « Implements PIU PIU_ParentescoDom of ParentescoDom »
 */
@Component({
    selector: 'imes-parentescodom-piu-parentescodom',
    templateUrl: './piu_parentescodom.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentescoDomPIUuParentescoDomComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsparentescoddescripcion = 'Parentesco';
    private readonly dsedadminimaa = 'Edad mínima (años)';
    private readonly dsedadmaximaa = 'Edad máxima (años)';
    private readonly dsedadminimad = 'Edad mínima (días)';
    private readonly dsedadmaximap = 'Edad máxima (permanencia)';

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
        this.idXML = 'Clas_1434710704128231UIPobCl_1';
        this.className = ModelConstants.Parentescodom.name;
        this.classAlias = this.langMng.translateText('cls_ParentescoDom',
            'Parentesco dominio');
        this.iuName = ModelConstants.Parentescodom.piuuparentescodom;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_ParentescoDom_piu_PIU_ParentescoDom',
            'Parentescos');
        this.queryURL = '/api/ParentescoDomApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1434710704128231CjtoVis_1ICtjoVis_1';
        dsItem.name = 'parentesco.descripcion';
        dsItem.field = 'parentesco-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_ParentescoDom_ds_DS_ParentescoDom_PIU_item_Clas_1434710704128231CjtoVis_1ICtjoVis_1',
            this.dsparentescoddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434710704128231CjtoVis_1ICtjoVis_2';
        dsItem.name = 'edadminimaa';
        dsItem.field = 'edadminimaa';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_ParentescoDom_ds_DS_ParentescoDom_PIU_item_Clas_1434710704128231CjtoVis_1ICtjoVis_2',
            this.dsedadminimaa);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434710704128231CjtoVis_1ICtjoVis_3';
        dsItem.name = 'edadmaximaa';
        dsItem.field = 'edadmaximaa';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_ParentescoDom_ds_DS_ParentescoDom_PIU_item_Clas_1434710704128231CjtoVis_1ICtjoVis_3',
            this.dsedadmaximaa);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434710704128231CjtoVis_1ICtjoVis_4';
        dsItem.name = 'edadminimad';
        dsItem.field = 'edadminimad';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_ParentescoDom_ds_DS_ParentescoDom_PIU_item_Clas_1434710704128231CjtoVis_1ICtjoVis_4',
            this.dsedadminimad);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434710704128231CjtoVis_1ICtjoVis_5';
        dsItem.name = 'edadmaximap';
        dsItem.field = 'edadmaximap';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_ParentescoDom_ds_DS_ParentescoDom_PIU_item_Clas_1434710704128231CjtoVis_1ICtjoVis_5',
            this.dsedadmaximap);
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
        accItem.idXML = 'Clas_1434710704128231AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_ParentescoDom_act_A_ParentescoDom_PIU_item_Clas_1434710704128231AccOfer_1ElemAcc_1',
            'Añadir');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Parentescodom.name;
        accItem.targetUI = ModelConstants.Parentescodom.siuucrear;
        accItem.targetType  = ScenarioType.Create;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1434710704128231AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_ParentescoDom_act_A_ParentescoDom_PIU_item_Clas_1434710704128231AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Parentescodom.name;
        accItem.targetUI = ModelConstants.Parentescodom.siuumodificar;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1434710704128231AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_ParentescoDom_act_A_ParentescoDom_PIU_item_Clas_1434710704128231AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Parentescodom.name;
        accItem.targetUI = ModelConstants.Parentescodom.siuueliminar;
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
