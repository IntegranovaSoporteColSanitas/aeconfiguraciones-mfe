import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { MotDevAreaMedicaRoutingModule } from './motdevareamedica-routing.module';
import { MotDevAreaMedicaSIUucrearComponent } from './siu_crear.component';
import { MotDevAreaMedicaSIUumodificarComponent } from './siu_modificar.component';
import { MotDevAreaMedicaPIUuMotDevAreaMedicaComponent } from './piu_motdevareamedica.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    MotDevAreaMedicaRoutingModule
  ],
  declarations: [
    MotDevAreaMedicaSIUucrearComponent,
    MotDevAreaMedicaSIUumodificarComponent,
    MotDevAreaMedicaPIUuMotDevAreaMedicaComponent
  ],
  exports: [
    MotDevAreaMedicaSIUucrearComponent,
    MotDevAreaMedicaSIUumodificarComponent,
    MotDevAreaMedicaPIUuMotDevAreaMedicaComponent
  ]
})
export class MotDevAreaMedicaModule { }
