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

@Component({
    selector: 'imes-tipofactura-piu-tipofactura',
    templateUrl: './piu_tipofactura.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipoFacturaPIUuTipoFacturaComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dscodigo = 'Código';
    private readonly dsdescripcion = 'Descripción';
    private readonly dsesemail = 'Es email';
    private readonly dsescelular = 'Es celular';
    private readonly dsactivo = 'Activo';

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
        this.idXML = 'Clas_1547132600320261UIPobCl_1';
        this.className = ModelConstants.Tipofactura.name;
        this.iuName = ModelConstants.Tipofactura.piuutipofactura;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_TipoFactura_piu_PIU_TipoFactura',
            'Tipos de Factura');
        this.queryURL = '/api/TipoFacturaApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1547132600320261CjtoVis_2ICtjoVis_1';
        dsItem.name = 'codigo';
        dsItem.field = 'codigo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoFactura_ds_DS_TipoFactura_item_Clas_1547132600320261CjtoVis_2ICtjoVis_1',
            this.dscodigo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1547132600320261CjtoVis_2ICtjoVis_2';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoFactura_ds_DS_TipoFactura_item_Clas_1547132600320261CjtoVis_2ICtjoVis_2',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1547132600320261CjtoVis_2ICtjoVis_4';
        dsItem.name = 'esemail';
        dsItem.field = 'esemail';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoFactura_ds_DS_TipoFactura_item_Clas_1547132600320261CjtoVis_2ICtjoVis_4',
            this.dsesemail);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1547132600320261CjtoVis_2ICtjoVis_3';
        dsItem.name = 'escelular';
        dsItem.field = 'escelular';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoFactura_ds_DS_TipoFactura_item_Clas_1547132600320261CjtoVis_2ICtjoVis_3',
            this.dsescelular);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1547132600320261CjtoVis_2ICtjoVis_5';
        dsItem.name = 'activo';
        dsItem.field = 'activo';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoFactura_ds_DS_TipoFactura_item_Clas_1547132600320261CjtoVis_2ICtjoVis_5',
            this.dsactivo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1547132600320261AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_TipoFactura_act_A_TipoFactura_item_Clas_1547132600320261AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Tipofactura.name;
        accItem.targetUI = ModelConstants.Tipofactura.siuucrear;
        accItem.setShowInModalProperties('imes-tipofactura-siu-crear',
            this.langMng.translateText(
            'cls_TipoFactura_svc_crear',
            'Crear'));

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1547132600320261AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_TipoFactura_act_A_TipoFactura_item_Clas_1547132600320261AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Tipofactura.name;
        accItem.targetUI = ModelConstants.Tipofactura.siuumodificar;
        accItem.setShowInModalProperties('imes-tipofactura-siu-modificar',
            this.langMng.translateText(
            'cls_TipoFactura_svc_modificar',
            'Modificar'));

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1547132600320261AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_TipoFactura_act_A_TipoFactura_item_Clas_1547132600320261AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Tipofactura.name;
        accItem.targetUI = ModelConstants.Tipofactura.siuueliminar;
        accItem.setShowInModalProperties('genericsiu',
            this.langMng.translateText(
            'cls_TipoFactura_svc_eliminar',
            'Eliminar'));

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
