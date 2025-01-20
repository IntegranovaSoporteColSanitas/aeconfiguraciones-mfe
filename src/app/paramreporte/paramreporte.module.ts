import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ParamReporteRoutingModule } from './paramreporte-routing.module';
import { ParamReporteSIUumodificarComponent } from './siu_modificar.component';
import { ParamReporteSIUuTNEWComponent } from './siu_tnew.component';
import { ParamReportePIUuDuParametrosComponent } from './piu_d_parametros.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ParamReporteRoutingModule
  ],
  declarations: [
    ParamReporteSIUumodificarComponent,
    ParamReporteSIUuTNEWComponent,
    ParamReportePIUuDuParametrosComponent
  ],
  exports: [
    ParamReporteSIUumodificarComponent,
    ParamReporteSIUuTNEWComponent,
    ParamReportePIUuDuParametrosComponent
  ]
})
export class ParamReporteModule { }
