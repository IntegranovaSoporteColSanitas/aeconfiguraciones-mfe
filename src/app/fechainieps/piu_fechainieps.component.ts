import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType, OpenScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { FechaIniEPSFilterFuFechaIniEPS} from './filters/fechainiepsfilterfufechainieps';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_FechaIniEPS of FechaIniEPS »
 */
@Component({
    selector: 'imes-fechainieps-piu-fechainieps',
    templateUrl: './piu_fechainieps.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FechaIniEPSPIUuFechaIniEPSComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dstramite = 'Trámite';
    private readonly dstipocontrato = 'Tipo Contrato';
    private readonly dsdesde = 'Fecha Desde';
    private readonly dshasta = 'Fecha Hasta';
    private readonly dsfechainicioaplicar = 'Fecha inicio de contratación';

    /** Filters */
    public f0: FechaIniEPSFilterFuFechaIniEPS;

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
        this.idXML = 'Clas_1655287709696534UIPobCl_1';
        this.className = ModelConstants.Fechainieps.name;
        this.classAlias = this.langMng.translateText('cls_FechaIniEPS',
            'Fechas inicio vigencia para EPS');
        this.iuName = ModelConstants.Fechainieps.piuufechainieps;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_FechaIniEPS_piu_PIU_FechaIniEPS',
            'Fechas Inicio Vigencia para EPS');
        this.f0 = new FechaIniEPSFilterFuFechaIniEPS(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/FechaIniEPSApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1655287709696534CjtoVis_1ICtjoVis_1';
        dsItem.name = 'tramite';
        dsItem.field = 'tramite';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_FechaIniEPS_ds_DS_FechaIniEPS_item_Clas_1655287709696534CjtoVis_1ICtjoVis_1',
            this.dstramite);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_TRAMITE;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1655287709696534CjtoVis_1ICtjoVis_2';
        dsItem.name = 'tipocontrato';
        dsItem.field = 'tipocontrato';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_FechaIniEPS_ds_DS_FechaIniEPS_item_Clas_1655287709696534CjtoVis_1ICtjoVis_2',
            this.dstipocontrato);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_TIPOCONTRATO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1655287709696534CjtoVis_1ICtjoVis_3';
        dsItem.name = 'desde';
        dsItem.field = 'desde';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_FechaIniEPS_ds_DS_FechaIniEPS_item_Clas_1655287709696534CjtoVis_1ICtjoVis_3',
            this.dsdesde);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1655287709696534CjtoVis_1ICtjoVis_4';
        dsItem.name = 'hasta';
        dsItem.field = 'hasta';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_FechaIniEPS_ds_DS_FechaIniEPS_item_Clas_1655287709696534CjtoVis_1ICtjoVis_4',
            this.dshasta);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1655287709696534CjtoVis_1ICtjoVis_5';
        dsItem.name = 'fechainicioaplicar';
        dsItem.field = 'fechainicioaplicar';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_FechaIniEPS_ds_DS_FechaIniEPS_item_Clas_1655287709696534CjtoVis_1ICtjoVis_5',
            this.dsfechainicioaplicar);
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
        accItem.idXML = 'Clas_1655287709696534AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_FechaIniEPS_act_A_FechaIniEPS_item_Clas_1655287709696534AccOfer_1ElemAcc_2',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutgcrearfinieps;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1655287709696534AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_FechaIniEPS_act_A_FechaIniEPS_item_Clas_1655287709696534AccOfer_1ElemAcc_3',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutgmodfinieps;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1655287709696534AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_FechaIniEPS_act_A_FechaIniEPS_item_Clas_1655287709696534AccOfer_1ElemAcc_1',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Fechainieps.name;
        accItem.targetUI = ModelConstants.Fechainieps.siuueliminar;
        accItem.targetType  = ScenarioType.Delete;
        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_FechaIniEPS', value: 'Por tipo y fecha'});
        this.orderCriteria = 'OC_FechaIniEPS';
    }
}
