import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { FechaIniEPSPIUuFechaIniEPSComponent } from './piu_fechainieps.component';

const routes: Routes = [
    { path: 'piu_fechainieps' , component: FechaIniEPSPIUuFechaIniEPSComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FechaIniEPSRoutingModule { }
