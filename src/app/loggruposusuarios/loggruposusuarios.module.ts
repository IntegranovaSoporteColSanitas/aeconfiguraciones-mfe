import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { LogGruposUsuariosRoutingModule } from './loggruposusuarios-routing.module';
import { LogGruposUsuariosPIUuLogGruposUsuariosComponent } from './piu_loggruposusuarios.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    LogGruposUsuariosRoutingModule
  ],
  declarations: [
    LogGruposUsuariosPIUuLogGruposUsuariosComponent
  ],
  exports: [
    LogGruposUsuariosPIUuLogGruposUsuariosComponent
  ]
})
export class LogGruposUsuariosModule { }
