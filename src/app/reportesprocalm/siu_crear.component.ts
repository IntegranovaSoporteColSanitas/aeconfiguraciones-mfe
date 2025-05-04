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
    selector: 'imes-reportesprocalm-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportesProcAlmSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puatrDescripcion: Field;
    public puatrNombreProc: Field;
    public puatrNombreFichero: Field;

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
        this.idXML = 'Clas_1547029184512775Ser_1UIServ_1';
        this.className = ModelConstants.Reportesprocalm.name;
        this.iuName = ModelConstants.Reportesprocalm.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_ReportesProcAlm_svc_crear',
            'Crear');

        // Create inbound argument components
        this.puatrDescripcion = new Field(this.langMng);
        this.puatrNombreProc = new Field(this.langMng);
        this.puatrNombreFichero = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puatrDescripcion.nameInRequest = 'p_atrdescripcion';
        this.puatrDescripcion.alias = this.langMng.translateText(
            'cls_ReportesProcAlm_svc_crear_inArg_p_atrDescripcion',
            'Descripción');
        this.puatrDescripcion.mandatory = true;
        this.puatrDescripcion.dataType = Field.dtString;
        this.puatrDescripcion.maxLength = 50;
        this.puatrDescripcion.assignCSS();
        this.fields.push(this.puatrDescripcion);

        this.puatrNombreProc.nameInRequest = 'p_atrnombreproc';
        this.puatrNombreProc.alias = this.langMng.translateText(
            'cls_ReportesProcAlm_svc_crear_inArg_p_atrNombreProc',
            'Nombre procedimiento');
        this.puatrNombreProc.mandatory = true;
        this.puatrNombreProc.dataType = Field.dtString;
        this.puatrNombreProc.maxLength = 200;
        this.puatrNombreProc.assignCSS();
        this.fields.push(this.puatrNombreProc);

        this.puatrNombreFichero.nameInRequest = 'p_atrnombrefichero';
        this.puatrNombreFichero.alias = this.langMng.translateText(
            'cls_ReportesProcAlm_svc_crear_inArg_p_atrNombreFichero',
            'Nombre fichero');
        this.puatrNombreFichero.mandatory = true;
        this.puatrNombreFichero.dataType = Field.dtString;
        this.puatrNombreFichero.maxLength = 200;
        this.puatrNombreFichero.assignCSS();
        this.fields.push(this.puatrNombreFichero);
    }
}
