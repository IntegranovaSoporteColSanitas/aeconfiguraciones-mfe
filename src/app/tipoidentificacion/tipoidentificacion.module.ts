import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { TipoIdentificacionRoutingModule } from './tipoidentificacion-routing.module';
import { TipoIdentificacionSIUucrearComponent } from './siu_crear.component';
import { TipoIdentificacionSIUumodificarComponent } from './siu_modificar.component';
import { TipoIdentificacionPIUuTipoIdentificacionComponent } from './piu_tipoidentificacion.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    TipoIdentificacionRoutingModule
  ],
  declarations: [
    TipoIdentificacionSIUucrearComponent,
    TipoIdentificacionSIUumodificarComponent,
    TipoIdentificacionPIUuTipoIdentificacionComponent
  ],
  exports: [
    TipoIdentificacionSIUucrearComponent,
    TipoIdentificacionSIUumodificarComponent,
    TipoIdentificacionPIUuTipoIdentificacionComponent
  ]
})
export class TipoIdentificacionModule { }
