import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { GrupoAsignacionNovedadSIUuTCREARComponent } from './siu_tcrear.component';
import { GrupoAsignacionNovedadSIUuTASGGRUPOComponent } from './siu_tasggrupo.component';
import { GrupoAsignacionNovedadMDIUuGrupoAsignacionNovedadComponent } from './mdiu_grupoasignacionnovedad.component';
import { GrupoAsignacionNovedadPIUuGrpAsigNovedaduDuDominioComponent } from './piu_grpasignovedad_d_dominio.component';

const routes: Routes = [
    { path: 'siu_tcrear' , component: GrupoAsignacionNovedadSIUuTCREARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tasggrupo' , component: GrupoAsignacionNovedadSIUuTASGGRUPOComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_grupoasignacionnovedad' , component: GrupoAsignacionNovedadMDIUuGrupoAsignacionNovedadComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_grpasignovedad_d_dominio' , component: GrupoAsignacionNovedadPIUuGrpAsigNovedaduDuDominioComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoAsignacionNovedadRoutingModule { }
