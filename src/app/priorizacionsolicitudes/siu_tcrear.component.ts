import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
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
    selector: 'imes-priorizacionsolicitudes-siu-tcrear',
    templateUrl: './siu_tcrear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriorizacionSolicitudesSIUuTCREARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public ptupuatrEstadoSolicitud: FieldDefinedSelection;
    public ptupuatrEstadoDoc: FieldDefinedSelection;
    public ptupuatrPrioridad: Field;

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
        this.idXML = 'Clas_1586846892032587Ser_6UIServ_1';
        this.className = ModelConstants.Priorizacionsolicitudes.name;
        this.iuName = ModelConstants.Priorizacionsolicitudes.siuutcrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TCREAR';
        this.title = this.langMng.translateText('cls_PriorizacionSolicitudes_svc_TCREAR',
            'Crear');

        // Create inbound argument components
        this.ptupuatrEstadoSolicitud = new FieldDefinedSelection(this.langMng);
        this.ptupuatrEstadoDoc = new FieldDefinedSelection(this.langMng);
        this.ptupuatrPrioridad = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptupuatrEstadoSolicitud.nameInRequest = 'pt_p_atrestadosolicitud';
        this.ptupuatrEstadoSolicitud.alias = this.langMng.translateText(
            'cls_PriorizacionSolicitudes_svc_TCREAR_inArg_pt_p_atrEstadoSolicitud',
            'Estado Solicitud');
        this.ptupuatrEstadoSolicitud.mandatory = true;
        this.ptupuatrEstadoSolicitud.dataType = Field.dtInt;
        this.ptupuatrEstadoSolicitud.options = DefinedSelections.DS_ESTADOSOLICITUD;
        this.ptupuatrEstadoSolicitud.assignCSS();
        this.fields.push(this.ptupuatrEstadoSolicitud);

        this.ptupuatrEstadoDoc.nameInRequest = 'pt_p_atrestadodoc';
        this.ptupuatrEstadoDoc.alias = this.langMng.translateText(
            'cls_PriorizacionSolicitudes_svc_TCREAR_inArg_pt_p_atrEstadoDoc',
            'Estado Documentación');
        this.ptupuatrEstadoDoc.mandatory = true;
        this.ptupuatrEstadoDoc.dataType = Field.dtNat;
        this.ptupuatrEstadoDoc.options = DefinedSelections.DS_ESTADODOCSOLNOV;
        this.ptupuatrEstadoDoc.assignCSS();
        this.fields.push(this.ptupuatrEstadoDoc);

        this.ptupuatrPrioridad.nameInRequest = 'pt_p_atrprioridad';
        this.ptupuatrPrioridad.alias = this.langMng.translateText(
            'cls_PriorizacionSolicitudes_svc_TCREAR_inArg_pt_p_atrPrioridad',
            'Prioridad');
        this.ptupuatrPrioridad.mandatory = true;
        this.ptupuatrPrioridad.dataType = Field.dtNat;
        this.ptupuatrPrioridad.assignCSS();
        this.fields.push(this.ptupuatrPrioridad);
    }
}
