import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { TipoIVAFilterFuTipoIVAVarios} from './filters/tipoivafilterfutipoivavarios';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
    selector: 'imes-tipoiva-piu-tipoiva',
    templateUrl: './piu_tipoiva.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipoIVAPIUuTipoIVAComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsproductotddescripcion = 'Producto';
    private readonly dsplantdnombre = 'Plan';
    private readonly dsdescripcion = 'Descripción';
    private readonly dsfechainicio = 'Fecha Inicio';
    private readonly dsfechafin = 'Fecha Fin';
    private readonly dsporcentaje = 'Porcentaje';

    /** Filters */
    public f0: TipoIVAFilterFuTipoIVAVarios;

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
        this.idXML = 'Clas_1431882432512691UIPobCl_1';
        this.className = ModelConstants.Tipoiva.name;
        this.iuName = ModelConstants.Tipoiva.piuutipoiva;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_TipoIVA_piu_PIU_TipoIVA',
            'Tipos de I.V.A');
        this.f0 = new TipoIVAFilterFuTipoIVAVarios(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/TipoIVAApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431882432512691CjtoVis_2ICtjoVis_1';
        dsItem.name = 'productot.descripcion';
        dsItem.field = 'productot-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoIVA_ds_DS_TipoIVA_PIU_item_Clas_1431882432512691CjtoVis_2ICtjoVis_1',
            this.dsproductotddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431882432512691CjtoVis_2ICtjoVis_2';
        dsItem.name = 'plant.nombre';
        dsItem.field = 'plant-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoIVA_ds_DS_TipoIVA_PIU_item_Clas_1431882432512691CjtoVis_2ICtjoVis_2',
            this.dsplantdnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431882432512691CjtoVis_2ICtjoVis_4';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoIVA_ds_DS_TipoIVA_PIU_item_Clas_1431882432512691CjtoVis_2ICtjoVis_4',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431882432512691CjtoVis_2ICtjoVis_6';
        dsItem.name = 'fechainicio';
        dsItem.field = 'fechainicio';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoIVA_ds_DS_TipoIVA_PIU_item_Clas_1431882432512691CjtoVis_2ICtjoVis_6',
            this.dsfechainicio);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431882432512691CjtoVis_2ICtjoVis_7';
        dsItem.name = 'fechafin';
        dsItem.field = 'fechafin';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoIVA_ds_DS_TipoIVA_PIU_item_Clas_1431882432512691CjtoVis_2ICtjoVis_7',
            this.dsfechafin);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431882432512691CjtoVis_2ICtjoVis_5';
        dsItem.name = 'porcentaje';
        dsItem.field = 'porcentaje';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoIVA_ds_DS_TipoIVA_PIU_item_Clas_1431882432512691CjtoVis_2ICtjoVis_5',
            this.dsporcentaje);
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
        accItem.idXML = 'Clas_1431882432512691AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_TipoIVA_act_A_TipoIVA_PIU_item_Clas_1431882432512691AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Tipoiva.name;
        accItem.targetUI = ModelConstants.Tipoiva.siuucrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431882432512691AccOfer_1ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_TipoIVA_act_A_TipoIVA_PIU_item_Clas_1431882432512691AccOfer_1ElemAcc_4',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Tipoiva.name;
        accItem.targetUI = ModelConstants.Tipoiva.siuumodificar;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431882432512691AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_TipoIVA_act_A_TipoIVA_PIU_item_Clas_1431882432512691AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Tipoiva.name;
        accItem.targetUI = ModelConstants.Tipoiva.siuueliminar;
        accItem.setNoShowProperties('eliminar', 'p_thistipoiva_oid', '', false);

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
