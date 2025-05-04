import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { CausalRoutingModule } from './causal-routing.module';
import { CausalSIUucrearComponent } from './siu_crear.component';
import { CausalSIUumodificarComponent } from './siu_modificar.component';
import { CausalUAutouComponent } from './_auto_.component';
import { CausalPIUuCausaluNullComponent } from './piu_causal_null.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    CausalRoutingModule
  ],
  declarations: [
    CausalSIUucrearComponent,
    CausalSIUumodificarComponent,
    CausalUAutouComponent,
    CausalPIUuCausaluNullComponent
  ],
  exports: [
    CausalSIUucrearComponent,
    CausalSIUumodificarComponent,
    CausalUAutouComponent,
    CausalPIUuCausaluNullComponent
  ]
})
export class CausalModule { }
