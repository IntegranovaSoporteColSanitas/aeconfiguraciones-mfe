import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { SeccionSIUuTCREARComponent } from './siu_tcrear.component';
import { SeccionSIUuTMODIFICARComponent } from './siu_tmodificar.component';
import { SeccionMDIUuSeccionComponent } from './mdiu_seccion.component';
import { SeccionPIUuSeccionComponent } from './piu_seccion.component';

const routes: Routes = [
    { path: 'siu_tcrear' , component: SeccionSIUuTCREARComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodificar' , component: SeccionSIUuTMODIFICARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_seccion' , component: SeccionMDIUuSeccionComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_seccion' , component: SeccionPIUuSeccionComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionRoutingModule { }
