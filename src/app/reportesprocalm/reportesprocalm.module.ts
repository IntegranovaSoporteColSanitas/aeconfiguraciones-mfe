import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ReportesProcAlmRoutingModule } from './reportesprocalm-routing.module';
import { ReportesProcAlmSIUucrearComponent } from './siu_crear.component';
import { ReportesProcAlmSIUumodificarComponent } from './siu_modificar.component';
import { ReportesProcAlmSIUuevGenerarComponent } from './siu_evgenerar.component';
import { ReportesProcAlmSIUuevGeneraruOutComponent } from './siu_evgenerar_out.component';
import { ReportesProcAlmMDIUuReportesProcAlmComponent } from './mdiu_reportesprocalm.component';
import { ReportesProcAlmPIUuReportesProcAlmComponent } from './piu_reportesprocalm.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ReportesProcAlmRoutingModule
  ],
  declarations: [
    ReportesProcAlmSIUucrearComponent,
    ReportesProcAlmSIUumodificarComponent,
    ReportesProcAlmSIUuevGenerarComponent,
    ReportesProcAlmSIUuevGeneraruOutComponent,
    ReportesProcAlmMDIUuReportesProcAlmComponent,
    ReportesProcAlmPIUuReportesProcAlmComponent
  ],
  exports: [
    ReportesProcAlmSIUucrearComponent,
    ReportesProcAlmSIUumodificarComponent,
    ReportesProcAlmSIUuevGenerarComponent,
    ReportesProcAlmSIUuevGeneraruOutComponent,
    ReportesProcAlmMDIUuReportesProcAlmComponent,
    ReportesProcAlmPIUuReportesProcAlmComponent
  ]
})
export class ReportesProcAlmModule { }
