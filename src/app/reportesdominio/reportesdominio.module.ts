import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ReportesDominioRoutingModule } from './reportesdominio-routing.module';
import { ReportesDominioSIUumodificarComponent } from './siu_modificar.component';
import { ReportesDominioPIUuReportesDominioComponent } from './piu_reportesdominio.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ReportesDominioRoutingModule
  ],
  declarations: [
    ReportesDominioSIUumodificarComponent,
    ReportesDominioPIUuReportesDominioComponent
  ],
  exports: [
    ReportesDominioSIUumodificarComponent,
    ReportesDominioPIUuReportesDominioComponent
  ]
})
export class ReportesDominioModule { }
