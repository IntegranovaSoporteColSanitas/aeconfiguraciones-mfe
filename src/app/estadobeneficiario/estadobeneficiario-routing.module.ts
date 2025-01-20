import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { EstadoBeneficiarioSIUucrearComponent } from './siu_crear.component';
import { EstadoBeneficiarioSIUumodificarComponent } from './siu_modificar.component';
import { EstadoBeneficiarioPIUuEstadoBeneficiarioComponent } from './piu_estadobeneficiario.component';

const routes: Routes = [
    { path: 'siu_crear' , component: EstadoBeneficiarioSIUucrearComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: EstadoBeneficiarioSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_estadobeneficiario' , component: EstadoBeneficiarioPIUuEstadoBeneficiarioComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadoBeneficiarioRoutingModule { }
