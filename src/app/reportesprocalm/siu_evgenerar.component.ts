import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { ParamReporteServices } from '../paramreporte/paramreporte.services';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

@Component({
    selector: 'imes-reportesprocalm-siu-evgenerar',
    templateUrl: './siu_evgenerar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportesProcAlmSIUuevGenerarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisReportesProcAlm: FieldOVPreload;
    public pValorArgumentos: Field;

    public listaParametros: Field[] = [];

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
        this.idXML = 'Clas_1547029184512775Ser_4UIServ_1';
        this.className = ModelConstants.Reportesprocalm.name;
        this.iuName = ModelConstants.Reportesprocalm.siuuevgenerar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'evGenerar';
        this.title = this.langMng.translateText('cls_ReportesProcAlm_svc_evGenerar',
            'Generar');

        // Create inbound argument components
        this.puthisReportesProcAlm = new FieldOVPreload(this.langMng);
        this.pValorArgumentos = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisReportesProcAlm.nameInRequest = 'p_thisreportesprocalm';
        this.puthisReportesProcAlm.alias = this.langMng.translateText(
            'cls_ReportesProcAlm_svc_evGenerar_inArg_p_thisReportesProcAlm',
            'Info Reporte');
        this.puthisReportesProcAlm.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisReportesProcAlm.mandatory = true;
        this.puthisReportesProcAlm.dataType = ModelConstants.Reportesprocalm.name;
        this.puthisReportesProcAlm.maxLength = 50;
        this.puthisReportesProcAlm.assignCSS();
        this.fields.push(this.puthisReportesProcAlm);

        this.pValorArgumentos.nameInRequest = 'pvalorargumentos';
        this.pValorArgumentos.alias = this.langMng.translateText(
            'cls_ReportesProcAlm_svc_evGenerar_inArg_pValorArgumentos',
            'Valor argumentos');
        this.pValorArgumentos.mandatory = false;
        this.pValorArgumentos.dataType = Field.dtText;
        this.pValorArgumentos.assignCSS();
        this.fields.push(this.pValorArgumentos);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['ReportesProcAlm'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisReportesProcAlm.setValue(this.context.exchangeInfo.selectedOids);
            this.puthisReportesProcAlm.enabled = false;
        }
        this.procesarCambioReporte();
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // puthisReportesProcAlm
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('ReportesProcAlm', 'IC_ReportesProcAlm', [], null, '').then(
            (response: any) => {
                if (response && response.results) {
                    this.puthisReportesProcAlm.loadPreload(response.results);
                } else {
                    this.puthisReportesProcAlm.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.notifyAnswerFromToTheBackEnd();
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.processErrorInLoadPreload(response.resultDescription);
            }
        );
        this.numberOfPendingPreload++;
    }

    public reporteSeleccionado(): void {

        this.procesarCambioReporte();
    }


    private procesarCambioReporte(): void {
        
        // Vaciamos la lista de parámetros
        this.listaParametros = [];
        // Si tenemos un reporte seleccionado buscamos los parámetros del mismo
        const instancias = this.puthisReportesProcAlm.getSelectedInstances();
        if (instancias && instancias.length === 1) {
            this.cargarParametros(instancias[0].oid);
        }
        this.changeDetectorRef.markForCheck();
    }

    public cargarParametros(oidReporte: any): void {

        this.util.showWaitDialog();

        // Buscamos los parámetros del reporte
        const paramSrv: ParamReporteServices = new ParamReporteServices(this.appGlobalInfo, this.util);

        paramSrv.queryByRelatedReporte(oidReporte, 'esnumerico,titulo', 'OC_Orden', 0, 0).then((res: QueryResponse) => {
            for(const param of res.results) {

                const field = new Field(this.langMng);
                field.dataType = Field.dtString;
                if (param.esnumerico) {
                    field.dataType = Field.dtInt;
                }
                field.alias = param.titulo;

                this.listaParametros.push(field);
            }
            this.util.hideWaitDialog();
            this.changeDetectorRef.markForCheck();
        }).catch( (err: ErrorInformation) => {
            this.util.addErrorMessage(err);
            this.util.hideWaitDialog();
            this.changeDetectorRef.markForCheck();
        });
    }

    public override saveChanges(): void {

        let valorParametros = '';
        let ejecutarServicio = true;
        // Realizamos la comprobaciones
        for (const field of this.listaParametros) {
            const valor = field.getSingleValue() as string;
            if (!valor) {
                this.util.addErrorMessage('Parametro ' + field.alias + ' es obligatorio ');
                ejecutarServicio = false;
                continue;
            }
            if (field.dataType === Field.dtInt && !/^[0-9]$/.test(valor)){
                this.util.addErrorMessage('El parámetro ' + field.alias + ' tan solo admite dígitos');
                ejecutarServicio = false;
            } else if(!/^[0-9A-Z\/ ]*$/.test(valor)){
                this.util.addErrorMessage('El parámetro ' + field.alias + ' tan solo admite dígitos, letras mayúsculas y la barra /');
                ejecutarServicio = false;
            }
            if (valorParametros) {
                valorParametros += ';';
            }
            valorParametros += valor;
        }

        if (ejecutarServicio) {
            this.pValorArgumentos.setValue(valorParametros);
            super.saveChanges();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the service answer to show the outbound argument scenario
     */
    public override processOutboundArguments(request: any, response: any): boolean {
        this.util.navigateOutboundArgumentsScenario(this.className, 'siu_evgenerar_out',
            this.context.exchangeInfo ? this.context.exchangeInfo.previous : null,
            this.context.exchangeInfo ? this.context.exchangeInfo.comeBackContext : null, request, response);
        return true;
    }
}
