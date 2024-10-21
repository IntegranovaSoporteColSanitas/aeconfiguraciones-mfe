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
    selector: 'imes-grupoasignacion-siu-tcrear',
    templateUrl: './siu_tcrear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrupoAsignacionSIUuTCREARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public ptupuatrTipo: FieldDefinedSelection;
    public ptupuatrNombre: Field;
    public ptupuatrDescripcion: Field;

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
        this.idXML = 'Clas_1586850168832947Ser_15UIServ_1';
        this.className = ModelConstants.Grupoasignacion.name;
        this.iuName = ModelConstants.Grupoasignacion.siuutcrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TCREAR';
        this.title = this.langMng.translateText('cls_GrupoAsignacion_svc_TCREAR',
            'Crear');

        // Create inbound argument components
        this.ptupuatrTipo = new FieldDefinedSelection(this.langMng);
        this.ptupuatrNombre = new Field(this.langMng);
        this.ptupuatrDescripcion = new Field(this.langMng);

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
            'cls_GrupoAsignacion_svc_TCREAR_inArg_pt_p_atrTipo',
            'Tipo');
        this.ptupuatrTipo.mandatory = true;
        this.ptupuatrTipo.dataType = Field.dtNat;
        this.ptupuatrTipo.options = DefinedSelections.DS_TIPOGRUPOASIGNACION;
        this.ptupuatrTipo.assignCSS();
        this.fields.push(this.ptupuatrTipo);

        this.ptupuatrNombre.nameInRequest = 'pt_p_atrnombre';
        this.ptupuatrNombre.alias = this.langMng.translateText(
            'cls_GrupoAsignacion_svc_TCREAR_inArg_pt_p_atrNombre',
            'Nombre');
        this.ptupuatrNombre.mandatory = true;
        this.ptupuatrNombre.dataType = Field.dtString;
        this.ptupuatrNombre.maxLength = 50;
        this.ptupuatrNombre.assignCSS();
        this.fields.push(this.ptupuatrNombre);

        this.ptupuatrDescripcion.nameInRequest = 'pt_p_atrdescripcion';
        this.ptupuatrDescripcion.alias = this.langMng.translateText(
            'cls_GrupoAsignacion_svc_TCREAR_inArg_pt_p_atrDescripcion',
            'Descripción');
        this.ptupuatrDescripcion.mandatory = true;
        this.ptupuatrDescripcion.dataType = Field.dtString;
        this.ptupuatrDescripcion.maxLength = 150;
        this.ptupuatrDescripcion.assignCSS();
        this.fields.push(this.ptupuatrDescripcion);
    }
}
