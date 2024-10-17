import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { ContratoComboFilterFuContratoCombouPorNumero} from './filters/contratocombofilterfucontratocomboupornumero';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
    selector: 'imes-contratocombo-piu-contratocombo',
    templateUrl: './piu_contratocombo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContratoComboPIUuContratoComboComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dscontratointegral = 'Contrato Integral';
    private readonly dscontratoodontologico = 'Contrato Odontológico';

    /** Filters */
    public f0: ContratoComboFilterFuContratoCombouPorNumero;

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
        this.idXML = 'Clas_1586858164224485UIPobCl_1';
        this.className = ModelConstants.Contratocombo.name;
        this.iuName = ModelConstants.Contratocombo.piuucontratocombo;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_ContratoCombo_piu_PIU_ContratoCombo',
            'Contratos Combo');
        this.f0 = new ContratoComboFilterFuContratoCombouPorNumero(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/ContratoComboApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1586858164224485CjtoVis_1ICtjoVis_1';
        dsItem.name = 'contratointegral';
        dsItem.field = 'contratointegral';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_ContratoCombo_ds_DS_ContratoCombo_item_Clas_1586858164224485CjtoVis_1ICtjoVis_1',
            this.dscontratointegral);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586858164224485CjtoVis_1ICtjoVis_2';
        dsItem.name = 'contratoodontologico';
        dsItem.field = 'contratoodontologico';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_ContratoCombo_ds_DS_ContratoCombo_item_Clas_1586858164224485CjtoVis_1ICtjoVis_2',
            this.dscontratoodontologico);
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
        accItem.idXML = 'Clas_1586858164224485AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_ContratoCombo_act_A_ContratoCombo_item_Clas_1586858164224485AccOfer_1ElemAcc_1',
            'Nueva');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutgcrearcombo;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1586858164224485AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_ContratoCombo_act_A_ContratoCombo_item_Clas_1586858164224485AccOfer_1ElemAcc_2',
            'Editar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutgeditarcombo;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1586858164224485AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_ContratoCombo_act_A_ContratoCombo_item_Clas_1586858164224485AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutdelcombo;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1586858164224485AccOfer_1ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_ContratoCombo_act_A_ContratoCombo_item_Clas_1586858164224485AccOfer_1ElemAcc_4',
            'Histórico Global Contratos Combo');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Logcontratocombo.name;
        accItem.targetUI = ModelConstants.Logcontratocombo.piuulogcontratocombo;

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
