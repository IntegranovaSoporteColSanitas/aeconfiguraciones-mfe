import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { TipoIVARoutingModule } from './tipoiva-routing.module';
import { TipoIVASIUucrearComponent } from './siu_crear.component';
import { TipoIVASIUumodificarComponent } from './siu_modificar.component';
import { TipoIVAPIUuTipoIVAComponent } from './piu_tipoiva.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    TipoIVARoutingModule
  ],
  declarations: [
    TipoIVASIUucrearComponent,
    TipoIVASIUumodificarComponent,
    TipoIVAPIUuTipoIVAComponent
  ],
  exports: [
    TipoIVASIUucrearComponent,
    TipoIVASIUumodificarComponent,
    TipoIVAPIUuTipoIVAComponent
  ]
})
export class TipoIVAModule { }
