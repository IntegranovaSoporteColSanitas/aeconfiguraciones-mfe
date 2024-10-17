import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { LogGrupoAsignacionRoutingModule } from './loggrupoasignacion-routing.module';
import { LogGrupoAsignacionPIUuLogGrupoAsignacionComponent } from './piu_loggrupoasignacion.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    LogGrupoAsignacionRoutingModule
  ],
  declarations: [
    LogGrupoAsignacionPIUuLogGrupoAsignacionComponent
  ],
  exports: [
    LogGrupoAsignacionPIUuLogGrupoAsignacionComponent
  ]
})
export class LogGrupoAsignacionModule { }
