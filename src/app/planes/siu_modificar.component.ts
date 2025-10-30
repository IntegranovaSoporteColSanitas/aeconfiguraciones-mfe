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
    selector: 'imes-planes-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanesSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisPlan: FieldOVLenseSearch;
    public puEsBancoRep: FieldDefinedSelection;
    public puAceptaPreexistencias: FieldDefinedSelection;
    public puEsVoluntario: FieldDefinedSelection;
    public puInicioContDiaUno: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431695392768502Ser_3UIServ_1';
        this.className = ModelConstants.Planes.name;
        this.iuName = ModelConstants.Planes.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_Planes_svc_modificar',
            'Modificar plan');

        // Create inbound argument components
        this.puthisPlan = new FieldOVLenseSearch(this.langMng, this.util);
        this.puEsBancoRep = new FieldDefinedSelection(this.langMng);
        this.puAceptaPreexistencias = new FieldDefinedSelection(this.langMng);
        this.puEsVoluntario = new FieldDefinedSelection(this.langMng);
        this.puInicioContDiaUno = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisPlan.nameInRequest = 'p_thisplan';
        this.puthisPlan.alias = this.langMng.translateText(
            'cls_Planes_svc_modificar_inArg_p_thisPlan',
            'Plan');
        this.puthisPlan.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisPlan.mandatory = true;
        this.puthisPlan.dataType = ModelConstants.Planes.name;
        this.puthisPlan.allowMultiSelect = true;
        this.puthisPlan.maxLength = 150;
        this.puthisPlan.assignCSS();
        this.fields.push(this.puthisPlan);

        this.puEsBancoRep.nameInRequest = 'p_esbancorep';
        this.puEsBancoRep.alias = this.langMng.translateText(
            'cls_Planes_svc_modificar_inArg_p_EsBancoRep',
            'Es banco república');
        this.puEsBancoRep.mandatory = true;
        this.puEsBancoRep.dataType = Field.dtBool;
        this.puEsBancoRep.options = DefinedSelections.DS_SINO;
        this.puEsBancoRep.value = false;
        this.puEsBancoRep.assignCSS();
        this.fields.push(this.puEsBancoRep);

        this.puAceptaPreexistencias.nameInRequest = 'p_aceptapreexistencias';
        this.puAceptaPreexistencias.alias = this.langMng.translateText(
            'cls_Planes_svc_modificar_inArg_p_AceptaPreexistencias',
            'Acepta preexistencias');
        this.puAceptaPreexistencias.mandatory = true;
        this.puAceptaPreexistencias.dataType = Field.dtBool;
        this.puAceptaPreexistencias.options = DefinedSelections.DS_SINO;
        this.puAceptaPreexistencias.value = false;
        this.puAceptaPreexistencias.assignCSS();
        this.fields.push(this.puAceptaPreexistencias);

        this.puEsVoluntario.nameInRequest = 'p_esvoluntario';
        this.puEsVoluntario.alias = this.langMng.translateText(
            'cls_Planes_svc_modificar_inArg_p_EsVoluntario',
            'Es Voluntario');
        this.puEsVoluntario.mandatory = true;
        this.puEsVoluntario.dataType = Field.dtBool;
        this.puEsVoluntario.options = DefinedSelections.DS_SINO;
        this.puEsVoluntario.value = false;
        this.puEsVoluntario.assignCSS();
        this.fields.push(this.puEsVoluntario);

        this.puInicioContDiaUno.nameInRequest = 'p_iniciocontdiauno';
        this.puInicioContDiaUno.alias = this.langMng.translateText(
            'cls_Planes_svc_modificar_inArg_p_InicioContDiaUno',
            'Inicio de contratación día uno');
        this.puInicioContDiaUno.mandatory = true;
        this.puInicioContDiaUno.dataType = Field.dtBool;
        this.puInicioContDiaUno.options = DefinedSelections.DS_SINO;
        this.puInicioContDiaUno.assignCSS();
        this.fields.push(this.puInicioContDiaUno);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // p_InicioContDiaUno
            const defValpuInicioContDiaUno = new Promise<void>((resolveDefValue) => {
                this.puInicioContDiaUno.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuInicioContDiaUno);

            Promise.all(promiseArr).then((results: any[]) => {
                this.setShowWait(false);
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
            ['Planes'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisPlan.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisplan('SetValue', true);
            this.puthisPlan.enabled = false;
            this.executeDependecyRulesputhisplan('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisPlan'.toLowerCase()) {
            this.puthisPlan.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisplan('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisPlan argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisplan(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisplan();
        }
        if ('SetValue' === event && this.puthisPlan.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisPlan();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisPlan argument
     */
    private setSuppInfoputhisplan(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisPlan.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Planes.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisPlan.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisPlan.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Planes.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisPlan.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisPlan argument
     */
    private executeDependecyRules1puthisPlan(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisPlan,
                'esbancorep,aceptapreexistencias,esvoluntario,iniciocontdiauno');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisPlanActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisPlan argument
     */
    private executeDependecyRules1puthisPlanActions(): void {
        const varputhisplan = this.getFirstInstanceFromCache(this.puthisPlan);
        // v <> NULL
        if (varputhisplan && !this.util.isNull(varputhisplan)) {
            // p_EsBancoRep.SetValue( v.esbancorep )
            this.puEsBancoRep.setValue(this.util.getBool(varputhisplan.get('esbancorep')));
            // p_AceptaPreexistencias.SetValue( v.aceptapreexistencias )
            this.puAceptaPreexistencias.setValue(this.util.getBool(varputhisplan.get('aceptapreexistencias')));
            // p_EsVoluntario.SetValue( v.esvoluntario )
            this.puEsVoluntario.setValue(this.util.getBool(varputhisplan.get('esvoluntario')));
            // p_InicioContDiaUno.SetValue( v.InicioContDiaUno )
            this.puInicioContDiaUno.setValue(this.util.getBool(varputhisplan.get('iniciocontdiauno')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }
    /**
     * Process the change in the p_thisPlan lense search argument
     */
    public onputhisplanChange(): void {
        this.executeLenseSearch(this.puthisPlan, ModelConstants.Planes.name, 'IC_Plan',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanputhisplan();
            }
            if (foundInstances === 1) {
                this.processputhisplanSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisPlan lense search argument
     */
    public processputhisplanSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisPlan.searchResults.length > index) {
            selectedInstance = this.puthisPlan.searchResults[index];
        }
        // Clean the result list
        this.puthisPlan.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisPlan.allowMultiSelect) {
                this.puthisPlan.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisPlan.addInstances(selectedInstance);
        }
        this.executeDependecyRulesputhisplan('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisPlan lense search argument
     */
    public cleanputhisplan(): void {
        this.clearValidationMessages();
        this.puthisPlan.clean();
        this.executeDependecyRulesputhisplan('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisPlan'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisPlan.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Planes_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
