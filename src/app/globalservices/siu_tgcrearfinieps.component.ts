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

/**
 * « Implements global SIU SIU_TGCREARFINIEPS »
 */
@Component({
    selector: 'imes-gs-siu-tgcrearfinieps',
    templateUrl: './siu_tgcrearfinieps.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuTGCREARFINIEPSComponent extends AbstractServiceIU implements OnInit {

    /** Fields */
    public ptupuatrTramite: FieldDefinedSelection;
    public ptupuatrTipoContrato: FieldDefinedSelection;
    public ptupuatrDesde: Field;
    public ptupuatrHasta: Field;
    public ptupuatrFechaInicioAplicar: Field;

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
        this.idXML = 'IGl_1655288233984471UIServ_1';
        this.className = ModelConstants.Globalservices.name;
        this.iuName = ModelConstants.Globalservices.siuutgcrearfinieps;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TGCREARFINIEPS';
        this.title = this.langMng.translateText('gs_TGCREARFINIEPS',
            'Crear');

        // Create inbound argument components
        this.ptupuatrTramite = new FieldDefinedSelection(this.langMng);
        this.ptupuatrTipoContrato = new FieldDefinedSelection(this.langMng);
        this.ptupuatrDesde = new Field(this.langMng);
        this.ptupuatrHasta = new Field(this.langMng);
        this.ptupuatrFechaInicioAplicar = new Field(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptupuatrTramite.nameInRequest = 'pt_p_atrtramite';
        this.ptupuatrTramite.alias = this.langMng.translateText(
            'gs_TGCREARFINIEPS_inArg_pt_p_atrTramite',
            'Trámite');
        this.ptupuatrTramite.mandatory = true;
        this.ptupuatrTramite.dataType = Field.dtNat;
        this.ptupuatrTramite.options = DefinedSelections.DS_TRAMITE;
        this.ptupuatrTramite.assignCSS();
        this.fields.push(this.ptupuatrTramite);

        this.ptupuatrTipoContrato.nameInRequest = 'pt_p_atrtipocontrato';
        this.ptupuatrTipoContrato.alias = this.langMng.translateText(
            'gs_TGCREARFINIEPS_inArg_pt_p_atrTipoContrato',
            'Tipo Contrato');
        this.ptupuatrTipoContrato.mandatory = true;
        this.ptupuatrTipoContrato.dataType = Field.dtNat;
        this.ptupuatrTipoContrato.options = DefinedSelections.DS_TIPOCONTRATO;
        this.ptupuatrTipoContrato.assignCSS();
        this.fields.push(this.ptupuatrTipoContrato);

        this.ptupuatrDesde.nameInRequest = 'pt_p_atrdesde';
        this.ptupuatrDesde.alias = this.langMng.translateText(
            'gs_TGCREARFINIEPS_inArg_pt_p_atrDesde',
            'Fecha Desde');
        this.ptupuatrDesde.mandatory = true;
        this.ptupuatrDesde.dataType = Field.dtDate;
        this.ptupuatrDesde.assignCSS();
        this.fields.push(this.ptupuatrDesde);

        this.ptupuatrHasta.nameInRequest = 'pt_p_atrhasta';
        this.ptupuatrHasta.alias = this.langMng.translateText(
            'gs_TGCREARFINIEPS_inArg_pt_p_atrHasta',
            'Fecha Hasta');
        this.ptupuatrHasta.mandatory = true;
        this.ptupuatrHasta.dataType = Field.dtDate;
        this.ptupuatrHasta.assignCSS();
        this.fields.push(this.ptupuatrHasta);

        this.ptupuatrFechaInicioAplicar.nameInRequest = 'pt_p_atrfechainicioaplicar';
        this.ptupuatrFechaInicioAplicar.alias = this.langMng.translateText(
            'gs_TGCREARFINIEPS_inArg_pt_p_atrFechaInicioAplicar',
            'Fecha inicio de contratación');
        this.ptupuatrFechaInicioAplicar.mandatory = true;
        this.ptupuatrFechaInicioAplicar.dataType = Field.dtDate;
        this.ptupuatrFechaInicioAplicar.assignCSS();
        this.fields.push(this.ptupuatrFechaInicioAplicar);
    }
}
