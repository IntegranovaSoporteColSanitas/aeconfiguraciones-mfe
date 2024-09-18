import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldDefinedSelection } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-parentesco-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentescoSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puatrCodigo: Field;
    public puatrDescripcion: Field;
    public puatrEsTitular: FieldDefinedSelection;
    public puatrEsConyuge: FieldDefinedSelection;
    public puatrEsPadre: FieldDefinedSelection;
    public puatrEsHijo: FieldDefinedSelection;
    public puatrNombreCorto: Field;

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
        this.idXML = 'Clas_1431698145280871Ser_1UIServ_1';
        this.className = ModelConstants.Parentesco.name;
        this.iuName = ModelConstants.Parentesco.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_Parentesco_svc_crear',
            'Crear parentesco');

        // Create inbound argument components
        this.puatrCodigo = new Field(this.langMng);
        this.puatrDescripcion = new Field(this.langMng);
        this.puatrEsTitular = new FieldDefinedSelection(this.langMng);
        this.puatrEsConyuge = new FieldDefinedSelection(this.langMng);
        this.puatrEsPadre = new FieldDefinedSelection(this.langMng);
        this.puatrEsHijo = new FieldDefinedSelection(this.langMng);
        this.puatrNombreCorto = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puatrCodigo.nameInRequest = 'p_atrcodigo';
        this.puatrCodigo.alias = this.langMng.translateText(
            'cls_Parentesco_svc_crear_inArg_p_atrCodigo',
            'Código');
        this.puatrCodigo.mandatory = true;
        this.puatrCodigo.dataType = Field.dtInt;
        this.puatrCodigo.assignCSS();
        this.fields.push(this.puatrCodigo);

        this.puatrDescripcion.nameInRequest = 'p_atrdescripcion';
        this.puatrDescripcion.alias = this.langMng.translateText(
            'cls_Parentesco_svc_crear_inArg_p_atrDescripcion',
            'Descripción');
        this.puatrDescripcion.mandatory = true;
        this.puatrDescripcion.dataType = Field.dtString;
        this.puatrDescripcion.maxLength = 100;
        this.puatrDescripcion.assignCSS();
        this.fields.push(this.puatrDescripcion);

        this.puatrEsTitular.nameInRequest = 'p_atrestitular';
        this.puatrEsTitular.alias = this.langMng.translateText(
            'cls_Parentesco_svc_crear_inArg_p_atrEsTitular',
            'Es titular');
        this.puatrEsTitular.mandatory = true;
        this.puatrEsTitular.dataType = Field.dtBool;
        this.puatrEsTitular.options = DefinedSelections.DS_SINO;
        this.puatrEsTitular.assignCSS();
        this.fields.push(this.puatrEsTitular);

        this.puatrEsConyuge.nameInRequest = 'p_atresconyuge';
        this.puatrEsConyuge.alias = this.langMng.translateText(
            'cls_Parentesco_svc_crear_inArg_p_atrEsConyuge',
            'Es cónyuge');
        this.puatrEsConyuge.mandatory = true;
        this.puatrEsConyuge.dataType = Field.dtBool;
        this.puatrEsConyuge.options = DefinedSelections.DS_SINO;
        this.puatrEsConyuge.assignCSS();
        this.fields.push(this.puatrEsConyuge);

        this.puatrEsPadre.nameInRequest = 'p_atrespadre';
        this.puatrEsPadre.alias = this.langMng.translateText(
            'cls_Parentesco_svc_crear_inArg_p_atrEsPadre',
            'Es padre/madre');
        this.puatrEsPadre.mandatory = true;
        this.puatrEsPadre.dataType = Field.dtBool;
        this.puatrEsPadre.options = DefinedSelections.DS_SINO;
        this.puatrEsPadre.assignCSS();
        this.fields.push(this.puatrEsPadre);

        this.puatrEsHijo.nameInRequest = 'p_atreshijo';
        this.puatrEsHijo.alias = this.langMng.translateText(
            'cls_Parentesco_svc_crear_inArg_p_atrEsHijo',
            'Es hijo');
        this.puatrEsHijo.mandatory = true;
        this.puatrEsHijo.dataType = Field.dtBool;
        this.puatrEsHijo.options = DefinedSelections.DS_SINO;
        this.puatrEsHijo.assignCSS();
        this.fields.push(this.puatrEsHijo);

        this.puatrNombreCorto.nameInRequest = 'p_atrnombrecorto';
        this.puatrNombreCorto.alias = this.langMng.translateText(
            'cls_Parentesco_svc_crear_inArg_p_atrNombreCorto',
            'Nombre corto');
        this.puatrNombreCorto.mandatory = true;
        this.puatrNombreCorto.dataType = Field.dtString;
        this.puatrNombreCorto.maxLength = 10;
        this.puatrNombreCorto.assignCSS();
        this.fields.push(this.puatrNombreCorto);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // p_atrEsTitular
            const defValpuatrEsTitular = new Promise<void>((resolveDefValue) => {
                this.puatrEsTitular.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuatrEsTitular);

            // p_atrEsConyuge
            const defValpuatrEsConyuge = new Promise<void>((resolveDefValue) => {
                this.puatrEsConyuge.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuatrEsConyuge);

            // p_atrEsPadre
            const defValpuatrEsPadre = new Promise<void>((resolveDefValue) => {
                this.puatrEsPadre.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuatrEsPadre);

            // p_atrEsHijo
            const defValpuatrEsHijo = new Promise<void>((resolveDefValue) => {
                this.puatrEsHijo.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValpuatrEsHijo);

            Promise.all(promiseArr).then((results: any[]) => {
                this.util.hideWaitDialog();
                this.changeDetectorRef.markForCheck();
                resolve();
            });
        });
    }

    /**
     * Evaluate dependendy rules for p_atrEsTitular argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuatrestitular(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puatrEsTitular();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2puatrEsTitular();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for p_atrEsTitular argument
     */
    private executeDependecyRules1puatrEsTitular(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1puatrEsTitularActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_atrEsTitular argument
     */
    private executeDependecyRules1puatrEsTitularActions(): void {
        // v <> NULL AND v = true
        if (!this.util.isNull(this.util.getBool(this.puatrEsTitular.value)) &&
            this.util.valueEquals(this.util.getBool(this.puatrEsTitular.value), true)) {
            // p_atrEsConyuge.SetValue( FALSE )
            this.puatrEsConyuge.setValue(false);
            this.executeDependecyRulespuatresconyuge('SetValue', true);
            // p_atrEsConyuge.SetActive( FALSE )
            this.puatrEsConyuge.enabled = false;
            this.executeDependecyRulespuatresconyuge('SetActive', true);
            // p_atrEsHijo.SetValue( FALSE )
            this.puatrEsHijo.setValue(false);
            this.executeDependecyRulespuatreshijo('SetValue', true);
            // p_atrEsHijo.SetActive( FALSE )
            this.puatrEsHijo.enabled = false;
            this.executeDependecyRulespuatreshijo('SetActive', true);
            // p_atrEsPadre.SetValue( FALSE )
            this.puatrEsPadre.setValue(false);
            this.executeDependecyRulespuatrespadre('SetValue', true);
            // p_atrEsPadre.SetActive( FALSE )
            this.puatrEsPadre.enabled = false;
            this.executeDependecyRulespuatrespadre('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for p_atrEsTitular argument
     */
    private executeDependecyRules2puatrEsTitular(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2puatrEsTitularActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for p_atrEsTitular argument
     */
    private executeDependecyRules2puatrEsTitularActions(): void {
        // v <> NULL AND v = false
        if (!this.util.isNull(this.util.getBool(this.puatrEsTitular.value)) &&
            this.util.valueEquals(this.util.getBool(this.puatrEsTitular.value), false)) {
            // p_atrEsConyuge.SetActive( TRUE )
            this.puatrEsConyuge.enabled = true;
            this.executeDependecyRulespuatresconyuge('SetActive', true);
            // p_atrEsHijo.SetActive( TRUE )
            this.puatrEsHijo.enabled = true;
            this.executeDependecyRulespuatreshijo('SetActive', true);
            // p_atrEsPadre.SetActive( TRUE )
            this.puatrEsPadre.enabled = true;
            this.executeDependecyRulespuatrespadre('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_atrEsTitular argument
     */
    public onpuatrestitularChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulespuatrestitular('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for p_atrEsConyuge argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuatresconyuge(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puatrEsConyuge();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2puatrEsConyuge();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for p_atrEsConyuge argument
     */
    private executeDependecyRules1puatrEsConyuge(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1puatrEsConyugeActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_atrEsConyuge argument
     */
    private executeDependecyRules1puatrEsConyugeActions(): void {
        // v <> NULL AND v = true
        if (!this.util.isNull(this.util.getBool(this.puatrEsConyuge.value)) &&
            this.util.valueEquals(this.util.getBool(this.puatrEsConyuge.value), true)) {
            // p_atrEsHijo.SetValue( FALSE )
            this.puatrEsHijo.setValue(false);
            this.executeDependecyRulespuatreshijo('SetValue', true);
            // p_atrEsHijo.SetActive( FALSE )
            this.puatrEsHijo.enabled = false;
            this.executeDependecyRulespuatreshijo('SetActive', true);
            // p_atrEsPadre.SetValue( FALSE )
            this.puatrEsPadre.setValue(false);
            this.executeDependecyRulespuatrespadre('SetValue', true);
            // p_atrEsPadre.SetActive( FALSE )
            this.puatrEsPadre.enabled = false;
            this.executeDependecyRulespuatrespadre('SetActive', true);
            // p_atrEsTitular.SetValue( FALSE )
            this.puatrEsTitular.setValue(false);
            this.executeDependecyRulespuatrestitular('SetValue', true);
            // p_atrEsTitular.SetActive( FALSE )
            this.puatrEsTitular.enabled = false;
            this.executeDependecyRulespuatrestitular('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for p_atrEsConyuge argument
     */
    private executeDependecyRules2puatrEsConyuge(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2puatrEsConyugeActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for p_atrEsConyuge argument
     */
    private executeDependecyRules2puatrEsConyugeActions(): void {
        // v <> NULL AND v = false
        if (!this.util.isNull(this.util.getBool(this.puatrEsConyuge.value)) &&
            this.util.valueEquals(this.util.getBool(this.puatrEsConyuge.value), false)) {
            // p_atrEsHijo.SetActive( TRUE )
            this.puatrEsHijo.enabled = true;
            this.executeDependecyRulespuatreshijo('SetActive', true);
            // p_atrEsPadre.SetActive( TRUE )
            this.puatrEsPadre.enabled = true;
            this.executeDependecyRulespuatrespadre('SetActive', true);
            // p_atrEsTitular.SetActive( TRUE )
            this.puatrEsTitular.enabled = true;
            this.executeDependecyRulespuatrestitular('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_atrEsConyuge argument
     */
    public onpuatresconyugeChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulespuatresconyuge('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for p_atrEsPadre argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuatrespadre(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puatrEsPadre();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2puatrEsPadre();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for p_atrEsPadre argument
     */
    private executeDependecyRules1puatrEsPadre(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1puatrEsPadreActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_atrEsPadre argument
     */
    private executeDependecyRules1puatrEsPadreActions(): void {
        // v <> NULL AND v = true
        if (!this.util.isNull(this.util.getBool(this.puatrEsPadre.value)) &&
            this.util.valueEquals(this.util.getBool(this.puatrEsPadre.value), true)) {
            // p_atrEsConyuge.SetValue( FALSE )
            this.puatrEsConyuge.setValue(false);
            this.executeDependecyRulespuatresconyuge('SetValue', true);
            // p_atrEsConyuge.SetActive( FALSE )
            this.puatrEsConyuge.enabled = false;
            this.executeDependecyRulespuatresconyuge('SetActive', true);
            // p_atrEsHijo.SetValue( FALSE )
            this.puatrEsHijo.setValue(false);
            this.executeDependecyRulespuatreshijo('SetValue', true);
            // p_atrEsHijo.SetActive( FALSE )
            this.puatrEsHijo.enabled = false;
            this.executeDependecyRulespuatreshijo('SetActive', true);
            // p_atrEsTitular.SetValue( FALSE )
            this.puatrEsTitular.setValue(false);
            this.executeDependecyRulespuatrestitular('SetValue', true);
            // p_atrEsTitular.SetActive( FALSE )
            this.puatrEsTitular.enabled = false;
            this.executeDependecyRulespuatrestitular('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for p_atrEsPadre argument
     */
    private executeDependecyRules2puatrEsPadre(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2puatrEsPadreActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for p_atrEsPadre argument
     */
    private executeDependecyRules2puatrEsPadreActions(): void {
        // v <> NULL AND v = false
        if (!this.util.isNull(this.util.getBool(this.puatrEsPadre.value)) &&
            this.util.valueEquals(this.util.getBool(this.puatrEsPadre.value), false)) {
            // p_atrEsConyuge.SetActive( TRUE )
            this.puatrEsConyuge.enabled = true;
            this.executeDependecyRulespuatresconyuge('SetActive', true);
            // p_atrEsHijo.SetActive( TRUE )
            this.puatrEsHijo.enabled = true;
            this.executeDependecyRulespuatreshijo('SetActive', true);
            // p_atrEsTitular.SetActive( TRUE )
            this.puatrEsTitular.enabled = true;
            this.executeDependecyRulespuatrestitular('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_atrEsPadre argument
     */
    public onpuatrespadreChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulespuatrespadre('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for p_atrEsHijo argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuatreshijo(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puatrEsHijo();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2puatrEsHijo();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for p_atrEsHijo argument
     */
    private executeDependecyRules1puatrEsHijo(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1puatrEsHijoActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_atrEsHijo argument
     */
    private executeDependecyRules1puatrEsHijoActions(): void {
        // v <> NULL AND v = true
        if (!this.util.isNull(this.util.getBool(this.puatrEsHijo.value)) &&
            this.util.valueEquals(this.util.getBool(this.puatrEsHijo.value), true)) {
            // p_atrEsConyuge.SetValue( FALSE )
            this.puatrEsConyuge.setValue(false);
            this.executeDependecyRulespuatresconyuge('SetValue', true);
            // p_atrEsConyuge.SetActive( FALSE )
            this.puatrEsConyuge.enabled = false;
            this.executeDependecyRulespuatresconyuge('SetActive', true);
            // p_atrEsPadre.SetValue( FALSE )
            this.puatrEsPadre.setValue(false);
            this.executeDependecyRulespuatrespadre('SetValue', true);
            // p_atrEsPadre.SetActive( FALSE )
            this.puatrEsPadre.enabled = false;
            this.executeDependecyRulespuatrespadre('SetActive', true);
            // p_atrEsTitular.SetValue( FALSE )
            this.puatrEsTitular.setValue(false);
            this.executeDependecyRulespuatrestitular('SetValue', true);
            // p_atrEsTitular.SetActive( FALSE )
            this.puatrEsTitular.enabled = false;
            this.executeDependecyRulespuatrestitular('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for p_atrEsHijo argument
     */
    private executeDependecyRules2puatrEsHijo(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2puatrEsHijoActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for p_atrEsHijo argument
     */
    private executeDependecyRules2puatrEsHijoActions(): void {
        // v <> NULL AND v = false
        if (!this.util.isNull(this.util.getBool(this.puatrEsHijo.value)) &&
            this.util.valueEquals(this.util.getBool(this.puatrEsHijo.value), false)) {
            // p_atrEsConyuge.SetActive( TRUE )
            this.puatrEsConyuge.enabled = true;
            this.executeDependecyRulespuatresconyuge('SetActive', true);
            // p_atrEsPadre.SetActive( TRUE )
            this.puatrEsPadre.enabled = true;
            this.executeDependecyRulespuatrespadre('SetActive', true);
            // p_atrEsTitular.SetActive( TRUE )
            this.puatrEsTitular.enabled = true;
            this.executeDependecyRulespuatrestitular('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_atrEsHijo argument
     */
    public onpuatreshijoChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulespuatreshijo('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }
}
