import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { PlanesFilterFuPlanVarios} from './filters/planesfilterfuplanvarios';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
    selector: 'imes-planes-piu-planes-obs',
    templateUrl: './piu_planes_obs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanesPIUuPlanesuObsComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsproductotddescripcion = 'Producto';
    private readonly dsplan = 'Plan';
    private readonly dsnombre = 'Nombre';
    private readonly dsesbancorep = 'Es banco república';
    private readonly dsaceptapreexistencias = 'Acepta preexistencias';
    private readonly dsesvoluntario = 'Es Voluntario';
    private readonly dsiniciocontdiauno = 'Inicio de contratación día uno';

    /** Filters */
    public f0: PlanesFilterFuPlanVarios;

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
        this.idXML = 'Clas_1431695392768502UIPobCl_3';
        this.className = ModelConstants.Planes.name;
        this.iuName = ModelConstants.Planes.piuuplanesuobs;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Planes_piu_PIU_Planes_Obs',
            'Planes');
        this.f0 = new PlanesFilterFuPlanVarios(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/PlanesApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431695392768502CjtoVis_2ICtjoVis_1';
        dsItem.name = 'productot.descripcion';
        dsItem.field = 'productot-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Planes_ds_DS_Plan_PIU_item_Clas_1431695392768502CjtoVis_2ICtjoVis_1',
            this.dsproductotddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431695392768502CjtoVis_2ICtjoVis_2';
        dsItem.name = 'plan';
        dsItem.field = 'plan';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_Planes_ds_DS_Plan_PIU_item_Clas_1431695392768502CjtoVis_2ICtjoVis_2',
            this.dsplan);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431695392768502CjtoVis_2ICtjoVis_3';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_Planes_ds_DS_Plan_PIU_item_Clas_1431695392768502CjtoVis_2ICtjoVis_3',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431695392768502CjtoVis_2ICtjoVis_4';
        dsItem.name = 'esbancorep';
        dsItem.field = 'esbancorep';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Planes_ds_DS_Plan_PIU_item_Clas_1431695392768502CjtoVis_2ICtjoVis_4',
            this.dsesbancorep);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431695392768502CjtoVis_2ICtjoVis_5';
        dsItem.name = 'aceptapreexistencias';
        dsItem.field = 'aceptapreexistencias';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Planes_ds_DS_Plan_PIU_item_Clas_1431695392768502CjtoVis_2ICtjoVis_5',
            this.dsaceptapreexistencias);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431695392768502CjtoVis_2ICtjoVis_6';
        dsItem.name = 'esvoluntario';
        dsItem.field = 'esvoluntario';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Planes_ds_DS_Plan_PIU_item_Clas_1431695392768502CjtoVis_2ICtjoVis_6',
            this.dsesvoluntario);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431695392768502CjtoVis_2ICtjoVis_7';
        dsItem.name = 'iniciocontdiauno';
        dsItem.field = 'iniciocontdiauno';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Planes_ds_DS_Plan_PIU_item_Clas_1431695392768502CjtoVis_2ICtjoVis_7',
            this.dsiniciocontdiauno);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
