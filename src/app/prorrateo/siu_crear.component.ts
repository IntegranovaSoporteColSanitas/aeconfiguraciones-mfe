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
    selector: 'imes-prorrateo-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProrrateoSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puagrDominio: FieldOVLenseSearch;
    public puatrDia: Field;
    public puatrPorcentaje: Field;

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
        this.idXML = 'Clas_1547053432832527Ser_1UIServ_1';
        this.className = ModelConstants.Prorrateo.name;
        this.iuName = ModelConstants.Prorrateo.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_Prorrateo_svc_crear',
            'Crear');

        // Create inbound argument components
        this.puagrDominio = new FieldOVLenseSearch(this.langMng, this.util);
        this.puatrDia = new Field(this.langMng);
        this.puatrPorcentaje = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puagrDominio.nameInRequest = 'p_agrdominio';
        this.puagrDominio.alias = this.langMng.translateText(
            'cls_Prorrateo_svc_crear_inArg_p_agrDominio',
            'Dominio');
        this.puagrDominio.mandatory = true;
        this.puagrDominio.dataType = ModelConstants.Dominio.name;
        this.puagrDominio.maxLength = 250;
        this.puagrDominio.assignCSS();
        this.fields.push(this.puagrDominio);

        this.puatrDia.nameInRequest = 'p_atrdia';
        this.puatrDia.alias = this.langMng.translateText(
            'cls_Prorrateo_svc_crear_inArg_p_atrDia',
            'Día del mes');
        this.puatrDia.mandatory = true;
        this.puatrDia.dataType = Field.dtNat;
        this.puatrDia.assignCSS();
        this.fields.push(this.puatrDia);

        this.puatrPorcentaje.nameInRequest = 'p_atrporcentaje';
        this.puatrPorcentaje.alias = this.langMng.translateText(
            'cls_Prorrateo_svc_crear_inArg_p_atrPorcentaje',
            'Porcentaje');
        this.puatrPorcentaje.mandatory = true;
        this.puatrPorcentaje.dataType = Field.dtReal;
        this.puatrPorcentaje.assignCSS();
        this.fields.push(this.puatrPorcentaje);
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
            if (lastRole === 'Dominio') {
                this.puagrDominio.setValue(lastRoleOid);
                this.executeDependecyRulespuagrdominio('SetValue', true);
                this.puagrDominio.enabled = false;
                this.executeDependecyRulespuagrdominio('SetEnabled', true);
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
        if (exchInfo.originArgumentName.toLowerCase() === 'puagrDominio'.toLowerCase()) {
            this.puagrDominio.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespuagrdominio('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_agrDominio argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuagrdominio(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopuagrdominio();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_agrDominio argument
     */
    private setSuppInfopuagrdominio(): void {

        const displaySetIC = 'ProductoT.Descripcion,PlanT.Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puagrDominio.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Dominio.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puagrDominio.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puagrDominio.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Dominio.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString]);
                    }
                }
                this.puagrDominio.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * Process the change in the p_agrDominio lense search argument
     */
    public onpuagrdominioChange(): void {
        this.executeLenseSearch(this.puagrDominio, ModelConstants.Dominio.name, 'IC_Dominio',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanpuagrdominio();
            }
            if (foundInstances === 1) {
                this.processpuagrdominioSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_agrDominio lense search argument
     */
    public processpuagrdominioSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puagrDominio.searchResults.length > index) {
            selectedInstance = this.puagrDominio.searchResults[index];
        }
        // Clean the result list
        this.puagrDominio.searchResults = [];
        if (selectedInstance) {
            if (!this.puagrDominio.allowMultiSelect) {
                this.puagrDominio.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puagrDominio.addInstances(selectedInstance);
        }
        this.executeDependecyRulespuagrdominio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_agrDominio lense search argument
     */
    public cleanpuagrdominio(): void {
        this.clearValidationMessages();
        this.puagrDominio.clean();
        this.executeDependecyRulespuagrdominio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puagrDominio'.toLowerCase() === argumentName.toLowerCase()) {
            this.puagrDominio.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Dominio_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
