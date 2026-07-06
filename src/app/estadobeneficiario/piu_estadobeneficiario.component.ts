import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType, OpenScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_EstadoBeneficiario of EstadoBeneficiario »
 */
@Component({
    selector: 'imes-estadobeneficiario-piu-estadobeneficiario',
    templateUrl: './piu_estadobeneficiario.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstadoBeneficiarioPIUuEstadoBeneficiarioComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dscodigo = 'Código';
    private readonly dsdescripcion = 'Descripción';
    private readonly dsesactivo = 'Es activo';
    private readonly dsconfirmado = 'Confirmado';
    private readonly dseserror = 'Es error';

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
        this.idXML = 'Clas_1431710597120636UIPobCl_1';
        this.className = ModelConstants.Estadobeneficiario.name;
        this.classAlias = this.langMng.translateText('cls_EstadoBeneficiario',
            'Estado beneficiario CORE');
        this.supplementaryInfoAtt.push('descripcion');
        this.iuName = ModelConstants.Estadobeneficiario.piuuestadobeneficiario;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_EstadoBeneficiario_piu_PIU_EstadoBeneficiario',
            'Estados beneficiario CORE');
        this.queryURL = '/api/EstadoBeneficiarioApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431710597120636CjtoVis_AutoICtjoVis_1';
        dsItem.name = 'codigo';
        dsItem.field = 'codigo';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_EstadoBeneficiario_ds__Auto__item_Clas_1431710597120636CjtoVis_AutoICtjoVis_1',
            this.dscodigo);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431710597120636CjtoVis_AutoICtjoVis_2';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_EstadoBeneficiario_ds__Auto__item_Clas_1431710597120636CjtoVis_AutoICtjoVis_2',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431710597120636CjtoVis_AutoICtjoVis_3';
        dsItem.name = 'esactivo';
        dsItem.field = 'esactivo';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_EstadoBeneficiario_ds__Auto__item_Clas_1431710597120636CjtoVis_AutoICtjoVis_3',
            this.dsesactivo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431710597120636CjtoVis_AutoICtjoVis_4';
        dsItem.name = 'confirmado';
        dsItem.field = 'confirmado';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_EstadoBeneficiario_ds__Auto__item_Clas_1431710597120636CjtoVis_AutoICtjoVis_4',
            this.dsconfirmado);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431710597120636CjtoVis_AutoICtjoVis_5';
        dsItem.name = 'eserror';
        dsItem.field = 'eserror';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_EstadoBeneficiario_ds__Auto__item_Clas_1431710597120636CjtoVis_AutoICtjoVis_5',
            this.dseserror);
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
        accItem.idXML = 'Clas_1431710597120636AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_EstadoBeneficiario_act_A_EstadoBeneficiario_PIU_item_Clas_1431710597120636AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Estadobeneficiario.name;
        accItem.targetUI = ModelConstants.Estadobeneficiario.siuucrear;
        accItem.targetType  = ScenarioType.Create;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431710597120636AccOfer_1ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_EstadoBeneficiario_act_A_EstadoBeneficiario_PIU_item_Clas_1431710597120636AccOfer_1ElemAcc_4',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Estadobeneficiario.name;
        accItem.targetUI = ModelConstants.Estadobeneficiario.siuumodificar;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431710597120636AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_EstadoBeneficiario_act_A_EstadoBeneficiario_PIU_item_Clas_1431710597120636AccOfer_1ElemAcc_2',
            'Sincronizar');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutgsincestadosbeneficiario;
        accItem.setNoShowProperties('TGSINCESTADOSBENEFICIARIO', '', '', false);
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1431710597120636AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_EstadoBeneficiario_act_A_EstadoBeneficiario_PIU_item_Clas_1431710597120636AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Estadobeneficiario.name;
        accItem.targetUI = ModelConstants.Estadobeneficiario.siuueliminar;
        accItem.setNoShowProperties('eliminar', 'p_thisestadobeneficiario_oid', '', false);
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
