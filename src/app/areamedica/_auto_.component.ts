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

@Component({
    selector: 'imes-areamedica-iiu-auto',
    templateUrl: './_auto_.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaMedicaUAutouComponent extends AbstractIIU implements OnInit {

    /** Display Set elements */
    public dseUsuario: Field;
    public dsePrimerNombre: Field;
    public dseSegundoNombre: Field;
    public dsePrimerApellido: Field;
    public dseSegundoApellido: Field;
    public dsedrvNombreCompleto: Field;
    public dseUsuarioLDAP: Field;
    public dseEmail: Field;
    public dseCodJefe: Field;
    public dseId: Field;
    public dseManual: FieldDefinedSelection;
    public dsedrvNomJefe: Field;
    public dsedrvNomAgencia: Field;
    public dseDisponible: FieldDefinedSelection;
    public dseNumSolNoTerminadas: Field;
    public dsedrvEsAsesorIntegral: FieldDefinedSelection;
    public dsedrvEsAfiliacion: FieldDefinedSelection;

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
        this.idXML = 'Clas_1434549485568029UIInst_0';
        this.className = ModelConstants.Areamedica.name;
        this.iuName = ModelConstants.Areamedica.uautou;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_AreaMedica_iiu__Auto_',
            'Área médica');
        this.queryURL = '/api/AreaMedicaApi/GetPopulationDynamic';

        this.dseUsuario = new Field(this.langMng);
        this.dsePrimerNombre = new Field(this.langMng);
        this.dseSegundoNombre = new Field(this.langMng);
        this.dsePrimerApellido = new Field(this.langMng);
        this.dseSegundoApellido = new Field(this.langMng);
        this.dsedrvNombreCompleto = new Field(this.langMng);
        this.dseUsuarioLDAP = new Field(this.langMng);
        this.dseEmail = new Field(this.langMng);
        this.dseCodJefe = new Field(this.langMng);
        this.dseId = new Field(this.langMng);
        this.dseManual = new FieldDefinedSelection(this.langMng);
        this.dsedrvNomJefe = new Field(this.langMng);
        this.dsedrvNomAgencia = new Field(this.langMng);
        this.dseDisponible = new FieldDefinedSelection(this.langMng);
        this.dseNumSolNoTerminadas = new Field(this.langMng);
        this.dsedrvEsAsesorIntegral = new FieldDefinedSelection(this.langMng);
        this.dsedrvEsAfiliacion = new FieldDefinedSelection(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseUsuario.nameInRequest = 'usuario';
        this.dseUsuario.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_1',
            'Usuario');
        this.dseUsuario.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434549485568029CjtoVis_AutoICtjoVis_1', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dseUsuario.enabled = false;
        this.dseUsuario.mandatory = false;
        this.dseUsuario.dataType = Field.dtString;
        this.dseUsuario.maxLength = 20;
        this.dseUsuario.assignCSS();
        this.fields.push(this.dseUsuario);

        this.dsePrimerNombre.nameInRequest = 'primernombre';
        this.dsePrimerNombre.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_2',
            'Primer nombre');
        this.dsePrimerNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434549485568029CjtoVis_AutoICtjoVis_2', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dsePrimerNombre.enabled = false;
        this.dsePrimerNombre.mandatory = false;
        this.dsePrimerNombre.dataType = Field.dtString;
        this.dsePrimerNombre.maxLength = 50;
        this.dsePrimerNombre.assignCSS();
        this.fields.push(this.dsePrimerNombre);

        this.dseSegundoNombre.nameInRequest = 'segundonombre';
        this.dseSegundoNombre.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_3',
            'Segundo nombre');
        this.dseSegundoNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434549485568029CjtoVis_AutoICtjoVis_3', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dseSegundoNombre.enabled = false;
        this.dseSegundoNombre.mandatory = false;
        this.dseSegundoNombre.dataType = Field.dtString;
        this.dseSegundoNombre.maxLength = 50;
        this.dseSegundoNombre.assignCSS();
        this.fields.push(this.dseSegundoNombre);

        this.dsePrimerApellido.nameInRequest = 'primerapellido';
        this.dsePrimerApellido.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_4',
            'Primer apellido');
        this.dsePrimerApellido.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434549485568029CjtoVis_AutoICtjoVis_4', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dsePrimerApellido.enabled = false;
        this.dsePrimerApellido.mandatory = false;
        this.dsePrimerApellido.dataType = Field.dtString;
        this.dsePrimerApellido.maxLength = 50;
        this.dsePrimerApellido.assignCSS();
        this.fields.push(this.dsePrimerApellido);

        this.dseSegundoApellido.nameInRequest = 'segundoapellido';
        this.dseSegundoApellido.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_5',
            'Segundo apellido');
        this.dseSegundoApellido.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434549485568029CjtoVis_AutoICtjoVis_5', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dseSegundoApellido.enabled = false;
        this.dseSegundoApellido.mandatory = false;
        this.dseSegundoApellido.dataType = Field.dtString;
        this.dseSegundoApellido.maxLength = 50;
        this.dseSegundoApellido.assignCSS();
        this.fields.push(this.dseSegundoApellido);

        this.dsedrvNombreCompleto.nameInRequest = 'drvnombrecompleto';
        this.dsedrvNombreCompleto.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_6',
            'Nombre completo');
        this.dsedrvNombreCompleto.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434549485568029CjtoVis_AutoICtjoVis_6', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dsedrvNombreCompleto.enabled = false;
        this.dsedrvNombreCompleto.mandatory = false;
        this.dsedrvNombreCompleto.dataType = Field.dtString;
        this.dsedrvNombreCompleto.maxLength = 255;
        this.dsedrvNombreCompleto.assignCSS();
        this.fields.push(this.dsedrvNombreCompleto);

        this.dseUsuarioLDAP.nameInRequest = 'usuarioldap';
        this.dseUsuarioLDAP.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_7',
            'Usuario LDAP');
        this.dseUsuarioLDAP.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434549485568029CjtoVis_AutoICtjoVis_7', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dseUsuarioLDAP.enabled = false;
        this.dseUsuarioLDAP.mandatory = false;
        this.dseUsuarioLDAP.dataType = Field.dtString;
        this.dseUsuarioLDAP.maxLength = 50;
        this.dseUsuarioLDAP.assignCSS();
        this.fields.push(this.dseUsuarioLDAP);

        this.dseEmail.nameInRequest = 'email';
        this.dseEmail.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_8',
            'Email');
        this.dseEmail.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434549485568029CjtoVis_AutoICtjoVis_8', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dseEmail.enabled = false;
        this.dseEmail.mandatory = false;
        this.dseEmail.dataType = Field.dtString;
        this.dseEmail.maxLength = 100;
        this.dseEmail.assignCSS();
        this.fields.push(this.dseEmail);

        this.dseCodJefe.nameInRequest = 'codjefe';
        this.dseCodJefe.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_9',
            'CodJefe');
        this.dseCodJefe.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434549485568029CjtoVis_AutoICtjoVis_9', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dseCodJefe.enabled = false;
        this.dseCodJefe.mandatory = false;
        this.dseCodJefe.dataType = Field.dtString;
        this.dseCodJefe.maxLength = 20;
        this.dseCodJefe.assignCSS();
        this.fields.push(this.dseCodJefe);

        this.dseId.nameInRequest = 'id';
        this.dseId.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_10',
            'Id');
        this.dseId.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434549485568029CjtoVis_AutoICtjoVis_10', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dseId.enabled = false;
        this.dseId.mandatory = false;
        this.dseId.dataType = Field.dtAuto;
        this.dseId.assignCSS();
        this.fields.push(this.dseId);

        this.dseManual.nameInRequest = 'manual';
        this.dseManual.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_11',
            'Manual');
        this.dseManual.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434549485568029CjtoVis_AutoICtjoVis_11', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dseManual.enabled = false;
        this.dseManual.mandatory = false;
        this.dseManual.dataType = Field.dtBool;
        this.dseManual.options = DefinedSelections.DS_SINO;
        this.dseManual.assignCSS();
        this.fields.push(this.dseManual);

        this.dsedrvNomJefe.nameInRequest = 'drvnomjefe';
        this.dsedrvNomJefe.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_12',
            'Nombre Jefe');
        this.dsedrvNomJefe.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434549485568029CjtoVis_AutoICtjoVis_12', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dsedrvNomJefe.enabled = false;
        this.dsedrvNomJefe.mandatory = false;
        this.dsedrvNomJefe.dataType = Field.dtString;
        this.dsedrvNomJefe.maxLength = 255;
        this.dsedrvNomJefe.assignCSS();
        this.fields.push(this.dsedrvNomJefe);

        this.dsedrvNomAgencia.nameInRequest = 'drvnomagencia';
        this.dsedrvNomAgencia.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_13',
            'Agencia');
        this.dsedrvNomAgencia.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434549485568029CjtoVis_AutoICtjoVis_13', ['Admin', 'SuperAdmin']);
        this.dsedrvNomAgencia.enabled = false;
        this.dsedrvNomAgencia.mandatory = false;
        this.dsedrvNomAgencia.dataType = Field.dtString;
        this.dsedrvNomAgencia.maxLength = 255;
        this.dsedrvNomAgencia.assignCSS();
        this.fields.push(this.dsedrvNomAgencia);

        this.dseDisponible.nameInRequest = 'disponible';
        this.dseDisponible.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_14',
            'Disponible');
        this.dseDisponible.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434549485568029CjtoVis_AutoICtjoVis_14', ['Admin', 'SuperAdmin']);
        this.dseDisponible.enabled = false;
        this.dseDisponible.mandatory = false;
        this.dseDisponible.dataType = Field.dtBool;
        this.dseDisponible.options = DefinedSelections.DS_SINO;
        this.dseDisponible.assignCSS();
        this.fields.push(this.dseDisponible);

        this.dseNumSolNoTerminadas.nameInRequest = 'numsolnoterminadas';
        this.dseNumSolNoTerminadas.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_15',
            'No. Solicitudes no terminadas');
        this.dseNumSolNoTerminadas.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434549485568029CjtoVis_AutoICtjoVis_15', ['Admin', 'SuperAdmin']);
        this.dseNumSolNoTerminadas.enabled = false;
        this.dseNumSolNoTerminadas.mandatory = false;
        this.dseNumSolNoTerminadas.dataType = Field.dtNat;
        this.dseNumSolNoTerminadas.assignCSS();
        this.fields.push(this.dseNumSolNoTerminadas);

        this.dsedrvEsAsesorIntegral.nameInRequest = 'drvesasesorintegral';
        this.dsedrvEsAsesorIntegral.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_16',
            'Es Asesor Integral');
        this.dsedrvEsAsesorIntegral.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434549485568029CjtoVis_AutoICtjoVis_16', ['Admin', 'SuperAdmin']);
        this.dsedrvEsAsesorIntegral.enabled = false;
        this.dsedrvEsAsesorIntegral.mandatory = false;
        this.dsedrvEsAsesorIntegral.dataType = Field.dtBool;
        this.dsedrvEsAsesorIntegral.options = DefinedSelections.DS_SINO;
        this.dsedrvEsAsesorIntegral.assignCSS();
        this.fields.push(this.dsedrvEsAsesorIntegral);

        this.dsedrvEsAfiliacion.nameInRequest = 'drvesafiliacion';
        this.dsedrvEsAfiliacion.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_17',
            'Es Afiliacion');
        this.dsedrvEsAfiliacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434549485568029CjtoVis_AutoICtjoVis_17', ['SuperAdmin']);
        this.dsedrvEsAfiliacion.enabled = false;
        this.dsedrvEsAfiliacion.mandatory = false;
        this.dsedrvEsAfiliacion.dataType = Field.dtBool;
        this.dsedrvEsAfiliacion.options = DefinedSelections.DS_SINO;
        this.dsedrvEsAfiliacion.assignCSS();
        this.fields.push(this.dsedrvEsAfiliacion);

    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1434549485568029AccOfer_AutoElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_AreaMedica_act__Auto__item_Clas_1434549485568029AccOfer_AutoElemAcc_1',
            'Área médica');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Areamedica.name;
        accItem.targetUI = ModelConstants.Areamedica.uautou;
        this.actions.push(accItem);

    }
}
