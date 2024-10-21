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
    selector: 'imes-contsindocsol-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContSinDocSolSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puatrNumContrato: Field;

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
        this.idXML = 'Clas_1517844955136648Ser_1UIServ_1';
        this.className = ModelConstants.Contsindocsol.name;
        this.iuName = ModelConstants.Contsindocsol.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_ContSinDocSol_svc_crear',
            'Crear');

        // Create inbound argument components
        this.puatrNumContrato = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puatrNumContrato.nameInRequest = 'p_atrnumcontrato';
        this.puatrNumContrato.alias = this.langMng.translateText(
            'cls_ContSinDocSol_svc_crear_inArg_p_atrNumContrato',
            'Nº Contrato');
        this.puatrNumContrato.mandatory = true;
        this.puatrNumContrato.dataType = Field.dtString;
        this.puatrNumContrato.maxLength = 50;
        this.puatrNumContrato.assignCSS();
        this.fields.push(this.puatrNumContrato);
    }
}
