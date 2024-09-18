import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { FirmaRoutingModule } from './firma-routing.module';
import { FirmaPIUuFirmasRespRegionalComponent } from './piu_firmasrespregional.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    FirmaRoutingModule
  ],
  declarations: [
    FirmaPIUuFirmasRespRegionalComponent
  ],
  exports: [
    FirmaPIUuFirmasRespRegionalComponent
  ]
})
export class FirmaModule { }
