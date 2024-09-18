import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { PaisSIUucrearComponent } from './siu_crear.component';
import { PaisPIUuPaisComponent } from './piu_pais.component';

const routes: Routes = [
    { path: 'siu_crear' , component: PaisSIUucrearComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_pais' , component: PaisPIUuPaisComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisRoutingModule { }
