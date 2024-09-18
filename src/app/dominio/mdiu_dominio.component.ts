import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { DominioIIUuDominioComponent } from './iiu_dominio.component';
import { ReportesDominioPIUuReportesDominioComponent } from '../reportesdominio/piu_reportesdominio.component';
import { ParentescoDomPIUuParentescoDomComponent } from '../parentescodom/piu_parentescodom.component';
import { PeriodicidadPIUuPeriodicidadDetDominioComponent } from '../periodicidad/piu_periodicidaddetdominio.component';
import { FormaPagoPIUuFormaPagoDetDominioComponent } from '../formapago/piu_formapagodetdominio.component';
import { DominioIIUuDominioFirmaComponent } from './iiu_dominiofirma.component';
import { RolPIUuRolDetDominioComponent } from '../rol/piu_roldetdominio.component';
import { ProrrateoPIUuProrrateoComponent } from '../prorrateo/piu_prorrateo.component';
import { PlantillaEmailPIUuPlantillasDominioComponent } from '../plantillaemail/piu_plantillasdominio.component';
import { NovedadPIUuNovedaduDuDominioComponent } from '../novedad/piu_novedad_d_dominio.component';
import { DominioIIUuDominiouDuSolNovedadComponent } from './iiu_dominio_d_solnovedad.component';


