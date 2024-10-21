import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { Util } from '../common/app.utils';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { MSALUtil } from '../common/msalutil';

@Component({
    selector: 'app-menu',
    templateUrl: './appheader.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppHeaderComponent implements OnInit {

    /** Menu is open or not */
    public menuOpen = false;
    /** Change password is open or not */
    public displayChangePassword = false;

    constructor(
        private readonly util: Util,
        public readonly appGlobalInfo: AppGlobalInfo,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly msalUtil: MSALUtil,
        public langMng: LanguageMng
    ) {
    }

    ngOnInit(): void {
        this.appGlobalInfo.infoChanged.subscribe(() => this.processAppInfoChanged());
    }

    /**
     * Show or hide the menu
     */
    public toggleMenu(): void {
        this.menuOpen = !this.menuOpen;
    }

    public navigateFromHat(hatIndex: string): void {
        this.menuOpen = false;
        const exchInfo = this.getExchangeInfoForHatNode(hatIndex);
        if (exchInfo.exchangeType) {
            this.util.navigateTo(exchInfo);
        }
    }

    /**
     * Returns the exchange information for the menu element
     * @param hatIndex Menu element index
     */
    private getExchangeInfoForHatNode(hatIndex: string) {
        // Create the exchange information
        const exchInfo = new ExchangeInfo();
        exchInfo.exchangeType = 'Action';
        const index = hatIndex.indexOf('_');
        const firstLevel = index > -1 ? hatIndex.substring(0, index) : hatIndex;

        switch (firstLevel) {
            case '0':
                this.getExchangeInfoForHatSubNode0(hatIndex, exchInfo);
                break;
            case '1':
                this.getExchangeInfoForHatSubNode1(hatIndex, exchInfo);
                break;
            case '2':
                this.getExchangeInfoForHatSubNode2(hatIndex, exchInfo);
                break;
            case '3':
                this.getExchangeInfoForHatSubNode3(hatIndex, exchInfo);
                break;
            case '4':
                this.getExchangeInfoForHatSubNode4(hatIndex, exchInfo);
                break;
            default:
        }
        return exchInfo;
    }


    /**
     * Assign the proper values to the exchange information based in the hat index
     * @param hatSubNodeIndex Hat index
     * @param exchInfo Exchange information
     */
    private getExchangeInfoForHatSubNode0(hatSubNodeIndex: string, exchInfo: ExchangeInfo): void {
        switch (hatSubNodeIndex) {
            case '0_0':
                exchInfo.targetClassName = ModelConstants.Frecuenciaact.name;
                exchInfo.targetIUName = ModelConstants.Frecuenciaact.piuufrecuenciaact;
                break;
            case '0_1':
                exchInfo.targetClassName = ModelConstants.Paramconfig.name;
                exchInfo.targetIUName = ModelConstants.Paramconfig.piuuparamconfig;
                break;
            case '0_2_0':
                exchInfo.targetClassName = ModelConstants.Cuestionariomed.name;
                exchInfo.targetIUName = ModelConstants.Cuestionariomed.piuucuestionariomed;
                break;
            case '0_2_1':
                exchInfo.targetClassName = ModelConstants.Valor.name;
                exchInfo.targetIUName = ModelConstants.Valor.piuuvalor;
                break;
            case '0_3':
                exchInfo.targetClassName = ModelConstants.Plantillaemail.name;
                exchInfo.targetIUName = ModelConstants.Plantillaemail.piuuplantillaemail;
                break;
            case '0_4':
                exchInfo.targetClassName = ModelConstants.Estadobeneficiarioae.name;
                exchInfo.targetIUName = ModelConstants.Estadobeneficiarioae.piuuestadobeneficiarioae;
                break;
            case '0_5':
                exchInfo.targetClassName = ModelConstants.Dominio.name;
                exchInfo.targetIUName = ModelConstants.Dominio.piuudominio;
                break;
            case '0_6':
                exchInfo.targetClassName = ModelConstants.Motdevareamedica.name;
                exchInfo.targetIUName = ModelConstants.Motdevareamedica.piuumotdevareamedica;
                break;
            case '0_7':
                exchInfo.targetClassName = ModelConstants.Respregional.name;
                exchInfo.targetIUName = ModelConstants.Respregional.piuurespregional;
                break;
            case '0_8':
                exchInfo.targetClassName = ModelConstants.Institucionmatneo.name;
                exchInfo.targetIUName = ModelConstants.Institucionmatneo.piuuinstitucionmatneo;
                break;
            case '0_9':
                exchInfo.targetClassName = ModelConstants.Tarifa.name;
                exchInfo.targetIUName = ModelConstants.Tarifa.mdiuutarifas;
                break;
            case '0_10':
                exchInfo.targetClassName = ModelConstants.Contsindocsol.name;
                exchInfo.targetIUName = ModelConstants.Contsindocsol.piuucontsindocsol;
                break;
            case '0_11':
                exchInfo.targetClassName = ModelConstants.Logcontsindocsol.name;
                exchInfo.targetIUName = ModelConstants.Logcontsindocsol.piuulogcontsindocsol;
                break;
            case '0_12':
                exchInfo.targetClassName = ModelConstants.Reportesprocalm.name;
                exchInfo.targetIUName = ModelConstants.Reportesprocalm.piuureportesprocalm;
                break;
            case '0_13':
                exchInfo.targetClassName = ModelConstants.Tipofactura.name;
                exchInfo.targetIUName = ModelConstants.Tipofactura.piuutipofactura;
                break;
            case '0_14_0':
                exchInfo.targetClassName = ModelConstants.Novedad.name;
                exchInfo.targetIUName = ModelConstants.Novedad.piuunovedad;
                break;
            case '0_14_1':
                exchInfo.targetClassName = ModelConstants.Tiponovedad.name;
                exchInfo.targetIUName = ModelConstants.Tiponovedad.piuutiponovedad;
                break;
            case '0_14_2':
                exchInfo.targetClassName = ModelConstants.Motivoexcepcionsolnov.name;
                exchInfo.targetIUName = ModelConstants.Motivoexcepcionsolnov.piuumotivoexcepcionsolnov;
                break;
            case '0_15':
                exchInfo.targetClassName = ModelConstants.Priorizacionsolicitudes.name;
                exchInfo.targetIUName = ModelConstants.Priorizacionsolicitudes.piuupriorizacionsolicitudes;
                break;
            case '0_16':
                exchInfo.targetClassName = ModelConstants.Grupoasignacion.name;
                exchInfo.targetIUName = ModelConstants.Grupoasignacion.mdiuugrupoasignacion;
                break;
            case '0_17':
                exchInfo.targetClassName = ModelConstants.Contratocombo.name;
                exchInfo.targetIUName = ModelConstants.Contratocombo.piuucontratocombo;
                break;
            case '0_18':
                exchInfo.targetClassName = ModelConstants.Configuracionans.name;
                exchInfo.targetIUName = ModelConstants.Configuracionans.piuuconfiguracionans;
                break;
            case '0_19':
                exchInfo.targetClassName = ModelConstants.Fechainieps.name;
                exchInfo.targetIUName = ModelConstants.Fechainieps.piuufechainieps;
                break;
            case '0_20':
                exchInfo.targetClassName = ModelConstants.Contratosexentosfingreso.name;
                exchInfo.targetIUName = ModelConstants.Contratosexentosfingreso.piuucontratosexentosfingreso;
                break;
            case '0_21':
                exchInfo.targetClassName = ModelConstants.Plantillareporte.name;
                exchInfo.targetIUName = ModelConstants.Plantillareporte.piuuplantillareporte;
                break;
            default:
        }
    }

    /**
     * Assign the proper values to the exchange information based in the hat index
     * @param hatSubNodeIndex Hat index
     * @param exchInfo Exchange information
     */
    private getExchangeInfoForHatSubNode1(hatSubNodeIndex: string, exchInfo: ExchangeInfo): void {
        switch (hatSubNodeIndex) {
            case '1_0':
                exchInfo.targetClassName = ModelConstants.Sucursal.name;
                exchInfo.targetIUName = ModelConstants.Sucursal.piuusucursal;
                break;
            case '1_1':
                exchInfo.targetClassName = ModelConstants.Tiposucursalc.name;
                exchInfo.targetIUName = ModelConstants.Tiposucursalc.piuutiposucursalc;
                break;
            case '1_2':
                exchInfo.targetClassName = ModelConstants.Estadocivil.name;
                exchInfo.targetIUName = ModelConstants.Estadocivil.piuuestadocivil;
                break;
            case '1_3':
                exchInfo.targetClassName = ModelConstants.Departamento.name;
                exchInfo.targetIUName = ModelConstants.Departamento.piuudepartamento;
                break;
            case '1_4':
                exchInfo.targetClassName = ModelConstants.Tipoiva.name;
                exchInfo.targetIUName = ModelConstants.Tipoiva.piuutipoiva;
                break;
            case '1_5':
                exchInfo.targetClassName = ModelConstants.Estadocontrato.name;
                exchInfo.targetIUName = ModelConstants.Estadocontrato.piuuestadocontrato;
                break;
            case '1_6':
                exchInfo.targetClassName = ModelConstants.Regional.name;
                exchInfo.targetIUName = ModelConstants.Regional.piuuregional;
                break;
            case '1_7':
                exchInfo.targetClassName = ModelConstants.Pais.name;
                exchInfo.targetIUName = ModelConstants.Pais.piuupais;
                break;
            case '1_8':
                exchInfo.targetClassName = ModelConstants.Entidadfinancierac.name;
                exchInfo.targetIUName = ModelConstants.Entidadfinancierac.piuuentidadfinanciera;
                break;
            case '1_9':
                exchInfo.targetClassName = ModelConstants.Tipoentidadc.name;
                exchInfo.targetIUName = ModelConstants.Tipoentidadc.piuutipoentidad;
                break;
            case '1_10':
                exchInfo.targetClassName = ModelConstants.Tipoinstitucionc.name;
                exchInfo.targetIUName = ModelConstants.Tipoinstitucionc.piuutipoinstitucion;
                break;
            default:
        }
    }

    /**
     * Assign the proper values to the exchange information based in the hat index
     * @param hatSubNodeIndex Hat index
     * @param exchInfo Exchange information
     */
    private getExchangeInfoForHatSubNode2(hatSubNodeIndex: string, exchInfo: ExchangeInfo): void {
        switch (hatSubNodeIndex) {
            case '2_0':
                exchInfo.targetClassName = ModelConstants.Productos.name;
                exchInfo.targetIUName = ModelConstants.Productos.piuuproducto;
                break;
            case '2_1':
                exchInfo.targetClassName = ModelConstants.Planes.name;
                exchInfo.targetIUName = ModelConstants.Planes.piuuplan;
                break;
            case '2_2':
                exchInfo.targetClassName = ModelConstants.Companyia.name;
                exchInfo.targetIUName = ModelConstants.Companyia.piuucompanyia;
                break;
            case '2_3':
                exchInfo.targetClassName = ModelConstants.Municipio.name;
                exchInfo.targetIUName = ModelConstants.Municipio.piuumunicipio;
                break;
            case '2_4':
                exchInfo.targetClassName = ModelConstants.Tipodireccion.name;
                exchInfo.targetIUName = ModelConstants.Tipodireccion.piuutipodireccion;
                break;
            case '2_5':
                exchInfo.targetClassName = ModelConstants.Estadopersona.name;
                exchInfo.targetIUName = ModelConstants.Estadopersona.piuuestadopersona;
                break;
            case '2_6':
                exchInfo.targetClassName = ModelConstants.Estadobeneficiario.name;
                exchInfo.targetIUName = ModelConstants.Estadobeneficiario.piuuestadobeneficiario;
                break;
            case '2_7':
                exchInfo.targetClassName = ModelConstants.Formapago.name;
                exchInfo.targetIUName = ModelConstants.Formapago.piuuformapago;
                break;
            case '2_8':
                exchInfo.targetClassName = ModelConstants.Tipoidentificacion.name;
                exchInfo.targetIUName = ModelConstants.Tipoidentificacion.piuutipoidentificacion;
                break;
            case '2_9':
                exchInfo.targetClassName = ModelConstants.Eps.name;
                exchInfo.targetIUName = ModelConstants.Eps.piuueps;
                break;
            case '2_10':
                exchInfo.targetClassName = ModelConstants.Periodicidad.name;
                exchInfo.targetIUName = ModelConstants.Periodicidad.piuuperiodicidad;
                break;
            case '2_11':
                exchInfo.targetClassName = ModelConstants.Parentesco.name;
                exchInfo.targetIUName = ModelConstants.Parentesco.piuuparentesco;
                break;
            case '2_12':
                exchInfo.targetClassName = ModelConstants.Grupoasociado.name;
                exchInfo.targetIUName = ModelConstants.Grupoasociado.piuugrupoasociado;
                break;
            default:
        }
    }

    /**
     * Assign the proper values to the exchange information based in the hat index
     * @param hatSubNodeIndex Hat index
     * @param exchInfo Exchange information
     */
    private getExchangeInfoForHatSubNode3(hatSubNodeIndex: string, exchInfo: ExchangeInfo): void {
        if (hatSubNodeIndex === '3_0') {
            exchInfo.targetClassName = ModelConstants.Logllamadasae.name;
            exchInfo.targetIUName = ModelConstants.Logllamadasae.piuulogllamadasae;
        }
        if (hatSubNodeIndex === '3_1') {
            exchInfo.targetClassName = ModelConstants.Logllamadasbh.name;
            exchInfo.targetIUName = ModelConstants.Logllamadasbh.piuulogllamadasbh;
        }
    }

    /**
     * Assign the proper values to the exchange information based in the hat index
     * @param hatSubNodeIndex Hat index
     * @param exchInfo Exchange information
     */
    private getExchangeInfoForHatSubNode4(hatSubNodeIndex: string, exchInfo: ExchangeInfo): void {
        if (hatSubNodeIndex === '4_0') {
            exchInfo.targetClassName = ModelConstants.Firma.name;
            exchInfo.targetIUName = ModelConstants.Firma.piuufirmasrespregional;
        }
    }

    /**
     * Return if the menu element is visible or not
     * @param idNode Menu elemento id
     * @param agents Array of valid agents
     */
    public isNodeVisible(idNode: string, agents: string[]): boolean {
        return this.appGlobalInfo.getLoggedUserInfo().isNodeVisible(idNode, agents);
    }

    /**
     * Returns if login action is visible or not
     */
    public loginVisible(): boolean {
        return !this.logoutVisible();
    }

    /**
     * Returns if logout action is visible or not
     */
    public logoutVisible(): boolean {
        return this.appGlobalInfo.getLoggedUserInfo().logged &&
               this.appGlobalInfo.getLoggedUserInfo().oid;
    }

    /**
     * Navigates to the log in scenario
     */
    public navigateToLogin(): void {
        this.menuOpen = false;
        this.msalUtil.logInAzure('');
    }

    /**
     * Log out process
     */
    public logOut(): void {
        this.menuOpen = false;
        this.msalUtil.logOutAzure();
    }

    /**
     * Navigates to the main scenario
     */
    public navigateToMain(): void {
        this.util.navigateToMain();
    }

    /**
     * Navigates to the previous scenario
     */
    public navigateToPrevious(): void {
        this.util.navigateToPrevious();
    }

    /**
     * Returns true if the back button must bi visible or not
     */
    public backButtonVisible(): boolean {
        // If no logged user information, no visible
        if (!this.appGlobalInfo.getLoggedUserInfo().logged) {
            return false;
        }
        // If main page, no visible
        if (this.appGlobalInfo.appExchangeInfo.isMainScenario()) {
            return false;
        }
        // Any other case, visible
        return true;
    }

    /**
     * Process the change in the language
     * @param languageId Selected language Id
     */
    public onLanguageChanged(languageId: string): void {
        this.langMng.setCurrentLanguageId(languageId);
    }

    /**
     * Process the change in the logged user information
     */
    private processAppInfoChanged(): void {
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Returns the name of the user to be shown
     */
    public displayName(): string {
        if (this.appGlobalInfo.loggedUserInfo) {
            return this.appGlobalInfo.loggedUserInfo.displayName;
        }
        return '';
    }
}
