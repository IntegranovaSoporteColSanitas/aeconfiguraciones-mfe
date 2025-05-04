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
    selector: 'imes-causal-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CausalSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisCausal: FieldOVLenseSearch;
    public puAliasCausal: Field;
    public puNombre: Field;
    public puDescripcion: Field;
    public puCodigoLegal: Field;
    public puReqDocPersona: FieldDefinedSelection;
    public puReqDocSolicitud: FieldDefinedSelection;

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
        this.idXML = 'Clas_1581414219776993Ser_3UIServ_1';
        this.className = ModelConstants.Causal.name;
        this.iuName = ModelConstants.Causal.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_Causal_svc_modificar',
            'Modificar');

        // Create inbound argument components
        this.puthisCausal = new FieldOVLenseSearch(this.langMng);
        this.puAliasCausal = new Field(this.langMng);
        this.puNombre = new Field(this.langMng);
        this.puDescripcion = new Field(this.langMng);
        this.puCodigoLegal = new Field(this.langMng);
        this.puReqDocPersona = new FieldDefinedSelection(this.langMng);
        this.puReqDocSolicitud = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisCausal.nameInRequest = 'p_thiscausal';
        this.puthisCausal.alias = this.langMng.translateText(
            'cls_Causal_svc_modificar_inArg_p_thisCausal',
            'Causal');
        this.puthisCausal.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisCausal.mandatory = true;
        this.puthisCausal.dataType = ModelConstants.Causal.name;
        this.puthisCausal.maxLength = 50;
        this.puthisCausal.assignCSS();
        this.fields.push(this.puthisCausal);

        this.puAliasCausal.nameInRequest = 'p_aliascausal';
        this.puAliasCausal.alias = this.langMng.translateText(
            'cls_Causal_svc_modificar_inArg_p_AliasCausal',
            'Alias');
        this.puAliasCausal.mandatory = true;
        this.puAliasCausal.dataType = Field.dtString;
        this.puAliasCausal.maxLength = 50;
        this.puAliasCausal.assignCSS();
        this.fields.push(this.puAliasCausal);

        this.puNombre.nameInRequest = 'p_nombre';
        this.puNombre.alias = this.langMng.translateText(
            'cls_Causal_svc_modificar_inArg_p_Nombre',
            'Nombre');
        this.puNombre.mandatory = true;
        this.puNombre.dataType = Field.dtString;
        this.puNombre.maxLength = 50;
        this.puNombre.assignCSS();
        this.fields.push(this.puNombre);

        this.puDescripcion.nameInRequest = 'p_descripcion';
        this.puDescripcion.alias = this.langMng.translateText(
            'cls_Causal_svc_modificar_inArg_p_Descripcion',
            'Descripción');
        this.puDescripcion.mandatory = true;
        this.puDescripcion.dataType = Field.dtString;
        this.puDescripcion.maxLength = 200;
        this.puDescripcion.assignCSS();
        this.fields.push(this.puDescripcion);

        this.puCodigoLegal.nameInRequest = 'p_codigolegal';
        this.puCodigoLegal.alias = this.langMng.translateText(
            'cls_Causal_svc_modificar_inArg_p_CodigoLegal',
            'Código Legal');
        this.puCodigoLegal.mandatory = true;
        this.puCodigoLegal.dataType = Field.dtString;
        this.puCodigoLegal.maxLength = 5;
        this.puCodigoLegal.assignCSS();
        this.fields.push(this.puCodigoLegal);

        this.puReqDocPersona.nameInRequest = 'p_reqdocpersona';
        this.puReqDocPersona.alias = this.langMng.translateText(
            'cls_Causal_svc_modificar_inArg_p_ReqDocPersona',
            'ReqDocPersona');
        this.puReqDocPersona.mandatory = true;
        this.puReqDocPersona.dataType = Field.dtBool;
        this.puReqDocPersona.options = DefinedSelections.DS_SINO;
        this.puReqDocPersona.value = false;
        this.puReqDocPersona.assignCSS();
        this.fields.push(this.puReqDocPersona);

        this.puReqDocSolicitud.nameInRequest = 'p_reqdocsolicitud';
        this.puReqDocSolicitud.alias = this.langMng.translateText(
            'cls_Causal_svc_modificar_inArg_p_ReqDocSolicitud',
            'Requiere doc. solicitud');
        this.puReqDocSolicitud.mandatory = true;
        this.puReqDocSolicitud.dataType = Field.dtBool;
        this.puReqDocSolicitud.options = DefinedSelections.DS_SINO;
        this.puReqDocSolicitud.value = false;
        this.puReqDocSolicitud.assignCSS();
        this.fields.push(this.puReqDocSolicitud);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Causal'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisCausal.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhiscausal('SetValue', true);
            this.puthisCausal.enabled = false;
            this.executeDependecyRulesputhiscausal('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisCausal'.toLowerCase()) {
            this.puthisCausal.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhiscausal('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisCausal argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhiscausal(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhiscausal();
        }
        if ('SetValue' === event && this.puthisCausal.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisCausal();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2puthisCausal();
        }
        // Rule 3
        if ('SetValue' === event) {
            this.executeDependecyRules3puthisCausal();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisCausal argument
     */
    private setSuppInfoputhiscausal(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisCausal.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Causal.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisCausal.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisCausal.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Causal.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisCausal.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisCausal argument
     */
    private executeDependecyRules1puthisCausal(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisCausal,
                'aliascausal,nombre,descripcion,codigolegal,reqdocpersona,reqdocsolicitud');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisCausalActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisCausal argument
     */
    private executeDependecyRules1puthisCausalActions(): void {
        const varputhiscausal = this.getFirstInstanceFromCache(this.puthisCausal);
        // v <> NULL
        if (varputhiscausal && !this.util.isNull(varputhiscausal)) {
            // p_AliasCausal.SetValue( v.aliascausal )
            this.puAliasCausal.setValue(varputhiscausal.get('aliascausal'));
            // p_Nombre.SetValue( v.nombre )
            this.puNombre.setValue(varputhiscausal.get('nombre'));
            // p_Descripcion.SetValue( v.descripcion )
            this.puDescripcion.setValue(varputhiscausal.get('descripcion'));
            // p_CodigoLegal.SetValue( v.codigolegal )
            this.puCodigoLegal.setValue(varputhiscausal.get('codigolegal'));
            // p_ReqDocPersona.SetValue( v.reqdocpersona )
            this.puReqDocPersona.setValue(this.util.getBool(varputhiscausal.get('reqdocpersona')));
            // p_ReqDocSolicitud.SetValue( v.reqdocsolicitud )
            this.puReqDocSolicitud.setValue(this.util.getBool(varputhiscausal.get('reqdocsolicitud')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for p_thisCausal argument
     */
    private executeDependecyRules2puthisCausal(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisCausal,
                'novedad.reqdocpersona');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2puthisCausalActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for p_thisCausal argument
     */
    private executeDependecyRules2puthisCausalActions(): void {
        const varputhiscausal = this.getFirstInstanceFromCache(this.puthisCausal);
        // v <> NULL AND v.novedad.reqdocpersona = true
        if (varputhiscausal && !this.util.isNull(varputhiscausal) &&
            this.util.valueEquals(this.util.getBool(varputhiscausal.get('novedad.reqdocpersona')), true)) {
            // p_ReqDocPersona.SetActive( FALSE )
            this.puReqDocPersona.enabled = false;
            // p_ReqDocPersona.SetValue( TRUE )
            this.puReqDocPersona.setValue(true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 3 for p_thisCausal argument
     */
    private executeDependecyRules3puthisCausal(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisCausal,
                'novedad.reqdocsolicitud');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules3puthisCausalActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 3 for p_thisCausal argument
     */
    private executeDependecyRules3puthisCausalActions(): void {
        const varputhiscausal = this.getFirstInstanceFromCache(this.puthisCausal);
        // v <> NULL AND v.novedad.reqdocsolicitud = true
        if (varputhiscausal && !this.util.isNull(varputhiscausal) &&
            this.util.valueEquals(this.util.getBool(varputhiscausal.get('novedad.reqdocsolicitud')), true)) {
            // p_ReqDocSolicitud.SetActive( FALSE )
            this.puReqDocSolicitud.enabled = false;
            // p_ReqDocSolicitud.SetValue( TRUE )
            this.puReqDocSolicitud.setValue(true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisCausal lense search argument
     */
    public onputhiscausalChange(): void {

        const searchText = this.puthisCausal.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisCausal.lastText) {
                this.puthisCausal.removeCSSClass('noResultsLenseSearch');
                this.puthisCausal.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Causal.name, 'IC_Causal', searchText, [], null).then(
                        (response: any) => {
                            this.puthisCausal.removeCSSClass('noResultsLenseSearch');
                            this.puthisCausal.searchResults = response.results;
                            if (this.puthisCausal.searchResults &&
                                this.puthisCausal.searchResults.length === 0) {
                                this.puthisCausal.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisCausal.searchResults &&
                                this.puthisCausal.searchResults.length === 1) {
                                this.processputhiscausalSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisCausal.removeCSSClass('noResultsLenseSearch');
                            this.puthisCausal.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisCausal.removeCSSClass('noResultsLenseSearch');
            this.puthisCausal.searchResults = [];
            this.cleanputhiscausal();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisCausal lense search argument
     */
    public processputhiscausalSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisCausal.searchResults.length > index) {
            selectedInstance = this.puthisCausal.searchResults[index];
        }
        // Clean the result list
        this.puthisCausal.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisCausal.allowMultiSelect) {
                this.puthisCausal.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisCausal.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhiscausal('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisCausal lense search argument
     */
    public cleanputhiscausal(): void {
        this.clearValidationMessages();
        this.puthisCausal.clean();
        this.executeDependecyRulesputhiscausal('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisCausal'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisCausal.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Causal_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
