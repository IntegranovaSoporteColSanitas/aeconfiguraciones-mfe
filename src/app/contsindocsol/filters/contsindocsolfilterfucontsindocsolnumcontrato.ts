import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { Field } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';

/**
 * « Manages the filter F_ContSinDocSolNumContrato of class ContSinDocSol »
 */
export class ContSinDocSolFilterFuContSinDocSolNumContrato extends AbstractFilter {

    /** Filter variables */
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
        this.title = this.langMng.translateText('cls_ContSinDocSol_filter_F_ContSinDocSolNumContrato',
            'Por Nº de Contrato');
        this.filterName = 'F_ContSinDocSolNumContrato';

        this.vfNumCont = new Field(this.langMng);
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vfNumCont.nameInRequest = 'vfnumcont';
        this.vfNumCont.alias = this.langMng.translateText(
            'cls_ContSinDocSol_filter_F_ContSinDocSolNumContrato_fvar_vfNumCont',
            'Nº Contrato');
        this.vfNumCont.visible = true;
        this.vfNumCont.enabled = true;
        this.vfNumCont.mandatory = false;
        this.vfNumCont.dataType = Field.dtString;
        this.vfNumCont.maxLength = 50;
        this.vfNumCont.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfNumCont);
    }
}
