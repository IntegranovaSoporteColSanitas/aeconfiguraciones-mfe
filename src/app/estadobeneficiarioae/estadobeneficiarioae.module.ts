import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { EstadoBeneficiarioAERoutingModule } from './estadobeneficiarioae-routing.module';
import { EstadoBeneficiarioAESIUucrearComponent } from './siu_crear.component';
import { EstadoBeneficiarioAESIUuTMODIFICARComponent } from './siu_tmodificar.component';
import { EstadoBeneficiarioAEPIUuEstadoBeneficiarioAEComponent } from './piu_estadobeneficiarioae.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    EstadoBeneficiarioAERoutingModule
  ],
  declarations: [
    EstadoBeneficiarioAESIUucrearComponent,
    EstadoBeneficiarioAESIUuTMODIFICARComponent,
    EstadoBeneficiarioAEPIUuEstadoBeneficiarioAEComponent
  ],
  exports: [
    EstadoBeneficiarioAESIUucrearComponent,
    EstadoBeneficiarioAESIUuTMODIFICARComponent,
    EstadoBeneficiarioAEPIUuEstadoBeneficiarioAEComponent
  ]
})
export class EstadoBeneficiarioAEModule { }
