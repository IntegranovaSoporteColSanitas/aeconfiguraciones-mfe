import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { AreaMedicaRoutingModule } from './areamedica-routing.module';
import { AreaMedicaPIUuAreaMedicauObsComponent } from './piu_areamedica_obs.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    AreaMedicaRoutingModule
  ],
  declarations: [
    AreaMedicaPIUuAreaMedicauObsComponent
  ],
  exports: [
    AreaMedicaPIUuAreaMedicauObsComponent
  ]
})
export class AreaMedicaModule { }
