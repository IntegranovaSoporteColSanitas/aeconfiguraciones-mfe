import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field, FieldBlob } from '../common/baseIUElements';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
    selector: 'imes-respregional-iiu-respregional-firma',
    templateUrl: './iiu_respregional_firma.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RespRegionalIIUuRespRegionaluFirmaComponent extends AbstractIIU implements OnInit {

    /** Display Set elements */
    public dsedrvNombreCompleto: Field;
    public dseFirmaImagenFirma: FieldBlob;

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
        this.idXML = 'Clas_1431871684608346UIInst_1';
        this.className = ModelConstants.Respregional.name;
        this.iuName = ModelConstants.Respregional.iiuurespregionalufirma;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_RespRegional_iiu_IIU_RespRegional_Firma',
            'Firma de responsable regional');
        this.queryURL = '/api/RespRegionalApi/GetPopulationDynamic';

        this.dsedrvNombreCompleto = new Field(this.langMng);
        this.dseFirmaImagenFirma = new FieldBlob(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dsedrvNombreCompleto.nameInRequest = 'drvnombrecompleto';
        this.dsedrvNombreCompleto.alias = this.langMng.translateText(
            'cls_RespRegional_ds_DS_RespRegional_Firma_item_Clas_1431871684608346CjtoVis_4ICtjoVis_1',
            'Nombre completo');
        this.dsedrvNombreCompleto.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431871684608346CjtoVis_4ICtjoVis_1', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dsedrvNombreCompleto.enabled = false;
        this.dsedrvNombreCompleto.mandatory = false;
        this.dsedrvNombreCompleto.dataType = Field.dtString;
        this.dsedrvNombreCompleto.maxLength = 255;
        this.dsedrvNombreCompleto.assignCSS();
        this.fields.push(this.dsedrvNombreCompleto);

        this.dseFirmaImagenFirma.nameInRequest = 'firma.imagenfirma';
        this.dseFirmaImagenFirma.alias = this.langMng.translateText(
            'cls_RespRegional_ds_DS_RespRegional_Firma_item_Clas_1431871684608346CjtoVis_4ICtjoVis_2',
            'Firma');
        this.dseFirmaImagenFirma.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431871684608346CjtoVis_4ICtjoVis_2', ['Admin', 'SuperAdmin']);
        this.dseFirmaImagenFirma.enabled = false;
        this.dseFirmaImagenFirma.mandatory = false;
        this.dseFirmaImagenFirma.dataType = Field.dtBlob;
        this.dseFirmaImagenFirma.assignCSS();
        this.fields.push(this.dseFirmaImagenFirma);

    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431871684608346AccOfer_2ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_RespRegional_act_A_RespRegionalFirma_item_Clas_1431871684608346AccOfer_2ElemAcc_1',
            'Modificar firma');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Respregional.name;
        accItem.targetUI = ModelConstants.Respregional.siuutcrearomodfirma;
        this.actions.push(accItem);

    }
}
