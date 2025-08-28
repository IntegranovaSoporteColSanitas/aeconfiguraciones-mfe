import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_Sucursal_Obs of Sucursal »
 */
@Component({
    selector: 'imes-sucursal-piu-sucursal-obs',
    templateUrl: './piu_sucursal_obs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SucursalPIUuSucursaluObsComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsregionalddescripcion = 'Regional';
    private readonly dscodigo = 'Código';
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
        this.idXML = 'Clas_1431874043904178UIPobCl_2';
        this.className = ModelConstants.Sucursal.name;
        this.classAlias = this.langMng.translateText('cls_Sucursal',
            'Sucursal');
        this.supplementaryInfoAtt.push('descripcion');
        this.iuName = ModelConstants.Sucursal.piuusucursaluobs;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Sucursal_piu_PIU_Sucursal_Obs',
            'Sucursales');
        this.queryURL = '/api/SucursalApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431874043904178CjtoVis_2ICtjoVis_1';
        dsItem.name = 'regional.descripcion';
        dsItem.field = 'regional-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_Sucursal_ds_DS_Sucursal_PIU_item_Clas_1431874043904178CjtoVis_2ICtjoVis_1',
            this.dsregionalddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431874043904178CjtoVis_2ICtjoVis_2';
        dsItem.name = 'codigo';
        dsItem.field = 'codigo';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_Sucursal_ds_DS_Sucursal_PIU_item_Clas_1431874043904178CjtoVis_2ICtjoVis_2',
            this.dscodigo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431874043904178CjtoVis_2ICtjoVis_3';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 200;
        dsItem.alias = this.langMng.translateText(
            'cls_Sucursal_ds_DS_Sucursal_PIU_item_Clas_1431874043904178CjtoVis_2ICtjoVis_3',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
