import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { EstadoContratoRoutingModule } from './estadocontrato-routing.module';
import { EstadoContratoSIUucrearComponent } from './siu_crear.component';
import { EstadoContratoPIUuEstadoContratoComponent } from './piu_estadocontrato.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    EstadoContratoRoutingModule
  ],
  declarations: [
    EstadoContratoSIUucrearComponent,
    EstadoContratoPIUuEstadoContratoComponent
  ],
  exports: [
    EstadoContratoSIUucrearComponent,
    EstadoContratoPIUuEstadoContratoComponent
  ]
})
export class EstadoContratoModule { }
