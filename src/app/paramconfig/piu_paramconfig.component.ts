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
    selector: 'imes-paramconfig-piu-paramconfig',
    templateUrl: './piu_paramconfig.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParamConfigPIUuParamConfigComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dscodigo = 'Código';
    private readonly dsvalor = 'Valor';
    private readonly dsdescripcion = 'Descripción';

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
        this.idXML = 'Clas_1431630118912680UIPobCl_1';
        this.className = ModelConstants.Paramconfig.name;
        this.iuName = ModelConstants.Paramconfig.piuuparamconfig;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_ParamConfig_piu_PIU_ParamConfig',
            'Parámetros Conf.');
        this.queryURL = '/api/ParamConfigApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431630118912680CjtoVis_2ICtjoVis_1';
        dsItem.name = 'codigo';
        dsItem.field = 'codigo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_ParamConfig_ds_DS_ParamConfig_PIU_item_Clas_1431630118912680CjtoVis_2ICtjoVis_1',
            this.dscodigo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431630118912680CjtoVis_2ICtjoVis_2';
        dsItem.name = 'valor';
        dsItem.field = 'valor';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 999;
        dsItem.alias = this.langMng.translateText(
            'cls_ParamConfig_ds_DS_ParamConfig_PIU_item_Clas_1431630118912680CjtoVis_2ICtjoVis_2',
            this.dsvalor);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431630118912680CjtoVis_2ICtjoVis_3';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 255;
        dsItem.alias = this.langMng.translateText(
            'cls_ParamConfig_ds_DS_ParamConfig_PIU_item_Clas_1431630118912680CjtoVis_2ICtjoVis_3',
            this.dsdescripcion);
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
        accItem.idXML = 'Clas_1431630118912680AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_ParamConfig_act_A_ParamConfig_PIU_item_Clas_1431630118912680AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Paramconfig.name;
        accItem.targetUI = ModelConstants.Paramconfig.siuucrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431630118912680AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_ParamConfig_act_A_ParamConfig_PIU_item_Clas_1431630118912680AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Paramconfig.name;
        accItem.targetUI = ModelConstants.Paramconfig.siuutmodificar;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431630118912680AccOfer_1ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_ParamConfig_act_A_ParamConfig_PIU_item_Clas_1431630118912680AccOfer_1ElemAcc_4',
            'Log cambios');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Paramconfig.name;
        accItem.targetUI = ModelConstants.Paramconfig.mdiuuparamconfig;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1431630118912680AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_ParamConfig_act_A_ParamConfig_PIU_item_Clas_1431630118912680AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Paramconfig.name;
        accItem.targetUI = ModelConstants.Paramconfig.siuueliminar;
        accItem.setNoShowProperties('eliminar', 'p_thisparamconfig_oid', '', false);

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
