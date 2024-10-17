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

export class NovedadPIUuNovedaduDuDominioComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dstiponovedaddnombre = 'Tipo';
    private readonly dsnombre = 'Nombre';
    private readonly dsaliasnovedad = 'Alias';
    private readonly dsdescripcion = 'Descripción';
    private readonly dsreqdocpersona = 'Requiere doc. persona';
    private readonly dsreqdocsolicitud = 'Requiere doc. solicitud';
    private readonly dsvariasfamilias = 'Varias familias';

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
        this.idXML = 'Clas_1581412253696713UIPobCl_2';
        this.className = ModelConstants.Novedad.name;
        this.iuName = 'PIU_Novedad_D_Dominio';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Novedad_piu_PIU_Novedad_D_Dominio',
            'Novedades');
        this.queryURL = '/api/NovedadApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581412253696713CjtoVis_3ICtjoVis_1';
        dsItem.name = 'tiponovedad.nombre';
        dsItem.field = 'tiponovedad-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_D_MD_Dominio_item_Clas_1581412253696713CjtoVis_3ICtjoVis_1',
            this.dstiponovedaddnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581412253696713CjtoVis_3ICtjoVis_2';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_D_MD_Dominio_item_Clas_1581412253696713CjtoVis_3ICtjoVis_2',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581412253696713CjtoVis_3ICtjoVis_3';
        dsItem.name = 'aliasnovedad';
        dsItem.field = 'aliasnovedad';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 2;
        dsItem.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_D_MD_Dominio_item_Clas_1581412253696713CjtoVis_3ICtjoVis_3',
            this.dsaliasnovedad);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581412253696713CjtoVis_3ICtjoVis_4';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 200;
        dsItem.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_D_MD_Dominio_item_Clas_1581412253696713CjtoVis_3ICtjoVis_4',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581412253696713CjtoVis_3ICtjoVis_5';
        dsItem.name = 'reqdocpersona';
        dsItem.field = 'reqdocpersona';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_D_MD_Dominio_item_Clas_1581412253696713CjtoVis_3ICtjoVis_5',
            this.dsreqdocpersona);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581412253696713CjtoVis_3ICtjoVis_6';
        dsItem.name = 'reqdocsolicitud';
        dsItem.field = 'reqdocsolicitud';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_D_MD_Dominio_item_Clas_1581412253696713CjtoVis_3ICtjoVis_6',
            this.dsreqdocsolicitud);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581412253696713CjtoVis_3ICtjoVis_7';
        dsItem.name = 'variasfamilias';
        dsItem.field = 'variasfamilias';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_D_MD_Dominio_item_Clas_1581412253696713CjtoVis_3ICtjoVis_7',
            this.dsvariasfamilias);
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
        accItem.idXML = 'Clas_1581412253696713AccOfer_3ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Novedad_act_A_Novedad_D_MD_Dominio_item_Clas_1581412253696713AccOfer_3ElemAcc_3',
            'Asignar Novedad');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Dominio.name;
        accItem.targetUI = ModelConstants.Dominio.siuutinsnovedad;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1581412253696713AccOfer_3ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Novedad_act_A_Novedad_D_MD_Dominio_item_Clas_1581412253696713AccOfer_3ElemAcc_1',
            'Quitar Novedad');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Novedad.name;
        accItem.targetUI = ModelConstants.Novedad.siuudelnovedad;

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
