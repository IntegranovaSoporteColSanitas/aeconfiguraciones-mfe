import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field, FieldDefinedSelection } from '../common/baseIUElements';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements IIU IIU_ConfiguracionANS of ConfiguracionANS »
 */
@Component({
    selector: 'imes-configuracionans-iiu-configuracionans',
    templateUrl: './iiu_configuracionans.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfiguracionANSIIUuConfiguracionANSComponent extends AbstractIIU implements OnInit {

    /** Display Set elements */
    public dseDominioProductoTDescripcion: Field;
    public dseDominioPlanTNombre: Field;
    public dseTramite: FieldDefinedSelection;
    public dseNovedadNombre: Field;
    public dseCausalNombre: Field;
    public dseHabilLunes: FieldDefinedSelection;
    public dseHabilMartes: FieldDefinedSelection;
    public dseHabilMiercoles: FieldDefinedSelection;
    public dseHabilJueves: FieldDefinedSelection;
    public dseHabilViernes: FieldDefinedSelection;
    public dseHabilSabado: FieldDefinedSelection;
    public dseHabilDomingo: FieldDefinedSelection;
    public dseANSAfiliaciones: Field;
    public dseANSAreaMedica: Field;

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
        this.idXML = 'Clas_1586859868160432UIInst_1';
        this.className = ModelConstants.Configuracionans.name;
        this.classAlias = this.langMng.translateText('cls_ConfiguracionANS',
            'Acuerdo nivel de servicio');
        this.iuName = ModelConstants.Configuracionans.iiuuconfiguracionans;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_ConfiguracionANS_iiu_IIU_ConfiguracionANS',
            'Detalles de Acuerdo nivel de servicio');
        this.queryURL = '/api/ConfiguracionANSApi/GetPopulationDynamic';

        this.dseDominioProductoTDescripcion = new Field(this.langMng);
        this.dseDominioPlanTNombre = new Field(this.langMng);
        this.dseTramite = new FieldDefinedSelection(this.langMng);
        this.dseNovedadNombre = new Field(this.langMng);
        this.dseCausalNombre = new Field(this.langMng);
        this.dseHabilLunes = new FieldDefinedSelection(this.langMng);
        this.dseHabilMartes = new FieldDefinedSelection(this.langMng);
        this.dseHabilMiercoles = new FieldDefinedSelection(this.langMng);
        this.dseHabilJueves = new FieldDefinedSelection(this.langMng);
        this.dseHabilViernes = new FieldDefinedSelection(this.langMng);
        this.dseHabilSabado = new FieldDefinedSelection(this.langMng);
        this.dseHabilDomingo = new FieldDefinedSelection(this.langMng);
        this.dseANSAfiliaciones = new Field(this.langMng);
        this.dseANSAreaMedica = new Field(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseDominioProductoTDescripcion.nameInRequest = 'dominio.productot.descripcion';
        this.dseDominioProductoTDescripcion.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_ds_DS_ConfiguracionANS_Detalle_item_Clas_1586859868160432CjtoVis_2ICtjoVis_13',
            'Producto');
        this.dseDominioProductoTDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1586859868160432CjtoVis_2ICtjoVis_13', ['Admin', 'SuperAdmin']);
        this.dseDominioProductoTDescripcion.enabled = false;
        this.dseDominioProductoTDescripcion.mandatory = false;
        this.dseDominioProductoTDescripcion.dataType = Field.dtString;
        this.dseDominioProductoTDescripcion.maxLength = 100;
        this.dseDominioProductoTDescripcion.assignCSS();
        this.fields.push(this.dseDominioProductoTDescripcion);

        this.dseDominioPlanTNombre.nameInRequest = 'dominio.plant.nombre';
        this.dseDominioPlanTNombre.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_ds_DS_ConfiguracionANS_Detalle_item_Clas_1586859868160432CjtoVis_2ICtjoVis_14',
            'Plan');
        this.dseDominioPlanTNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1586859868160432CjtoVis_2ICtjoVis_14', ['Admin', 'SuperAdmin']);
        this.dseDominioPlanTNombre.enabled = false;
        this.dseDominioPlanTNombre.mandatory = false;
        this.dseDominioPlanTNombre.dataType = Field.dtString;
        this.dseDominioPlanTNombre.maxLength = 150;
        this.dseDominioPlanTNombre.assignCSS();
        this.fields.push(this.dseDominioPlanTNombre);

        this.dseTramite.nameInRequest = 'tramite';
        this.dseTramite.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_ds_DS_ConfiguracionANS_Detalle_item_Clas_1586859868160432CjtoVis_2ICtjoVis_12',
            'Trámite');
        this.dseTramite.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1586859868160432CjtoVis_2ICtjoVis_12', ['Admin', 'SuperAdmin']);
        this.dseTramite.enabled = false;
        this.dseTramite.mandatory = false;
        this.dseTramite.dataType = Field.dtNat;
        this.dseTramite.options = DefinedSelections.DS_TRAMITECONFANS;
        this.dseTramite.assignCSS();
        this.fields.push(this.dseTramite);

        this.dseNovedadNombre.nameInRequest = 'novedad.nombre';
        this.dseNovedadNombre.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_ds_DS_ConfiguracionANS_Detalle_item_Clas_1586859868160432CjtoVis_2ICtjoVis_15',
            'Novedad');
        this.dseNovedadNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1586859868160432CjtoVis_2ICtjoVis_15', ['Admin', 'SuperAdmin']);
        this.dseNovedadNombre.enabled = false;
        this.dseNovedadNombre.mandatory = false;
        this.dseNovedadNombre.dataType = Field.dtString;
        this.dseNovedadNombre.maxLength = 50;
        this.dseNovedadNombre.assignCSS();
        this.fields.push(this.dseNovedadNombre);

        this.dseCausalNombre.nameInRequest = 'causal.nombre';
        this.dseCausalNombre.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_ds_DS_ConfiguracionANS_Detalle_item_Clas_1586859868160432CjtoVis_2ICtjoVis_16',
            'Causal');
        this.dseCausalNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1586859868160432CjtoVis_2ICtjoVis_16', ['Admin', 'SuperAdmin']);
        this.dseCausalNombre.enabled = false;
        this.dseCausalNombre.mandatory = false;
        this.dseCausalNombre.dataType = Field.dtString;
        this.dseCausalNombre.maxLength = 50;
        this.dseCausalNombre.assignCSS();
        this.fields.push(this.dseCausalNombre);

        this.dseHabilLunes.nameInRequest = 'habillunes';
        this.dseHabilLunes.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_ds_DS_ConfiguracionANS_Detalle_item_Clas_1586859868160432CjtoVis_2ICtjoVis_6',
            'Lunes');
        this.dseHabilLunes.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1586859868160432CjtoVis_2ICtjoVis_6', ['Admin', 'SuperAdmin']);
        this.dseHabilLunes.enabled = false;
        this.dseHabilLunes.mandatory = false;
        this.dseHabilLunes.dataType = Field.dtBool;
        this.dseHabilLunes.options = DefinedSelections.DS_SINO;
        this.dseHabilLunes.assignCSS();
        this.fields.push(this.dseHabilLunes);

        this.dseHabilMartes.nameInRequest = 'habilmartes';
        this.dseHabilMartes.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_ds_DS_ConfiguracionANS_Detalle_item_Clas_1586859868160432CjtoVis_2ICtjoVis_7',
            'Martes');
        this.dseHabilMartes.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1586859868160432CjtoVis_2ICtjoVis_7', ['Admin', 'SuperAdmin']);
        this.dseHabilMartes.enabled = false;
        this.dseHabilMartes.mandatory = false;
        this.dseHabilMartes.dataType = Field.dtBool;
        this.dseHabilMartes.options = DefinedSelections.DS_SINO;
        this.dseHabilMartes.assignCSS();
        this.fields.push(this.dseHabilMartes);

        this.dseHabilMiercoles.nameInRequest = 'habilmiercoles';
        this.dseHabilMiercoles.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_ds_DS_ConfiguracionANS_Detalle_item_Clas_1586859868160432CjtoVis_2ICtjoVis_8',
            'Miércoles');
        this.dseHabilMiercoles.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1586859868160432CjtoVis_2ICtjoVis_8', ['Admin', 'SuperAdmin']);
        this.dseHabilMiercoles.enabled = false;
        this.dseHabilMiercoles.mandatory = false;
        this.dseHabilMiercoles.dataType = Field.dtBool;
        this.dseHabilMiercoles.options = DefinedSelections.DS_SINO;
        this.dseHabilMiercoles.assignCSS();
        this.fields.push(this.dseHabilMiercoles);

        this.dseHabilJueves.nameInRequest = 'habiljueves';
        this.dseHabilJueves.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_ds_DS_ConfiguracionANS_Detalle_item_Clas_1586859868160432CjtoVis_2ICtjoVis_5',
            'Jueves');
        this.dseHabilJueves.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1586859868160432CjtoVis_2ICtjoVis_5', ['Admin', 'SuperAdmin']);
        this.dseHabilJueves.enabled = false;
        this.dseHabilJueves.mandatory = false;
        this.dseHabilJueves.dataType = Field.dtBool;
        this.dseHabilJueves.options = DefinedSelections.DS_SINO;
        this.dseHabilJueves.assignCSS();
        this.fields.push(this.dseHabilJueves);

        this.dseHabilViernes.nameInRequest = 'habilviernes';
        this.dseHabilViernes.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_ds_DS_ConfiguracionANS_Detalle_item_Clas_1586859868160432CjtoVis_2ICtjoVis_10',
            'Viernes');
        this.dseHabilViernes.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1586859868160432CjtoVis_2ICtjoVis_10', ['Admin', 'SuperAdmin']);
        this.dseHabilViernes.enabled = false;
        this.dseHabilViernes.mandatory = false;
        this.dseHabilViernes.dataType = Field.dtBool;
        this.dseHabilViernes.options = DefinedSelections.DS_SINO;
        this.dseHabilViernes.assignCSS();
        this.fields.push(this.dseHabilViernes);

        this.dseHabilSabado.nameInRequest = 'habilsabado';
        this.dseHabilSabado.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_ds_DS_ConfiguracionANS_Detalle_item_Clas_1586859868160432CjtoVis_2ICtjoVis_9',
            'Sábado');
        this.dseHabilSabado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1586859868160432CjtoVis_2ICtjoVis_9', ['Admin', 'SuperAdmin']);
        this.dseHabilSabado.enabled = false;
        this.dseHabilSabado.mandatory = false;
        this.dseHabilSabado.dataType = Field.dtBool;
        this.dseHabilSabado.options = DefinedSelections.DS_SINO;
        this.dseHabilSabado.assignCSS();
        this.fields.push(this.dseHabilSabado);

        this.dseHabilDomingo.nameInRequest = 'habildomingo';
        this.dseHabilDomingo.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_ds_DS_ConfiguracionANS_Detalle_item_Clas_1586859868160432CjtoVis_2ICtjoVis_4',
            'Domingo');
        this.dseHabilDomingo.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1586859868160432CjtoVis_2ICtjoVis_4', ['Admin', 'SuperAdmin']);
        this.dseHabilDomingo.enabled = false;
        this.dseHabilDomingo.mandatory = false;
        this.dseHabilDomingo.dataType = Field.dtBool;
        this.dseHabilDomingo.options = DefinedSelections.DS_SINO;
        this.dseHabilDomingo.assignCSS();
        this.fields.push(this.dseHabilDomingo);

        this.dseANSAfiliaciones.nameInRequest = 'ansafiliaciones';
        this.dseANSAfiliaciones.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_ds_DS_ConfiguracionANS_Detalle_item_Clas_1586859868160432CjtoVis_2ICtjoVis_1',
            'ANS Afiliaciones');
        this.dseANSAfiliaciones.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1586859868160432CjtoVis_2ICtjoVis_1', ['Admin', 'SuperAdmin']);
        this.dseANSAfiliaciones.enabled = false;
        this.dseANSAfiliaciones.mandatory = false;
        this.dseANSAfiliaciones.dataType = Field.dtNat;
        this.dseANSAfiliaciones.assignCSS();
        this.fields.push(this.dseANSAfiliaciones);

        this.dseANSAreaMedica.nameInRequest = 'ansareamedica';
        this.dseANSAreaMedica.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_ds_DS_ConfiguracionANS_Detalle_item_Clas_1586859868160432CjtoVis_2ICtjoVis_2',
            'ANS Área Médica');
        this.dseANSAreaMedica.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1586859868160432CjtoVis_2ICtjoVis_2', ['Admin', 'SuperAdmin']);
        this.dseANSAreaMedica.enabled = false;
        this.dseANSAreaMedica.mandatory = false;
        this.dseANSAreaMedica.dataType = Field.dtNat;
        this.dseANSAreaMedica.assignCSS();
        this.fields.push(this.dseANSAreaMedica);

    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1586859868160432AccOfer_2ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_ConfiguracionANS_act_A_ConfiguracionANS_IIU_item_Clas_1586859868160432AccOfer_2ElemAcc_1',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Configuracionans.name;
        accItem.targetUI = ModelConstants.Configuracionans.siuutmodificar;
        this.actions.push(accItem);

    }
}
