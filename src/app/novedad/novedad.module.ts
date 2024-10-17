import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { NovedadRoutingModule } from './novedad-routing.module';
import { NovedadSIUumodificarComponent } from './siu_modificar.component';
import { NovedadSIUuDelNovedadComponent } from './siu_delnovedad.component';
import { NovedadSIUuTCREARComponent } from './siu_tcrear.component';
import { NovedadMDIUuNovedaduCausalesComponent } from './mdiu_novedad_causales.component';
import { NovedadPIUuNovedadComponent } from './piu_novedad.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    NovedadRoutingModule
  ],
  declarations: [
    NovedadSIUumodificarComponent,
    NovedadSIUuDelNovedadComponent,
    NovedadSIUuTCREARComponent,
    NovedadMDIUuNovedaduCausalesComponent,
    NovedadPIUuNovedadComponent
  ],
  exports: [
    NovedadSIUumodificarComponent,
    NovedadSIUuDelNovedadComponent,
    NovedadSIUuTCREARComponent,
    NovedadMDIUuNovedaduCausalesComponent,
    NovedadPIUuNovedadComponent
  ]
})
export class NovedadModule { }
