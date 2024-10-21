import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field, FieldDefinedSelection } from '../common/baseIUElements';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
    selector: 'imes-logllamadasae-iiu-logllamadasae',
    templateUrl: './iiu_logllamadasae.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogLlamadasAEIIUuLogLlamadasAEComponent extends AbstractIIU implements OnInit {

    /** Display Set elements */
    public dseID: Field;
    public dseTipoServicio: FieldDefinedSelection;
    public dseSolicitud: Field;
    public dseServicio: FieldDefinedSelection;
    public dseCapacidad: Field;
    public dseFechaHora: Field;
    public dseTextoError: Field;
    public dseTiempoEjecucion: Field;
    public dseDatosRecibidos: Field;
    public dseDatosEnviados: Field;

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
        this.idXML = 'Clas_1641826746368185UIInst_1';
        this.className = ModelConstants.Logllamadasae.name;
        this.iuName = ModelConstants.Logllamadasae.iiuulogllamadasae;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_LogLlamadasAE_iiu_IIU_LogLlamadasAE',
            'Llamada a AE');
        this.queryURL = '/api/LogLlamadasAEApi/GetPopulationDynamic';

        this.dseID = new Field(this.langMng);
        this.dseTipoServicio = new FieldDefinedSelection(this.langMng);
        this.dseSolicitud = new Field(this.langMng);
        this.dseServicio = new FieldDefinedSelection(this.langMng);
        this.dseCapacidad = new Field(this.langMng);
        this.dseFechaHora = new Field(this.langMng);
        this.dseTextoError = new Field(this.langMng);
        this.dseTiempoEjecucion = new Field(this.langMng);
        this.dseDatosRecibidos = new Field(this.langMng);
        this.dseDatosEnviados = new Field(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseID.nameInRequest = 'id';
        this.dseID.alias = this.langMng.translateText(
            'cls_LogLlamadasAE_ds_DS_LogLlamadasAE_IIU_item_Clas_1641826746368185CjtoVis_2ICtjoVis_1',
            'Id.');
        this.dseID.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1641826746368185CjtoVis_2ICtjoVis_1', ['Admin', 'SuperAdmin']);
        this.dseID.enabled = false;
        this.dseID.mandatory = false;
        this.dseID.dataType = Field.dtAuto;
        this.dseID.assignCSS();
        this.fields.push(this.dseID);

        this.dseTipoServicio.nameInRequest = 'tiposervicio';
        this.dseTipoServicio.alias = this.langMng.translateText(
            'cls_LogLlamadasAE_ds_DS_LogLlamadasAE_IIU_item_Clas_1641826746368185CjtoVis_2ICtjoVis_2',
            'Tipo Servicio');
        this.dseTipoServicio.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1641826746368185CjtoVis_2ICtjoVis_2', ['Admin', 'SuperAdmin']);
        this.dseTipoServicio.enabled = false;
        this.dseTipoServicio.mandatory = false;
        this.dseTipoServicio.dataType = Field.dtString;
        this.dseTipoServicio.maxLength = 20;
        this.dseTipoServicio.options = DefinedSelections.DS_TIPOSSERVICIOSBH;
        this.dseTipoServicio.assignCSS();
        this.fields.push(this.dseTipoServicio);

        this.dseSolicitud.nameInRequest = 'solicitud';
        this.dseSolicitud.alias = this.langMng.translateText(
            'cls_LogLlamadasAE_ds_DS_LogLlamadasAE_IIU_item_Clas_1641826746368185CjtoVis_2ICtjoVis_3',
            'No. Solicitud');
        this.dseSolicitud.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1641826746368185CjtoVis_2ICtjoVis_3', ['Admin', 'SuperAdmin']);
        this.dseSolicitud.enabled = false;
        this.dseSolicitud.mandatory = false;
        this.dseSolicitud.dataType = Field.dtString;
        this.dseSolicitud.maxLength = 50;
        this.dseSolicitud.assignCSS();
        this.fields.push(this.dseSolicitud);

        this.dseServicio.nameInRequest = 'servicio';
        this.dseServicio.alias = this.langMng.translateText(
            'cls_LogLlamadasAE_ds_DS_LogLlamadasAE_IIU_item_Clas_1641826746368185CjtoVis_2ICtjoVis_4',
            'Servicio');
        this.dseServicio.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1641826746368185CjtoVis_2ICtjoVis_4', ['Admin', 'SuperAdmin']);
        this.dseServicio.enabled = false;
        this.dseServicio.mandatory = false;
        this.dseServicio.dataType = Field.dtString;
        this.dseServicio.maxLength = 100;
        this.dseServicio.options = DefinedSelections.DS_SERVICIOSAE;
        this.dseServicio.assignCSS();
        this.fields.push(this.dseServicio);

        this.dseCapacidad.nameInRequest = 'capacidad';
        this.dseCapacidad.alias = this.langMng.translateText(
            'cls_LogLlamadasAE_ds_DS_LogLlamadasAE_IIU_item_Clas_1641826746368185CjtoVis_2ICtjoVis_5',
            'Capacidad');
        this.dseCapacidad.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1641826746368185CjtoVis_2ICtjoVis_5', ['Admin', 'SuperAdmin']);
        this.dseCapacidad.enabled = false;
        this.dseCapacidad.mandatory = false;
        this.dseCapacidad.dataType = Field.dtString;
        this.dseCapacidad.maxLength = 100;
        this.dseCapacidad.assignCSS();
        this.fields.push(this.dseCapacidad);

        this.dseFechaHora.nameInRequest = 'fechahora';
        this.dseFechaHora.alias = this.langMng.translateText(
            'cls_LogLlamadasAE_ds_DS_LogLlamadasAE_IIU_item_Clas_1641826746368185CjtoVis_2ICtjoVis_6',
            'Fecha');
        this.dseFechaHora.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1641826746368185CjtoVis_2ICtjoVis_6', ['Admin', 'SuperAdmin']);
        this.dseFechaHora.enabled = false;
        this.dseFechaHora.mandatory = false;
        this.dseFechaHora.dataType = Field.dtDatetime;
        this.dseFechaHora.assignCSS();
        this.fields.push(this.dseFechaHora);

        this.dseTextoError.nameInRequest = 'textoerror';
        this.dseTextoError.alias = this.langMng.translateText(
            'cls_LogLlamadasAE_ds_DS_LogLlamadasAE_IIU_item_Clas_1641826746368185CjtoVis_2ICtjoVis_7',
            'Texto Error');
        this.dseTextoError.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1641826746368185CjtoVis_2ICtjoVis_7', ['Admin', 'SuperAdmin']);
        this.dseTextoError.enabled = false;
        this.dseTextoError.mandatory = false;
        this.dseTextoError.dataType = Field.dtText;
        this.dseTextoError.assignCSS();
        this.fields.push(this.dseTextoError);

        this.dseTiempoEjecucion.nameInRequest = 'tiempoejecucion';
        this.dseTiempoEjecucion.alias = this.langMng.translateText(
            'cls_LogLlamadasAE_ds_DS_LogLlamadasAE_IIU_item_Clas_1641826746368185CjtoVis_2ICtjoVis_8',
            'Tiempo Ejecución');
        this.dseTiempoEjecucion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1641826746368185CjtoVis_2ICtjoVis_8', ['Admin', 'SuperAdmin']);
        this.dseTiempoEjecucion.enabled = false;
        this.dseTiempoEjecucion.mandatory = false;
        this.dseTiempoEjecucion.dataType = Field.dtReal;
        this.dseTiempoEjecucion.assignCSS();
        this.fields.push(this.dseTiempoEjecucion);

        this.dseDatosRecibidos.nameInRequest = 'datosrecibidos';
        this.dseDatosRecibidos.alias = this.langMng.translateText(
            'cls_LogLlamadasAE_ds_DS_LogLlamadasAE_IIU_item_Clas_1641826746368185CjtoVis_2ICtjoVis_9',
            'Datos Recibidos');
        this.dseDatosRecibidos.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1641826746368185CjtoVis_2ICtjoVis_9', ['Admin', 'SuperAdmin']);
        this.dseDatosRecibidos.enabled = false;
        this.dseDatosRecibidos.mandatory = false;
        this.dseDatosRecibidos.dataType = Field.dtText;
        this.dseDatosRecibidos.assignCSS();
        this.fields.push(this.dseDatosRecibidos);

        this.dseDatosEnviados.nameInRequest = 'datosenviados';
        this.dseDatosEnviados.alias = this.langMng.translateText(
            'cls_LogLlamadasAE_ds_DS_LogLlamadasAE_IIU_item_Clas_1641826746368185CjtoVis_2ICtjoVis_10',
            'Datos Enviados');
        this.dseDatosEnviados.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1641826746368185CjtoVis_2ICtjoVis_10', ['Admin', 'SuperAdmin']);
        this.dseDatosEnviados.enabled = false;
        this.dseDatosEnviados.mandatory = false;
        this.dseDatosEnviados.dataType = Field.dtText;
        this.dseDatosEnviados.assignCSS();
        this.fields.push(this.dseDatosEnviados);

    }
}
