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
    selector: 'imes-municipio-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MunicipioSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puagrDepartamento: FieldOVLenseSearch;
    public puatrCodigo: Field;
    public puatrDescripcion: Field;
    public puatrCodigoLegal: Field;
    public puatrEsValidoEPS: FieldDefinedSelection;
    public puatrAplicaIVA: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431890034688728Ser_1UIServ_1';
        this.className = ModelConstants.Municipio.name;
        this.iuName = ModelConstants.Municipio.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_Municipio_svc_crear',
            'Crear municipio');

        // Create inbound argument components
        this.puagrDepartamento = new FieldOVLenseSearch(this.langMng, this.util);
        this.puatrCodigo = new Field(this.langMng);
        this.puatrDescripcion = new Field(this.langMng);
        this.puatrCodigoLegal = new Field(this.langMng);
        this.puatrEsValidoEPS = new FieldDefinedSelection(this.langMng);
        this.puatrAplicaIVA = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puagrDepartamento.nameInRequest = 'p_agrdepartamento';
        this.puagrDepartamento.alias = this.langMng.translateText(
            'cls_Municipio_svc_crear_inArg_p_agrDepartamento',
            'Departamento');
        this.puagrDepartamento.mandatory = false;
        this.puagrDepartamento.dataType = ModelConstants.Departamento.name;
        this.puagrDepartamento.maxLength = 150;
        this.puagrDepartamento.assignCSS();
        this.fields.push(this.puagrDepartamento);

        this.puatrCodigo.nameInRequest = 'p_atrcodigo';
        this.puatrCodigo.alias = this.langMng.translateText(
            'cls_Municipio_svc_crear_inArg_p_atrCodigo',
            'Código');
        this.puatrCodigo.mandatory = true;
        this.puatrCodigo.dataType = Field.dtInt;
        this.puatrCodigo.assignCSS();
        this.fields.push(this.puatrCodigo);

        this.puatrDescripcion.nameInRequest = 'p_atrdescripcion';
        this.puatrDescripcion.alias = this.langMng.translateText(
            'cls_Municipio_svc_crear_inArg_p_atrDescripcion',
            'Descripción');
        this.puatrDescripcion.mandatory = true;
        this.puatrDescripcion.dataType = Field.dtString;
        this.puatrDescripcion.maxLength = 150;
        this.puatrDescripcion.assignCSS();
        this.fields.push(this.puatrDescripcion);

        this.puatrCodigoLegal.nameInRequest = 'p_atrcodigolegal';
        this.puatrCodigoLegal.alias = this.langMng.translateText(
            'cls_Municipio_svc_crear_inArg_p_atrCodigoLegal',
            'Código legal');
        this.puatrCodigoLegal.mandatory = true;
        this.puatrCodigoLegal.dataType = Field.dtString;
        this.puatrCodigoLegal.maxLength = 10;
        this.puatrCodigoLegal.assignCSS();
        this.fields.push(this.puatrCodigoLegal);

        this.puatrEsValidoEPS.nameInRequest = 'p_atresvalidoeps';
        this.puatrEsValidoEPS.alias = this.langMng.translateText(
            'cls_Municipio_svc_crear_inArg_p_atrEsValidoEPS',
            'Válido EPS');
        this.puatrEsValidoEPS.mandatory = true;
        this.puatrEsValidoEPS.dataType = Field.dtBool;
        this.puatrEsValidoEPS.options = DefinedSelections.DS_SINO;
        this.puatrEsValidoEPS.value = false;
        this.puatrEsValidoEPS.assignCSS();
        this.fields.push(this.puatrEsValidoEPS);

        this.puatrAplicaIVA.nameInRequest = 'p_atraplicaiva';
        this.puatrAplicaIVA.alias = this.langMng.translateText(
            'cls_Municipio_svc_crear_inArg_p_atrAplicaIVA',
            'Aplica IVA');
        this.puatrAplicaIVA.mandatory = true;
        this.puatrAplicaIVA.dataType = Field.dtBool;
        this.puatrAplicaIVA.options = DefinedSelections.DS_SINO;
        this.puatrAplicaIVA.value = false;
        this.puatrAplicaIVA.assignCSS();
        this.fields.push(this.puatrAplicaIVA);
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
            if (lastRole === 'Departamento') {
                this.puagrDepartamento.setValue(lastRoleOid);
                this.executeDependecyRulespuagrdepartamento('SetValue', true);
                this.puagrDepartamento.enabled = false;
                this.executeDependecyRulespuagrdepartamento('SetEnabled', true);
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
        if (exchInfo.originArgumentName.toLowerCase() === 'puagrDepartamento'.toLowerCase()) {
            this.puagrDepartamento.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespuagrdepartamento('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_agrDepartamento argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuagrdepartamento(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopuagrdepartamento();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_agrDepartamento argument
     */
    private setSuppInfopuagrdepartamento(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puagrDepartamento.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Departamento.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puagrDepartamento.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puagrDepartamento.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Departamento.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puagrDepartamento.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * Process the change in the p_agrDepartamento lense search argument
     */
    public onpuagrdepartamentoChange(): void {
        this.executeLenseSearch(this.puagrDepartamento, ModelConstants.Departamento.name, 'IC_Departamento',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanpuagrdepartamento();
            }
            if (foundInstances === 1) {
                this.processpuagrdepartamentoSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_agrDepartamento lense search argument
     */
    public processpuagrdepartamentoSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puagrDepartamento.searchResults.length > index) {
            selectedInstance = this.puagrDepartamento.searchResults[index];
        }
        // Clean the result list
        this.puagrDepartamento.searchResults = [];
        if (selectedInstance) {
            if (!this.puagrDepartamento.allowMultiSelect) {
                this.puagrDepartamento.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puagrDepartamento.addInstances(selectedInstance);
        }
        this.executeDependecyRulespuagrdepartamento('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_agrDepartamento lense search argument
     */
    public cleanpuagrdepartamento(): void {
        this.clearValidationMessages();
        this.puagrDepartamento.clean();
        this.executeDependecyRulespuagrdepartamento('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puagrDepartamento'.toLowerCase() === argumentName.toLowerCase()) {
            this.puagrDepartamento.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Departamento';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
