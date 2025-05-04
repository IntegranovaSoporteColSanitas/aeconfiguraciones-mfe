import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { Field, FieldDefinedSelection } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';
import { DefinedSelections } from '../../common/definedSelection';

/**
 * Manages the filter F_FechaIniEPS of class FechaIniEPS
 */
export class FechaIniEPSFilterFuFechaIniEPS extends AbstractFilter {

    /** Filter variables */
    public vfTramite: FieldDefinedSelection;
    public vfTipoContrato: FieldDefinedSelection;
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
        this.title = this.langMng.translateText('cls_FechaIniEPS_filter_F_FechaIniEPS',
            'Por tipos y fecha');
        this.filterName = 'F_FechaIniEPS';

        this.vfTramite = new FieldDefinedSelection(this.langMng);
        this.vfTipoContrato = new FieldDefinedSelection(this.langMng);
        this.vfFecha = new Field(this.langMng);
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vfTramite.nameInRequest = 'vftramite';
        this.vfTramite.alias = this.langMng.translateText(
            'cls_FechaIniEPS_filter_F_FechaIniEPS_fvar_vfTramite',
            'Trámite');
        this.vfTramite.visible = true;
        this.vfTramite.enabled = true;
        this.vfTramite.mandatory = false;
        this.vfTramite.dataType = Field.dtNat;
        this.vfTramite.options = DefinedSelections.DS_TRAMITE;
        this.vfTramite.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfTramite);

        this.vfTipoContrato.nameInRequest = 'vftipocontrato';
        this.vfTipoContrato.alias = this.langMng.translateText(
            'cls_FechaIniEPS_filter_F_FechaIniEPS_fvar_vfTipoContrato',
            'Tipo Contrato');
        this.vfTipoContrato.visible = true;
        this.vfTipoContrato.enabled = true;
        this.vfTipoContrato.mandatory = false;
        this.vfTipoContrato.dataType = Field.dtNat;
        this.vfTipoContrato.options = DefinedSelections.DS_TIPOCONTRATO;
        this.vfTipoContrato.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfTipoContrato);

        this.vfFecha.nameInRequest = 'vffecha';
        this.vfFecha.alias = this.langMng.translateText(
            'cls_FechaIniEPS_filter_F_FechaIniEPS_fvar_vfFecha',
            'Fecha');
        this.vfFecha.visible = true;
        this.vfFecha.enabled = true;
        this.vfFecha.mandatory = false;
        this.vfFecha.dataType = Field.dtDate;
        this.vfFecha.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfFecha);
    }
}
