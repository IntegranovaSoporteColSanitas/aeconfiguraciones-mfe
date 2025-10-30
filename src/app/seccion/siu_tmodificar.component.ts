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
    selector: 'imes-seccion-siu-tmodificar',
    templateUrl: './siu_tmodificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeccionSIUuTMODIFICARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisSeccion: FieldOVLenseSearch;
    public ptupuNombre: Field;
    public ptupuNumOrden: Field;

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
        this.idXML = 'Clas_1431633526784668Ser_6UIServ_1';
        this.className = ModelConstants.Seccion.name;
        this.iuName = ModelConstants.Seccion.siuutmodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TMODIFICAR';
        this.title = this.langMng.translateText('cls_Seccion_svc_TMODIFICAR',
            'Modificar sección');

        // Create inbound argument components
        this.puthisSeccion = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptupuNombre = new Field(this.langMng);
        this.ptupuNumOrden = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisSeccion.nameInRequest = 'p_thisseccion';
        this.puthisSeccion.alias = this.langMng.translateText(
            'cls_Seccion_svc_TMODIFICAR_inArg_p_thisSeccion',
            'Sección');
        this.puthisSeccion.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisSeccion.mandatory = true;
        this.puthisSeccion.dataType = ModelConstants.Seccion.name;
        this.puthisSeccion.maxLength = 150;
        this.puthisSeccion.assignCSS();
        this.fields.push(this.puthisSeccion);

        this.ptupuNombre.nameInRequest = 'pt_p_nombre';
        this.ptupuNombre.alias = this.langMng.translateText(
            'cls_Seccion_svc_TMODIFICAR_inArg_pt_p_Nombre',
            'Nombre');
        this.ptupuNombre.mandatory = true;
        this.ptupuNombre.dataType = Field.dtString;
        this.ptupuNombre.maxLength = 150;
        this.ptupuNombre.assignCSS();
        this.fields.push(this.ptupuNombre);

        this.ptupuNumOrden.nameInRequest = 'pt_p_numorden';
        this.ptupuNumOrden.alias = this.langMng.translateText(
            'cls_Seccion_svc_TMODIFICAR_inArg_pt_p_NumOrden',
            'Nº orden');
        this.ptupuNumOrden.mandatory = true;
        this.ptupuNumOrden.dataType = Field.dtNat;
        this.ptupuNumOrden.assignCSS();
        this.fields.push(this.ptupuNumOrden);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Seccion'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisSeccion.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisseccion('SetValue', true);
            this.puthisSeccion.enabled = false;
            this.executeDependecyRulesputhisseccion('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisSeccion'.toLowerCase()) {
            this.puthisSeccion.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisseccion('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisSeccion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisseccion(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisseccion();
        }
        if ('SetValue' === event && this.puthisSeccion.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisSeccion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisSeccion argument
     */
    private setSuppInfoputhisseccion(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisSeccion.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Seccion.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisSeccion.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisSeccion.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Seccion.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisSeccion.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisSeccion argument
     */
    private executeDependecyRules1puthisSeccion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisSeccion,
                'nombre,numorden');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisSeccionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisSeccion argument
     */
    private executeDependecyRules1puthisSeccionActions(): void {
        const varputhisseccion = this.getFirstInstanceFromCache(this.puthisSeccion);
        // v <> NULL
        if (varputhisseccion && !this.util.isNull(varputhisseccion)) {
            // pt_p_Nombre.SetValue( v.Nombre )
            this.ptupuNombre.setValue(varputhisseccion.get('nombre'));
            // pt_p_NumOrden.SetValue( v.NumOrden )
            this.ptupuNumOrden.setValue(this.util.getInt(varputhisseccion.get('numorden')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }
    /**
     * Process the change in the p_thisSeccion lense search argument
     */
    public onputhisseccionChange(): void {
        this.executeLenseSearch(this.puthisSeccion, ModelConstants.Seccion.name, 'IC_Seccion',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanputhisseccion();
            }
            if (foundInstances === 1) {
                this.processputhisseccionSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisSeccion lense search argument
     */
    public processputhisseccionSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisSeccion.searchResults.length > index) {
            selectedInstance = this.puthisSeccion.searchResults[index];
        }
        // Clean the result list
        this.puthisSeccion.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisSeccion.allowMultiSelect) {
                this.puthisSeccion.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisSeccion.addInstances(selectedInstance);
        }
        this.executeDependecyRulesputhisseccion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisSeccion lense search argument
     */
    public cleanputhisseccion(): void {
        this.clearValidationMessages();
        this.puthisSeccion.clean();
        this.executeDependecyRulesputhisseccion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisSeccion'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisSeccion.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Seccion';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
