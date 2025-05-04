import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { EstadoPersonaRoutingModule } from './estadopersona-routing.module';
import { EstadoPersonaSIUucrearComponent } from './siu_crear.component';
import { EstadoPersonaSIUumodificarComponent } from './siu_modificar.component';
import { EstadoPersonaPIUuEstadoPersonaComponent } from './piu_estadopersona.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    EstadoPersonaRoutingModule
  ],
  declarations: [
    EstadoPersonaSIUucrearComponent,
    EstadoPersonaSIUumodificarComponent,
    EstadoPersonaPIUuEstadoPersonaComponent
  ],
  exports: [
    EstadoPersonaSIUucrearComponent,
    EstadoPersonaSIUumodificarComponent,
    EstadoPersonaPIUuEstadoPersonaComponent
  ]
})
export class EstadoPersonaModule { }
