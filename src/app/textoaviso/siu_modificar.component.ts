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
    selector: 'imes-textoaviso-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextoAvisoSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisTextoAviso: FieldOVLenseSearch;
    public puDescripcion: Field;
    public puValor: Field;

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
        this.idXML = 'Clas_1737625305088101Ser_3UIServ_1';
        this.className = ModelConstants.Textoaviso.name;
        this.iuName = ModelConstants.Textoaviso.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_TextoAviso_svc_modificar',
            'Modificar');

        // Create inbound argument components
        this.puthisTextoAviso = new FieldOVLenseSearch(this.langMng, this.util);
        this.puDescripcion = new Field(this.langMng);
        this.puValor = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisTextoAviso.nameInRequest = 'p_thistextoaviso';
        this.puthisTextoAviso.alias = this.langMng.translateText(
            'cls_TextoAviso_svc_modificar_inArg_p_thisTextoAviso',
            'Texto Aviso');
        this.puthisTextoAviso.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisTextoAviso.mandatory = true;
        this.puthisTextoAviso.dataType = ModelConstants.Textoaviso.name;
        this.puthisTextoAviso.allowMultiSelect = true;
        this.puthisTextoAviso.maxLength = 20;
        this.puthisTextoAviso.assignCSS();
        this.fields.push(this.puthisTextoAviso);

        this.puDescripcion.nameInRequest = 'p_descripcion';
        this.puDescripcion.alias = this.langMng.translateText(
            'cls_TextoAviso_svc_modificar_inArg_p_Descripcion',
            'Descripción');
        this.puDescripcion.mandatory = false;
        this.puDescripcion.dataType = Field.dtString;
        this.puDescripcion.maxLength = 255;
        this.puDescripcion.assignCSS();
        this.fields.push(this.puDescripcion);

        this.puValor.nameInRequest = 'p_valor';
        this.puValor.alias = this.langMng.translateText(
            'cls_TextoAviso_svc_modificar_inArg_p_Valor',
            'Valor');
        this.puValor.mandatory = true;
        this.puValor.dataType = Field.dtText;
        this.puValor.assignCSS();
        this.puValor.addCSSClass('NOMAYUSCULAS');
        this.fields.push(this.puValor);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['TextoAviso'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisTextoAviso.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhistextoaviso('SetValue', true);
            this.puthisTextoAviso.enabled = false;
            this.executeDependecyRulesputhistextoaviso('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisTextoAviso'.toLowerCase()) {
            this.puthisTextoAviso.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhistextoaviso('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisTextoAviso argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhistextoaviso(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhistextoaviso();
        }
        if ('SetValue' === event && this.puthisTextoAviso.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisTextoAviso();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisTextoAviso argument
     */
    private setSuppInfoputhistextoaviso(): void {

        const displaySetIC = 'Identificador';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisTextoAviso.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Textoaviso.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisTextoAviso.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisTextoAviso.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Textoaviso.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisTextoAviso.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisTextoAviso argument
     */
    private executeDependecyRules1puthisTextoAviso(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisTextoAviso,
                'descripcion,valor');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisTextoAvisoActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisTextoAviso argument
     */
    private executeDependecyRules1puthisTextoAvisoActions(): void {
        const varputhistextoaviso = this.getFirstInstanceFromCache(this.puthisTextoAviso);
        // v <> NULL
        if (varputhistextoaviso && !this.util.isNull(varputhistextoaviso)) {
            // p_Descripcion.SetValue( v.Descripcion )
            this.puDescripcion.setValue(varputhistextoaviso.get('descripcion'));
            // p_Valor.SetValue( v.Valor )
            this.puValor.setValue(varputhistextoaviso.get('valor'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }
    /**
     * Process the change in the p_thisTextoAviso lense search argument
     */
    public onputhistextoavisoChange(): void {
        this.executeLenseSearch(this.puthisTextoAviso, ModelConstants.Textoaviso.name, 'IC_TextoAviso',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanputhistextoaviso();
            }
            if (foundInstances === 1) {
                this.processputhistextoavisoSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisTextoAviso lense search argument
     */
    public processputhistextoavisoSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisTextoAviso.searchResults.length > index) {
            selectedInstance = this.puthisTextoAviso.searchResults[index];
        }
        // Clean the result list
        this.puthisTextoAviso.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisTextoAviso.allowMultiSelect) {
                this.puthisTextoAviso.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisTextoAviso.addInstances(selectedInstance);
        }
        this.executeDependecyRulesputhistextoaviso('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisTextoAviso lense search argument
     */
    public cleanputhistextoaviso(): void {
        this.clearValidationMessages();
        this.puthisTextoAviso.clean();
        this.executeDependecyRulesputhistextoaviso('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisTextoAviso'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisTextoAviso.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_TextoAviso';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
