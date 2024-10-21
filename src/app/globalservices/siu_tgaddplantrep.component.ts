import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { CacheDependencyRules, InstanceCache } from '../common/app.cachedependencyrules';
import { Field, FieldDefinedSelection } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
    selector: 'imes-gs-siu-tgaddplantrep',
    templateUrl: './siu_tgaddplantrep.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuTGADDPLANTREPComponent extends AbstractServiceIU implements OnInit {

    /** Fields */
    public ptupuatrTipo: FieldDefinedSelection;
    public ptupuatrTitulo: Field;
    public ptupuatrFechaVigencia: Field;
    public ptupuatrRutaArchivos: Field;
    public ptupuatrNombreArchivoPDF: Field;

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param stdFun Standard functions
     * @param condNavMng Conditional manager
     */
    constructor(
        public override appGlobalInfo: AppGlobalInfo, public override util: Util, public override changeDetectorRef: ChangeDetectorRef,
        public langMng: LanguageMng, public stdFun: StandardFunctions,
        public override condNavMng: ConditionalNavigationMng) {
        super(appGlobalInfo, util, changeDetectorRef, condNavMng);
        this.idXML = 'IGl_1623834492928280UIServ_1';
        this.className = ModelConstants.Globalservices.name;
        this.iuName = ModelConstants.Globalservices.siuutgaddplantrep;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TGADDPLANTREP';
        this.title = this.langMng.translateText('gs_TGADDPLANTREP',
            'Nuevo');

        // Create inbound argument components
        this.ptupuatrTipo = new FieldDefinedSelection(this.langMng);
        this.ptupuatrTitulo = new Field(this.langMng);
        this.ptupuatrFechaVigencia = new Field(this.langMng);
        this.ptupuatrRutaArchivos = new Field(this.langMng);
        this.ptupuatrNombreArchivoPDF = new Field(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptupuatrTipo.nameInRequest = 'pt_p_atrtipo';
        this.ptupuatrTipo.alias = this.langMng.translateText(
            'gs_TGADDPLANTREP_inArg_pt_p_atrTipo',
            'Tipo');
        this.ptupuatrTipo.mandatory = true;
        this.ptupuatrTipo.dataType = Field.dtNat;
        this.ptupuatrTipo.options = DefinedSelections.DS_TIPOREPORTE;
        this.ptupuatrTipo.assignCSS();
        this.fields.push(this.ptupuatrTipo);

        this.ptupuatrTitulo.nameInRequest = 'pt_p_atrtitulo';
        this.ptupuatrTitulo.alias = this.langMng.translateText(
            'gs_TGADDPLANTREP_inArg_pt_p_atrTitulo',
            'Título');
        this.ptupuatrTitulo.mandatory = true;
        this.ptupuatrTitulo.dataType = Field.dtString;
        this.ptupuatrTitulo.maxLength = 100;
        this.ptupuatrTitulo.assignCSS();
        this.fields.push(this.ptupuatrTitulo);

        this.ptupuatrFechaVigencia.nameInRequest = 'pt_p_atrfechavigencia';
        this.ptupuatrFechaVigencia.alias = this.langMng.translateText(
            'gs_TGADDPLANTREP_inArg_pt_p_atrFechaVigencia',
            'Fecha vigencia');
        this.ptupuatrFechaVigencia.mandatory = true;
        this.ptupuatrFechaVigencia.dataType = Field.dtDate;
        this.ptupuatrFechaVigencia.assignCSS();
        this.fields.push(this.ptupuatrFechaVigencia);

        this.ptupuatrRutaArchivos.nameInRequest = 'pt_p_atrrutaarchivos';
        this.ptupuatrRutaArchivos.alias = this.langMng.translateText(
            'gs_TGADDPLANTREP_inArg_pt_p_atrRutaArchivos',
            'Ruta relativa');
        this.ptupuatrRutaArchivos.mandatory = true;
        this.ptupuatrRutaArchivos.dataType = Field.dtString;
        this.ptupuatrRutaArchivos.maxLength = 255;
        this.ptupuatrRutaArchivos.assignCSS();
        this.fields.push(this.ptupuatrRutaArchivos);

        this.ptupuatrNombreArchivoPDF.nameInRequest = 'pt_p_atrnombrearchivopdf';
        this.ptupuatrNombreArchivoPDF.alias = this.langMng.translateText(
            'gs_TGADDPLANTREP_inArg_pt_p_atrNombreArchivoPDF',
            'Nombre fichero PDF');
        this.ptupuatrNombreArchivoPDF.mandatory = true;
        this.ptupuatrNombreArchivoPDF.dataType = Field.dtString;
        this.ptupuatrNombreArchivoPDF.maxLength = 50;
        this.ptupuatrNombreArchivoPDF.assignCSS();
        this.fields.push(this.ptupuatrNombreArchivoPDF);
    }
}
