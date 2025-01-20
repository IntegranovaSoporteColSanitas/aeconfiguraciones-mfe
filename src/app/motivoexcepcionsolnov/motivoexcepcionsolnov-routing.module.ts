import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { MotivoExcepcionSolNovSIUucrearComponent } from './siu_crear.component';
import { MotivoExcepcionSolNovSIUumodificarComponent } from './siu_modificar.component';
import { MotivoExcepcionSolNovPIUuMotivoExcepcionSolNovComponent } from './piu_motivoexcepcionsolnov.component';

const routes: Routes = [
    { path: 'siu_crear' , component: MotivoExcepcionSolNovSIUucrearComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: MotivoExcepcionSolNovSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_motivoexcepcionsolnov' , component: MotivoExcepcionSolNovPIUuMotivoExcepcionSolNovComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotivoExcepcionSolNovRoutingModule { }
