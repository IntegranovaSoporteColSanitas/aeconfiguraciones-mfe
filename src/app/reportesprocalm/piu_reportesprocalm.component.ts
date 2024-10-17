import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
    selector: 'imes-reportesprocalm-piu-reportesprocalm',
    templateUrl: './piu_reportesprocalm.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportesProcAlmPIUuReportesProcAlmComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsdescripcion = 'Descripción';
    private readonly dsnombreproc = 'Nombre procedimiento';
    private readonly dsnombrefichero = 'Nombre fichero';

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
        public override langMng: LanguageMng, public stdFun: StandardFunctions,
        public override condNavMng: ConditionalNavigationMng) {
        super(appGlobalInfo, util, changeDetectorRef, langMng, condNavMng);
        this.idXML = 'Clas_1547029184512775UIPobCl_1';
        this.className = ModelConstants.Reportesprocalm.name;
        this.iuName = ModelConstants.Reportesprocalm.piuureportesprocalm;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_ReportesProcAlm_piu_PIU_ReportesProcAlm',
            'Reportes en base de datos');
        this.queryURL = '/api/ReportesProcAlmApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * It is the main component. Process the initial actions
     */
    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1547029184512775CjtoVis_2ICtjoVis_1';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_ReportesProcAlm_ds_DS_ReportesProcAlm_item_Clas_1547029184512775CjtoVis_2ICtjoVis_1',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1547029184512775CjtoVis_2ICtjoVis_3';
        dsItem.name = 'nombreproc';
        dsItem.field = 'nombreproc';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 200;
        dsItem.alias = this.langMng.translateText(
            'cls_ReportesProcAlm_ds_DS_ReportesProcAlm_item_Clas_1547029184512775CjtoVis_2ICtjoVis_3',
            this.dsnombreproc);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1547029184512775CjtoVis_2ICtjoVis_2';
        dsItem.name = 'nombrefichero';
        dsItem.field = 'nombrefichero';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 200;
        dsItem.alias = this.langMng.translateText(
            'cls_ReportesProcAlm_ds_DS_ReportesProcAlm_item_Clas_1547029184512775CjtoVis_2ICtjoVis_2',
            this.dsnombrefichero);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1547029184512775AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_ReportesProcAlm_act_A_ReportesProcAlm_item_Clas_1547029184512775AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Reportesprocalm.name;
        accItem.targetUI = ModelConstants.Reportesprocalm.siuucrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1547029184512775AccOfer_1ElemAcc_5';
        accItem.alias = this.langMng.translateText(
            'cls_ReportesProcAlm_act_A_ReportesProcAlm_item_Clas_1547029184512775AccOfer_1ElemAcc_5',
            'Detalles');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Reportesprocalm.name;
        accItem.targetUI = ModelConstants.Reportesprocalm.mdiuureportesprocalm;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1547029184512775AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_ReportesProcAlm_act_A_ReportesProcAlm_item_Clas_1547029184512775AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Reportesprocalm.name;
        accItem.targetUI = ModelConstants.Reportesprocalm.siuumodificar;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1547029184512775AccOfer_1ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_ReportesProcAlm_act_A_ReportesProcAlm_item_Clas_1547029184512775AccOfer_1ElemAcc_4',
            'Generar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Reportesprocalm.name;
        accItem.targetUI = ModelConstants.Reportesprocalm.siuuevgenerar;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 4;
        accItem.idXML = 'Clas_1547029184512775AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_ReportesProcAlm_act_A_ReportesProcAlm_item_Clas_1547029184512775AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Reportesprocalm.name;
        accItem.targetUI = ModelConstants.Reportesprocalm.siuueliminar;

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
