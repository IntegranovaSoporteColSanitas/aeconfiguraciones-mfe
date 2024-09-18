import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { Field } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';

/**
 * Manages the filter F_Funcionario_PorNombre of class Funcionario
 */
export class FuncionarioFilterFuFuncionariouPorNombre extends AbstractFilter {

    /** Filter variables */
    public vfPriNom: Field;
    public vfSegNom: Field;
    public vfPriApe: Field;
    public vfSegApe: Field;

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
        this.title = this.langMng.translateText('cls_Funcionario_filter_F_Funcionario_PorNombre',
            'Por nombre');
        this.filterName = 'F_Funcionario_PorNombre';

        this.vfPriNom = new Field(this.langMng);
        this.vfSegNom = new Field(this.langMng);
        this.vfPriApe = new Field(this.langMng);
        this.vfSegApe = new Field(this.langMng);
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vfPriNom.nameInRequest = 'vfprinom';
        this.vfPriNom.alias = this.langMng.translateText(
            'cls_Funcionario_filter_F_Funcionario_PorNombre_fvar_vfPriNom',
            'Primer nombre');
        this.vfPriNom.visible = true;
        this.vfPriNom.enabled = true;
        this.vfPriNom.mandatory = false;
        this.vfPriNom.dataType = Field.dtString;
        this.vfPriNom.maxLength = 50;
        this.vfPriNom.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfPriNom);

        this.vfSegNom.nameInRequest = 'vfsegnom';
        this.vfSegNom.alias = this.langMng.translateText(
            'cls_Funcionario_filter_F_Funcionario_PorNombre_fvar_vfSegNom',
            'Segundo nombre');
        this.vfSegNom.visible = true;
        this.vfSegNom.enabled = true;
        this.vfSegNom.mandatory = false;
        this.vfSegNom.dataType = Field.dtString;
        this.vfSegNom.maxLength = 50;
        this.vfSegNom.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfSegNom);

        this.vfPriApe.nameInRequest = 'vfpriape';
        this.vfPriApe.alias = this.langMng.translateText(
            'cls_Funcionario_filter_F_Funcionario_PorNombre_fvar_vfPriApe',
            'Primer apellido');
        this.vfPriApe.visible = true;
        this.vfPriApe.enabled = true;
        this.vfPriApe.mandatory = false;
        this.vfPriApe.dataType = Field.dtString;
        this.vfPriApe.maxLength = 50;
        this.vfPriApe.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfPriApe);

        this.vfSegApe.nameInRequest = 'vfsegape';
        this.vfSegApe.alias = this.langMng.translateText(
            'cls_Funcionario_filter_F_Funcionario_PorNombre_fvar_vfSegApe',
            'Segundo apellido');
        this.vfSegApe.visible = true;
        this.vfSegApe.enabled = true;
        this.vfSegApe.mandatory = false;
        this.vfSegApe.dataType = Field.dtString;
        this.vfSegApe.maxLength = 50;
        this.vfSegApe.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfSegApe);
    }
}
