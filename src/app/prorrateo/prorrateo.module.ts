import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ProrrateoRoutingModule } from './prorrateo-routing.module';
import { ProrrateoSIUucrearComponent } from './siu_crear.component';
import { ProrrateoSIUumodificarComponent } from './siu_modificar.component';
import { ProrrateoPIUuProrrateoComponent } from './piu_prorrateo.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ProrrateoRoutingModule
  ],
  declarations: [
    ProrrateoSIUucrearComponent,
    ProrrateoSIUumodificarComponent,
    ProrrateoPIUuProrrateoComponent
  ],
  exports: [
    ProrrateoSIUucrearComponent,
    ProrrateoSIUumodificarComponent,
    ProrrateoPIUuProrrateoComponent
  ]
})
export class ProrrateoModule { }
