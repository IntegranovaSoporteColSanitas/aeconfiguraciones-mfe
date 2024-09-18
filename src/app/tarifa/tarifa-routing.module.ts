import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { TarifaMDIUuTarifasComponent } from './mdiu_tarifas.component';
import { TarifaPIUuTarifasComponent } from './piu_tarifas.component';

const routes: Routes = [
    { path: 'mdiu_tarifas' , component: TarifaMDIUuTarifasComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_tarifas' , component: TarifaPIUuTarifasComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarifaRoutingModule { }
