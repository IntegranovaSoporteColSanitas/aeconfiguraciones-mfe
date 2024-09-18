import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ParentescoRoutingModule } from './parentesco-routing.module';
import { ParentescoSIUucrearComponent } from './siu_crear.component';
import { ParentescoSIUumodificarComponent } from './siu_modificar.component';
import { ParentescoPIUuParentescoComponent } from './piu_parentesco.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ParentescoRoutingModule
  ],
  declarations: [
    ParentescoSIUucrearComponent,
    ParentescoSIUumodificarComponent,
    ParentescoPIUuParentescoComponent
  ],
  exports: [
    ParentescoSIUucrearComponent,
    ParentescoSIUumodificarComponent,
    ParentescoPIUuParentescoComponent
  ]
})
export class ParentescoModule { }
