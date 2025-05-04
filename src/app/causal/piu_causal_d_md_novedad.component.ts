import { ChangeDetectorRef } from '@angular/core';
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

/**
 * « Implements PIU PIU_Causal_D_MD_Novedad of Causal »
 */
export class CausalPIUuCausaluDuMDuNovedadComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsaliascausal = 'Alias';
    private readonly dsnombre = 'Nombre';
    private readonly dsdescripcion = 'Descripción';
    private readonly dscodigolegal = 'Código Legal';
    private readonly dsreqdocpersona = 'Requiere doc. persona';
    private readonly dsreqdocsolicitud = 'Requiere doc. solicitud';

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
        this.idXML = 'Clas_1581414219776993UIPobCl_1';
        this.className = ModelConstants.Causal.name;
        this.iuName = 'PIU_Causal_D_MD_Novedad';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Causal_piu_PIU_Causal_D_MD_Novedad',
            'Causales');
        this.queryURL = '/api/CausalApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581414219776993CjtoVis_1ICtjoVis_1';
        dsItem.name = 'aliascausal';
        dsItem.field = 'aliascausal';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Causal_ds_DS_Causal_item_Clas_1581414219776993CjtoVis_1ICtjoVis_1',
            this.dsaliascausal);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581414219776993CjtoVis_1ICtjoVis_2';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Causal_ds_DS_Causal_item_Clas_1581414219776993CjtoVis_1ICtjoVis_2',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581414219776993CjtoVis_1ICtjoVis_3';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 200;
        dsItem.alias = this.langMng.translateText(
            'cls_Causal_ds_DS_Causal_item_Clas_1581414219776993CjtoVis_1ICtjoVis_3',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581414219776993CjtoVis_1ICtjoVis_4';
        dsItem.name = 'codigolegal';
        dsItem.field = 'codigolegal';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 5;
        dsItem.alias = this.langMng.translateText(
            'cls_Causal_ds_DS_Causal_item_Clas_1581414219776993CjtoVis_1ICtjoVis_4',
            this.dscodigolegal);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581414219776993CjtoVis_1ICtjoVis_5';
        dsItem.name = 'reqdocpersona';
        dsItem.field = 'reqdocpersona';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Causal_ds_DS_Causal_item_Clas_1581414219776993CjtoVis_1ICtjoVis_5',
            this.dsreqdocpersona);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581414219776993CjtoVis_1ICtjoVis_6';
        dsItem.name = 'reqdocsolicitud';
        dsItem.field = 'reqdocsolicitud';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Causal_ds_DS_Causal_item_Clas_1581414219776993CjtoVis_1ICtjoVis_6',
            this.dsreqdocsolicitud);
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
        accItem.idXML = 'Clas_1581414219776993AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Causal_act_A_Causal_item_Clas_1581414219776993AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Causal.name;
        accItem.targetUI = ModelConstants.Causal.siuucrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1581414219776993AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Causal_act_A_Causal_item_Clas_1581414219776993AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Causal.name;
        accItem.targetUI = ModelConstants.Causal.siuumodificar;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1581414219776993AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Causal_act_A_Causal_item_Clas_1581414219776993AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Causal.name;
        accItem.targetUI = ModelConstants.Causal.siuueliminar;

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
