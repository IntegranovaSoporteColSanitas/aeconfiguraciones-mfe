import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { LogLlamadasAERoutingModule } from './logllamadasae-routing.module';
import { LogLlamadasAEIIUuLogLlamadasAEComponent } from './iiu_logllamadasae.component';
import { LogLlamadasAEPIUuLogLlamadasAEComponent } from './piu_logllamadasae.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    LogLlamadasAERoutingModule
  ],
  declarations: [
    LogLlamadasAEIIUuLogLlamadasAEComponent,
    LogLlamadasAEPIUuLogLlamadasAEComponent
  ],
  exports: [
    LogLlamadasAEIIUuLogLlamadasAEComponent,
    LogLlamadasAEPIUuLogLlamadasAEComponent
  ]
})
export class LogLlamadasAEModule { }
