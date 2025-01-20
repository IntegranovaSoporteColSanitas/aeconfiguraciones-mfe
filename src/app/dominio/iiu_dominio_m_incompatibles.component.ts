import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field } from '../common/baseIUElements';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

export class DominioIIUuDominiouMuIncompatiblesComponent extends AbstractIIU {

    /** Display Set elements */
    public dseProductoTDescripcion: Field;
    public dsePlanTNombre: Field;

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
        public langMng: LanguageMng, public stdFun: StandardFunctions,
        public override condNavMng: ConditionalNavigationMng) {
        super(appGlobalInfo, util, changeDetectorRef, condNavMng);
        this.idXML = 'Clas_1431701422080423UIInst_8';
        this.className = ModelConstants.Dominio.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Dominio_iiu_IIU_Dominio_M_Incompatibles',
            'Dominio');
        this.queryURL = '/api/DominioApi/GetPopulationDynamic';

        this.dseProductoTDescripcion = new Field(this.langMng);
        this.dsePlanTNombre = new Field(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseProductoTDescripcion.nameInRequest = 'productot.descripcion';
        this.dseProductoTDescripcion.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_M_Log_item_Clas_1431701422080423CjtoVis_11ICtjoVis_1',
            'Producto');
        this.dseProductoTDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_11ICtjoVis_1', ['Admin', 'SuperAdmin']);
        this.dseProductoTDescripcion.enabled = false;
        this.dseProductoTDescripcion.mandatory = false;
        this.dseProductoTDescripcion.dataType = Field.dtString;
        this.dseProductoTDescripcion.maxLength = 100;
        this.dseProductoTDescripcion.assignCSS();
        this.fields.push(this.dseProductoTDescripcion);

        this.dsePlanTNombre.nameInRequest = 'plant.nombre';
        this.dsePlanTNombre.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_M_Log_item_Clas_1431701422080423CjtoVis_11ICtjoVis_2',
            'Plan');
        this.dsePlanTNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_11ICtjoVis_2', ['Admin', 'SuperAdmin']);
        this.dsePlanTNombre.enabled = false;
        this.dsePlanTNombre.mandatory = false;
        this.dsePlanTNombre.dataType = Field.dtString;
        this.dsePlanTNombre.maxLength = 150;
        this.dsePlanTNombre.assignCSS();
        this.fields.push(this.dsePlanTNombre);

    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431701422080423AccOfer_10ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Dominio_act_A_Dominio_M_Incompatibles_item_Clas_1431701422080423AccOfer_10ElemAcc_1',
            'Asociar incompatible');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Dominio.name;
        accItem.targetUI = ModelConstants.Dominio.siuutinsincompatible;
        this.actions.push(accItem);

    }

    /**
     * Initialize the navigation items
     */
    public override initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1431701422080423NavOfer_2ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_Dominio_nav_N_Dominio_M_Incompatibles_item_Clas_1431701422080423NavOfer_2ElemNav_1',
            'Log modificaciones Incompatibles');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        navItem.targetClass = ModelConstants.Logincompatibilidades.name;
        navItem.targetUI = ModelConstants.Logincompatibilidades.piuulogincompatibilidades;
        navItem.rolePath = 'Dominio';
        this.navigations.push(navItem);

    }
}
