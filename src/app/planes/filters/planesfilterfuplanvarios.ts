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
 * Manages the filter F_PlanVarios of class Planes
 */
export class PlanesFilterFuPlanVarios extends AbstractFilter {

    /** Filter variables */
    public vouProducto: FieldOVPreload;
    public vuNombre: Field;
    public vuEsBancoRep: FieldDefinedSelection;
    public vEsVoluntario: FieldDefinedSelection;

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
        this.title = this.langMng.translateText('cls_Planes_filter_F_PlanVarios',
            'Criterios de búsqueda');
        this.filterName = 'F_PlanVarios';

        this.vouProducto = new FieldOVPreload(this.langMng);
        this.vuNombre = new Field(this.langMng);
        this.vuEsBancoRep = new FieldDefinedSelection(this.langMng);
        this.vEsVoluntario = new FieldDefinedSelection(this.langMng);
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vouProducto.nameInRequest = 'vo_producto';
        this.vouProducto.alias = this.langMng.translateText(
            'cls_Planes_filter_F_PlanVarios_fvar_vo_Producto',
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

        this.vuNombre.nameInRequest = 'v_nombre';
        this.vuNombre.alias = this.langMng.translateText(
            'cls_Planes_filter_F_PlanVarios_fvar_v_Nombre',
            'Nombre');
        this.vuNombre.visible = true;
        this.vuNombre.enabled = true;
        this.vuNombre.mandatory = false;
        this.vuNombre.dataType = Field.dtString;
        this.vuNombre.maxLength = 50;
        this.vuNombre.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vuNombre);

        this.vuEsBancoRep.nameInRequest = 'v_esbancorep';
        this.vuEsBancoRep.alias = this.langMng.translateText(
            'cls_Planes_filter_F_PlanVarios_fvar_v_EsBancoRep',
            'Es Banco República');
        this.vuEsBancoRep.visible = true;
        this.vuEsBancoRep.enabled = true;
        this.vuEsBancoRep.mandatory = false;
        this.vuEsBancoRep.dataType = Field.dtBool;
        this.vuEsBancoRep.options = DefinedSelections.DS_SINO;
        this.vuEsBancoRep.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vuEsBancoRep);

        this.vEsVoluntario.nameInRequest = 'vesvoluntario';
        this.vEsVoluntario.alias = this.langMng.translateText(
            'cls_Planes_filter_F_PlanVarios_fvar_vEsVoluntario',
            'Es Voluntario');
        this.vEsVoluntario.visible = true;
        this.vEsVoluntario.enabled = true;
        this.vEsVoluntario.mandatory = false;
        this.vEsVoluntario.dataType = Field.dtBool;
        this.vEsVoluntario.options = DefinedSelections.DS_SINO;
        this.vEsVoluntario.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vEsVoluntario);
    }

    public override loadPreload(): void {

        // vouProducto
        this.executeSearchPreload(this.vouProducto, ModelConstants.Productos.name, 'IC_Producto',
            '', []);
    }

}
