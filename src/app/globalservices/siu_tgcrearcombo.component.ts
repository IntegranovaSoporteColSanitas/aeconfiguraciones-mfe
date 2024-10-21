import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { CacheDependencyRules, InstanceCache } from '../common/app.cachedependencyrules';
import { Field } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
    selector: 'imes-gs-siu-tgcrearcombo',
    templateUrl: './siu_tgcrearcombo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuTGCREARCOMBOComponent extends AbstractServiceIU implements OnInit {

    /** Fields */
    public ptupuatrContratoIntegral: Field;
    public ptupuatrContratoOdontologico: Field;

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
        this.idXML = 'IGl_1587633717248106UIServ_1';
        this.className = ModelConstants.Globalservices.name;
        this.iuName = ModelConstants.Globalservices.siuutgcrearcombo;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TGCREARCOMBO';
        this.title = this.langMng.translateText('gs_TGCREARCOMBO',
            'Nueva configuración contrato combo');

        // Create inbound argument components
        this.ptupuatrContratoIntegral = new Field(this.langMng);
        this.ptupuatrContratoOdontologico = new Field(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptupuatrContratoIntegral.nameInRequest = 'pt_p_atrcontratointegral';
        this.ptupuatrContratoIntegral.alias = this.langMng.translateText(
            'gs_TGCREARCOMBO_inArg_pt_p_atrContratoIntegral',
            'Contrato Integral');
        this.ptupuatrContratoIntegral.mandatory = true;
        this.ptupuatrContratoIntegral.dataType = Field.dtString;
        this.ptupuatrContratoIntegral.maxLength = 50;
        this.ptupuatrContratoIntegral.assignCSS();
        this.fields.push(this.ptupuatrContratoIntegral);

        this.ptupuatrContratoOdontologico.nameInRequest = 'pt_p_atrcontratoodontologico';
        this.ptupuatrContratoOdontologico.alias = this.langMng.translateText(
            'gs_TGCREARCOMBO_inArg_pt_p_atrContratoOdontologico',
            'Contrato Odontológico');
        this.ptupuatrContratoOdontologico.mandatory = true;
        this.ptupuatrContratoOdontologico.dataType = Field.dtString;
        this.ptupuatrContratoOdontologico.maxLength = 50;
        this.ptupuatrContratoOdontologico.assignCSS();
        this.fields.push(this.ptupuatrContratoOdontologico);
    }
}
