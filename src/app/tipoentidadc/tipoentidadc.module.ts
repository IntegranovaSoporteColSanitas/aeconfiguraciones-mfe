import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { TipoEntidadCRoutingModule } from './tipoentidadc-routing.module';
import { TipoEntidadCSIUucrearComponent } from './siu_crear.component';
import { TipoEntidadCPIUuTipoEntidadComponent } from './piu_tipoentidad.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    TipoEntidadCRoutingModule
  ],
  declarations: [
    TipoEntidadCSIUucrearComponent,
    TipoEntidadCPIUuTipoEntidadComponent
  ],
  exports: [
    TipoEntidadCSIUucrearComponent,
    TipoEntidadCPIUuTipoEntidadComponent
  ]
})
export class TipoEntidadCModule { }
