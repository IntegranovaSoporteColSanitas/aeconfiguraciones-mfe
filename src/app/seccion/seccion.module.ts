import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { SeccionRoutingModule } from './seccion-routing.module';
import { SeccionSIUuTCREARComponent } from './siu_tcrear.component';
import { SeccionSIUuTMODIFICARComponent } from './siu_tmodificar.component';
import { SeccionMDIUuSeccionComponent } from './mdiu_seccion.component';
import { SeccionPIUuSeccionComponent } from './piu_seccion.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    SeccionRoutingModule
  ],
  declarations: [
    SeccionSIUuTCREARComponent,
    SeccionSIUuTMODIFICARComponent,
    SeccionMDIUuSeccionComponent,
    SeccionPIUuSeccionComponent
  ],
  exports: [
    SeccionSIUuTCREARComponent,
    SeccionSIUuTMODIFICARComponent,
    SeccionMDIUuSeccionComponent,
    SeccionPIUuSeccionComponent
  ]
})
export class SeccionModule { }
