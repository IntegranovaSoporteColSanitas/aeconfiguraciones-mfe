import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { Field, FieldDefinedSelection } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';
import { DefinedSelections } from '../../common/definedSelection';

/**
 * Manages the filter F_PlantillaReporte of class PlantillaReporte
 */
export class PlantillaReporteFilterFuPlantillaReporte extends AbstractFilter {

    /** Filter variables */
    public vfTipo: FieldDefinedSelection;
    public vfFecha: Field;

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
        this.title = this.langMng.translateText('cls_PlantillaReporte_filter_F_PlantillaReporte',
            'Por tipo y fecha vigencia');
        this.filterName = 'F_PlantillaReporte';

        this.vfTipo = new FieldDefinedSelection(this.langMng);
        this.vfFecha = new Field(this.langMng);
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vfTipo.nameInRequest = 'vftipo';
        this.vfTipo.alias = this.langMng.translateText(
            'cls_PlantillaReporte_filter_F_PlantillaReporte_fvar_vfTipo',
            'Tipo');
        this.vfTipo.visible = true;
        this.vfTipo.enabled = true;
        this.vfTipo.mandatory = false;
        this.vfTipo.dataType = Field.dtNat;
        this.vfTipo.options = DefinedSelections.DS_TIPOREPORTE;
        this.vfTipo.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfTipo);

        this.vfFecha.nameInRequest = 'vffecha';
        this.vfFecha.alias = this.langMng.translateText(
            'cls_PlantillaReporte_filter_F_PlantillaReporte_fvar_vfFecha',
            'Fecha vigencia >=');
        this.vfFecha.visible = true;
        this.vfFecha.enabled = true;
        this.vfFecha.mandatory = false;
        this.vfFecha.dataType = Field.dtDate;
        this.vfFecha.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfFecha);
    }
}
