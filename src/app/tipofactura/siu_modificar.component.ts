import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldDefinedSelection, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-tipofactura-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipoFacturaSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisTipoFactura: FieldOVPreload;
    public puDescripcion: Field;
    public puEsEmail: FieldDefinedSelection;
    public puEsCelular: FieldDefinedSelection;
    public puActivo: FieldDefinedSelection;

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
        this.idXML = 'Clas_1547132600320261Ser_3UIServ_1';
        this.className = ModelConstants.Tipofactura.name;
        this.iuName = ModelConstants.Tipofactura.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_TipoFactura_svc_modificar',
            'Modificar');

        // Create inbound argument components
        this.puthisTipoFactura = new FieldOVPreload(this.langMng);
        this.puDescripcion = new Field(this.langMng);
        this.puEsEmail = new FieldDefinedSelection(this.langMng);
        this.puEsCelular = new FieldDefinedSelection(this.langMng);
        this.puActivo = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisTipoFactura.nameInRequest = 'p_thistipofactura';
        this.puthisTipoFactura.alias = this.langMng.translateText(
            'cls_TipoFactura_svc_modificar_inArg_p_thisTipoFactura',
            'Tipo Factura');
        this.puthisTipoFactura.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisTipoFactura.mandatory = true;
        this.puthisTipoFactura.dataType = ModelConstants.Tipofactura.name;
        this.puthisTipoFactura.maxLength = 50;
        this.puthisTipoFactura.assignCSS();
        this.fields.push(this.puthisTipoFactura);

        this.puDescripcion.nameInRequest = 'p_descripcion';
        this.puDescripcion.alias = this.langMng.translateText(
            'cls_TipoFactura_svc_modificar_inArg_p_Descripcion',
            'Descripción');
        this.puDescripcion.mandatory = true;
        this.puDescripcion.dataType = Field.dtString;
        this.puDescripcion.maxLength = 50;
        this.puDescripcion.assignCSS();
        this.fields.push(this.puDescripcion);

        this.puEsEmail.nameInRequest = 'p_esemail';
        this.puEsEmail.alias = this.langMng.translateText(
            'cls_TipoFactura_svc_modificar_inArg_p_EsEmail',
            'Es email');
        this.puEsEmail.mandatory = true;
        this.puEsEmail.dataType = Field.dtBool;
        this.puEsEmail.options = DefinedSelections.DS_SINO;
        this.puEsEmail.value = false;
        this.puEsEmail.assignCSS();
        this.fields.push(this.puEsEmail);

        this.puEsCelular.nameInRequest = 'p_escelular';
        this.puEsCelular.alias = this.langMng.translateText(
            'cls_TipoFactura_svc_modificar_inArg_p_EsCelular',
            'Es celular');
        this.puEsCelular.mandatory = true;
        this.puEsCelular.dataType = Field.dtBool;
        this.puEsCelular.options = DefinedSelections.DS_SINO;
        this.puEsCelular.value = false;
        this.puEsCelular.assignCSS();
        this.fields.push(this.puEsCelular);

        this.puActivo.nameInRequest = 'p_activo';
        this.puActivo.alias = this.langMng.translateText(
            'cls_TipoFactura_svc_modificar_inArg_p_Activo',
            'Activo');
        this.puActivo.mandatory = true;
        this.puActivo.dataType = Field.dtBool;
        this.puActivo.options = DefinedSelections.DS_SINO;
        this.puActivo.assignCSS();
        this.fields.push(this.puActivo);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // p_Activo
            const defValpuActivo = new Promise<void>((resolveDefValue) => {
                this.puActivo.setValue(true);
                resolveDefValue();
            });
            promiseArr.push(defValpuActivo);

            Promise.all(promiseArr).then((results: any[]) => {
                this.util.hideWaitDialog();
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
            ['TipoFactura'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisTipoFactura.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhistipofactura('SetValue', true);
            this.puthisTipoFactura.enabled = false;
            this.executeDependecyRulesputhistipofactura('SetEnabled', true);
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // puthisTipoFactura
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('TipoFactura', 'IC_TipoFactura', [], null, '').then(
            (response: any) => {
                if (response && response.results) {
                    this.puthisTipoFactura.loadPreload(response.results);
                } else {
                    this.puthisTipoFactura.loadPreload([]);
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
     * Evaluate dependendy rules for p_thisTipoFactura argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhistipofactura(event: string, internal: boolean): void {
        if ('SetValue' === event && this.puthisTipoFactura.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisTipoFactura();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for p_thisTipoFactura argument
     */
    private executeDependecyRules1puthisTipoFactura(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisTipoFactura,
                'descripcion,esemail,escelular,activo');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisTipoFacturaActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisTipoFactura argument
     */
    private executeDependecyRules1puthisTipoFacturaActions(): void {
        const varputhistipofactura = this.getFirstInstanceFromCache(this.puthisTipoFactura);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhistipofactura && !this.util.isNull(varputhistipofactura)) {
            // p_Descripcion.SetValue( v.Descripcion )
            this.puDescripcion.setValue(varputhistipofactura.get('descripcion'));
            // p_EsEmail.SetValue( v.EsEmail )
            this.puEsEmail.setValue(this.util.getBool(varputhistipofactura.get('esemail')));
            // p_EsCelular.SetValue( v.EsCelular )
            this.puEsCelular.setValue(this.util.getBool(varputhistipofactura.get('escelular')));
            // p_Activo.SetValue( v.Activo )
            this.puActivo.setValue(this.util.getBool(varputhistipofactura.get('activo')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisTipoFactura argument
     */
    public onputhistipofacturaChange(): void {
        this.executeDependecyRulesputhistipofactura('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }
}
