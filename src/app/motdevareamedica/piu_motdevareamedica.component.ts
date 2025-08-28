import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_MotDevAreaMedica of MotDevAreaMedica »
 */
@Component({
    selector: 'imes-motdevareamedica-piu-motdevareamedica',
    templateUrl: './piu_motdevareamedica.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MotDevAreaMedicaPIUuMotDevAreaMedicaComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsid = 'Id';
    private readonly dsdescripcion = 'Descripción';

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
        this.idXML = 'Clas_1497629065216447UIPobCl_1';
        this.className = ModelConstants.Motdevareamedica.name;
        this.classAlias = this.langMng.translateText('cls_MotDevAreaMedica',
            'Motivo devolución');
        this.supplementaryInfoAtt.push('descripcion');
        this.iuName = ModelConstants.Motdevareamedica.piuumotdevareamedica;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_MotDevAreaMedica_piu_PIU_MotDevAreaMedica',
            'Motivos de devolución');
        this.queryURL = '/api/MotDevAreaMedicaApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1497629065216447CjtoVis_1ICtjoVis_1';
        dsItem.name = 'id';
        dsItem.field = 'id';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_MotDevAreaMedica_ds_DS_MotDevAreaMedica_item_Clas_1497629065216447CjtoVis_1ICtjoVis_1',
            this.dsid);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1497629065216447CjtoVis_1ICtjoVis_2';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_MotDevAreaMedica_ds_DS_MotDevAreaMedica_item_Clas_1497629065216447CjtoVis_1ICtjoVis_2',
            this.dsdescripcion);
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
        accItem.idXML = 'Clas_1497629065216447AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_MotDevAreaMedica_act_A_MotDevAreaMedica_item_Clas_1497629065216447AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Motdevareamedica.name;
        accItem.targetUI = ModelConstants.Motdevareamedica.siuucrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1497629065216447AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_MotDevAreaMedica_act_A_MotDevAreaMedica_item_Clas_1497629065216447AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Motdevareamedica.name;
        accItem.targetUI = ModelConstants.Motdevareamedica.siuumodificar;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1497629065216447AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_MotDevAreaMedica_act_A_MotDevAreaMedica_item_Clas_1497629065216447AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Motdevareamedica.name;
        accItem.targetUI = ModelConstants.Motdevareamedica.siuueliminar;

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
