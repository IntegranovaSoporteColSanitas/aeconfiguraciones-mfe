import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ValorRoutingModule } from './valor-routing.module';
import { ValorSIUucrearComponent } from './siu_crear.component';
import { ValorSIUumodificarComponent } from './siu_modificar.component';
import { ValorPIUuValorComponent } from './piu_valor.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ValorRoutingModule
  ],
  declarations: [
    ValorSIUucrearComponent,
    ValorSIUumodificarComponent,
    ValorPIUuValorComponent
  ],
  exports: [
    ValorSIUucrearComponent,
    ValorSIUumodificarComponent,
    ValorPIUuValorComponent
  ]
})
export class ValorModule { }
