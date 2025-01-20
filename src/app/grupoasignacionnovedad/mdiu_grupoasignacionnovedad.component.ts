import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { GrupoAsignacionNovedadPIUuGrpAsigNovedaduDuDominioComponent } from './piu_grpasignovedad_d_dominio.component';
import { FuncionarioPIUuFuncionariouDuDominioComponent } from '../funcionario/piu_funcionario_d_dominio.component';


@Component({
    selector: 'imes-grupoasignacionnovedad-mdiu-grupoasignacionnovedad',
    templateUrl: './mdiu_grupoasignacionnovedad.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrupoAsignacionNovedadMDIUuGrupoAsignacionNovedadComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: GrupoAsignacionNovedadPIUuGrpAsigNovedaduDuDominioComponent;

    /** Details */
    /** Detail component 0 */
    public d0: FuncionarioPIUuFuncionariouDuDominioComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;

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
        this.idXML = 'Clas_1586852003840652UIMaDet_1';
        this.className = ModelConstants.Grupoasignacionnovedad.name;
        this.iuName = ModelConstants.Grupoasignacionnovedad.mdiuugrupoasignacionnovedad;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_GrupoAsignacionNovedad_mdiu_MDIU_GrupoAsignacionNovedad',
            'Grupo Asignación Novedades');
        // Create the details and assign the master detail container
        this.master = new GrupoAsignacionNovedadPIUuGrpAsigNovedaduDuDominioComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1586852003840652UIMaDet_1Det_2',
            ['Admin', 'SuperAdmin']);
        this.d0 = new FuncionarioPIUuFuncionariouDuDominioComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.d0.masterDetailContainer = this;
        if (this.d0Visible) {
            this.details.push(this.d0);
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
                'cls_GrupoAsignacionNovedad_mdiu_MDIU_GrupoAsignacionNovedad_detail_Clas_1586852003840652UIMaDet_1Det_2',
                'Usuarios');
            this.d0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Funcionario',
                this.master.getContext(), null, 'GrupoAsignacion.DominioCausalUsuario', null, 'GrupoAsignacionNovedad', ''));
        }
        super.initializeComponents();
    }

}
