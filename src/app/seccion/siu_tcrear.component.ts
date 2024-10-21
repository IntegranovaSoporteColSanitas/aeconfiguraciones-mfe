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
    selector: 'imes-seccion-siu-tcrear',
    templateUrl: './siu_tcrear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeccionSIUuTCREARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public ptupuagrCuestionario: FieldOVPreload;
    public ptupuatrNombre: Field;
    public ptupuatrNumOrden: Field;

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
        this.idXML = 'Clas_1431633526784668Ser_4UIServ_1';
        this.className = ModelConstants.Seccion.name;
        this.iuName = ModelConstants.Seccion.siuutcrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TCREAR';
        this.title = this.langMng.translateText('cls_Seccion_svc_TCREAR',
            'Crear sección');

        // Create inbound argument components
        this.ptupuagrCuestionario = new FieldOVPreload(this.langMng);
        this.ptupuatrNombre = new Field(this.langMng);
        this.ptupuatrNumOrden = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptupuagrCuestionario.nameInRequest = 'pt_p_agrcuestionario';
        this.ptupuagrCuestionario.alias = this.langMng.translateText(
            'cls_Seccion_svc_TCREAR_inArg_pt_p_agrCuestionario',
            'Cuestionario');
        this.ptupuagrCuestionario.mandatory = true;
        this.ptupuagrCuestionario.dataType = ModelConstants.Cuestionariomed.name;
        this.ptupuagrCuestionario.maxLength = 100;
        this.ptupuagrCuestionario.assignCSS();
        this.fields.push(this.ptupuagrCuestionario);

        this.ptupuatrNombre.nameInRequest = 'pt_p_atrnombre';
        this.ptupuatrNombre.alias = this.langMng.translateText(
            'cls_Seccion_svc_TCREAR_inArg_pt_p_atrNombre',
            'Nombre');
        this.ptupuatrNombre.mandatory = true;
        this.ptupuatrNombre.dataType = Field.dtString;
        this.ptupuatrNombre.maxLength = 150;
        this.ptupuatrNombre.assignCSS();
        this.fields.push(this.ptupuatrNombre);

        this.ptupuatrNumOrden.nameInRequest = 'pt_p_atrnumorden';
        this.ptupuatrNumOrden.alias = this.langMng.translateText(
            'cls_Seccion_svc_TCREAR_inArg_pt_p_atrNumOrden',
            'Nº orden');
        this.ptupuatrNumOrden.mandatory = true;
        this.ptupuatrNumOrden.dataType = Field.dtNat;
        this.ptupuatrNumOrden.assignCSS();
        this.fields.push(this.ptupuatrNumOrden);
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
            if (lastRole === 'Cuestionario') {
                this.ptupuagrCuestionario.setValue(lastRoleOid);
                this.ptupuagrCuestionario.enabled = false;
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptupuagrCuestionario
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('CuestionarioMed', 'IC_CuestionarioMed', [], null, '').then(
            (response: any) => {
                if (response && response.results) {
                    this.ptupuagrCuestionario.loadPreload(response.results);
                } else {
                    this.ptupuagrCuestionario.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.notifyAnswerFromToTheBackEnd();
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.processErrorInLoadPreload(response.resultDescription);
            }
        );
        this.numberOfPendingPreload++;
    }
}
