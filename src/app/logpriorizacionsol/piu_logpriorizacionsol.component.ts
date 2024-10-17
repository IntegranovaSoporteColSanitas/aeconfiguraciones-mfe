import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
    selector: 'imes-logpriorizacionsol-piu-logpriorizacionsol',
    templateUrl: './piu_logpriorizacionsol.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogPriorizacionSolPIUuLogPriorizacionSolComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsfecha = 'Fecha';
    private readonly dsloginfuncionario = 'Login';
    private readonly dsestadosolicitud = 'Estado Solicitud';
    private readonly dsestadodoc = 'Estado Documentación';
    private readonly dsprioridad = 'Prioridad';

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
        this.idXML = 'Clas_1586847547392173UIPobCl_1';
        this.className = ModelConstants.Logpriorizacionsol.name;
        this.iuName = ModelConstants.Logpriorizacionsol.piuulogpriorizacionsol;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.title = this.langMng.translateText('cls_LogPriorizacionSol_piu_PIU_LogPriorizacionSol',
            'Histórico Priorización Solicitudes');
        this.queryURL = '/api/LogPriorizacionSolApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1586847547392173CjtoVis_1ICtjoVis_1';
        dsItem.name = 'fecha';
        dsItem.field = 'fecha';
        dsItem.type = Field.dtDatetime;
        dsItem.alias = this.langMng.translateText(
            'cls_LogPriorizacionSol_ds_DS_LogPriorizacionSol_item_Clas_1586847547392173CjtoVis_1ICtjoVis_1',
            this.dsfecha);
        dsItem.agents = [ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586847547392173CjtoVis_1ICtjoVis_2';
        dsItem.name = 'loginfuncionario';
        dsItem.field = 'loginfuncionario';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_LogPriorizacionSol_ds_DS_LogPriorizacionSol_item_Clas_1586847547392173CjtoVis_1ICtjoVis_2',
            this.dsloginfuncionario);
        dsItem.agents = [ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586847547392173CjtoVis_1ICtjoVis_3';
        dsItem.name = 'estadosolicitud';
        dsItem.field = 'estadosolicitud';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_LogPriorizacionSol_ds_DS_LogPriorizacionSol_item_Clas_1586847547392173CjtoVis_1ICtjoVis_3',
            this.dsestadosolicitud);
        dsItem.agents = [ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_ESTADOSOLICITUD;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586847547392173CjtoVis_1ICtjoVis_4';
        dsItem.name = 'estadodoc';
        dsItem.field = 'estadodoc';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_LogPriorizacionSol_ds_DS_LogPriorizacionSol_item_Clas_1586847547392173CjtoVis_1ICtjoVis_4',
            this.dsestadodoc);
        dsItem.agents = [ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_ESTADODOCSOLNOV;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586847547392173CjtoVis_1ICtjoVis_5';
        dsItem.name = 'prioridad';
        dsItem.field = 'prioridad';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_LogPriorizacionSol_ds_DS_LogPriorizacionSol_item_Clas_1586847547392173CjtoVis_1ICtjoVis_5',
            this.dsprioridad);
        dsItem.agents = [ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
