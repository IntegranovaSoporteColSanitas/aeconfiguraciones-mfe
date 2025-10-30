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
    selector: 'imes-parentescodom-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentescoDomSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puagrParentesco: FieldOVPreload;
    public puagrDominio: FieldOVLenseSearch;
    public puatrEdadMinimaA: Field;
    public puatrEdadMaximaA: Field;
    public puatrEdadMinimaD: Field;
    public puatrEdadMaximaP: Field;

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
        this.idXML = 'Clas_1434710704128231Ser_1UIServ_1';
        this.className = ModelConstants.Parentescodom.name;
        this.iuName = ModelConstants.Parentescodom.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_ParentescoDom_svc_crear',
            'Crear parentesco de dominio');

        // Create inbound argument components
        this.puagrParentesco = new FieldOVPreload(this.langMng);
        this.puagrDominio = new FieldOVLenseSearch(this.langMng, this.util);
        this.puatrEdadMinimaA = new Field(this.langMng);
        this.puatrEdadMaximaA = new Field(this.langMng);
        this.puatrEdadMinimaD = new Field(this.langMng);
        this.puatrEdadMaximaP = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puagrParentesco.nameInRequest = 'p_agrparentesco';
        this.puagrParentesco.alias = this.langMng.translateText(
            'cls_ParentescoDom_svc_crear_inArg_p_agrParentesco',
            'Parentesco');
        this.puagrParentesco.mandatory = true;
        this.puagrParentesco.dataType = ModelConstants.Parentesco.name;
        this.puagrParentesco.maxLength = 100;
        this.puagrParentesco.assignCSS();
        this.fields.push(this.puagrParentesco);

        this.puagrDominio.nameInRequest = 'p_agrdominio';
        this.puagrDominio.alias = this.langMng.translateText(
            'cls_ParentescoDom_svc_crear_inArg_p_agrDominio',
            'Dominio');
        this.puagrDominio.mandatory = true;
        this.puagrDominio.dataType = ModelConstants.Dominio.name;
        this.puagrDominio.maxLength = 250;
        this.puagrDominio.assignCSS();
        this.fields.push(this.puagrDominio);

        this.puatrEdadMinimaA.nameInRequest = 'p_atredadminimaa';
        this.puatrEdadMinimaA.alias = this.langMng.translateText(
            'cls_ParentescoDom_svc_crear_inArg_p_atrEdadMinimaA',
            'Edad mínima (años)');
        this.puatrEdadMinimaA.mandatory = false;
        this.puatrEdadMinimaA.dataType = Field.dtInt;
        this.puatrEdadMinimaA.assignCSS();
        this.fields.push(this.puatrEdadMinimaA);

        this.puatrEdadMaximaA.nameInRequest = 'p_atredadmaximaa';
        this.puatrEdadMaximaA.alias = this.langMng.translateText(
            'cls_ParentescoDom_svc_crear_inArg_p_atrEdadMaximaA',
            'Edad máxima (años)');
        this.puatrEdadMaximaA.mandatory = false;
        this.puatrEdadMaximaA.dataType = Field.dtInt;
        this.puatrEdadMaximaA.assignCSS();
        this.fields.push(this.puatrEdadMaximaA);

        this.puatrEdadMinimaD.nameInRequest = 'p_atredadminimad';
        this.puatrEdadMinimaD.alias = this.langMng.translateText(
            'cls_ParentescoDom_svc_crear_inArg_p_atrEdadMinimaD',
            'Edad mínima (días)');
        this.puatrEdadMinimaD.mandatory = false;
        this.puatrEdadMinimaD.dataType = Field.dtInt;
        this.puatrEdadMinimaD.assignCSS();
        this.fields.push(this.puatrEdadMinimaD);

        this.puatrEdadMaximaP.nameInRequest = 'p_atredadmaximap';
        this.puatrEdadMaximaP.alias = this.langMng.translateText(
            'cls_ParentescoDom_svc_crear_inArg_p_atrEdadMaximaP',
            'Edad máxima (permanencia)');
        this.puatrEdadMaximaP.mandatory = false;
        this.puatrEdadMaximaP.dataType = Field.dtInt;
        this.puatrEdadMaximaP.assignCSS();
        this.fields.push(this.puatrEdadMaximaP);
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
            if (lastRole === 'Parentesco') {
                this.puagrParentesco.setValue(lastRoleOid);
                this.puagrParentesco.enabled = false;
            }
            if (lastRole === 'Dominio') {
                this.puagrDominio.setValue(lastRoleOid);
                this.executeDependecyRulespuagrdominio('SetValue', true);
                this.puagrDominio.enabled = false;
                this.executeDependecyRulespuagrdominio('SetEnabled', true);
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // puagrParentesco
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Parentesco', 'IC_Parentesco', [], null, 'OC_Parentesco').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.puagrParentesco.loadPreload(response.results);
                } else {
                    this.puagrParentesco.loadPreload([]);
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
