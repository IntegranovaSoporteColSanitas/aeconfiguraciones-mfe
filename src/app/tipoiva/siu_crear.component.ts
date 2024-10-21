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
@Component({
    selector: 'imes-tipoiva-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipoIVASIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puagrProductoT: FieldOVPreload;
    public puagrPlanT: FieldOVPreload;
    public puatrDescripcion: Field;
    public puatrPorcentaje: Field;
    public puatrFechaInicio: Field;
    public puatrFechaFin: Field;

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
        this.idXML = 'Clas_1431882432512691Ser_1UIServ_1';
        this.className = ModelConstants.Tipoiva.name;
        this.iuName = ModelConstants.Tipoiva.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_TipoIVA_svc_crear',
            'Crear tipo de I.V.A');

        // Create inbound argument components
        this.puagrProductoT = new FieldOVPreload(this.langMng);
        this.puagrPlanT = new FieldOVPreload(this.langMng);
        this.puatrDescripcion = new Field(this.langMng);
        this.puatrPorcentaje = new Field(this.langMng);
        this.puatrFechaInicio = new Field(this.langMng);
        this.puatrFechaFin = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puagrProductoT.nameInRequest = 'p_agrproductot';
        this.puagrProductoT.alias = this.langMng.translateText(
            'cls_TipoIVA_svc_crear_inArg_p_agrProductoT',
            'Producto');
        this.puagrProductoT.mandatory = true;
        this.puagrProductoT.dataType = ModelConstants.Productos.name;
        this.puagrProductoT.maxLength = 100;
        this.puagrProductoT.assignCSS();
        this.fields.push(this.puagrProductoT);

        this.puagrPlanT.nameInRequest = 'p_agrplant';
        this.puagrPlanT.alias = this.langMng.translateText(
            'cls_TipoIVA_svc_crear_inArg_p_agrPlanT',
            'Plan');
        this.puagrPlanT.mandatory = true;
        this.puagrPlanT.dataType = ModelConstants.Planes.name;
        this.puagrPlanT.maxLength = 150;
        this.puagrPlanT.assignCSS();
        this.fields.push(this.puagrPlanT);

        this.puatrDescripcion.nameInRequest = 'p_atrdescripcion';
        this.puatrDescripcion.alias = this.langMng.translateText(
            'cls_TipoIVA_svc_crear_inArg_p_atrDescripcion',
            'Descripción');
        this.puatrDescripcion.mandatory = true;
        this.puatrDescripcion.dataType = Field.dtString;
        this.puatrDescripcion.maxLength = 150;
        this.puatrDescripcion.assignCSS();
        this.fields.push(this.puatrDescripcion);

        this.puatrPorcentaje.nameInRequest = 'p_atrporcentaje';
        this.puatrPorcentaje.alias = this.langMng.translateText(
            'cls_TipoIVA_svc_crear_inArg_p_atrPorcentaje',
            'Porcentaje');
        this.puatrPorcentaje.mandatory = true;
        this.puatrPorcentaje.dataType = Field.dtReal;
        this.puatrPorcentaje.assignCSS();
        this.fields.push(this.puatrPorcentaje);

        this.puatrFechaInicio.nameInRequest = 'p_atrfechainicio';
        this.puatrFechaInicio.alias = this.langMng.translateText(
            'cls_TipoIVA_svc_crear_inArg_p_atrFechaInicio',
            'Fecha Inicio');
        this.puatrFechaInicio.mandatory = true;
        this.puatrFechaInicio.dataType = Field.dtDate;
        this.puatrFechaInicio.assignCSS();
        this.fields.push(this.puatrFechaInicio);

        this.puatrFechaFin.nameInRequest = 'p_atrfechafin';
        this.puatrFechaFin.alias = this.langMng.translateText(
            'cls_TipoIVA_svc_crear_inArg_p_atrFechaFin',
            'Fecha Fin');
        this.puatrFechaFin.mandatory = true;
        this.puatrFechaFin.dataType = Field.dtDate;
        this.puatrFechaFin.assignCSS();
        this.fields.push(this.puatrFechaFin);
    }

    /**
     * Initialize arguments from context that identify a Role
     */
    public override initializeFromCtxRelated(): void {
        let lastRole = '';
        let lastRoleOid = null;
        if (this.context.exchangeInfo) {
            lastRole = this.context.exchangeInfo.getLastNavigationRole();
            lastRoleOid = this.context.exchangeInfo.getLastNavigationRoleOid();
        }

        if (lastRole && lastRoleOid) {
            if (lastRole === 'ProductoT') {
                this.puagrProductoT.setValue(lastRoleOid);
                this.puagrProductoT.enabled = false;
                this.loadPreloadpuagrplant();
            }
            if (lastRole === 'PlanT') {
                this.puagrPlanT.setValue(lastRoleOid);
                this.puagrPlanT.enabled = false;
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // puagrProductoT
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Productos', 'IC_Producto', [], null, 'OC_Producto').then(
            (response: any) => {
                if (response && response.results) {
                    this.puagrProductoT.loadPreload(response.results);
                } else {
                    this.puagrProductoT.loadPreload([]);
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

    /**
     * Search the preload values of field p_agrPlanT
     */
    private loadPreloadpuagrplant(): void {

        if (this.puagrProductoT.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('TipoIVA_crear_p_agrPlanT_NavFilter0');
            this.util.searchPreload('Planes', 'IC_Plan', navFilters, this.getNavigationFilterVariables(), 'OC_Plan').then(
                (response: any) => {
                    if (response && response.results) {
                        this.puagrPlanT.loadPreload(response.results);
                    } else {
                        this.puagrPlanT.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.puagrPlanT.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.puagrPlanT.cleanPreload();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * Manages the change for the p_agrProductoT argument
     */
    public onpuagrproductotChange(): void {
        this.loadPreloadpuagrplant();

        this.executePendingDependencyRules();
    }
}
