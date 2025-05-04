import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { FirmaRoutingModule } from './firma-routing.module';
import { FirmaPIUuFirmasRespRegionalComponent } from './piu_firmasrespregional.component';
import { FirmaPIUuFirmauNullComponent } from './piu_firma_null.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    FirmaRoutingModule
  ],
  declarations: [
    FirmaPIUuFirmasRespRegionalComponent,
    FirmaPIUuFirmauNullComponent
  ],
  exports: [
    FirmaPIUuFirmasRespRegionalComponent,
    FirmaPIUuFirmauNullComponent
  ]
})
export class FirmaModule { }
