import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-valor-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValorSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puatrValorPosible: Field;

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
        this.idXML = 'Clas_1431634313216388Ser_1UIServ_1';
        this.className = ModelConstants.Valor.name;
        this.iuName = ModelConstants.Valor.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_Valor_svc_crear',
            'Crear valor posible de respuesta');

        // Create inbound argument components
        this.puatrValorPosible = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puatrValorPosible.nameInRequest = 'p_atrvalorposible';
        this.puatrValorPosible.alias = this.langMng.translateText(
            'cls_Valor_svc_crear_inArg_p_atrValorPosible',
            'Valor');
        this.puatrValorPosible.mandatory = true;
        this.puatrValorPosible.dataType = Field.dtString;
        this.puatrValorPosible.maxLength = 150;
        this.puatrValorPosible.assignCSS();
        this.fields.push(this.puatrValorPosible);
    }
}
