import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { CacheDependencyRules, InstanceCache } from '../common/app.cachedependencyrules';
import { Field, FieldOVLenseSearch } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
    selector: 'imes-gs-siu-tgeditplantrep',
    templateUrl: './siu_tgeditplantrep.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuTGEDITPLANTREPComponent extends AbstractServiceIU implements OnInit {

    /** Fields */
    public ptuputhisPlantillaReporte: FieldOVLenseSearch;
    public ptupuTitulo: Field;
    public ptupuFechaVigencia: Field;
    public ptupuRutaArchivos: Field;
    public ptupuNombreArchivoPDF: Field;

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
        this.idXML = 'IGl_1623834755072701UIServ_1';
        this.className = ModelConstants.Globalservices.name;
        this.iuName = ModelConstants.Globalservices.siuutgeditplantrep;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TGEDITPLANTREP';
        this.title = this.langMng.translateText('gs_TGEDITPLANTREP',
            'Modificar');

        // Create inbound argument components
        this.ptuputhisPlantillaReporte = new FieldOVLenseSearch(this.langMng);
        this.ptupuTitulo = new Field(this.langMng);
        this.ptupuFechaVigencia = new Field(this.langMng);
        this.ptupuRutaArchivos = new Field(this.langMng);
        this.ptupuNombreArchivoPDF = new Field(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptuputhisPlantillaReporte.nameInRequest = 'pt_p_thisplantillareporte';
        this.ptuputhisPlantillaReporte.alias = this.langMng.translateText(
            'gs_TGEDITPLANTREP_inArg_pt_p_thisPlantillaReporte',
            'Plantilla reporte');
        this.ptuputhisPlantillaReporte.mandatory = true;
        this.ptuputhisPlantillaReporte.dataType = ModelConstants.Plantillareporte.name;
        this.ptuputhisPlantillaReporte.maxLength = 100;
        this.ptuputhisPlantillaReporte.assignCSS();
        this.fields.push(this.ptuputhisPlantillaReporte);

        this.ptupuTitulo.nameInRequest = 'pt_p_titulo';
        this.ptupuTitulo.alias = this.langMng.translateText(
            'gs_TGEDITPLANTREP_inArg_pt_p_Titulo',
            'Título');
        this.ptupuTitulo.mandatory = true;
        this.ptupuTitulo.dataType = Field.dtString;
        this.ptupuTitulo.maxLength = 100;
        this.ptupuTitulo.assignCSS();
        this.fields.push(this.ptupuTitulo);

        this.ptupuFechaVigencia.nameInRequest = 'pt_p_fechavigencia';
        this.ptupuFechaVigencia.alias = this.langMng.translateText(
            'gs_TGEDITPLANTREP_inArg_pt_p_FechaVigencia',
            'Fecha vigencia');
        this.ptupuFechaVigencia.mandatory = true;
        this.ptupuFechaVigencia.dataType = Field.dtDate;
        this.ptupuFechaVigencia.assignCSS();
        this.fields.push(this.ptupuFechaVigencia);

        this.ptupuRutaArchivos.nameInRequest = 'pt_p_rutaarchivos';
        this.ptupuRutaArchivos.alias = this.langMng.translateText(
            'gs_TGEDITPLANTREP_inArg_pt_p_RutaArchivos',
            'Ruta relativa');
        this.ptupuRutaArchivos.mandatory = true;
        this.ptupuRutaArchivos.dataType = Field.dtString;
        this.ptupuRutaArchivos.maxLength = 255;
        this.ptupuRutaArchivos.assignCSS();
        this.fields.push(this.ptupuRutaArchivos);

        this.ptupuNombreArchivoPDF.nameInRequest = 'pt_p_nombrearchivopdf';
        this.ptupuNombreArchivoPDF.alias = this.langMng.translateText(
            'gs_TGEDITPLANTREP_inArg_pt_p_NombreArchivoPDF',
            'Nombre fichero PDF');
        this.ptupuNombreArchivoPDF.mandatory = true;
        this.ptupuNombreArchivoPDF.dataType = Field.dtString;
        this.ptupuNombreArchivoPDF.maxLength = 50;
        this.ptupuNombreArchivoPDF.assignCSS();
        this.fields.push(this.ptupuNombreArchivoPDF);
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'ptuputhisPlantillaReporte'.toLowerCase()) {
            this.ptuputhisPlantillaReporte.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptuputhisplantillareporte('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for pt_p_thisPlantillaReporte argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptuputhisplantillareporte(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptuputhisplantillareporte();
        }
        if ('SetValue' === event && this.ptuputhisPlantillaReporte.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptuputhisPlantillaReporte();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_thisPlantillaReporte argument
     */
    private setSuppInfoptuputhisplantillareporte(): void {

        const displaySetIC = 'Titulo';
        let numberMissingSupInfo = 0;
        for (const value of this.ptuputhisPlantillaReporte.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Plantillareporte.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptuputhisPlantillaReporte.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptuputhisPlantillaReporte.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Plantillareporte.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptuputhisPlantillaReporte.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for pt_p_thisPlantillaReporte argument
     */
    private executeDependecyRules1ptuputhisPlantillaReporte(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptuputhisPlantillaReporte,
                'fechavigencia,rutaarchivos,titulo,nombrearchivopdf');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptuputhisPlantillaReporteActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_thisPlantillaReporte argument
     */
    private executeDependecyRules1ptuputhisPlantillaReporteActions(): void {
        const varptuputhisplantillareporte = this.getFirstInstanceFromCache(this.ptuputhisPlantillaReporte);
        // v <> NULL
        if (varptuputhisplantillareporte && !this.util.isNull(varptuputhisplantillareporte)) {
            // pt_p_thisPlantillaReporte.SetActive( FALSE )
            this.ptuputhisPlantillaReporte.enabled = false;
            this.executeDependecyRulesptuputhisplantillareporte('SetActive', true);
            // pt_p_FechaVigencia.SetValue( v.FechaVigencia )
            this.ptupuFechaVigencia.setValue(this.util.getDate(varptuputhisplantillareporte.get('fechavigencia')));
            // pt_p_RutaArchivos.SetValue( v.RutaArchivos )
            this.ptupuRutaArchivos.setValue(varptuputhisplantillareporte.get('rutaarchivos'));
            // pt_p_Titulo.SetValue( v.Titulo )
            this.ptupuTitulo.setValue(varptuputhisplantillareporte.get('titulo'));
            // pt_p_NombreArchivoPDF.SetValue( v.NombreArchivoPDF )
            this.ptupuNombreArchivoPDF.setValue(varptuputhisplantillareporte.get('nombrearchivopdf'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_thisPlantillaReporte lense search argument
     */
    public onptuputhisplantillareporteChange(): void {

        const searchText = this.ptuputhisPlantillaReporte.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.ptuputhisPlantillaReporte.lastText) {
                this.ptuputhisPlantillaReporte.removeCSSClass('noResultsLenseSearch');
                this.ptuputhisPlantillaReporte.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Plantillareporte.name, 'IC_PlantillaReporte', searchText, [], null).then(
                        (response: any) => {
                            this.ptuputhisPlantillaReporte.removeCSSClass('noResultsLenseSearch');
                            this.ptuputhisPlantillaReporte.searchResults = response.results;
                            if (this.ptuputhisPlantillaReporte.searchResults &&
                                this.ptuputhisPlantillaReporte.searchResults.length === 0) {
                                this.ptuputhisPlantillaReporte.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.ptuputhisPlantillaReporte.searchResults &&
                                this.ptuputhisPlantillaReporte.searchResults.length === 1) {
                                this.processptuputhisplantillareporteSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.ptuputhisPlantillaReporte.removeCSSClass('noResultsLenseSearch');
                            this.ptuputhisPlantillaReporte.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.ptuputhisPlantillaReporte.removeCSSClass('noResultsLenseSearch');
            this.ptuputhisPlantillaReporte.searchResults = [];
            this.cleanptuputhisplantillareporte();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_thisPlantillaReporte lense search argument
     */
    public processptuputhisplantillareporteSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptuputhisPlantillaReporte.searchResults.length > index) {
            selectedInstance = this.ptuputhisPlantillaReporte.searchResults[index];
        }
        // Clean the result list
        this.ptuputhisPlantillaReporte.searchResults = [];
        if (selectedInstance) {
            if (!this.ptuputhisPlantillaReporte.allowMultiSelect) {
                this.ptuputhisPlantillaReporte.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptuputhisPlantillaReporte.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesptuputhisplantillareporte('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_thisPlantillaReporte lense search argument
     */
    public cleanptuputhisplantillareporte(): void {
        this.clearValidationMessages();
        this.ptuputhisPlantillaReporte.clean();
        this.executeDependecyRulesptuputhisplantillareporte('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('ptuputhisPlantillaReporte'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptuputhisPlantillaReporte.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_PlantillaReporte';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
