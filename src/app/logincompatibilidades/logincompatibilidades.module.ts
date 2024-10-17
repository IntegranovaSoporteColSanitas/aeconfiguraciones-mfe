import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { LogIncompatibilidadesRoutingModule } from './logincompatibilidades-routing.module';
import { LogIncompatibilidadesPIUuLogIncompatibilidadesComponent } from './piu_logincompatibilidades.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    LogIncompatibilidadesRoutingModule
  ],
  declarations: [
    LogIncompatibilidadesPIUuLogIncompatibilidadesComponent
  ],
  exports: [
    LogIncompatibilidadesPIUuLogIncompatibilidadesComponent
  ]
})
export class LogIncompatibilidadesModule { }
