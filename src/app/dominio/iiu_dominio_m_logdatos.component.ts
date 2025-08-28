import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field } from '../common/baseIUElements';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements IIU IIU_Dominio_M_LogDatos of Dominio »
 */
export class DominioIIUuDominiouMuLogDatosComponent extends AbstractIIU {

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
        this.idXML = 'Clas_1431701422080423UIInst_9';
        this.className = ModelConstants.Dominio.name;
        this.classAlias = this.langMng.translateText('cls_Dominio',
            'Dominio');
        this.supplementaryInfoAtt.push('productot.descripcion');
        this.supplementaryInfoAtt.push('plant.nombre');
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Dominio_iiu_IIU_Dominio_M_LogDatos',
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
}
