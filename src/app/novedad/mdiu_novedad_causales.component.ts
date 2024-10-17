import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { NovedadIIUuNovedadComponent } from './iiu_novedad.component';
import { CausalPIUuCausaluDuMDuNovedadComponent } from '../causal/piu_causal_d_md_novedad.component';
import { CausaExclusionPIUuCausaExclusionComponent } from '../causaexclusion/piu_causaexclusion.component';


@Component({
    selector: 'imes-novedad-mdiu-novedad-causales',
    templateUrl: './mdiu_novedad_causales.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NovedadMDIUuNovedaduCausalesComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: NovedadIIUuNovedadComponent;

    /** Details */
    /** Detail component 0 */
    public d0: CausalPIUuCausaluDuMDuNovedadComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;
    /** Detail component 1 */
    public d1: CausaExclusionPIUuCausaExclusionComponent;
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
        this.idXML = 'Clas_1581412253696713UIMaDet_1';
        this.className = ModelConstants.Novedad.name;
        this.iuName = ModelConstants.Novedad.mdiuunovedaducausales;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Novedad_mdiu_MDIU_Novedad_Causales',
            'Detalles Novedad');
        // Create the details and assign the master detail container
        this.master = new NovedadIIUuNovedadComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1581412253696713UIMaDet_1Det_1',
            ['Admin', 'SuperAdmin']);
        this.d0 = new CausalPIUuCausaluDuMDuNovedadComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.d0.masterDetailContainer = this;
        if (this.d0Visible) {
            this.details.push(this.d0);
        }
        this.d1Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1581412253696713UIMaDet_1Det_2',
            ['Admin', 'SuperAdmin']);
        this.d1 = new CausaExclusionPIUuCausaExclusionComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
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
                'cls_Novedad_mdiu_MDIU_Novedad_Causales_detail_Clas_1581412253696713UIMaDet_1Det_1',
                'Causales');
            this.d0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Causal',
                this.master.getContext(), null, 'Novedad', null, 'Novedad', ''));
        }
        if (this.d1Visible && this.d1 != null) {
            this.d1.order = 1;
            this.d1.iuId = this.iuId + 'D1';
            this.d1.initializeComponents();
            this.d1.title = this.langMng.translateText(
                'cls_Novedad_mdiu_MDIU_Novedad_Causales_detail_Clas_1581412253696713UIMaDet_1Det_2',
                'Causas de Exclusion');
            this.d1.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('CausaExclusion',
                this.master.getContext(), null, 'Novedad', null, 'Novedad', ''));
        }
        super.initializeComponents();
    }

}
