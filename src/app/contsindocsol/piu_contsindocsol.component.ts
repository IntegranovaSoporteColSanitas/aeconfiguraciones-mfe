import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { ContSinDocSolFilterFuContSinDocSolNumContrato} from './filters/contsindocsolfilterfucontsindocsolnumcontrato';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
    selector: 'imes-contsindocsol-piu-contsindocsol',
    templateUrl: './piu_contsindocsol.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContSinDocSolPIUuContSinDocSolComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsnumcontrato = 'Nº Contrato';

    /** Filters */
    public f0: ContSinDocSolFilterFuContSinDocSolNumContrato;

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
        this.idXML = 'Clas_1517844955136648UIPobCl_1';
        this.className = ModelConstants.Contsindocsol.name;
        this.iuName = ModelConstants.Contsindocsol.piuucontsindocsol;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_ContSinDocSol_piu_PIU_ContSinDocSol',
            'Contratos exentos doc. Solicitud');
        this.f0 = new ContSinDocSolFilterFuContSinDocSolNumContrato(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/ContSinDocSolApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1517844955136648CjtoVis_1ICtjoVis_1';
        dsItem.name = 'numcontrato';
        dsItem.field = 'numcontrato';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_ContSinDocSol_ds_DS_ContSinDocSol_item_Clas_1517844955136648CjtoVis_1ICtjoVis_1',
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
        accItem.idXML = 'Clas_1517844955136648AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_ContSinDocSol_act_A_ContSinDocSol_item_Clas_1517844955136648AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Contsindocsol.name;
        accItem.targetUI = ModelConstants.Contsindocsol.siuucrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1517844955136648AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_ContSinDocSol_act_A_ContSinDocSol_item_Clas_1517844955136648AccOfer_1ElemAcc_2',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutdelcontsindocsol;

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_ContSinDocSol', value: 'Por Nº Contrato'});
        this.orderCriteria = 'OC_ContSinDocSol';
    }
}
