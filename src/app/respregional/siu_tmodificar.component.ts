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
    selector: 'imes-respregional-siu-tmodificar',
    templateUrl: './siu_tmodificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RespRegionalSIUuTMODIFICARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisRespRegional: FieldOVLenseSearch;
    public ptupuUsuarioLDAP: Field;
    public ptupuPrimerNombre: Field;
    public ptupuSegundoNombre: Field;
    public ptupuPrimerApellido: Field;
    public ptupuSegundoApellido: Field;
    public ptupuEmail: Field;
    public ptupuevcRegional: FieldOVPreload;

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
        this.idXML = 'Clas_1431871684608346Ser_7UIServ_1';
        this.className = ModelConstants.Respregional.name;
        this.iuName = ModelConstants.Respregional.siuutmodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TMODIFICAR';
        this.title = this.langMng.translateText('cls_RespRegional_svc_TMODIFICAR',
            'Modificar responsable de regional');

        // Create inbound argument components
        this.puthisRespRegional = new FieldOVLenseSearch(this.langMng);
        this.ptupuUsuarioLDAP = new Field(this.langMng);
        this.ptupuPrimerNombre = new Field(this.langMng);
        this.ptupuSegundoNombre = new Field(this.langMng);
        this.ptupuPrimerApellido = new Field(this.langMng);
        this.ptupuSegundoApellido = new Field(this.langMng);
        this.ptupuEmail = new Field(this.langMng);
        this.ptupuevcRegional = new FieldOVPreload(this.langMng);

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
            'cls_RespRegional_svc_TMODIFICAR_inArg_p_thisRespRegional',
            'Responsable regional');
        this.puthisRespRegional.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisRespRegional.mandatory = true;
        this.puthisRespRegional.dataType = ModelConstants.Respregional.name;
        this.puthisRespRegional.maxLength = 200;
        this.puthisRespRegional.assignCSS();
        this.fields.push(this.puthisRespRegional);

        this.ptupuUsuarioLDAP.nameInRequest = 'pt_p_usuarioldap';
        this.ptupuUsuarioLDAP.alias = this.langMng.translateText(
            'cls_RespRegional_svc_TMODIFICAR_inArg_pt_p_UsuarioLDAP',
            'Usuario LDAP');
        this.ptupuUsuarioLDAP.mandatory = false;
        this.ptupuUsuarioLDAP.dataType = Field.dtString;
        this.ptupuUsuarioLDAP.maxLength = 50;
        this.ptupuUsuarioLDAP.assignCSS();
        this.fields.push(this.ptupuUsuarioLDAP);

        this.ptupuPrimerNombre.nameInRequest = 'pt_p_primernombre';
        this.ptupuPrimerNombre.alias = this.langMng.translateText(
            'cls_RespRegional_svc_TMODIFICAR_inArg_pt_p_PrimerNombre',
            'Primer nombre');
        this.ptupuPrimerNombre.mandatory = true;
        this.ptupuPrimerNombre.dataType = Field.dtString;
        this.ptupuPrimerNombre.maxLength = 50;
        this.ptupuPrimerNombre.assignCSS();
        this.fields.push(this.ptupuPrimerNombre);

        this.ptupuSegundoNombre.nameInRequest = 'pt_p_segundonombre';
        this.ptupuSegundoNombre.alias = this.langMng.translateText(
            'cls_RespRegional_svc_TMODIFICAR_inArg_pt_p_SegundoNombre',
            'Segundo nombre');
        this.ptupuSegundoNombre.mandatory = false;
        this.ptupuSegundoNombre.dataType = Field.dtString;
        this.ptupuSegundoNombre.maxLength = 50;
        this.ptupuSegundoNombre.assignCSS();
        this.fields.push(this.ptupuSegundoNombre);

        this.ptupuPrimerApellido.nameInRequest = 'pt_p_primerapellido';
        this.ptupuPrimerApellido.alias = this.langMng.translateText(
            'cls_RespRegional_svc_TMODIFICAR_inArg_pt_p_PrimerApellido',
            'Primer apellido');
        this.ptupuPrimerApellido.mandatory = true;
        this.ptupuPrimerApellido.dataType = Field.dtString;
        this.ptupuPrimerApellido.maxLength = 50;
        this.ptupuPrimerApellido.assignCSS();
        this.fields.push(this.ptupuPrimerApellido);

        this.ptupuSegundoApellido.nameInRequest = 'pt_p_segundoapellido';
        this.ptupuSegundoApellido.alias = this.langMng.translateText(
            'cls_RespRegional_svc_TMODIFICAR_inArg_pt_p_SegundoApellido',
            'Segundo apellido');
        this.ptupuSegundoApellido.mandatory = false;
        this.ptupuSegundoApellido.dataType = Field.dtString;
        this.ptupuSegundoApellido.maxLength = 50;
        this.ptupuSegundoApellido.assignCSS();
        this.fields.push(this.ptupuSegundoApellido);

        this.ptupuEmail.nameInRequest = 'pt_p_email';
        this.ptupuEmail.alias = this.langMng.translateText(
            'cls_RespRegional_svc_TMODIFICAR_inArg_pt_p_Email',
            'Email');
        this.ptupuEmail.mandatory = false;
        this.ptupuEmail.dataType = Field.dtString;
        this.ptupuEmail.maxLength = 100;
        this.ptupuEmail.assignCSS();
        this.fields.push(this.ptupuEmail);

        this.ptupuevcRegional.nameInRequest = 'pt_p_evcregional';
        this.ptupuevcRegional.alias = this.langMng.translateText(
            'cls_RespRegional_svc_TMODIFICAR_inArg_pt_p_evcRegional',
            'Regional');
        this.ptupuevcRegional.mandatory = false;
        this.ptupuevcRegional.dataType = ModelConstants.Regional.name;
        this.ptupuevcRegional.maxLength = 150;
        this.ptupuevcRegional.assignCSS();
        this.fields.push(this.ptupuevcRegional);
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
            if (lastRole === 'Regional') {
                this.ptupuevcRegional.setValue(lastRoleOid);
                this.ptupuevcRegional.enabled = false;
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptupuevcRegional
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Regional', 'IC_Regional', [], null, '').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuevcRegional.loadPreload(response.results);
                } else {
                    this.ptupuevcRegional.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
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
        if ('SetValue' === event && this.puthisRespRegional.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisRespRegional();
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
     * Dependency rule 1 for p_thisRespRegional argument
     */
    private executeDependecyRules1puthisRespRegional(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisRespRegional,
                'email,regional.Codigo,primerapellido,primernombre,segundoapellido,segundonombre,usuarioldap');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisRespRegionalActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisRespRegional argument
     */
    private executeDependecyRules1puthisRespRegionalActions(): void {
        const varputhisrespregional = this.getFirstInstanceFromCache(this.puthisRespRegional);
        // v <> NULL
        if (varputhisrespregional && !this.util.isNull(varputhisrespregional)) {
            // pt_p_Email.SetValue( v.email )
            this.ptupuEmail.setValue(varputhisrespregional.get('email'));
            // pt_p_evcRegional.SetValue( v.regional )
            this.ptupuevcRegional.setValue(this.util.oidBuilder.buildOidRegional(
                this.util.getInt(varputhisrespregional.get('regional.Codigo'))));
            // pt_p_PrimerApellido.SetValue( v.primerapellido )
            this.ptupuPrimerApellido.setValue(varputhisrespregional.get('primerapellido'));
            // pt_p_PrimerNombre.SetValue( v.primernombre )
            this.ptupuPrimerNombre.setValue(varputhisrespregional.get('primernombre'));
            // pt_p_SegundoApellido.SetValue( v.segundoapellido )
            this.ptupuSegundoApellido.setValue(varputhisrespregional.get('segundoapellido'));
            // pt_p_SegundoNombre.SetValue( v.segundonombre )
            this.ptupuSegundoNombre.setValue(varputhisrespregional.get('segundonombre'));
            // pt_p_UsuarioLDAP.SetValue( v.usuarioldap )
            this.ptupuUsuarioLDAP.setValue(varputhisrespregional.get('usuarioldap'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
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
