import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { EstadoContratoSIUucrearComponent } from './siu_crear.component';
import { EstadoContratoPIUuEstadoContratoComponent } from './piu_estadocontrato.component';

const routes: Routes = [
    { path: 'siu_crear' , component: EstadoContratoSIUucrearComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_estadocontrato' , component: EstadoContratoPIUuEstadoContratoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadoContratoRoutingModule { }
