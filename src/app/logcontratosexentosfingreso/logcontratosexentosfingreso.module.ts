import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { LogContratosExentosFIngresoRoutingModule } from './logcontratosexentosfingreso-routing.module';
import { LogContratosExentosFIngresoPIUuLogContratosExentosFIngresComponent } from './piu_logcontratosexentosfingres.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    LogContratosExentosFIngresoRoutingModule
  ],
  declarations: [
    LogContratosExentosFIngresoPIUuLogContratosExentosFIngresComponent
  ],
  exports: [
    LogContratosExentosFIngresoPIUuLogContratosExentosFIngresComponent
  ]
})
export class LogContratosExentosFIngresoModule { }
