import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { EstadoBeneficiarioRoutingModule } from './estadobeneficiario-routing.module';
import { EstadoBeneficiarioSIUucrearComponent } from './siu_crear.component';
import { EstadoBeneficiarioSIUumodificarComponent } from './siu_modificar.component';
import { EstadoBeneficiarioPIUuEstadoBeneficiarioComponent } from './piu_estadobeneficiario.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    EstadoBeneficiarioRoutingModule
  ],
  declarations: [
    EstadoBeneficiarioSIUucrearComponent,
    EstadoBeneficiarioSIUumodificarComponent,
    EstadoBeneficiarioPIUuEstadoBeneficiarioComponent
  ],
  exports: [
    EstadoBeneficiarioSIUucrearComponent,
    EstadoBeneficiarioSIUumodificarComponent,
    EstadoBeneficiarioPIUuEstadoBeneficiarioComponent
  ]
})
export class EstadoBeneficiarioModule { }
