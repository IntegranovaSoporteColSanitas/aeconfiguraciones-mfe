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
    selector: 'imes-plantillaemail-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlantillaEmailSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisPlantillasEmail: FieldOVLenseSearch;
    public puAsunto: Field;
    public puTextoMensaje: Field;
    public puEmailConf: Field;

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
        this.idXML = 'Clas_1431708631040445Ser_3UIServ_1';
        this.className = ModelConstants.Plantillaemail.name;
        this.iuName = ModelConstants.Plantillaemail.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_PlantillaEmail_svc_modificar',
            'Modificar plantilla de email');

        // Create inbound argument components
        this.puthisPlantillasEmail = new FieldOVLenseSearch(this.langMng);
        this.puAsunto = new Field(this.langMng);
        this.puTextoMensaje = new Field(this.langMng);
        this.puEmailConf = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisPlantillasEmail.nameInRequest = 'p_thisplantillasemail';
        this.puthisPlantillasEmail.alias = this.langMng.translateText(
            'cls_PlantillaEmail_svc_modificar_inArg_p_thisPlantillasEmail',
            'Plantilla email');
        this.puthisPlantillasEmail.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisPlantillasEmail.mandatory = true;
        this.puthisPlantillasEmail.dataType = ModelConstants.Plantillaemail.name;
        this.puthisPlantillasEmail.allowMultiSelect = true;
        this.puthisPlantillasEmail.maxLength = 255;
        this.puthisPlantillasEmail.assignCSS();
        this.fields.push(this.puthisPlantillasEmail);

        this.puAsunto.nameInRequest = 'p_asunto';
        this.puAsunto.alias = this.langMng.translateText(
            'cls_PlantillaEmail_svc_modificar_inArg_p_Asunto',
            'Asunto');
        this.puAsunto.mandatory = true;
        this.puAsunto.dataType = Field.dtString;
        this.puAsunto.maxLength = 255;
        this.puAsunto.assignCSS();
        this.fields.push(this.puAsunto);

        this.puTextoMensaje.nameInRequest = 'p_textomensaje';
        this.puTextoMensaje.alias = this.langMng.translateText(
            'cls_PlantillaEmail_svc_modificar_inArg_p_TextoMensaje',
            'Texto mensaje');
        this.puTextoMensaje.mandatory = true;
        this.puTextoMensaje.dataType = Field.dtText;
        this.puTextoMensaje.assignCSS();
        this.fields.push(this.puTextoMensaje);

        this.puEmailConf.nameInRequest = 'p_emailconf';
        this.puEmailConf.alias = this.langMng.translateText(
            'cls_PlantillaEmail_svc_modificar_inArg_p_EmailConf',
            'Email confirmación');
        this.puEmailConf.mandatory = false;
        this.puEmailConf.dataType = Field.dtString;
        this.puEmailConf.maxLength = 100;
        this.puEmailConf.assignCSS();
        this.fields.push(this.puEmailConf);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['PlantillaEmail'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisPlantillasEmail.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisplantillasemail('SetValue', true);
            this.puthisPlantillasEmail.enabled = false;
            this.executeDependecyRulesputhisplantillasemail('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisPlantillasEmail'.toLowerCase()) {
            this.puthisPlantillasEmail.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisplantillasemail('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisPlantillasEmail argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisplantillasemail(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisplantillasemail();
        }
        if ('SetValue' === event && this.puthisPlantillasEmail.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisPlantillasEmail();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisPlantillasEmail argument
     */
    private setSuppInfoputhisplantillasemail(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisPlantillasEmail.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Plantillaemail.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisPlantillasEmail.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisPlantillasEmail.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Plantillaemail.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisPlantillasEmail.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisPlantillasEmail argument
     */
    private executeDependecyRules1puthisPlantillasEmail(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisPlantillasEmail,
                'asunto,textomensaje,emailconf');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisPlantillasEmailActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisPlantillasEmail argument
     */
    private executeDependecyRules1puthisPlantillasEmailActions(): void {
        const varputhisplantillasemail = this.getFirstInstanceFromCache(this.puthisPlantillasEmail);
        // v <> NULL
        if (varputhisplantillasemail && !this.util.isNull(varputhisplantillasemail)) {
            // p_Asunto.SetValue( v.asunto )
            this.puAsunto.setValue(varputhisplantillasemail.get('asunto'));
            // p_TextoMensaje.SetValue( v.textomensaje )
            this.puTextoMensaje.setValue(varputhisplantillasemail.get('textomensaje'));
            // p_EmailConf.SetValue( v.emailconf )
            this.puEmailConf.setValue(varputhisplantillasemail.get('emailconf'));
            // p_thisPlantillasEmail.SetActive( FALSE )
            this.puthisPlantillasEmail.enabled = false;
            this.executeDependecyRulesputhisplantillasemail('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisPlantillasEmail lense search argument
     */
    public onputhisplantillasemailChange(): void {

        const searchText = this.puthisPlantillasEmail.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisPlantillasEmail.lastText) {
                this.puthisPlantillasEmail.removeCSSClass('noResultsLenseSearch');
                this.puthisPlantillasEmail.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Plantillaemail.name, 'IC_PlantillaEmail', searchText, [], null).then(
                        (response: any) => {
                            this.puthisPlantillasEmail.removeCSSClass('noResultsLenseSearch');
                            this.puthisPlantillasEmail.searchResults = response.results;
                            if (this.puthisPlantillasEmail.searchResults &&
                                this.puthisPlantillasEmail.searchResults.length === 0) {
                                this.puthisPlantillasEmail.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisPlantillasEmail.searchResults &&
                                this.puthisPlantillasEmail.searchResults.length === 1) {
                                this.processputhisplantillasemailSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisPlantillasEmail.removeCSSClass('noResultsLenseSearch');
                            this.puthisPlantillasEmail.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisPlantillasEmail.removeCSSClass('noResultsLenseSearch');
            this.puthisPlantillasEmail.searchResults = [];
            this.cleanputhisplantillasemail();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisPlantillasEmail lense search argument
     */
    public processputhisplantillasemailSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisPlantillasEmail.searchResults.length > index) {
            selectedInstance = this.puthisPlantillasEmail.searchResults[index];
        }
        // Clean the result list
        this.puthisPlantillasEmail.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisPlantillasEmail.allowMultiSelect) {
                this.puthisPlantillasEmail.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisPlantillasEmail.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisplantillasemail('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisPlantillasEmail lense search argument
     */
    public cleanputhisplantillasemail(): void {
        this.clearValidationMessages();
        this.puthisPlantillasEmail.clean();
        this.executeDependecyRulesputhisplantillasemail('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisPlantillasEmail'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisPlantillasEmail.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_PlantillaEmail';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
