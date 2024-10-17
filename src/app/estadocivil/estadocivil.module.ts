import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { EstadoCivilRoutingModule } from './estadocivil-routing.module';
import { EstadoCivilSIUucrearComponent } from './siu_crear.component';
import { EstadoCivilPIUuEstadoCivilComponent } from './piu_estadocivil.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    EstadoCivilRoutingModule
  ],
  declarations: [
    EstadoCivilSIUucrearComponent,
    EstadoCivilPIUuEstadoCivilComponent
  ],
  exports: [
    EstadoCivilSIUucrearComponent,
    EstadoCivilPIUuEstadoCivilComponent
  ]
})
export class EstadoCivilModule { }
