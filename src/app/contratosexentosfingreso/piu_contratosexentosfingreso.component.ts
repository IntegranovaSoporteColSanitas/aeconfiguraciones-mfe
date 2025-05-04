import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { ContratosExentosFIngresoFilterFuContratosExentosFIngreso} from './filters/contratosexentosfingresofilterfucontratosexentosfingreso';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_ContratosExentosFIngreso of ContratosExentosFIngreso »
 */
@Component({
    selector: 'imes-contratosexentosfingreso-piu-contratosexentosfingreso',
    templateUrl: './piu_contratosexentosfingreso.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContratosExentosFIngresoPIUuContratosExentosFIngresoComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsnumcontrato = 'NumContrato';

    /** Filters */
    public f0: ContratosExentosFIngresoFilterFuContratosExentosFIngreso;

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
        this.idXML = 'Clas_1658397392896210UIPobCl_1';
        this.className = ModelConstants.Contratosexentosfingreso.name;
        this.iuName = ModelConstants.Contratosexentosfingreso.piuucontratosexentosfingreso;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_ContratosExentosFIngreso_piu_PIU_ContratosExentosFIngreso',
            'Contratos exentos fecha de ingreso');
        this.f0 = new ContratosExentosFIngresoFilterFuContratosExentosFIngreso(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/ContratosExentosFIngresoApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1658397392896210CjtoVis_1ICtjoVis_1';
        dsItem.name = 'numcontrato';
        dsItem.field = 'numcontrato';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_ContratosExentosFIngreso_ds_DS_ContratosExentosFIngreso_item_Clas_1658397392896210CjtoVis_1ICtjoVis_1',
            this.dsnumcontrato);
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
        accItem.idXML = 'Clas_1658397392896210AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_ContratosExentosFIngreso_act_A_ContratosExentosFIngreso_item_Clas_1658397392896210AccOfer_1ElemAcc_1',
            'Añadir contrato exento');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutgcrearcontexento;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1658397392896210AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_ContratosExentosFIngreso_act_A_ContratosExentosFIngreso_item_Clas_1658397392896210AccOfer_1ElemAcc_2',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutgdelcontratoexento;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1658397392896210AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_ContratosExentosFIngreso_act_A_ContratosExentosFIngreso_item_Clas_1658397392896210AccOfer_1ElemAcc_3',
            'Log Contratos exentos fecha ingreso');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Logcontratosexentosfingreso.name;
        accItem.targetUI = ModelConstants.Logcontratosexentosfingreso.piuulogcontratosexentosfingres;

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_ContratosExentosFIngreso', value: 'Num Contrato'});
        this.orderCriteria = 'OC_ContratosExentosFIngreso';
    }
}
