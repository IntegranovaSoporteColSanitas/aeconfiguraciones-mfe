import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { EpsSIUucrearComponent } from './siu_crear.component';
import { EpsSIUumodificarComponent } from './siu_modificar.component';
import { EpsPIUuEPSComponent } from './piu_eps.component';

const routes: Routes = [
    { path: 'siu_crear' , component: EpsSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: EpsSIUumodificarComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_eps' , component: EpsPIUuEPSComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpsRoutingModule { }
