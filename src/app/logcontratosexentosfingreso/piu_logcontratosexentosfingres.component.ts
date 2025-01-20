import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { LogContratosExentosFIngresoFilterFuLogContratosExentosFIngreso} from './filters/logcontratosexentosfingresofilterfulogcontratosexentosfingreso';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
    selector: 'imes-logcontratosexentosfingreso-piu-logcontratosexentosfingres',
    templateUrl: './piu_logcontratosexentosfingres.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogContratosExentosFIngresoPIUuLogContratosExentosFIngresComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsfecha = 'Fecha';
    private readonly dsloginfuncionario = 'Usuario';
    private readonly dsaccion = 'Acción';
    private readonly dsnumcontrato = 'Num. Contrato';

    /** Filters */
    public f0: LogContratosExentosFIngresoFilterFuLogContratosExentosFIngreso;

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
        this.idXML = 'Clas_1658397523968042UIPobCl_1';
        this.className = ModelConstants.Logcontratosexentosfingreso.name;
        this.iuName = ModelConstants.Logcontratosexentosfingreso.piuulogcontratosexentosfingres;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_LogContratosExentosFIngreso_piu_PIU_LogContratosExentosFIngres',
            'Log Contratos exentos fecha ingreso');
        this.f0 = new LogContratosExentosFIngresoFilterFuLogContratosExentosFIngreso(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/LogContratosExentosFIngresoApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1658397523968042CjtoVis_1ICtjoVis_1';
        dsItem.name = 'fecha';
        dsItem.field = 'fecha';
        dsItem.type = Field.dtDatetime;
        dsItem.alias = this.langMng.translateText(
            'cls_LogContratosExentosFIngreso_ds_DS_LogContratosExentosFIngreso_item_Clas_1658397523968042CjtoVis_1ICtjoVis_1',
            this.dsfecha);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1658397523968042CjtoVis_1ICtjoVis_2';
        dsItem.name = 'loginfuncionario';
        dsItem.field = 'loginfuncionario';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_LogContratosExentosFIngreso_ds_DS_LogContratosExentosFIngreso_item_Clas_1658397523968042CjtoVis_1ICtjoVis_2',
            this.dsloginfuncionario);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1658397523968042CjtoVis_1ICtjoVis_3';
        dsItem.name = 'accion';
        dsItem.field = 'accion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 15;
        dsItem.alias = this.langMng.translateText(
            'cls_LogContratosExentosFIngreso_ds_DS_LogContratosExentosFIngreso_item_Clas_1658397523968042CjtoVis_1ICtjoVis_3',
            this.dsaccion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1658397523968042CjtoVis_1ICtjoVis_4';
        dsItem.name = 'numcontrato';
        dsItem.field = 'numcontrato';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_LogContratosExentosFIngreso_ds_DS_LogContratosExentosFIngreso_item_Clas_1658397523968042CjtoVis_1ICtjoVis_4',
            this.dsnumcontrato);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_LogContratosExentosFIngreso', value: 'Por Fecha'});
        this.orderCriteria = 'OC_LogContratosExentosFIngreso';
    }
}
