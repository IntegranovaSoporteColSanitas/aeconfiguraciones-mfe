import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { CausalRoutingModule } from './causal-routing.module';
import { CausalSIUucrearComponent } from './siu_crear.component';
import { CausalSIUumodificarComponent } from './siu_modificar.component';
import { CausalPIUuCausaluDuMDuNovedadComponent } from './piu_causal_d_md_novedad.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    CausalRoutingModule
  ],
  declarations: [
    CausalSIUucrearComponent,
    CausalSIUumodificarComponent,
    CausalPIUuCausaluDuMDuNovedadComponent
  ],
  exports: [
    CausalSIUucrearComponent,
    CausalSIUumodificarComponent,
    CausalPIUuCausaluDuMDuNovedadComponent
  ]
})
export class CausalModule { }
