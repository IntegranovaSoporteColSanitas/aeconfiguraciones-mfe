import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { MunicipioRoutingModule } from './municipio-routing.module';
import { MunicipioSIUucrearComponent } from './siu_crear.component';
import { MunicipioSIUumodificarComponent } from './siu_modificar.component';
import { MunicipioPIUuMunicipioComponent } from './piu_municipio.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    MunicipioRoutingModule
  ],
  declarations: [
    MunicipioSIUucrearComponent,
    MunicipioSIUumodificarComponent,
    MunicipioPIUuMunicipioComponent
  ],
  exports: [
    MunicipioSIUucrearComponent,
    MunicipioSIUumodificarComponent,
    MunicipioPIUuMunicipioComponent
  ]
})
export class MunicipioModule { }
