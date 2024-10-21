import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { FrecuenciaActRoutingModule } from './frecuenciaact-routing.module';
import { FrecuenciaActSIUucrearComponent } from './siu_crear.component';
import { FrecuenciaActSIUumodificarComponent } from './siu_modificar.component';
import { FrecuenciaActPIUuFrecuenciaActComponent } from './piu_frecuenciaact.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    FrecuenciaActRoutingModule
  ],
  declarations: [
    FrecuenciaActSIUucrearComponent,
    FrecuenciaActSIUumodificarComponent,
    FrecuenciaActPIUuFrecuenciaActComponent
  ],
  exports: [
    FrecuenciaActSIUucrearComponent,
    FrecuenciaActSIUumodificarComponent,
    FrecuenciaActPIUuFrecuenciaActComponent
  ]
})
export class FrecuenciaActModule { }
