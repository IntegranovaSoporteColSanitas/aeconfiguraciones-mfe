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
    selector: 'imes-formapago-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormaPagoSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puatrCodigo: Field;
    public puatrDescripcion: Field;
    public puatrAbrirURL: FieldDefinedSelection;
    public puatrEsVisible: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431941677056219Ser_1UIServ_1';
        this.className = ModelConstants.Formapago.name;
        this.iuName = ModelConstants.Formapago.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_FormaPago_svc_crear',
            'Crear forma de pago');

        // Create inbound argument components
        this.puatrCodigo = new Field(this.langMng);
        this.puatrDescripcion = new Field(this.langMng);
        this.puatrAbrirURL = new FieldDefinedSelection(this.langMng);
        this.puatrEsVisible = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puatrCodigo.nameInRequest = 'p_atrcodigo';
        this.puatrCodigo.alias = this.langMng.translateText(
            'cls_FormaPago_svc_crear_inArg_p_atrCodigo',
            'Código');
        this.puatrCodigo.mandatory = true;
        this.puatrCodigo.dataType = Field.dtInt;
        this.puatrCodigo.assignCSS();
        this.fields.push(this.puatrCodigo);

        this.puatrDescripcion.nameInRequest = 'p_atrdescripcion';
        this.puatrDescripcion.alias = this.langMng.translateText(
            'cls_FormaPago_svc_crear_inArg_p_atrDescripcion',
            'Descripción');
        this.puatrDescripcion.mandatory = true;
        this.puatrDescripcion.dataType = Field.dtString;
        this.puatrDescripcion.maxLength = 150;
        this.puatrDescripcion.assignCSS();
        this.fields.push(this.puatrDescripcion);

        this.puatrAbrirURL.nameInRequest = 'p_atrabrirurl';
        this.puatrAbrirURL.alias = this.langMng.translateText(
            'cls_FormaPago_svc_crear_inArg_p_atrAbrirURL',
            'Abrir URL');
        this.puatrAbrirURL.mandatory = true;
        this.puatrAbrirURL.dataType = Field.dtBool;
        this.puatrAbrirURL.options = DefinedSelections.DS_SINO;
        this.puatrAbrirURL.value = false;
        this.puatrAbrirURL.assignCSS();
        this.fields.push(this.puatrAbrirURL);

        this.puatrEsVisible.nameInRequest = 'p_atresvisible';
        this.puatrEsVisible.alias = this.langMng.translateText(
            'cls_FormaPago_svc_crear_inArg_p_atrEsVisible',
            'Visible');
        this.puatrEsVisible.mandatory = true;
        this.puatrEsVisible.dataType = Field.dtBool;
        this.puatrEsVisible.options = DefinedSelections.DS_SINO;
        this.puatrEsVisible.value = false;
        this.puatrEsVisible.assignCSS();
        this.fields.push(this.puatrEsVisible);
    }
}
