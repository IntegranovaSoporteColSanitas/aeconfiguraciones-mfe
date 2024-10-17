import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { LogConfiguracionANSRoutingModule } from './logconfiguracionans-routing.module';
import { LogConfiguracionANSPIUuLogConfiguracionANSComponent } from './piu_logconfiguracionans.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    LogConfiguracionANSRoutingModule
  ],
  declarations: [
    LogConfiguracionANSPIUuLogConfiguracionANSComponent
  ],
  exports: [
    LogConfiguracionANSPIUuLogConfiguracionANSComponent
  ]
})
export class LogConfiguracionANSModule { }
