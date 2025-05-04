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
 * « Implements PIU PIU_ReportesDominio of ReportesDominio »
 */
@Component({
    selector: 'imes-reportesdominio-piu-reportesdominio',
    templateUrl: './piu_reportesdominio.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportesDominioPIUuReportesDominioComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsplantillareportedtipo = 'Tipo';
    private readonly dsplantillareportedfechavigencia = 'Fecha vigencia';
    private readonly dsenviarauto = 'Enviar automáticamente';
    private readonly dsplantillareportedtitulo = 'Título';

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
        this.idXML = 'Clas_1623832395776730UIPobCl_1';
        this.className = ModelConstants.Reportesdominio.name;
        this.iuName = ModelConstants.Reportesdominio.piuureportesdominio;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.title = this.langMng.translateText('cls_ReportesDominio_piu_PIU_ReportesDominio',
            'Reportes');
        this.queryURL = '/api/ReportesDominioApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1623832395776730CjtoVis_1ICtjoVis_1';
        dsItem.name = 'plantillareporte.tipo';
        dsItem.field = 'plantillareporte-tipo';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_ReportesDominio_ds_DS_ReportesDominio_item_Clas_1623832395776730CjtoVis_1ICtjoVis_1',
            this.dsplantillareportedtipo);
        dsItem.agents = [ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_TIPOREPORTE;
        dsItem.linkIndex = 1;
        dsItem.linkIsAction = true;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1623832395776730CjtoVis_1ICtjoVis_3';
        dsItem.name = 'plantillareporte.fechavigencia';
        dsItem.field = 'plantillareporte-fechavigencia';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_ReportesDominio_ds_DS_ReportesDominio_item_Clas_1623832395776730CjtoVis_1ICtjoVis_3',
            this.dsplantillareportedfechavigencia);
        dsItem.agents = [ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1623832395776730CjtoVis_1ICtjoVis_4';
        dsItem.name = 'enviarauto';
        dsItem.field = 'enviarauto';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_ReportesDominio_ds_DS_ReportesDominio_item_Clas_1623832395776730CjtoVis_1ICtjoVis_4',
            this.dsenviarauto);
        dsItem.agents = [ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1623832395776730CjtoVis_1ICtjoVis_2';
        dsItem.name = 'plantillareporte.titulo';
        dsItem.field = 'plantillareporte-titulo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_ReportesDominio_ds_DS_ReportesDominio_item_Clas_1623832395776730CjtoVis_1ICtjoVis_2',
            this.dsplantillareportedtitulo);
        dsItem.agents = [ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1623832395776730AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_ReportesDominio_act_A_ReportesDominio_item_Clas_1623832395776730AccOfer_1ElemAcc_3',
            'Asociar reporte');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Dominio.name;
        accItem.targetUI = ModelConstants.Dominio.siuutaddreporte;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1623832395776730AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_ReportesDominio_act_A_ReportesDominio_item_Clas_1623832395776730AccOfer_1ElemAcc_1',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Reportesdominio.name;
        accItem.targetUI = ModelConstants.Reportesdominio.siuumodificar;

        accItem.showInDefault = false;
        accItem.styleClass = 'accEditGrid';
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1623832395776730AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_ReportesDominio_act_A_ReportesDominio_item_Clas_1623832395776730AccOfer_1ElemAcc_2',
            'Desasociar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Reportesdominio.name;
        accItem.targetUI = ModelConstants.Reportesdominio.siuueliminar;
        accItem.setShowInModalProperties('genericsiu',
            this.langMng.translateText(
            'cls_ReportesDominio_svc_eliminar',
            'Desasociar'));

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_ReportesDominio', value: 'Por tipo y fecha'});
        this.orderCriteria = 'OC_ReportesDominio';
    }
}
