import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { NovedadSIUumodificarComponent } from './siu_modificar.component';
import { NovedadSIUuDelNovedadComponent } from './siu_delnovedad.component';
import { NovedadSIUuTCREARComponent } from './siu_tcrear.component';
import { NovedadMDIUuNovedaduCausalesComponent } from './mdiu_novedad_causales.component';
import { NovedadPIUuNovedadComponent } from './piu_novedad.component';

const routes: Routes = [
    { path: 'siu_modificar' , component: NovedadSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_delnovedad' , component: NovedadSIUuDelNovedadComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tcrear' , component: NovedadSIUuTCREARComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_novedad_causales' , component: NovedadMDIUuNovedaduCausalesComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_novedad' , component: NovedadPIUuNovedadComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovedadRoutingModule { }
