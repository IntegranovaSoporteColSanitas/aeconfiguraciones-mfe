import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { CuestionarioMedRoutingModule } from './cuestionariomed-routing.module';
import { CuestionarioMedSIUucrearComponent } from './siu_crear.component';
import { CuestionarioMedMDIUuCuestionarioMedComponent } from './mdiu_cuestionariomed.component';
import { CuestionarioMedPIUuCuestionarioMedComponent } from './piu_cuestionariomed.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    CuestionarioMedRoutingModule
  ],
  declarations: [
    CuestionarioMedSIUucrearComponent,
    CuestionarioMedMDIUuCuestionarioMedComponent,
    CuestionarioMedPIUuCuestionarioMedComponent
  ],
  exports: [
    CuestionarioMedSIUucrearComponent,
    CuestionarioMedMDIUuCuestionarioMedComponent,
    CuestionarioMedPIUuCuestionarioMedComponent
  ]
})
export class CuestionarioMedModule { }
