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
 * « Implements PIU PIU_MotivoExcepcionSolNov of MotivoExcepcionSolNov »
 */
@Component({
    selector: 'imes-motivoexcepcionsolnov-piu-motivoexcepcionsolnov',
    templateUrl: './piu_motivoexcepcionsolnov.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MotivoExcepcionSolNovPIUuMotivoExcepcionSolNovComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
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
        this.idXML = 'Clas_1583336390656979UIPobCl_1';
        this.className = ModelConstants.Motivoexcepcionsolnov.name;
        this.iuName = ModelConstants.Motivoexcepcionsolnov.piuumotivoexcepcionsolnov;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_MotivoExcepcionSolNov_piu_PIU_MotivoExcepcionSolNov',
            'Motivos de Excepción');
        this.queryURL = '/api/MotivoExcepcionSolNovApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1583336390656979CjtoVis_1ICtjoVis_1';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_MotivoExcepcionSolNov_ds_DS_MotivoExcepcionSolNov_item_Clas_1583336390656979CjtoVis_1ICtjoVis_1',
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
        accItem.idXML = 'Clas_1583336390656979AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_MotivoExcepcionSolNov_act_A_MotivoExcepcionSolNov_item_Clas_1583336390656979AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Motivoexcepcionsolnov.name;
        accItem.targetUI = ModelConstants.Motivoexcepcionsolnov.siuucrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1583336390656979AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_MotivoExcepcionSolNov_act_A_MotivoExcepcionSolNov_item_Clas_1583336390656979AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Motivoexcepcionsolnov.name;
        accItem.targetUI = ModelConstants.Motivoexcepcionsolnov.siuumodificar;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1583336390656979AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_MotivoExcepcionSolNov_act_A_MotivoExcepcionSolNov_item_Clas_1583336390656979AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Motivoexcepcionsolnov.name;
        accItem.targetUI = ModelConstants.Motivoexcepcionsolnov.siuueliminar;

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
