import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { Field } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';

/**
 * Manages the filter F_LogContratosExentosFIngreso of class LogContratosExentosFIngreso
 */
export class LogContratosExentosFIngresoFilterFuLogContratosExentosFIngreso extends AbstractFilter {

    /** Filter variables */
    public vfDesde: Field;
    public vfHasta: Field;
    public vfNumCont: Field;

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
        this.title = this.langMng.translateText('cls_LogContratosExentosFIngreso_filter_F_LogContratosExentosFIngreso',
            'Entre fechas y contrato');
        this.filterName = 'F_LogContratosExentosFIngreso';

        this.vfDesde = new Field(this.langMng);
        this.vfHasta = new Field(this.langMng);
        this.vfNumCont = new Field(this.langMng);
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vfDesde.nameInRequest = 'vfdesde';
        this.vfDesde.alias = this.langMng.translateText(
            'cls_LogContratosExentosFIngreso_filter_F_LogContratosExentosFIngreso_fvar_vfDesde',
            'Desde');
        this.vfDesde.visible = true;
        this.vfDesde.enabled = true;
        this.vfDesde.mandatory = false;
        this.vfDesde.dataType = Field.dtDate;
        this.vfDesde.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfDesde);

        this.vfHasta.nameInRequest = 'vfhasta';
        this.vfHasta.alias = this.langMng.translateText(
            'cls_LogContratosExentosFIngreso_filter_F_LogContratosExentosFIngreso_fvar_vfHasta',
            'Hasta');
        this.vfHasta.visible = true;
        this.vfHasta.enabled = true;
        this.vfHasta.mandatory = false;
        this.vfHasta.dataType = Field.dtDate;
        this.vfHasta.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfHasta);

        this.vfNumCont.nameInRequest = 'vfnumcont';
        this.vfNumCont.alias = this.langMng.translateText(
            'cls_LogContratosExentosFIngreso_filter_F_LogContratosExentosFIngreso_fvar_vfNumCont',
            'Num. Contrato');
        this.vfNumCont.visible = true;
        this.vfNumCont.enabled = true;
        this.vfNumCont.mandatory = false;
        this.vfNumCont.dataType = Field.dtString;
        this.vfNumCont.maxLength = 30;
        this.vfNumCont.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfNumCont);
    }
}