@Component({
    selector: 'imes-dominio-mdiu-dominio',
    templateUrl: './mdiu_dominio.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DominioMDIUuDominioComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: DominioIIUuDominioComponent;

    /** Details */
    /** Detail component 0 */
    public d0: ReportesDominioPIUuReportesDominioComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;
    /** Detail component 1 */
    public d1: ParentescoDomPIUuParentescoDomComponent;
    /** Detail 1 visible or not */
    public d1Visible = true;
    /** Detail component 2 */
    public d2: PeriodicidadPIUuPeriodicidadDetDominioComponent;
    /** Detail 2 visible or not */
    public d2Visible = true;
    /** Detail component 3 */
    public d3: FormaPagoPIUuFormaPagoDetDominioComponent;
    /** Detail 3 visible or not */
    public d3Visible = true;
    /** Detail component 4 */
    public d4: DominioIIUuDominioFirmaComponent;
    /** Detail 4 visible or not */
    public d4Visible = true;
    /** Detail component 5 */
    public d5: RolPIUuRolDetDominioComponent;
    /** Detail 5 visible or not */
    public d5Visible = true;
    /** Detail component 6 */
    public d6: ProrrateoPIUuProrrateoComponent;
    /** Detail 6 visible or not */
    public d6Visible = true;
    /** Detail component 7 */
    public d7: PlantillaEmailPIUuPlantillasDominioComponent;
    /** Detail 7 visible or not */
    public d7Visible = true;
    /** Detail component 8 */
    public d8: NovedadPIUuNovedaduDuDominioComponent;
    /** Detail 8 visible or not */
    public d8Visible = true;
    /** Detail component 9 */
    public d9: DominioIIUuDominiouDuSolNovedadComponent;
    /** Detail 9 visible or not */
    public d9Visible = true;

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
        this.idXML = 'Clas_1431701422080423UIMaDet_1';
        this.className = ModelConstants.Dominio.name;
        this.iuName = ModelConstants.Dominio.mdiuudominio;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Dominio_mdiu_MDIU_Dominio',
            'Configuración dominio');
        // Create the details and assign the master detail container
        this.master = new DominioIIUuDominioComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431701422080423UIMaDet_1Det_18',
            ['SuperAdmin']);
        this.d0 = new ReportesDominioPIUuReportesDominioComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.d0.masterDetailContainer = this;
        if (this.d0Visible) {
            this.details.push(this.d0);
        }
        this.d1Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431701422080423UIMaDet_1Det_5',
            ['Admin', 'SuperAdmin']);
        this.d1 = new ParentescoDomPIUuParentescoDomComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.d1.masterDetailContainer = this;
        if (this.d1Visible) {
            this.details.push(this.d1);
        }
        this.d2Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431701422080423UIMaDet_1Det_3',
            ['Admin', 'SuperAdmin']);
        this.d2 = new PeriodicidadPIUuPeriodicidadDetDominioComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.d2.masterDetailContainer = this;
        if (this.d2Visible) {
            this.details.push(this.d2);
        }
        this.d3Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431701422080423UIMaDet_1Det_7',
            ['Admin', 'SuperAdmin']);
        this.d3 = new FormaPagoPIUuFormaPagoDetDominioComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.d3.masterDetailContainer = this;
        if (this.d3Visible) {
            this.details.push(this.d3);
        }
        this.d4Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431701422080423UIMaDet_1Det_6',
            ['Admin', 'SuperAdmin']);
        this.d4 = new DominioIIUuDominioFirmaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.d4.masterDetailContainer = this;
        if (this.d4Visible) {
            this.details.push(this.d4);
        }
        this.d5Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431701422080423UIMaDet_1Det_4',
            ['Admin', 'SuperAdmin']);
        this.d5 = new RolPIUuRolDetDominioComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.d5.masterDetailContainer = this;
        if (this.d5Visible) {
            this.details.push(this.d5);
        }
        this.d6Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431701422080423UIMaDet_1Det_8',
            ['Admin', 'SuperAdmin']);
        this.d6 = new ProrrateoPIUuProrrateoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.d6.masterDetailContainer = this;
        if (this.d6Visible) {
            this.details.push(this.d6);
        }
        this.d7Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431701422080423UIMaDet_1Det_9',
            ['Admin', 'SuperAdmin']);
        this.d7 = new PlantillaEmailPIUuPlantillasDominioComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.d7.masterDetailContainer = this;
        if (this.d7Visible) {
            this.details.push(this.d7);
        }
        this.d8Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431701422080423UIMaDet_1Det_10',
            ['Admin', 'SuperAdmin']);
        this.d8 = new NovedadPIUuNovedaduDuDominioComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.d8.masterDetailContainer = this;
        if (this.d8Visible) {
            this.details.push(this.d8);
        }
        this.d9Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431701422080423UIMaDet_1Det_11',
            ['Admin', 'SuperAdmin']);
        this.d9 = new DominioIIUuDominiouDuSolNovedadComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.d9.masterDetailContainer = this;
        if (this.d9Visible) {
            this.details.push(this.d9);
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
                'cls_Dominio_mdiu_MDIU_Dominio_detail_Clas_1431701422080423UIMaDet_1Det_18',
                'Reportes');
            this.d0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('ReportesDominio',
                this.master.getContext(), null, 'Dominio', null, 'Dominio', ''));
        }
        if (this.d1Visible && this.d1 != null) {
            this.d1.order = 1;
            this.d1.iuId = this.iuId + 'D1';
            this.d1.initializeComponents();
            this.d1.title = this.langMng.translateText(
                'cls_Dominio_mdiu_MDIU_Dominio_detail_Clas_1431701422080423UIMaDet_1Det_5',
                'Parentescos');
            this.d1.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('ParentescoDom',
                this.master.getContext(), null, 'Dominio', null, 'Dominio', ''));
        }
        if (this.d2Visible && this.d2 != null) {
            this.d2.order = 2;
            this.d2.iuId = this.iuId + 'D2';
            this.d2.initializeComponents();
            this.d2.title = this.langMng.translateText(
                'cls_Dominio_mdiu_MDIU_Dominio_detail_Clas_1431701422080423UIMaDet_1Det_3',
                'Periodicidades');
            this.d2.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Periodicidad',
                this.master.getContext(), null, 'Dominios', null, 'Dominio', ''));
        }
        if (this.d3Visible && this.d3 != null) {
            this.d3.order = 3;
            this.d3.iuId = this.iuId + 'D3';
            this.d3.initializeComponents();
            this.d3.title = this.langMng.translateText(
                'cls_Dominio_mdiu_MDIU_Dominio_detail_Clas_1431701422080423UIMaDet_1Det_7',
                'Formas de Pago');
            this.d3.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('FormaPago',
                this.master.getContext(), null, 'Dominios', null, 'Dominio', ''));
        }
        if (this.d4Visible && this.d4 != null) {
            this.d4.order = 4;
            this.d4.iuId = this.iuId + 'D4';
            this.d4.initializeComponents();
            this.d4.title = this.langMng.translateText(
                'cls_Dominio_mdiu_MDIU_Dominio_detail_Clas_1431701422080423UIMaDet_1Det_6',
                'Responsable plan voluntario');
            this.d4.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Dominio',
                this.master.getContext(), null, '', null, 'Dominio', ''));
        }
        if (this.d5Visible && this.d5 != null) {
            this.d5.order = 5;
            this.d5.iuId = this.iuId + 'D5';
            this.d5.initializeComponents();
            this.d5.title = this.langMng.translateText(
                'cls_Dominio_mdiu_MDIU_Dominio_detail_Clas_1431701422080423UIMaDet_1Det_4',
                'Roles');
            this.d5.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Rol',
                this.master.getContext(), null, 'Dominios', null, 'Dominio', ''));
        }
        if (this.d6Visible && this.d6 != null) {
            this.d6.order = 6;
            this.d6.iuId = this.iuId + 'D6';
            this.d6.initializeComponents();
            this.d6.title = this.langMng.translateText(
                'cls_Dominio_mdiu_MDIU_Dominio_detail_Clas_1431701422080423UIMaDet_1Det_8',
                'Prorrateos');
            this.d6.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Prorrateo',
                this.master.getContext(), null, 'Dominio', null, 'Dominio', ''));
        }
        if (this.d7Visible && this.d7 != null) {
            this.d7.order = 7;
            this.d7.iuId = this.iuId + 'D7';
            this.d7.initializeComponents();
            this.d7.title = this.langMng.translateText(
                'cls_Dominio_mdiu_MDIU_Dominio_detail_Clas_1431701422080423UIMaDet_1Det_9',
                'Plantillas notificaciones');
            this.d7.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('PlantillaEmail',
                this.master.getContext(), null, 'Dominios', null, 'Dominio', ''));
        }
        if (this.d8Visible && this.d8 != null) {
            this.d8.order = 8;
            this.d8.iuId = this.iuId + 'D8';
            this.d8.initializeComponents();
            this.d8.title = this.langMng.translateText(
                'cls_Dominio_mdiu_MDIU_Dominio_detail_Clas_1431701422080423UIMaDet_1Det_10',
                'Novedades');
            this.d8.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Novedad',
                this.master.getContext(), null, 'Dominios', null, 'Dominio', ''));
        }
        if (this.d9Visible && this.d9 != null) {
            this.d9.order = 9;
            this.d9.iuId = this.iuId + 'D9';
            this.d9.initializeComponents();
            this.d9.title = this.langMng.translateText(
                'cls_Dominio_mdiu_MDIU_Dominio_detail_Clas_1431701422080423UIMaDet_1Det_11',
                'Solicitudes de Novedad');
            this.d9.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Dominio',
                this.master.getContext(), null, '', null, 'Dominio', ''));
        }
        super.initializeComponents();
    }

}
