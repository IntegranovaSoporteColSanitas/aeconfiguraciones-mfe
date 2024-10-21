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
    selector: 'imes-causal-piu-causal-null',
    templateUrl: './piu_causal_null.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CausalPIUuCausaluNullComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsiducausal = 'Id.';

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
        this.idXML = 'Clas_1581414219776993UIPobCl_2';
        this.className = ModelConstants.Causal.name;
        this.iuName = ModelConstants.Causal.piuucausalunull;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Causal_piu_PIU_Causal_Null',
            'Causal');
        this.queryURL = '/api/CausalApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1581414219776993CjtoVis_3ICtjoVis_1';
        dsItem.name = 'id_causal';
        dsItem.field = 'id_causal';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_Causal_ds_DS_Causal_Null_item_Clas_1581414219776993CjtoVis_3ICtjoVis_1',
            this.dsiducausal);
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
        accItem.idXML = 'Clas_1581414219776993AccOfer_AutoElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Causal_act__Auto__item_Clas_1581414219776993AccOfer_AutoElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Causal.name;
        accItem.targetUI = ModelConstants.Causal.siuucrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1581414219776993AccOfer_AutoElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Causal_act__Auto__item_Clas_1581414219776993AccOfer_AutoElemAcc_2',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Causal.name;
        accItem.targetUI = ModelConstants.Causal.siuueliminar;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1581414219776993AccOfer_AutoElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Causal_act__Auto__item_Clas_1581414219776993AccOfer_AutoElemAcc_3',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Causal.name;
        accItem.targetUI = ModelConstants.Causal.siuumodificar;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1581414219776993AccOfer_AutoElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_Causal_act__Auto__item_Clas_1581414219776993AccOfer_AutoElemAcc_4',
            'Causal');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Causal.name;
        accItem.targetUI = ModelConstants.Causal.uautou;

        this.actions.push(accItem);

    }

    /**
     * Initialize the navigation items
     */
    public override initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1581414219776993NavOfer_AutoElemNav_2';
        navItem.alias = this.langMng.translateText(
            'cls_Causal_nav__Auto__item_Clas_1581414219776993NavOfer_AutoElemNav_2',
            'Grupos Novedades');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        navItem.targetClass = ModelConstants.Grupoasignacionnovedad.name;
        navItem.targetUI = ModelConstants.Grupoasignacionnovedad.piuugrpasignovedadududominio;
        navItem.rolePath = 'Causal';
        this.navigations.push(navItem);

        navItem = new AccNavItem();
        navItem.id = 1;
        navItem.idXML = 'Clas_1581414219776993NavOfer_AutoElemNav_3';
        navItem.alias = this.langMng.translateText(
            'cls_Causal_nav__Auto__item_Clas_1581414219776993NavOfer_AutoElemNav_3',
            'Acuerdo nivel de servicio');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        navItem.targetClass = ModelConstants.Configuracionans.name;
        navItem.targetUI = ModelConstants.Configuracionans.piuuconfiguracionans;
        navItem.rolePath = 'Causal';
        this.navigations.push(navItem);

        navItem = new AccNavItem();
        navItem.id = 2;
        navItem.idXML = 'Clas_1581414219776993NavOfer_AutoElemNav_4';
        navItem.alias = this.langMng.translateText(
            'cls_Causal_nav__Auto__item_Clas_1581414219776993NavOfer_AutoElemNav_4',
            'Novedad');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        navItem.targetClass = ModelConstants.Novedad.name;
        navItem.targetUI = ModelConstants.Novedad.iiuunovedad;
        navItem.rolePath = 'Causales';
        this.navigations.push(navItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
