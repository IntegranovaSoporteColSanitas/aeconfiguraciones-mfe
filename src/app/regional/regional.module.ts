import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { RegionalRoutingModule } from './regional-routing.module';
import { RegionalSIUucrearComponent } from './siu_crear.component';
import { RegionalPIUuRegionalComponent } from './piu_regional.component';
import { RegionalPIUuRegionaluObsComponent } from './piu_regional_obs.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    RegionalRoutingModule
  ],
  declarations: [
    RegionalSIUucrearComponent,
    RegionalPIUuRegionalComponent,
    RegionalPIUuRegionaluObsComponent
  ],
  exports: [
    RegionalSIUucrearComponent,
    RegionalPIUuRegionalComponent,
    RegionalPIUuRegionaluObsComponent
  ]
})
export class RegionalModule { }
