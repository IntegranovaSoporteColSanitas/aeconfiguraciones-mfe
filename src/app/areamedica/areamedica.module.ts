import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { AreaMedicaRoutingModule } from './areamedica-routing.module';
import { AreaMedicaPIUuAreaMedicauNullComponent } from './piu_areamedica_null.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    AreaMedicaRoutingModule
  ],
  declarations: [
    AreaMedicaPIUuAreaMedicauNullComponent
  ],
  exports: [
    AreaMedicaPIUuAreaMedicauNullComponent
  ]
})
export class AreaMedicaModule { }
