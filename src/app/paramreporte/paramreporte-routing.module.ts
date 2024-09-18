import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ParamReporteSIUumodificarComponent } from './siu_modificar.component';
import { ParamReporteSIUuTNEWComponent } from './siu_tnew.component';
import { ParamReportePIUuDuParametrosComponent } from './piu_d_parametros.component';

const routes: Routes = [
    { path: 'siu_modificar' , component: ParamReporteSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tnew' , component: ParamReporteSIUuTNEWComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_d_parametros' , component: ParamReportePIUuDuParametrosComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParamReporteRoutingModule { }
