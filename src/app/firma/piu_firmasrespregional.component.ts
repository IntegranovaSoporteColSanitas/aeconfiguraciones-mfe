import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType, OpenScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { FirmaFilterFuFirmasResponsables} from './filters/firmafilterfufirmasresponsables';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_FirmasRespRegional of Firma »
 */
@Component({
    selector: 'imes-firma-piu-firmasrespregional',
    templateUrl: './piu_firmasrespregional.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirmaPIUuFirmasRespRegionalComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsrespregionaldusuario = 'Responsable';
    private readonly dsrespregionaldprimernombre = 'Primer nombre';
    private readonly dsrespregionaldsegundonombre = 'Segundo nombre';
    private readonly dsrespregionaldprimerapellido = 'Primer apellido';
    private readonly dsrespregionaldsegundoapellido = 'Segundo apellido';
    private readonly dsrespregionaldsucursalddescripcion = 'Sucursal';
    private readonly dsrespregionaldsucursaldregionalddescripcion = 'Regional';

    /** Filters */
    public f0: FirmaFilterFuFirmasResponsables;

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
        this.idXML = 'Clas_1432994709504560UIPobCl_1';
        this.className = ModelConstants.Firma.name;
        this.classAlias = this.langMng.translateText('cls_Firma',
            'Firma');
        this.iuName = ModelConstants.Firma.piuufirmasrespregional;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Firma_piu_PIU_FirmasRespRegional',
            'Firmas de responsables de regional');
        this.f0 = new FirmaFilterFuFirmasResponsables(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/FirmaApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1432994709504560CjtoVis_1ICtjoVis_2';
        dsItem.name = 'respregional.usuario';
        dsItem.field = 'respregional-usuario';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Firma_ds_DS_FirmaPIUResponsable_item_Clas_1432994709504560CjtoVis_1ICtjoVis_2',
            this.dsrespregionaldusuario);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1432994709504560CjtoVis_1ICtjoVis_6';
        dsItem.name = 'respregional.primernombre';
        dsItem.field = 'respregional-primernombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Firma_ds_DS_FirmaPIUResponsable_item_Clas_1432994709504560CjtoVis_1ICtjoVis_6',
            this.dsrespregionaldprimernombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1432994709504560CjtoVis_1ICtjoVis_8';
        dsItem.name = 'respregional.segundonombre';
        dsItem.field = 'respregional-segundonombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Firma_ds_DS_FirmaPIUResponsable_item_Clas_1432994709504560CjtoVis_1ICtjoVis_8',
            this.dsrespregionaldsegundonombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1432994709504560CjtoVis_1ICtjoVis_5';
        dsItem.name = 'respregional.primerapellido';
        dsItem.field = 'respregional-primerapellido';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Firma_ds_DS_FirmaPIUResponsable_item_Clas_1432994709504560CjtoVis_1ICtjoVis_5',
            this.dsrespregionaldprimerapellido);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1432994709504560CjtoVis_1ICtjoVis_7';
        dsItem.name = 'respregional.segundoapellido';
        dsItem.field = 'respregional-segundoapellido';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Firma_ds_DS_FirmaPIUResponsable_item_Clas_1432994709504560CjtoVis_1ICtjoVis_7',
            this.dsrespregionaldsegundoapellido);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1432994709504560CjtoVis_1ICtjoVis_3';
        dsItem.name = 'respregional.sucursal.descripcion';
        dsItem.field = 'respregional-sucursal-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 200;
        dsItem.alias = this.langMng.translateText(
            'cls_Firma_ds_DS_FirmaPIUResponsable_item_Clas_1432994709504560CjtoVis_1ICtjoVis_3',
            this.dsrespregionaldsucursalddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1432994709504560CjtoVis_1ICtjoVis_4';
        dsItem.name = 'respregional.sucursal.regional.descripcion';
        dsItem.field = 'respregional-sucursal-regional-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_Firma_ds_DS_FirmaPIUResponsable_item_Clas_1432994709504560CjtoVis_1ICtjoVis_4',
            this.dsrespregionaldsucursaldregionalddescripcion);
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
        accItem.idXML = 'Clas_1432994709504560AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Firma_act_A_FirmaRespRegional_item_Clas_1432994709504560AccOfer_1ElemAcc_1',
            'Modificar firma');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Respregional.name;
        accItem.targetUI = ModelConstants.Respregional.siuutcrearomodfirma;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1432994709504560AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Firma_act_A_FirmaRespRegional_item_Clas_1432994709504560AccOfer_1ElemAcc_2',
            'Eliminar firma');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Firma.name;
        accItem.targetUI = ModelConstants.Firma.siuueliminar;
        accItem.targetType  = ScenarioType.Delete;
        this.actions.push(accItem);

    }

    /**
     * Initialize the navigation items
     */
    public override initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1432994709504560NavOfer_1ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_Firma_nav_N_FirmaRespRegional_item_Clas_1432994709504560NavOfer_1ElemNav_1',
            'Visualizar firma');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        navItem.targetClass = ModelConstants.Respregional.name;
        navItem.targetUI = ModelConstants.Respregional.iiuurespregionalufirma;
        navItem.rolePath = 'Firma';
        navItem.targetType  = ScenarioType.Instance;
        this.navigations.push(navItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
