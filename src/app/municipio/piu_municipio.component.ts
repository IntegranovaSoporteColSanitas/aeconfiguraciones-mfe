import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType, OpenScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { MunicipioFilterFuMunicipioVarios} from './filters/municipiofilterfumunicipiovarios';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_Municipio of Municipio »
 */
@Component({
    selector: 'imes-municipio-piu-municipio',
    templateUrl: './piu_municipio.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MunicipioPIUuMunicipioComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsdepartamentoddescripcion = 'Departamento';
    private readonly dscodigo = 'Código';
    private readonly dscodigolegal = 'Código legal';
    private readonly dsdescripcion = 'Descripción';
    private readonly dsaplicaiva = 'Aplica IVA';
    private readonly dsesvalidoeps = 'Válido EPS';

    /** Filters */
    public f0: MunicipioFilterFuMunicipioVarios;

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
        this.idXML = 'Clas_1431890034688728UIPobCl_1';
        this.className = ModelConstants.Municipio.name;
        this.classAlias = this.langMng.translateText('cls_Municipio',
            'Municipio');
        this.supplementaryInfoAtt.push('descripcion');
        this.iuName = ModelConstants.Municipio.piuumunicipio;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Funcionario']));
        this.title = this.langMng.translateText('cls_Municipio_piu_PIU_Municipio',
            'Municipios');
        this.f0 = new MunicipioFilterFuMunicipioVarios(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/MunicipioApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431890034688728CjtoVis_2ICtjoVis_1';
        dsItem.name = 'departamento.descripcion';
        dsItem.field = 'departamento-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_Municipio_ds_DS_Municipio_PIU_item_Clas_1431890034688728CjtoVis_2ICtjoVis_1',
            this.dsdepartamentoddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431890034688728CjtoVis_2ICtjoVis_2';
        dsItem.name = 'codigo';
        dsItem.field = 'codigo';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_Municipio_ds_DS_Municipio_PIU_item_Clas_1431890034688728CjtoVis_2ICtjoVis_2',
            this.dscodigo);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431890034688728CjtoVis_2ICtjoVis_3';
        dsItem.name = 'codigolegal';
        dsItem.field = 'codigolegal';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 10;
        dsItem.alias = this.langMng.translateText(
            'cls_Municipio_ds_DS_Municipio_PIU_item_Clas_1431890034688728CjtoVis_2ICtjoVis_3',
            this.dscodigolegal);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431890034688728CjtoVis_2ICtjoVis_4';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_Municipio_ds_DS_Municipio_PIU_item_Clas_1431890034688728CjtoVis_2ICtjoVis_4',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431890034688728CjtoVis_2ICtjoVis_5';
        dsItem.name = 'aplicaiva';
        dsItem.field = 'aplicaiva';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Municipio_ds_DS_Municipio_PIU_item_Clas_1431890034688728CjtoVis_2ICtjoVis_5',
            this.dsaplicaiva);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431890034688728CjtoVis_2ICtjoVis_6';
        dsItem.name = 'esvalidoeps';
        dsItem.field = 'esvalidoeps';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Municipio_ds_DS_Municipio_PIU_item_Clas_1431890034688728CjtoVis_2ICtjoVis_6',
            this.dsesvalidoeps);
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
        accItem.idXML = 'Clas_1431890034688728AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Municipio_act_A_Municipio_PIU_item_Clas_1431890034688728AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Municipio.name;
        accItem.targetUI = ModelConstants.Municipio.siuucrear;
        accItem.targetType  = ScenarioType.Create;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431890034688728AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Municipio_act_A_Municipio_PIU_item_Clas_1431890034688728AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Municipio.name;
        accItem.targetUI = ModelConstants.Municipio.siuumodificar;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431890034688728AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Municipio_act_A_Municipio_PIU_item_Clas_1431890034688728AccOfer_1ElemAcc_3',
            'Sincronizar');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuuogsincmunicipios;
        accItem.setNoShowProperties('OGSINCMUNICIPIOS', '', '', false);
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1431890034688728AccOfer_1ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_Municipio_act_A_Municipio_PIU_item_Clas_1431890034688728AccOfer_1ElemAcc_4',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Municipio.name;
        accItem.targetUI = ModelConstants.Municipio.siuueliminar;
        accItem.setNoShowProperties('eliminar', 'p_thismunicipio_oid', '', false);
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
