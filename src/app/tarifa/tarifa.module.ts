import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { TarifaRoutingModule } from './tarifa-routing.module';
import { TarifaMDIUuTarifasComponent } from './mdiu_tarifas.component';
import { TarifaPIUuTarifasComponent } from './piu_tarifas.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    TarifaRoutingModule
  ],
  declarations: [
    TarifaMDIUuTarifasComponent,
    TarifaPIUuTarifasComponent
  ],
  exports: [
    TarifaMDIUuTarifasComponent,
    TarifaPIUuTarifasComponent
  ]
})
export class TarifaModule { }
