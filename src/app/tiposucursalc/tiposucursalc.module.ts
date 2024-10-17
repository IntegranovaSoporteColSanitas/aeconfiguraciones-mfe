import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { TipoSucursalCRoutingModule } from './tiposucursalc-routing.module';
import { TipoSucursalCSIUucrearComponent } from './siu_crear.component';
import { TipoSucursalCPIUuTipoSucursalCComponent } from './piu_tiposucursalc.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    TipoSucursalCRoutingModule
  ],
  declarations: [
    TipoSucursalCSIUucrearComponent,
    TipoSucursalCPIUuTipoSucursalCComponent
  ],
  exports: [
    TipoSucursalCSIUucrearComponent,
    TipoSucursalCPIUuTipoSucursalCComponent
  ]
})
export class TipoSucursalCModule { }
