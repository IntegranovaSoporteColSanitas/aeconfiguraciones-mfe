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
 * « Implements IIU _Auto_ of Causal »
 */
@Component({
    selector: 'imes-causal-iiu-auto',
    templateUrl: './_auto_.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CausalUAutouComponent extends AbstractIIU implements OnInit {

    /** Display Set elements */
    public dseiduCausal: Field;
    public dseAliasCausal: Field;
    public dseNombre: Field;
    public dseDescripcion: Field;
    public dseCodigoLegal: Field;
    public dseReqDocPersona: FieldDefinedSelection;
    public dseReqDocSolicitud: FieldDefinedSelection;
    public dseDrvTextoMostrar: Field;

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
        this.idXML = 'Clas_1581414219776993UIInst_2';
        this.className = ModelConstants.Causal.name;
        this.iuName = ModelConstants.Causal.uautou;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Causal_iiu__Auto_',
            'Causal');
        this.queryURL = '/api/CausalApi/GetPopulationDynamic';

        this.dseiduCausal = new Field(this.langMng);
        this.dseAliasCausal = new Field(this.langMng);
        this.dseNombre = new Field(this.langMng);
        this.dseDescripcion = new Field(this.langMng);
        this.dseCodigoLegal = new Field(this.langMng);
        this.dseReqDocPersona = new FieldDefinedSelection(this.langMng);
        this.dseReqDocSolicitud = new FieldDefinedSelection(this.langMng);
        this.dseDrvTextoMostrar = new Field(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseiduCausal.nameInRequest = 'id_causal';
        this.dseiduCausal.alias = this.langMng.translateText(
            'cls_Causal_ds__Auto__item_Clas_1581414219776993CjtoVis_AutoICtjoVis_1',
            'Id.');
        this.dseiduCausal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581414219776993CjtoVis_AutoICtjoVis_1', ['Admin', 'SuperAdmin']);
        this.dseiduCausal.enabled = false;
        this.dseiduCausal.mandatory = false;
        this.dseiduCausal.dataType = Field.dtAuto;
        this.dseiduCausal.assignCSS();
        this.fields.push(this.dseiduCausal);

        this.dseAliasCausal.nameInRequest = 'aliascausal';
        this.dseAliasCausal.alias = this.langMng.translateText(
            'cls_Causal_ds__Auto__item_Clas_1581414219776993CjtoVis_AutoICtjoVis_2',
            'Alias');
        this.dseAliasCausal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581414219776993CjtoVis_AutoICtjoVis_2', ['Admin', 'SuperAdmin']);
        this.dseAliasCausal.enabled = false;
        this.dseAliasCausal.mandatory = false;
        this.dseAliasCausal.dataType = Field.dtString;
        this.dseAliasCausal.maxLength = 50;
        this.dseAliasCausal.assignCSS();
        this.fields.push(this.dseAliasCausal);

        this.dseNombre.nameInRequest = 'nombre';
        this.dseNombre.alias = this.langMng.translateText(
            'cls_Causal_ds__Auto__item_Clas_1581414219776993CjtoVis_AutoICtjoVis_3',
            'Nombre');
        this.dseNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581414219776993CjtoVis_AutoICtjoVis_3', ['Admin', 'SuperAdmin']);
        this.dseNombre.enabled = false;
        this.dseNombre.mandatory = false;
        this.dseNombre.dataType = Field.dtString;
        this.dseNombre.maxLength = 50;
        this.dseNombre.assignCSS();
        this.fields.push(this.dseNombre);

        this.dseDescripcion.nameInRequest = 'descripcion';
        this.dseDescripcion.alias = this.langMng.translateText(
            'cls_Causal_ds__Auto__item_Clas_1581414219776993CjtoVis_AutoICtjoVis_4',
            'Descripción');
        this.dseDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581414219776993CjtoVis_AutoICtjoVis_4', ['Admin', 'SuperAdmin']);
        this.dseDescripcion.enabled = false;
        this.dseDescripcion.mandatory = false;
        this.dseDescripcion.dataType = Field.dtString;
        this.dseDescripcion.maxLength = 200;
        this.dseDescripcion.assignCSS();
        this.fields.push(this.dseDescripcion);

        this.dseCodigoLegal.nameInRequest = 'codigolegal';
        this.dseCodigoLegal.alias = this.langMng.translateText(
            'cls_Causal_ds__Auto__item_Clas_1581414219776993CjtoVis_AutoICtjoVis_5',
            'Código Legal');
        this.dseCodigoLegal.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581414219776993CjtoVis_AutoICtjoVis_5', ['Admin', 'SuperAdmin']);
        this.dseCodigoLegal.enabled = false;
        this.dseCodigoLegal.mandatory = false;
        this.dseCodigoLegal.dataType = Field.dtString;
        this.dseCodigoLegal.maxLength = 5;
        this.dseCodigoLegal.assignCSS();
        this.fields.push(this.dseCodigoLegal);

        this.dseReqDocPersona.nameInRequest = 'reqdocpersona';
        this.dseReqDocPersona.alias = this.langMng.translateText(
            'cls_Causal_ds__Auto__item_Clas_1581414219776993CjtoVis_AutoICtjoVis_6',
            'Requiere doc. persona');
        this.dseReqDocPersona.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581414219776993CjtoVis_AutoICtjoVis_6', ['Admin', 'SuperAdmin']);
        this.dseReqDocPersona.enabled = false;
        this.dseReqDocPersona.mandatory = false;
        this.dseReqDocPersona.dataType = Field.dtBool;
        this.dseReqDocPersona.options = DefinedSelections.DS_SINO;
        this.dseReqDocPersona.assignCSS();
        this.fields.push(this.dseReqDocPersona);

        this.dseReqDocSolicitud.nameInRequest = 'reqdocsolicitud';
        this.dseReqDocSolicitud.alias = this.langMng.translateText(
            'cls_Causal_ds__Auto__item_Clas_1581414219776993CjtoVis_AutoICtjoVis_7',
            'Requiere doc. solicitud');
        this.dseReqDocSolicitud.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581414219776993CjtoVis_AutoICtjoVis_7', ['Admin', 'SuperAdmin']);
        this.dseReqDocSolicitud.enabled = false;
        this.dseReqDocSolicitud.mandatory = false;
        this.dseReqDocSolicitud.dataType = Field.dtBool;
        this.dseReqDocSolicitud.options = DefinedSelections.DS_SINO;
        this.dseReqDocSolicitud.assignCSS();
        this.fields.push(this.dseReqDocSolicitud);

        this.dseDrvTextoMostrar.nameInRequest = 'drvtextomostrar';
        this.dseDrvTextoMostrar.alias = this.langMng.translateText(
            'cls_Causal_ds__Auto__item_Clas_1581414219776993CjtoVis_AutoICtjoVis_8',
            'Descripción');
        this.dseDrvTextoMostrar.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581414219776993CjtoVis_AutoICtjoVis_8', ['Admin', 'SuperAdmin']);
        this.dseDrvTextoMostrar.enabled = false;
        this.dseDrvTextoMostrar.mandatory = false;
        this.dseDrvTextoMostrar.dataType = Field.dtString;
        this.dseDrvTextoMostrar.maxLength = 110;
        this.dseDrvTextoMostrar.assignCSS();
        this.fields.push(this.dseDrvTextoMostrar);

    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1581414219776993AccOfer_AutoElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Causal_act__Auto__item_Clas_1581414219776993AccOfer_AutoElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Causal.name;
        accItem.targetUI = ModelConstants.Causal.siuucrear;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1581414219776993AccOfer_AutoElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Causal_act__Auto__item_Clas_1581414219776993AccOfer_AutoElemAcc_2',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Causal.name;
        accItem.targetUI = ModelConstants.Causal.siuueliminar;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1581414219776993AccOfer_AutoElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Causal_act__Auto__item_Clas_1581414219776993AccOfer_AutoElemAcc_3',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Causal.name;
        accItem.targetUI = ModelConstants.Causal.siuumodificar;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1581414219776993AccOfer_AutoElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_Causal_act__Auto__item_Clas_1581414219776993AccOfer_AutoElemAcc_4',
            'Causal');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Causal.name;
        accItem.targetUI = ModelConstants.Causal.uautou;
        this.actions.push(accItem);

    }

    /**
     * Initialize the navigation items
     */
    public override initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1581414219776993NavOfer_AutoElemNav_2';
        navItem.alias = this.langMng.translateText(
            'cls_Causal_nav__Auto__item_Clas_1581414219776993NavOfer_AutoElemNav_2',
            'Grupos Novedades');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        navItem.targetClass = ModelConstants.Grupoasignacionnovedad.name;
        navItem.targetUI = ModelConstants.Grupoasignacionnovedad.piuugrpasignovedadududominio;
        navItem.rolePath = 'Causal';
        this.navigations.push(navItem);

        navItem = new AccNavItem();
        navItem.id = 1;
        navItem.idXML = 'Clas_1581414219776993NavOfer_AutoElemNav_3';
        navItem.alias = this.langMng.translateText(
            'cls_Causal_nav__Auto__item_Clas_1581414219776993NavOfer_AutoElemNav_3',
            'Acuerdo nivel de servicio');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        navItem.targetClass = ModelConstants.Configuracionans.name;
        navItem.targetUI = ModelConstants.Configuracionans.piuuconfiguracionans;
        navItem.rolePath = 'Causal';
        this.navigations.push(navItem);

        navItem = new AccNavItem();
        navItem.id = 2;
        navItem.idXML = 'Clas_1581414219776993NavOfer_AutoElemNav_4';
        navItem.alias = this.langMng.translateText(
            'cls_Causal_nav__Auto__item_Clas_1581414219776993NavOfer_AutoElemNav_4',
            'Novedad');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        navItem.targetClass = ModelConstants.Novedad.name;
        navItem.targetUI = ModelConstants.Novedad.iiuunovedad;
        navItem.rolePath = 'Causales';
        this.navigations.push(navItem);

    }
}
