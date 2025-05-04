import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { LogIncompatibilidadesPIUuLogIncompatibilidadesComponent } from './piu_logincompatibilidades.component';

const routes: Routes = [
    { path: 'piu_logincompatibilidades' , component: LogIncompatibilidadesPIUuLogIncompatibilidadesComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogIncompatibilidadesRoutingModule { }
