import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { LogPriorizacionSolPIUuLogPriorizacionSolComponent } from './piu_logpriorizacionsol.component';

const routes: Routes = [
    { path: 'piu_logpriorizacionsol' , component: LogPriorizacionSolPIUuLogPriorizacionSolComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogPriorizacionSolRoutingModule { }
