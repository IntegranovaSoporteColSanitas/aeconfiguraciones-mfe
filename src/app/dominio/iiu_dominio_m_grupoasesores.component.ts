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

export class DominioIIUuDominiouMuGrupoAsesoresComponent extends AbstractIIU {

    /** Display Set elements */
    public dseGrupoAsesoresId: Field;
    public dseGrupoAsesoresNombre: Field;
    public dseGrupoAsesoresDescripcion: Field;

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
        this.idXML = 'Clas_1431701422080423UIInst_5';
        this.className = ModelConstants.Dominio.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Dominio_iiu_IIU_Dominio_M_GrupoAsesores',
            'Grupo Asesores');
        this.queryURL = '/api/DominioApi/GetPopulationDynamic';

        this.dseGrupoAsesoresId = new Field(this.langMng);
        this.dseGrupoAsesoresNombre = new Field(this.langMng);
        this.dseGrupoAsesoresDescripcion = new Field(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseGrupoAsesoresId.nameInRequest = 'grupoasesores.id';
        this.dseGrupoAsesoresId.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_M_GrupoAsesores_item_Clas_1431701422080423CjtoVis_7ICtjoVis_3',
            'Id.');
        this.dseGrupoAsesoresId.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_7ICtjoVis_3', ['Admin', 'SuperAdmin']);
        this.dseGrupoAsesoresId.enabled = false;
        this.dseGrupoAsesoresId.mandatory = false;
        this.dseGrupoAsesoresId.dataType = Field.dtAuto;
        this.dseGrupoAsesoresId.assignCSS();
        this.fields.push(this.dseGrupoAsesoresId);

        this.dseGrupoAsesoresNombre.nameInRequest = 'grupoasesores.nombre';
        this.dseGrupoAsesoresNombre.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_M_GrupoAsesores_item_Clas_1431701422080423CjtoVis_7ICtjoVis_1',
            'Nombre');
        this.dseGrupoAsesoresNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_7ICtjoVis_1', ['Admin', 'SuperAdmin']);
        this.dseGrupoAsesoresNombre.enabled = false;
        this.dseGrupoAsesoresNombre.mandatory = false;
        this.dseGrupoAsesoresNombre.dataType = Field.dtString;
        this.dseGrupoAsesoresNombre.maxLength = 50;
        this.dseGrupoAsesoresNombre.assignCSS();
        this.fields.push(this.dseGrupoAsesoresNombre);

        this.dseGrupoAsesoresDescripcion.nameInRequest = 'grupoasesores.descripcion';
        this.dseGrupoAsesoresDescripcion.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_M_GrupoAsesores_item_Clas_1431701422080423CjtoVis_7ICtjoVis_2',
            'Descripción');
        this.dseGrupoAsesoresDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_7ICtjoVis_2', ['Admin', 'SuperAdmin']);
        this.dseGrupoAsesoresDescripcion.enabled = false;
        this.dseGrupoAsesoresDescripcion.mandatory = false;
        this.dseGrupoAsesoresDescripcion.dataType = Field.dtString;
        this.dseGrupoAsesoresDescripcion.maxLength = 150;
        this.dseGrupoAsesoresDescripcion.assignCSS();
        this.fields.push(this.dseGrupoAsesoresDescripcion);

    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431701422080423AccOfer_6ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Dominio_act_A_Dominio_M_GrupoAsesores_item_Clas_1431701422080423AccOfer_6ElemAcc_1',
            'Asignar/Modificar Grupo');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Dominio.name;
        accItem.targetUI = ModelConstants.Dominio.siuutaddgrpasesores;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431701422080423AccOfer_6ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Dominio_act_A_Dominio_M_GrupoAsesores_item_Clas_1431701422080423AccOfer_6ElemAcc_2',
            'Eliminar Grupo');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Dominio.name;
        accItem.targetUI = ModelConstants.Dominio.siuutdelgrpasesores;
        this.actions.push(accItem);

    }
}
