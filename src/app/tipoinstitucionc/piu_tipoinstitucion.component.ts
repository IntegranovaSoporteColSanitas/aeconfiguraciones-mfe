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

@Component({
    selector: 'imes-tipoinstitucionc-piu-tipoinstitucion',
    templateUrl: './piu_tipoinstitucion.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipoInstitucionCPIUuTipoInstitucionComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dscodigo = 'Código';
    private readonly dsnombre = 'Nombre';

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
        this.idXML = 'Clas_1431947444224120UIPobCl_2';
        this.className = ModelConstants.Tipoinstitucionc.name;
        this.iuName = ModelConstants.Tipoinstitucionc.piuutipoinstitucion;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_TipoInstitucionC_piu_PIU_TipoInstitucion',
            'Tipos de institución');
        this.queryURL = '/api/TipoInstitucionCApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431947444224120CjtoVis_AutoICtjoVis_1';
        dsItem.name = 'codigo';
        dsItem.field = 'codigo';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoInstitucionC_ds__Auto__item_Clas_1431947444224120CjtoVis_AutoICtjoVis_1',
            this.dscodigo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431947444224120CjtoVis_AutoICtjoVis_2';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoInstitucionC_ds__Auto__item_Clas_1431947444224120CjtoVis_AutoICtjoVis_2',
            this.dsnombre);
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
        accItem.idXML = 'Clas_1431947444224120AccOfer_2ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_TipoInstitucionC_act_A_TipoInstitucion_PIU_item_Clas_1431947444224120AccOfer_2ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Tipoinstitucionc.name;
        accItem.targetUI = ModelConstants.Tipoinstitucionc.siuucrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431947444224120AccOfer_2ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_TipoInstitucionC_act_A_TipoInstitucion_PIU_item_Clas_1431947444224120AccOfer_2ElemAcc_4',
            'Sincronizar');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutgsinctiposinstitucion;
        accItem.setNoShowProperties('TGSINCTIPOSINSTITUCION', '', '', false);

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431947444224120AccOfer_2ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_TipoInstitucionC_act_A_TipoInstitucion_PIU_item_Clas_1431947444224120AccOfer_2ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Tipoinstitucionc.name;
        accItem.targetUI = ModelConstants.Tipoinstitucionc.siuueliminar;
        accItem.setNoShowProperties('eliminar', 'p_thistipoinstitucion_oid', '', false);

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
