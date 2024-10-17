import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { FrecuenciaActFilterFuFrecuenciaActVarios} from './filters/frecuenciaactfilterfufrecuenciaactvarios';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
    selector: 'imes-frecuenciaact-piu-frecuenciaact',
    templateUrl: './piu_frecuenciaact.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrecuenciaActPIUuFrecuenciaActComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsparametrica = 'Paramétrica';
    private readonly dsfrecuencia = 'Frecuencia';
    private readonly dsfechaultimasinc = 'Fecha última sinc.';
    private readonly dsusuario = 'Usuario';
    private readonly dsnombreusuario = 'Nombre';
    private readonly dsresultadosinc = 'Resultado sinc.';

    /** Filters */
    public f0: FrecuenciaActFilterFuFrecuenciaActVarios;

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
        this.idXML = 'Clas_1431632084992014UIPobCl_1';
        this.className = ModelConstants.Frecuenciaact.name;
        this.iuName = ModelConstants.Frecuenciaact.piuufrecuenciaact;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_FrecuenciaAct_piu_PIU_FrecuenciaAct',
            'Frecuencias actualización');
        this.f0 = new FrecuenciaActFilterFuFrecuenciaActVarios(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/FrecuenciaActApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431632084992014CjtoVis_2ICtjoVis_1';
        dsItem.name = 'parametrica';
        dsItem.field = 'parametrica';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_FrecuenciaAct_ds_DS_FrecuenciaAct_PIU_item_Clas_1431632084992014CjtoVis_2ICtjoVis_1',
            this.dsparametrica);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_PARAMETRICAS;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431632084992014CjtoVis_2ICtjoVis_2';
        dsItem.name = 'frecuencia';
        dsItem.field = 'frecuencia';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_FrecuenciaAct_ds_DS_FrecuenciaAct_PIU_item_Clas_1431632084992014CjtoVis_2ICtjoVis_2',
            this.dsfrecuencia);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431632084992014CjtoVis_2ICtjoVis_3';
        dsItem.name = 'fechaultimasinc';
        dsItem.field = 'fechaultimasinc';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_FrecuenciaAct_ds_DS_FrecuenciaAct_PIU_item_Clas_1431632084992014CjtoVis_2ICtjoVis_3',
            this.dsfechaultimasinc);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431632084992014CjtoVis_2ICtjoVis_4';
        dsItem.name = 'usuario';
        dsItem.field = 'usuario';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_FrecuenciaAct_ds_DS_FrecuenciaAct_PIU_item_Clas_1431632084992014CjtoVis_2ICtjoVis_4',
            this.dsusuario);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431632084992014CjtoVis_2ICtjoVis_5';
        dsItem.name = 'nombreusuario';
        dsItem.field = 'nombreusuario';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 255;
        dsItem.alias = this.langMng.translateText(
            'cls_FrecuenciaAct_ds_DS_FrecuenciaAct_PIU_item_Clas_1431632084992014CjtoVis_2ICtjoVis_5',
            this.dsnombreusuario);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431632084992014CjtoVis_2ICtjoVis_6';
        dsItem.name = 'resultadosinc';
        dsItem.field = 'resultadosinc';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 255;
        dsItem.alias = this.langMng.translateText(
            'cls_FrecuenciaAct_ds_DS_FrecuenciaAct_PIU_item_Clas_1431632084992014CjtoVis_2ICtjoVis_6',
            this.dsresultadosinc);
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
        accItem.idXML = 'Clas_1431632084992014AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_FrecuenciaAct_act_A_FrecuenciaAct_PIU_item_Clas_1431632084992014AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Frecuenciaact.name;
        accItem.targetUI = ModelConstants.Frecuenciaact.siuucrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431632084992014AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_FrecuenciaAct_act_A_FrecuenciaAct_PIU_item_Clas_1431632084992014AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Frecuenciaact.name;
        accItem.targetUI = ModelConstants.Frecuenciaact.siuumodificar;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431632084992014AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_FrecuenciaAct_act_A_FrecuenciaAct_PIU_item_Clas_1431632084992014AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Frecuenciaact.name;
        accItem.targetUI = ModelConstants.Frecuenciaact.siuueliminar;
        accItem.setNoShowProperties('eliminar', 'p_thisfrecuenciaact_oid', '', false);

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
