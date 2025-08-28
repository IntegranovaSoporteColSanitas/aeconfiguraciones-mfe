import { ChangeDetectorRef } from '@angular/core';
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
 * « Implements PIU PIU_RolDetDominio of Rol »
 */
export class RolPIUuRolDetDominioComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsidentificador = 'Identificador';
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
        this.idXML = 'Clas_1431700897792807UIPobCl_2';
        this.className = ModelConstants.Rol.name;
        this.classAlias = this.langMng.translateText('cls_Rol',
            'Rol');
        this.supplementaryInfoAtt.push('nombre');
        this.iuName = 'PIU_RolDetDominio';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Rol_piu_PIU_RolDetDominio',
            'Roles');
        this.queryURL = '/api/RolApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431700897792807CjtoVis_AutoICtjoVis_1';
        dsItem.name = 'identificador';
        dsItem.field = 'identificador';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_Rol_ds__Auto__item_Clas_1431700897792807CjtoVis_AutoICtjoVis_1',
            this.dsidentificador);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431700897792807CjtoVis_AutoICtjoVis_2';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Rol_ds__Auto__item_Clas_1431700897792807CjtoVis_AutoICtjoVis_2',
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
        accItem.idXML = 'Clas_1431700897792807AccOfer_2ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Rol_act_A_Rol_PIUDetDominio_item_Clas_1431700897792807AccOfer_2ElemAcc_1',
            'Dar permisos al rol');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Dominio.name;
        accItem.targetUI = ModelConstants.Dominio.siuuinsroldominio;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431700897792807AccOfer_2ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Rol_act_A_Rol_PIUDetDominio_item_Clas_1431700897792807AccOfer_2ElemAcc_2',
            'Quitar permisos al rol');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Dominio.name;
        accItem.targetUI = ModelConstants.Dominio.siuudelrolldominio;

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
