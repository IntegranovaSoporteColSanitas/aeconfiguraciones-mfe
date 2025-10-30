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
    selector: 'imes-grupoasignacion-siu-tmodificar',
    templateUrl: './siu_tmodificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrupoAsignacionSIUuTMODIFICARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisGrupoAsignacion: FieldOVLenseSearch;
    public ptupuNombre: Field;
    public ptupuDescripcion: Field;

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
        this.idXML = 'Clas_1586850168832947Ser_16UIServ_1';
        this.className = ModelConstants.Grupoasignacion.name;
        this.iuName = ModelConstants.Grupoasignacion.siuutmodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TMODIFICAR';
        this.title = this.langMng.translateText('cls_GrupoAsignacion_svc_TMODIFICAR',
            'Modificar');

        // Create inbound argument components
        this.puthisGrupoAsignacion = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptupuNombre = new Field(this.langMng);
        this.ptupuDescripcion = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisGrupoAsignacion.nameInRequest = 'p_thisgrupoasignacion';
        this.puthisGrupoAsignacion.alias = this.langMng.translateText(
            'cls_GrupoAsignacion_svc_TMODIFICAR_inArg_p_thisGrupoAsignacion',
            'Grupo de Asignación');
        this.puthisGrupoAsignacion.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisGrupoAsignacion.mandatory = true;
        this.puthisGrupoAsignacion.dataType = ModelConstants.Grupoasignacion.name;
        this.puthisGrupoAsignacion.maxLength = 50;
        this.puthisGrupoAsignacion.assignCSS();
        this.fields.push(this.puthisGrupoAsignacion);

        this.ptupuNombre.nameInRequest = 'pt_p_nombre';
        this.ptupuNombre.alias = this.langMng.translateText(
            'cls_GrupoAsignacion_svc_TMODIFICAR_inArg_pt_p_Nombre',
            'Nombre');
        this.ptupuNombre.mandatory = true;
        this.ptupuNombre.dataType = Field.dtString;
        this.ptupuNombre.maxLength = 50;
        this.ptupuNombre.assignCSS();
        this.fields.push(this.ptupuNombre);

        this.ptupuDescripcion.nameInRequest = 'pt_p_descripcion';
        this.ptupuDescripcion.alias = this.langMng.translateText(
            'cls_GrupoAsignacion_svc_TMODIFICAR_inArg_pt_p_Descripcion',
            'Descripción');
        this.ptupuDescripcion.mandatory = true;
        this.ptupuDescripcion.dataType = Field.dtString;
        this.ptupuDescripcion.maxLength = 150;
        this.ptupuDescripcion.assignCSS();
        this.fields.push(this.ptupuDescripcion);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['GrupoAsignacion'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisGrupoAsignacion.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisgrupoasignacion('SetValue', true);
            this.puthisGrupoAsignacion.enabled = false;
            this.executeDependecyRulesputhisgrupoasignacion('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisGrupoAsignacion'.toLowerCase()) {
            this.puthisGrupoAsignacion.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisgrupoasignacion('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisGrupoAsignacion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisgrupoasignacion(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisgrupoasignacion();
        }
        if ('SetValue' === event && this.puthisGrupoAsignacion.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisGrupoAsignacion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisGrupoAsignacion argument
     */
    private setSuppInfoputhisgrupoasignacion(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisGrupoAsignacion.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Grupoasignacion.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisGrupoAsignacion.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisGrupoAsignacion.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Grupoasignacion.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisGrupoAsignacion.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisGrupoAsignacion argument
     */
    private executeDependecyRules1puthisGrupoAsignacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisGrupoAsignacion,
                'nombre,descripcion');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisGrupoAsignacionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisGrupoAsignacion argument
     */
    private executeDependecyRules1puthisGrupoAsignacionActions(): void {
        const varputhisgrupoasignacion = this.getFirstInstanceFromCache(this.puthisGrupoAsignacion);
        // v <> NULL
        if (varputhisgrupoasignacion && !this.util.isNull(varputhisgrupoasignacion)) {
            // pt_p_Nombre.SetValue( v.Nombre )
            this.ptupuNombre.setValue(varputhisgrupoasignacion.get('nombre'));
            // pt_p_Descripcion.SetValue( v.Descripcion )
            this.ptupuDescripcion.setValue(varputhisgrupoasignacion.get('descripcion'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }
    /**
     * Process the change in the p_thisGrupoAsignacion lense search argument
     */
    public onputhisgrupoasignacionChange(): void {
        this.executeLenseSearch(this.puthisGrupoAsignacion, ModelConstants.Grupoasignacion.name, 'IC_GrupoAsignacion',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanputhisgrupoasignacion();
            }
            if (foundInstances === 1) {
                this.processputhisgrupoasignacionSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisGrupoAsignacion lense search argument
     */
    public processputhisgrupoasignacionSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisGrupoAsignacion.searchResults.length > index) {
            selectedInstance = this.puthisGrupoAsignacion.searchResults[index];
        }
        // Clean the result list
        this.puthisGrupoAsignacion.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisGrupoAsignacion.allowMultiSelect) {
                this.puthisGrupoAsignacion.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisGrupoAsignacion.addInstances(selectedInstance);
        }
        this.executeDependecyRulesputhisgrupoasignacion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisGrupoAsignacion lense search argument
     */
    public cleanputhisgrupoasignacion(): void {
        this.clearValidationMessages();
        this.puthisGrupoAsignacion.clean();
        this.executeDependecyRulesputhisgrupoasignacion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisGrupoAsignacion'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisGrupoAsignacion.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_GrupoAsignacion';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
