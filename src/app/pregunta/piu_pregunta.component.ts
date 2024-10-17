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

@Component({
    selector: 'imes-pregunta-piu-pregunta',
    templateUrl: './piu_pregunta.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreguntaPIUuPreguntaComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsnumero = 'Número';
    private readonly dsnumorden = 'Nº orden';
    private readonly dsdescripcion = 'Descripción';
    private readonly dsvalorsnobliga = 'Si/No Obligatorio';
    private readonly dsobsoblig = 'Obs. Obligatoria';
    private readonly dsesnumero = 'Es número';
    private readonly dsvalormax = 'Valor máximo';
    private readonly dsvalormin = 'Valor mínimo';
    private readonly dssolohombres = 'Solo hombres';
    private readonly dssolomujeres = 'Solo mujeres';
    private readonly dsrespmultiple = 'Resp. múltiple';
    private readonly dsdrvvaloresposibles = 'Valores posibles';
    private readonly dsseenviaalcore = 'Se envía al CORE';
    private readonly dscondicionedad = 'Condicionada por edad';
    private readonly dscondicionedadanyos = 'Condicionada por edad';

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
        this.idXML = 'Clas_1431633788928040UIPobCl_1';
        this.className = ModelConstants.Pregunta.name;
        this.iuName = ModelConstants.Pregunta.piuupregunta;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Pregunta_piu_PIU_Pregunta',
            'Preguntas');
        this.queryURL = '/api/PreguntaApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431633788928040CjtoVis_AutoICtjoVis_1';
        dsItem.name = 'numero';
        dsItem.field = 'numero';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_Pregunta_ds__Auto__item_Clas_1431633788928040CjtoVis_AutoICtjoVis_1',
            this.dsnumero);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431633788928040CjtoVis_AutoICtjoVis_2';
        dsItem.name = 'numorden';
        dsItem.field = 'numorden';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_Pregunta_ds__Auto__item_Clas_1431633788928040CjtoVis_AutoICtjoVis_2',
            this.dsnumorden);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431633788928040CjtoVis_AutoICtjoVis_3';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 255;
        dsItem.alias = this.langMng.translateText(
            'cls_Pregunta_ds__Auto__item_Clas_1431633788928040CjtoVis_AutoICtjoVis_3',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431633788928040CjtoVis_AutoICtjoVis_4';
        dsItem.name = 'valorsnobliga';
        dsItem.field = 'valorsnobliga';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Pregunta_ds__Auto__item_Clas_1431633788928040CjtoVis_AutoICtjoVis_4',
            this.dsvalorsnobliga);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431633788928040CjtoVis_AutoICtjoVis_5';
        dsItem.name = 'obsoblig';
        dsItem.field = 'obsoblig';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Pregunta_ds__Auto__item_Clas_1431633788928040CjtoVis_AutoICtjoVis_5',
            this.dsobsoblig);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431633788928040CjtoVis_AutoICtjoVis_6';
        dsItem.name = 'esnumero';
        dsItem.field = 'esnumero';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Pregunta_ds__Auto__item_Clas_1431633788928040CjtoVis_AutoICtjoVis_6',
            this.dsesnumero);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431633788928040CjtoVis_AutoICtjoVis_7';
        dsItem.name = 'valormax';
        dsItem.field = 'valormax';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_Pregunta_ds__Auto__item_Clas_1431633788928040CjtoVis_AutoICtjoVis_7',
            this.dsvalormax);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431633788928040CjtoVis_AutoICtjoVis_8';
        dsItem.name = 'valormin';
        dsItem.field = 'valormin';
        dsItem.type = Field.dtReal;
        dsItem.alias = this.langMng.translateText(
            'cls_Pregunta_ds__Auto__item_Clas_1431633788928040CjtoVis_AutoICtjoVis_8',
            this.dsvalormin);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431633788928040CjtoVis_AutoICtjoVis_9';
        dsItem.name = 'solohombres';
        dsItem.field = 'solohombres';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Pregunta_ds__Auto__item_Clas_1431633788928040CjtoVis_AutoICtjoVis_9',
            this.dssolohombres);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431633788928040CjtoVis_AutoICtjoVis_10';
        dsItem.name = 'solomujeres';
        dsItem.field = 'solomujeres';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Pregunta_ds__Auto__item_Clas_1431633788928040CjtoVis_AutoICtjoVis_10',
            this.dssolomujeres);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431633788928040CjtoVis_AutoICtjoVis_11';
        dsItem.name = 'respmultiple';
        dsItem.field = 'respmultiple';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Pregunta_ds__Auto__item_Clas_1431633788928040CjtoVis_AutoICtjoVis_11',
            this.dsrespmultiple);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431633788928040CjtoVis_AutoICtjoVis_12';
        dsItem.name = 'drvvaloresposibles';
        dsItem.field = 'drvvaloresposibles';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 255;
        dsItem.alias = this.langMng.translateText(
            'cls_Pregunta_ds__Auto__item_Clas_1431633788928040CjtoVis_AutoICtjoVis_12',
            this.dsdrvvaloresposibles);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431633788928040CjtoVis_AutoICtjoVis_13';
        dsItem.name = 'seenviaalcore';
        dsItem.field = 'seenviaalcore';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Pregunta_ds__Auto__item_Clas_1431633788928040CjtoVis_AutoICtjoVis_13',
            this.dsseenviaalcore);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431633788928040CjtoVis_AutoICtjoVis_14';
        dsItem.name = 'condicionedad';
        dsItem.field = 'condicionedad';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_Pregunta_ds__Auto__item_Clas_1431633788928040CjtoVis_AutoICtjoVis_14',
            this.dscondicionedad);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_CONDICIONADAEDAD;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431633788928040CjtoVis_AutoICtjoVis_15';
        dsItem.name = 'condicionedadanyos';
        dsItem.field = 'condicionedadanyos';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_Pregunta_ds__Auto__item_Clas_1431633788928040CjtoVis_AutoICtjoVis_15',
            this.dscondicionedadanyos);
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
        accItem.idXML = 'Clas_1431633788928040AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Pregunta_act_A_Pregunta_PIU_item_Clas_1431633788928040AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Pregunta.name;
        accItem.targetUI = ModelConstants.Pregunta.siuutcrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431633788928040AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Pregunta_act_A_Pregunta_PIU_item_Clas_1431633788928040AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Pregunta.name;
        accItem.targetUI = ModelConstants.Pregunta.siuutmodificar;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431633788928040AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Pregunta_act_A_Pregunta_PIU_item_Clas_1431633788928040AccOfer_1ElemAcc_3',
            'Añadir posible valor');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Pregunta.name;
        accItem.targetUI = ModelConstants.Pregunta.siuuinsvalorpregunta;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1431633788928040AccOfer_1ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_Pregunta_act_A_Pregunta_PIU_item_Clas_1431633788928040AccOfer_1ElemAcc_4',
            'Quitar posible valor');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Pregunta.name;
        accItem.targetUI = ModelConstants.Pregunta.siuudelvalorpregunta;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 4;
        accItem.idXML = 'Clas_1431633788928040AccOfer_1ElemAcc_6';
        accItem.alias = this.langMng.translateText(
            'cls_Pregunta_act_A_Pregunta_PIU_item_Clas_1431633788928040AccOfer_1ElemAcc_6',
            'Ver detalle');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Pregunta.name;
        accItem.targetUI = ModelConstants.Pregunta.iiuupregunta;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 5;
        accItem.idXML = 'Clas_1431633788928040AccOfer_1ElemAcc_5';
        accItem.alias = this.langMng.translateText(
            'cls_Pregunta_act_A_Pregunta_PIU_item_Clas_1431633788928040AccOfer_1ElemAcc_5',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Pregunta.name;
        accItem.targetUI = ModelConstants.Pregunta.siuuteliminar;
        accItem.setNoShowProperties('TELIMINAR', 'p_thispregunta_oid', '', false);

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
