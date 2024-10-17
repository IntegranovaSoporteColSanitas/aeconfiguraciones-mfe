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
    selector: 'imes-gs-siu-tgcrearcontexento',
    templateUrl: './siu_tgcrearcontexento.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuTGCREARCONTEXENTOComponent extends AbstractServiceIU implements OnInit {

    /** Fields */
    public ptupuatrNumContrato: Field;

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
        this.idXML = 'IGl_1658397786112231UIServ_1';
        this.className = ModelConstants.Globalservices.name;
        this.iuName = ModelConstants.Globalservices.siuutgcrearcontexento;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TGCREARCONTEXENTO';
        this.title = this.langMng.translateText('gs_TGCREARCONTEXENTO',
            'Añadir contrato exento');

        // Create inbound argument components
        this.ptupuatrNumContrato = new Field(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptupuatrNumContrato.nameInRequest = 'pt_p_atrnumcontrato';
        this.ptupuatrNumContrato.alias = this.langMng.translateText(
            'gs_TGCREARCONTEXENTO_inArg_pt_p_atrNumContrato',
            'NumContrato');
        this.ptupuatrNumContrato.mandatory = true;
        this.ptupuatrNumContrato.dataType = Field.dtString;
        this.ptupuatrNumContrato.maxLength = 50;
        this.ptupuatrNumContrato.assignCSS();
        this.fields.push(this.ptupuatrNumContrato);
    }
}
