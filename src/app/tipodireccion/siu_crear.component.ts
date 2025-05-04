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
    selector: 'imes-tipodireccion-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipoDireccionSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puatrCodigo: Field;
    public puatrDescripcion: Field;
    public puatrEsResidencia: FieldDefinedSelection;
    public puatrEsCorrespondencia: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431940628480765Ser_1UIServ_1';
        this.className = ModelConstants.Tipodireccion.name;
        this.iuName = ModelConstants.Tipodireccion.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_TipoDireccion_svc_crear',
            'Crear tipo de dirección');

        // Create inbound argument components
        this.puatrCodigo = new Field(this.langMng);
        this.puatrDescripcion = new Field(this.langMng);
        this.puatrEsResidencia = new FieldDefinedSelection(this.langMng);
        this.puatrEsCorrespondencia = new FieldDefinedSelection(this.langMng);

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
            'cls_TipoDireccion_svc_crear_inArg_p_atrCodigo',
            'Código');
        this.puatrCodigo.mandatory = true;
        this.puatrCodigo.dataType = Field.dtInt;
        this.puatrCodigo.assignCSS();
        this.fields.push(this.puatrCodigo);

        this.puatrDescripcion.nameInRequest = 'p_atrdescripcion';
        this.puatrDescripcion.alias = this.langMng.translateText(
            'cls_TipoDireccion_svc_crear_inArg_p_atrDescripcion',
            'Descripción');
        this.puatrDescripcion.mandatory = true;
        this.puatrDescripcion.dataType = Field.dtString;
        this.puatrDescripcion.maxLength = 150;
        this.puatrDescripcion.assignCSS();
        this.fields.push(this.puatrDescripcion);

        this.puatrEsResidencia.nameInRequest = 'p_atresresidencia';
        this.puatrEsResidencia.alias = this.langMng.translateText(
            'cls_TipoDireccion_svc_crear_inArg_p_atrEsResidencia',
            'Es residencia');
        this.puatrEsResidencia.mandatory = true;
        this.puatrEsResidencia.dataType = Field.dtBool;
        this.puatrEsResidencia.options = DefinedSelections.DS_SINO;
        this.puatrEsResidencia.value = false;
        this.puatrEsResidencia.assignCSS();
        this.fields.push(this.puatrEsResidencia);

        this.puatrEsCorrespondencia.nameInRequest = 'p_atrescorrespondencia';
        this.puatrEsCorrespondencia.alias = this.langMng.translateText(
            'cls_TipoDireccion_svc_crear_inArg_p_atrEsCorrespondencia',
            'Es correspondencia');
        this.puatrEsCorrespondencia.mandatory = true;
        this.puatrEsCorrespondencia.dataType = Field.dtBool;
        this.puatrEsCorrespondencia.options = DefinedSelections.DS_SINO;
        this.puatrEsCorrespondencia.value = false;
        this.puatrEsCorrespondencia.assignCSS();
        this.fields.push(this.puatrEsCorrespondencia);
    }
}
