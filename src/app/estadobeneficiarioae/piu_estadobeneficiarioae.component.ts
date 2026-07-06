import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType, OpenScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_EstadoBeneficiarioAE of EstadoBeneficiarioAE »
 */
@Component({
    selector: 'imes-estadobeneficiarioae-piu-estadobeneficiarioae',
    templateUrl: './piu_estadobeneficiarioae.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstadoBeneficiarioAEPIUuEstadoBeneficiarioAEComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dscodigo = 'Código';
    private readonly dsdescripcion = 'Descripción';
    private readonly dsestadobeneficiariocoreddescripcion = 'Estado CORE';

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
        public override langMng: LanguageMng, public stdFun: StandardFunctions,
        public override condNavMng: ConditionalNavigationMng) {
        super(appGlobalInfo, util, changeDetectorRef, langMng, condNavMng);
        this.idXML = 'Clas_1431711383552943UIPobCl_1';
        this.className = ModelConstants.Estadobeneficiarioae.name;
        this.classAlias = this.langMng.translateText('cls_EstadoBeneficiarioAE',
            'Estado beneficiario AE');
        this.supplementaryInfoAtt.push('descripcion');
        this.iuName = ModelConstants.Estadobeneficiarioae.piuuestadobeneficiarioae;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_EstadoBeneficiarioAE_piu_PIU_EstadoBeneficiarioAE',
            'Estados beneficiario AE');
        this.queryURL = '/api/EstadoBeneficiarioAEApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * It is the main component. Process the initial actions
     */
    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431711383552943CjtoVis_2ICtjoVis_1';
        dsItem.name = 'codigo';
        dsItem.field = 'codigo';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_EstadoBeneficiarioAE_ds_DS_EstadoBeneficiarioAE_PIU_item_Clas_1431711383552943CjtoVis_2ICtjoVis_1',
            this.dscodigo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431711383552943CjtoVis_2ICtjoVis_2';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_EstadoBeneficiarioAE_ds_DS_EstadoBeneficiarioAE_PIU_item_Clas_1431711383552943CjtoVis_2ICtjoVis_2',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431711383552943CjtoVis_2ICtjoVis_3';
        dsItem.name = 'estadobeneficiariocore.descripcion';
        dsItem.field = 'estadobeneficiariocore-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_EstadoBeneficiarioAE_ds_DS_EstadoBeneficiarioAE_PIU_item_Clas_1431711383552943CjtoVis_2ICtjoVis_3',
            this.dsestadobeneficiariocoreddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431711383552943AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_EstadoBeneficiarioAE_act_A_EstadoBeneficiarioAE_PIU_item_Clas_1431711383552943AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Estadobeneficiarioae.name;
        accItem.targetUI = ModelConstants.Estadobeneficiarioae.siuucrear;
        accItem.targetType  = ScenarioType.Create;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431711383552943AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_EstadoBeneficiarioAE_act_A_EstadoBeneficiarioAE_PIU_item_Clas_1431711383552943AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Estadobeneficiarioae.name;
        accItem.targetUI = ModelConstants.Estadobeneficiarioae.siuutmodificar;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431711383552943AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_EstadoBeneficiarioAE_act_A_EstadoBeneficiarioAE_PIU_item_Clas_1431711383552943AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Estadobeneficiarioae.name;
        accItem.targetUI = ModelConstants.Estadobeneficiarioae.siuueliminar;
        accItem.setNoShowProperties('eliminar', 'p_thisestadobeneficiarioae_oid', '', false);
        accItem.targetType  = ScenarioType.Delete;
        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
