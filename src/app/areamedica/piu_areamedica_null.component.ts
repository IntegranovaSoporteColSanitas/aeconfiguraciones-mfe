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
 * « Implements PIU PIU_AreaMedica_Null of AreaMedica »
 */
@Component({
    selector: 'imes-areamedica-piu-areamedica-null',
    templateUrl: './piu_areamedica_null.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaMedicaPIUuAreaMedicauNullComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsid = 'Id';

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
        this.idXML = 'Clas_1434549485568029UIPobCl_1';
        this.className = ModelConstants.Areamedica.name;
        this.classAlias = this.langMng.translateText('cls_AreaMedica',
            'Área médica');
        this.supplementaryInfoAtt.push('primernombre');
        this.supplementaryInfoAtt.push('segundonombre');
        this.supplementaryInfoAtt.push('primerapellido');
        this.supplementaryInfoAtt.push('segundoapellido');
        this.iuName = ModelConstants.Areamedica.piuuareamedicaunull;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_AreaMedica_piu_PIU_AreaMedica_Null',
            'Área médica');
        this.queryURL = '/api/AreaMedicaApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_2ICtjoVis_1';
        dsItem.name = 'id';
        dsItem.field = 'id';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds_DS_AreaMedica_Null_item_Clas_1434549485568029CjtoVis_2ICtjoVis_1',
            this.dsid);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
