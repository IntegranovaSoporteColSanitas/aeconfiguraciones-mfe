import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_LogGrupoAsignacion of LogGrupoAsignacion »
 */
@Component({
    selector: 'imes-loggrupoasignacion-piu-loggrupoasignacion',
    templateUrl: './piu_loggrupoasignacion.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogGrupoAsignacionPIUuLogGrupoAsignacionComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsfecha = 'Fecha';
    private readonly dsloginfuncionario = 'Usuario';
    private readonly dsaccion = 'Acción';
    private readonly dsvalor = 'Valor';

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
        this.idXML = 'Clas_1586850430976759UIPobCl_1';
        this.className = ModelConstants.Loggrupoasignacion.name;
        this.iuName = ModelConstants.Loggrupoasignacion.piuuloggrupoasignacion;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_LogGrupoAsignacion_piu_PIU_LogGrupoAsignacion',
            'Histórico Grupo Asignación');
        this.queryURL = '/api/LogGrupoAsignacionApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1586850430976759CjtoVis_1ICtjoVis_2';
        dsItem.name = 'fecha';
        dsItem.field = 'fecha';
        dsItem.type = Field.dtDatetime;
        dsItem.alias = this.langMng.translateText(
            'cls_LogGrupoAsignacion_ds_DS_LogGrupoAsignacion_item_Clas_1586850430976759CjtoVis_1ICtjoVis_2',
            this.dsfecha);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586850430976759CjtoVis_1ICtjoVis_4';
        dsItem.name = 'loginfuncionario';
        dsItem.field = 'loginfuncionario';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_LogGrupoAsignacion_ds_DS_LogGrupoAsignacion_item_Clas_1586850430976759CjtoVis_1ICtjoVis_4',
            this.dsloginfuncionario);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586850430976759CjtoVis_1ICtjoVis_1';
        dsItem.name = 'accion';
        dsItem.field = 'accion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_LogGrupoAsignacion_ds_DS_LogGrupoAsignacion_item_Clas_1586850430976759CjtoVis_1ICtjoVis_1',
            this.dsaccion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586850430976759CjtoVis_1ICtjoVis_5';
        dsItem.name = 'valor';
        dsItem.field = 'valor';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 200;
        dsItem.alias = this.langMng.translateText(
            'cls_LogGrupoAsignacion_ds_DS_LogGrupoAsignacion_item_Clas_1586850430976759CjtoVis_1ICtjoVis_5',
            this.dsvalor);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_LogGrupoAsignacion', value: 'Por Fecha'});
        this.orderCriteria = 'OC_LogGrupoAsignacion';
    }
}
