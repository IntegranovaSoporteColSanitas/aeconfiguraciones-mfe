import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { GrupoAsociadoRoutingModule } from './grupoasociado-routing.module';
import { GrupoAsociadoSIUucrearComponent } from './siu_crear.component';
import { GrupoAsociadoSIUumodificarComponent } from './siu_modificar.component';
import { GrupoAsociadoPIUuGrupoAsociadoComponent } from './piu_grupoasociado.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    GrupoAsociadoRoutingModule
  ],
  declarations: [
    GrupoAsociadoSIUucrearComponent,
    GrupoAsociadoSIUumodificarComponent,
    GrupoAsociadoPIUuGrupoAsociadoComponent
  ],
  exports: [
    GrupoAsociadoSIUucrearComponent,
    GrupoAsociadoSIUumodificarComponent,
    GrupoAsociadoPIUuGrupoAsociadoComponent
  ]
})
export class GrupoAsociadoModule { }
