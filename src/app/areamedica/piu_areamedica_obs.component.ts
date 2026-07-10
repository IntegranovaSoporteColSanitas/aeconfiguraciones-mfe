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
 * « Implements PIU PIU_AreaMedica_Obs of AreaMedica »
 */
@Component({
    selector: 'imes-areamedica-piu-areamedica-obs',
    templateUrl: './piu_areamedica_obs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaMedicaPIUuAreaMedicauObsComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsusuario = 'Usuario';
    private readonly dsprimerapellido = 'Primer apellido';
    private readonly dssegundoapellido = 'Segundo apellido';
    private readonly dsprimernombre = 'Primer nombre';
    private readonly dssegundonombre = 'Segundo nombre';

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
        this.idXML = 'Clas_1434549485568029UIPobCl_2';
        this.className = ModelConstants.Areamedica.name;
        this.classAlias = this.langMng.translateText('cls_AreaMedica',
            'Área médica');
        this.supplementaryInfoAtt.push('primernombre');
        this.supplementaryInfoAtt.push('segundonombre');
        this.supplementaryInfoAtt.push('primerapellido');
        this.supplementaryInfoAtt.push('segundoapellido');
        this.iuName = ModelConstants.Areamedica.piuuareamedicauobs;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_AreaMedica_piu_PIU_AreaMedica_Obs',
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
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_3ICtjoVis_5';
        dsItem.name = 'usuario';
        dsItem.field = 'usuario';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds_DS_AreaMedica_item_Clas_1434549485568029CjtoVis_3ICtjoVis_5',
            this.dsusuario);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_3ICtjoVis_1';
        dsItem.name = 'primerapellido';
        dsItem.field = 'primerapellido';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds_DS_AreaMedica_item_Clas_1434549485568029CjtoVis_3ICtjoVis_1',
            this.dsprimerapellido);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_3ICtjoVis_3';
        dsItem.name = 'segundoapellido';
        dsItem.field = 'segundoapellido';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds_DS_AreaMedica_item_Clas_1434549485568029CjtoVis_3ICtjoVis_3',
            this.dssegundoapellido);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_3ICtjoVis_2';
        dsItem.name = 'primernombre';
        dsItem.field = 'primernombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds_DS_AreaMedica_item_Clas_1434549485568029CjtoVis_3ICtjoVis_2',
            this.dsprimernombre);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_3ICtjoVis_4';
        dsItem.name = 'segundonombre';
        dsItem.field = 'segundonombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds_DS_AreaMedica_item_Clas_1434549485568029CjtoVis_3ICtjoVis_4',
            this.dssegundonombre);
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
