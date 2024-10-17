import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { AreaMedicaUAutouComponent } from './_auto_.component';
import { AreaMedicaPIUuAutouComponent } from './piu_auto_.component';

const routes: Routes = [
    { path: '_auto_' , component: AreaMedicaUAutouComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_Auto_' , component: AreaMedicaPIUuAutouComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaMedicaRoutingModule { }
