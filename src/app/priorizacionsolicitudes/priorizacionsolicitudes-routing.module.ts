import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { PriorizacionSolicitudesSIUuTCREARComponent } from './siu_tcrear.component';
import { PriorizacionSolicitudesSIUuTELIMINARComponent } from './siu_teliminar.component';
import { PriorizacionSolicitudesSIUuTMODIFICARComponent } from './siu_tmodificar.component';
import { PriorizacionSolicitudesPIUuPriorizacionSolicitudesComponent } from './piu_priorizacionsolicitudes.component';

const routes: Routes = [
    { path: 'siu_tcrear' , component: PriorizacionSolicitudesSIUuTCREARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_teliminar' , component: PriorizacionSolicitudesSIUuTELIMINARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodificar' , component: PriorizacionSolicitudesSIUuTMODIFICARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_priorizacionsolicitudes' , component: PriorizacionSolicitudesPIUuPriorizacionSolicitudesComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriorizacionSolicitudesRoutingModule { }
