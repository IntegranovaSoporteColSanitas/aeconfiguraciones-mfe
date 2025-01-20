import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldDefinedSelection, FieldOVLenseSearch } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-causal-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CausalSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puagrNovedad: FieldOVLenseSearch;
    public puatrAliasCausal: Field;
    public puatrNombre: Field;
    public puatrDescripcion: Field;
    public puatrCodigoLegal: Field;
    public puatrReqDocPersona: FieldDefinedSelection;
    public puatrReqDocSolicitud: FieldDefinedSelection;

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
        this.idXML = 'Clas_1581414219776993Ser_1UIServ_1';
        this.className = ModelConstants.Causal.name;
        this.iuName = ModelConstants.Causal.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_Causal_svc_crear',
            'Crear');

        // Create inbound argument components
        this.puagrNovedad = new FieldOVLenseSearch(this.langMng);
        this.puatrAliasCausal = new Field(this.langMng);
        this.puatrNombre = new Field(this.langMng);
        this.puatrDescripcion = new Field(this.langMng);
        this.puatrCodigoLegal = new Field(this.langMng);
        this.puatrReqDocPersona = new FieldDefinedSelection(this.langMng);
        this.puatrReqDocSolicitud = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puagrNovedad.nameInRequest = 'p_agrnovedad';
        this.puagrNovedad.alias = this.langMng.translateText(
            'cls_Causal_svc_crear_inArg_p_agrNovedad',
            'Novedad');
        this.puagrNovedad.mandatory = true;
        this.puagrNovedad.dataType = ModelConstants.Novedad.name;
        this.puagrNovedad.maxLength = 50;
        this.puagrNovedad.assignCSS();
        this.fields.push(this.puagrNovedad);

        this.puatrAliasCausal.nameInRequest = 'p_atraliascausal';
        this.puatrAliasCausal.alias = this.langMng.translateText(
            'cls_Causal_svc_crear_inArg_p_atrAliasCausal',
            'Alias');
        this.puatrAliasCausal.mandatory = true;
        this.puatrAliasCausal.dataType = Field.dtString;
        this.puatrAliasCausal.maxLength = 50;
        this.puatrAliasCausal.assignCSS();
        this.fields.push(this.puatrAliasCausal);

        this.puatrNombre.nameInRequest = 'p_atrnombre';
        this.puatrNombre.alias = this.langMng.translateText(
            'cls_Causal_svc_crear_inArg_p_atrNombre',
            'Nombre');
        this.puatrNombre.mandatory = true;
        this.puatrNombre.dataType = Field.dtString;
        this.puatrNombre.maxLength = 50;
        this.puatrNombre.assignCSS();
        this.fields.push(this.puatrNombre);

        this.puatrDescripcion.nameInRequest = 'p_atrdescripcion';
        this.puatrDescripcion.alias = this.langMng.translateText(
            'cls_Causal_svc_crear_inArg_p_atrDescripcion',
            'Descripción');
        this.puatrDescripcion.mandatory = true;
        this.puatrDescripcion.dataType = Field.dtString;
        this.puatrDescripcion.maxLength = 200;
        this.puatrDescripcion.assignCSS();
        this.fields.push(this.puatrDescripcion);

        this.puatrCodigoLegal.nameInRequest = 'p_atrcodigolegal';
        this.puatrCodigoLegal.alias = this.langMng.translateText(
            'cls_Causal_svc_crear_inArg_p_atrCodigoLegal',
            'Código Legal');
        this.puatrCodigoLegal.mandatory = true;
        this.puatrCodigoLegal.dataType = Field.dtString;
        this.puatrCodigoLegal.maxLength = 5;
        this.puatrCodigoLegal.assignCSS();
        this.fields.push(this.puatrCodigoLegal);

        this.puatrReqDocPersona.nameInRequest = 'p_atrreqdocpersona';
        this.puatrReqDocPersona.alias = this.langMng.translateText(
            'cls_Causal_svc_crear_inArg_p_atrReqDocPersona',
            'Requiere doc. persona');
        this.puatrReqDocPersona.mandatory = true;
        this.puatrReqDocPersona.dataType = Field.dtBool;
        this.puatrReqDocPersona.options = DefinedSelections.DS_SINO;
        this.puatrReqDocPersona.value = false;
        this.puatrReqDocPersona.assignCSS();
        this.fields.push(this.puatrReqDocPersona);

        this.puatrReqDocSolicitud.nameInRequest = 'p_atrreqdocsolicitud';
        this.puatrReqDocSolicitud.alias = this.langMng.translateText(
            'cls_Causal_svc_crear_inArg_p_atrReqDocSolicitud',
            'Requiere doc. solicitud');
        this.puatrReqDocSolicitud.mandatory = true;
        this.puatrReqDocSolicitud.dataType = Field.dtBool;
        this.puatrReqDocSolicitud.options = DefinedSelections.DS_SINO;
        this.puatrReqDocSolicitud.value = false;
        this.puatrReqDocSolicitud.assignCSS();
        this.fields.push(this.puatrReqDocSolicitud);
    }

    /**
     * Initialize arguments from context that identify a Role
     */
    public override initializeFromCtxRelated(): void {
        let lastRole = '';
        let lastRoleOid = null;
        if (this.context.exchangeInfo) {
            lastRole = this.context.exchangeInfo.getLastNavigationRole();
            lastRoleOid = this.context.exchangeInfo.getLastNavigationRoleOid();
        }

        if (lastRole && lastRoleOid) {
            if (lastRole === 'Novedad') {
                this.puagrNovedad.setValue(lastRoleOid);
                this.executeDependecyRulespuagrnovedad('SetValue', true);
                this.puagrNovedad.enabled = false;
                this.executeDependecyRulespuagrnovedad('SetEnabled', true);
            }
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puagrNovedad'.toLowerCase()) {
            this.puagrNovedad.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespuagrnovedad('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_agrNovedad argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuagrnovedad(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopuagrnovedad();
        }
        if ('SetValue' === event && this.puagrNovedad.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puagrNovedad();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_agrNovedad argument
     */
    private setSuppInfopuagrnovedad(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puagrNovedad.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Novedad.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puagrNovedad.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puagrNovedad.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Novedad.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puagrNovedad.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_agrNovedad argument
     */
    private executeDependecyRules1puagrNovedad(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puagrNovedad,
                'id_Novedad');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puagrNovedadActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_agrNovedad argument
     */
    private executeDependecyRules1puagrNovedadActions(): void {
        const varpuagrnovedad = this.getFirstInstanceFromCache(this.puagrNovedad);
        // v <> NULL
        if (varpuagrnovedad && !this.util.isNull(varpuagrnovedad)) {
            // p_agrNovedad.SetVisible( FALSE )
            this.puagrNovedad.visible = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_agrNovedad lense search argument
     */
    public onpuagrnovedadChange(): void {

        const searchText = this.puagrNovedad.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puagrNovedad.lastText) {
                this.puagrNovedad.removeCSSClass('noResultsLenseSearch');
                this.puagrNovedad.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Novedad.name, 'IC_Novedad', searchText, [], null).then(
                        (response: any) => {
                            this.puagrNovedad.removeCSSClass('noResultsLenseSearch');
                            this.puagrNovedad.searchResults = response.results;
                            if (this.puagrNovedad.searchResults &&
                                this.puagrNovedad.searchResults.length === 0) {
                                this.puagrNovedad.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puagrNovedad.searchResults &&
                                this.puagrNovedad.searchResults.length === 1) {
                                this.processpuagrnovedadSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puagrNovedad.removeCSSClass('noResultsLenseSearch');
                            this.puagrNovedad.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puagrNovedad.removeCSSClass('noResultsLenseSearch');
            this.puagrNovedad.searchResults = [];
            this.cleanpuagrnovedad();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_agrNovedad lense search argument
     */
    public processpuagrnovedadSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puagrNovedad.searchResults.length > index) {
            selectedInstance = this.puagrNovedad.searchResults[index];
        }
        // Clean the result list
        this.puagrNovedad.searchResults = [];
        if (selectedInstance) {
            if (!this.puagrNovedad.allowMultiSelect) {
                this.puagrNovedad.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puagrNovedad.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespuagrnovedad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_agrNovedad lense search argument
     */
    public cleanpuagrnovedad(): void {
        this.clearValidationMessages();
        this.puagrNovedad.clean();
        this.executeDependecyRulespuagrnovedad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puagrNovedad'.toLowerCase() === argumentName.toLowerCase()) {
            this.puagrNovedad.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Novedad_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
