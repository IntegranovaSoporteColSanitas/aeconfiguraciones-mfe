import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { Field } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';

/**
 * Manages the filter F_ContratosExentosFIngreso of class ContratosExentosFIngreso
 */
export class ContratosExentosFIngresoFilterFuContratosExentosFIngreso extends AbstractFilter {

    /** Filter variables */
    public vfNum: Field;

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
        this.title = this.langMng.translateText('cls_ContratosExentosFIngreso_filter_F_ContratosExentosFIngreso',
            'Por Número');
        this.filterName = 'F_ContratosExentosFIngreso';

        this.vfNum = new Field(this.langMng);
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vfNum.nameInRequest = 'vfnum';
        this.vfNum.alias = this.langMng.translateText(
            'cls_ContratosExentosFIngreso_filter_F_ContratosExentosFIngreso_fvar_vfNum',
            'Num. Contrato');
        this.vfNum.visible = true;
        this.vfNum.enabled = true;
        this.vfNum.mandatory = false;
        this.vfNum.dataType = Field.dtString;
        this.vfNum.maxLength = 20;
        this.vfNum.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfNum);
    }
}
