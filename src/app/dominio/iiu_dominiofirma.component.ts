import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field, FieldBlob } from '../common/baseIUElements';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

export class DominioIIUuDominioFirmaComponent extends AbstractIIU {

    /** Display Set elements */
    public dseRespClauNombre: Field;
    public dseRespClauCelula: Field;
    public dseRespClauExpCelula: Field;
    public dseRespClauCargo: Field;
    public dseRespClauFirma: FieldBlob;

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
        this.idXML = 'Clas_1431701422080423UIInst_3';
        this.className = ModelConstants.Dominio.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Dominio_iiu_IIU_DominioFirma',
            'Responsable clausulado plan voluntario');
        this.queryURL = '/api/DominioApi/GetPopulationDynamic';

        this.dseRespClauNombre = new Field(this.langMng);
        this.dseRespClauCelula = new Field(this.langMng);
        this.dseRespClauExpCelula = new Field(this.langMng);
        this.dseRespClauCargo = new Field(this.langMng);
        this.dseRespClauFirma = new FieldBlob(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseRespClauNombre.nameInRequest = 'respclaunombre';
        this.dseRespClauNombre.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_FirmaRespClausulado_item_Clas_1431701422080423CjtoVis_5ICtjoVis_1',
            'Nombre');
        this.dseRespClauNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_5ICtjoVis_1', ['Admin', 'SuperAdmin']);
        this.dseRespClauNombre.enabled = false;
        this.dseRespClauNombre.mandatory = false;
        this.dseRespClauNombre.dataType = Field.dtString;
        this.dseRespClauNombre.maxLength = 100;
        this.dseRespClauNombre.assignCSS();
        this.fields.push(this.dseRespClauNombre);

        this.dseRespClauCelula.nameInRequest = 'respclaucelula';
        this.dseRespClauCelula.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_FirmaRespClausulado_item_Clas_1431701422080423CjtoVis_5ICtjoVis_2',
            'Nº de célula de ciudadanía');
        this.dseRespClauCelula.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_5ICtjoVis_2', ['Admin', 'SuperAdmin']);
        this.dseRespClauCelula.enabled = false;
        this.dseRespClauCelula.mandatory = false;
        this.dseRespClauCelula.dataType = Field.dtString;
        this.dseRespClauCelula.maxLength = 15;
        this.dseRespClauCelula.assignCSS();
        this.fields.push(this.dseRespClauCelula);

        this.dseRespClauExpCelula.nameInRequest = 'respclauexpcelula';
        this.dseRespClauExpCelula.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_FirmaRespClausulado_item_Clas_1431701422080423CjtoVis_5ICtjoVis_3',
            'Lugar de expedición');
        this.dseRespClauExpCelula.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_5ICtjoVis_3', ['Admin', 'SuperAdmin']);
        this.dseRespClauExpCelula.enabled = false;
        this.dseRespClauExpCelula.mandatory = false;
        this.dseRespClauExpCelula.dataType = Field.dtString;
        this.dseRespClauExpCelula.maxLength = 50;
        this.dseRespClauExpCelula.assignCSS();
        this.fields.push(this.dseRespClauExpCelula);

        this.dseRespClauCargo.nameInRequest = 'respclaucargo';
        this.dseRespClauCargo.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_FirmaRespClausulado_item_Clas_1431701422080423CjtoVis_5ICtjoVis_4',
            'Cargo');
        this.dseRespClauCargo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_5ICtjoVis_4', ['Admin', 'SuperAdmin']);
        this.dseRespClauCargo.enabled = false;
        this.dseRespClauCargo.mandatory = false;
        this.dseRespClauCargo.dataType = Field.dtString;
        this.dseRespClauCargo.maxLength = 50;
        this.dseRespClauCargo.assignCSS();
        this.fields.push(this.dseRespClauCargo);

        this.dseRespClauFirma.nameInRequest = 'respclaufirma';
        this.dseRespClauFirma.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_Dominio_FirmaRespClausulado_item_Clas_1431701422080423CjtoVis_5ICtjoVis_5',
            'Firma');
        this.dseRespClauFirma.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431701422080423CjtoVis_5ICtjoVis_5', ['Admin', 'SuperAdmin']);
        this.dseRespClauFirma.enabled = false;
        this.dseRespClauFirma.mandatory = false;
        this.dseRespClauFirma.dataType = Field.dtBlob;
        this.dseRespClauFirma.assignCSS();
        this.fields.push(this.dseRespClauFirma);

    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431701422080423AccOfer_4ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Dominio_act_A_Dominio_FirmaClausulado_item_Clas_1431701422080423AccOfer_4ElemAcc_1',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Dominio.name;
        accItem.targetUI = ModelConstants.Dominio.siuumoddatosrespfirma;
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['plant.esvoluntario'] });
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431701422080423AccOfer_4ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Dominio_act_A_Dominio_FirmaClausulado_item_Clas_1431701422080423AccOfer_4ElemAcc_2',
            'Asignar imagen firma');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Dominio.name;
        accItem.targetUI = ModelConstants.Dominio.siuumodimagenfirma;
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['plant.esvoluntario'] });
        this.actions.push(accItem);

    }

    /**
     * Evaluate in advance the associated service preconditions to the action element
     * @param actionId Action element identification
     * @param rows Rows to be check
     */
    public override checkPreconditionInAdvanceForRows(actionId: number, rows: any[]): boolean {
        let isEnabled = true;
        for (const row of rows) {
            if (actionId === 0) {
                isEnabled = this.checkPrecondicionInAdvanceNum0(row);
            }
            if (actionId === 1) {
                isEnabled = this.checkPrecondicionInAdvanceNum1(row);
            }
        }
        return isEnabled;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 0
     * @param row Instance data
     */
    private checkPrecondicionInAdvanceNum0(row: any): boolean {
        // PlanT.EsVoluntario = true
        if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'plant-esvoluntario')), true))) {
            return false;
        }
        return true;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 1
     * @param row Instance data
     */
    private checkPrecondicionInAdvanceNum1(row: any): boolean {
        // PlanT.EsVoluntario = true
        if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'plant-esvoluntario')), true))) {
            return false;
        }
        return true;
    }
}
