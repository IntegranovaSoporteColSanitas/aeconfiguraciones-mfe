import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { AreaMedicaPIUuAreaMedicauNullComponent } from './piu_areamedica_null.component';

const routes: Routes = [
    { path: 'piu_areamedica_null' , component: AreaMedicaPIUuAreaMedicauNullComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaMedicaRoutingModule { }
