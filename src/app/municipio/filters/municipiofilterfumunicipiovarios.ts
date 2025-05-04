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
 * Manages the filter F_MunicipioVarios of class Municipio
 */
export class MunicipioFilterFuMunicipioVarios extends AbstractFilter {

    /** Filter variables */
    public vouDepartamento: FieldOVPreload;
    public vuDescripcion: Field;
    public vuEsValidoEPS: FieldDefinedSelection;
    public vuAplicaIVA: FieldDefinedSelection;

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
        this.title = this.langMng.translateText('cls_Municipio_filter_F_MunicipioVarios',
            'Criterios de búsqueda');
        this.filterName = 'F_MunicipioVarios';

        this.vouDepartamento = new FieldOVPreload(this.langMng);
        this.vuDescripcion = new Field(this.langMng);
        this.vuEsValidoEPS = new FieldDefinedSelection(this.langMng);
        this.vuAplicaIVA = new FieldDefinedSelection(this.langMng);
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vouDepartamento.nameInRequest = 'vo_departamento';
        this.vouDepartamento.alias = this.langMng.translateText(
            'cls_Municipio_filter_F_MunicipioVarios_fvar_vo_Departamento',
            'Departamento');
        this.vouDepartamento.visible = true;
        this.vouDepartamento.enabled = true;
        this.vouDepartamento.mandatory = false;
        this.vouDepartamento.dataType = ModelConstants.Departamento.name;
        this.vouDepartamento.preloadValues = [];
        this.vouDepartamento.allowMultiSelect = false;
        this.vouDepartamento.maxLength = 150;
        this.vouDepartamento.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vouDepartamento);

        this.vuDescripcion.nameInRequest = 'v_descripcion';
        this.vuDescripcion.alias = this.langMng.translateText(
            'cls_Municipio_filter_F_MunicipioVarios_fvar_v_Descripcion',
            'Descripción');
        this.vuDescripcion.visible = true;
        this.vuDescripcion.enabled = true;
        this.vuDescripcion.mandatory = false;
        this.vuDescripcion.dataType = Field.dtString;
        this.vuDescripcion.maxLength = 50;
        this.vuDescripcion.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vuDescripcion);

        this.vuEsValidoEPS.nameInRequest = 'v_esvalidoeps';
        this.vuEsValidoEPS.alias = this.langMng.translateText(
            'cls_Municipio_filter_F_MunicipioVarios_fvar_v_EsValidoEPS',
            'Válido EPS');
        this.vuEsValidoEPS.visible = true;
        this.vuEsValidoEPS.enabled = true;
        this.vuEsValidoEPS.mandatory = false;
        this.vuEsValidoEPS.dataType = Field.dtBool;
        this.vuEsValidoEPS.options = DefinedSelections.DS_SINO;
        this.vuEsValidoEPS.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vuEsValidoEPS);

        this.vuAplicaIVA.nameInRequest = 'v_aplicaiva';
        this.vuAplicaIVA.alias = this.langMng.translateText(
            'cls_Municipio_filter_F_MunicipioVarios_fvar_v_AplicaIVA',
            'Aplica I.V.A');
        this.vuAplicaIVA.visible = true;
        this.vuAplicaIVA.enabled = true;
        this.vuAplicaIVA.mandatory = false;
        this.vuAplicaIVA.dataType = Field.dtBool;
        this.vuAplicaIVA.options = DefinedSelections.DS_SINO;
        this.vuAplicaIVA.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vuAplicaIVA);
    }

    public override loadPreload(): void {

        // vouDepartamento
        this.executeSearchPreload(this.vouDepartamento, ModelConstants.Departamento.name, 'IC_Departamento',
            '', []);
    }

}
