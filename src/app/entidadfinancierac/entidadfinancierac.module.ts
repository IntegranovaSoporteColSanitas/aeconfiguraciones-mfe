import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { EntidadFinancieraCRoutingModule } from './entidadfinancierac-routing.module';
import { EntidadFinancieraCSIUucrearComponent } from './siu_crear.component';
import { EntidadFinancieraCPIUuEntidadFinancieraComponent } from './piu_entidadfinanciera.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    EntidadFinancieraCRoutingModule
  ],
  declarations: [
    EntidadFinancieraCSIUucrearComponent,
    EntidadFinancieraCPIUuEntidadFinancieraComponent
  ],
  exports: [
    EntidadFinancieraCSIUucrearComponent,
    EntidadFinancieraCPIUuEntidadFinancieraComponent
  ]
})
export class EntidadFinancieraCModule { }
