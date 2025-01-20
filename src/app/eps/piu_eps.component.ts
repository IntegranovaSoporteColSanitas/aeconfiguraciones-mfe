import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
    selector: 'imes-eps-piu-eps',
    templateUrl: './piu_eps.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpsPIUuEPSComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dscodigo = 'Código';
    private readonly dsdescripcion = 'Descripción';
    private readonly dsepssanitas = 'Es EPS Sanitas';

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
        this.idXML = 'Clas_1431942987776277UIPobCl_1';
        this.className = ModelConstants.Eps.name;
        this.iuName = ModelConstants.Eps.piuueps;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Eps_piu_PIU_EPS',
            'EPS');
        this.queryURL = '/api/EpsApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431942987776277CjtoVis_AutoICtjoVis_1';
        dsItem.name = 'codigo';
        dsItem.field = 'codigo';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_Eps_ds__Auto__item_Clas_1431942987776277CjtoVis_AutoICtjoVis_1',
            this.dscodigo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431942987776277CjtoVis_AutoICtjoVis_2';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_Eps_ds__Auto__item_Clas_1431942987776277CjtoVis_AutoICtjoVis_2',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431942987776277CjtoVis_AutoICtjoVis_3';
        dsItem.name = 'epssanitas';
        dsItem.field = 'epssanitas';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Eps_ds__Auto__item_Clas_1431942987776277CjtoVis_AutoICtjoVis_3',
            this.dsepssanitas);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431942987776277AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Eps_act_A_EPS_PIU_item_Clas_1431942987776277AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Eps.name;
        accItem.targetUI = ModelConstants.Eps.siuucrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431942987776277AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Eps_act_A_EPS_PIU_item_Clas_1431942987776277AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Eps.name;
        accItem.targetUI = ModelConstants.Eps.siuumodificar;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431942987776277AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Eps_act_A_EPS_PIU_item_Clas_1431942987776277AccOfer_1ElemAcc_3',
            'Sincronizar');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutgsincepss;
        accItem.setNoShowProperties('TGSINCEPSS', '', '', false);

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1431942987776277AccOfer_1ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_Eps_act_A_EPS_PIU_item_Clas_1431942987776277AccOfer_1ElemAcc_4',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Eps.name;
        accItem.targetUI = ModelConstants.Eps.siuueliminar;
        accItem.setNoShowProperties('eliminar', 'p_thiseps_oid', '', false);

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
