import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { ModelConstants } from '../../common/model.constants';
import { Field, FieldOVPreload } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';

/**
 * « Manages the filter F_TipoIVAVarios of class TipoIVA »
 */
export class TipoIVAFilterFuTipoIVAVarios extends AbstractFilter {

    /** Filter variables */
    public vouProducto: FieldOVPreload;
    public vouPlan: FieldOVPreload;
    public vuDesde: Field;
    public vuHasta: Field;

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param stdFun Standard functions
     */
    constructor(public override appGlobalInfo: AppGlobalInfo,
                public override util: Util,
                public override changeDetectorRef: ChangeDetectorRef,
                public langMng: LanguageMng,
                public stdFun: StandardFunctions) {
        super(appGlobalInfo, util, changeDetectorRef);
        this.title = this.langMng.translateText('cls_TipoIVA_filter_F_TipoIVAVarios',
            'Criterios de búsqueda');
        this.filterName = 'F_TipoIVAVarios';

        this.vouProducto = new FieldOVPreload(this.langMng);
        this.vouPlan = new FieldOVPreload(this.langMng);
        this.vuDesde = new Field(this.langMng);
        this.vuHasta = new Field(this.langMng);
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vouProducto.nameInRequest = 'vo_producto';
        this.vouProducto.alias = this.langMng.translateText(
            'cls_TipoIVA_filter_F_TipoIVAVarios_fvar_vo_Producto',
            'Producto');
        this.vouProducto.visible = true;
        this.vouProducto.enabled = true;
        this.vouProducto.mandatory = false;
        this.vouProducto.dataType = ModelConstants.Productos.name;
        this.vouProducto.preloadValues = [];
        this.vouProducto.allowMultiSelect = false;
        this.vouProducto.maxLength = 100;
        this.vouProducto.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vouProducto);

        this.vouPlan.nameInRequest = 'vo_plan';
        this.vouPlan.alias = this.langMng.translateText(
            'cls_TipoIVA_filter_F_TipoIVAVarios_fvar_vo_Plan',
            'Plan');
        this.vouPlan.visible = true;
        this.vouPlan.enabled = true;
        this.vouPlan.mandatory = false;
        this.vouPlan.dataType = ModelConstants.Planes.name;
        this.vouPlan.preloadValues = [];
        this.vouPlan.allowMultiSelect = false;
        this.vouPlan.maxLength = 150;
        this.vouPlan.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vouPlan);

        this.vuDesde.nameInRequest = 'v_desde';
        this.vuDesde.alias = this.langMng.translateText(
            'cls_TipoIVA_filter_F_TipoIVAVarios_fvar_v_Desde',
            'Desde');
        this.vuDesde.visible = true;
        this.vuDesde.enabled = true;
        this.vuDesde.mandatory = false;
        this.vuDesde.dataType = Field.dtDate;
        this.vuDesde.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vuDesde);

        this.vuHasta.nameInRequest = 'v_hasta';
        this.vuHasta.alias = this.langMng.translateText(
            'cls_TipoIVA_filter_F_TipoIVAVarios_fvar_v_Hasta',
            'Hasta');
        this.vuHasta.visible = true;
        this.vuHasta.enabled = true;
        this.vuHasta.mandatory = false;
        this.vuHasta.dataType = Field.dtDate;
        this.vuHasta.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vuHasta);
    }

    public override loadPreload(): void {

        // vouProducto
        this.executeSearchPreload(this.vouProducto, ModelConstants.Productos.name, 'IC_Producto',
            '', []);
    }


    /**
     * Search the preload values of field vo_Plan
     */
    private loadPreloadvouplan(): void {
        if (this.vouProducto.getSelectedInstances().length === 1) {
            this.executeSearchPreload(this.vouPlan, ModelConstants.Planes.name, 'IC_Plan',
                '',  ['TipoIVA_F_TipoIVAVarios_vo_Plan_NavFilter']);
        } else {
            this.vouPlan.cleanPreload();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * Manages the change for the vo_Producto argument
     */
    public onvouproductoChange(): void {
        this.loadPreloadvouplan();

        this.executePendingDependencyRules();
    }
}
