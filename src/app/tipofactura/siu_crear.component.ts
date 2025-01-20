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
    selector: 'imes-tipofactura-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipoFacturaSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puatrCodigo: Field;
    public puatrDescripcion: Field;
    public puatrEsEmail: FieldDefinedSelection;
    public puatrEsCelular: FieldDefinedSelection;

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
        this.idXML = 'Clas_1547132600320261Ser_1UIServ_1';
        this.className = ModelConstants.Tipofactura.name;
        this.iuName = ModelConstants.Tipofactura.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_TipoFactura_svc_crear',
            'Crear');

        // Create inbound argument components
        this.puatrCodigo = new Field(this.langMng);
        this.puatrDescripcion = new Field(this.langMng);
        this.puatrEsEmail = new FieldDefinedSelection(this.langMng);
        this.puatrEsCelular = new FieldDefinedSelection(this.langMng);

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
            'cls_TipoFactura_svc_crear_inArg_p_atrCodigo',
            'Código');
        this.puatrCodigo.mandatory = true;
        this.puatrCodigo.dataType = Field.dtString;
        this.puatrCodigo.maxLength = 20;
        this.puatrCodigo.assignCSS();
        this.fields.push(this.puatrCodigo);

        this.puatrDescripcion.nameInRequest = 'p_atrdescripcion';
        this.puatrDescripcion.alias = this.langMng.translateText(
            'cls_TipoFactura_svc_crear_inArg_p_atrDescripcion',
            'Descripción');
        this.puatrDescripcion.mandatory = true;
        this.puatrDescripcion.dataType = Field.dtString;
        this.puatrDescripcion.maxLength = 50;
        this.puatrDescripcion.assignCSS();
        this.fields.push(this.puatrDescripcion);

        this.puatrEsEmail.nameInRequest = 'p_atresemail';
        this.puatrEsEmail.alias = this.langMng.translateText(
            'cls_TipoFactura_svc_crear_inArg_p_atrEsEmail',
            'Es email');
        this.puatrEsEmail.mandatory = true;
        this.puatrEsEmail.dataType = Field.dtBool;
        this.puatrEsEmail.options = DefinedSelections.DS_SINO;
        this.puatrEsEmail.value = false;
        this.puatrEsEmail.assignCSS();
        this.fields.push(this.puatrEsEmail);

        this.puatrEsCelular.nameInRequest = 'p_atrescelular';
        this.puatrEsCelular.alias = this.langMng.translateText(
            'cls_TipoFactura_svc_crear_inArg_p_atrEsCelular',
            'Es celular');
        this.puatrEsCelular.mandatory = true;
        this.puatrEsCelular.dataType = Field.dtBool;
        this.puatrEsCelular.options = DefinedSelections.DS_SINO;
        this.puatrEsCelular.value = false;
        this.puatrEsCelular.assignCSS();
        this.fields.push(this.puatrEsCelular);
    }
}
