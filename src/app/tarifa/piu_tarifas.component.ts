import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { TarifaFilterFuTarifaVarios} from './filters/tarifafilterfutarifavarios';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
    selector: 'imes-tarifa-piu-tarifas',
    templateUrl: './piu_tarifas.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TarifaPIUuTarifasComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dscodigo = 'Código';
    private readonly dsproductotddescripcion = 'Producto';
    private readonly dsplantdnombre = 'Plan';
    private readonly dstipocontrato = 'Tipo contrato';

    /** Filters */
    public f0: TarifaFilterFuTarifaVarios;

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
        this.idXML = 'Clas_1431714529280565UIPobCl_1';
        this.className = ModelConstants.Tarifa.name;
        this.iuName = ModelConstants.Tarifa.piuutarifas;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Tarifa_piu_PIU_Tarifas',
            'Tarifas');
        this.f0 = new TarifaFilterFuTarifaVarios(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/TarifaApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431714529280565CjtoVis_3ICtjoVis_4';
        dsItem.name = 'codigo';
        dsItem.field = 'codigo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 12;
        dsItem.alias = this.langMng.translateText(
            'cls_Tarifa_ds_DS_Tarifas_item_Clas_1431714529280565CjtoVis_3ICtjoVis_4',
            this.dscodigo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431714529280565CjtoVis_3ICtjoVis_1';
        dsItem.name = 'productot.descripcion';
        dsItem.field = 'productot-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Tarifa_ds_DS_Tarifas_item_Clas_1431714529280565CjtoVis_3ICtjoVis_1',
            this.dsproductotddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431714529280565CjtoVis_3ICtjoVis_2';
        dsItem.name = 'plant.nombre';
        dsItem.field = 'plant-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_Tarifa_ds_DS_Tarifas_item_Clas_1431714529280565CjtoVis_3ICtjoVis_2',
            this.dsplantdnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431714529280565CjtoVis_3ICtjoVis_3';
        dsItem.name = 'tipocontrato';
        dsItem.field = 'tipocontrato';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_Tarifa_ds_DS_Tarifas_item_Clas_1431714529280565CjtoVis_3ICtjoVis_3',
            this.dstipocontrato);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_TIPOCONTRATO;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431714529280565AccOfer_2ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Tarifa_act_A_Tarifas_item_Clas_1431714529280565AccOfer_2ElemAcc_3',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutgcreartarifa;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431714529280565AccOfer_2ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_Tarifa_act_A_Tarifas_item_Clas_1431714529280565AccOfer_2ElemAcc_4',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutgeliminartarifa;
        accItem.setNoShowProperties('TGELIMINARTARIFA', 'ptarifa_oid', '', false);

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
