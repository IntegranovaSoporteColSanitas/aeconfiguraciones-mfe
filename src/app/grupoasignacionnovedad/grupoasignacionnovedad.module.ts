import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { GrupoAsignacionNovedadRoutingModule } from './grupoasignacionnovedad-routing.module';
import { GrupoAsignacionNovedadSIUuTCREARComponent } from './siu_tcrear.component';
import { GrupoAsignacionNovedadSIUuTASGGRUPOComponent } from './siu_tasggrupo.component';
import { GrupoAsignacionNovedadMDIUuGrupoAsignacionNovedadComponent } from './mdiu_grupoasignacionnovedad.component';
import { GrupoAsignacionNovedadPIUuGrpAsigNovedaduDuDominioComponent } from './piu_grpasignovedad_d_dominio.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    GrupoAsignacionNovedadRoutingModule
  ],
  declarations: [
    GrupoAsignacionNovedadSIUuTCREARComponent,
    GrupoAsignacionNovedadSIUuTASGGRUPOComponent,
    GrupoAsignacionNovedadMDIUuGrupoAsignacionNovedadComponent,
    GrupoAsignacionNovedadPIUuGrpAsigNovedaduDuDominioComponent
  ],
  exports: [
    GrupoAsignacionNovedadSIUuTCREARComponent,
    GrupoAsignacionNovedadSIUuTASGGRUPOComponent,
    GrupoAsignacionNovedadMDIUuGrupoAsignacionNovedadComponent,
    GrupoAsignacionNovedadPIUuGrpAsigNovedaduDuDominioComponent
  ]
})
export class GrupoAsignacionNovedadModule { }
