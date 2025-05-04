import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { LogGrupoAsignacionPIUuLogGrupoAsignacionComponent } from './piu_loggrupoasignacion.component';

const routes: Routes = [
    { path: 'piu_loggrupoasignacion' , component: LogGrupoAsignacionPIUuLogGrupoAsignacionComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogGrupoAsignacionRoutingModule { }
