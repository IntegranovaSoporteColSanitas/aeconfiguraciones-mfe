import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
    selector: 'imes-grupoasignacionnovedad-piu-grpasignovedad-d-dominio',
    templateUrl: './piu_grpasignovedad_d_dominio.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrupoAsignacionNovedadPIUuGrpAsigNovedaduDuDominioComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dscausaldnovedaddnombre = 'Novedad';
    private readonly dscausaldnombre = 'Causal';
    private readonly dsgrupousuariosdnombre = 'Grupo';

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
        this.idXML = 'Clas_1586852003840652UIPobCl_1';
        this.className = ModelConstants.Grupoasignacionnovedad.name;
        this.iuName = ModelConstants.Grupoasignacionnovedad.piuugrpasignovedadududominio;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_GrupoAsignacionNovedad_piu_PIU_GrpAsigNovedad_D_Dominio',
            'Grupos Novedades');
        this.queryURL = '/api/GrupoAsignacionNovedadApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1586852003840652CjtoVis_1ICtjoVis_1';
        dsItem.name = 'causal.novedad.nombre';
        dsItem.field = 'causal-novedad-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_GrupoAsignacionNovedad_ds_DS_GrupoAsignacionNovedad_item_Clas_1586852003840652CjtoVis_1ICtjoVis_1',
            this.dscausaldnovedaddnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586852003840652CjtoVis_1ICtjoVis_2';
        dsItem.name = 'causal.nombre';
        dsItem.field = 'causal-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_GrupoAsignacionNovedad_ds_DS_GrupoAsignacionNovedad_item_Clas_1586852003840652CjtoVis_1ICtjoVis_2',
            this.dscausaldnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586852003840652CjtoVis_1ICtjoVis_3';
        dsItem.name = 'grupousuarios.nombre';
        dsItem.field = 'grupousuarios-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_GrupoAsignacionNovedad_ds_DS_GrupoAsignacionNovedad_item_Clas_1586852003840652CjtoVis_1ICtjoVis_3',
            this.dsgrupousuariosdnombre);
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
        accItem.idXML = 'Clas_1586852003840652AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_GrupoAsignacionNovedad_act_A_GrupoAsignacionNovedad_item_Clas_1586852003840652AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Grupoasignacionnovedad.name;
        accItem.targetUI = ModelConstants.Grupoasignacionnovedad.siuutcrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1586852003840652AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_GrupoAsignacionNovedad_act_A_GrupoAsignacionNovedad_item_Clas_1586852003840652AccOfer_1ElemAcc_2',
            'Cambiar Grupo');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Grupoasignacionnovedad.name;
        accItem.targetUI = ModelConstants.Grupoasignacionnovedad.siuutasggrupo;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1586852003840652AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_GrupoAsignacionNovedad_act_A_GrupoAsignacionNovedad_item_Clas_1586852003840652AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Grupoasignacionnovedad.name;
        accItem.targetUI = ModelConstants.Grupoasignacionnovedad.siuueliminar;

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
