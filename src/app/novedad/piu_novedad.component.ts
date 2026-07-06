import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType, OpenScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { NovedadFilterFuNovedad} from './filters/novedadfilterfunovedad';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_Novedad of Novedad »
 */
@Component({
    selector: 'imes-novedad-piu-novedad',
    templateUrl: './piu_novedad.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NovedadPIUuNovedadComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dstiponovedaddnombre = 'Tipo';
    private readonly dsnombre = 'Nombre';
    private readonly dsaliasnovedad = 'Alias';
    private readonly dsdescripcion = 'Descripción';
    private readonly dscodigolegal = 'Código Legal';
    private readonly dsreqdocpersona = 'Requiere doc. persona';
    private readonly dsreqdocsolicitud = 'Requiere doc. solicitud';
    private readonly dsvariasfamilias = 'Varias familias';
    private readonly dsminvalormeses = 'Valor mínimo meses';
    private readonly dsmaxvalormeses = 'Valor máximo meses';

    /** Filters */
    public f0: NovedadFilterFuNovedad;

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
        this.idXML = 'Clas_1581412253696713UIPobCl_1';
        this.className = ModelConstants.Novedad.name;
        this.classAlias = this.langMng.translateText('cls_Novedad',
            'Novedad');
        this.supplementaryInfoAtt.push('nombre');
        this.iuName = ModelConstants.Novedad.piuunovedad;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Novedad_piu_PIU_Novedad',
            'Novedades');
        this.f0 = new NovedadFilterFuNovedad(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/NovedadApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1581412253696713CjtoVis_2ICtjoVis_1';
        dsItem.name = 'tiponovedad.nombre';
        dsItem.field = 'tiponovedad-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_item_Clas_1581412253696713CjtoVis_2ICtjoVis_1',
            this.dstiponovedaddnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581412253696713CjtoVis_2ICtjoVis_2';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_item_Clas_1581412253696713CjtoVis_2ICtjoVis_2',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581412253696713CjtoVis_2ICtjoVis_3';
        dsItem.name = 'aliasnovedad';
        dsItem.field = 'aliasnovedad';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 2;
        dsItem.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_item_Clas_1581412253696713CjtoVis_2ICtjoVis_3',
            this.dsaliasnovedad);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581412253696713CjtoVis_2ICtjoVis_4';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 200;
        dsItem.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_item_Clas_1581412253696713CjtoVis_2ICtjoVis_4',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581412253696713CjtoVis_2ICtjoVis_5';
        dsItem.name = 'codigolegal';
        dsItem.field = 'codigolegal';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 5;
        dsItem.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_item_Clas_1581412253696713CjtoVis_2ICtjoVis_5',
            this.dscodigolegal);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581412253696713CjtoVis_2ICtjoVis_6';
        dsItem.name = 'reqdocpersona';
        dsItem.field = 'reqdocpersona';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_item_Clas_1581412253696713CjtoVis_2ICtjoVis_6',
            this.dsreqdocpersona);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581412253696713CjtoVis_2ICtjoVis_7';
        dsItem.name = 'reqdocsolicitud';
        dsItem.field = 'reqdocsolicitud';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_item_Clas_1581412253696713CjtoVis_2ICtjoVis_7',
            this.dsreqdocsolicitud);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581412253696713CjtoVis_2ICtjoVis_8';
        dsItem.name = 'variasfamilias';
        dsItem.field = 'variasfamilias';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_item_Clas_1581412253696713CjtoVis_2ICtjoVis_8',
            this.dsvariasfamilias);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581412253696713CjtoVis_2ICtjoVis_9';
        dsItem.name = 'minvalormeses';
        dsItem.field = 'minvalormeses';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_item_Clas_1581412253696713CjtoVis_2ICtjoVis_9',
            this.dsminvalormeses);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581412253696713CjtoVis_2ICtjoVis_10';
        dsItem.name = 'maxvalormeses';
        dsItem.field = 'maxvalormeses';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_Novedad_ds_DS_Novedad_item_Clas_1581412253696713CjtoVis_2ICtjoVis_10',
            this.dsmaxvalormeses);
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
        accItem.idXML = 'Clas_1581412253696713AccOfer_2ElemAcc_6';
        accItem.alias = this.langMng.translateText(
            'cls_Novedad_act_A_Novedad_item_Clas_1581412253696713AccOfer_2ElemAcc_6',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Novedad.name;
        accItem.targetUI = ModelConstants.Novedad.siuutcrear;
        accItem.targetType  = ScenarioType.Create;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1581412253696713AccOfer_2ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Novedad_act_A_Novedad_item_Clas_1581412253696713AccOfer_2ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Novedad.name;
        accItem.targetUI = ModelConstants.Novedad.siuumodificar;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1581412253696713AccOfer_2ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Novedad_act_A_Novedad_item_Clas_1581412253696713AccOfer_2ElemAcc_3',
            'Detalles Novedad');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Novedad.name;
        accItem.targetUI = ModelConstants.Novedad.mdiuunovedaducausales;
        accItem.targetType  = ScenarioType.MasterDetail;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1581412253696713AccOfer_2ElemAcc_5';
        accItem.alias = this.langMng.translateText(
            'cls_Novedad_act_A_Novedad_item_Clas_1581412253696713AccOfer_2ElemAcc_5',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Novedad.name;
        accItem.targetUI = ModelConstants.Novedad.siuuteliminar;
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
