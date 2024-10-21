import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { LogContSinDocSolRoutingModule } from './logcontsindocsol-routing.module';
import { LogContSinDocSolPIUuLogContSinDocSolComponent } from './piu_logcontsindocsol.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    LogContSinDocSolRoutingModule
  ],
  declarations: [
    LogContSinDocSolPIUuLogContSinDocSolComponent
  ],
  exports: [
    LogContSinDocSolPIUuLogContSinDocSolComponent
  ]
})
export class LogContSinDocSolModule { }
