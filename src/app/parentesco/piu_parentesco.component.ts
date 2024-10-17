import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
    selector: 'imes-parentesco-piu-parentesco',
    templateUrl: './piu_parentesco.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentescoPIUuParentescoComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dscodigo = 'Código';
    private readonly dsdescripcion = 'Descripción';
    private readonly dsestitular = 'Es titular';
    private readonly dsesconyuge = 'Es cónyuge';
    private readonly dsespadre = 'Es padre/madre';
    private readonly dseshijo = 'Es hijo';
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
        this.idXML = 'Clas_1431698145280871UIPobCl_1';
        this.className = ModelConstants.Parentesco.name;
        this.iuName = ModelConstants.Parentesco.piuuparentesco;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Parentesco_piu_PIU_Parentesco',
            'Parentescos');
        this.queryURL = '/api/ParentescoApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431698145280871CjtoVis_AutoICtjoVis_1';
        dsItem.name = 'codigo';
        dsItem.field = 'codigo';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_Parentesco_ds__Auto__item_Clas_1431698145280871CjtoVis_AutoICtjoVis_1',
            this.dscodigo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431698145280871CjtoVis_AutoICtjoVis_2';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Parentesco_ds__Auto__item_Clas_1431698145280871CjtoVis_AutoICtjoVis_2',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431698145280871CjtoVis_AutoICtjoVis_3';
        dsItem.name = 'estitular';
        dsItem.field = 'estitular';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Parentesco_ds__Auto__item_Clas_1431698145280871CjtoVis_AutoICtjoVis_3',
            this.dsestitular);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431698145280871CjtoVis_AutoICtjoVis_4';
        dsItem.name = 'esconyuge';
        dsItem.field = 'esconyuge';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Parentesco_ds__Auto__item_Clas_1431698145280871CjtoVis_AutoICtjoVis_4',
            this.dsesconyuge);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431698145280871CjtoVis_AutoICtjoVis_5';
        dsItem.name = 'espadre';
        dsItem.field = 'espadre';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Parentesco_ds__Auto__item_Clas_1431698145280871CjtoVis_AutoICtjoVis_5',
            this.dsespadre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431698145280871CjtoVis_AutoICtjoVis_6';
        dsItem.name = 'eshijo';
        dsItem.field = 'eshijo';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Parentesco_ds__Auto__item_Clas_1431698145280871CjtoVis_AutoICtjoVis_6',
            this.dseshijo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431698145280871CjtoVis_AutoICtjoVis_7';
        dsItem.name = 'nombrecorto';
        dsItem.field = 'nombrecorto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 10;
        dsItem.alias = this.langMng.translateText(
            'cls_Parentesco_ds__Auto__item_Clas_1431698145280871CjtoVis_AutoICtjoVis_7',
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
        accItem.idXML = 'Clas_1431698145280871AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Parentesco_act_A_Parentesco_PIU_item_Clas_1431698145280871AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Parentesco.name;
        accItem.targetUI = ModelConstants.Parentesco.siuucrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431698145280871AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Parentesco_act_A_Parentesco_PIU_item_Clas_1431698145280871AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Parentesco.name;
        accItem.targetUI = ModelConstants.Parentesco.siuumodificar;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431698145280871AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Parentesco_act_A_Parentesco_PIU_item_Clas_1431698145280871AccOfer_1ElemAcc_3',
            'Sincronizar');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutgsincparentescos;
        accItem.setNoShowProperties('TGSINCPARENTESCOS', '', '', false);

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1431698145280871AccOfer_1ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_Parentesco_act_A_Parentesco_PIU_item_Clas_1431698145280871AccOfer_1ElemAcc_4',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Parentesco.name;
        accItem.targetUI = ModelConstants.Parentesco.siuueliminar;
        accItem.setNoShowProperties('eliminar', 'p_thisparentesco_oid', '', false);

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
