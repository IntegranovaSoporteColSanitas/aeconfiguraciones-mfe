import { ChangeDetectorRef } from '@angular/core';
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
 * « Implements PIU PIU_Funcionario_D_Dominio of Funcionario »
 */
export class FuncionarioPIUuFuncionariouDuDominioComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsroldnombre = 'Rol';
    private readonly dsdrvnombrecompleto = 'Nombre completo';
    private readonly dsusuarioldap = 'Usuario LDAP';

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
        this.idXML = 'Clas_1431626842112800UIPobCl_4';
        this.className = ModelConstants.Funcionario.name;
        this.classAlias = this.langMng.translateText('cls_Funcionario',
            'Usuario');
        this.supplementaryInfoAtt.push('primernombre');
        this.supplementaryInfoAtt.push('segundonombre');
        this.supplementaryInfoAtt.push('primerapellido');
        this.supplementaryInfoAtt.push('segundoapellido');
        this.iuName = 'PIU_Funcionario_D_Dominio';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Funcionario']));
        this.title = this.langMng.translateText('cls_Funcionario_piu_PIU_Funcionario_D_Dominio',
            'Usuarios');
        this.queryURL = '/api/FuncionarioApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431626842112800CjtoVis_4ICtjoVis_1';
        dsItem.name = 'rol.nombre';
        dsItem.field = 'rol-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Funcionario_ds_DS_Funcionario_D_Grupo_item_Clas_1431626842112800CjtoVis_4ICtjoVis_1',
            this.dsroldnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431626842112800CjtoVis_4ICtjoVis_2';
        dsItem.name = 'drvnombrecompleto';
        dsItem.field = 'drvnombrecompleto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 255;
        dsItem.alias = this.langMng.translateText(
            'cls_Funcionario_ds_DS_Funcionario_D_Grupo_item_Clas_1431626842112800CjtoVis_4ICtjoVis_2',
            this.dsdrvnombrecompleto);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431626842112800CjtoVis_4ICtjoVis_3';
        dsItem.name = 'usuarioldap';
        dsItem.field = 'usuarioldap';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Funcionario_ds_DS_Funcionario_D_Grupo_item_Clas_1431626842112800CjtoVis_4ICtjoVis_3',
            this.dsusuarioldap);
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
