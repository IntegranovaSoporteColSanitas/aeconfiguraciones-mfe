import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { LogLlamadasBHFilterFuLogLlamadasBH} from './filters/logllamadasbhfilterfulogllamadasbh';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_LogLlamadasBH of LogLlamadasBH »
 */
@Component({
    selector: 'imes-logllamadasbh-piu-logllamadasbh',
    templateUrl: './piu_logllamadasbh.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogLlamadasBHPIUuLogLlamadasBHComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dstiposervicio = 'Tipo Servicio';
    private readonly dsservicio = 'Servicio';
    private readonly dscapacidad = 'Capacidad';
    private readonly dsfechahora = 'Fecha';
    private readonly dssolicitud = 'No. Solicitud';
    private readonly dstextoerror = 'Texto Error';

    /** Filters */
    public f0: LogLlamadasBHFilterFuLogLlamadasBH;

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
        this.idXML = 'Clas_1641826746368463UIPobCl_1';
        this.className = ModelConstants.Logllamadasbh.name;
        this.classAlias = this.langMng.translateText('cls_LogLlamadasBH',
            'Llamada a BH');
        this.iuName = ModelConstants.Logllamadasbh.piuulogllamadasbh;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_LogLlamadasBH_piu_PIU_LogLlamadasBH',
            'Llamadas a BH');
        this.f0 = new LogLlamadasBHFilterFuLogLlamadasBH(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun);
        this.f0.populationContainer = this;
        this.f0.assignedOrderCriteria = 'OC_LogLlamadasBH';
        this.filters.push(this.f0);
        this.queryURL = '/api/LogLlamadasBHApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1641826746368463CjtoVis_1ICtjoVis_1';
        dsItem.name = 'tiposervicio';
        dsItem.field = 'tiposervicio';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_LogLlamadasBH_ds_DS_LogLlamadasBH_item_Clas_1641826746368463CjtoVis_1ICtjoVis_1',
            this.dstiposervicio);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_TIPOSSERVICIOSBH;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1641826746368463CjtoVis_1ICtjoVis_2';
        dsItem.name = 'servicio';
        dsItem.field = 'servicio';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_LogLlamadasBH_ds_DS_LogLlamadasBH_item_Clas_1641826746368463CjtoVis_1ICtjoVis_2',
            this.dsservicio);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SERVICIOSBH;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1641826746368463CjtoVis_1ICtjoVis_3';
        dsItem.name = 'capacidad';
        dsItem.field = 'capacidad';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_LogLlamadasBH_ds_DS_LogLlamadasBH_item_Clas_1641826746368463CjtoVis_1ICtjoVis_3',
            this.dscapacidad);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.linkIndex = 0;
        dsItem.linkIsAction = true;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1641826746368463CjtoVis_1ICtjoVis_4';
        dsItem.name = 'fechahora';
        dsItem.field = 'fechahora';
        dsItem.type = Field.dtDatetime;
        dsItem.alias = this.langMng.translateText(
            'cls_LogLlamadasBH_ds_DS_LogLlamadasBH_item_Clas_1641826746368463CjtoVis_1ICtjoVis_4',
            this.dsfechahora);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1641826746368463CjtoVis_1ICtjoVis_5';
        dsItem.name = 'solicitud';
        dsItem.field = 'solicitud';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_LogLlamadasBH_ds_DS_LogLlamadasBH_item_Clas_1641826746368463CjtoVis_1ICtjoVis_5',
            this.dssolicitud);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1641826746368463CjtoVis_1ICtjoVis_6';
        dsItem.name = 'textoerror';
        dsItem.field = 'textoerror';
        dsItem.type = Field.dtText;
        dsItem.alias = this.langMng.translateText(
            'cls_LogLlamadasBH_ds_DS_LogLlamadasBH_item_Clas_1641826746368463CjtoVis_1ICtjoVis_6',
            this.dstextoerror);
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
        accItem.idXML = 'Clas_1641826746368463AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_LogLlamadasBH_act_A_NMA_TB_LOG_LLAMADAS_BH_PIU_item_Clas_1641826746368463AccOfer_1ElemAcc_1',
            'Detalles');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Logllamadasbh.name;
        accItem.targetUI = ModelConstants.Logllamadasbh.iiuulogllamadasbh;

        accItem.showInDefault = false;
        accItem.styleClass = 'accIIUGrid';
        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_LogLlamadasBH', value: 'Por fecha desc'});
        this.orderCriteria = 'OC_LogLlamadasBH';
    }
}
