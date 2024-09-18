import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { FormaPagoRoutingModule } from './formapago-routing.module';
import { FormaPagoSIUucrearComponent } from './siu_crear.component';
import { FormaPagoSIUumodificarComponent } from './siu_modificar.component';
import { FormaPagoPIUuFormaPagoComponent } from './piu_formapago.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    FormaPagoRoutingModule
  ],
  declarations: [
    FormaPagoSIUucrearComponent,
    FormaPagoSIUumodificarComponent,
    FormaPagoPIUuFormaPagoComponent
  ],
  exports: [
    FormaPagoSIUucrearComponent,
    FormaPagoSIUumodificarComponent,
    FormaPagoPIUuFormaPagoComponent
  ]
})
export class FormaPagoModule { }
