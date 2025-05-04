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

/**
 * « Implements PIU PIU_ConfiguracionANS of ConfiguracionANS »
 */
@Component({
    selector: 'imes-configuracionans-piu-configuracionans',
    templateUrl: './piu_configuracionans.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfiguracionANSPIUuConfiguracionANSComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dstramite = 'Trámite';
    private readonly dsdominiodproductotddescripcion = 'Producto';
    private readonly dsdominiodplantdnombre = 'Plan';
    private readonly dsnovedaddnombre = 'Novedad';
    private readonly dscausaldnombre = 'Causal';
    private readonly dsansafiliaciones = 'ANS Afiliaciones';
    private readonly dsansareamedica = 'ANS Área Médica';

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
        this.idXML = 'Clas_1586859868160432UIPobCl_1';
        this.className = ModelConstants.Configuracionans.name;
        this.iuName = ModelConstants.Configuracionans.piuuconfiguracionans;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_ConfiguracionANS_piu_PIU_ConfiguracionANS',
            'Acuerdo nivel de servicio');
        this.queryURL = '/api/ConfiguracionANSApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1586859868160432CjtoVis_1ICtjoVis_1';
        dsItem.name = 'tramite';
        dsItem.field = 'tramite';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_ds_DS_ConfiguracionANS_item_Clas_1586859868160432CjtoVis_1ICtjoVis_1',
            this.dstramite);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_TRAMITECONFANS;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586859868160432CjtoVis_1ICtjoVis_6';
        dsItem.name = 'dominio.productot.descripcion';
        dsItem.field = 'dominio-productot-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_ds_DS_ConfiguracionANS_item_Clas_1586859868160432CjtoVis_1ICtjoVis_6',
            this.dsdominiodproductotddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586859868160432CjtoVis_1ICtjoVis_7';
        dsItem.name = 'dominio.plant.nombre';
        dsItem.field = 'dominio-plant-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_ds_DS_ConfiguracionANS_item_Clas_1586859868160432CjtoVis_1ICtjoVis_7',
            this.dsdominiodplantdnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586859868160432CjtoVis_1ICtjoVis_2';
        dsItem.name = 'novedad.nombre';
        dsItem.field = 'novedad-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_ds_DS_ConfiguracionANS_item_Clas_1586859868160432CjtoVis_1ICtjoVis_2',
            this.dsnovedaddnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586859868160432CjtoVis_1ICtjoVis_3';
        dsItem.name = 'causal.nombre';
        dsItem.field = 'causal-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_ds_DS_ConfiguracionANS_item_Clas_1586859868160432CjtoVis_1ICtjoVis_3',
            this.dscausaldnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586859868160432CjtoVis_1ICtjoVis_4';
        dsItem.name = 'ansafiliaciones';
        dsItem.field = 'ansafiliaciones';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_ds_DS_ConfiguracionANS_item_Clas_1586859868160432CjtoVis_1ICtjoVis_4',
            this.dsansafiliaciones);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586859868160432CjtoVis_1ICtjoVis_5';
        dsItem.name = 'ansareamedica';
        dsItem.field = 'ansareamedica';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_ds_DS_ConfiguracionANS_item_Clas_1586859868160432CjtoVis_1ICtjoVis_5',
            this.dsansareamedica);
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
        accItem.idXML = 'Clas_1586859868160432AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_act_A_ConfiguracionANS_item_Clas_1586859868160432AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Configuracionans.name;
        accItem.targetUI = ModelConstants.Configuracionans.siuutcrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1586859868160432AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_act_A_ConfiguracionANS_item_Clas_1586859868160432AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Configuracionans.name;
        accItem.targetUI = ModelConstants.Configuracionans.siuutmodificar;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1586859868160432AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_act_A_ConfiguracionANS_item_Clas_1586859868160432AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Configuracionans.name;
        accItem.targetUI = ModelConstants.Configuracionans.siuuteliminar;

        this.actions.push(accItem);

    }

    /**
     * Initialize the navigation items
     */
    public override initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1586859868160432NavOfer_1ElemNav_2';
        navItem.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_nav_N_ConfiguracionANS_item_Clas_1586859868160432NavOfer_1ElemNav_2',
            'Detalles');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        navItem.targetClass = ModelConstants.Configuracionans.name;
        navItem.targetUI = ModelConstants.Configuracionans.iiuuconfiguracionans;
        navItem.rolePath = '';
        this.navigations.push(navItem);

        navItem = new AccNavItem();
        navItem.id = 1;
        navItem.idXML = 'Clas_1586859868160432NavOfer_1ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_nav_N_ConfiguracionANS_item_Clas_1586859868160432NavOfer_1ElemNav_1',
            'Histórico ANS');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        navItem.targetClass = ModelConstants.Logconfiguracionans.name;
        navItem.targetUI = ModelConstants.Logconfiguracionans.piuulogconfiguracionans;
        navItem.rolePath = 'ConfiguracionANS';
        this.navigations.push(navItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
