import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { DepartamentoRoutingModule } from './departamento-routing.module';
import { DepartamentoSIUucrearComponent } from './siu_crear.component';
import { DepartamentoPIUuDepartamentoComponent } from './piu_departamento.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    DepartamentoRoutingModule
  ],
  declarations: [
    DepartamentoSIUucrearComponent,
    DepartamentoPIUuDepartamentoComponent
  ],
  exports: [
    DepartamentoSIUucrearComponent,
    DepartamentoPIUuDepartamentoComponent
  ]
})
export class DepartamentoModule { }
