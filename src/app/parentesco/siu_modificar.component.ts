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
    selector: 'imes-parentesco-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentescoSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisParentesco: FieldOVLenseSearch;
    public puEsTitular: FieldDefinedSelection;
    public puEsConyuge: FieldDefinedSelection;
    public puEsPadre: FieldDefinedSelection;
    public puEsHijo: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431698145280871Ser_3UIServ_1';
        this.className = ModelConstants.Parentesco.name;
        this.iuName = ModelConstants.Parentesco.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_Parentesco_svc_modificar',
            'Modificar parentesco');

        // Create inbound argument components
        this.puthisParentesco = new FieldOVLenseSearch(this.langMng, this.util);
        this.puEsTitular = new FieldDefinedSelection(this.langMng);
        this.puEsConyuge = new FieldDefinedSelection(this.langMng);
        this.puEsPadre = new FieldDefinedSelection(this.langMng);
        this.puEsHijo = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisParentesco.nameInRequest = 'p_thisparentesco';
        this.puthisParentesco.alias = this.langMng.translateText(
            'cls_Parentesco_svc_modificar_inArg_p_thisParentesco',
            'Parentesco');
        this.puthisParentesco.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisParentesco.mandatory = true;
        this.puthisParentesco.dataType = ModelConstants.Parentesco.name;
        this.puthisParentesco.allowMultiSelect = true;
        this.puthisParentesco.maxLength = 100;
        this.puthisParentesco.assignCSS();
        this.fields.push(this.puthisParentesco);

        this.puEsTitular.nameInRequest = 'p_estitular';
        this.puEsTitular.alias = this.langMng.translateText(
            'cls_Parentesco_svc_modificar_inArg_p_EsTitular',
            'Es titular');
        this.puEsTitular.mandatory = true;
        this.puEsTitular.dataType = Field.dtBool;
        this.puEsTitular.options = DefinedSelections.DS_SINO;
        this.puEsTitular.assignCSS();
        this.fields.push(this.puEsTitular);

        this.puEsConyuge.nameInRequest = 'p_esconyuge';
        this.puEsConyuge.alias = this.langMng.translateText(
            'cls_Parentesco_svc_modificar_inArg_p_EsConyuge',
            'Es cónyuge');
        this.puEsConyuge.mandatory = true;
        this.puEsConyuge.dataType = Field.dtBool;
        this.puEsConyuge.options = DefinedSelections.DS_SINO;
        this.puEsConyuge.assignCSS();
        this.fields.push(this.puEsConyuge);

        this.puEsPadre.nameInRequest = 'p_espadre';
        this.puEsPadre.alias = this.langMng.translateText(
            'cls_Parentesco_svc_modificar_inArg_p_EsPadre',
            'Es padre/madre');
        this.puEsPadre.mandatory = true;
        this.puEsPadre.dataType = Field.dtBool;
        this.puEsPadre.options = DefinedSelections.DS_SINO;
        this.puEsPadre.assignCSS();
        this.fields.push(this.puEsPadre);

        this.puEsHijo.nameInRequest = 'p_eshijo';
        this.puEsHijo.alias = this.langMng.translateText(
            'cls_Parentesco_svc_modificar_inArg_p_EsHijo',
            'Es hijo');
        this.puEsHijo.mandatory = true;
        this.puEsHijo.dataType = Field.dtBool;
        this.puEsHijo.options = DefinedSelections.DS_SINO;
        this.puEsHijo.assignCSS();
        this.fields.push(this.puEsHijo);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // p_EsTitular
            const defValpuEsTitular = new Promise<void>((resolveDefValue) => {
                this.puEsTitular.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuEsTitular);

            // p_EsConyuge
            const defValpuEsConyuge = new Promise<void>((resolveDefValue) => {
                this.puEsConyuge.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuEsConyuge);

            // p_EsPadre
            const defValpuEsPadre = new Promise<void>((resolveDefValue) => {
                this.puEsPadre.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuEsPadre);

            // p_EsHijo
            const defValpuEsHijo = new Promise<void>((resolveDefValue) => {
                this.puEsHijo.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuEsHijo);

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
            ['Parentesco'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisParentesco.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisparentesco('SetValue', true);
            this.puthisParentesco.enabled = false;
            this.executeDependecyRulesputhisparentesco('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisParentesco'.toLowerCase()) {
            this.puthisParentesco.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisparentesco('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisParentesco argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisparentesco(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisparentesco();
        }
        if ('SetValue' === event && this.puthisParentesco.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisParentesco();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisParentesco argument
     */
    private setSuppInfoputhisparentesco(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisParentesco.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Parentesco.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisParentesco.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisParentesco.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Parentesco.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisParentesco.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisParentesco argument
     */
    private executeDependecyRules1puthisParentesco(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisParentesco,
                'estitular,esconyuge,espadre,eshijo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisParentescoActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisParentesco argument
     */
    private executeDependecyRules1puthisParentescoActions(): void {
        const varputhisparentesco = this.getFirstInstanceFromCache(this.puthisParentesco);
        // v <> NULL
        if (varputhisparentesco && !this.util.isNull(varputhisparentesco)) {
            // p_EsTitular.SetValue( v.estitular )
            this.puEsTitular.setValue(this.util.getBool(varputhisparentesco.get('estitular')));
            this.executeDependecyRulespuestitular('SetValue', true);
            // p_EsConyuge.SetValue( v.esconyuge )
            this.puEsConyuge.setValue(this.util.getBool(varputhisparentesco.get('esconyuge')));
            this.executeDependecyRulespuesconyuge('SetValue', true);
            // p_EsPadre.SetValue( v.espadre )
            this.puEsPadre.setValue(this.util.getBool(varputhisparentesco.get('espadre')));
            this.executeDependecyRulespuespadre('SetValue', true);
            // p_EsHijo.SetValue( v.eshijo )
            this.puEsHijo.setValue(this.util.getBool(varputhisparentesco.get('eshijo')));
            this.executeDependecyRulespueshijo('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }
    /**
     * Process the change in the p_thisParentesco lense search argument
     */
    public onputhisparentescoChange(): void {
        this.executeLenseSearch(this.puthisParentesco, ModelConstants.Parentesco.name, 'IC_Parentesco',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanputhisparentesco();
            }
            if (foundInstances === 1) {
                this.processputhisparentescoSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisParentesco lense search argument
     */
    public processputhisparentescoSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisParentesco.searchResults.length > index) {
            selectedInstance = this.puthisParentesco.searchResults[index];
        }
        // Clean the result list
        this.puthisParentesco.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisParentesco.allowMultiSelect) {
                this.puthisParentesco.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisParentesco.addInstances(selectedInstance);
        }
        this.executeDependecyRulesputhisparentesco('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisParentesco lense search argument
     */
    public cleanputhisparentesco(): void {
        this.clearValidationMessages();
        this.puthisParentesco.clean();
        this.executeDependecyRulesputhisparentesco('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for p_EsTitular argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuestitular(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1puEsTitular();
        }
        // Rule 2
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules2puEsTitular();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for p_EsTitular argument
     */
    private executeDependecyRules1puEsTitular(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1puEsTitularActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_EsTitular argument
     */
    private executeDependecyRules1puEsTitularActions(): void {
        // v <> NULL AND v = true
        if (!this.util.isNull(this.util.getBool(this.puEsTitular.value)) &&
            this.util.valueEquals(this.util.getBool(this.puEsTitular.value), true)) {
            // p_EsConyuge.SetValue( FALSE )
            this.puEsConyuge.setValue(false);
            this.executeDependecyRulespuesconyuge('SetValue', true);
            // p_EsConyuge.SetActive( FALSE )
            this.puEsConyuge.enabled = false;
            this.executeDependecyRulespuesconyuge('SetActive', true);
            // p_EsHijo.SetValue( FALSE )
            this.puEsHijo.setValue(false);
            this.executeDependecyRulespueshijo('SetValue', true);
            // p_EsHijo.SetActive( FALSE )
            this.puEsHijo.enabled = false;
            this.executeDependecyRulespueshijo('SetActive', true);
            // p_EsPadre.SetValue( FALSE )
            this.puEsPadre.setValue(false);
            this.executeDependecyRulespuespadre('SetValue', true);
            // p_EsPadre.SetActive( FALSE )
            this.puEsPadre.enabled = false;
            this.executeDependecyRulespuespadre('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for p_EsTitular argument
     */
    private executeDependecyRules2puEsTitular(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2puEsTitularActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for p_EsTitular argument
     */
    private executeDependecyRules2puEsTitularActions(): void {
        // v <> NULL AND v = false
        if (!this.util.isNull(this.util.getBool(this.puEsTitular.value)) &&
            this.util.valueEquals(this.util.getBool(this.puEsTitular.value), false)) {
            // p_EsConyuge.SetActive( TRUE )
            this.puEsConyuge.enabled = true;
            this.executeDependecyRulespuesconyuge('SetActive', true);
            // p_EsHijo.SetActive( TRUE )
            this.puEsHijo.enabled = true;
            this.executeDependecyRulespueshijo('SetActive', true);
            // p_EsPadre.SetActive( TRUE )
            this.puEsPadre.enabled = true;
            this.executeDependecyRulespuespadre('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_EsTitular argument
     */
    public onpuestitularChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulespuestitular('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for p_EsConyuge argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuesconyuge(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1puEsConyuge();
        }
        // Rule 2
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules2puEsConyuge();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for p_EsConyuge argument
     */
    private executeDependecyRules1puEsConyuge(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1puEsConyugeActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_EsConyuge argument
     */
    private executeDependecyRules1puEsConyugeActions(): void {
        // v <> NULL AND v = true
        if (!this.util.isNull(this.util.getBool(this.puEsConyuge.value)) &&
            this.util.valueEquals(this.util.getBool(this.puEsConyuge.value), true)) {
            // p_EsHijo.SetValue( FALSE )
            this.puEsHijo.setValue(false);
            this.executeDependecyRulespueshijo('SetValue', true);
            // p_EsHijo.SetActive( FALSE )
            this.puEsHijo.enabled = false;
            this.executeDependecyRulespueshijo('SetActive', true);
            // p_EsPadre.SetValue( FALSE )
            this.puEsPadre.setValue(false);
            this.executeDependecyRulespuespadre('SetValue', true);
            // p_EsPadre.SetActive( FALSE )
            this.puEsPadre.enabled = false;
            this.executeDependecyRulespuespadre('SetActive', true);
            // p_EsTitular.SetValue( FALSE )
            this.puEsTitular.setValue(false);
            this.executeDependecyRulespuestitular('SetValue', true);
            // p_EsTitular.SetActive( FALSE )
            this.puEsTitular.enabled = false;
            this.executeDependecyRulespuestitular('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for p_EsConyuge argument
     */
    private executeDependecyRules2puEsConyuge(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2puEsConyugeActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for p_EsConyuge argument
     */
    private executeDependecyRules2puEsConyugeActions(): void {
        // v <> NULL AND v = false
        if (!this.util.isNull(this.util.getBool(this.puEsConyuge.value)) &&
            this.util.valueEquals(this.util.getBool(this.puEsConyuge.value), false)) {
            // p_EsHijo.SetActive( TRUE )
            this.puEsHijo.enabled = true;
            this.executeDependecyRulespueshijo('SetActive', true);
            // p_EsPadre.SetActive( TRUE )
            this.puEsPadre.enabled = true;
            this.executeDependecyRulespuespadre('SetActive', true);
            // p_EsTitular.SetActive( TRUE )
            this.puEsTitular.enabled = true;
            this.executeDependecyRulespuestitular('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_EsConyuge argument
     */
    public onpuesconyugeChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulespuesconyuge('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for p_EsPadre argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuespadre(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1puEsPadre();
        }
        // Rule 2
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules2puEsPadre();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for p_EsPadre argument
     */
    private executeDependecyRules1puEsPadre(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1puEsPadreActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_EsPadre argument
     */
    private executeDependecyRules1puEsPadreActions(): void {
        // v <> NULL AND v = true
        if (!this.util.isNull(this.util.getBool(this.puEsPadre.value)) &&
            this.util.valueEquals(this.util.getBool(this.puEsPadre.value), true)) {
            // p_EsConyuge.SetValue( FALSE )
            this.puEsConyuge.setValue(false);
            this.executeDependecyRulespuesconyuge('SetValue', true);
            // p_EsConyuge.SetActive( FALSE )
            this.puEsConyuge.enabled = false;
            this.executeDependecyRulespuesconyuge('SetActive', true);
            // p_EsHijo.SetValue( FALSE )
            this.puEsHijo.setValue(false);
            this.executeDependecyRulespueshijo('SetValue', true);
            // p_EsHijo.SetActive( FALSE )
            this.puEsHijo.enabled = false;
            this.executeDependecyRulespueshijo('SetActive', true);
            // p_EsTitular.SetValue( FALSE )
            this.puEsTitular.setValue(false);
            this.executeDependecyRulespuestitular('SetValue', true);
            // p_EsTitular.SetActive( FALSE )
            this.puEsTitular.enabled = false;
            this.executeDependecyRulespuestitular('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for p_EsPadre argument
     */
    private executeDependecyRules2puEsPadre(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2puEsPadreActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for p_EsPadre argument
     */
    private executeDependecyRules2puEsPadreActions(): void {
        // v <> NULL AND v = false
        if (!this.util.isNull(this.util.getBool(this.puEsPadre.value)) &&
            this.util.valueEquals(this.util.getBool(this.puEsPadre.value), false)) {
            // p_EsConyuge.SetActive( TRUE )
            this.puEsConyuge.enabled = true;
            this.executeDependecyRulespuesconyuge('SetActive', true);
            // p_EsHijo.SetActive( TRUE )
            this.puEsHijo.enabled = true;
            this.executeDependecyRulespueshijo('SetActive', true);
            // p_EsTitular.SetActive( TRUE )
            this.puEsTitular.enabled = true;
            this.executeDependecyRulespuestitular('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_EsPadre argument
     */
    public onpuespadreChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulespuespadre('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for p_EsHijo argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespueshijo(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules1puEsHijo();
        }
        // Rule 2
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules2puEsHijo();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for p_EsHijo argument
     */
    private executeDependecyRules1puEsHijo(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1puEsHijoActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_EsHijo argument
     */
    private executeDependecyRules1puEsHijoActions(): void {
        // v <> NULL AND v = true
        if (!this.util.isNull(this.util.getBool(this.puEsHijo.value)) && this.util.valueEquals(this.util.getBool(this.puEsHijo.value),
            true)) {
            // p_EsConyuge.SetValue( FALSE )
            this.puEsConyuge.setValue(false);
            this.executeDependecyRulespuesconyuge('SetValue', true);
            // p_EsConyuge.SetActive( FALSE )
            this.puEsConyuge.enabled = false;
            this.executeDependecyRulespuesconyuge('SetActive', true);
            // p_EsPadre.SetValue( FALSE )
            this.puEsPadre.setValue(false);
            this.executeDependecyRulespuespadre('SetValue', true);
            // p_EsPadre.SetActive( FALSE )
            this.puEsPadre.enabled = false;
            this.executeDependecyRulespuespadre('SetActive', true);
            // p_EsTitular.SetValue( FALSE )
            this.puEsTitular.setValue(false);
            this.executeDependecyRulespuestitular('SetValue', true);
            // p_EsTitular.SetActive( FALSE )
            this.puEsTitular.enabled = false;
            this.executeDependecyRulespuestitular('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for p_EsHijo argument
     */
    private executeDependecyRules2puEsHijo(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2puEsHijoActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for p_EsHijo argument
     */
    private executeDependecyRules2puEsHijoActions(): void {
        // v <> NULL AND v = false
        if (!this.util.isNull(this.util.getBool(this.puEsHijo.value)) && this.util.valueEquals(this.util.getBool(this.puEsHijo.value),
            false)) {
            // p_EsConyuge.SetActive( TRUE )
            this.puEsConyuge.enabled = true;
            this.executeDependecyRulespuesconyuge('SetActive', true);
            // p_EsPadre.SetActive( TRUE )
            this.puEsPadre.enabled = true;
            this.executeDependecyRulespuespadre('SetActive', true);
            // p_EsTitular.SetActive( TRUE )
            this.puEsTitular.enabled = true;
            this.executeDependecyRulespuestitular('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_EsHijo argument
     */
    public onpueshijoChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulespueshijo('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisParentesco'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisParentesco.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Parentesco';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
