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
    selector: 'imes-estadopersona-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstadoPersonaSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puatrCodigo: Field;
    public puatrDescripcion: Field;
    public puatrUnBeneficiarioDistino: FieldDefinedSelection;
    public puatrProhibidoBeneficiarios: FieldDefinedSelection;
    public puatrProhibidoContratante: FieldDefinedSelection;
    public puatrProhibidoTitular: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431941021696517Ser_1UIServ_1';
        this.className = ModelConstants.Estadopersona.name;
        this.iuName = ModelConstants.Estadopersona.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_EstadoPersona_svc_crear',
            'Crear estado persona');

        // Create inbound argument components
        this.puatrCodigo = new Field(this.langMng);
        this.puatrDescripcion = new Field(this.langMng);
        this.puatrUnBeneficiarioDistino = new FieldDefinedSelection(this.langMng);
        this.puatrProhibidoBeneficiarios = new FieldDefinedSelection(this.langMng);
        this.puatrProhibidoContratante = new FieldDefinedSelection(this.langMng);
        this.puatrProhibidoTitular = new FieldDefinedSelection(this.langMng);

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
            'cls_EstadoPersona_svc_crear_inArg_p_atrCodigo',
            'Código');
        this.puatrCodigo.mandatory = true;
        this.puatrCodigo.dataType = Field.dtInt;
        this.puatrCodigo.assignCSS();
        this.fields.push(this.puatrCodigo);

        this.puatrDescripcion.nameInRequest = 'p_atrdescripcion';
        this.puatrDescripcion.alias = this.langMng.translateText(
            'cls_EstadoPersona_svc_crear_inArg_p_atrDescripcion',
            'Descripción');
        this.puatrDescripcion.mandatory = true;
        this.puatrDescripcion.dataType = Field.dtString;
        this.puatrDescripcion.maxLength = 150;
        this.puatrDescripcion.assignCSS();
        this.fields.push(this.puatrDescripcion);

        this.puatrUnBeneficiarioDistino.nameInRequest = 'p_atrunbeneficiariodistino';
        this.puatrUnBeneficiarioDistino.alias = this.langMng.translateText(
            'cls_EstadoPersona_svc_crear_inArg_p_atrUnBeneficiarioDistino',
            'Un beneficiario distinto');
        this.puatrUnBeneficiarioDistino.mandatory = true;
        this.puatrUnBeneficiarioDistino.dataType = Field.dtBool;
        this.puatrUnBeneficiarioDistino.options = DefinedSelections.DS_SINO;
        this.puatrUnBeneficiarioDistino.value = false;
        this.puatrUnBeneficiarioDistino.assignCSS();
        this.fields.push(this.puatrUnBeneficiarioDistino);

        this.puatrProhibidoBeneficiarios.nameInRequest = 'p_atrprohibidobeneficiarios';
        this.puatrProhibidoBeneficiarios.alias = this.langMng.translateText(
            'cls_EstadoPersona_svc_crear_inArg_p_atrProhibidoBeneficiarios',
            'Prohibido beneficiarios');
        this.puatrProhibidoBeneficiarios.mandatory = true;
        this.puatrProhibidoBeneficiarios.dataType = Field.dtBool;
        this.puatrProhibidoBeneficiarios.options = DefinedSelections.DS_SINO;
        this.puatrProhibidoBeneficiarios.value = false;
        this.puatrProhibidoBeneficiarios.assignCSS();
        this.fields.push(this.puatrProhibidoBeneficiarios);

        this.puatrProhibidoContratante.nameInRequest = 'p_atrprohibidocontratante';
        this.puatrProhibidoContratante.alias = this.langMng.translateText(
            'cls_EstadoPersona_svc_crear_inArg_p_atrProhibidoContratante',
            'Prohibido contratante');
        this.puatrProhibidoContratante.mandatory = true;
        this.puatrProhibidoContratante.dataType = Field.dtBool;
        this.puatrProhibidoContratante.options = DefinedSelections.DS_SINO;
        this.puatrProhibidoContratante.assignCSS();
        this.fields.push(this.puatrProhibidoContratante);

        this.puatrProhibidoTitular.nameInRequest = 'p_atrprohibidotitular';
        this.puatrProhibidoTitular.alias = this.langMng.translateText(
            'cls_EstadoPersona_svc_crear_inArg_p_atrProhibidoTitular',
            'Prohibido titular');
        this.puatrProhibidoTitular.mandatory = true;
        this.puatrProhibidoTitular.dataType = Field.dtBool;
        this.puatrProhibidoTitular.options = DefinedSelections.DS_SINO;
        this.puatrProhibidoTitular.assignCSS();
        this.fields.push(this.puatrProhibidoTitular);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // p_atrProhibidoContratante
            const defValpuatrProhibidoContratante = new Promise<void>((resolveDefValue) => {
                this.puatrProhibidoContratante.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuatrProhibidoContratante);

            // p_atrProhibidoTitular
            const defValpuatrProhibidoTitular = new Promise<void>((resolveDefValue) => {
                this.puatrProhibidoTitular.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuatrProhibidoTitular);

            Promise.all(promiseArr).then((results: any[]) => {
                this.util.hideWaitDialog();
                this.changeDetectorRef.markForCheck();
                resolve();
            });
        });
    }
}
