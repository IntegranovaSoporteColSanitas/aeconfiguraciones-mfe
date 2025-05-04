import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { DetalleTarifaSIUuTCREARComponent } from './siu_tcrear.component';
import { DetalleTarifaSIUuTMODIFICARComponent } from './siu_tmodificar.component';
import { DetalleTarifaPIUuDetallesTarifaComponent } from './piu_detallestarifa.component';

const routes: Routes = [
    { path: 'siu_tcrear' , component: DetalleTarifaSIUuTCREARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodificar' , component: DetalleTarifaSIUuTMODIFICARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_detallestarifa' , component: DetalleTarifaPIUuDetallesTarifaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleTarifaRoutingModule { }
