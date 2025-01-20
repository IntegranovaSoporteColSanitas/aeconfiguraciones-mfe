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
    selector: 'imes-companyia-piu-companyia',
    templateUrl: './piu_companyia.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyiaPIUuCompanyiaComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dscodigo = 'Código';
    private readonly dsnombre = 'Nombre';
    private readonly dsesdemp = 'Medicina Prepagada';

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
        this.idXML = 'Clas_1431889510400288UIPobCl_1';
        this.className = ModelConstants.Companyia.name;
        this.iuName = ModelConstants.Companyia.piuucompanyia;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Companyia_piu_PIU_Companyia',
            'Compañías');
        this.queryURL = '/api/CompanyiaApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431889510400288CjtoVis_AutoICtjoVis_1';
        dsItem.name = 'codigo';
        dsItem.field = 'codigo';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_Companyia_ds__Auto__item_Clas_1431889510400288CjtoVis_AutoICtjoVis_1',
            this.dscodigo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431889510400288CjtoVis_AutoICtjoVis_2';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_Companyia_ds__Auto__item_Clas_1431889510400288CjtoVis_AutoICtjoVis_2',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431889510400288CjtoVis_AutoICtjoVis_3';
        dsItem.name = 'esdemp';
        dsItem.field = 'esdemp';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Companyia_ds__Auto__item_Clas_1431889510400288CjtoVis_AutoICtjoVis_3',
            this.dsesdemp);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431889510400288AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Companyia_act_A_Companyia_PIU_item_Clas_1431889510400288AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Companyia.name;
        accItem.targetUI = ModelConstants.Companyia.siuucrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431889510400288AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Companyia_act_A_Companyia_PIU_item_Clas_1431889510400288AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Companyia.name;
        accItem.targetUI = ModelConstants.Companyia.siuumodificar;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431889510400288AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Companyia_act_A_Companyia_PIU_item_Clas_1431889510400288AccOfer_1ElemAcc_3',
            'Sincronizar');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutgsincompanias;
        accItem.setNoShowProperties('TGSINCOMPANIAS', '', '', false);

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1431889510400288AccOfer_1ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_Companyia_act_A_Companyia_PIU_item_Clas_1431889510400288AccOfer_1ElemAcc_4',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Companyia.name;
        accItem.targetUI = ModelConstants.Companyia.siuueliminar;
        accItem.setNoShowProperties('eliminar', 'p_thiscompanyia_oid', '', false);

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
