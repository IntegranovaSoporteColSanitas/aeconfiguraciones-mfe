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

@Component({
    selector: 'imes-productos-piu-productos-obs',
    templateUrl: './piu_productos_obs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductosPIUuProductosuObsComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsproducto = 'Producto';
    private readonly dsdescripcion = 'Descripción';
    private readonly dscodanexomat = 'Anexo maternidad';
    private readonly dscodanexoneo = 'Anexo neonatal';
    private readonly dsnit = 'NIT';
    private readonly dscodigolegal = 'Código Legal';
    private readonly dsfechadocsolicitud = 'Fecha Doc. Solicitud';

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
        this.idXML = 'Clas_1431687397376823UIPobCl_2';
        this.className = ModelConstants.Productos.name;
        this.iuName = ModelConstants.Productos.piuuproductosuobs;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Productos_piu_PIU_Productos_Obs',
            'Productos');
        this.queryURL = '/api/ProductosApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431687397376823CjtoVis_AutoICtjoVis_1';
        dsItem.name = 'producto';
        dsItem.field = 'producto';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_Productos_ds__Auto__item_Clas_1431687397376823CjtoVis_AutoICtjoVis_1',
            this.dsproducto);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431687397376823CjtoVis_AutoICtjoVis_2';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Productos_ds__Auto__item_Clas_1431687397376823CjtoVis_AutoICtjoVis_2',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431687397376823CjtoVis_AutoICtjoVis_3';
        dsItem.name = 'codanexomat';
        dsItem.field = 'codanexomat';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_Productos_ds__Auto__item_Clas_1431687397376823CjtoVis_AutoICtjoVis_3',
            this.dscodanexomat);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431687397376823CjtoVis_AutoICtjoVis_4';
        dsItem.name = 'codanexoneo';
        dsItem.field = 'codanexoneo';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_Productos_ds__Auto__item_Clas_1431687397376823CjtoVis_AutoICtjoVis_4',
            this.dscodanexoneo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431687397376823CjtoVis_AutoICtjoVis_5';
        dsItem.name = 'nit';
        dsItem.field = 'nit';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 60;
        dsItem.alias = this.langMng.translateText(
            'cls_Productos_ds__Auto__item_Clas_1431687397376823CjtoVis_AutoICtjoVis_5',
            this.dsnit);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431687397376823CjtoVis_AutoICtjoVis_6';
        dsItem.name = 'codigolegal';
        dsItem.field = 'codigolegal';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 10;
        dsItem.alias = this.langMng.translateText(
            'cls_Productos_ds__Auto__item_Clas_1431687397376823CjtoVis_AutoICtjoVis_6',
            this.dscodigolegal);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431687397376823CjtoVis_AutoICtjoVis_7';
        dsItem.name = 'fechadocsolicitud';
        dsItem.field = 'fechadocsolicitud';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_Productos_ds__Auto__item_Clas_1431687397376823CjtoVis_AutoICtjoVis_7',
            this.dsfechadocsolicitud);
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
