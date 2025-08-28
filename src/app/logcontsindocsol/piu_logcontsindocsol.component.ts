import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { LogContSinDocSolFilterFuLogContSinDocSol} from './filters/logcontsindocsolfilterfulogcontsindocsol';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_LogContSinDocSol of LogContSinDocSol »
 */
@Component({
    selector: 'imes-logcontsindocsol-piu-logcontsindocsol',
    templateUrl: './piu_logcontsindocsol.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogContSinDocSolPIUuLogContSinDocSolComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsfecha = 'Fecha';
    private readonly dsnumcontrato = 'Nº Contrato';
    private readonly dsusuario = 'Usuario';

    /** Filters */
    public f0: LogContSinDocSolFilterFuLogContSinDocSol;

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
        this.idXML = 'Clas_1517847052288825UIPobCl_1';
        this.className = ModelConstants.Logcontsindocsol.name;
        this.classAlias = this.langMng.translateText('cls_LogContSinDocSol',
            'Log Contratos exentos');
        this.iuName = ModelConstants.Logcontsindocsol.piuulogcontsindocsol;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_LogContSinDocSol_piu_PIU_LogContSinDocSol',
            'Log Contratos exentos');
        this.f0 = new LogContSinDocSolFilterFuLogContSinDocSol(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/LogContSinDocSolApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1517847052288825CjtoVis_1ICtjoVis_1';
        dsItem.name = 'fecha';
        dsItem.field = 'fecha';
        dsItem.type = Field.dtDatetime;
        dsItem.alias = this.langMng.translateText(
            'cls_LogContSinDocSol_ds_DS_LogContSinDocSol_item_Clas_1517847052288825CjtoVis_1ICtjoVis_1',
            this.dsfecha);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1517847052288825CjtoVis_1ICtjoVis_2';
        dsItem.name = 'numcontrato';
        dsItem.field = 'numcontrato';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_LogContSinDocSol_ds_DS_LogContSinDocSol_item_Clas_1517847052288825CjtoVis_1ICtjoVis_2',
            this.dsnumcontrato);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1517847052288825CjtoVis_1ICtjoVis_3';
        dsItem.name = 'usuario';
        dsItem.field = 'usuario';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_LogContSinDocSol_ds_DS_LogContSinDocSol_item_Clas_1517847052288825CjtoVis_1ICtjoVis_3',
            this.dsusuario);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_LogContSinDocSol', value: 'Por Fecha'});
        this.orderCriteria = 'OC_LogContSinDocSol';
    }
}
