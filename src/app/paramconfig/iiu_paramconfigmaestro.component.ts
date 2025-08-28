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

/**
 * « Implements IIU IIU_ParamConfigMaestro of ParamConfig »
 */
export class ParamConfigIIUuParamConfigMaestroComponent extends AbstractIIU {

    /** Display Set elements */
    public dseCodigo: Field;
    public dseDescripcion: Field;
    public dseValor: Field;

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
        this.idXML = 'Clas_1431630118912680UIInst_1';
        this.className = ModelConstants.Paramconfig.name;
        this.classAlias = this.langMng.translateText('cls_ParamConfig',
            'Parámetro Conf.');
        this.supplementaryInfoAtt.push('descripcion');
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_ParamConfig_iiu_IIU_ParamConfigMaestro',
            'Parámetro');
        this.queryURL = '/api/ParamConfigApi/GetPopulationDynamic';

        this.dseCodigo = new Field(this.langMng);
        this.dseDescripcion = new Field(this.langMng);
        this.dseValor = new Field(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseCodigo.nameInRequest = 'codigo';
        this.dseCodigo.alias = this.langMng.translateText(
            'cls_ParamConfig_ds_DS_ParamConfig_IIUMaestro_item_Clas_1431630118912680CjtoVis_3ICtjoVis_1',
            'Código');
        this.dseCodigo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431630118912680CjtoVis_3ICtjoVis_1', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dseCodigo.enabled = false;
        this.dseCodigo.mandatory = false;
        this.dseCodigo.dataType = Field.dtString;
        this.dseCodigo.maxLength = 50;
        this.dseCodigo.assignCSS();
        this.fields.push(this.dseCodigo);

        this.dseDescripcion.nameInRequest = 'descripcion';
        this.dseDescripcion.alias = this.langMng.translateText(
            'cls_ParamConfig_ds_DS_ParamConfig_IIUMaestro_item_Clas_1431630118912680CjtoVis_3ICtjoVis_2',
            'Descripción');
        this.dseDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431630118912680CjtoVis_3ICtjoVis_2', ['Admin', 'SuperAdmin']);
        this.dseDescripcion.enabled = false;
        this.dseDescripcion.mandatory = false;
        this.dseDescripcion.dataType = Field.dtString;
        this.dseDescripcion.maxLength = 255;
        this.dseDescripcion.assignCSS();
        this.fields.push(this.dseDescripcion);

        this.dseValor.nameInRequest = 'valor';
        this.dseValor.alias = this.langMng.translateText(
            'cls_ParamConfig_ds_DS_ParamConfig_IIUMaestro_item_Clas_1431630118912680CjtoVis_3ICtjoVis_3',
            'Valor');
        this.dseValor.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431630118912680CjtoVis_3ICtjoVis_3', ['Admin', 'SuperAdmin']);
        this.dseValor.enabled = false;
        this.dseValor.mandatory = false;
        this.dseValor.dataType = Field.dtString;
        this.dseValor.maxLength = 999;
        this.dseValor.assignCSS();
        this.fields.push(this.dseValor);

    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431630118912680AccOfer_2ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_ParamConfig_act_A_ParamConfig_IIUMaestro_item_Clas_1431630118912680AccOfer_2ElemAcc_1',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Paramconfig.name;
        accItem.targetUI = ModelConstants.Paramconfig.siuutmodificar;
        this.actions.push(accItem);

    }
}
