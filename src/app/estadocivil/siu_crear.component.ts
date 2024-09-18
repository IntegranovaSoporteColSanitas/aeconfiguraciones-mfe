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
    selector: 'imes-estadocivil-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstadoCivilSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puatrCodigo: Field;
    public puatrDescripcion: Field;
    public puatrNombreCorto: Field;

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
        this.idXML = 'Clas_1431880990720963Ser_1UIServ_1';
        this.className = ModelConstants.Estadocivil.name;
        this.iuName = ModelConstants.Estadocivil.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_EstadoCivil_svc_crear',
            'Crear estado civil');

        // Create inbound argument components
        this.puatrCodigo = new Field(this.langMng);
        this.puatrDescripcion = new Field(this.langMng);
        this.puatrNombreCorto = new Field(this.langMng);

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
            'cls_EstadoCivil_svc_crear_inArg_p_atrCodigo',
            'Código');
        this.puatrCodigo.mandatory = true;
        this.puatrCodigo.dataType = Field.dtInt;
        this.puatrCodigo.assignCSS();
        this.fields.push(this.puatrCodigo);

        this.puatrDescripcion.nameInRequest = 'p_atrdescripcion';
        this.puatrDescripcion.alias = this.langMng.translateText(
            'cls_EstadoCivil_svc_crear_inArg_p_atrDescripcion',
            'Descripción');
        this.puatrDescripcion.mandatory = true;
        this.puatrDescripcion.dataType = Field.dtString;
        this.puatrDescripcion.maxLength = 100;
        this.puatrDescripcion.assignCSS();
        this.fields.push(this.puatrDescripcion);

        this.puatrNombreCorto.nameInRequest = 'p_atrnombrecorto';
        this.puatrNombreCorto.alias = this.langMng.translateText(
            'cls_EstadoCivil_svc_crear_inArg_p_atrNombreCorto',
            'Nombre corto');
        this.puatrNombreCorto.mandatory = true;
        this.puatrNombreCorto.dataType = Field.dtString;
        this.puatrNombreCorto.maxLength = 50;
        this.puatrNombreCorto.assignCSS();
        this.fields.push(this.puatrNombreCorto);
    }
}
