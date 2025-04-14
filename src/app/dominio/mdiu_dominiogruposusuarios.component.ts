import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { DominioIIUuDominiouMuGruposUsuariosComponent } from './iiu_dominio_m_gruposusuarios.component';
import { DominioMDIUuDominiouGrupoAsesoresComponent } from './mdiu_dominio_grupoasesores.component';
import { DominioMDIUuDominiouGrupoAreaMedicaComponent } from './mdiu_dominio_grupoareamedica.component';
import { GrupoAsignacionNovedadMDIUuGrupoAsignacionNovedadComponent } from '../grupoasignacionnovedad/mdiu_grupoasignacionnovedad.component';


@Component({
    selector: 'imes-dominio-mdiu-dominiogruposusuarios',
    templateUrl: './mdiu_dominiogruposusuarios.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DominioMDIUuDominioGruposUsuariosComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: DominioIIUuDominiouMuGruposUsuariosComponent;

    /** Details */
    /** Detail component 0 */
    public d0: DominioMDIUuDominiouGrupoAsesoresComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;
    /** Detail component 1 */
    public d1: DominioMDIUuDominiouGrupoAreaMedicaComponent;
    /** Detail 1 visible or not */
    public d1Visible = true;
    /** Detail component 2 */
    public d2: GrupoAsignacionNovedadMDIUuGrupoAsignacionNovedadComponent;
    /** Detail 2 visible or not */
    public d2Visible = true;

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
        this.idXML = 'Clas_1431701422080423UIMaDet_4';
        this.className = ModelConstants.Dominio.name;
        this.iuName = ModelConstants.Dominio.mdiuudominiogruposusuarios;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Dominio_mdiu_MDIU_DominioGruposUsuarios',
            'Grupos Usuarios');
        // Create the details and assign the master detail container
        this.master = new DominioIIUuDominiouMuGruposUsuariosComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431701422080423UIMaDet_4Det_11',
            ['Admin', 'SuperAdmin']);
        this.d0 = new DominioMDIUuDominiouGrupoAsesoresComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.d0.masterDetailContainer = this;
        if (this.d0Visible) {
            this.details.push(this.d0);
        }
        this.d1Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431701422080423UIMaDet_4Det_12',
            ['Admin', 'SuperAdmin']);
        this.d1 = new DominioMDIUuDominiouGrupoAreaMedicaComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.d1.masterDetailContainer = this;
        if (this.d1Visible) {
            this.details.push(this.d1);
        }
        this.d2Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431701422080423UIMaDet_4Det_14',
            ['Admin', 'SuperAdmin']);
        this.d2 = new GrupoAsignacionNovedadMDIUuGrupoAsignacionNovedadComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.d2.masterDetailContainer = this;
        if (this.d2Visible) {
            this.details.push(this.d2);
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
                'cls_Dominio_mdiu_MDIU_DominioGruposUsuarios_detail_Clas_1431701422080423UIMaDet_4Det_11',
                'Grupo Asesores/Afiliaciones');
            this.d0.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Dominio',
                this.master.getContext(), null, '', null, 'Dominio', ''));
        }
        if (this.d1Visible && this.d1 != null) {
            this.d1.order = 1;
            this.d1.iuId = this.iuId + 'D1';
            this.d1.initializeComponents();
            this.d1.title = this.langMng.translateText(
                'cls_Dominio_mdiu_MDIU_DominioGruposUsuarios_detail_Clas_1431701422080423UIMaDet_4Det_12',
                'Grupo Área Médica');
            this.d1.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Dominio',
                this.master.getContext(), null, '', null, 'Dominio', ''));
        }
        if (this.d2Visible && this.d2 != null) {
            this.d2.order = 2;
            this.d2.iuId = this.iuId + 'D2';
            this.d2.initializeComponents();
            this.d2.title = this.langMng.translateText(
                'cls_Dominio_mdiu_MDIU_DominioGruposUsuarios_detail_Clas_1431701422080423UIMaDet_4Det_14',
                'Grupos Novedades');
            this.d2.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('GrupoAsignacionNovedad',
                this.master.getContext(), null, 'Dominio', null, 'Dominio', ''));
        }
        super.initializeComponents();
    }

}
