import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { NovedadRoutingModule } from './novedad-routing.module';
import { NovedadSIUumodificarComponent } from './siu_modificar.component';
import { NovedadSIUuDelNovedadComponent } from './siu_delnovedad.component';
import { NovedadSIUuTCREARComponent } from './siu_tcrear.component';
import { NovedadIIUuNovedadComponent } from './iiu_novedad.component';
import { NovedadMDIUuNovedaduCausalesComponent } from './mdiu_novedad_causales.component';
import { NovedadPIUuNovedadComponent } from './piu_novedad.component';
import { NovedadPIUuNovedaduNullComponent } from './piu_novedad_null.component';

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
    NovedadIIUuNovedadComponent,
    NovedadMDIUuNovedaduCausalesComponent,
    NovedadPIUuNovedadComponent,
    NovedadPIUuNovedaduNullComponent
  ],
  exports: [
    NovedadSIUumodificarComponent,
    NovedadSIUuDelNovedadComponent,
    NovedadSIUuTCREARComponent,
    NovedadIIUuNovedadComponent,
    NovedadMDIUuNovedaduCausalesComponent,
    NovedadPIUuNovedadComponent,
    NovedadPIUuNovedaduNullComponent
  ]
})
export class NovedadModule { }
