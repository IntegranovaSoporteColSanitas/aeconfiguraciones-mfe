import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { Field, FieldDefinedSelection } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';
import { DefinedSelections } from '../../common/definedSelection';
import { AbstractPIU } from 'src/app/common/abstractPIU';

/**
 * Manages the filter F_LogLlamadasAE of class LogLlamadasAE
 */
export class LogLlamadasAEFilterFuLogLlamadasAE extends AbstractFilter {

    /** Filter variables */
    public vfTipoServicio: FieldDefinedSelection;
    public vfServicio: FieldDefinedSelection;
    public vfCapa: Field;
    public vfDesde: Field;
    public vfHasta: Field;
    public vfNumSolicitud: Field;

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
        this.title = this.langMng.translateText('cls_LogLlamadasAE_filter_F_LogLlamadasAE',
            'Entre fechas y datos de la llamada');
        this.filterName = 'F_LogLlamadasAE';

        this.vfTipoServicio = new FieldDefinedSelection(this.langMng);
        this.vfServicio = new FieldDefinedSelection(this.langMng);
        this.vfCapa = new Field(this.langMng);
        this.vfDesde = new Field(this.langMng);
        this.vfHasta = new Field(this.langMng);
        this.vfNumSolicitud = new Field(this.langMng);
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vfTipoServicio.nameInRequest = 'vftiposervicio';
        this.vfTipoServicio.alias = this.langMng.translateText(
            'cls_LogLlamadasAE_filter_F_LogLlamadasAE_fvar_vfTipoServicio',
            'Tipo Servicio');
        this.vfTipoServicio.visible = true;
        this.vfTipoServicio.enabled = true;
        this.vfTipoServicio.mandatory = false;
        this.vfTipoServicio.dataType = Field.dtString;
        this.vfTipoServicio.options = DefinedSelections.DS_TIPOSSERVICIOSBH;
        this.vfTipoServicio.maxLength = 20;
        this.vfTipoServicio.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfTipoServicio);

        this.vfServicio.nameInRequest = 'vfservicio';
        this.vfServicio.alias = this.langMng.translateText(
            'cls_LogLlamadasAE_filter_F_LogLlamadasAE_fvar_vfServicio',
            'Servicio');
        this.vfServicio.visible = true;
        this.vfServicio.enabled = true;
        this.vfServicio.mandatory = false;
        this.vfServicio.dataType = Field.dtString;
        this.vfServicio.options = DefinedSelections.DS_SERVICIOSAE;
        this.vfServicio.maxLength = 20;
        this.vfServicio.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfServicio);

        this.vfCapa.nameInRequest = 'vfcapa';
        this.vfCapa.alias = this.langMng.translateText(
            'cls_LogLlamadasAE_filter_F_LogLlamadasAE_fvar_vfCapa',
            'Capacidad');
        this.vfCapa.visible = true;
        this.vfCapa.enabled = true;
        this.vfCapa.mandatory = false;
        this.vfCapa.dataType = Field.dtString;
        this.vfCapa.maxLength = 20;
        this.vfCapa.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfCapa);

        this.vfDesde.nameInRequest = 'vfdesde';
        this.vfDesde.alias = this.langMng.translateText(
            'cls_LogLlamadasAE_filter_F_LogLlamadasAE_fvar_vfDesde',
            'Desde');
        this.vfDesde.visible = true;
        this.vfDesde.enabled = true;
        this.vfDesde.mandatory = false;
        this.vfDesde.dataType = Field.dtDatetime;
        this.vfDesde.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfDesde);

        this.vfHasta.nameInRequest = 'vfhasta';
        this.vfHasta.alias = this.langMng.translateText(
            'cls_LogLlamadasAE_filter_F_LogLlamadasAE_fvar_vfHasta',
            'Hasta');
        this.vfHasta.visible = true;
        this.vfHasta.enabled = true;
        this.vfHasta.mandatory = false;
        this.vfHasta.dataType = Field.dtDatetime;
        this.vfHasta.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfHasta);

        this.vfNumSolicitud.nameInRequest = 'vfnumsolicitud';
        this.vfNumSolicitud.alias = this.langMng.translateText(
            'cls_LogLlamadasAE_filter_F_LogLlamadasAE_fvar_vfNumSolicitud',
            'No Solicitud');
        this.vfNumSolicitud.visible = true;
        this.vfNumSolicitud.enabled = true;
        this.vfNumSolicitud.mandatory = false;
        this.vfNumSolicitud.dataType = Field.dtString;
        this.vfNumSolicitud.maxLength = 50;
        this.vfNumSolicitud.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfNumSolicitud);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): void {
        const promiseArr: Array<Promise<void>> = [];

        // vfDesde
        const defValvfDesde = new Promise<void>((resolveDefValue) => {
            this.vfDesde.setValue(this.stdFun.dateTimeadd('d', -7, this.stdFun.systemDatetime()));
            resolveDefValue();
        });
        promiseArr.push(defValvfDesde);

        // vfHasta
        const defValvfHasta = new Promise<void>((resolveDefValue) => {
            this.vfHasta.setValue(this.stdFun.systemDatetime());
            resolveDefValue();
        });
        promiseArr.push(defValvfHasta);

        Promise.all(promiseArr).then((results: any[]) => {
            this.initialized = true;
            // Launch query
            if (this.populationContainer instanceof AbstractPIU) {
                const abstractPIU = this.populationContainer as AbstractPIU;
                if (abstractPIU.autoSearch && abstractPIU.activeFilter?.filterName === this.filterName) {
                    this.search();
                }
            } else {
                this.search();
            }
            this.changeDetectorRef.markForCheck();
        });
    }
}
