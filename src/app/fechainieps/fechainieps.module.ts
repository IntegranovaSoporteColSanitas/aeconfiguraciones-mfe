import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { FechaIniEPSRoutingModule } from './fechainieps-routing.module';
import { FechaIniEPSPIUuFechaIniEPSComponent } from './piu_fechainieps.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    FechaIniEPSRoutingModule
  ],
  declarations: [
    FechaIniEPSPIUuFechaIniEPSComponent
  ],
  exports: [
    FechaIniEPSPIUuFechaIniEPSComponent
  ]
})
export class FechaIniEPSModule { }
