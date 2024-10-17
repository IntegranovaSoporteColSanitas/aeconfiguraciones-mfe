import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { InstitucionMatNeoRoutingModule } from './institucionmatneo-routing.module';
import { InstitucionMatNeoSIUucrearComponent } from './siu_crear.component';
import { InstitucionMatNeoSIUuTMODIFICARComponent } from './siu_tmodificar.component';
import { InstitucionMatNeoPIUuInstitucionMatNeoComponent } from './piu_institucionmatneo.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    InstitucionMatNeoRoutingModule
  ],
  declarations: [
    InstitucionMatNeoSIUucrearComponent,
    InstitucionMatNeoSIUuTMODIFICARComponent,
    InstitucionMatNeoPIUuInstitucionMatNeoComponent
  ],
  exports: [
    InstitucionMatNeoSIUucrearComponent,
    InstitucionMatNeoSIUuTMODIFICARComponent,
    InstitucionMatNeoPIUuInstitucionMatNeoComponent
  ]
})
export class InstitucionMatNeoModule { }
