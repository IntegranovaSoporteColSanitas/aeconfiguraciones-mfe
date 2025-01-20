import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { ModelConstants } from '../../common/model.constants';
import { Field, FieldOVPreload } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';

/**
 * Manages the filter F_Novedad of class Novedad
 */
export class NovedadFilterFuNovedad extends AbstractFilter {

    /** Filter variables */
    public vfTipo: FieldOVPreload;
    public vfNombre: Field;

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
        this.title = this.langMng.translateText('cls_Novedad_filter_F_Novedad',
            'Por tipo y nombre');
        this.filterName = 'F_Novedad';

        this.vfTipo = new FieldOVPreload(this.langMng);
        this.vfNombre = new Field(this.langMng);
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vfTipo.nameInRequest = 'vftipo';
        this.vfTipo.alias = this.langMng.translateText(
            'cls_Novedad_filter_F_Novedad_fvar_vfTipo',
            'Tipo');
        this.vfTipo.visible = true;
        this.vfTipo.enabled = true;
        this.vfTipo.mandatory = false;
        this.vfTipo.dataType = ModelConstants.Tiponovedad.name;
        this.vfTipo.preloadValues = [];
        this.vfTipo.allowMultiSelect = false;
        this.vfTipo.maxLength = 50;
        this.vfTipo.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfTipo);

        this.vfNombre.nameInRequest = 'vfnombre';
        this.vfNombre.alias = this.langMng.translateText(
            'cls_Novedad_filter_F_Novedad_fvar_vfNombre',
            'Nombre');
        this.vfNombre.visible = true;
        this.vfNombre.enabled = true;
        this.vfNombre.mandatory = false;
        this.vfNombre.dataType = Field.dtString;
        this.vfNombre.maxLength = 20;
        this.vfNombre.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfNombre);
    }

    public override loadPreload(): void {

        // vfTipo
        this.executeSearchPreload(this.vfTipo, ModelConstants.Tiponovedad.name, 'IC_TipoNovedad',
            '', []);
    }

}
