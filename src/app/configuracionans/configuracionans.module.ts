import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ConfiguracionANSRoutingModule } from './configuracionans-routing.module';
import { ConfiguracionANSSIUuTCREARComponent } from './siu_tcrear.component';
import { ConfiguracionANSSIUuTMODIFICARComponent } from './siu_tmodificar.component';
import { ConfiguracionANSIIUuConfiguracionANSComponent } from './iiu_configuracionans.component';
import { ConfiguracionANSPIUuConfiguracionANSComponent } from './piu_configuracionans.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ConfiguracionANSRoutingModule
  ],
  declarations: [
    ConfiguracionANSSIUuTCREARComponent,
    ConfiguracionANSSIUuTMODIFICARComponent,
    ConfiguracionANSIIUuConfiguracionANSComponent,
    ConfiguracionANSPIUuConfiguracionANSComponent
  ],
  exports: [
    ConfiguracionANSSIUuTCREARComponent,
    ConfiguracionANSSIUuTMODIFICARComponent,
    ConfiguracionANSIIUuConfiguracionANSComponent,
    ConfiguracionANSPIUuConfiguracionANSComponent
  ]
})
export class ConfiguracionANSModule { }
