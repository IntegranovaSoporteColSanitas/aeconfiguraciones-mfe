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
    selector: 'imes-tipoidentificacion-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipoIdentificacionSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puatrCodigo: Field;
    public puatrDescripcion: Field;
    public puatrNombreCorto: Field;
    public puatrValidoContratante: FieldDefinedSelection;
    public puatrValidoTitular: FieldDefinedSelection;
    public puatrDiplomatico: FieldDefinedSelection;
    public puatrNIT: FieldDefinedSelection;
    public puatrHijoDe: FieldDefinedSelection;
    public puatrRequiereEPS: FieldDefinedSelection;
    public puatrMenorSinIdentificar: FieldDefinedSelection;
    public puatrEsPasaporte: FieldDefinedSelection;
    public puatrVisibleValidadorUsu: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431942201344066Ser_1UIServ_1';
        this.className = ModelConstants.Tipoidentificacion.name;
        this.iuName = ModelConstants.Tipoidentificacion.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_TipoIdentificacion_svc_crear',
            'Crear tipo de identificación');

        // Create inbound argument components
        this.puatrCodigo = new Field(this.langMng);
        this.puatrDescripcion = new Field(this.langMng);
        this.puatrNombreCorto = new Field(this.langMng);
        this.puatrValidoContratante = new FieldDefinedSelection(this.langMng);
        this.puatrValidoTitular = new FieldDefinedSelection(this.langMng);
        this.puatrDiplomatico = new FieldDefinedSelection(this.langMng);
        this.puatrNIT = new FieldDefinedSelection(this.langMng);
        this.puatrHijoDe = new FieldDefinedSelection(this.langMng);
        this.puatrRequiereEPS = new FieldDefinedSelection(this.langMng);
        this.puatrMenorSinIdentificar = new FieldDefinedSelection(this.langMng);
        this.puatrEsPasaporte = new FieldDefinedSelection(this.langMng);
        this.puatrVisibleValidadorUsu = new FieldDefinedSelection(this.langMng);

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
            'cls_TipoIdentificacion_svc_crear_inArg_p_atrCodigo',
            'Código');
        this.puatrCodigo.mandatory = true;
        this.puatrCodigo.dataType = Field.dtInt;
        this.puatrCodigo.assignCSS();
        this.fields.push(this.puatrCodigo);

        this.puatrDescripcion.nameInRequest = 'p_atrdescripcion';
        this.puatrDescripcion.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_svc_crear_inArg_p_atrDescripcion',
            'Descripción');
        this.puatrDescripcion.mandatory = true;
        this.puatrDescripcion.dataType = Field.dtString;
        this.puatrDescripcion.maxLength = 150;
        this.puatrDescripcion.assignCSS();
        this.fields.push(this.puatrDescripcion);

        this.puatrNombreCorto.nameInRequest = 'p_atrnombrecorto';
        this.puatrNombreCorto.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_svc_crear_inArg_p_atrNombreCorto',
            'Nombre corto');
        this.puatrNombreCorto.mandatory = true;
        this.puatrNombreCorto.dataType = Field.dtString;
        this.puatrNombreCorto.maxLength = 20;
        this.puatrNombreCorto.assignCSS();
        this.fields.push(this.puatrNombreCorto);

        this.puatrValidoContratante.nameInRequest = 'p_atrvalidocontratante';
        this.puatrValidoContratante.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_svc_crear_inArg_p_atrValidoContratante',
            'Válido contratante');
        this.puatrValidoContratante.mandatory = true;
        this.puatrValidoContratante.dataType = Field.dtBool;
        this.puatrValidoContratante.options = DefinedSelections.DS_SINO;
        this.puatrValidoContratante.value = false;
        this.puatrValidoContratante.assignCSS();
        this.fields.push(this.puatrValidoContratante);

        this.puatrValidoTitular.nameInRequest = 'p_atrvalidotitular';
        this.puatrValidoTitular.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_svc_crear_inArg_p_atrValidoTitular',
            'Válido titular');
        this.puatrValidoTitular.mandatory = true;
        this.puatrValidoTitular.dataType = Field.dtBool;
        this.puatrValidoTitular.options = DefinedSelections.DS_SINO;
        this.puatrValidoTitular.value = false;
        this.puatrValidoTitular.assignCSS();
        this.fields.push(this.puatrValidoTitular);

        this.puatrDiplomatico.nameInRequest = 'p_atrdiplomatico';
        this.puatrDiplomatico.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_svc_crear_inArg_p_atrDiplomatico',
            'Diplomático');
        this.puatrDiplomatico.mandatory = true;
        this.puatrDiplomatico.dataType = Field.dtBool;
        this.puatrDiplomatico.options = DefinedSelections.DS_SINO;
        this.puatrDiplomatico.value = false;
        this.puatrDiplomatico.assignCSS();
        this.fields.push(this.puatrDiplomatico);

        this.puatrNIT.nameInRequest = 'p_atrnit';
        this.puatrNIT.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_svc_crear_inArg_p_atrNIT',
            'NIT');
        this.puatrNIT.mandatory = true;
        this.puatrNIT.dataType = Field.dtBool;
        this.puatrNIT.options = DefinedSelections.DS_SINO;
        this.puatrNIT.value = false;
        this.puatrNIT.assignCSS();
        this.fields.push(this.puatrNIT);

        this.puatrHijoDe.nameInRequest = 'p_atrhijode';
        this.puatrHijoDe.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_svc_crear_inArg_p_atrHijoDe',
            'Hijo de');
        this.puatrHijoDe.mandatory = true;
        this.puatrHijoDe.dataType = Field.dtBool;
        this.puatrHijoDe.options = DefinedSelections.DS_SINO;
        this.puatrHijoDe.value = false;
        this.puatrHijoDe.assignCSS();
        this.fields.push(this.puatrHijoDe);

        this.puatrRequiereEPS.nameInRequest = 'p_atrrequiereeps';
        this.puatrRequiereEPS.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_svc_crear_inArg_p_atrRequiereEPS',
            'Requiere EPS');
        this.puatrRequiereEPS.mandatory = true;
        this.puatrRequiereEPS.dataType = Field.dtBool;
        this.puatrRequiereEPS.options = DefinedSelections.DS_SINO;
        this.puatrRequiereEPS.assignCSS();
        this.fields.push(this.puatrRequiereEPS);

        this.puatrMenorSinIdentificar.nameInRequest = 'p_atrmenorsinidentificar';
        this.puatrMenorSinIdentificar.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_svc_crear_inArg_p_atrMenorSinIdentificar',
            'Menor sin identificar');
        this.puatrMenorSinIdentificar.mandatory = true;
        this.puatrMenorSinIdentificar.dataType = Field.dtBool;
        this.puatrMenorSinIdentificar.options = DefinedSelections.DS_SINO;
        this.puatrMenorSinIdentificar.assignCSS();
        this.fields.push(this.puatrMenorSinIdentificar);

        this.puatrEsPasaporte.nameInRequest = 'p_atrespasaporte';
        this.puatrEsPasaporte.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_svc_crear_inArg_p_atrEsPasaporte',
            'Es Pasaporte');
        this.puatrEsPasaporte.mandatory = true;
        this.puatrEsPasaporte.dataType = Field.dtBool;
        this.puatrEsPasaporte.options = DefinedSelections.DS_SINO;
        this.puatrEsPasaporte.assignCSS();
        this.fields.push(this.puatrEsPasaporte);

        this.puatrVisibleValidadorUsu.nameInRequest = 'p_atrvisiblevalidadorusu';
        this.puatrVisibleValidadorUsu.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_svc_crear_inArg_p_atrVisibleValidadorUsu',
            'Visible en validador de usuarios');
        this.puatrVisibleValidadorUsu.mandatory = true;
        this.puatrVisibleValidadorUsu.dataType = Field.dtBool;
        this.puatrVisibleValidadorUsu.options = DefinedSelections.DS_SINO;
        this.puatrVisibleValidadorUsu.assignCSS();
        this.fields.push(this.puatrVisibleValidadorUsu);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // p_atrRequiereEPS
            const defValpuatrRequiereEPS = new Promise<void>((resolveDefValue) => {
                this.puatrRequiereEPS.setValue(true);
                resolveDefValue();
            });
            promiseArr.push(defValpuatrRequiereEPS);

            // p_atrMenorSinIdentificar
            const defValpuatrMenorSinIdentificar = new Promise<void>((resolveDefValue) => {
                this.puatrMenorSinIdentificar.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuatrMenorSinIdentificar);

            // p_atrEsPasaporte
            const defValpuatrEsPasaporte = new Promise<void>((resolveDefValue) => {
                this.puatrEsPasaporte.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuatrEsPasaporte);

            // p_atrVisibleValidadorUsu
            const defValpuatrVisibleValidadorUsu = new Promise<void>((resolveDefValue) => {
                this.puatrVisibleValidadorUsu.setValue(true);
                resolveDefValue();
            });
            promiseArr.push(defValpuatrVisibleValidadorUsu);

            Promise.all(promiseArr).then((results: any[]) => {
                this.util.hideWaitDialog();
                this.changeDetectorRef.markForCheck();
                resolve();
            });
        });
    }
}
