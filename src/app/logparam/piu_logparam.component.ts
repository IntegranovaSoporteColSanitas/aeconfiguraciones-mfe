import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

export class LogParamPIUuLogParamComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsfecha = 'Fecha';
    private readonly dsusuario = 'Usuario';
    private readonly dsvaloranterior = 'Valor anterior';
    private readonly dsnuevovalor = 'Nuevo valor';

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
        this.idXML = 'Clas_1431631298560437UIPobCl_1';
        this.className = ModelConstants.Logparam.name;
        this.iuName = 'PIU_LogParam';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.title = this.langMng.translateText('cls_LogParam_piu_PIU_LogParam',
            'Log Parámetros Conf.');
        this.queryURL = '/api/LogParamApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431631298560437CjtoVis_1ICtjoVis_1';
        dsItem.name = 'fecha';
        dsItem.field = 'fecha';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_LogParam_ds_DS_LogParam_PIU_item_Clas_1431631298560437CjtoVis_1ICtjoVis_1',
            this.dsfecha);
        dsItem.agents = [ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431631298560437CjtoVis_1ICtjoVis_2';
        dsItem.name = 'usuario';
        dsItem.field = 'usuario';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_LogParam_ds_DS_LogParam_PIU_item_Clas_1431631298560437CjtoVis_1ICtjoVis_2',
            this.dsusuario);
        dsItem.agents = [ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431631298560437CjtoVis_1ICtjoVis_3';
        dsItem.name = 'valoranterior';
        dsItem.field = 'valoranterior';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 999;
        dsItem.alias = this.langMng.translateText(
            'cls_LogParam_ds_DS_LogParam_PIU_item_Clas_1431631298560437CjtoVis_1ICtjoVis_3',
            this.dsvaloranterior);
        dsItem.agents = [ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431631298560437CjtoVis_1ICtjoVis_4';
        dsItem.name = 'nuevovalor';
        dsItem.field = 'nuevovalor';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 999;
        dsItem.alias = this.langMng.translateText(
            'cls_LogParam_ds_DS_LogParam_PIU_item_Clas_1431631298560437CjtoVis_1ICtjoVis_4',
            this.dsnuevovalor);
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
