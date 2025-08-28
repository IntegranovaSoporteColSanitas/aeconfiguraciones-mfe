import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_LogGruposUsuarios of LogGruposUsuarios »
 */
@Component({
    selector: 'imes-loggruposusuarios-piu-loggruposusuarios',
    templateUrl: './piu_loggruposusuarios.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogGruposUsuariosPIUuLogGruposUsuariosComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsfecha = 'Fecha';
    private readonly dsloginfuncionario = 'Login';
    private readonly dstipogrupo = 'Tipo Grupo';
    private readonly dsaccion = 'Acción';
    private readonly dsgrupo = 'Grupo';

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
        this.idXML = 'Clas_1586851217408583UIPobCl_1';
        this.className = ModelConstants.Loggruposusuarios.name;
        this.classAlias = this.langMng.translateText('cls_LogGruposUsuarios',
            'Historico Grupos');
        this.iuName = ModelConstants.Loggruposusuarios.piuuloggruposusuarios;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_LogGruposUsuarios_piu_PIU_LogGruposUsuarios',
            'Historico Grupos');
        this.queryURL = '/api/LogGruposUsuariosApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1586851217408583CjtoVis_1ICtjoVis_2';
        dsItem.name = 'fecha';
        dsItem.field = 'fecha';
        dsItem.type = Field.dtDatetime;
        dsItem.alias = this.langMng.translateText(
            'cls_LogGruposUsuarios_ds_DS_LogGruposUsuarios_item_Clas_1586851217408583CjtoVis_1ICtjoVis_2',
            this.dsfecha);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586851217408583CjtoVis_1ICtjoVis_5';
        dsItem.name = 'loginfuncionario';
        dsItem.field = 'loginfuncionario';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_LogGruposUsuarios_ds_DS_LogGruposUsuarios_item_Clas_1586851217408583CjtoVis_1ICtjoVis_5',
            this.dsloginfuncionario);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586851217408583CjtoVis_1ICtjoVis_6';
        dsItem.name = 'tipogrupo';
        dsItem.field = 'tipogrupo';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_LogGruposUsuarios_ds_DS_LogGruposUsuarios_item_Clas_1586851217408583CjtoVis_1ICtjoVis_6',
            this.dstipogrupo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_TIPOGRUPOASIGNACION;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586851217408583CjtoVis_1ICtjoVis_1';
        dsItem.name = 'accion';
        dsItem.field = 'accion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_LogGruposUsuarios_ds_DS_LogGruposUsuarios_item_Clas_1586851217408583CjtoVis_1ICtjoVis_1',
            this.dsaccion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586851217408583CjtoVis_1ICtjoVis_3';
        dsItem.name = 'grupo';
        dsItem.field = 'grupo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_LogGruposUsuarios_ds_DS_LogGruposUsuarios_item_Clas_1586851217408583CjtoVis_1ICtjoVis_3',
            this.dsgrupo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_LogGruposUsuarios', value: 'Por Fecha'});
        this.orderCriteria = 'OC_LogGruposUsuarios';
    }
}
