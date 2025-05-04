import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { CacheDependencyRules, InstanceCache } from '../common/app.cachedependencyrules';
import { Field, FieldDefinedSelection, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements global SIU SIU_TGCREARTARIFA »
 */
@Component({
    selector: 'imes-gs-siu-tgcreartarifa',
    templateUrl: './siu_tgcreartarifa.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuTGCREARTARIFAComponent extends AbstractServiceIU implements OnInit {

    /** Fields */
    public pProducto: FieldOVPreload;
    public pPlan: FieldOVPreload;
    public pTipoContrato: FieldDefinedSelection;
    public pCodigo: Field;

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
        this.idXML = 'IGl_1445874368512966UIServ_1';
        this.className = ModelConstants.Globalservices.name;
        this.iuName = ModelConstants.Globalservices.siuutgcreartarifa;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TGCREARTARIFA';
        this.title = this.langMng.translateText('gs_TGCREARTARIFA',
            'Crear Tarifa');

        // Create inbound argument components
        this.pProducto = new FieldOVPreload(this.langMng);
        this.pPlan = new FieldOVPreload(this.langMng);
        this.pTipoContrato = new FieldDefinedSelection(this.langMng);
        this.pCodigo = new Field(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.pProducto.nameInRequest = 'pproducto';
        this.pProducto.alias = this.langMng.translateText(
            'gs_TGCREARTARIFA_inArg_pProducto',
            'Producto');
        this.pProducto.mandatory = true;
        this.pProducto.dataType = ModelConstants.Productos.name;
        this.pProducto.maxLength = 100;
        this.pProducto.assignCSS();
        this.fields.push(this.pProducto);

        this.pPlan.nameInRequest = 'pplan';
        this.pPlan.alias = this.langMng.translateText(
            'gs_TGCREARTARIFA_inArg_pPlan',
            'Plan');
        this.pPlan.mandatory = true;
        this.pPlan.dataType = ModelConstants.Planes.name;
        this.pPlan.maxLength = 150;
        this.pPlan.assignCSS();
        this.fields.push(this.pPlan);

        this.pTipoContrato.nameInRequest = 'ptipocontrato';
        this.pTipoContrato.alias = this.langMng.translateText(
            'gs_TGCREARTARIFA_inArg_pTipoContrato',
            'Tipo Contrato');
        this.pTipoContrato.mandatory = true;
        this.pTipoContrato.dataType = Field.dtNat;
        this.pTipoContrato.options = DefinedSelections.DS_TIPOCONTRATO;
        this.pTipoContrato.assignCSS();
        this.fields.push(this.pTipoContrato);

        this.pCodigo.nameInRequest = 'pcodigo';
        this.pCodigo.alias = this.langMng.translateText(
            'gs_TGCREARTARIFA_inArg_pCodigo',
            'Código');
        this.pCodigo.mandatory = true;
        this.pCodigo.dataType = Field.dtString;
        this.pCodigo.maxLength = 12;
        this.pCodigo.assignCSS();
        this.fields.push(this.pCodigo);
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // pProducto
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Productos', 'IC_Producto', [], null, 'OC_Producto').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.pProducto.loadPreload(response.results);
                } else {
                    this.pProducto.loadPreload([]);
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
     * Search the preload values of field pPlan
     */
    private loadPreloadpplan(): void {

        if (this.pProducto.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('TGCREARTARIFA_pPlan_NavFilter0');
            this.util.searchPreload('Planes', 'IC_Plan', navFilters, this.getNavigationFilterVariables(), 'OC_Plan').then(
                (response: any) => {
                    if (response && response.results) {
                        this.pPlan.loadPreload(response.results);
                    } else {
                        this.pPlan.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.pPlan.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.pPlan.cleanPreload();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * Manages the change for the pProducto argument
     */
    public onpproductoChange(): void {
        this.loadPreloadpplan();

        this.executePendingDependencyRules();
    }
}
