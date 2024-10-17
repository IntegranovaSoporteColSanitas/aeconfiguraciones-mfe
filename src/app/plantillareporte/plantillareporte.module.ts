import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { PlantillaReporteRoutingModule } from './plantillareporte-routing.module';
import { PlantillaReportePIUuPlantillaReporteComponent } from './piu_plantillareporte.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    PlantillaReporteRoutingModule
  ],
  declarations: [
    PlantillaReportePIUuPlantillaReporteComponent
  ],
  exports: [
    PlantillaReportePIUuPlantillaReporteComponent
  ]
})
export class PlantillaReporteModule { }
