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
 * « Implements IIU IIU_ReportesProcAlm of ReportesProcAlm »
 */
export class ReportesProcAlmIIUuReportesProcAlmComponent extends AbstractIIU {

    /** Display Set elements */
    public dseNombreProc: Field;
    public dseNombreFichero: Field;
    public dseDescripcion: Field;

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
        this.idXML = 'Clas_1547029184512775UIInst_1';
        this.className = ModelConstants.Reportesprocalm.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_ReportesProcAlm_iiu_IIU_ReportesProcAlm',
            'Info Reporte');
        this.queryURL = '/api/ReportesProcAlmApi/GetPopulationDynamic';

        this.dseNombreProc = new Field(this.langMng);
        this.dseNombreFichero = new Field(this.langMng);
        this.dseDescripcion = new Field(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseNombreProc.nameInRequest = 'nombreproc';
        this.dseNombreProc.alias = this.langMng.translateText(
            'cls_ReportesProcAlm_ds_DS_M_MD_item_Clas_1547029184512775CjtoVis_3ICtjoVis_2',
            'Nombre procedimiento');
        this.dseNombreProc.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1547029184512775CjtoVis_3ICtjoVis_2', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dseNombreProc.enabled = false;
        this.dseNombreProc.mandatory = false;
        this.dseNombreProc.dataType = Field.dtString;
        this.dseNombreProc.maxLength = 200;
        this.dseNombreProc.assignCSS();
        this.fields.push(this.dseNombreProc);

        this.dseNombreFichero.nameInRequest = 'nombrefichero';
        this.dseNombreFichero.alias = this.langMng.translateText(
            'cls_ReportesProcAlm_ds_DS_M_MD_item_Clas_1547029184512775CjtoVis_3ICtjoVis_3',
            'Nombre fichero');
        this.dseNombreFichero.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1547029184512775CjtoVis_3ICtjoVis_3', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dseNombreFichero.enabled = false;
        this.dseNombreFichero.mandatory = false;
        this.dseNombreFichero.dataType = Field.dtString;
        this.dseNombreFichero.maxLength = 200;
        this.dseNombreFichero.assignCSS();
        this.fields.push(this.dseNombreFichero);

        this.dseDescripcion.nameInRequest = 'descripcion';
        this.dseDescripcion.alias = this.langMng.translateText(
            'cls_ReportesProcAlm_ds_DS_M_MD_item_Clas_1547029184512775CjtoVis_3ICtjoVis_1',
            'Descripción');
        this.dseDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1547029184512775CjtoVis_3ICtjoVis_1', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dseDescripcion.enabled = false;
        this.dseDescripcion.mandatory = false;
        this.dseDescripcion.dataType = Field.dtString;
        this.dseDescripcion.maxLength = 50;
        this.dseDescripcion.assignCSS();
        this.fields.push(this.dseDescripcion);

    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1547029184512775AccOfer_2ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_ReportesProcAlm_act_A_ReportesProcAlm_M_MD_item_Clas_1547029184512775AccOfer_2ElemAcc_1',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Reportesprocalm.name;
        accItem.targetUI = ModelConstants.Reportesprocalm.siuumodificar;
        this.actions.push(accItem);

    }
}
