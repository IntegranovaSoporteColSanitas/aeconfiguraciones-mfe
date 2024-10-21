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
    selector: 'imes-tiponovedad-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipoNovedadSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puatrTipo: FieldDefinedSelection;
    public puatrAliasTipo: Field;
    public puatrNombre: Field;
    public puatrDescripcion: Field;
    public puatrCodigoLegal: Field;

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
        this.idXML = 'Clas_1581411467264384Ser_1UIServ_1';
        this.className = ModelConstants.Tiponovedad.name;
        this.iuName = ModelConstants.Tiponovedad.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_TipoNovedad_svc_crear',
            'Crear');

        // Create inbound argument components
        this.puatrTipo = new FieldDefinedSelection(this.langMng);
        this.puatrAliasTipo = new Field(this.langMng);
        this.puatrNombre = new Field(this.langMng);
        this.puatrDescripcion = new Field(this.langMng);
        this.puatrCodigoLegal = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puatrTipo.nameInRequest = 'p_atrtipo';
        this.puatrTipo.alias = this.langMng.translateText(
            'cls_TipoNovedad_svc_crear_inArg_p_atrTipo',
            'Tipo');
        this.puatrTipo.mandatory = true;
        this.puatrTipo.dataType = Field.dtNat;
        this.puatrTipo.options = DefinedSelections.DS_TIPONOVEDAD;
        this.puatrTipo.assignCSS();
        this.fields.push(this.puatrTipo);

        this.puatrAliasTipo.nameInRequest = 'p_atraliastipo';
        this.puatrAliasTipo.alias = this.langMng.translateText(
            'cls_TipoNovedad_svc_crear_inArg_p_atrAliasTipo',
            'Alias');
        this.puatrAliasTipo.mandatory = true;
        this.puatrAliasTipo.dataType = Field.dtString;
        this.puatrAliasTipo.maxLength = 50;
        this.puatrAliasTipo.assignCSS();
        this.fields.push(this.puatrAliasTipo);

        this.puatrNombre.nameInRequest = 'p_atrnombre';
        this.puatrNombre.alias = this.langMng.translateText(
            'cls_TipoNovedad_svc_crear_inArg_p_atrNombre',
            'Nombre');
        this.puatrNombre.mandatory = true;
        this.puatrNombre.dataType = Field.dtString;
        this.puatrNombre.maxLength = 50;
        this.puatrNombre.assignCSS();
        this.fields.push(this.puatrNombre);

        this.puatrDescripcion.nameInRequest = 'p_atrdescripcion';
        this.puatrDescripcion.alias = this.langMng.translateText(
            'cls_TipoNovedad_svc_crear_inArg_p_atrDescripcion',
            'Descripción');
        this.puatrDescripcion.mandatory = true;
        this.puatrDescripcion.dataType = Field.dtString;
        this.puatrDescripcion.maxLength = 200;
        this.puatrDescripcion.assignCSS();
        this.fields.push(this.puatrDescripcion);

        this.puatrCodigoLegal.nameInRequest = 'p_atrcodigolegal';
        this.puatrCodigoLegal.alias = this.langMng.translateText(
            'cls_TipoNovedad_svc_crear_inArg_p_atrCodigoLegal',
            'Código Legal');
        this.puatrCodigoLegal.mandatory = true;
        this.puatrCodigoLegal.dataType = Field.dtString;
        this.puatrCodigoLegal.maxLength = 5;
        this.puatrCodigoLegal.assignCSS();
        this.fields.push(this.puatrCodigoLegal);
    }
}
