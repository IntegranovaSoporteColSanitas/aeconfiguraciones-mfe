import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ContratoComboRoutingModule } from './contratocombo-routing.module';
import { ContratoComboPIUuContratoComboComponent } from './piu_contratocombo.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ContratoComboRoutingModule
  ],
  declarations: [
    ContratoComboPIUuContratoComboComponent
  ],
  exports: [
    ContratoComboPIUuContratoComboComponent
  ]
})
export class ContratoComboModule { }
