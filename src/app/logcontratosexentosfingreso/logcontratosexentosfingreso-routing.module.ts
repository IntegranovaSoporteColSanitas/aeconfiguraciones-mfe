import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { LogContratosExentosFIngresoPIUuLogContratosExentosFIngresComponent } from './piu_logcontratosexentosfingres.component';

const routes: Routes = [
    { path: 'piu_logcontratosexentosfingres' , component: LogContratosExentosFIngresoPIUuLogContratosExentosFIngresComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogContratosExentosFIngresoRoutingModule { }
