import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-estadobeneficiarioae-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstadoBeneficiarioAESIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puagrEstadoBeneficiarioCORE: FieldOVPreload;
    public puatrDescripcion: Field;

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
        this.idXML = 'Clas_1431711383552943Ser_1UIServ_1';
        this.className = ModelConstants.Estadobeneficiarioae.name;
        this.iuName = ModelConstants.Estadobeneficiarioae.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_EstadoBeneficiarioAE_svc_crear',
            'Crear estado beneficiario');

        // Create inbound argument components
        this.puagrEstadoBeneficiarioCORE = new FieldOVPreload(this.langMng);
        this.puatrDescripcion = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puagrEstadoBeneficiarioCORE.nameInRequest = 'p_agrestadobeneficiariocore';
        this.puagrEstadoBeneficiarioCORE.alias = this.langMng.translateText(
            'cls_EstadoBeneficiarioAE_svc_crear_inArg_p_agrEstadoBeneficiarioCORE',
            'Estado beneficiario CORE');
        this.puagrEstadoBeneficiarioCORE.mandatory = true;
        this.puagrEstadoBeneficiarioCORE.dataType = ModelConstants.Estadobeneficiario.name;
        this.puagrEstadoBeneficiarioCORE.maxLength = 150;
        this.puagrEstadoBeneficiarioCORE.assignCSS();
        this.fields.push(this.puagrEstadoBeneficiarioCORE);

        this.puatrDescripcion.nameInRequest = 'p_atrdescripcion';
        this.puatrDescripcion.alias = this.langMng.translateText(
            'cls_EstadoBeneficiarioAE_svc_crear_inArg_p_atrDescripcion',
            'Descripción');
        this.puatrDescripcion.mandatory = true;
        this.puatrDescripcion.dataType = Field.dtString;
        this.puatrDescripcion.maxLength = 150;
        this.puatrDescripcion.assignCSS();
        this.fields.push(this.puatrDescripcion);
    }

    /**
     * Initialize arguments from context that identify a Role
     */
    public override initializeFromCtxRelated(): void {
        let lastRole = '';
        let lastRoleOid = null;
        if (this.context.exchangeInfo) {
            lastRole = this.context.exchangeInfo.getLastNavigationRole();
            lastRoleOid = this.context.exchangeInfo.getLastNavigationRoleOid();
        }

        if (lastRole && lastRoleOid) {
            if (lastRole === 'EstadoBeneficiarioCORE') {
                this.puagrEstadoBeneficiarioCORE.setValue(lastRoleOid);
                this.puagrEstadoBeneficiarioCORE.enabled = false;
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // puagrEstadoBeneficiarioCORE
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('EstadoBeneficiario', 'IC_EstadoBeneficiario', [], null, '').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.puagrEstadoBeneficiarioCORE.loadPreload(response.results);
                } else {
                    this.puagrEstadoBeneficiarioCORE.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                this.processErrorInLoadPreload(response.resultDescription);
            }
        );
        this.numberOfPendingPreload++;
    }
}
