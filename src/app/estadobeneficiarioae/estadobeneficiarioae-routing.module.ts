import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { EstadoBeneficiarioAESIUucrearComponent } from './siu_crear.component';
import { EstadoBeneficiarioAESIUuTMODIFICARComponent } from './siu_tmodificar.component';
import { EstadoBeneficiarioAEPIUuEstadoBeneficiarioAEComponent } from './piu_estadobeneficiarioae.component';

const routes: Routes = [
    { path: 'siu_crear' , component: EstadoBeneficiarioAESIUucrearComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodificar' , component: EstadoBeneficiarioAESIUuTMODIFICARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_estadobeneficiarioae' , component: EstadoBeneficiarioAEPIUuEstadoBeneficiarioAEComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadoBeneficiarioAERoutingModule { }
