import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { DominioIIUuDominiouMuGrupoAsesoresComponent } from './iiu_dominio_m_grupoasesores.component';
import { FuncionarioPIUuFuncionariouDuDominioComponent } from '../funcionario/piu_funcionario_d_dominio.component';


@Component({
    selector: 'imes-dominio-mdiu-dominio-grupoasesores',
    templateUrl: './mdiu_dominio_grupoasesores.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DominioMDIUuDominiouGrupoAsesoresComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: DominioIIUuDominiouMuGrupoAsesoresComponent;

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
        this.idXML = 'Clas_1431701422080423UIMaDet_2';
        this.className = ModelConstants.Dominio.name;
        this.iuName = ModelConstants.Dominio.mdiuudominiougrupoasesores;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Dominio_mdiu_MDIU_Dominio_GrupoAsesores',
            'Grupo Asesores');
        // Create the details and assign the master detail container
        this.master = new DominioIIUuDominiouMuGrupoAsesoresComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431701422080423UIMaDet_2Det_1',
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
                'cls_Dominio_mdiu_MDIU_Dominio_GrupoAsesores_detail_Clas_1431701422080423UIMaDet_2Det_1',
                'Usuarios');
            this.d0.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Funcionario',
                this.master.getContext(), null, 'GrupoAsignacion.DominioAsesores', null, 'Dominio', ''));
        }
        super.initializeComponents();
    }

}
