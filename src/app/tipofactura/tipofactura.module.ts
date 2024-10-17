import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { TipoFacturaRoutingModule } from './tipofactura-routing.module';
import { TipoFacturaSIUucrearComponent } from './siu_crear.component';
import { TipoFacturaSIUumodificarComponent } from './siu_modificar.component';
import { TipoFacturaPIUuTipoFacturaComponent } from './piu_tipofactura.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    TipoFacturaRoutingModule
  ],
  declarations: [
    TipoFacturaSIUucrearComponent,
    TipoFacturaSIUumodificarComponent,
    TipoFacturaPIUuTipoFacturaComponent
  ],
  exports: [
    TipoFacturaSIUucrearComponent,
    TipoFacturaSIUumodificarComponent,
    TipoFacturaPIUuTipoFacturaComponent
  ]
})
export class TipoFacturaModule { }
