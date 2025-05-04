import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { SucursalRoutingModule } from './sucursal-routing.module';
import { SucursalSIUucrearComponent } from './siu_crear.component';
import { SucursalPIUuSucursalComponent } from './piu_sucursal.component';
import { SucursalPIUuSucursaluObsComponent } from './piu_sucursal_obs.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    SucursalRoutingModule
  ],
  declarations: [
    SucursalSIUucrearComponent,
    SucursalPIUuSucursalComponent,
    SucursalPIUuSucursaluObsComponent
  ],
  exports: [
    SucursalSIUucrearComponent,
    SucursalPIUuSucursalComponent,
    SucursalPIUuSucursaluObsComponent
  ]
})
export class SucursalModule { }
