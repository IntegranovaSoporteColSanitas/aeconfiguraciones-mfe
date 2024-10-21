import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldOVLenseSearch, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-estadobeneficiarioae-siu-tmodificar',
    templateUrl: './siu_tmodificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstadoBeneficiarioAESIUuTMODIFICARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisEstadoBeneficiarioAE: FieldOVLenseSearch;
    public ptupuDescripcion: Field;
    public ptupuevcEstadoBeneficiario: FieldOVPreload;

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
        this.idXML = 'Clas_1431711383552943Ser_5UIServ_1';
        this.className = ModelConstants.Estadobeneficiarioae.name;
        this.iuName = ModelConstants.Estadobeneficiarioae.siuutmodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TMODIFICAR';
        this.title = this.langMng.translateText('cls_EstadoBeneficiarioAE_svc_TMODIFICAR',
            'Modificar estado beneficiario');

        // Create inbound argument components
        this.puthisEstadoBeneficiarioAE = new FieldOVLenseSearch(this.langMng);
        this.ptupuDescripcion = new Field(this.langMng);
        this.ptupuevcEstadoBeneficiario = new FieldOVPreload(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisEstadoBeneficiarioAE.nameInRequest = 'p_thisestadobeneficiarioae';
        this.puthisEstadoBeneficiarioAE.alias = this.langMng.translateText(
            'cls_EstadoBeneficiarioAE_svc_TMODIFICAR_inArg_p_thisEstadoBeneficiarioAE',
            'Estado beneficiario AE');
        this.puthisEstadoBeneficiarioAE.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisEstadoBeneficiarioAE.mandatory = true;
        this.puthisEstadoBeneficiarioAE.dataType = ModelConstants.Estadobeneficiarioae.name;
        this.puthisEstadoBeneficiarioAE.maxLength = 150;
        this.puthisEstadoBeneficiarioAE.assignCSS();
        this.fields.push(this.puthisEstadoBeneficiarioAE);

        this.ptupuDescripcion.nameInRequest = 'pt_p_descripcion';
        this.ptupuDescripcion.alias = this.langMng.translateText(
            'cls_EstadoBeneficiarioAE_svc_TMODIFICAR_inArg_pt_p_Descripcion',
            'Descripción');
        this.ptupuDescripcion.mandatory = true;
        this.ptupuDescripcion.dataType = Field.dtString;
        this.ptupuDescripcion.maxLength = 150;
        this.ptupuDescripcion.assignCSS();
        this.fields.push(this.ptupuDescripcion);

        this.ptupuevcEstadoBeneficiario.nameInRequest = 'pt_p_evcestadobeneficiario';
        this.ptupuevcEstadoBeneficiario.alias = this.langMng.translateText(
            'cls_EstadoBeneficiarioAE_svc_TMODIFICAR_inArg_pt_p_evcEstadoBeneficiario',
            'Estado beneficiario CORE');
        this.ptupuevcEstadoBeneficiario.mandatory = true;
        this.ptupuevcEstadoBeneficiario.dataType = ModelConstants.Estadobeneficiario.name;
        this.ptupuevcEstadoBeneficiario.maxLength = 150;
        this.ptupuevcEstadoBeneficiario.assignCSS();
        this.fields.push(this.ptupuevcEstadoBeneficiario);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['EstadoBeneficiarioAE'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisEstadoBeneficiarioAE.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisestadobeneficiarioae('SetValue', true);
            this.puthisEstadoBeneficiarioAE.enabled = false;
            this.executeDependecyRulesputhisestadobeneficiarioae('SetEnabled', true);
        }
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
            if (lastRole === 'EstadoBeneficiarioCORE') {
                this.ptupuevcEstadoBeneficiario.setValue(lastRoleOid);
                this.ptupuevcEstadoBeneficiario.enabled = false;
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptupuevcEstadoBeneficiario
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('EstadoBeneficiario', 'IC_EstadoBeneficiario', [], null, '').then(
            (response: any) => {
                if (response && response.results) {
                    this.ptupuevcEstadoBeneficiario.loadPreload(response.results);
                } else {
                    this.ptupuevcEstadoBeneficiario.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.notifyAnswerFromToTheBackEnd();
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.processErrorInLoadPreload(response.resultDescription);
            }
        );
        this.numberOfPendingPreload++;
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisEstadoBeneficiarioAE'.toLowerCase()) {
            this.puthisEstadoBeneficiarioAE.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisestadobeneficiarioae('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisEstadoBeneficiarioAE argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisestadobeneficiarioae(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisestadobeneficiarioae();
        }
        if ('SetValue' === event && this.puthisEstadoBeneficiarioAE.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisEstadoBeneficiarioAE();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisEstadoBeneficiarioAE argument
     */
    private setSuppInfoputhisestadobeneficiarioae(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisEstadoBeneficiarioAE.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Estadobeneficiarioae.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisEstadoBeneficiarioAE.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisEstadoBeneficiarioAE.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Estadobeneficiarioae.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisEstadoBeneficiarioAE.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisEstadoBeneficiarioAE argument
     */
    private executeDependecyRules1puthisEstadoBeneficiarioAE(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisEstadoBeneficiarioAE,
                'descripcion,estadobeneficiariocore.Codigo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisEstadoBeneficiarioAEActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisEstadoBeneficiarioAE argument
     */
    private executeDependecyRules1puthisEstadoBeneficiarioAEActions(): void {
        const varputhisestadobeneficiarioae = this.getFirstInstanceFromCache(this.puthisEstadoBeneficiarioAE);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhisestadobeneficiarioae && !this.util.isNull(varputhisestadobeneficiarioae)) {
            // pt_p_Descripcion.SetValue( v.descripcion )
            this.ptupuDescripcion.setValue(varputhisestadobeneficiarioae.get('descripcion'));
            // pt_p_evcEstadoBeneficiario.SetValue( v.estadobeneficiariocore )
            this.ptupuevcEstadoBeneficiario.setValue(this.util.oidBuilder.buildOidEstadoBeneficiario(
                this.util.getInt(varputhisestadobeneficiarioae.get('estadobeneficiariocore.Codigo'))));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisEstadoBeneficiarioAE lense search argument
     */
    public onputhisestadobeneficiarioaeChange(): void {

        const searchText = this.puthisEstadoBeneficiarioAE.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisEstadoBeneficiarioAE.lastText) {
                this.puthisEstadoBeneficiarioAE.removeCSSClass('noResultsLenseSearch');
                this.puthisEstadoBeneficiarioAE.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Estadobeneficiarioae.name, 'IC_EstadoBeneficiarioAE', searchText, [],
                    null).then(
                        (response: any) => {
                            this.puthisEstadoBeneficiarioAE.removeCSSClass('noResultsLenseSearch');
                            this.puthisEstadoBeneficiarioAE.searchResults = response.results;
                            if (this.puthisEstadoBeneficiarioAE.searchResults &&
                                this.puthisEstadoBeneficiarioAE.searchResults.length === 0) {
                                this.puthisEstadoBeneficiarioAE.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisEstadoBeneficiarioAE.searchResults &&
                                this.puthisEstadoBeneficiarioAE.searchResults.length === 1) {
                                this.processputhisestadobeneficiarioaeSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisEstadoBeneficiarioAE.removeCSSClass('noResultsLenseSearch');
                            this.puthisEstadoBeneficiarioAE.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisEstadoBeneficiarioAE.removeCSSClass('noResultsLenseSearch');
            this.puthisEstadoBeneficiarioAE.searchResults = [];
            this.cleanputhisestadobeneficiarioae();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisEstadoBeneficiarioAE lense search argument
     */
    public processputhisestadobeneficiarioaeSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisEstadoBeneficiarioAE.searchResults.length > index) {
            selectedInstance = this.puthisEstadoBeneficiarioAE.searchResults[index];
        }
        // Clean the result list
        this.puthisEstadoBeneficiarioAE.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisEstadoBeneficiarioAE.allowMultiSelect) {
                this.puthisEstadoBeneficiarioAE.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisEstadoBeneficiarioAE.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisestadobeneficiarioae('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisEstadoBeneficiarioAE lense search argument
     */
    public cleanputhisestadobeneficiarioae(): void {
        this.clearValidationMessages();
        this.puthisEstadoBeneficiarioAE.clean();
        this.executeDependecyRulesputhisestadobeneficiarioae('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisEstadoBeneficiarioAE'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisEstadoBeneficiarioAE.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_EstadoBeneficiarioAE';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
