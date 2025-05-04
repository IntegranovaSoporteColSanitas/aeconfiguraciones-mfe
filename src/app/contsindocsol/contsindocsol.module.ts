import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ContSinDocSolRoutingModule } from './contsindocsol-routing.module';
import { ContSinDocSolSIUucrearComponent } from './siu_crear.component';
import { ContSinDocSolPIUuContSinDocSolComponent } from './piu_contsindocsol.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ContSinDocSolRoutingModule
  ],
  declarations: [
    ContSinDocSolSIUucrearComponent,
    ContSinDocSolPIUuContSinDocSolComponent
  ],
  exports: [
    ContSinDocSolSIUucrearComponent,
    ContSinDocSolPIUuContSinDocSolComponent
  ]
})
export class ContSinDocSolModule { }
