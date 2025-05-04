import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-textoaviso-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextoAvisoSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puatrIdentificador: Field;
    public puatrDescripcion: Field;
    public puatrValor: Field;

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
        this.idXML = 'Clas_1737625305088101Ser_1UIServ_1';
        this.className = ModelConstants.Textoaviso.name;
        this.iuName = ModelConstants.Textoaviso.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_TextoAviso_svc_crear',
            'Crear');

        // Create inbound argument components
        this.puatrIdentificador = new Field(this.langMng);
        this.puatrDescripcion = new Field(this.langMng);
        this.puatrValor = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puatrIdentificador.nameInRequest = 'p_atridentificador';
        this.puatrIdentificador.alias = this.langMng.translateText(
            'cls_TextoAviso_svc_crear_inArg_p_atrIdentificador',
            'Identificador');
        this.puatrIdentificador.mandatory = true;
        this.puatrIdentificador.dataType = Field.dtString;
        this.puatrIdentificador.maxLength = 20;
        this.puatrIdentificador.assignCSS();
        this.fields.push(this.puatrIdentificador);

        this.puatrDescripcion.nameInRequest = 'p_atrdescripcion';
        this.puatrDescripcion.alias = this.langMng.translateText(
            'cls_TextoAviso_svc_crear_inArg_p_atrDescripcion',
            'Descripción');
        this.puatrDescripcion.mandatory = false;
        this.puatrDescripcion.dataType = Field.dtString;
        this.puatrDescripcion.maxLength = 255;
        this.puatrDescripcion.assignCSS();
        this.fields.push(this.puatrDescripcion);

        this.puatrValor.nameInRequest = 'p_atrvalor';
        this.puatrValor.alias = this.langMng.translateText(
            'cls_TextoAviso_svc_crear_inArg_p_atrValor',
            'Valor');
        this.puatrValor.mandatory = true;
        this.puatrValor.dataType = Field.dtText;
        this.puatrValor.assignCSS();
        this.puatrValor.addCSSClass('NOMAYUSCULAS');
        this.fields.push(this.puatrValor);
    }
}
