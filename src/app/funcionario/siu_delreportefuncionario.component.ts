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
    selector: 'imes-funcionario-siu-delreportefuncionario',
    templateUrl: './siu_delreportefuncionario.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FuncionarioSIUuDelReporteFuncionarioComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisFuncionario: FieldOVLenseSearch;
    public puevcReportesProcAlm: FieldOVPreload;

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
        this.idXML = 'Clas_1431626842112800Ser_37UIServ_1';
        this.className = ModelConstants.Funcionario.name;
        this.iuName = ModelConstants.Funcionario.siuudelreportefuncionario;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'DelReporteFuncionario';
        this.title = this.langMng.translateText('cls_Funcionario_svc_DelReporteFuncionario',
            'Quitar usuario');

        // Create inbound argument components
        this.puthisFuncionario = new FieldOVLenseSearch(this.langMng);
        this.puevcReportesProcAlm = new FieldOVPreload(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisFuncionario.nameInRequest = 'p_thisfuncionario';
        this.puthisFuncionario.alias = this.langMng.translateText(
            'cls_Funcionario_svc_DelReporteFuncionario_inArg_p_thisFuncionario',
            'Funcionarios');
        this.puthisFuncionario.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisFuncionario.mandatory = true;
        this.puthisFuncionario.dataType = ModelConstants.Funcionario.name;
        this.puthisFuncionario.maxLength = 200;
        this.puthisFuncionario.assignCSS();
        this.fields.push(this.puthisFuncionario);

        this.puevcReportesProcAlm.nameInRequest = 'p_evcreportesprocalm';
        this.puevcReportesProcAlm.alias = this.langMng.translateText(
            'cls_Funcionario_svc_DelReporteFuncionario_inArg_p_evcReportesProcAlm',
            'Reportes');
        this.puevcReportesProcAlm.mandatory = true;
        this.puevcReportesProcAlm.dataType = ModelConstants.Reportesprocalm.name;
        this.puevcReportesProcAlm.maxLength = 50;
        this.puevcReportesProcAlm.assignCSS();
        this.fields.push(this.puevcReportesProcAlm);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Funcionario', 'Admin', 'SuperAdmin', 'Asesor', 'AreaMedica', 'Afiliaciones', 'RespRegional', 'Gestor',
            'MesaDeApoyo'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisFuncionario.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisfuncionario('SetValue', true);
            this.puthisFuncionario.enabled = false;
            this.executeDependecyRulesputhisfuncionario('SetEnabled', true);
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
            if (lastRole === 'Funcionarios') {
                this.puthisFuncionario.setValue(lastRoleOid);
                this.executeDependecyRulesputhisfuncionario('SetValue', true);
                this.puthisFuncionario.enabled = false;
                this.executeDependecyRulesputhisfuncionario('SetEnabled', true);
            }
            if (lastRole === 'Reportes') {
                this.puevcReportesProcAlm.setValue(lastRoleOid);
                this.puevcReportesProcAlm.enabled = false;
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // puevcReportesProcAlm
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('ReportesProcAlm', 'IC_ReportesProcAlm', [], null, '').then(
            (response: any) => {
                if (response && response.results) {
                    this.puevcReportesProcAlm.loadPreload(response.results);
                } else {
                    this.puevcReportesProcAlm.loadPreload([]);
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
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisFuncionario'.toLowerCase()) {
            this.puthisFuncionario.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisfuncionario('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisFuncionario argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisfuncionario(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisfuncionario();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisFuncionario argument
     */
    private setSuppInfoputhisfuncionario(): void {

        const displaySetIC = 'PrimerNombre,SegundoNombre,PrimerApellido,SegundoApellido';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisFuncionario.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Funcionario.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisFuncionario.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisFuncionario.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Funcionario.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString, Field.dtString, Field.dtString]);
                    }
                }
                this.puthisFuncionario.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the p_thisFuncionario lense search argument
     */
    public onputhisfuncionarioChange(): void {

        const searchText = this.puthisFuncionario.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisFuncionario.lastText) {
                this.puthisFuncionario.removeCSSClass('noResultsLenseSearch');
                this.puthisFuncionario.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Funcionario.name, 'IC_Agente', searchText, [], null).then(
                        (response: any) => {
                            this.puthisFuncionario.removeCSSClass('noResultsLenseSearch');
                            this.puthisFuncionario.searchResults = response.results;
                            if (this.puthisFuncionario.searchResults &&
                                this.puthisFuncionario.searchResults.length === 0) {
                                this.puthisFuncionario.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisFuncionario.searchResults &&
                                this.puthisFuncionario.searchResults.length === 1) {
                                this.processputhisfuncionarioSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisFuncionario.removeCSSClass('noResultsLenseSearch');
                            this.puthisFuncionario.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisFuncionario.removeCSSClass('noResultsLenseSearch');
            this.puthisFuncionario.searchResults = [];
            this.cleanputhisfuncionario();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisFuncionario lense search argument
     */
    public processputhisfuncionarioSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisFuncionario.searchResults.length > index) {
            selectedInstance = this.puthisFuncionario.searchResults[index];
        }
        // Clean the result list
        this.puthisFuncionario.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisFuncionario.allowMultiSelect) {
                this.puthisFuncionario.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisFuncionario.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisfuncionario('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisFuncionario lense search argument
     */
    public cleanputhisfuncionario(): void {
        this.clearValidationMessages();
        this.puthisFuncionario.clean();
        this.executeDependecyRulesputhisfuncionario('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisFuncionario'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisFuncionario.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Funcionario_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
