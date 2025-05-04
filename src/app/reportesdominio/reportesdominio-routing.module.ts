import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ReportesDominioSIUumodificarComponent } from './siu_modificar.component';
import { ReportesDominioPIUuReportesDominioComponent } from './piu_reportesdominio.component';

const routes: Routes = [
    { path: 'siu_modificar' , component: ReportesDominioSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_reportesdominio' , component: ReportesDominioPIUuReportesDominioComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesDominioRoutingModule { }
