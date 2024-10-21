import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldBlob, FieldOVLenseSearch } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-respregional-siu-tcrearomodfirma',
    templateUrl: './siu_tcrearomodfirma.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RespRegionalSIUuTCREAROMODFIRMAComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisRespRegional: FieldOVLenseSearch;
    public ptupuatrImagenFirma: FieldBlob;
    public ptupuatrLatitud: Field;
    public ptupuatrLongitud: Field;

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
        this.idXML = 'Clas_1431871684608346Ser_8UIServ_1';
        this.className = ModelConstants.Respregional.name;
        this.iuName = ModelConstants.Respregional.siuutcrearomodfirma;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.serviceName = 'TCREAROMODFIRMA';
        this.title = this.langMng.translateText('cls_RespRegional_svc_TCREAROMODFIRMA',
            'Modificar firma');

        // Create inbound argument components
        this.puthisRespRegional = new FieldOVLenseSearch(this.langMng);
        this.ptupuatrImagenFirma = new FieldBlob(this.langMng);
        this.ptupuatrLatitud = new Field(this.langMng);
        this.ptupuatrLongitud = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisRespRegional.nameInRequest = 'p_thisrespregional';
        this.puthisRespRegional.alias = this.langMng.translateText(
            'cls_RespRegional_svc_TCREAROMODFIRMA_inArg_p_thisRespRegional',
            'Responsable regional');
        this.puthisRespRegional.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisRespRegional.mandatory = true;
        this.puthisRespRegional.dataType = ModelConstants.Respregional.name;
        this.puthisRespRegional.maxLength = 200;
        this.puthisRespRegional.assignCSS();
        this.fields.push(this.puthisRespRegional);

        this.ptupuatrImagenFirma.nameInRequest = 'pt_p_atrimagenfirma';
        this.ptupuatrImagenFirma.alias = this.langMng.translateText(
            'cls_RespRegional_svc_TCREAROMODFIRMA_inArg_pt_p_atrImagenFirma',
            'Firma');
        this.ptupuatrImagenFirma.mandatory = false;
        this.ptupuatrImagenFirma.dataType = Field.dtBlob;
        this.ptupuatrImagenFirma.assignCSS();
        this.fields.push(this.ptupuatrImagenFirma);

        this.ptupuatrLatitud.nameInRequest = 'pt_p_atrlatitud';
        this.ptupuatrLatitud.alias = this.langMng.translateText(
            'cls_RespRegional_svc_TCREAROMODFIRMA_inArg_pt_p_atrLatitud',
            'Latitud');
        this.ptupuatrLatitud.mandatory = false;
        this.ptupuatrLatitud.dataType = Field.dtString;
        this.ptupuatrLatitud.maxLength = 25;
        this.ptupuatrLatitud.assignCSS();
        this.ptupuatrLatitud.addCSSClass('beginNewLine');
        this.fields.push(this.ptupuatrLatitud);

        this.ptupuatrLongitud.nameInRequest = 'pt_p_atrlongitud';
        this.ptupuatrLongitud.alias = this.langMng.translateText(
            'cls_RespRegional_svc_TCREAROMODFIRMA_inArg_pt_p_atrLongitud',
            'Longitud');
        this.ptupuatrLongitud.mandatory = false;
        this.ptupuatrLongitud.dataType = Field.dtString;
        this.ptupuatrLongitud.maxLength = 25;
        this.ptupuatrLongitud.assignCSS();
        this.fields.push(this.ptupuatrLongitud);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // p_thisRespRegional
            const defValputhisRespRegional = new Promise<void>((resolveDefValue) => {
                this.puthisRespRegional.setValue(this.appGlobalInfo.getOidOfAgentClass('RESPREGIONAL'));
                this.setSuppInfoputhisrespregional();
                resolveDefValue();
            });
            promiseArr.push(defValputhisRespRegional);

            Promise.all(promiseArr).then((results: any[]) => {
                this.util.hideWaitDialog();
                this.changeDetectorRef.markForCheck();
                resolve();
            });
        });
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['RespRegional'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisRespRegional.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisrespregional('SetValue', true);
            this.puthisRespRegional.enabled = false;
            this.executeDependecyRulesputhisrespregional('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisRespRegional'.toLowerCase()) {
            this.puthisRespRegional.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisrespregional('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisRespRegional argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisrespregional(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisrespregional();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisRespRegional argument
     */
    private setSuppInfoputhisrespregional(): void {

        const displaySetIC = 'PrimerNombre,SegundoNombre,PrimerApellido,SegundoApellido';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisRespRegional.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Respregional.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisRespRegional.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisRespRegional.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Respregional.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString, Field.dtString, Field.dtString]);
                    }
                }
                this.puthisRespRegional.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the p_thisRespRegional lense search argument
     */
    public onputhisrespregionalChange(): void {

        const searchText = this.puthisRespRegional.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisRespRegional.lastText) {
                this.puthisRespRegional.removeCSSClass('noResultsLenseSearch');
                this.puthisRespRegional.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Respregional.name, 'IC_RespRegionalNomApe', searchText, [], null).then(
                        (response: any) => {
                            this.puthisRespRegional.removeCSSClass('noResultsLenseSearch');
                            this.puthisRespRegional.searchResults = response.results;
                            if (this.puthisRespRegional.searchResults &&
                                this.puthisRespRegional.searchResults.length === 0) {
                                this.puthisRespRegional.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisRespRegional.searchResults &&
                                this.puthisRespRegional.searchResults.length === 1) {
                                this.processputhisrespregionalSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisRespRegional.removeCSSClass('noResultsLenseSearch');
                            this.puthisRespRegional.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisRespRegional.removeCSSClass('noResultsLenseSearch');
            this.puthisRespRegional.searchResults = [];
            this.cleanputhisrespregional();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisRespRegional lense search argument
     */
    public processputhisrespregionalSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisRespRegional.searchResults.length > index) {
            selectedInstance = this.puthisRespRegional.searchResults[index];
        }
        // Clean the result list
        this.puthisRespRegional.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisRespRegional.allowMultiSelect) {
                this.puthisRespRegional.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisRespRegional.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisrespregional('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisRespRegional lense search argument
     */
    public cleanputhisrespregional(): void {
        this.clearValidationMessages();
        this.puthisRespRegional.clean();
        this.executeDependecyRulesputhisrespregional('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisRespRegional'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisRespRegional.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_RespRegional';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
