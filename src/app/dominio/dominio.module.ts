import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { DominioRoutingModule } from './dominio-routing.module';
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

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    DominioRoutingModule
  ],
  declarations: [
    DominioSIUucrearComponent,
    DominioSIUuInsPeriodicidadDominioComponent,
    DominioSIUuDelPeriodicidadDominioComponent,
    DominioSIUuInsRolDominioComponent,
    DominioSIUuDelRollDominioComponent,
    DominioSIUumodDatosRespFirmaComponent,
    DominioSIUumodImagenFirmaComponent,
    DominioSIUuInsFormaPagoComponent,
    DominioSIUuDelFormaPagoComponent,
    DominioSIUucambiarDiasVigenciaComponent,
    DominioSIUumodificarConfSolNovedadComponent,
    DominioSIUuTINSPLANTILLAComponent,
    DominioSIUuTINSNOVEDADComponent,
    DominioSIUuTADDGRPASESORESComponent,
    DominioSIUuTDELGRPASESORESComponent,
    DominioSIUuTADDGRPMEDICOComponent,
    DominioSIUuTDELGRPMEDICOComponent,
    DominioSIUuTADDREPORTEComponent,
    DominioSIUuTINSINCOMPATIBLEComponent,
    DominioSIUuTDELINCOMPATIBLEComponent,
    DominioSIUuTMODIFICARComponent,
    DominioMDIUuDominioComponent,
    DominioMDIUuDominiouGrupoAsesoresComponent,
    DominioMDIUuDominiouGrupoAreaMedicaComponent,
    DominioMDIUuDominioGruposUsuariosComponent,
    DominioMDIUuDominiosIncompatblesComponent,
    DominioMDIUuDominiouLogDatosComponent,
    DominioPIUuDominioComponent,
    DominioPIUuDominiouObsComponent
  ],
  exports: [
    DominioSIUucrearComponent,
    DominioSIUuInsPeriodicidadDominioComponent,
    DominioSIUuDelPeriodicidadDominioComponent,
    DominioSIUuInsRolDominioComponent,
    DominioSIUuDelRollDominioComponent,
    DominioSIUumodDatosRespFirmaComponent,
    DominioSIUumodImagenFirmaComponent,
    DominioSIUuInsFormaPagoComponent,
    DominioSIUuDelFormaPagoComponent,
    DominioSIUucambiarDiasVigenciaComponent,
    DominioSIUumodificarConfSolNovedadComponent,
    DominioSIUuTINSPLANTILLAComponent,
    DominioSIUuTINSNOVEDADComponent,
    DominioSIUuTADDGRPASESORESComponent,
    DominioSIUuTDELGRPASESORESComponent,
    DominioSIUuTADDGRPMEDICOComponent,
    DominioSIUuTDELGRPMEDICOComponent,
    DominioSIUuTADDREPORTEComponent,
    DominioSIUuTINSINCOMPATIBLEComponent,
    DominioSIUuTDELINCOMPATIBLEComponent,
    DominioSIUuTMODIFICARComponent,
    DominioMDIUuDominioComponent,
    DominioMDIUuDominiouGrupoAsesoresComponent,
    DominioMDIUuDominiouGrupoAreaMedicaComponent,
    DominioMDIUuDominioGruposUsuariosComponent,
    DominioMDIUuDominiosIncompatblesComponent,
    DominioMDIUuDominiouLogDatosComponent,
    DominioPIUuDominioComponent,
    DominioPIUuDominiouObsComponent
  ]
})
export class DominioModule { }
