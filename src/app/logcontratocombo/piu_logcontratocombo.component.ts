import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { LogContratoComboFilterFuLogContratoCombo} from './filters/logcontratocombofilterfulogcontratocombo';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_LogContratoCombo of LogContratoCombo »
 */
@Component({
    selector: 'imes-logcontratocombo-piu-logcontratocombo',
    templateUrl: './piu_logcontratocombo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogContratoComboPIUuLogContratoComboComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsfecha = 'Fecha';
    private readonly dsloginfuncionario = 'Login';
    private readonly dscontratointegral = 'Contrato Integral';
    private readonly dscontratoodontologico = 'Contrato Odontológico';
    private readonly dsaccion = 'Acción';

    /** Filters */
    public f0: LogContratoComboFilterFuLogContratoCombo;

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
        this.idXML = 'Clas_1586858295296800UIPobCl_1';
        this.className = ModelConstants.Logcontratocombo.name;
        this.classAlias = this.langMng.translateText('cls_LogContratoCombo',
            'Histórico Global Contratos Combo');
        this.iuName = ModelConstants.Logcontratocombo.piuulogcontratocombo;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_LogContratoCombo_piu_PIU_LogContratoCombo',
            'Histórico Global Contratos Combo');
        this.f0 = new LogContratoComboFilterFuLogContratoCombo(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/LogContratoComboApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1586858295296800CjtoVis_1ICtjoVis_1';
        dsItem.name = 'fecha';
        dsItem.field = 'fecha';
        dsItem.type = Field.dtDatetime;
        dsItem.alias = this.langMng.translateText(
            'cls_LogContratoCombo_ds_DS_LogContratoCombo_item_Clas_1586858295296800CjtoVis_1ICtjoVis_1',
            this.dsfecha);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586858295296800CjtoVis_1ICtjoVis_2';
        dsItem.name = 'loginfuncionario';
        dsItem.field = 'loginfuncionario';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_LogContratoCombo_ds_DS_LogContratoCombo_item_Clas_1586858295296800CjtoVis_1ICtjoVis_2',
            this.dsloginfuncionario);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586858295296800CjtoVis_1ICtjoVis_3';
        dsItem.name = 'contratointegral';
        dsItem.field = 'contratointegral';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_LogContratoCombo_ds_DS_LogContratoCombo_item_Clas_1586858295296800CjtoVis_1ICtjoVis_3',
            this.dscontratointegral);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586858295296800CjtoVis_1ICtjoVis_4';
        dsItem.name = 'contratoodontologico';
        dsItem.field = 'contratoodontologico';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_LogContratoCombo_ds_DS_LogContratoCombo_item_Clas_1586858295296800CjtoVis_1ICtjoVis_4',
            this.dscontratoodontologico);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586858295296800CjtoVis_1ICtjoVis_5';
        dsItem.name = 'accion';
        dsItem.field = 'accion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_LogContratoCombo_ds_DS_LogContratoCombo_item_Clas_1586858295296800CjtoVis_1ICtjoVis_5',
            this.dsaccion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_LogContratoCombo', value: 'Por fecha'});
        this.orderCriteria = 'OC_LogContratoCombo';
    }
}
