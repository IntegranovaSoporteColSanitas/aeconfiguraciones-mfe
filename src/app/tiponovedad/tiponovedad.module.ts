import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { TipoNovedadRoutingModule } from './tiponovedad-routing.module';
import { TipoNovedadSIUucrearComponent } from './siu_crear.component';
import { TipoNovedadSIUumodificarComponent } from './siu_modificar.component';
import { TipoNovedadPIUuTipoNovedadComponent } from './piu_tiponovedad.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    TipoNovedadRoutingModule
  ],
  declarations: [
    TipoNovedadSIUucrearComponent,
    TipoNovedadSIUumodificarComponent,
    TipoNovedadPIUuTipoNovedadComponent
  ],
  exports: [
    TipoNovedadSIUucrearComponent,
    TipoNovedadSIUumodificarComponent,
    TipoNovedadPIUuTipoNovedadComponent
  ]
})
export class TipoNovedadModule { }
