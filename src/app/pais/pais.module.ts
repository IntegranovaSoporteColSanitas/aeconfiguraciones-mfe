import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { PaisRoutingModule } from './pais-routing.module';
import { PaisSIUucrearComponent } from './siu_crear.component';
import { PaisPIUuPaisComponent } from './piu_pais.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    PaisRoutingModule
  ],
  declarations: [
    PaisSIUucrearComponent,
    PaisPIUuPaisComponent
  ],
  exports: [
    PaisSIUucrearComponent,
    PaisPIUuPaisComponent
  ]
})
export class PaisModule { }
