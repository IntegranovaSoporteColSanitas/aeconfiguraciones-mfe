import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType, OpenScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_D_Parametros of ParamReporte »
 */
@Component({
    selector: 'imes-paramreporte-piu-d-parametros',
    templateUrl: './piu_d_parametros.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParamReportePIUuDuParametrosComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dstitulo = 'Titulo';
    private readonly dsesnumerico = 'Es numérico';
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
        this.idXML = 'Clas_1580739854336044UIPobCl_1';
        this.className = ModelConstants.Paramreporte.name;
        this.classAlias = this.langMng.translateText('cls_ParamReporte',
            'Parámetro de reporte');
        this.iuName = ModelConstants.Paramreporte.piuuduparametros;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_ParamReporte_piu_PIU_D_Parametros',
            'Parámetros');
        this.queryURL = '/api/ParamReporteApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1580739854336044CjtoVis_1ICtjoVis_4';
        dsItem.name = 'titulo';
        dsItem.field = 'titulo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_ParamReporte_ds_DS_ParamReporte_item_Clas_1580739854336044CjtoVis_1ICtjoVis_4',
            this.dstitulo);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1580739854336044CjtoVis_1ICtjoVis_1';
        dsItem.name = 'esnumerico';
        dsItem.field = 'esnumerico';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_ParamReporte_ds_DS_ParamReporte_item_Clas_1580739854336044CjtoVis_1ICtjoVis_1',
            this.dsesnumerico);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1580739854336044CjtoVis_1ICtjoVis_3';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 200;
        dsItem.alias = this.langMng.translateText(
            'cls_ParamReporte_ds_DS_ParamReporte_item_Clas_1580739854336044CjtoVis_1ICtjoVis_3',
            this.dsdescripcion);
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
        accItem.idXML = 'Clas_1580739854336044AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_ParamReporte_act_A_ParamReporte_item_Clas_1580739854336044AccOfer_1ElemAcc_1',
            'Nuevo');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Paramreporte.name;
        accItem.targetUI = ModelConstants.Paramreporte.siuutnew;
        accItem.targetType  = ScenarioType.Create;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1580739854336044AccOfer_1ElemAcc_5';
        accItem.alias = this.langMng.translateText(
            'cls_ParamReporte_act_A_ParamReporte_item_Clas_1580739854336044AccOfer_1ElemAcc_5',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Paramreporte.name;
        accItem.targetUI = ModelConstants.Paramreporte.siuumodificar;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1580739854336044AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_ParamReporte_act_A_ParamReporte_item_Clas_1580739854336044AccOfer_1ElemAcc_2',
            'Subir');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Paramreporte.name;
        accItem.targetUI = ModelConstants.Paramreporte.siuutsubir;
        accItem.setNoShowProperties('TSUBIR', 'p_thisparamreporte_oid', '', false);
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1580739854336044AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_ParamReporte_act_A_ParamReporte_item_Clas_1580739854336044AccOfer_1ElemAcc_3',
            'Bajar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Paramreporte.name;
        accItem.targetUI = ModelConstants.Paramreporte.siuutbajar;
        accItem.setNoShowProperties('TBAJAR', 'p_thisparamreporte_oid', '', false);
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 4;
        accItem.idXML = 'Clas_1580739854336044AccOfer_1ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_ParamReporte_act_A_ParamReporte_item_Clas_1580739854336044AccOfer_1ElemAcc_4',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Paramreporte.name;
        accItem.targetUI = ModelConstants.Paramreporte.siuutdelete;
        accItem.targetType  = ScenarioType.Delete;
        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_Orden', value: 'Por Orden'});
        this.orderCriteria = 'OC_Orden';
    }
}
