import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { LogPriorizacionSolRoutingModule } from './logpriorizacionsol-routing.module';
import { LogPriorizacionSolPIUuLogPriorizacionSolComponent } from './piu_logpriorizacionsol.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    LogPriorizacionSolRoutingModule
  ],
  declarations: [
    LogPriorizacionSolPIUuLogPriorizacionSolComponent
  ],
  exports: [
    LogPriorizacionSolPIUuLogPriorizacionSolComponent
  ]
})
export class LogPriorizacionSolModule { }
