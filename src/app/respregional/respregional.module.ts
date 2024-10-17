import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { RespRegionalRoutingModule } from './respregional-routing.module';
import { RespRegionalSIUuTMODIFICARComponent } from './siu_tmodificar.component';
import { RespRegionalSIUuTCREAROMODFIRMAComponent } from './siu_tcrearomodfirma.component';
import { RespRegionalIIUuRespRegionaluFirmaComponent } from './iiu_respregional_firma.component';
import { RespRegionalPIUuRespRegionalComponent } from './piu_respregional.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    RespRegionalRoutingModule
  ],
  declarations: [
    RespRegionalSIUuTMODIFICARComponent,
    RespRegionalSIUuTCREAROMODFIRMAComponent,
    RespRegionalIIUuRespRegionaluFirmaComponent,
    RespRegionalPIUuRespRegionalComponent
  ],
  exports: [
    RespRegionalSIUuTMODIFICARComponent,
    RespRegionalSIUuTCREAROMODFIRMAComponent,
    RespRegionalIIUuRespRegionaluFirmaComponent,
    RespRegionalPIUuRespRegionalComponent
  ]
})
export class RespRegionalModule { }
