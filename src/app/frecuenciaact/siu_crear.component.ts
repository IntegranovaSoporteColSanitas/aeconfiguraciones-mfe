import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldDefinedSelection } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-frecuenciaact-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrecuenciaActSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puatrParametrica: FieldDefinedSelection;
    public puatrFrecuencia: Field;

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
        this.idXML = 'Clas_1431632084992014Ser_1UIServ_1';
        this.className = ModelConstants.Frecuenciaact.name;
        this.iuName = ModelConstants.Frecuenciaact.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_FrecuenciaAct_svc_crear',
            'Crear');

        // Create inbound argument components
        this.puatrParametrica = new FieldDefinedSelection(this.langMng);
        this.puatrFrecuencia = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puatrParametrica.nameInRequest = 'p_atrparametrica';
        this.puatrParametrica.alias = this.langMng.translateText(
            'cls_FrecuenciaAct_svc_crear_inArg_p_atrParametrica',
            'Paramétrica');
        this.puatrParametrica.mandatory = true;
        this.puatrParametrica.dataType = Field.dtNat;
        this.puatrParametrica.options = DefinedSelections.DS_PARAMETRICAS;
        this.puatrParametrica.assignCSS();
        this.fields.push(this.puatrParametrica);

        this.puatrFrecuencia.nameInRequest = 'p_atrfrecuencia';
        this.puatrFrecuencia.alias = this.langMng.translateText(
            'cls_FrecuenciaAct_svc_crear_inArg_p_atrFrecuencia',
            'Frecuencia');
        this.puatrFrecuencia.mandatory = true;
        this.puatrFrecuencia.dataType = Field.dtInt;
        this.puatrFrecuencia.assignCSS();
        this.fields.push(this.puatrFrecuencia);
    }
}
