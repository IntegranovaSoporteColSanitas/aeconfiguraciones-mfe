import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { DetalleTarifaRoutingModule } from './detalletarifa-routing.module';
import { DetalleTarifaSIUuTCREARComponent } from './siu_tcrear.component';
import { DetalleTarifaSIUuTMODIFICARComponent } from './siu_tmodificar.component';
import { DetalleTarifaPIUuDetallesTarifaComponent } from './piu_detallestarifa.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    DetalleTarifaRoutingModule
  ],
  declarations: [
    DetalleTarifaSIUuTCREARComponent,
    DetalleTarifaSIUuTMODIFICARComponent,
    DetalleTarifaPIUuDetallesTarifaComponent
  ],
  exports: [
    DetalleTarifaSIUuTCREARComponent,
    DetalleTarifaSIUuTMODIFICARComponent,
    DetalleTarifaPIUuDetallesTarifaComponent
  ]
})
export class DetalleTarifaModule { }
