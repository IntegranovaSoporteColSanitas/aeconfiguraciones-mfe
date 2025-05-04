import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { GrupoAsignacionSIUuTCREARComponent } from './siu_tcrear.component';
import { GrupoAsignacionSIUuTMODIFICARComponent } from './siu_tmodificar.component';
import { GrupoAsignacionSIUuTADDUSUARIOComponent } from './siu_taddusuario.component';
import { GrupoAsignacionSIUuTDELUSUARIOComponent } from './siu_tdelusuario.component';
import { GrupoAsignacionMDIUuGrupoAsignacionComponent } from './mdiu_grupoasignacion.component';
import { GrupoAsignacionPIUuGrupoAsignacionComponent } from './piu_grupoasignacion.component';

const routes: Routes = [
    { path: 'siu_tcrear' , component: GrupoAsignacionSIUuTCREARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodificar' , component: GrupoAsignacionSIUuTMODIFICARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_taddusuario' , component: GrupoAsignacionSIUuTADDUSUARIOComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tdelusuario' , component: GrupoAsignacionSIUuTDELUSUARIOComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_grupoasignacion' , component: GrupoAsignacionMDIUuGrupoAsignacionComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_grupoasignacion' , component: GrupoAsignacionPIUuGrupoAsignacionComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoAsignacionRoutingModule { }
