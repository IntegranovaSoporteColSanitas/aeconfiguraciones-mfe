import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { CausaExclusionRoutingModule } from './causaexclusion-routing.module';
import { CausaExclusionSIUucrearComponent } from './siu_crear.component';
import { CausaExclusionSIUumodificarComponent } from './siu_modificar.component';
import { CausaExclusionPIUuCausaExclusionComponent } from './piu_causaexclusion.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    CausaExclusionRoutingModule
  ],
  declarations: [
    CausaExclusionSIUucrearComponent,
    CausaExclusionSIUumodificarComponent,
    CausaExclusionPIUuCausaExclusionComponent
  ],
  exports: [
    CausaExclusionSIUucrearComponent,
    CausaExclusionSIUumodificarComponent,
    CausaExclusionPIUuCausaExclusionComponent
  ]
})
export class CausaExclusionModule { }
