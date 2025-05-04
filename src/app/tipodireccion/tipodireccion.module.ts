import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { TipoDireccionRoutingModule } from './tipodireccion-routing.module';
import { TipoDireccionSIUucrearComponent } from './siu_crear.component';
import { TipoDireccionSIUumodificarComponent } from './siu_modificar.component';
import { TipoDireccionPIUuTipoDireccionComponent } from './piu_tipodireccion.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    TipoDireccionRoutingModule
  ],
  declarations: [
    TipoDireccionSIUucrearComponent,
    TipoDireccionSIUumodificarComponent,
    TipoDireccionPIUuTipoDireccionComponent
  ],
  exports: [
    TipoDireccionSIUucrearComponent,
    TipoDireccionSIUumodificarComponent,
    TipoDireccionPIUuTipoDireccionComponent
  ]
})
export class TipoDireccionModule { }
