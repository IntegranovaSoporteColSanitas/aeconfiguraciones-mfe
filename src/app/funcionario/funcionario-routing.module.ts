import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { FuncionarioSIUuInsReporteFuncionarioComponent } from './siu_insreportefuncionario.component';
import { FuncionarioSIUuDelReporteFuncionarioComponent } from './siu_delreportefuncionario.component';
import { FuncionarioPIUuFuncionariouGrupoUsuariosComponent } from './piu_funcionario_grupousuarios.component';
import { FuncionarioPIUuFuncionariouObsComponent } from './piu_funcionario_obs.component';

const routes: Routes = [
    { path: 'siu_insreportefuncionario' , component: FuncionarioSIUuInsReporteFuncionarioComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_delreportefuncionario' , component: FuncionarioSIUuDelReporteFuncionarioComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_funcionario_grupousuarios' , component: FuncionarioPIUuFuncionariouGrupoUsuariosComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_funcionario_obs' , component: FuncionarioPIUuFuncionariouObsComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
