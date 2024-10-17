import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { AreaMedicaRoutingModule } from './areamedica-routing.module';
import { AreaMedicaUAutouComponent } from './_auto_.component';
import { AreaMedicaPIUuAutouComponent } from './piu_auto_.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    AreaMedicaRoutingModule
  ],
  declarations: [
    AreaMedicaUAutouComponent,
    AreaMedicaPIUuAutouComponent
  ],
  exports: [
    AreaMedicaUAutouComponent,
    AreaMedicaPIUuAutouComponent
  ]
})
export class AreaMedicaModule { }
