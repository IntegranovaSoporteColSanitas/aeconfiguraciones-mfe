import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ReportesProcAlmSIUucrearComponent } from './siu_crear.component';
import { ReportesProcAlmSIUumodificarComponent } from './siu_modificar.component';
import { ReportesProcAlmMDIUuReportesProcAlmComponent } from './mdiu_reportesprocalm.component';
import { ReportesProcAlmPIUuReportesProcAlmComponent } from './piu_reportesprocalm.component';

const routes: Routes = [
    { path: 'siu_crear' , component: ReportesProcAlmSIUucrearComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: ReportesProcAlmSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_reportesprocalm' , component: ReportesProcAlmMDIUuReportesProcAlmComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_reportesprocalm' , component: ReportesProcAlmPIUuReportesProcAlmComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesProcAlmRoutingModule { }
