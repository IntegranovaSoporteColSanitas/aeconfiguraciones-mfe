import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { LogLlamadasBHRoutingModule } from './logllamadasbh-routing.module';
import { LogLlamadasBHIIUuLogLlamadasBHComponent } from './iiu_logllamadasbh.component';
import { LogLlamadasBHPIUuLogLlamadasBHComponent } from './piu_logllamadasbh.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    LogLlamadasBHRoutingModule
  ],
  declarations: [
    LogLlamadasBHIIUuLogLlamadasBHComponent,
    LogLlamadasBHPIUuLogLlamadasBHComponent
  ],
  exports: [
    LogLlamadasBHIIUuLogLlamadasBHComponent,
    LogLlamadasBHPIUuLogLlamadasBHComponent
  ]
})
export class LogLlamadasBHModule { }
