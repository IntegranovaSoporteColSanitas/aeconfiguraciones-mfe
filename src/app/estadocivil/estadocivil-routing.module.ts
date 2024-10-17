import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { EstadoCivilSIUucrearComponent } from './siu_crear.component';
import { EstadoCivilPIUuEstadoCivilComponent } from './piu_estadocivil.component';

const routes: Routes = [
    { path: 'siu_crear' , component: EstadoCivilSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_estadocivil' , component: EstadoCivilPIUuEstadoCivilComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadoCivilRoutingModule { }
