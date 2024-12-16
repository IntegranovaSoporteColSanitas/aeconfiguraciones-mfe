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
    selector: 'imes-formapago-piu-formapago',
    templateUrl: './piu_formapago.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormaPagoPIUuFormaPagoComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dscodigo = 'Código';
    private readonly dsdescripcion = 'Descripción';
    private readonly dsabrirurl = 'Abrir URL';
    private readonly dsesvisible = 'Visible';

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
        this.idXML = 'Clas_1431941677056219UIPobCl_1';
        this.className = ModelConstants.Formapago.name;
        this.iuName = ModelConstants.Formapago.piuuformapago;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_FormaPago_piu_PIU_FormaPago',
            'Formas de pago');
        this.queryURL = '/api/FormaPagoApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431941677056219CjtoVis_AutoICtjoVis_1';
        dsItem.name = 'codigo';
        dsItem.field = 'codigo';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_FormaPago_ds__Auto__item_Clas_1431941677056219CjtoVis_AutoICtjoVis_1',
            this.dscodigo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431941677056219CjtoVis_AutoICtjoVis_2';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_FormaPago_ds__Auto__item_Clas_1431941677056219CjtoVis_AutoICtjoVis_2',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431941677056219CjtoVis_AutoICtjoVis_3';
        dsItem.name = 'abrirurl';
        dsItem.field = 'abrirurl';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_FormaPago_ds__Auto__item_Clas_1431941677056219CjtoVis_AutoICtjoVis_3',
            this.dsabrirurl);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431941677056219CjtoVis_AutoICtjoVis_4';
        dsItem.name = 'esvisible';
        dsItem.field = 'esvisible';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_FormaPago_ds__Auto__item_Clas_1431941677056219CjtoVis_AutoICtjoVis_4',
            this.dsesvisible);
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
        accItem.idXML = 'Clas_1431941677056219AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_FormaPago_act_A_FormaPago_PIU_item_Clas_1431941677056219AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Formapago.name;
        accItem.targetUI = ModelConstants.Formapago.siuucrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431941677056219AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_FormaPago_act_A_FormaPago_PIU_item_Clas_1431941677056219AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Formapago.name;
        accItem.targetUI = ModelConstants.Formapago.siuumodificar;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431941677056219AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_FormaPago_act_A_FormaPago_PIU_item_Clas_1431941677056219AccOfer_1ElemAcc_3',
            'Sincronizar');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutgsincformaspago;
        accItem.setNoShowProperties('TGSINCFORMASPAGO', '', '', false);

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1431941677056219AccOfer_1ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_FormaPago_act_A_FormaPago_PIU_item_Clas_1431941677056219AccOfer_1ElemAcc_4',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Formapago.name;
        accItem.targetUI = ModelConstants.Formapago.siuueliminar;
        accItem.setNoShowProperties('eliminar', 'p_thisformapago_oid', '', false);

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
