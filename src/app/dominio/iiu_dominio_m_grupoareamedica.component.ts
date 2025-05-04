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
 * « Implements IIU IIU_Dominio_M_GrupoAreaMedica of Dominio »
 */
export class DominioIIUuDominiouMuGrupoAreaMedicaComponent extends AbstractIIU {

    /** Display Set elements */
    public dseGrupoAreaMedicaNombre: Field;
    public dseGrupoAreaMedicaDescripcion: Field;

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
        this.idXML = 'Clas_1431701422080423UIInst_6';
        this.className = ModelConstants.Dominio.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Dominio_iiu_IIU_Dominio_M_GrupoAreaMedica',
            'Área Médica');
        this.queryURL = '/api/DominioApi/GetPopulationDynamic';

        this.dseGrupoAreaMedicaNombre = new Field(this.langMng);
        this.dseGrupoAreaMedicaDescripcion = new Field(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseGrupoAreaMedicaNombre.nameInRequest = 'grupoareamedica.nombre';
        this.dseGrupoAreaMedicaNombre.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_M_GrupoAreaMedica_item_Clas_1431701422080423CjtoVis_8ICtjoVis_1',
            'Nombre');
        this.dseGrupoAreaMedicaNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_8ICtjoVis_1', ['Admin', 'SuperAdmin']);
        this.dseGrupoAreaMedicaNombre.enabled = false;
        this.dseGrupoAreaMedicaNombre.mandatory = false;
        this.dseGrupoAreaMedicaNombre.dataType = Field.dtString;
        this.dseGrupoAreaMedicaNombre.maxLength = 50;
        this.dseGrupoAreaMedicaNombre.assignCSS();
        this.fields.push(this.dseGrupoAreaMedicaNombre);

        this.dseGrupoAreaMedicaDescripcion.nameInRequest = 'grupoareamedica.descripcion';
        this.dseGrupoAreaMedicaDescripcion.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_M_GrupoAreaMedica_item_Clas_1431701422080423CjtoVis_8ICtjoVis_2',
            'Descripción');
        this.dseGrupoAreaMedicaDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_8ICtjoVis_2', ['Admin', 'SuperAdmin']);
        this.dseGrupoAreaMedicaDescripcion.enabled = false;
        this.dseGrupoAreaMedicaDescripcion.mandatory = false;
        this.dseGrupoAreaMedicaDescripcion.dataType = Field.dtString;
        this.dseGrupoAreaMedicaDescripcion.maxLength = 150;
        this.dseGrupoAreaMedicaDescripcion.assignCSS();
        this.fields.push(this.dseGrupoAreaMedicaDescripcion);

    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431701422080423AccOfer_7ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Dominio_act_A_Dominio_M_GrupoAreaMedica_item_Clas_1431701422080423AccOfer_7ElemAcc_1',
            'Asignar Grupo');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Dominio.name;
        accItem.targetUI = ModelConstants.Dominio.siuutaddgrpmedico;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431701422080423AccOfer_7ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Dominio_act_A_Dominio_M_GrupoAreaMedica_item_Clas_1431701422080423AccOfer_7ElemAcc_2',
            'Eliminar Grupo');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Dominio.name;
        accItem.targetUI = ModelConstants.Dominio.siuutdelgrpmedico;
        this.actions.push(accItem);

    }
}
