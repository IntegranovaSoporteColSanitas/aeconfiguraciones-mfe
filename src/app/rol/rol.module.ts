import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { RolRoutingModule } from './rol-routing.module';
import { RolSIUucrearComponent } from './siu_crear.component';
import { RolPIUuRolComponent } from './piu_rol.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    RolRoutingModule
  ],
  declarations: [
    RolSIUucrearComponent,
    RolPIUuRolComponent
  ],
  exports: [
    RolSIUucrearComponent,
    RolPIUuRolComponent
  ]
})
export class RolModule { }
