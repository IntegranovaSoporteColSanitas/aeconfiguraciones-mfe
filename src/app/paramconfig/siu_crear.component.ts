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
    selector: 'imes-paramconfig-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParamConfigSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puatrCodigo: Field;
    public puatrDescripcion: Field;
    public puatrValor: Field;
    public puatrEsNumerico: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431630118912680Ser_1UIServ_2';
        this.className = ModelConstants.Paramconfig.name;
        this.iuName = ModelConstants.Paramconfig.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_ParamConfig_svc_crear',
            'Crear');

        // Create inbound argument components
        this.puatrCodigo = new Field(this.langMng);
        this.puatrDescripcion = new Field(this.langMng);
        this.puatrValor = new Field(this.langMng);
        this.puatrEsNumerico = new FieldDefinedSelection(this.langMng);

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
            'cls_ParamConfig_svc_crear_inArg_p_atrCodigo',
            'Código');
        this.puatrCodigo.mandatory = true;
        this.puatrCodigo.dataType = Field.dtString;
        this.puatrCodigo.maxLength = 50;
        this.puatrCodigo.assignCSS();
        this.fields.push(this.puatrCodigo);

        this.puatrDescripcion.nameInRequest = 'p_atrdescripcion';
        this.puatrDescripcion.alias = this.langMng.translateText(
            'cls_ParamConfig_svc_crear_inArg_p_atrDescripcion',
            'Descripción');
        this.puatrDescripcion.mandatory = true;
        this.puatrDescripcion.dataType = Field.dtString;
        this.puatrDescripcion.maxLength = 255;
        this.puatrDescripcion.assignCSS();
        this.fields.push(this.puatrDescripcion);

        this.puatrValor.nameInRequest = 'p_atrvalor';
        this.puatrValor.alias = this.langMng.translateText(
            'cls_ParamConfig_svc_crear_inArg_p_atrValor',
            'Valor');
        this.puatrValor.mandatory = true;
        this.puatrValor.dataType = Field.dtString;
        this.puatrValor.maxLength = 999;
        this.puatrValor.assignCSS();
        this.fields.push(this.puatrValor);

        this.puatrEsNumerico.nameInRequest = 'p_atresnumerico';
        this.puatrEsNumerico.alias = this.langMng.translateText(
            'cls_ParamConfig_svc_crear_inArg_p_atrEsNumerico',
            'Es numérico');
        this.puatrEsNumerico.mandatory = true;
        this.puatrEsNumerico.dataType = Field.dtBool;
        this.puatrEsNumerico.options = DefinedSelections.DS_SINO;
        this.puatrEsNumerico.value = false;
        this.puatrEsNumerico.assignCSS();
        this.fields.push(this.puatrEsNumerico);
    }
}
