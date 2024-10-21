import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { PlanesSIUucrearComponent } from './siu_crear.component';
import { PlanesSIUumodificarComponent } from './siu_modificar.component';
import { PlanesPIUuPlanComponent } from './piu_plan.component';
import { PlanesPIUuPlanesuObsComponent } from './piu_planes_obs.component';

const routes: Routes = [
    { path: 'siu_crear' , component: PlanesSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: PlanesSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_plan' , component: PlanesPIUuPlanComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_planes_obs' , component: PlanesPIUuPlanesuObsComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanesRoutingModule { }
