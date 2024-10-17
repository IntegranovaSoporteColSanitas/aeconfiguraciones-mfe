import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { ReportesProcAlmIIUuReportesProcAlmComponent } from './iiu_reportesprocalm.component';
import { ParamReportePIUuDuParametrosComponent } from '../paramreporte/piu_d_parametros.component';
import { FuncionarioPIUuDuFuncionariosReporteComponent } from '../funcionario/piu_d_funcionariosreporte.component';


@Component({
    selector: 'imes-reportesprocalm-mdiu-reportesprocalm',
    templateUrl: './mdiu_reportesprocalm.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportesProcAlmMDIUuReportesProcAlmComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: ReportesProcAlmIIUuReportesProcAlmComponent;

    /** Details */
    /** Detail component 0 */
    public d0: ParamReportePIUuDuParametrosComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;
    /** Detail component 1 */
    public d1: FuncionarioPIUuDuFuncionariosReporteComponent;
    /** Detail 1 visible or not */
    public d1Visible = true;

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param stdFun Standard functions
     * @param condNavMng Conditional manager
     */
    constructor(public override appGlobalInfo: AppGlobalInfo, public override util: Util,
                public override changeDetectorRef: ChangeDetectorRef,
                public langMng: LanguageMng, public stdFun: StandardFunctions,
                public condNavMng: ConditionalNavigationMng) {
        super(appGlobalInfo, util, changeDetectorRef);
        this.idXML = 'Clas_1547029184512775UIMaDet_1';
        this.className = ModelConstants.Reportesprocalm.name;
        this.iuName = ModelConstants.Reportesprocalm.mdiuureportesprocalm;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_ReportesProcAlm_mdiu_MDIU_ReportesProcAlm',
            'Info Reporte');
        // Create the details and assign the master detail container
        this.master = new ReportesProcAlmIIUuReportesProcAlmComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1547029184512775UIMaDet_1Det_1',
            ['Funcionario', 'Admin', 'SuperAdmin']);
        this.d0 = new ParamReportePIUuDuParametrosComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.d0.masterDetailContainer = this;
        if (this.d0Visible) {
            this.details.push(this.d0);
        }
        this.d1Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1547029184512775UIMaDet_1Det_2',
            ['Funcionario', 'Admin', 'SuperAdmin']);
        this.d1 = new FuncionarioPIUuDuFuncionariosReporteComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.d1.masterDetailContainer = this;
        if (this.d1Visible) {
            this.details.push(this.d1);
        }
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the master and details components
     */
    public override initializeComponents(): void {
        this.master.iuId = this.iuId + 'M';
        this.master.initializeComponents();
        // Subscribe to the selection changed event
        this.master.selectionChanged.subscribe(data => this.processMasterSelectionChanged());
        // Details
        if (this.d0Visible && this.d0 != null) {
            this.d0.order = 0;
            this.d0.iuId = this.iuId + 'D0';
            this.d0.initializeComponents();
            this.d0.title = this.langMng.translateText(
                'cls_ReportesProcAlm_mdiu_MDIU_ReportesProcAlm_detail_Clas_1547029184512775UIMaDet_1Det_1',
                'Parámetros');
            this.d0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('ParamReporte',
                this.master.getContext(), null, 'Reporte', null, 'ReportesProcAlm', ''));
        }
        if (this.d1Visible && this.d1 != null) {
            this.d1.order = 1;
            this.d1.iuId = this.iuId + 'D1';
            this.d1.initializeComponents();
            this.d1.title = this.langMng.translateText(
                'cls_ReportesProcAlm_mdiu_MDIU_ReportesProcAlm_detail_Clas_1547029184512775UIMaDet_1Det_2',
                'Usuarios autorizados');
            this.d1.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Funcionario',
                this.master.getContext(), null, 'Reportes', null, 'ReportesProcAlm', ''));
        }
        super.initializeComponents();
    }

}
