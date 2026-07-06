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
 * « Implements PIU PIU_EstadoCivil of EstadoCivil »
 */
@Component({
    selector: 'imes-estadocivil-piu-estadocivil',
    templateUrl: './piu_estadocivil.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstadoCivilPIUuEstadoCivilComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dscodigo = 'Código';
    private readonly dsdescripcion = 'Descripción';
    private readonly dsnombrecorto = 'Nombre corto';

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
        this.idXML = 'Clas_1431880990720963UIPobCl_1';
        this.className = ModelConstants.Estadocivil.name;
        this.classAlias = this.langMng.translateText('cls_EstadoCivil',
            'Estado civil');
        this.supplementaryInfoAtt.push('descripcion');
        this.iuName = ModelConstants.Estadocivil.piuuestadocivil;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_EstadoCivil_piu_PIU_EstadoCivil',
            'Estados civiles');
        this.queryURL = '/api/EstadoCivilApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431880990720963CjtoVis_AutoICtjoVis_1';
        dsItem.name = 'codigo';
        dsItem.field = 'codigo';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_EstadoCivil_ds__Auto__item_Clas_1431880990720963CjtoVis_AutoICtjoVis_1',
            this.dscodigo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431880990720963CjtoVis_AutoICtjoVis_2';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_EstadoCivil_ds__Auto__item_Clas_1431880990720963CjtoVis_AutoICtjoVis_2',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431880990720963CjtoVis_AutoICtjoVis_3';
        dsItem.name = 'nombrecorto';
        dsItem.field = 'nombrecorto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_EstadoCivil_ds__Auto__item_Clas_1431880990720963CjtoVis_AutoICtjoVis_3',
            this.dsnombrecorto);
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
        accItem.idXML = 'Clas_1431880990720963AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_EstadoCivil_act_A_EstadoCivil_PIU_item_Clas_1431880990720963AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Estadocivil.name;
        accItem.targetUI = ModelConstants.Estadocivil.siuucrear;
        accItem.targetType  = ScenarioType.Create;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431880990720963AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_EstadoCivil_act_A_EstadoCivil_PIU_item_Clas_1431880990720963AccOfer_1ElemAcc_2',
            'Sincronizar');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutgsincestadosciviles;
        accItem.setNoShowProperties('TGSINCESTADOSCIVILES', '', '', false);
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431880990720963AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_EstadoCivil_act_A_EstadoCivil_PIU_item_Clas_1431880990720963AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Estadocivil.name;
        accItem.targetUI = ModelConstants.Estadocivil.siuueliminar;
        accItem.setNoShowProperties('eliminar', 'p_thisestadocivil_oid', '', false);
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
