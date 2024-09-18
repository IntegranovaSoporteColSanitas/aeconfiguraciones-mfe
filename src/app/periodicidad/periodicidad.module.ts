import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { PeriodicidadRoutingModule } from './periodicidad-routing.module';
import { PeriodicidadSIUucrearComponent } from './siu_crear.component';
import { PeriodicidadSIUumodificarComponent } from './siu_modificar.component';
import { PeriodicidadPIUuPeriodicidadComponent } from './piu_periodicidad.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    PeriodicidadRoutingModule
  ],
  declarations: [
    PeriodicidadSIUucrearComponent,
    PeriodicidadSIUumodificarComponent,
    PeriodicidadPIUuPeriodicidadComponent
  ],
  exports: [
    PeriodicidadSIUucrearComponent,
    PeriodicidadSIUumodificarComponent,
    PeriodicidadPIUuPeriodicidadComponent
  ]
})
export class PeriodicidadModule { }
