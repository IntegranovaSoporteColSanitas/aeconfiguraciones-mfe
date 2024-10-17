import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { PriorizacionSolicitudesRoutingModule } from './priorizacionsolicitudes-routing.module';
import { PriorizacionSolicitudesSIUuTCREARComponent } from './siu_tcrear.component';
import { PriorizacionSolicitudesSIUuTELIMINARComponent } from './siu_teliminar.component';
import { PriorizacionSolicitudesSIUuTMODIFICARComponent } from './siu_tmodificar.component';
import { PriorizacionSolicitudesPIUuPriorizacionSolicitudesComponent } from './piu_priorizacionsolicitudes.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    PriorizacionSolicitudesRoutingModule
  ],
  declarations: [
    PriorizacionSolicitudesSIUuTCREARComponent,
    PriorizacionSolicitudesSIUuTELIMINARComponent,
    PriorizacionSolicitudesSIUuTMODIFICARComponent,
    PriorizacionSolicitudesPIUuPriorizacionSolicitudesComponent
  ],
  exports: [
    PriorizacionSolicitudesSIUuTCREARComponent,
    PriorizacionSolicitudesSIUuTELIMINARComponent,
    PriorizacionSolicitudesSIUuTMODIFICARComponent,
    PriorizacionSolicitudesPIUuPriorizacionSolicitudesComponent
  ]
})
export class PriorizacionSolicitudesModule { }
