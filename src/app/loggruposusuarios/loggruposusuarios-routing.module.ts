import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { LogGruposUsuariosPIUuLogGruposUsuariosComponent } from './piu_loggruposusuarios.component';

const routes: Routes = [
    { path: 'piu_loggruposusuarios' , component: LogGruposUsuariosPIUuLogGruposUsuariosComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogGruposUsuariosRoutingModule { }
