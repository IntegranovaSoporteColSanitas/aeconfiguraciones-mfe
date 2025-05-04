import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { SucursalSIUucrearComponent } from './siu_crear.component';
import { SucursalPIUuSucursalComponent } from './piu_sucursal.component';
import { SucursalPIUuSucursaluObsComponent } from './piu_sucursal_obs.component';

const routes: Routes = [
    { path: 'siu_crear' , component: SucursalSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_sucursal' , component: SucursalPIUuSucursalComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_sucursal_obs' , component: SucursalPIUuSucursaluObsComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucursalRoutingModule { }
