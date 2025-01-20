import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ContratosExentosFIngresoPIUuContratosExentosFIngresoComponent } from './piu_contratosexentosfingreso.component';

const routes: Routes = [
    { path: 'piu_contratosexentosfingreso' , component: ContratosExentosFIngresoPIUuContratosExentosFIngresoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratosExentosFIngresoRoutingModule { }
