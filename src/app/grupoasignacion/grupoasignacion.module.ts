import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { GrupoAsignacionRoutingModule } from './grupoasignacion-routing.module';
import { GrupoAsignacionSIUuTCREARComponent } from './siu_tcrear.component';
import { GrupoAsignacionSIUuTMODIFICARComponent } from './siu_tmodificar.component';
import { GrupoAsignacionSIUuTADDUSUARIOComponent } from './siu_taddusuario.component';
import { GrupoAsignacionSIUuTDELUSUARIOComponent } from './siu_tdelusuario.component';
import { GrupoAsignacionMDIUuGrupoAsignacionComponent } from './mdiu_grupoasignacion.component';
import { GrupoAsignacionPIUuGrupoAsignacionComponent } from './piu_grupoasignacion.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    GrupoAsignacionRoutingModule
  ],
  declarations: [
    GrupoAsignacionSIUuTCREARComponent,
    GrupoAsignacionSIUuTMODIFICARComponent,
    GrupoAsignacionSIUuTADDUSUARIOComponent,
    GrupoAsignacionSIUuTDELUSUARIOComponent,
    GrupoAsignacionMDIUuGrupoAsignacionComponent,
    GrupoAsignacionPIUuGrupoAsignacionComponent
  ],
  exports: [
    GrupoAsignacionSIUuTCREARComponent,
    GrupoAsignacionSIUuTMODIFICARComponent,
    GrupoAsignacionSIUuTADDUSUARIOComponent,
    GrupoAsignacionSIUuTDELUSUARIOComponent,
    GrupoAsignacionMDIUuGrupoAsignacionComponent,
    GrupoAsignacionPIUuGrupoAsignacionComponent
  ]
})
export class GrupoAsignacionModule { }
