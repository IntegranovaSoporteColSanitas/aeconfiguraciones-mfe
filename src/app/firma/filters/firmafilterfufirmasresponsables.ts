import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { ModelConstants } from '../../common/model.constants';
import { Field, FieldOVPreload } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';

/**
 * Manages the filter F_FirmasResponsables of class Firma
 */
export class FirmaFilterFuFirmasResponsables extends AbstractFilter {

    /** Filter variables */
    public vuUsuario: Field;
    public vuNombre: Field;
    public vouRegional: FieldOVPreload;

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
        this.title = this.langMng.translateText('cls_Firma_filter_F_FirmasResponsables',
            'Criterios de búsqueda');
        this.filterName = 'F_FirmasResponsables';

        this.vuUsuario = new Field(this.langMng);
        this.vuNombre = new Field(this.langMng);
        this.vouRegional = new FieldOVPreload(this.langMng);
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vuUsuario.nameInRequest = 'v_usuario';
        this.vuUsuario.alias = this.langMng.translateText(
            'cls_Firma_filter_F_FirmasResponsables_fvar_v_Usuario',
            'Usuario');
        this.vuUsuario.visible = true;
        this.vuUsuario.enabled = true;
        this.vuUsuario.mandatory = false;
        this.vuUsuario.dataType = Field.dtString;
        this.vuUsuario.maxLength = 20;
        this.vuUsuario.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vuUsuario);

        this.vuNombre.nameInRequest = 'v_nombre';
        this.vuNombre.alias = this.langMng.translateText(
            'cls_Firma_filter_F_FirmasResponsables_fvar_v_Nombre',
            'Responsable');
        this.vuNombre.visible = true;
        this.vuNombre.enabled = true;
        this.vuNombre.mandatory = false;
        this.vuNombre.dataType = Field.dtString;
        this.vuNombre.maxLength = 50;
        this.vuNombre.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vuNombre);

        this.vouRegional.nameInRequest = 'vo_regional';
        this.vouRegional.alias = this.langMng.translateText(
            'cls_Firma_filter_F_FirmasResponsables_fvar_vo_Regional',
            'Regional');
        this.vouRegional.visible = true;
        this.vouRegional.enabled = true;
        this.vouRegional.mandatory = false;
        this.vouRegional.dataType = ModelConstants.Regional.name;
        this.vouRegional.preloadValues = [];
        this.vouRegional.allowMultiSelect = false;
        this.vouRegional.maxLength = 150;
        this.vouRegional.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vouRegional);
    }

    public override loadPreload(): void {

        // vouRegional
        this.executeSearchPreload(this.vouRegional, ModelConstants.Regional.name, 'IC_Regional',
            '', []);
    }

}
