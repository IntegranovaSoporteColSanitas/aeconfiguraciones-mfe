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

/**
 * « Implements PIU PIU_LogConfiguracionANS of LogConfiguracionANS »
 */
@Component({
    selector: 'imes-logconfiguracionans-piu-logconfiguracionans',
    templateUrl: './piu_logconfiguracionans.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogConfiguracionANSPIUuLogConfiguracionANSComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsfecha = 'Fecha';
    private readonly dsloginfuncionario = 'Usuario';
    private readonly dsansafiliaciones = 'ANS Afiliaciones';
    private readonly dsansareamedica = 'ANS Área Mádica';
    private readonly dshabillunes = 'Lunes';
    private readonly dshabilmartes = 'Martes';
    private readonly dshabilmiercoles = 'Miércoles';
    private readonly dshabiljueves = 'Jueves';
    private readonly dshabilviernes = 'Viernes';
    private readonly dshabilsabado = 'Sábado';
    private readonly dshabildomingo = 'Domingo';

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
        this.idXML = 'Clas_1586860392448303UIPobCl_1';
        this.className = ModelConstants.Logconfiguracionans.name;
        this.classAlias = this.langMng.translateText('cls_LogConfiguracionANS',
            'Histórico ANS');
        this.iuName = ModelConstants.Logconfiguracionans.piuulogconfiguracionans;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_LogConfiguracionANS_piu_PIU_LogConfiguracionANS',
            'Histórico ANS');
        this.queryURL = '/api/LogConfiguracionANSApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1586860392448303CjtoVis_1ICtjoVis_3';
        dsItem.name = 'fecha';
        dsItem.field = 'fecha';
        dsItem.type = Field.dtDatetime;
        dsItem.alias = this.langMng.translateText(
            'cls_LogConfiguracionANS_ds_DS_LogConfiguracionANS_item_Clas_1586860392448303CjtoVis_1ICtjoVis_3',
            this.dsfecha);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586860392448303CjtoVis_1ICtjoVis_12';
        dsItem.name = 'loginfuncionario';
        dsItem.field = 'loginfuncionario';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_LogConfiguracionANS_ds_DS_LogConfiguracionANS_item_Clas_1586860392448303CjtoVis_1ICtjoVis_12',
            this.dsloginfuncionario);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586860392448303CjtoVis_1ICtjoVis_1';
        dsItem.name = 'ansafiliaciones';
        dsItem.field = 'ansafiliaciones';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_LogConfiguracionANS_ds_DS_LogConfiguracionANS_item_Clas_1586860392448303CjtoVis_1ICtjoVis_1',
            this.dsansafiliaciones);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586860392448303CjtoVis_1ICtjoVis_2';
        dsItem.name = 'ansareamedica';
        dsItem.field = 'ansareamedica';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_LogConfiguracionANS_ds_DS_LogConfiguracionANS_item_Clas_1586860392448303CjtoVis_1ICtjoVis_2',
            this.dsansareamedica);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586860392448303CjtoVis_1ICtjoVis_6';
        dsItem.name = 'habillunes';
        dsItem.field = 'habillunes';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_LogConfiguracionANS_ds_DS_LogConfiguracionANS_item_Clas_1586860392448303CjtoVis_1ICtjoVis_6',
            this.dshabillunes);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586860392448303CjtoVis_1ICtjoVis_7';
        dsItem.name = 'habilmartes';
        dsItem.field = 'habilmartes';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_LogConfiguracionANS_ds_DS_LogConfiguracionANS_item_Clas_1586860392448303CjtoVis_1ICtjoVis_7',
            this.dshabilmartes);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586860392448303CjtoVis_1ICtjoVis_8';
        dsItem.name = 'habilmiercoles';
        dsItem.field = 'habilmiercoles';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_LogConfiguracionANS_ds_DS_LogConfiguracionANS_item_Clas_1586860392448303CjtoVis_1ICtjoVis_8',
            this.dshabilmiercoles);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586860392448303CjtoVis_1ICtjoVis_5';
        dsItem.name = 'habiljueves';
        dsItem.field = 'habiljueves';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_LogConfiguracionANS_ds_DS_LogConfiguracionANS_item_Clas_1586860392448303CjtoVis_1ICtjoVis_5',
            this.dshabiljueves);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586860392448303CjtoVis_1ICtjoVis_10';
        dsItem.name = 'habilviernes';
        dsItem.field = 'habilviernes';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_LogConfiguracionANS_ds_DS_LogConfiguracionANS_item_Clas_1586860392448303CjtoVis_1ICtjoVis_10',
            this.dshabilviernes);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586860392448303CjtoVis_1ICtjoVis_9';
        dsItem.name = 'habilsabado';
        dsItem.field = 'habilsabado';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_LogConfiguracionANS_ds_DS_LogConfiguracionANS_item_Clas_1586860392448303CjtoVis_1ICtjoVis_9',
            this.dshabilsabado);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586860392448303CjtoVis_1ICtjoVis_4';
        dsItem.name = 'habildomingo';
        dsItem.field = 'habildomingo';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_LogConfiguracionANS_ds_DS_LogConfiguracionANS_item_Clas_1586860392448303CjtoVis_1ICtjoVis_4',
            this.dshabildomingo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_LogConfiguracionANS', value: 'Por Fecha'});
        this.orderCriteria = 'OC_LogConfiguracionANS';
    }
}
