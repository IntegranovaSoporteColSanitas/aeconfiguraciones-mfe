import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DominioFilterFuDominioVarios} from './filters/dominiofilterfudominiovarios';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
    selector: 'imes-dominio-piu-dominio-obs',
    templateUrl: './piu_dominio_obs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DominioPIUuDominiouObsComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsproductotddescripcion = 'Producto';
    private readonly dsplantdnombre = 'Plan';
    private readonly dsnuevaafiliacion = 'Nueva afiliación';
    private readonly dsinclusion = 'Inclusión';
    private readonly dsreqcuesmed = 'Cuestionario médico';
    private readonly dsnocuesmedtras = 'No cuestionario si traslado';
    private readonly dsacepcuesmat = 'Cuestionario maternal';
    private readonly dsacepcuesneo = 'Cuestionario neonatal';
    private readonly dsacepbbgestante = 'Bebe gestante';

    /** Filters */
    public f0: DominioFilterFuDominioVarios;

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
        this.idXML = 'Clas_1431701422080423UIPobCl_5';
        this.className = ModelConstants.Dominio.name;
        this.iuName = ModelConstants.Dominio.piuudominiouobs;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Dominio_piu_PIU_Dominio_Obs',
            'Dominios');
        this.f0 = new DominioFilterFuDominioVarios(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/DominioApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431701422080423CjtoVis_2ICtjoVis_1';
        dsItem.name = 'productot.descripcion';
        dsItem.field = 'productot-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_PIU_item_Clas_1431701422080423CjtoVis_2ICtjoVis_1',
            this.dsproductotddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431701422080423CjtoVis_2ICtjoVis_2';
        dsItem.name = 'plant.nombre';
        dsItem.field = 'plant-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_PIU_item_Clas_1431701422080423CjtoVis_2ICtjoVis_2',
            this.dsplantdnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431701422080423CjtoVis_2ICtjoVis_3';
        dsItem.name = 'nuevaafiliacion';
        dsItem.field = 'nuevaafiliacion';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_PIU_item_Clas_1431701422080423CjtoVis_2ICtjoVis_3',
            this.dsnuevaafiliacion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431701422080423CjtoVis_2ICtjoVis_4';
        dsItem.name = 'inclusion';
        dsItem.field = 'inclusion';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_PIU_item_Clas_1431701422080423CjtoVis_2ICtjoVis_4',
            this.dsinclusion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431701422080423CjtoVis_2ICtjoVis_5';
        dsItem.name = 'reqcuesmed';
        dsItem.field = 'reqcuesmed';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_PIU_item_Clas_1431701422080423CjtoVis_2ICtjoVis_5',
            this.dsreqcuesmed);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431701422080423CjtoVis_2ICtjoVis_8';
        dsItem.name = 'nocuesmedtras';
        dsItem.field = 'nocuesmedtras';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_PIU_item_Clas_1431701422080423CjtoVis_2ICtjoVis_8',
            this.dsnocuesmedtras);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431701422080423CjtoVis_2ICtjoVis_6';
        dsItem.name = 'acepcuesmat';
        dsItem.field = 'acepcuesmat';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_PIU_item_Clas_1431701422080423CjtoVis_2ICtjoVis_6',
            this.dsacepcuesmat);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431701422080423CjtoVis_2ICtjoVis_7';
        dsItem.name = 'acepcuesneo';
        dsItem.field = 'acepcuesneo';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_PIU_item_Clas_1431701422080423CjtoVis_2ICtjoVis_7',
            this.dsacepcuesneo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431701422080423CjtoVis_2ICtjoVis_9';
        dsItem.name = 'acepbbgestante';
        dsItem.field = 'acepbbgestante';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_PIU_item_Clas_1431701422080423CjtoVis_2ICtjoVis_9',
            this.dsacepbbgestante);
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
