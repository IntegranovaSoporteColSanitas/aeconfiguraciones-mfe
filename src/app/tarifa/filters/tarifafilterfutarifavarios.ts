import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { ModelConstants } from '../../common/model.constants';
import { Field, FieldOVPreload } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';

/**
 * Manages the filter F_TarifaVarios of class Tarifa
 */
export class TarifaFilterFuTarifaVarios extends AbstractFilter {

    /** Filter variables */
    public vouProducto: FieldOVPreload;
    public vouPlan: FieldOVPreload;

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
        this.title = this.langMng.translateText('cls_Tarifa_filter_F_TarifaVarios',
            'Criterios de búsqueda');
        this.filterName = 'F_TarifaVarios';

        this.vouProducto = new FieldOVPreload(this.langMng);
        this.vouPlan = new FieldOVPreload(this.langMng);
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vouProducto.nameInRequest = 'vo_producto';
        this.vouProducto.alias = this.langMng.translateText(
            'cls_Tarifa_filter_F_TarifaVarios_fvar_vo_Producto',
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
            'cls_Tarifa_filter_F_TarifaVarios_fvar_vo_Plan',
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
                '',  ['Tarifa_F_TarifaVarios_vo_Plan_NavFilter']);
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
