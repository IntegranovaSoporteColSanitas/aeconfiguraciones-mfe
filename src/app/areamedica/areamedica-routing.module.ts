import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { AreaMedicaPIUuAreaMedicauObsComponent } from './piu_areamedica_obs.component';

const routes: Routes = [
    { path: 'piu_areamedica_obs' , component: AreaMedicaPIUuAreaMedicauObsComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaMedicaRoutingModule { }
