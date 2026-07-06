import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType, OpenScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { PlantillaReporteFilterFuPlantillaReporte} from './filters/plantillareportefilterfuplantillareporte';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_PlantillaReporte of PlantillaReporte »
 */
@Component({
    selector: 'imes-plantillareporte-piu-plantillareporte',
    templateUrl: './piu_plantillareporte.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlantillaReportePIUuPlantillaReporteComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dstipo = 'Tipo';
    private readonly dstitulo = 'Título';
    private readonly dsfechavigencia = 'Fecha vigencia';
    private readonly dsnombrearchivopdf = 'Nombre fichero PDF';
    private readonly dsrutaarchivos = 'Ruta relativa';

    /** Filters */
    public f0: PlantillaReporteFilterFuPlantillaReporte;

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
        this.idXML = 'Clas_1623831347200006UIPobCl_1';
        this.className = ModelConstants.Plantillareporte.name;
        this.classAlias = this.langMng.translateText('cls_PlantillaReporte',
            'Plantilla reporte');
        this.supplementaryInfoAtt.push('titulo');
        this.iuName = ModelConstants.Plantillareporte.piuuplantillareporte;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_PlantillaReporte_piu_PIU_PlantillaReporte',
            'Reportes para solicitud');
        this.f0 = new PlantillaReporteFilterFuPlantillaReporte(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/PlantillaReporteApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1623831347200006CjtoVis_1ICtjoVis_1';
        dsItem.name = 'tipo';
        dsItem.field = 'tipo';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_PlantillaReporte_ds_DS_PlantillaReporte_item_Clas_1623831347200006CjtoVis_1ICtjoVis_1',
            this.dstipo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_TIPOREPORTE;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1623831347200006CjtoVis_1ICtjoVis_2';
        dsItem.name = 'titulo';
        dsItem.field = 'titulo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_PlantillaReporte_ds_DS_PlantillaReporte_item_Clas_1623831347200006CjtoVis_1ICtjoVis_2',
            this.dstitulo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1623831347200006CjtoVis_1ICtjoVis_3';
        dsItem.name = 'fechavigencia';
        dsItem.field = 'fechavigencia';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_PlantillaReporte_ds_DS_PlantillaReporte_item_Clas_1623831347200006CjtoVis_1ICtjoVis_3',
            this.dsfechavigencia);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1623831347200006CjtoVis_1ICtjoVis_5';
        dsItem.name = 'nombrearchivopdf';
        dsItem.field = 'nombrearchivopdf';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_PlantillaReporte_ds_DS_PlantillaReporte_item_Clas_1623831347200006CjtoVis_1ICtjoVis_5',
            this.dsnombrearchivopdf);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1623831347200006CjtoVis_1ICtjoVis_4';
        dsItem.name = 'rutaarchivos';
        dsItem.field = 'rutaarchivos';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 255;
        dsItem.alias = this.langMng.translateText(
            'cls_PlantillaReporte_ds_DS_PlantillaReporte_item_Clas_1623831347200006CjtoVis_1ICtjoVis_4',
            this.dsrutaarchivos);
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
        accItem.idXML = 'Clas_1623831347200006AccOfer_1ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_PlantillaReporte_act_A_PlantillaReporte_item_Clas_1623831347200006AccOfer_1ElemAcc_4',
            'Nuevo');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutgaddplantrep;
        accItem.setShowInModalProperties('imes-gs-siu-tgaddplantrep',
            this.langMng.translateText(
            'gs_TGADDPLANTREP',
            'Nuevo'));
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1623831347200006AccOfer_1ElemAcc_5';
        accItem.alias = this.langMng.translateText(
            'cls_PlantillaReporte_act_A_PlantillaReporte_item_Clas_1623831347200006AccOfer_1ElemAcc_5',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutgeditplantrep;
        accItem.setShowInModalProperties('imes-gs-siu-tgeditplantrep',
            this.langMng.translateText(
            'gs_TGEDITPLANTREP',
            'Modificar'));
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1623831347200006AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_PlantillaReporte_act_A_PlantillaReporte_item_Clas_1623831347200006AccOfer_1ElemAcc_3',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Plantillareporte.name;
        accItem.targetUI = ModelConstants.Plantillareporte.siuueliminar;
        accItem.setShowInModalProperties('genericsiu',
            this.langMng.translateText(
            'cls_PlantillaReporte_svc_eliminar',
            'Eliminar'));
        accItem.targetType  = ScenarioType.Delete;
        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_PlantillaReporte', value: 'Por tipo y fecha'});
        this.orderCriteria = 'OC_PlantillaReporte';
    }
}
