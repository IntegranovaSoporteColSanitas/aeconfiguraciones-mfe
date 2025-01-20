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
    selector: 'imes-valor-piu-valor',
    templateUrl: './piu_valor.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValorPIUuValorComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsidentificador = 'Identificador';
    private readonly dsvalorposible = 'Valor';

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
        this.idXML = 'Clas_1431634313216388UIPobCl_1';
        this.className = ModelConstants.Valor.name;
        this.iuName = ModelConstants.Valor.piuuvalor;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Valor_piu_PIU_Valor',
            'Valores');
        this.queryURL = '/api/ValorApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431634313216388CjtoVis_AutoICtjoVis_1';
        dsItem.name = 'identificador';
        dsItem.field = 'identificador';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_Valor_ds__Auto__item_Clas_1431634313216388CjtoVis_AutoICtjoVis_1',
            this.dsidentificador);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431634313216388CjtoVis_AutoICtjoVis_2';
        dsItem.name = 'valorposible';
        dsItem.field = 'valorposible';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_Valor_ds__Auto__item_Clas_1431634313216388CjtoVis_AutoICtjoVis_2',
            this.dsvalorposible);
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
        accItem.idXML = 'Clas_1431634313216388AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Valor_act_A_Valor_PIU_item_Clas_1431634313216388AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Valor.name;
        accItem.targetUI = ModelConstants.Valor.siuucrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431634313216388AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Valor_act_A_Valor_PIU_item_Clas_1431634313216388AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Valor.name;
        accItem.targetUI = ModelConstants.Valor.siuumodificar;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431634313216388AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Valor_act_A_Valor_PIU_item_Clas_1431634313216388AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Valor.name;
        accItem.targetUI = ModelConstants.Valor.siuueliminar;
        accItem.setNoShowProperties('eliminar', 'p_thisvalor_oid', '', false);

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
