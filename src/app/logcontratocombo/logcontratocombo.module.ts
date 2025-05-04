import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { LogContratoComboRoutingModule } from './logcontratocombo-routing.module';
import { LogContratoComboPIUuLogContratoComboComponent } from './piu_logcontratocombo.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    LogContratoComboRoutingModule
  ],
  declarations: [
    LogContratoComboPIUuLogContratoComboComponent
  ],
  exports: [
    LogContratoComboPIUuLogContratoComboComponent
  ]
})
export class LogContratoComboModule { }
