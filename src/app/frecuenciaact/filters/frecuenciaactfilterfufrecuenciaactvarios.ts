import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { Field, FieldDefinedSelection } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';
import { DefinedSelections } from '../../common/definedSelection';

/**
 * Manages the filter F_FrecuenciaActVarios of class FrecuenciaAct
 */
export class FrecuenciaActFilterFuFrecuenciaActVarios extends AbstractFilter {

    /** Filter variables */
    public vuParametrica: FieldDefinedSelection;
    public vuFIni: Field;
    public vuFFin: Field;

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
        this.title = this.langMng.translateText('cls_FrecuenciaAct_filter_F_FrecuenciaActVarios',
            'Criterios de búsqueda');
        this.filterName = 'F_FrecuenciaActVarios';

        this.vuParametrica = new FieldDefinedSelection(this.langMng);
        this.vuFIni = new Field(this.langMng);
        this.vuFFin = new Field(this.langMng);
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vuParametrica.nameInRequest = 'v_parametrica';
        this.vuParametrica.alias = this.langMng.translateText(
            'cls_FrecuenciaAct_filter_F_FrecuenciaActVarios_fvar_v_Parametrica',
            'Paramétrica');
        this.vuParametrica.visible = true;
        this.vuParametrica.enabled = true;
        this.vuParametrica.mandatory = false;
        this.vuParametrica.dataType = Field.dtNat;
        this.vuParametrica.options = DefinedSelections.DS_PARAMETRICAS;
        this.vuParametrica.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vuParametrica);

        this.vuFIni.nameInRequest = 'v_fini';
        this.vuFIni.alias = this.langMng.translateText(
            'cls_FrecuenciaAct_filter_F_FrecuenciaActVarios_fvar_v_FIni',
            'Fecha sinc. desde');
        this.vuFIni.visible = true;
        this.vuFIni.enabled = true;
        this.vuFIni.mandatory = false;
        this.vuFIni.dataType = Field.dtDate;
        this.vuFIni.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vuFIni);

        this.vuFFin.nameInRequest = 'v_ffin';
        this.vuFFin.alias = this.langMng.translateText(
            'cls_FrecuenciaAct_filter_F_FrecuenciaActVarios_fvar_v_FFin',
            'Fecha sinc. hasta');
        this.vuFFin.visible = true;
        this.vuFFin.enabled = true;
        this.vuFFin.mandatory = false;
        this.vuFFin.dataType = Field.dtDate;
        this.vuFFin.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vuFFin);
    }
}
