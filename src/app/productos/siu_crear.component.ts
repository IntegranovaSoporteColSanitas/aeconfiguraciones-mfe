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
    selector: 'imes-productos-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductosSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puatrProducto: Field;
    public puatrDescripcion: Field;
    public puatrCodAnexoMat: Field;
    public puatrCodAnexoNeo: Field;
    public puatrNIT: Field;
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
        this.idXML = 'Clas_1431687397376823Ser_1UIServ_1';
        this.className = ModelConstants.Productos.name;
        this.iuName = ModelConstants.Productos.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_Productos_svc_crear',
            'Crear producto');

        // Create inbound argument components
        this.puatrProducto = new Field(this.langMng);
        this.puatrDescripcion = new Field(this.langMng);
        this.puatrCodAnexoMat = new Field(this.langMng);
        this.puatrCodAnexoNeo = new Field(this.langMng);
        this.puatrNIT = new Field(this.langMng);
        this.puatrCodigoLegal = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puatrProducto.nameInRequest = 'p_atrproducto';
        this.puatrProducto.alias = this.langMng.translateText(
            'cls_Productos_svc_crear_inArg_p_atrProducto',
            'Producto');
        this.puatrProducto.mandatory = true;
        this.puatrProducto.dataType = Field.dtInt;
        this.puatrProducto.assignCSS();
        this.fields.push(this.puatrProducto);

        this.puatrDescripcion.nameInRequest = 'p_atrdescripcion';
        this.puatrDescripcion.alias = this.langMng.translateText(
            'cls_Productos_svc_crear_inArg_p_atrDescripcion',
            'Descripción');
        this.puatrDescripcion.mandatory = true;
        this.puatrDescripcion.dataType = Field.dtString;
        this.puatrDescripcion.maxLength = 100;
        this.puatrDescripcion.assignCSS();
        this.fields.push(this.puatrDescripcion);

        this.puatrCodAnexoMat.nameInRequest = 'p_atrcodanexomat';
        this.puatrCodAnexoMat.alias = this.langMng.translateText(
            'cls_Productos_svc_crear_inArg_p_atrCodAnexoMat',
            'Anexo maternidad');
        this.puatrCodAnexoMat.mandatory = false;
        this.puatrCodAnexoMat.dataType = Field.dtInt;
        this.puatrCodAnexoMat.assignCSS();
        this.fields.push(this.puatrCodAnexoMat);

        this.puatrCodAnexoNeo.nameInRequest = 'p_atrcodanexoneo';
        this.puatrCodAnexoNeo.alias = this.langMng.translateText(
            'cls_Productos_svc_crear_inArg_p_atrCodAnexoNeo',
            'Anexo neonatal');
        this.puatrCodAnexoNeo.mandatory = false;
        this.puatrCodAnexoNeo.dataType = Field.dtInt;
        this.puatrCodAnexoNeo.assignCSS();
        this.fields.push(this.puatrCodAnexoNeo);

        this.puatrNIT.nameInRequest = 'p_atrnit';
        this.puatrNIT.alias = this.langMng.translateText(
            'cls_Productos_svc_crear_inArg_p_atrNIT',
            'NIT');
        this.puatrNIT.mandatory = false;
        this.puatrNIT.dataType = Field.dtString;
        this.puatrNIT.maxLength = 60;
        this.puatrNIT.assignCSS();
        this.fields.push(this.puatrNIT);

        this.puatrCodigoLegal.nameInRequest = 'p_atrcodigolegal';
        this.puatrCodigoLegal.alias = this.langMng.translateText(
            'cls_Productos_svc_crear_inArg_p_atrCodigoLegal',
            'Código Legal');
        this.puatrCodigoLegal.mandatory = true;
        this.puatrCodigoLegal.dataType = Field.dtString;
        this.puatrCodigoLegal.maxLength = 10;
        this.puatrCodigoLegal.assignCSS();
        this.fields.push(this.puatrCodigoLegal);
    }
}
