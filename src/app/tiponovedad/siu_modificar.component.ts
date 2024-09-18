import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-tiponovedad-siu-modificar',
    templateUrl: './siu_modificar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipoNovedadSIUumodificarComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisTipoNovedad: FieldOVPreload;
    public puAliasTipo: Field;
    public puNombre: Field;
    public puDescripcion: Field;
    public puCodigoLegal: Field;

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
        this.idXML = 'Clas_1581411467264384Ser_3UIServ_1';
        this.className = ModelConstants.Tiponovedad.name;
        this.iuName = ModelConstants.Tiponovedad.siuumodificar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'modificar';
        this.title = this.langMng.translateText('cls_TipoNovedad_svc_modificar',
            'Modificar');

        // Create inbound argument components
        this.puthisTipoNovedad = new FieldOVPreload(this.langMng);
        this.puAliasTipo = new Field(this.langMng);
        this.puNombre = new Field(this.langMng);
        this.puDescripcion = new Field(this.langMng);
        this.puCodigoLegal = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisTipoNovedad.nameInRequest = 'p_thistiponovedad';
        this.puthisTipoNovedad.alias = this.langMng.translateText(
            'cls_TipoNovedad_svc_modificar_inArg_p_thisTipoNovedad',
            'Tipo Novedad');
        this.puthisTipoNovedad.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisTipoNovedad.mandatory = true;
        this.puthisTipoNovedad.dataType = ModelConstants.Tiponovedad.name;
        this.puthisTipoNovedad.maxLength = 50;
        this.puthisTipoNovedad.assignCSS();
        this.fields.push(this.puthisTipoNovedad);

        this.puAliasTipo.nameInRequest = 'p_aliastipo';
        this.puAliasTipo.alias = this.langMng.translateText(
            'cls_TipoNovedad_svc_modificar_inArg_p_AliasTipo',
            'Alias');
        this.puAliasTipo.mandatory = true;
        this.puAliasTipo.dataType = Field.dtString;
        this.puAliasTipo.maxLength = 50;
        this.puAliasTipo.assignCSS();
        this.fields.push(this.puAliasTipo);

        this.puNombre.nameInRequest = 'p_nombre';
        this.puNombre.alias = this.langMng.translateText(
            'cls_TipoNovedad_svc_modificar_inArg_p_Nombre',
            'Nombre');
        this.puNombre.mandatory = true;
        this.puNombre.dataType = Field.dtString;
        this.puNombre.maxLength = 50;
        this.puNombre.assignCSS();
        this.fields.push(this.puNombre);

        this.puDescripcion.nameInRequest = 'p_descripcion';
        this.puDescripcion.alias = this.langMng.translateText(
            'cls_TipoNovedad_svc_modificar_inArg_p_Descripcion',
            'Descripción');
        this.puDescripcion.mandatory = true;
        this.puDescripcion.dataType = Field.dtString;
        this.puDescripcion.maxLength = 200;
        this.puDescripcion.assignCSS();
        this.fields.push(this.puDescripcion);

        this.puCodigoLegal.nameInRequest = 'p_codigolegal';
        this.puCodigoLegal.alias = this.langMng.translateText(
            'cls_TipoNovedad_svc_modificar_inArg_p_CodigoLegal',
            'Código Legal');
        this.puCodigoLegal.mandatory = true;
        this.puCodigoLegal.dataType = Field.dtString;
        this.puCodigoLegal.maxLength = 5;
        this.puCodigoLegal.assignCSS();
        this.fields.push(this.puCodigoLegal);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['TipoNovedad'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisTipoNovedad.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhistiponovedad('SetValue', true);
            this.puthisTipoNovedad.enabled = false;
            this.executeDependecyRulesputhistiponovedad('SetEnabled', true);
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // puthisTipoNovedad
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('TipoNovedad', 'IC_TipoNovedad', [], null, '').then(
            (response: any) => {
                if (response && response.results) {
                    this.puthisTipoNovedad.loadPreload(response.results);
                } else {
                    this.puthisTipoNovedad.loadPreload([]);
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
     * Evaluate dependendy rules for p_thisTipoNovedad argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhistiponovedad(event: string, internal: boolean): void {
        if ('SetValue' === event && this.puthisTipoNovedad.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisTipoNovedad();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for p_thisTipoNovedad argument
     */
    private executeDependecyRules1puthisTipoNovedad(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisTipoNovedad,
                'aliastipo,nombre,descripcion,codigolegal');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            try {
                this.executeDependecyRules1puthisTipoNovedadActions();
            } catch (e) {
                console.log(e);
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisTipoNovedad argument
     */
    private executeDependecyRules1puthisTipoNovedadActions(): void {
        const varputhistiponovedad = this.getFirstInstanceFromCache(this.puthisTipoNovedad);
        this.notifyAnswerFromToTheBackEnd();
        // v <> NULL
        if (varputhistiponovedad && !this.util.isNull(varputhistiponovedad)) {
            // p_AliasTipo.SetValue( v.AliasTipo )
            this.puAliasTipo.setValue(varputhistiponovedad?.get('aliastipo'));
            // p_Nombre.SetValue( v.Nombre )
            this.puNombre.setValue(varputhistiponovedad?.get('nombre'));
            // p_Descripcion.SetValue( v.Descripcion )
            this.puDescripcion.setValue(varputhistiponovedad?.get('descripcion'));
            // p_CodigoLegal.SetValue( v.CodigoLegal )
            this.puCodigoLegal.setValue(varputhistiponovedad?.get('codigolegal'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisTipoNovedad argument
     */
    public onputhistiponovedadChange(): void {
        this.executeDependecyRulesputhistiponovedad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }
}
