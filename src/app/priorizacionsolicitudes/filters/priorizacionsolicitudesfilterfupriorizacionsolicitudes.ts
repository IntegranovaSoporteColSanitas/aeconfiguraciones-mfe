import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { Field, FieldDefinedSelection } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';
import { DefinedSelections } from '../../common/definedSelection';

/**
 * Manages the filter F_PriorizacionSolicitudes of class PriorizacionSolicitudes
 */
export class PriorizacionSolicitudesFilterFuPriorizacionSolicitudes extends AbstractFilter {

    /** Filter variables */
    public vfEstadoSol: FieldDefinedSelection;
    public vfEstadoDoc: FieldDefinedSelection;
    public vfPriordad: Field;

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
        this.title = this.langMng.translateText('cls_PriorizacionSolicitudes_filter_F_PriorizacionSolicitudes',
            'Por estados');
        this.filterName = 'F_PriorizacionSolicitudes';

        this.vfEstadoSol = new FieldDefinedSelection(this.langMng);
        this.vfEstadoDoc = new FieldDefinedSelection(this.langMng);
        this.vfPriordad = new Field(this.langMng);
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vfEstadoSol.nameInRequest = 'vfestadosol';
        this.vfEstadoSol.alias = this.langMng.translateText(
            'cls_PriorizacionSolicitudes_filter_F_PriorizacionSolicitudes_fvar_vfEstadoSol',
            'Solicitud');
        this.vfEstadoSol.visible = true;
        this.vfEstadoSol.enabled = true;
        this.vfEstadoSol.mandatory = false;
        this.vfEstadoSol.dataType = Field.dtInt;
        this.vfEstadoSol.options = DefinedSelections.DS_ESTADOSOLICITUD;
        this.vfEstadoSol.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfEstadoSol);

        this.vfEstadoDoc.nameInRequest = 'vfestadodoc';
        this.vfEstadoDoc.alias = this.langMng.translateText(
            'cls_PriorizacionSolicitudes_filter_F_PriorizacionSolicitudes_fvar_vfEstadoDoc',
            'Documentación');
        this.vfEstadoDoc.visible = true;
        this.vfEstadoDoc.enabled = true;
        this.vfEstadoDoc.mandatory = false;
        this.vfEstadoDoc.dataType = Field.dtNat;
        this.vfEstadoDoc.options = DefinedSelections.DS_ESTADODOCSOLNOV;
        this.vfEstadoDoc.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfEstadoDoc);

        this.vfPriordad.nameInRequest = 'vfpriordad';
        this.vfPriordad.alias = this.langMng.translateText(
            'cls_PriorizacionSolicitudes_filter_F_PriorizacionSolicitudes_fvar_vfPriordad',
            'Prioridad');
        this.vfPriordad.visible = true;
        this.vfPriordad.enabled = true;
        this.vfPriordad.mandatory = false;
        this.vfPriordad.dataType = Field.dtNat;
        this.vfPriordad.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfPriordad);
    }
}
