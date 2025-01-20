import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldOVLenseSearch } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-plantillaemail-siu-modificartextomensaje',
    templateUrl: './siu_modificartextomensaje.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlantillaEmailSIUumodificarTextoMensajeComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisPlantillaEmail: FieldOVLenseSearch;
    public puTextoMensaje: Field;

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
        this.idXML = 'Clas_1431708631040445Ser_6UIServ_1';
        this.className = ModelConstants.Plantillaemail.name;
        this.iuName = ModelConstants.Plantillaemail.siuumodificartextomensaje;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificarTextoMensaje';
        this.title = this.langMng.translateText('cls_PlantillaEmail_svc_modificarTextoMensaje',
            'Modificar plantilla de email');

        // Create inbound argument components
        this.puthisPlantillaEmail = new FieldOVLenseSearch(this.langMng);
        this.puTextoMensaje = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisPlantillaEmail.nameInRequest = 'p_thisplantillaemail';
        this.puthisPlantillaEmail.alias = this.langMng.translateText(
            'cls_PlantillaEmail_svc_modificarTextoMensaje_inArg_p_thisPlantillaEmail',
            'Plantilla email');
        this.puthisPlantillaEmail.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisPlantillaEmail.mandatory = true;
        this.puthisPlantillaEmail.dataType = ModelConstants.Plantillaemail.name;
        this.puthisPlantillaEmail.maxLength = 255;
        this.puthisPlantillaEmail.assignCSS();
        this.fields.push(this.puthisPlantillaEmail);

        this.puTextoMensaje.nameInRequest = 'p_textomensaje';
        this.puTextoMensaje.alias = this.langMng.translateText(
            'cls_PlantillaEmail_svc_modificarTextoMensaje_inArg_p_TextoMensaje',
            'Texto mensaje');
        this.puTextoMensaje.mandatory = true;
        this.puTextoMensaje.dataType = Field.dtText;
        this.puTextoMensaje.assignCSS();
        this.fields.push(this.puTextoMensaje);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['PlantillaEmail'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisPlantillaEmail.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisplantillaemail('SetValue', true);
            this.puthisPlantillaEmail.enabled = false;
            this.executeDependecyRulesputhisplantillaemail('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisPlantillaEmail'.toLowerCase()) {
            this.puthisPlantillaEmail.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisplantillaemail('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisPlantillaEmail argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisplantillaemail(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisplantillaemail();
        }
        if ('SetValue' === event && this.puthisPlantillaEmail.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisPlantillaEmail();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisPlantillaEmail argument
     */
    private setSuppInfoputhisplantillaemail(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisPlantillaEmail.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Plantillaemail.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisPlantillaEmail.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisPlantillaEmail.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Plantillaemail.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisPlantillaEmail.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisPlantillaEmail argument
     */
    private executeDependecyRules1puthisPlantillaEmail(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisPlantillaEmail,
                'textomensaje');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisPlantillaEmailActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisPlantillaEmail argument
     */
    private executeDependecyRules1puthisPlantillaEmailActions(): void {
        const varputhisplantillaemail = this.getFirstInstanceFromCache(this.puthisPlantillaEmail);
        // v <> NULL
        if (varputhisplantillaemail && !this.util.isNull(varputhisplantillaemail)) {
            // p_TextoMensaje.SetValue( v.textomensaje )
            this.puTextoMensaje.setValue(varputhisplantillaemail.get('textomensaje'));
            // p_thisPlantillaEmail.SetActive( FALSE )
            this.puthisPlantillaEmail.enabled = false;
            this.executeDependecyRulesputhisplantillaemail('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisPlantillaEmail lense search argument
     */
    public onputhisplantillaemailChange(): void {

        const searchText = this.puthisPlantillaEmail.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisPlantillaEmail.lastText) {
                this.puthisPlantillaEmail.removeCSSClass('noResultsLenseSearch');
                this.puthisPlantillaEmail.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Plantillaemail.name, 'IC_PlantillaEmail', searchText, [], null).then(
                        (response: any) => {
                            this.puthisPlantillaEmail.removeCSSClass('noResultsLenseSearch');
                            this.puthisPlantillaEmail.searchResults = response.results;
                            if (this.puthisPlantillaEmail.searchResults &&
                                this.puthisPlantillaEmail.searchResults.length === 0) {
                                this.puthisPlantillaEmail.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisPlantillaEmail.searchResults &&
                                this.puthisPlantillaEmail.searchResults.length === 1) {
                                this.processputhisplantillaemailSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisPlantillaEmail.removeCSSClass('noResultsLenseSearch');
                            this.puthisPlantillaEmail.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisPlantillaEmail.removeCSSClass('noResultsLenseSearch');
            this.puthisPlantillaEmail.searchResults = [];
            this.cleanputhisplantillaemail();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisPlantillaEmail lense search argument
     */
    public processputhisplantillaemailSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisPlantillaEmail.searchResults.length > index) {
            selectedInstance = this.puthisPlantillaEmail.searchResults[index];
        }
        // Clean the result list
        this.puthisPlantillaEmail.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisPlantillaEmail.allowMultiSelect) {
                this.puthisPlantillaEmail.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisPlantillaEmail.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisplantillaemail('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisPlantillaEmail lense search argument
     */
    public cleanputhisplantillaemail(): void {
        this.clearValidationMessages();
        this.puthisPlantillaEmail.clean();
        this.executeDependecyRulesputhisplantillaemail('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisPlantillaEmail'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisPlantillaEmail.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_PlantillaEmail';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
