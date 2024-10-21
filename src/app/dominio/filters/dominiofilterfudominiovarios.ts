import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { ModelConstants } from '../../common/model.constants';
import { Field, FieldDefinedSelection, FieldOVPreload } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';
import { DefinedSelections } from '../../common/definedSelection';

/**
 * Manages the filter F_DominioVarios of class Dominio
 */
export class DominioFilterFuDominioVarios extends AbstractFilter {

    /** Filter variables */
    public vouProducto: FieldOVPreload;
    public vouPlan: FieldOVPreload;
    public vuNuevaAfiliacion: FieldDefinedSelection;
    public vuInclusion: FieldDefinedSelection;
    public vouRol: FieldOVPreload;

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
        this.title = this.langMng.translateText('cls_Dominio_filter_F_DominioVarios',
            'Criterios de búsqueda');
        this.filterName = 'F_DominioVarios';

        this.vouProducto = new FieldOVPreload(this.langMng);
        this.vouPlan = new FieldOVPreload(this.langMng);
        this.vuNuevaAfiliacion = new FieldDefinedSelection(this.langMng);
        this.vuInclusion = new FieldDefinedSelection(this.langMng);
        this.vouRol = new FieldOVPreload(this.langMng);
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vouProducto.nameInRequest = 'vo_producto';
        this.vouProducto.alias = this.langMng.translateText(
            'cls_Dominio_filter_F_DominioVarios_fvar_vo_Producto',
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
            'cls_Dominio_filter_F_DominioVarios_fvar_vo_Plan',
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

        this.vuNuevaAfiliacion.nameInRequest = 'v_nuevaafiliacion';
        this.vuNuevaAfiliacion.alias = this.langMng.translateText(
            'cls_Dominio_filter_F_DominioVarios_fvar_v_NuevaAfiliacion',
            'Nueva afiliacion');
        this.vuNuevaAfiliacion.visible = true;
        this.vuNuevaAfiliacion.enabled = true;
        this.vuNuevaAfiliacion.mandatory = false;
        this.vuNuevaAfiliacion.dataType = Field.dtBool;
        this.vuNuevaAfiliacion.options = DefinedSelections.DS_SINO;
        this.vuNuevaAfiliacion.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vuNuevaAfiliacion);

        this.vuInclusion.nameInRequest = 'v_inclusion';
        this.vuInclusion.alias = this.langMng.translateText(
            'cls_Dominio_filter_F_DominioVarios_fvar_v_Inclusion',
            'Inclusión');
        this.vuInclusion.visible = true;
        this.vuInclusion.enabled = true;
        this.vuInclusion.mandatory = false;
        this.vuInclusion.dataType = Field.dtBool;
        this.vuInclusion.options = DefinedSelections.DS_SINO;
        this.vuInclusion.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vuInclusion);

        this.vouRol.nameInRequest = 'vo_rol';
        this.vouRol.alias = this.langMng.translateText(
            'cls_Dominio_filter_F_DominioVarios_fvar_vo_Rol',
            'Rol');
        this.vouRol.visible = true;
        this.vouRol.enabled = true;
        this.vouRol.mandatory = false;
        this.vouRol.dataType = ModelConstants.Rol.name;
        this.vouRol.preloadValues = [];
        this.vouRol.allowMultiSelect = false;
        this.vouRol.maxLength = 50;
        this.vouRol.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vouRol);
    }

    public override loadPreload(): void {

        // vouProducto
        this.executeSearchPreload(this.vouProducto, ModelConstants.Productos.name, 'IC_Producto',
            '', []);

        // vouRol
        this.executeSearchPreload(this.vouRol, ModelConstants.Rol.name, 'IC_Rol',
            '', []);
    }


    /**
     * Search the preload values of field vo_Plan
     */
    private loadPreloadvouplan(): void {
        if (this.vouProducto.getSelectedInstances().length === 1) {
            this.executeSearchPreload(this.vouPlan, ModelConstants.Planes.name, 'IC_Plan',
                '',  ['Dominio_F_DominioVarios_vo_Plan_NavFilter']);
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
