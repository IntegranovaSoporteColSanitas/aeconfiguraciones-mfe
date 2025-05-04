import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { PeriodicidadSIUucrearComponent } from './siu_crear.component';
import { PeriodicidadSIUumodificarComponent } from './siu_modificar.component';
import { PeriodicidadPIUuPeriodicidadComponent } from './piu_periodicidad.component';

const routes: Routes = [
    { path: 'siu_crear' , component: PeriodicidadSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: PeriodicidadSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_periodicidad' , component: PeriodicidadPIUuPeriodicidadComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodicidadRoutingModule { }
