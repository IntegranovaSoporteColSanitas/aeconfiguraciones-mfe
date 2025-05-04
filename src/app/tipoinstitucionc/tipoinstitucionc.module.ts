import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { TipoInstitucionCRoutingModule } from './tipoinstitucionc-routing.module';
import { TipoInstitucionCSIUucrearComponent } from './siu_crear.component';
import { TipoInstitucionCPIUuTipoInstitucionComponent } from './piu_tipoinstitucion.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    TipoInstitucionCRoutingModule
  ],
  declarations: [
    TipoInstitucionCSIUucrearComponent,
    TipoInstitucionCPIUuTipoInstitucionComponent
  ],
  exports: [
    TipoInstitucionCSIUucrearComponent,
    TipoInstitucionCPIUuTipoInstitucionComponent
  ]
})
export class TipoInstitucionCModule { }
