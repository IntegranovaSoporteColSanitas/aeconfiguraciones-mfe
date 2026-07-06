import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType, OpenScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_PlantillaEmail of PlantillaEmail »
 */
@Component({
    selector: 'imes-plantillaemail-piu-plantillaemail',
    templateUrl: './piu_plantillaemail.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlantillaEmailPIUuPlantillaEmailComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsidplantilla = 'Id.';
    private readonly dscodigo = 'Código';
    private readonly dsdescripcion = 'Descripción';
    private readonly dsasunto = 'Asunto';
    private readonly dsemailconf = 'Email confirmación';
    private readonly dstextomensaje = 'Texto mensaje';

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
        this.idXML = 'Clas_1431708631040445UIPobCl_1';
        this.className = ModelConstants.Plantillaemail.name;
        this.classAlias = this.langMng.translateText('cls_PlantillaEmail',
            'Plantilla email');
        this.supplementaryInfoAtt.push('descripcion');
        this.iuName = ModelConstants.Plantillaemail.piuuplantillaemail;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_PlantillaEmail_piu_PIU_PlantillaEmail',
            'Plantillas notificaciones (email/sms)');
        this.queryURL = '/api/PlantillaEmailApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431708631040445CjtoVis_3ICtjoVis_5';
        dsItem.name = 'idplantilla';
        dsItem.field = 'idplantilla';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_PlantillaEmail_ds_DS_PlantillaEmail_item_Clas_1431708631040445CjtoVis_3ICtjoVis_5',
            this.dsidplantilla);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431708631040445CjtoVis_3ICtjoVis_2';
        dsItem.name = 'codigo';
        dsItem.field = 'codigo';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_PlantillaEmail_ds_DS_PlantillaEmail_item_Clas_1431708631040445CjtoVis_3ICtjoVis_2',
            this.dscodigo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_PLANTILLASEMAIL;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431708631040445CjtoVis_3ICtjoVis_3';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 255;
        dsItem.alias = this.langMng.translateText(
            'cls_PlantillaEmail_ds_DS_PlantillaEmail_item_Clas_1431708631040445CjtoVis_3ICtjoVis_3',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431708631040445CjtoVis_3ICtjoVis_1';
        dsItem.name = 'asunto';
        dsItem.field = 'asunto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 255;
        dsItem.alias = this.langMng.translateText(
            'cls_PlantillaEmail_ds_DS_PlantillaEmail_item_Clas_1431708631040445CjtoVis_3ICtjoVis_1',
            this.dsasunto);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431708631040445CjtoVis_3ICtjoVis_4';
        dsItem.name = 'emailconf';
        dsItem.field = 'emailconf';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_PlantillaEmail_ds_DS_PlantillaEmail_item_Clas_1431708631040445CjtoVis_3ICtjoVis_4',
            this.dsemailconf);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431708631040445CjtoVis_3ICtjoVis_6';
        dsItem.name = 'textomensaje';
        dsItem.field = 'textomensaje';
        dsItem.type = Field.dtText;
        dsItem.alias = this.langMng.translateText(
            'cls_PlantillaEmail_ds_DS_PlantillaEmail_item_Clas_1431708631040445CjtoVis_3ICtjoVis_6',
            this.dstextomensaje);
        dsItem.styleClass = 'HTML';
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
        accItem.idXML = 'Clas_1431708631040445AccOfer_1ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_PlantillaEmail_act_A_PlantillaEmail_PIU_item_Clas_1431708631040445AccOfer_1ElemAcc_4',
            'Crear plantilla');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Plantillaemail.name;
        accItem.targetUI = ModelConstants.Plantillaemail.siuutnew;
        accItem.targetType  = ScenarioType.Create;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431708631040445AccOfer_1ElemAcc_5';
        accItem.alias = this.langMng.translateText(
            'cls_PlantillaEmail_act_A_PlantillaEmail_PIU_item_Clas_1431708631040445AccOfer_1ElemAcc_5',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Plantillaemail.name;
        accItem.targetUI = ModelConstants.Plantillaemail.siuudummymodificar;
        accItem.setNoShowProperties('dummyModificar', 'p_thisplantillaemail_oid', '', false);
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431708631040445AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_PlantillaEmail_act_A_PlantillaEmail_PIU_item_Clas_1431708631040445AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Plantillaemail.name;
        accItem.targetUI = ModelConstants.Plantillaemail.siuueliminar;
        accItem.setNoShowProperties('eliminar', 'p_thisplantillasemail_oid', '', false);
        accItem.targetType  = ScenarioType.Delete;
        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
