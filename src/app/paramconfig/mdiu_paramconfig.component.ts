import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { ParamConfigIIUuParamConfigMaestroComponent } from './iiu_paramconfigmaestro.component';
import { LogParamPIUuLogParamComponent } from '../logparam/piu_logparam.component';


/**
 * « Implements MDIU MDIU_ParamConfig of ParamConfig »
 */
@Component({
    selector: 'imes-paramconfig-mdiu-paramconfig',
    templateUrl: './mdiu_paramconfig.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParamConfigMDIUuParamConfigComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: ParamConfigIIUuParamConfigMaestroComponent;

    /** Details */
    /** Detail component 0 */
    public d0: LogParamPIUuLogParamComponent;
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
        this.idXML = 'Clas_1431630118912680UIMaDet_1';
        this.className = ModelConstants.Paramconfig.name;
        this.iuName = ModelConstants.Paramconfig.mdiuuparamconfig;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_ParamConfig_mdiu_MDIU_ParamConfig',
            'Log cambios');
        // Create the details and assign the master detail container
        this.master = new ParamConfigIIUuParamConfigMaestroComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431630118912680UIMaDet_1Det_1',
            ['SuperAdmin']);
        this.d0 = new LogParamPIUuLogParamComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
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
                'cls_ParamConfig_mdiu_MDIU_ParamConfig_detail_Clas_1431630118912680UIMaDet_1Det_1',
                'Logs');
            this.d0.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('LogParam',
                this.master.getContext(), null, 'ParamConfig', null, 'ParamConfig', ''));
        }
        super.initializeComponents();
    }

}
