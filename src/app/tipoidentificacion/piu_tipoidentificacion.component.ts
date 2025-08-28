import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_TipoIdentificacion of TipoIdentificacion »
 */
@Component({
    selector: 'imes-tipoidentificacion-piu-tipoidentificacion',
    templateUrl: './piu_tipoidentificacion.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipoIdentificacionPIUuTipoIdentificacionComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dscodigo = 'Código';
    private readonly dsdescripcion = 'Descripción';
    private readonly dsnombrecorto = 'Nombre corto';
    private readonly dsvalidocontratante = 'Válido contratante';
    private readonly dsvalidotitular = 'Válido titular';
    private readonly dsdiplomatico = 'Diplomático';
    private readonly dsnit = 'NIT';
    private readonly dshijode = 'Hijo de';
    private readonly dsrequiereeps = 'Requiere EPS';
    private readonly dsmenorsinidentificar = 'Menor sin identificar';
    private readonly dsespasaporte = 'Es Pasaporte';
    private readonly dsvisiblevalidadorusu = 'Visible en validador de usuarios';

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
        this.idXML = 'Clas_1431942201344066UIPobCl_1';
        this.className = ModelConstants.Tipoidentificacion.name;
        this.classAlias = this.langMng.translateText('cls_TipoIdentificacion',
            'Tipo identificación');
        this.supplementaryInfoAtt.push('nombrecorto');
        this.supplementaryInfoAtt.push('descripcion');
        this.iuName = ModelConstants.Tipoidentificacion.piuutipoidentificacion;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_TipoIdentificacion_piu_PIU_TipoIdentificacion',
            'Tipos de identificación');
        this.queryURL = '/api/TipoIdentificacionApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431942201344066CjtoVis_AutoICtjoVis_1';
        dsItem.name = 'codigo';
        dsItem.field = 'codigo';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_ds__Auto__item_Clas_1431942201344066CjtoVis_AutoICtjoVis_1',
            this.dscodigo);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431942201344066CjtoVis_AutoICtjoVis_2';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_ds__Auto__item_Clas_1431942201344066CjtoVis_AutoICtjoVis_2',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431942201344066CjtoVis_AutoICtjoVis_3';
        dsItem.name = 'nombrecorto';
        dsItem.field = 'nombrecorto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_ds__Auto__item_Clas_1431942201344066CjtoVis_AutoICtjoVis_3',
            this.dsnombrecorto);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431942201344066CjtoVis_AutoICtjoVis_4';
        dsItem.name = 'validocontratante';
        dsItem.field = 'validocontratante';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_ds__Auto__item_Clas_1431942201344066CjtoVis_AutoICtjoVis_4',
            this.dsvalidocontratante);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431942201344066CjtoVis_AutoICtjoVis_5';
        dsItem.name = 'validotitular';
        dsItem.field = 'validotitular';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_ds__Auto__item_Clas_1431942201344066CjtoVis_AutoICtjoVis_5',
            this.dsvalidotitular);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431942201344066CjtoVis_AutoICtjoVis_6';
        dsItem.name = 'diplomatico';
        dsItem.field = 'diplomatico';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_ds__Auto__item_Clas_1431942201344066CjtoVis_AutoICtjoVis_6',
            this.dsdiplomatico);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431942201344066CjtoVis_AutoICtjoVis_7';
        dsItem.name = 'nit';
        dsItem.field = 'nit';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_ds__Auto__item_Clas_1431942201344066CjtoVis_AutoICtjoVis_7',
            this.dsnit);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431942201344066CjtoVis_AutoICtjoVis_8';
        dsItem.name = 'hijode';
        dsItem.field = 'hijode';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_ds__Auto__item_Clas_1431942201344066CjtoVis_AutoICtjoVis_8',
            this.dshijode);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431942201344066CjtoVis_AutoICtjoVis_9';
        dsItem.name = 'requiereeps';
        dsItem.field = 'requiereeps';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_ds__Auto__item_Clas_1431942201344066CjtoVis_AutoICtjoVis_9',
            this.dsrequiereeps);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431942201344066CjtoVis_AutoICtjoVis_10';
        dsItem.name = 'menorsinidentificar';
        dsItem.field = 'menorsinidentificar';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_ds__Auto__item_Clas_1431942201344066CjtoVis_AutoICtjoVis_10',
            this.dsmenorsinidentificar);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431942201344066CjtoVis_AutoICtjoVis_11';
        dsItem.name = 'espasaporte';
        dsItem.field = 'espasaporte';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_ds__Auto__item_Clas_1431942201344066CjtoVis_AutoICtjoVis_11',
            this.dsespasaporte);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431942201344066CjtoVis_AutoICtjoVis_12';
        dsItem.name = 'visiblevalidadorusu';
        dsItem.field = 'visiblevalidadorusu';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_ds__Auto__item_Clas_1431942201344066CjtoVis_AutoICtjoVis_12',
            this.dsvisiblevalidadorusu);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431942201344066AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_act_A_TipoIdentificacion_PIU_item_Clas_1431942201344066AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Tipoidentificacion.name;
        accItem.targetUI = ModelConstants.Tipoidentificacion.siuucrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431942201344066AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_act_A_TipoIdentificacion_PIU_item_Clas_1431942201344066AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Tipoidentificacion.name;
        accItem.targetUI = ModelConstants.Tipoidentificacion.siuumodificar;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431942201344066AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_act_A_TipoIdentificacion_PIU_item_Clas_1431942201344066AccOfer_1ElemAcc_3',
            'Sincronizar');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutgsinctiposidentificacion;
        accItem.setNoShowProperties('TGSINCTIPOSIDENTIFICACION', '', '', false);

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1431942201344066AccOfer_1ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_TipoIdentificacion_act_A_TipoIdentificacion_PIU_item_Clas_1431942201344066AccOfer_1ElemAcc_4',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Tipoidentificacion.name;
        accItem.targetUI = ModelConstants.Tipoidentificacion.siuueliminar;
        accItem.setNoShowProperties('eliminar', 'p_thistipoidentificacion_json', '', false);

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
