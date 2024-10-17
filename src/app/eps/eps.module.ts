import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { EpsRoutingModule } from './eps-routing.module';
import { EpsSIUucrearComponent } from './siu_crear.component';
import { EpsSIUumodificarComponent } from './siu_modificar.component';
import { EpsPIUuEPSComponent } from './piu_eps.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    EpsRoutingModule
  ],
  declarations: [
    EpsSIUucrearComponent,
    EpsSIUumodificarComponent,
    EpsPIUuEPSComponent
  ],
  exports: [
    EpsSIUucrearComponent,
    EpsSIUumodificarComponent,
    EpsPIUuEPSComponent
  ]
})
export class EpsModule { }
