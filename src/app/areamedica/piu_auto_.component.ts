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
    selector: 'imes-areamedica-piu-auto',
    templateUrl: './piu_auto_.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaMedicaPIUuAutouComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsusuario = 'Usuario';
    private readonly dsprimernombre = 'Primer nombre';
    private readonly dssegundonombre = 'Segundo nombre';
    private readonly dsprimerapellido = 'Primer apellido';
    private readonly dssegundoapellido = 'Segundo apellido';
    private readonly dsdrvnombrecompleto = 'Nombre completo';
    private readonly dsusuarioldap = 'Usuario LDAP';
    private readonly dsemail = 'Email';
    private readonly dscodjefe = 'CodJefe';
    private readonly dsid = 'Id';
    private readonly dsmanual = 'Manual';
    private readonly dsdrvnomjefe = 'Nombre Jefe';
    private readonly dsdrvnomagencia = 'Agencia';
    private readonly dsdisponible = 'Disponible';
    private readonly dsnumsolnoterminadas = 'No. Solicitudes no terminadas';
    private readonly dsdrvesasesorintegral = 'Es Asesor Integral';
    private readonly dsdrvesafiliacion = 'Es Afiliacion';

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
        this.idXML = 'Clas_1434549485568029UIPobCl_Auto';
        this.className = ModelConstants.Areamedica.name;
        this.iuName = ModelConstants.Areamedica.piuuautou;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_AreaMedica_piu__Auto_',
            'Área médica');
        this.queryURL = '/api/AreaMedicaApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_AutoICtjoVis_1';
        dsItem.name = 'usuario';
        dsItem.field = 'usuario';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_1',
            this.dsusuario);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_AutoICtjoVis_2';
        dsItem.name = 'primernombre';
        dsItem.field = 'primernombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_2',
            this.dsprimernombre);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_AutoICtjoVis_3';
        dsItem.name = 'segundonombre';
        dsItem.field = 'segundonombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_3',
            this.dssegundonombre);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_AutoICtjoVis_4';
        dsItem.name = 'primerapellido';
        dsItem.field = 'primerapellido';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_4',
            this.dsprimerapellido);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_AutoICtjoVis_5';
        dsItem.name = 'segundoapellido';
        dsItem.field = 'segundoapellido';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_5',
            this.dssegundoapellido);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_AutoICtjoVis_6';
        dsItem.name = 'drvnombrecompleto';
        dsItem.field = 'drvnombrecompleto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 255;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_6',
            this.dsdrvnombrecompleto);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_AutoICtjoVis_7';
        dsItem.name = 'usuarioldap';
        dsItem.field = 'usuarioldap';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_7',
            this.dsusuarioldap);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_AutoICtjoVis_8';
        dsItem.name = 'email';
        dsItem.field = 'email';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_8',
            this.dsemail);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_AutoICtjoVis_9';
        dsItem.name = 'codjefe';
        dsItem.field = 'codjefe';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_9',
            this.dscodjefe);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_AutoICtjoVis_10';
        dsItem.name = 'id';
        dsItem.field = 'id';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_10',
            this.dsid);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_AutoICtjoVis_11';
        dsItem.name = 'manual';
        dsItem.field = 'manual';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_11',
            this.dsmanual);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_AutoICtjoVis_12';
        dsItem.name = 'drvnomjefe';
        dsItem.field = 'drvnomjefe';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 255;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_12',
            this.dsdrvnomjefe);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_AutoICtjoVis_13';
        dsItem.name = 'drvnomagencia';
        dsItem.field = 'drvnomagencia';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 255;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_13',
            this.dsdrvnomagencia);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_AutoICtjoVis_14';
        dsItem.name = 'disponible';
        dsItem.field = 'disponible';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_14',
            this.dsdisponible);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_AutoICtjoVis_15';
        dsItem.name = 'numsolnoterminadas';
        dsItem.field = 'numsolnoterminadas';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_15',
            this.dsnumsolnoterminadas);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_AutoICtjoVis_16';
        dsItem.name = 'drvesasesorintegral';
        dsItem.field = 'drvesasesorintegral';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_16',
            this.dsdrvesasesorintegral);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568029CjtoVis_AutoICtjoVis_17';
        dsItem.name = 'drvesafiliacion';
        dsItem.field = 'drvesafiliacion';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_AreaMedica_ds__Auto__item_Clas_1434549485568029CjtoVis_AutoICtjoVis_17',
            this.dsdrvesafiliacion);
        dsItem.agents = [ModelConstants.Superadmin.name];
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

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
