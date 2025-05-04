import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { DominioSIUucrearComponent } from './siu_crear.component';
import { DominioSIUuInsPeriodicidadDominioComponent } from './siu_insperiodicidaddominio.component';
import { DominioSIUuDelPeriodicidadDominioComponent } from './siu_delperiodicidaddominio.component';
import { DominioSIUuInsRolDominioComponent } from './siu_insroldominio.component';
import { DominioSIUuDelRollDominioComponent } from './siu_delrolldominio.component';
import { DominioSIUumodDatosRespFirmaComponent } from './siu_moddatosrespfirma.component';
import { DominioSIUumodImagenFirmaComponent } from './siu_modimagenfirma.component';
import { DominioSIUuInsFormaPagoComponent } from './siu_insformapago.component';
import { DominioSIUuDelFormaPagoComponent } from './siu_delformapago.component';
import { DominioSIUucambiarDiasVigenciaComponent } from './siu_cambiardiasvigencia.component';
import { DominioSIUumodificarConfSolNovedadComponent } from './siu_modificarconfsolnovedad.component';
import { DominioSIUuTINSPLANTILLAComponent } from './siu_tinsplantilla.component';
import { DominioSIUuTINSNOVEDADComponent } from './siu_tinsnovedad.component';
import { DominioSIUuTADDGRPASESORESComponent } from './siu_taddgrpasesores.component';
import { DominioSIUuTDELGRPASESORESComponent } from './siu_tdelgrpasesores.component';
import { DominioSIUuTADDGRPMEDICOComponent } from './siu_taddgrpmedico.component';
import { DominioSIUuTDELGRPMEDICOComponent } from './siu_tdelgrpmedico.component';
import { DominioSIUuTADDREPORTEComponent } from './siu_taddreporte.component';
import { DominioSIUuTINSINCOMPATIBLEComponent } from './siu_tinsincompatible.component';
import { DominioSIUuTDELINCOMPATIBLEComponent } from './siu_tdelincompatible.component';
import { DominioSIUuTMODIFICARComponent } from './siu_tmodificar.component';
import { DominioMDIUuDominioComponent } from './mdiu_dominio.component';
import { DominioMDIUuDominiouGrupoAsesoresComponent } from './mdiu_dominio_grupoasesores.component';
import { DominioMDIUuDominiouGrupoAreaMedicaComponent } from './mdiu_dominio_grupoareamedica.component';
import { DominioMDIUuDominioGruposUsuariosComponent } from './mdiu_dominiogruposusuarios.component';
import { DominioMDIUuDominiosIncompatblesComponent } from './mdiu_dominiosincompatbles.component';
import { DominioMDIUuDominiouLogDatosComponent } from './mdiu_dominio_logdatos.component';
import { DominioPIUuDominioComponent } from './piu_dominio.component';
import { DominioPIUuDominiouObsComponent } from './piu_dominio_obs.component';

const routes: Routes = [
    { path: 'siu_crear' , component: DominioSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_insperiodicidaddominio' , component: DominioSIUuInsPeriodicidadDominioComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_delperiodicidaddominio' , component: DominioSIUuDelPeriodicidadDominioComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_insroldominio' , component: DominioSIUuInsRolDominioComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_delrolldominio' , component: DominioSIUuDelRollDominioComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_moddatosrespfirma' , component: DominioSIUumodDatosRespFirmaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modimagenfirma' , component: DominioSIUumodImagenFirmaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_insformapago' , component: DominioSIUuInsFormaPagoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_delformapago' , component: DominioSIUuDelFormaPagoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_cambiardiasvigencia' , component: DominioSIUucambiarDiasVigenciaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificarconfsolnovedad' , component: DominioSIUumodificarConfSolNovedadComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tinsplantilla' , component: DominioSIUuTINSPLANTILLAComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tinsnovedad' , component: DominioSIUuTINSNOVEDADComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_taddgrpasesores' , component: DominioSIUuTADDGRPASESORESComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tdelgrpasesores' , component: DominioSIUuTDELGRPASESORESComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_taddgrpmedico' , component: DominioSIUuTADDGRPMEDICOComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tdelgrpmedico' , component: DominioSIUuTDELGRPMEDICOComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_taddreporte' , component: DominioSIUuTADDREPORTEComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tinsincompatible' , component: DominioSIUuTINSINCOMPATIBLEComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tdelincompatible' , component: DominioSIUuTDELINCOMPATIBLEComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodificar' , component: DominioSIUuTMODIFICARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_dominio' , component: DominioMDIUuDominioComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_dominio_grupoasesores' , component: DominioMDIUuDominiouGrupoAsesoresComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_dominio_grupoareamedica' , component: DominioMDIUuDominiouGrupoAreaMedicaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_dominiogruposusuarios' , component: DominioMDIUuDominioGruposUsuariosComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_dominiosincompatbles' , component: DominioMDIUuDominiosIncompatblesComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_dominio_logdatos' , component: DominioMDIUuDominiouLogDatosComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_dominio' , component: DominioPIUuDominioComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_dominio_obs' , component: DominioPIUuDominiouObsComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DominioRoutingModule { }
