import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { MotivoExcepcionSolNovRoutingModule } from './motivoexcepcionsolnov-routing.module';
import { MotivoExcepcionSolNovSIUucrearComponent } from './siu_crear.component';
import { MotivoExcepcionSolNovSIUumodificarComponent } from './siu_modificar.component';
import { MotivoExcepcionSolNovPIUuMotivoExcepcionSolNovComponent } from './piu_motivoexcepcionsolnov.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    MotivoExcepcionSolNovRoutingModule
  ],
  declarations: [
    MotivoExcepcionSolNovSIUucrearComponent,
    MotivoExcepcionSolNovSIUumodificarComponent,
    MotivoExcepcionSolNovPIUuMotivoExcepcionSolNovComponent
  ],
  exports: [
    MotivoExcepcionSolNovSIUucrearComponent,
    MotivoExcepcionSolNovSIUumodificarComponent,
    MotivoExcepcionSolNovPIUuMotivoExcepcionSolNovComponent
  ]
})
export class MotivoExcepcionSolNovModule { }
