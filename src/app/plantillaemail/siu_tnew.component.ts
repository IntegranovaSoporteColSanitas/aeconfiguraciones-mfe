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
    selector: 'imes-plantillaemail-siu-tnew',
    templateUrl: './siu_tnew.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlantillaEmailSIUuTNEWComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public ptupuatrCodigo: FieldDefinedSelection;
    public ptupuatrDescripcion: Field;

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
        this.idXML = 'Clas_1431708631040445Ser_8UIServ_1';
        this.className = ModelConstants.Plantillaemail.name;
        this.iuName = ModelConstants.Plantillaemail.siuutnew;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.serviceName = 'TNEW';
        this.title = this.langMng.translateText('cls_PlantillaEmail_svc_TNEW',
            'Crear plantilla');

        // Create inbound argument components
        this.ptupuatrCodigo = new FieldDefinedSelection(this.langMng);
        this.ptupuatrDescripcion = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptupuatrCodigo.nameInRequest = 'pt_p_atrcodigo';
        this.ptupuatrCodigo.alias = this.langMng.translateText(
            'cls_PlantillaEmail_svc_TNEW_inArg_pt_p_atrCodigo',
            'Código');
        this.ptupuatrCodigo.mandatory = true;
        this.ptupuatrCodigo.dataType = Field.dtNat;
        this.ptupuatrCodigo.options = DefinedSelections.DS_PLANTILLASEMAIL;
        this.ptupuatrCodigo.assignCSS();
        this.fields.push(this.ptupuatrCodigo);

        this.ptupuatrDescripcion.nameInRequest = 'pt_p_atrdescripcion';
        this.ptupuatrDescripcion.alias = this.langMng.translateText(
            'cls_PlantillaEmail_svc_TNEW_inArg_pt_p_atrDescripcion',
            'Descripción');
        this.ptupuatrDescripcion.mandatory = true;
        this.ptupuatrDescripcion.dataType = Field.dtString;
        this.ptupuatrDescripcion.maxLength = 255;
        this.ptupuatrDescripcion.assignCSS();
        this.fields.push(this.ptupuatrDescripcion);
    }
}
