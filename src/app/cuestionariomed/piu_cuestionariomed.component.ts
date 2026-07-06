import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType, OpenScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_CuestionarioMed of CuestionarioMed »
 */
@Component({
    selector: 'imes-cuestionariomed-piu-cuestionariomed',
    templateUrl: './piu_cuestionariomed.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CuestionarioMedPIUuCuestionarioMedComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsnumero = 'Número';
    private readonly dsnombre = 'Nombre';

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
        this.idXML = 'Clas_1431633526784077UIPobCl_1';
        this.className = ModelConstants.Cuestionariomed.name;
        this.classAlias = this.langMng.translateText('cls_CuestionarioMed',
            'Cuestionario médico');
        this.supplementaryInfoAtt.push('nombre');
        this.iuName = ModelConstants.Cuestionariomed.piuucuestionariomed;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_CuestionarioMed_piu_PIU_CuestionarioMed',
            'Cuestionarios médicos');
        this.queryURL = '/api/CuestionarioMedApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431633526784077CjtoVis_2ICtjoVis_1';
        dsItem.name = 'numero';
        dsItem.field = 'numero';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_CuestionarioMed_ds_DS_CuestionarioMed_PIU_item_Clas_1431633526784077CjtoVis_2ICtjoVis_1',
            this.dsnumero);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431633526784077CjtoVis_2ICtjoVis_2';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_CuestionarioMed_ds_DS_CuestionarioMed_PIU_item_Clas_1431633526784077CjtoVis_2ICtjoVis_2',
            this.dsnombre);
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
        accItem.idXML = 'Clas_1431633526784077AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_CuestionarioMed_act_A_CuestionarioMed_PIU_item_Clas_1431633526784077AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Cuestionariomed.name;
        accItem.targetUI = ModelConstants.Cuestionariomed.siuucrear;
        accItem.targetType  = ScenarioType.Create;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431633526784077AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_CuestionarioMed_act_A_CuestionarioMed_PIU_item_Clas_1431633526784077AccOfer_1ElemAcc_2',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Cuestionariomed.name;
        accItem.targetUI = ModelConstants.Cuestionariomed.siuueliminar;
        accItem.setNoShowProperties('eliminar', 'p_thiscuestionariomed_oid', '', false);
        accItem.targetType  = ScenarioType.Delete;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431633526784077AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_CuestionarioMed_act_A_CuestionarioMed_PIU_item_Clas_1431633526784077AccOfer_1ElemAcc_3',
            'Configuración');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Cuestionariomed.name;
        accItem.targetUI = ModelConstants.Cuestionariomed.mdiuucuestionariomed;
        accItem.targetType  = ScenarioType.MasterDetail;
        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
