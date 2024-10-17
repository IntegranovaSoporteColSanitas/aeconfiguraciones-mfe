import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ContratosExentosFIngresoRoutingModule } from './contratosexentosfingreso-routing.module';
import { ContratosExentosFIngresoPIUuContratosExentosFIngresoComponent } from './piu_contratosexentosfingreso.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ContratosExentosFIngresoRoutingModule
  ],
  declarations: [
    ContratosExentosFIngresoPIUuContratosExentosFIngresoComponent
  ],
  exports: [
    ContratosExentosFIngresoPIUuContratosExentosFIngresoComponent
  ]
})
export class ContratosExentosFIngresoModule { }
