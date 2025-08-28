import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { PriorizacionSolicitudesFilterFuPriorizacionSolicitudes} from './filters/priorizacionsolicitudesfilterfupriorizacionsolicitudes';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_PriorizacionSolicitudes of PriorizacionSolicitudes »
 */
@Component({
    selector: 'imes-priorizacionsolicitudes-piu-priorizacionsolicitudes',
    templateUrl: './piu_priorizacionsolicitudes.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriorizacionSolicitudesPIUuPriorizacionSolicitudesComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsestadosolicitud = 'Estado Solicitud';
    private readonly dsestadodoc = 'Estado Documentación';
    private readonly dsprioridad = 'Prioridad';

    /** Filters */
    public f0: PriorizacionSolicitudesFilterFuPriorizacionSolicitudes;

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
        this.idXML = 'Clas_1586846892032587UIPobCl_1';
        this.className = ModelConstants.Priorizacionsolicitudes.name;
        this.classAlias = this.langMng.translateText('cls_PriorizacionSolicitudes',
            'Priorización Solicitudes');
        this.iuName = ModelConstants.Priorizacionsolicitudes.piuupriorizacionsolicitudes;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_PriorizacionSolicitudes_piu_PIU_PriorizacionSolicitudes',
            'Priorización de Solicitudes');
        this.f0 = new PriorizacionSolicitudesFilterFuPriorizacionSolicitudes(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun);
        this.f0.populationContainer = this;
        this.f0.assignedOrderCriteria = 'OC_PorEstados';
        this.filters.push(this.f0);
        this.queryURL = '/api/PriorizacionSolicitudesApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1586846892032587CjtoVis_1ICtjoVis_1';
        dsItem.name = 'estadosolicitud';
        dsItem.field = 'estadosolicitud';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_PriorizacionSolicitudes_ds_DS_PriorizacionSolicitudes_item_Clas_1586846892032587CjtoVis_1ICtjoVis_1',
            this.dsestadosolicitud);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_ESTADOSOLICITUD;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586846892032587CjtoVis_1ICtjoVis_2';
        dsItem.name = 'estadodoc';
        dsItem.field = 'estadodoc';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_PriorizacionSolicitudes_ds_DS_PriorizacionSolicitudes_item_Clas_1586846892032587CjtoVis_1ICtjoVis_2',
            this.dsestadodoc);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_ESTADODOCUMENTOG;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586846892032587CjtoVis_1ICtjoVis_3';
        dsItem.name = 'prioridad';
        dsItem.field = 'prioridad';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_PriorizacionSolicitudes_ds_DS_PriorizacionSolicitudes_item_Clas_1586846892032587CjtoVis_1ICtjoVis_3',
            this.dsprioridad);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1586846892032587AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_PriorizacionSolicitudes_act_A_PriorizacionSolicitudes_item_Clas_1586846892032587AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Priorizacionsolicitudes.name;
        accItem.targetUI = ModelConstants.Priorizacionsolicitudes.siuutcrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1586846892032587AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_PriorizacionSolicitudes_act_A_PriorizacionSolicitudes_item_Clas_1586846892032587AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Priorizacionsolicitudes.name;
        accItem.targetUI = ModelConstants.Priorizacionsolicitudes.siuutmodificar;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1586846892032587AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_PriorizacionSolicitudes_act_A_PriorizacionSolicitudes_item_Clas_1586846892032587AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Priorizacionsolicitudes.name;
        accItem.targetUI = ModelConstants.Priorizacionsolicitudes.siuuteliminar;

        this.actions.push(accItem);

    }

    /**
     * Initialize the navigation items
     */
    public override initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1586846892032587NavOfer_1ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_PriorizacionSolicitudes_nav_N_PriorizacionSolicitudes_item_Clas_1586846892032587NavOfer_1ElemNav_1',
            'Histórico Priorización Solicitudes');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        navItem.targetClass = ModelConstants.Logpriorizacionsol.name;
        navItem.targetUI = ModelConstants.Logpriorizacionsol.piuulogpriorizacionsol;
        navItem.rolePath = 'PriSolicitud';
        this.navigations.push(navItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_PorEstados', value: 'Por Estados'});
        this.orderCriteria = 'OC_PorEstados';
    }
}
